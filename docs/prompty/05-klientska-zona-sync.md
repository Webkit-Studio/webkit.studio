# Prompt 5 — Obousměrný sync Notion ↔ klientská zóna

> Do nového chatu v Claude Code nad repem `webkit-studio/draft-webkit-studio`.
> Nejdřív si přečti část **Kontext**, ta je pro tebe, ne pro model.

---

# Kontext — co už vím a co jsem zjistil

Tuhle část jsem sepsal, aby další chat nezačínal od nuly a neopakoval
rozhodnutí, která už padla.

## Jak je klientská zóna postavená

| | |
|---|---|
| Framework | Astro, adaptér `@astrojs/cloudflare` |
| Běh | Cloudflare Worker přes Webflow Cloud, mount `/client` |
| Databáze | D1, tedy SQLite. Binding `DB` |
| Přihlášení | Vlastní. PBKDF2 přes WebCrypto, neprůhledný token v HttpOnly cookie |
| Oprávnění | Serverová vrstva `src/lib/access.ts`. D1 nemá RLS, schéma o právech nerozhoduje |
| Migrace | `migrations/0001_init.sql` |

Tabulky dnes: `users`, `sessions`, `projects`, `project_access`, `comments`,
`request_log`. Sekce Úkoly, Dokumenty a Poznámky jsou v rozhraní připravené,
ale nemají za sebou data.

API dnes: `login`, `logout`, `setup`, `account`, `comments`, `export/comments`,
`admin/users`, `admin/projects`, `admin/access`, `admin/password`.

**Žádný cron ani scheduled handler zatím nastavený není.** To je první věc,
kterou je potřeba ověřit — jestli Webflow Cloud vůbec pouští Cron Triggers.
Na tom stojí půlka návrhu.

## Zásadní rozhodnutí, které ušetří spoustu práce

Obousměrný sync zní jako jedna věc, ale rozpadá se na dvě a **každá má jiný
zdroj pravdy**. Když se to takhle rozdělí, zmizí devadesát procent složitosti,
protože se nikdy neřeší konflikt.

| Entita | Zdroj pravdy | Směr | Proč |
|---|---|---|---|
| Projekt, fáze, termíny | **Notion** | Notion → zóna | Řídím to já, klient to jen vidí |
| Úkoly moje | **Notion** | Notion → zóna | Klient vidí stav, nemění ho |
| Úkoly klienta | **zóna** | zóna → Notion | Klient odškrtává, já to vidím |
| Dokumenty | **Notion** | Notion → zóna | Odkazy na Drive, spravuju je já |
| Připomínky k návrhu | **zóna** | zóna → Notion | Vznikají klikáním do návrhu |
| Schválení verze | **zóna** | zóna → Notion | Klient schvaluje v zóně |
| Poznámky interní | **Notion** | nikam | Klient je nikdy nesmí vidět |

Obousměrné je to na úrovni systému. Na úrovni jednotlivého pole je každá věc
jednosměrná. **Nikdy nedovol, aby se stejné pole dalo změnit na obou stranách.**

## Možnosti, jak to technicky udělat

| Varianta | Jak | Náročnost | Riziko |
|---|---|---|---|
| **A — čtení za běhu** | Zóna se při každém zobrazení zeptá Notionu | nízká | Pomalé, Notion API má limit 3 dotazy za vteřinu |
| **B — cron pull** | Worker každých 10 minut stáhne Notion do D1 | střední | Závisí na tom, jestli Webflow Cloud pouští cron |
| **C — webhooky obousměrně** | Notion webhook → endpoint v zóně, akce v zóně → zápis do Notionu | vyšší | Nejvíc práce, ale data jsou vždy čerstvá |
| **D — Make.com scénář** | Make hlídá Notion i zónu | nízká | Free tarif 1000 operací měsíčně, u tří klientů dojde |

**Doporučení: C pro zápisy, B jako pojistka, D vůbec.**

Konkrétně:

1. **Zóna → Notion píše hned.** Klient přidá připomínku, endpoint zapíše
   do D1 a zároveň zavolá Notion API. Když to selže, uloží se do fronty
   a zkusí znovu.
2. **Notion → zóna přes webhook.** Notion umí posílat webhooky při změně
   v databázi. Endpoint v zóně přijme událost, ověří podpis a přepíše D1.
3. **Cron jednou za hodinu jako pojistka**, kdyby webhook vypadl.
   Když cron ve Webflow Cloud nejde, nahradí ho tlačítko *Načíst z Notionu*
   v administraci zóny.

## Co bude potřeba nového v databázi

```sql
-- vazba záznamu v D1 na stránku v Notionu
CREATE TABLE notion_link (
  entity      TEXT NOT NULL,   -- 'project' | 'task' | 'document' | 'comment'
  local_id    TEXT NOT NULL,
  notion_id   TEXT NOT NULL,
  synced_at   TEXT NOT NULL,
  hash        TEXT,            -- otisk obsahu, ať se nepíše zbytečně
  PRIMARY KEY (entity, local_id)
);

-- fronta zápisů, které se nepovedly napoprvé
CREATE TABLE sync_queue (
  id          TEXT PRIMARY KEY,
  smer        TEXT NOT NULL CHECK (smer IN ('do-notionu','ze-notionu')),
  entity      TEXT NOT NULL,
  payload     TEXT NOT NULL,
  pokusy      INTEGER NOT NULL DEFAULT 0,
  posledni    TEXT,
  chyba       TEXT
);
```

## Co bude stát peníze

**Nic.** Notion API je zdarma pro interní integraci. D1 má na free tarifu
5 milionů čtení denně. Cloudflare Workers 100 tisíc požadavků denně.
Webhooky Notionu jsou součástí API.

Jediná past: **Notion API má limit tři dotazy za vteřinu.** Proto se nesmí
volat při každém zobrazení stránky, ale jen při změně.

## Co je potřeba zjistit dřív, než se začne stavět

1. Pouští Webflow Cloud **Cron Triggers**? Zkus přidat `triggers.crons`
   do `wrangler.jsonc` a nasadit.
2. Pouští **odchozí `fetch`** z Workeru na `api.notion.com`? Skoro jistě ano,
   ale ověřit.
3. Umí Notion webhooky **na databázi**, nebo jen na stránku? Podle toho
   se rozhodne, jestli varianta C, nebo B.
4. Kde se bezpečně uloží **Notion token**? Ve Webflow Cloud jako proměnná
   prostředí. **Do repa nikdy.**

---

# Prompt do nového chatu

> Od téhle čáry dolů je text k zkopírování.

---

Pracuju na klientské zóně Webkit.Studio v repu `draft-webkit-studio`, složka
`client`. Je to Astro na Cloudflare Workers přes Webflow Cloud, databáze D1.
Přečti si `client/README.md`, `client/migrations/0001_init.sql` a
`client/src/lib/access.ts`, ať víš, jak to stojí.

Chci propojit zónu s Notionem tak, aby klient viděl v zóně to, co já vedu
v Notionu, a já viděl v Notionu to, co klient udělá v zóně. Klient přitom
do Notionu nikdy nedostane přístup.

## Rozdělení, které chci dodržet

Obousměrné je to na úrovni systému, ne na úrovni pole. Každá věc má jeden
zdroj pravdy a jde jedním směrem:

- **Z Notionu do zóny:** projekt, fáze, termíny, moje úkoly, dokumenty
- **Ze zóny do Notionu:** připomínky k návrhu, schválení verze, úkoly klienta
- **Nikam:** interní poznámky, ty klient nikdy neuvidí

**Nikdy nedovol, aby se stejné pole dalo měnit na obou stranách.**

## Co po tobě chci, v tomhle pořadí

### Krok 1 — ověř, co platforma umí

Než začneš cokoliv stavět, zjisti a napiš mi:

1. Pouští Webflow Cloud Cron Triggers? Zkus to a řekni výsledek.
2. Projde odchozí `fetch` na `api.notion.com`?
3. Umí Notion webhooky na změnu v databázi, nebo jen na stránce?
4. Kam se ve Webflow Cloud ukládají tajné proměnné?

**Nestav nic, dokud tohle nevíš.** Podle odpovědí se liší celý návrh.

### Krok 2 — návrh, ne kód

Napiš mi návrh na jednu stránku: jaké tabulky přibudou, jaké endpointy,
co se stane, když sync selže, a jak poznám, že se rozešel.

Počítej s tím, že zápis do Notionu může selhat. Chci frontu a opakování,
ne ztracená data.

### Krok 3 — teprve pak stav

Postupně, po jedné entitě. Začni **připomínkami ze zóny do Notionu**,
protože ty mi chybí nejvíc a jsou nejjednodušší — jdou jen jedním směrem.

Po každé entitě: migrace, testy, lokální ověření přes `wrangler --local`,
commit. Nasazení až po mém schválení.

## Pravidla, která platí vždycky

- **Token do repa nikdy.** Ani do kódu, ani do `.env`, ani do commitu.
  `.dev.vars` je gitignorovaný a zůstane lokální.
- **Oprávnění řeší server.** D1 nemá RLS. Každý endpoint musí sám ověřit,
  že uživatel na ta data má právo. Nikdy nespoléhej na to, že to ošetří rozhraní.
- **Klient nesmí vidět cizí projekt.** Tohle si ověř testem, ne přečtením kódu.
- **Notion API má limit tři dotazy za vteřinu.** Nevolej ho při zobrazení
  stránky, jen při změně nebo v dávce.
- **Migrace jsou dopředné.** Žádné `DROP TABLE` na existujících datech.

## Na co se mě zeptej

Cokoliv, co si musíš domýšlet. Očíslovaně, ať odpovídám jedním řádkem.
A když si myslíš, že celý přístup je špatný, řekni to hned na začátku,
ne až po dvou dnech práce.
