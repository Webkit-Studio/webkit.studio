# Globální kód webu

Dva bloky, které se vkládají jednou a platí pro každou stránku. Duplikace
stránky ve Webflow **nepřenáší vlastní kód stránky** — proto nová stránka
vždycky přišla bez stylů. Tohle to řeší.

## Co kam patří

| Soubor | Kam ve Webflow | Jak |
|---|---|---|
| `HEAD-ke-zkopirovani.html` | Site settings → Custom code → **Head code** | **připojit na konec**, nic nemazat |
| `PATA-ke-zkopirovani.html` | Site settings → Custom code → **Footer code** | vložit celé, footer je prázdný |

Head už nese theme-color, preload písem a styly lišty se souhlasem. Ty tam
musí zůstat, nový blok jde pod ně.

## Co je globální a co ne

**Globální** (`global.css`, `global.js`) — všechno, co se opakuje na víc
stránkách: proměnné, odhalování při scrollu, sekce Kontakt, patička, FAQ.
Ze skriptu: hlášky v poli „Co řešíte", odkaz na nastavení cookies, rotující
slovo v nadpisu kontaktu, odhalování prvků.

**Jen homepage** — hero, sekce Brzdí, interaktivní ukázka, Služby, Postup.
Zůstává v hlavičce homepage a v embedech na konci té stránky.

Dělicí čára je jednoduchá: co použije druhá stránka, je globální.

## Proč to není jeden velký soubor

Webflow dává na vlastní kód **10 000 znaků na hlavičku a 10 000 na patičku**,
a to jak globálně, tak na stránku. Všechen kód dohromady má přes 40 000, takže
se to nikdy nevejde na jedno místo. Rozdělení podle použití je jediné, co
škáluje. Aktuální stav:

| Blok | Znaků | Strop |
|---|---|---|
| globální hlavička (i se souhlasem) | ~8 700 | 10 000 |
| globální patička | ~3 400 | 10 000 |
| hlavička homepage | ~7 800 | 10 000 |
| embed na konci homepage | bez stropu | — |

Embedy na stránce strop nemají. Proto v nich žije ukázka (`demo.css` má sama
přes 23 000 znaků) a Postup.

## Po vložení

Dokud je globální kód vložený a zároveň ještě sedí v embedu homepage, běží
společné části dvakrát. Rotující slovo v nadpisu kontaktu je proti tomu
pojištěné (`data-wk-rot`), ostatní bloky si samy hlídají, že už doběhly.
I tak platí: hned po vložení se z homepage musí ty samé části vyndat.

## Jak se to sestavuje

`global.css` a `global.js` nejsou psané ručně, skládají se ze zdrojů
o patro výš (`page.css`, `page-late.css`, `page-kontakt.css`,
`page-home.js`). Upravuj zdroje, ne tyhle soubory.
