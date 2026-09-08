# Webflow homepage — zdroje

Co je v tomhle adresáři, je zdroj pravdy. Do Webflow se to dostává přes MCP,
ne ručním kopírováním.

| Soubor | Kam patří ve Webflow |
|---|---|
| `demo.css` | `<style>` na začátku HTML Embedu v sekci `#demo` |
| `demo.html` | markup za tím `<style>` ve stejném embedu |
| `page-home.js` | HTML Embed na konci stránky (za patičkou), zabalený v `<script>` |

## Proč embed a ne vlastní kód stránky

Webflow Data API odmítá `<script>` ve volném kódu stránky i webu (HTTP 406).
Projde jen `<style>`. Logika stránky proto žije v HTML Embedu na konci stránky.

CSS je v embedu, a ne v hlavičce, protože vlastní kód stránky má strop
10 000 znaků a `demo.css` je delší. Embed limit nemá.

## Po každé změně

1. Uprav soubor tady, commitni.
2. Přenes obsah do Webflow (`data_element_settings_tool > set_settings`, klíč `code`).
3. Publikuj jen na `webkit-studio.webflow.io`, zkontroluj, teprve pak na doménu.

## Odkud to pochází

`demo.css` a `demo.html` jsou odvozené z prototypu `site/webkit.css`
a `site/index.html` (verze v8). Rozdíly:

- `@container` → `@media`, `cqi` → `vw` (Webflow nemá container na `main`)
- všechny selektory jsou pod `#demo`, ať nic neuteče do zbytku webu
- `header.top` → `.navbar_component`
- obrázky míří na Webflow CDN, ne na `assets/`
