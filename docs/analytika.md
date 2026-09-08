# Napojení analytiky — co od tebe potřebuju

## Nejdřív doporučení, protože se mi tvoje zadání nelíbí celé

Ptal ses, co potřebuju pro napojení analytiky. Odpovím, ale nejdřív ti řeknu,
že **GA4 pravděpodobně nepotřebuješ** a stojí tě banner na souhlas s cookies,
který ti sníží konverzi.

Jsi freelancer se čtyřmi projekty a webem, který má přinést schůzky.
Nepotřebuješ atribuční model. Potřebuješ vědět tři věci:

1. Kolik lidí přišlo a odkud.
2. Kam došli a kde odešli.
3. Kolik z nich kliklo na rezervaci hovoru.

Na to stačí kombinace, která **nepotřebuje žádný souhlas s cookies**:

| Nástroj | Co dá | Cookies | Cena |
|---|---|---|---|
| **Cloudflare Web Analytics** | Návštěvy, zdroje, stránky, Core Web Vitals z terénu | žádné | zdarma |
| **Search Console** | Dotazy, pozice, indexace, terénní CWV | žádné | zdarma |
| **Microsoft Clarity** | Nahrávky, heatmapy, rage clicks | ano, souhlas nutný | zdarma |

Bez Clarity nemusíš mít banner vůbec. S Clarity ho mít musíš, ale za nahrávky
obrazovky to stojí — uvidíš, kde lidé na tvém webu tápou.

**Moje doporučení:** začni Cloudflare Web Analytics a Search Console. Když po
měsíci budeš chtít vidět, proč lidé odcházejí, přidáme Clarity i s bannerem.
GA4 přidáme, až budeš platit za reklamu. Do té doby je to jen práce navíc.

Když na GA4 trváš, udělám to. Ale chci, abys věděl, co za to platíš.

---

## Co potřebuju — varianta A, doporučená

### 1. Cloudflare Web Analytics

1. Založ si účet na [dash.cloudflare.com](https://dash.cloudflare.com) (zdarma,
   doménu tam převádět nemusíš).
2. Vlevo **Analytics & Logs → Web Analytics → Add a site**.
3. Zadej `webkit.studio`.
4. Dostaneš útržek kódu s **tokenem**. Pošli mi ten token, vypadá takhle:

```
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "abc123..."}'></script>
```

Stačí mi ten řetězec v `token`.

### 2. Search Console

1. [search.google.com/search-console](https://search.google.com/search-console)
   → **Přidat službu → Doménová**.
2. Vybere ti to ověření přes DNS. Dá ti **TXT záznam**.
3. Ten záznam musíš přidat u registrátora domény, tam já nemám přístup.
   Pošli mi ho a napíšu ti přesně, kam ho vložit — nebo mi řekni,
   kde máš doménu, a projdeme to spolu.

Doménové ověření je lepší než URL prefix, protože pokryje i `www` a `/client`.

### 3. Až budeš chtít nahrávky — Clarity

1. [clarity.microsoft.com](https://clarity.microsoft.com) → **New project**.
2. Název `webkit.studio`, typ **Website**.
3. V **Settings → Setup** je **Project ID**, deset znaků. Pošli mi ho.

Zároveň mi řekni, jestli chceš, abych postavil banner na souhlas. Bez něj
Clarity nasadit nemůžu.

---

## Co potřebuju — varianta B, když chceš GA4

Všechno z varianty A plus:

### GA4 Measurement ID

1. [analytics.google.com](https://analytics.google.com) → **Správce**.
2. Vytvoř službu (property) `Webkit.Studio`, časové pásmo Praha, měna CZK.
3. **Datové proudy → Web**, adresa `https://webkit.studio`.
4. Nahoře vpravo uvidíš **ID měření** ve tvaru `G-XXXXXXXXXX`. Pošli mi ho.

**Nepotřebuju** přístup do tvého účtu, jen to ID.

### Rozhodnutí: GTM, nebo přímo?

Když nemáš v plánu měřit desítky věcí a napojovat reklamní systémy,
**nedávej tam Google Tag Manager**. Je to další vrstva, další skript
a další místo, kde se něco rozbije. Přímé napojení GA4 stačí.

---

## Co s tím udělám já

Jakmile mi pošleš ID, postavím tohle:

1. **Skripty do Webflow** přes API, ty nekopíruješ nic.
2. **Consent Mode v2**, pokud přidáme Clarity nebo GA4. Výchozí stav je
   odmítnuto, po souhlasu se přepne. Bez souhlasu se neuloží žádná cookie.
3. **Banner na souhlas** ve vizuálu webu, ne šablona z pluginu.
   Dvě tlačítka: *Jen nezbytné* a *Souhlasím*. Žádné předzaškrtnuté volby,
   odmítnutí stejně dostupné jako souhlas — jinak to není platný souhlas.
4. **Události**, které skutečně něco říkají:

| Událost | Kdy se pošle | Proč ji chci |
|---|---|---|
| `cta_click` | Klik na Rezervovat úvodní hovor | Hlavní konverze |
| `demo_fix` | Klik na opravu v interaktivní ukázce | Zjistím, jestli ukázka funguje |
| `demo_complete` | Opraveno všech šest | Kolik lidí projde celou ukázku |
| `process_open` | Rozbalení bloku v Postupu | Co lidi na postupu zajímá |
| `project_view` | Zobrazení projektu | Který projekt táhne |
| `form_submit` | Odeslání poptávky | Skutečná konverze |
| `scroll_75` | 75 % stránky | Kde lidé odpadají |

5. **Kontrola po nasazení**: ověřím, že se události posílají, že se bez souhlasu
   neukládá cookie a že to nezhoršilo rychlost.

---

## Jedna věc, kterou udělej hned, ještě než mi něco pošleš

**Ověř si web v Search Console.** Je to jediný nástroj, který ti řekne, jestli
tě Google vůbec vidí, a sbírá terénní data o rychlosti. Čím dřív to zapneš,
tím dřív budeš mít historii.

Zbytek počká.
