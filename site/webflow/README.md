# Webflow — zdroje stránek

Zdroj pravdy je tenhle adresář. Webflow si soubory **tahá z GitHubu přes
jsDelivr**, nekopírují se do něj ručně. Nasazení je `git push`.

## Jak se to nasazuje

```
uprav .css nebo .js   →   python3 site/webflow/build.py   →   git push
```

Po pushi doběhne GitHub Action `jsdelivr-purge`, vyčistí cache CDN a ověří,
že vrací to samé, co je v repu. Na webu je změna do pár vteřin. Ve Webflow
se nesahá na nic.

## Co je kde

| Zdroj | Co obsahuje | Kam se sestaví |
|---|---|---|
| `page.css` | proměnné, svislý rytmus, hero, Brzdí, ukázka, Kontakt | `dist/global.css` + `dist/home.css` |
| `page-late.css` | záře pod výzvou, rychlý kontakt, patička, Postup | `dist/global.css` + `dist/home.css` |
| `page-kontakt.css` | odsazení sekcí stránky /kontakt, FAQ | `dist/global.css` + `dist/kontakt.css` |
| `page-home.js` | hero, Brzdí, ukázka, Služby + společné bloky | `dist/global.js` + `dist/home.js` |
| `demo.css`, `demo.html` | interaktivní ukázka | zůstávají v HTML Embedu v sekci `#demo` |
| `analytika/*` | souhlas, cookie lišta, jména polí | registrované skripty ve Webflow |

Dělicí čára vede podle značek přímo ve zdrojích:

```css
/* @global promenne */
   … tohle půjde do global.css a platí pro celý web …
/* @endglobal */
```

Co je mezi značkami, použije víc stránek. Co není, patří jen té jedné.
`dist/` se needituje, přepíše ho build.

## Co je vložené ve Webflow

**Site settings → Custom code → Head code** (vedle theme-color a preloadu písem):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/webkit-studio/webkit-studio@main/site/webflow/dist/global.css">
```

**Site settings → Custom code → Footer code:**

```html
<script defer src="https://cdn.jsdelivr.net/gh/webkit-studio/webkit-studio@main/site/webflow/dist/global.js"></script>
```

Na stránce pak jen to, co je jen její — homepage `home.css` v hlavičce
stránky a `home.js` v embedu na konci, `/kontakt` obdobně `kontakt.css`.

## Zbývá uklidit

Styly cookie lišty jsou zatím na dvou místech: v `lista-souhlasu.css`
(a tedy i v `global.css`) a pořád taky natvrdo v hlavičce Webflow.
Duplicitní CSS nevadí, ale až se sloučí větev, z Webflow se ta kopie
smaže a v hlavičce zůstane jen theme-color, preload písem a odkaz na CDN.

## Na co si dát pozor

**Cache.** jsDelivr drží soubory z větve 12 hodin. Purge dělá Action
automaticky; kdyby se něco neprojevilo, ručně:
`https://purge.jsdelivr.net/gh/webkit-studio/webkit-studio@main/site/webflow/dist/global.css`

**Repo musí zůstat veřejné.** jsDelivr ze soukromého repa neservíruje.

**jsDelivr je třetí strana.** IP návštěvníka jde na jejich server, takže
patří do zásad zpracování osobních údajů. Když bude jednou vadit, přesune
se to na vlastní subdoménu a změní se dva řádky ve Webflow — nic víc.

**Když je jsDelivr dole, styly se nenačtou.** To je cena za to, že
neprovozujeme vlastní infrastrukturu.

## Pasti, na které jsme naletěli

**Duplikace stránky nepřenáší vlastní kód stránky.** Embed na konci se
zkopíruje, hlavička ne. Proto přišel `/kontakt` bez stylů i bez canonicalu.

**Data API odmítá `<script>` ve volném kódu** stránky i webu (HTTP 406).
Projde `<style>` a `<link>`. Odkaz na CSS umí nasadit skript, odkaz na JS
se musí jednou vložit ručně nebo přes HTML Embed.

**`set_attributes` na `href` odkazu selže vnitřní chybou** — musí se použít
`set_link`.

**`set_text` v `data_element_builder` tiše neudělá nic.** Text se nastavuje
až potom, a to na potomka typu String, ne na samotný TextBlock.

**Strop 10 000 znaků** platí na hlavičku i patičku, globálně i na stránku.
Kvůli němu tenhle setup vznikl. HTML Embedy na stránce strop nemají.
