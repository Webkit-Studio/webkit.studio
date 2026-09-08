# Webflow homepage — zdroje

Co je v tomhle adresáři, je zdroj pravdy. Do Webflow se to dostává přes MCP,
ne ručním kopírováním.

| Soubor | Kam patří ve Webflow |
|---|---|
| `demo.css` | `<style>` na začátku HTML Embedu v sekci `#demo` |
| `demo.html` | markup za tím `<style>` ve stejném embedu |
| `page-home.js` | HTML Embed na konci stránky (za patičkou), zabalený v `<script>` |
| `page.css` | vlastní kód stránky, hlavička (`set_page_freeform_code`) |
| `analytika/site-head.html` | vlastní kód webu, hlavička (`set_site_freeform_code`) |
| `analytika/1-consent.js` | registrovaný skript `wkconsentgtm`, hlavička |
| `analytika/2-cookiebar.js` | registrovaný skript `wkcookiebar`, patička |
| `analytika/3-forms.js` | registrovaný skript `wkformsdl`, patička |

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
a přepnout na ni přes `set_site_scripts`. Odtud jména `wkConsentGtm` a `wkFormsDl`.
Limit zdrojáku je 2 000 znaků.

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
