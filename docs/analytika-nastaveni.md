# Analytika: co je nasazené a jak s tím pracovat

Stav k 8. 9. 2026. Ověřeno na `webkit-studio.webflow.io`.

---

## TL;DR

Měření je nasazené a **funguje podle zákona**: bez souhlasu se neuloží ani jedna
cookie, GA4 ani Clarity se vůbec nenačtou. Ověřil jsem to měřením, ne přečtením kódu.

**GTM jsem ti na web nedal.** Vysvětlení a návod, jak ho zapnout, až ho budeš chtít,
je na konci.

---

## Co běží

| Nástroj | Kdy se načte | Cookies | Co uvidíš |
|---|---|---|---|
| **Cloudflare Web Analytics** | vždy | žádné | Návštěvy, zdroje, stránky, rychlost z terénu |
| **Google Analytics 4** | až po souhlasu | `_ga`, `_ga_ZREE72G532` | Chování, cesty, konverze |
| **Microsoft Clarity** | až po souhlasu | `_clck`, `_clsk` | Nahrávky obrazovky, heatmapy, rage clicks |

Cloudflare souhlas nepotřebuje, protože neukládá nic do prohlížeče a neidentifikuje
návštěvníka. To je celý důvod, proč ho tam mám: **i když nikdo nesouhlasí, pořád
vidíš návštěvnost.**

## Jak to je poskládané

Tři skripty registrované na úrovni webu, takže běží na všech stránkách včetně
budoucích. Do vlastního kódu stránky se nedají vložit, Webflow API odmítá `<script>`
s chybou 406, takže jsou vložené přes registrované skripty.

| Skript | Kde | Co dělá |
|---|---|---|
| `wkConsent` | hlavička | Nastaví Consent Mode v2 na *odmítnuto*, načte Cloudflare, připraví funkci pro zapnutí zbytku |
| `wkCookieBar` | patička | Vykreslí lištu, uloží volbu, po souhlasu zapne GA4 a Clarity |
| `wkForms` | patička | Drobnost: přepíše výchozí texty ve formuláři |

Zdroje jsou v repu: `site/webflow/analytika/`.

### Consent Mode v2

Než se cokoliv načte, pošle se Googlu tohle:

```
ad_storage: denied
ad_user_data: denied
ad_personalization: denied
analytics_storage: denied
functionality_storage: granted
security_storage: granted
```

Po kliknutí na *Souhlasím* se první čtyři přepnou na `granted` a teprve pak se
načte GA4 a Clarity. Volba se ukládá do `localStorage` pod klíčem `wk-consent`.

### Co jsem ověřil měřením

Načetl jsem stránku v čistém prohlížeči a sledoval síťové požadavky a cookies:

- **Před souhlasem:** jediný odchozí požadavek na měření byl Cloudflare beacon.
  Cookies: **žádné**.
- **Po kliknutí na Souhlasím:** naběhl `googletagmanager.com/gtag/js`,
  `clarity.ms/tag/yf3smugrpy` a odeslal se první `collect`.
  Cookies: `_ga`, `_ga_ZREE72G532`, `_clck`, `_clsk`.

## Lišta se souhlasem

Dvě tlačítka, obě stejně dostupná. Žádné předzaškrtnuté volby, žádné schované
*odmítnout* pod odkazem. Kdyby odmítnutí bylo těžší než souhlas, nebyl by to
platný souhlas.

Odkaz z lišty vede na **/osobni-udaje**, kterou jsem vytvořil. Je tam napsané,
co sbírám z formuláře, proč, jak dlouho to držím a komu se to dostane.

> **Dvě místa v ní jsou žlutě označená jako `doplnit`: IČO a sídlo.**
> Bez nich stránka není platná. Pošli mi je, doplním je za minutu.

## Co změřit dál

Až budeš mít data za pár týdnů, doplním do GA4 vlastní události. Tyhle dávají smysl:

| Událost | Kdy | Co ti řekne |
|---|---|---|
| `cta_click` | Klik na Rezervovat úvodní hovor | Hlavní konverze |
| `form_submit` | Odeslání poptávky z kontaktu | Skutečná konverze |
| `demo_fix` | Klik na opravu v ukázce | Jestli ukázka funguje |
| `demo_complete` | Opraveno všech šest | Kolik lidí projde celou ukázku |
| `process_open` | Rozbalení bloku v Postupu | Co lidi na postupu zajímá |
| `scroll_75` | 75 % stránky | Kde lidé odpadají |

Neděl to hned. Nejdřív chvíli sbírej základ, ať vidíš, co má vůbec smysl měřit.

---

# Google Tag Manager

## Proč ho zatím nemáš na webu

Poslal jsi mi kontejner `GTM-MQW8FHWR` a zároveň napsal, že GTM neumíš vůbec.
Prázdný kontejner na webu je jen skript navíc, který nic neměří a zpomaluje
načítání. Proto tam zatím není.

**Není to odmítnutí.** Až budeš chtít GTM používat, přepnu to za deset minut:
z webu odeberu přímé napojení GA4 a Clarity a dám tam kontejner. Tenhle návod
je na to, abys věděl, do čeho jdeš.

## K čemu GTM je

Bez GTM: každý nový nástroj a každou novou událost musí někdo napsat do kódu webu.

S GTM: do kódu webu se jednou vloží kontejner a všechno ostatní pak zapínáš
a vypínáš v jeho rozhraní, bez zásahu do webu.

**Kdy se to vyplatí:** až budeš měřit víc než tři čtyři věci, nebo až budeš
pouštět reklamu a potřebovat konverzní kódy.

**Kdy se to nevyplatí:** teď. Máš tři nástroje a nulu událostí.

## Tři pojmy, které stačí znát

| Pojem | Česky | Příklad |
|---|---|---|
| **Tag** | Co se má poslat | Odeslat návštěvu stránky do GA4 |
| **Trigger** | Kdy se to má poslat | Když někdo klikne na tlačítko |
| **Variable** | Odkud vzít hodnotu | Text tlačítka, na které se kliklo |

Vždycky to jde v tomhle pořadí: *když se stane trigger, pošle se tag, a do tagu
se doplní variable*.

## Jak ho nastavit, až budeš chtít

### 1. Základní nastavení souhlasu

V GTM otevři **Admin → Container Settings** a zapni **Additional Consent Checks**.
Bez toho by GTM střílel tagy i bez souhlasu a celá práce, kterou jsem udělal, by
byla k ničemu.

### 2. GA4 tag

- **Tags → New → Google Tag**
- Tag ID: `G-ZREE72G532`
- Trigger: **Initialization – All Pages**
- V **Consent Settings** zaškrtni *Require additional consent* a přidej
  `analytics_storage`

### 3. Clarity tag

- **Tags → New → Custom HTML**
- Vlož skript Clarity (najdeš ho v `site/webflow/analytika/1-consent.js`)
- Trigger: **All Pages**
- Consent Settings: `analytics_storage`

### 4. Událost na hlavní tlačítko

- **Triggers → New → Click – All Elements**
- Podmínka: *Click Text* obsahuje `Rezervovat úvodní hovor`
- **Tags → New → GA4 Event**, název události `cta_click`, tenhle trigger

### 5. Než to pustíš

Zmáčkni **Preview**, otevři web a projdi ho. Musíš vidět, že se tagy spustí,
až když dáš souhlas, a ne dřív. Teprve pak **Submit**.

### 6. Řekni mi to

Až budeš mít kontejner připravený, napiš mi. Z webu odeberu přímé napojení
GA4 a Clarity a nasadím kontejner. Kdybych to udělal dřív, měřilo by se všechno
dvakrát a čísla by byla nesmysl.

## Na co si dát pozor

- **Nikdy nespouštěj tag na All Pages bez consent podmínky.** To je nejčastější
  chyba a přesně kvůli ní chodí pokuty.
- **Publikuj až po Preview.** Submit je živý okamžitě.
- **Verze se dají vrátit.** Když něco pokazíš, ve **Versions** klikneš na starší
  verzi a dáš Publish. Nic není nevratné.
