# Analytika: co je nasazené a jak s tím pracovat

Stav k 8. 9. 2026. Ověřeno na `webkit-studio.webflow.io`.

---

## TL;DR

Měření je nasazené a **funguje podle zákona**: bez souhlasu se neuloží ani jedna
cookie, GA4 ani Clarity se vůbec nenačtou. Ověřil jsem to měřením, ne přečtením kódu.

**GTM je nasazený.** Kontejner `GTM-MQW8FHWR` se načítá na všech stránkách.
Tagy v něm ale musíš jednou naimportovat — do té doby GA4 ani Clarity neměří.
Import je jeden soubor a dvě minuty, návod je na konci.

---

## Co běží

| Nástroj | Kdy se načte | Cookies | Co uvidíš |
|---|---|---|---|
| **Cloudflare Web Analytics** | vždy | žádné | Návštěvy, zdroje, stránky, rychlost z terénu |
| **Google Tag Manager** | vždy | žádné | Nic sám neměří, jen spouští tagy níž |
| **Google Analytics 4** | tag v GTM, až po souhlasu | `_ga`, `_ga_ZREE72G532` | Chování, cesty, konverze |
| **Microsoft Clarity** | tag v GTM, až po souhlasu | `_clck`, `_clsk` | Nahrávky obrazovky, heatmapy, rage clicks |

Cloudflare souhlas nepotřebuje, protože neukládá nic do prohlížeče a neidentifikuje
návštěvníka. To je celý důvod, proč ho tam mám: **i když nikdo nesouhlasí, pořád
vidíš návštěvnost.**

## Jak to je poskládané

Tři skripty registrované na úrovni webu, takže běží na všech stránkách včetně
budoucích. Do vlastního kódu stránky se nedají vložit, Webflow API odmítá `<script>`
s chybou 406, takže jsou vložené přes registrované skripty.

| Skript | Kde | Co dělá |
|---|---|---|
| `wkConsentGtm` | hlavička | Consent Mode v2 na *odmítnuto*, Cloudflare beacon, pak načte GTM |
| `wkCookieBar` | patička | Vykreslí lištu, uloží volbu, po souhlasu pošle `consent update` |
| `wkFormsDl` | patička | Placeholdery ve formuláři + pošle `form_submit` do dataLayer |

Pořadí v `wkConsentGtm` je celý vtip: `dataLayer` a `gtag` stub → souhlas na
*odmítnuto* → Cloudflare → souhlas z minulé návštěvy → **teprve pak GTM**.
Kdyby se GTM načetl dřív než výchozí souhlas, tagy by na chvíli běžely bez omezení.

**Nepřepisuj registrované skripty přes API — Webflow to neumí** (`update_registered_script`
vrací 404). Zaregistruj novou verzi pod novým názvem a přepni na ni přes
`set_site_scripts`. Proto ta „divná" jména `wkConsentGtm` a `wkFormsDl`.

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
- **Po kliknutí na Souhlasím:** do `dataLayer` padne `consent update`.
  Cookies: **zatím žádné, protože kontejner je prázdný.** Jakmile
  naimportuješ tagy a dáš Publish, naskočí `_ga`, `_ga_ZREE72G532`, `_clck`, `_clsk`.

Poslední měření na produkci (`webkit.studio`, 8. 9. 2026):

```
PŘED SOUHLASEM   cookies: 0
                 dataLayer: consent default, js, gtm.js, gtm.dom, gtm.load
                 google-analytics: 0   clarity: 0   cloudflare: 2
PO SOUHLASU      cookies: 0
                 dataLayer: + consent update
```

## Lišta se souhlasem

Dvě tlačítka, obě stejně dostupná. Žádné předzaškrtnuté volby, žádné schované
*odmítnout* pod odkazem. Kdyby odmítnutí bylo těžší než souhlas, nebyl by to
platný souhlas.

Odkaz z lišty vede na **/osobni-udaje**, kterou jsem vytvořil. Je tam napsané,
co sbírám z formuláře, proč, jak dlouho to držím a komu se to dostane.

> **Dvě místa v ní jsou žlutě označená jako `doplnit`: IČO a sídlo.**
> Bez nich stránka není platná. Pošli mi je, doplním je za minutu.

## Co změřit dál

V kontejneru už jsou dvě události (`generate_lead` z formuláře a `cta_click`).
Až budeš mít data za pár týdnů, dávají smysl tyhle:

| Událost | Kdy | Co ti řekne |
|---|---|---|
| `demo_fix` | Klik na opravu v ukázce | Jestli ukázka funguje |
| `demo_complete` | Opraveno všech šest | Kolik lidí projde celou ukázku |
| `process_open` | Rozbalení bloku v Postupu | Co lidi na postupu zajímá |
| `scroll_75` | 75 % stránky | Kde lidé odpadají |

Neděl to hned. Nejdřív chvíli sbírej základ, ať vidíš, co má vůbec smysl měřit.

---

# Google Tag Manager

Kontejner **GTM-MQW8FHWR** už na webu běží. Chybí v něm tagy — ty si
naimportuješ z připraveného souboru.

## Co udělat (dvě minuty)

1. Otevři [tagmanager.google.com](https://tagmanager.google.com), vyber kontejner **GTM-MQW8FHWR**.
2. **Admin → Import Container**.
3. Nahraj soubor [`docs/gtm/webkit-studio-gtm.json`](gtm/webkit-studio-gtm.json).
4. Workspace: **Existing → Default Workspace**. Import option: **Merge → Overwrite conflicting tags**.
   (Kontejner je prázdný, takže na nic nenarazíš. Overwrite je tam pro jistotu.)
5. Zkontroluj náhled importu — má přijít **4 tagy, 3 spouštěče, 1 proměnná**.
6. **Confirm**, pak nahoře vpravo **Preview**.
7. V Preview projdi web: odmítni cookies → nesmí se spustit **nic**. Dej souhlas →
   musí naskočit *GA4 – konfigurace* a *Microsoft Clarity*. Odešli formulář →
   musí naskočit *GA4 – odeslání formuláře*.
8. Teprve pak **Submit → Publish**.

Od okamžiku publikace měří GA4 i Clarity. Do té doby ne — Cloudflare běží pořád.

> **Import jsem nemohl vyzkoušet**, do tvého GTM nevidím. Kdyby ho odmítl,
> napiš mi chybu. Ruční postup je stejný a je níž.

## Co v tom souboru je

| Tag | Typ | Spustí se | Podmínka souhlasu |
|---|---|---|---|
| GA4 – konfigurace | Google Tag `G-ZREE72G532` | všechny stránky | `analytics_storage` |
| Microsoft Clarity | Custom HTML | všechny stránky | `analytics_storage` |
| GA4 – odeslání formuláře | GA4 Event `generate_lead` | událost `form_submit` | `analytics_storage` |
| GA4 – klik na Rezervovat hovor | GA4 Event `cta_click` | klik na odkaz s `/poptavka` | `analytics_storage` |

**Proč `form_submit` z dataLayer a ne vestavěný spouštěč Form Submission:**
Webflow odesílá formuláře AJAXem a žádnou událost nevystaví. Vestavěný spouštěč
odeslání často mine, nebo se spustí i u formuláře, který spadl na chybu. Skript
`wkFormsDl` proto hlídá, kdy se objeví Webflow blok „děkujeme", a teprve pak
pošle do dataLayer:

```js
dataLayer.push({event:'form_submit', form_name:'…', form_page:'/…'})
```

To je jediné znamení, že poptávka opravdu prošla.

## Kdybys to chtěl nasadit ručně

Nemusíš — kód už na webu je. Tohle je pro případ, že bys web stěhoval jinam
nebo chtěl vědět, co přesně se do stránky vkládá.

**Hlavička** (Site settings → Custom code → Head code). Musí být **první**, dřív
než cokoli jiného:

```html
<script>
(function(){
var K='wk-consent';
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments)}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('js',new Date());
var b=document.createElement('script');b.defer=true;b.src='https://static.cloudflareinsights.com/beacon.min.js';
b.setAttribute('data-cf-beacon','{"token":"63f4e42712ab4802adc333753f2078a3"}');document.head.appendChild(b);
window.wkGrant=function(){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'})};
try{if(localStorage.getItem(K)==='all')window.wkGrant()}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f)})(window,document,'script','dataLayer','GTM-MQW8FHWR');
})();
</script>
```

**Patička** (Footer code) — cookie lišta a měření formulářů. Zdroj je v repu:
`site/webflow/analytika/2-cookiebar.js` a `site/webflow/analytika/3-forms.js`,
obojí zabalit do `<script>`. Styly lišty jsou v
`site/webflow/analytika/site-head.html`.

**Standardní `<noscript>` iframe od Googlu jsem vynechal schválně.** Je určený
pro návštěvníky s vypnutým JavaScriptem, jenže GA4, Clarity i celý souhlas
běží na JavaScriptu. Ten iframe by nezměřil nic a jen přidal požadavek.

## Tři pojmy, které stačí znát

| Pojem | Česky | Příklad |
|---|---|---|
| **Tag** | Co se má poslat | Odeslat návštěvu stránky do GA4 |
| **Trigger** | Kdy se to má poslat | Když někdo klikne na tlačítko |
| **Variable** | Odkud vzít hodnotu | Text tlačítka, na které se kliklo |

Vždycky v tomhle pořadí: *když se stane trigger, pošle se tag, a do tagu se
doplní variable*.

## Na co si dát pozor

- **Nikdy nespouštěj tag bez consent podmínky.** To je nejčastější chyba
  a přesně kvůli ní chodí pokuty. Ve všech čtyřech tazích v souboru už podmínka je.
- **Publikuj až po Preview.** Submit je živý okamžitě.
- **GA4 nedávej zároveň do GTM i přímo do stránky.** Přesně proto jsem přímé
  napojení z webu odebral. Kdyby běželo obojí, každá návštěva by se počítala dvakrát.
- **Verze se dají vrátit.** Ve **Versions** klikneš na starší verzi a dáš Publish.
  Nic není nevratné.
