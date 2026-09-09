# Webflow — zdroje stránek

Co je v tomhle adresáři, je zdroj pravdy. Do Webflow se to dostává přes MCP,
ne ručním kopírováním.

| Soubor | Kam patří ve Webflow |
|---|---|
| `demo.css` | `<style>` na začátku HTML Embedu v sekci `#demo` |
| `demo.html` | markup za tím `<style>` ve stejném embedu |
| `page-home.js` | HTML Embed na konci stránky (za patičkou), zabalený v `<script>` |
| `page.css` | vlastní kód stránky, hlavička (`set_page_freeform_code`) — homepage |
| `page-kontakt.css` | totéž, ale stránka `/kontakt` |
| `analytika/site-head.html` | vlastní kód webu, hlavička (`set_site_freeform_code`) |
| `analytika/1-consent.js` | registrovaný skript `wkconsentgtm`, hlavička |
| `analytika/2-cookiebar.js` | registrovaný skript `wkcookiebar`, patička |
| `analytika/3-forms.js` | registrovaný skript `wkformsnames`, patička |

## Co je v hlavičce stránky kromě CSS

Před `<style>` stojí na každé veřejné stránce dva řádky, které v repu nemají
vlastní soubor, protože to není kód, ale metadata:

```html
<link rel="canonical" href="https://webkit.studio/">
<meta property="og:url" content="https://webkit.studio/">
```

Webflow ani jedno negeneruje samo. Bez canonical by se `?utm_source=linkedin`
mohl zaindexovat jako druhá adresa téhle stránky — a odkazy z LinkedInu UTM
parametry nesou skoro vždycky. Na `/osobni-udaje` je totéž s její adresou.

Když se hlavička přenasazuje, musí jít nahoru **i tyhle dva řádky** — přepisuje
se celý blok najednou.

## Stránka /kontakt

Vznikla duplikací homepage. **Duplikace nepřenáší vlastní kód stránky** —
hlavička i patička nové stránky přišly prázdné, i když embed na konci
stránky se zkopíroval. Když se tedy zakládá další stránka duplikací, patří
mezi první kroky `get_page_freeform_code` a doplnění hlavičky.

Stránka má vlastní `page-kontakt.css` místo celého `page.css`. Nese jen to,
co tahle stránka používá: proměnné, odsazení sekcí, odhalování při scrollu
a sekci `#kontakt`. Pravidla pro `#hero`, `#brzdi`, `#demo` a `#postup` by
tu byly mrtvá váha.

Skladba sekcí: `#kontakt` (formulář) → `#recenze` → `#faq` → `#vyzva`.
Recenze, FAQ a výzva jedou na stejném pozadí, takže plné odsazení drží jen
okraje toho bloku — jinak mezi nimi vznikne prázdné místo přes dvě obrazovky.

FAQ je nativní `<details>`/`<summary>`, žádný JavaScript. `.reviews_grid`
má breakpointy `medium` (dva sloupce) a `small` (jeden); bez nich tři karty
roztáhly mobilní rozvržení na 555 px a zmenšily celou stránku.

Odkazy v hlavičce míří na `/#sluzby`, `/#postup`, `/#projekty` — na téhle
stránce ty sekce nejsou. Pozor: `set_attributes` na `href` u odkazu selže
vnitřní chybou, musí se použít `set_link`.

## Proč embed a ne vlastní kód stránky

Webflow Data API odmítá `<script>` ve volném kódu stránky i webu (HTTP 406).
Projde jen `<style>` a `<link rel=preload>`. Logika stránky proto žije
v HTML Embedu na konci stránky, skripty pro souhlas jsou registrované
skripty (`register_inline_script`, strop 2 000 znaků).

Styly ukázky jsou v embedu, a ne v hlavičce, protože vlastní kód stránky má
strop 10 000 znaků a `demo.css` je delší. Embed limit nemá.

## Dvě pasti, na které jsme už jednou naletěli

**Kolize tříd.** Webflow má vlastní třídu `.tag` (štítky u projektů) a ta
vnucovala štítkům v ukázce `white-space:nowrap`, rámeček a verzálky — text
z bubliny vytékal a nedal se přečíst. Uvnitř ukázky se proto jmenují `.dtag`.
Než v embedu přidáš novou třídu, projeď si ji proti `webkit-studio.webflow.shared.*.css`.

**Registrované skripty nejdou přepsat.** `update_registered_script` vrací 404.
Novou verzi je potřeba zaregistrovat pod novým názvem (`register_inline_script`)
a přepnout na ni přes `set_site_scripts`. Odtud jména `wkConsentGtm` a `wkFormsNames`. Mazat staré registrace taky nejde
(`delete_registered_script` vrací 400), nepoužité verze proto v seznamu zůstávají.
Limit zdrojáku je 2 000 znaků.

**Formulářová pole.** Webflow publikuje `name="field"`, `"field-2"` a poptávka
pak chodí do e-mailu jako „Field: …". Nastavení Name přes API se do publikovaného
HTML nepropíše a `set_attributes` na formulářová pole vrací chybu. Názvy proto
přepisuje skript `3-forms.js` za běhu — Webflow serializuje formulář z DOM
až při odeslání, takže se to na server dostane správně.

**Škálování.** `.mac-pg` je 1200 px široká a škáluje se `transform: scale()`.
Štítky jsou poznámky **nad** mockem, ne jeho součást, takže se s ním zvětšovat
nemají: `fit()` nastavuje `--tf`, `--tp` a `--tw` obráceně k měřítku, aby měly
na obrazovce pořád ~13,5 px. Výška mocku není konstanta (mění se, jak uživatel
opravuje), proto se před každým přepočtem měří `pg.offsetHeight`.

## Po každé změně

1. Uprav soubor tady, commitni.
2. Přenes obsah do Webflow (`data_element_settings_tool > set_settings`, klíč `code`;
   nebo `data_scripts_tool > set_page_freeform_code`).
3. Publikuj jen na `webkit-studio.webflow.io`, změř, teprve pak na doménu.

Měřit, ne odhadovat: Chromium se přes proxy nedostane na žádný host, takže
harness v `scratchpad/wf/` tahá odpovědi curlem a podstrkuje je přes
Playwright `route()`. Pozor na dvě chyby, které už jednou zkreslily čísla:
URL nahrazuj od nejdelší k nejkratší (jinak kratší přepíše prefix delší)
a lokální server musí komprimovat, jinak Lighthouse počítá nekomprimované CSS.

## Odkud to pochází

`demo.css` a `demo.html` jsou odvozené z prototypu `site/webkit.css`
a `site/index.html` (verze v8). Rozdíly:

- `@container` → `@media`, `cqi` → `vw` (Webflow nemá container na `main`)
- všechny selektory jsou pod `#demo`, ať nic neuteče do zbytku webu
- `header.top` → `.navbar_component`
- obrázky míří na Webflow CDN, ne na `assets/`
- štítky `.tag` → `.dtag` (viz kolize tříd výš)
