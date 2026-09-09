# Prahy, nástroje a česká specifika

Referenční část auditu. Kontrolní seznam říká **co** ověřit,
tenhle dokument **proti čemu** to porovnat a **čím** to změřit.

Ke každé oblasti je pět bloků:

- **Prahy** — konkrétní hranice s odkazem na zdroj. Kde práh nemá oporu, je to napsané.
- **Nástroje** — co použít, kolik to stojí, kde to lže.
- **Časté chyby** — co na českých firemních webech opravdu bývá, jak to poznat a co s tím.
- **Česká specifika** — Seznam, ÚOOÚ, česká legislativa, čeština v typografii a fontech.
- **Kde si nejsme jistí** — čísla, která se běžně citují, ale nemají doložený zdroj. Do reportu nepatří.

Data ověřená k **8. 9. 2026**. Prahy se mění — než je použiješ v placeném
auditu, projdi zdroje znovu. Metodika se reviduje jednou za půl roku.

---

## Obsah

1. [Technické SEO a indexace](#1-technické-seo-a-indexace)
2. [Rychlost a Core Web Vitals](#2-rychlost-a-core-web-vitals)
3. [Přístupnost (WCAG 2.2 AA, EN 301 549, zákon č. 424/2023 Sb.)](#3-přístupnost-wcag-22-aa-en-301-549-zákon-č-4242023-sb)
4. [Obsahové SEO a viditelnost ve vyhledávání](#4-obsahové-seo-a-viditelnost-ve-vyhledávání)
5. [Obsah a sdělení](#5-obsah-a-sdělení)
6. [Konverze a použitelnost](#6-konverze-a-použitelnost)
7. [Měření, analytika a souhlas](#7-měření-analytika-a-souhlas)
8. [Technický stav, bezpečnost a provoz](#8-technický-stav-bezpečnost-a-provoz)

---

## 1. Technické SEO a indexace

Kódy bodů v kontrolním seznamu: `TECH-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| Velikost stránky stahovaná Googlebotem (HTML včetně HTTP hlavičky) | do 2 MB – celá stránka se stáhne, vyrenderuje a zaindexuje | nad 2 MB – vše za limitem se nestáhne, nevyrenderuje ani nezaindexuje | [1](https://developers.google.com/search/blog/2026/03/crawler-blog-post) [2](https://developers.google.com/search/docs/crawling-indexing/googlebot) |
| Velikost PDF stahovaná Googlebotem | do 64 MB | nad 64 MB – zbytek se ignoruje | [1](https://developers.google.com/search/docs/crawling-indexing/googlebot) |
| Limit pro ostatní Google crawlery bez vlastního limitu | do 15 MB | nad 15 MB | [1](https://developers.google.com/search/blog/2026/03/crawler-blog-post) |
| Počet URL v jednom souboru sitemap | do 50 000 URL | nad 50 000 URL – nutný sitemap index | [1](https://www.sitemaps.org/protocol.html) [2](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) |
| Velikost souboru sitemap (nekomprimovaně) | do 50 MB (52 428 800 bajtů) | nad 50 MB | [1](https://www.sitemaps.org/protocol.html) |
| Počet sitemap v jednom sitemap indexu | do 50 000 sitemap a do 50 MB | nad limit – nutné rozdělit | [1](https://www.sitemaps.org/protocol.html) |
| Velikost souboru robots.txt, kterou Google parsuje | do 500 KiB, kódování UTF-8 | nad 500 KiB – zbytek se ignoruje | [1](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) |
| Počet přesměrování, která Googlebot následuje u běžné URL | 0–1 skok (přímé přesměrování na finální cíl) | nad 10 skoků – Googlebot přestane následovat; v Search Console se objeví 'Chyba přesměrování' | [1](https://developers.google.com/search/docs/crawling-indexing/http-network-errors) [2](https://support.google.com/webmasters/answer/7440203) |
| Počet přesměrování, která Google následuje u samotného robots.txt | do 5 skoků | nad 5 skoků – Google to vyhodnotí jako 404, tedy jako by robots.txt neexistoval | [1](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) |
| Chování Googlu při 5xx odpovědi na robots.txt | robots.txt vrací 200 | 5xx – Google zastaví procházení webu na 12 hodin, pak používá cache až 30 dní, poté předpokládá, že žádná omezení nejsou | [1](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) |
| Doba, po kterou Google cachuje robots.txt | počítat s až 24 hodinami zpoždění mezi změnou a jejím projevem | očekávat okamžitý efekt změny robots.txt | [1](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) |
| Doba, po kterou držet přesměrování po migraci webu | minimálně 1 rok, ideálně trvale | zrušení přesměrování dříve než po roce – ztráta signálů ze starých URL | [1](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) |
| Velikost webu, od které má smysl řešit crawl budget | pod 10 000 stránek – crawl budget řešit nemusíte (typický firemní B2B web) | nad 10 000 stránek s denní změnou nebo nad 1 000 000 stránek s týdenní změnou – crawl budget je relevantní | [1](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget) |
| Minimální rychlost procházení SeznamBota přes direktivu Request-rate | nechat bez omezení, případně 1/30s a rychleji | nastavit pomaleji než 1 dokument za 30 sekund – Seznam to automaticky převede na tuto minimální hodnotu | [1](https://o-seznam.cz/napoveda/vyhledavani/seznambot/robots-txt/) |
| Počet odkazů na sitemapy v robots.txt pro Seznam | do 100 odkazů | nad 100 odkazů | [1](https://o-seznam.cz/napoveda/vyhledavani/seznambot/sitemap-xml/) |
| Export dat z rozhraní Search Console | do 1 000 řádků na jeden pohled – pro firemní web stačí | nad 1 000 řádků – nutné rozdělit filtry nebo použít API | [1](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) |
| Denní limit dat výkonnostního reportu Search Console | do 50 000 řádků na den a typ vyhledávání a property | nad limit – data se ořežou | [1](https://support.google.com/webmasters/answer/12919192) |
| Kvóta URL Inspection API | do 2 000 dotazů denně a 600 za minutu na jeden web | nad limit – API odmítne; hromadná kontrola indexace velkého webu tudy nejde | [1](https://developers.google.com/webmaster-tools/limits) |
| Počet uživatelů v jedné Search Console property | do 100 uživatelů bez vlastnictví a do 500 vlastníků | nad limit – nelze přidat auditora | [1](https://support.google.com/webmasters/answer/7687615) |
| Počet prvků v BreadcrumbList pro platný rich result | minimálně 2 položky ListItem s position, name a item | 1 položka – rich result se nezobrazí | [1](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) |
| Přesnost geo souřadnic u LocalBusiness | minimálně 5 desetinných míst u latitude a longitude | méně desetinných míst – nepřesná lokalizace | [1](https://developers.google.com/search/docs/appearance/structured-data/local-business) |
| Délka hodnoty priceRange u LocalBusiness | do 100 znaků | nad 100 znaků | [1](https://developers.google.com/search/docs/appearance/structured-data/local-business) |
| Doba účinnosti nástroje Odebrání URL v Search Console | chápat jako dočasné – cca 6 měsíců | spoléhat na něj jako na trvalé řešení místo noindex nebo 404/410 | [1](https://support.google.com/webmasters/answer/9689846) |
| Medián doby čekání stránky ve frontě na renderování (údaj Google z roku 2019) | medián 5 sekund | 90. percentil v řádu minut; nejde o limit délky renderování, ale o čekání ve frontě | [1](https://www.seroundtable.com/google-render-5sec-28532.html) |
| Podíl vyhledávačů v ČR (srpen 2026) | Google 79,33 %, Seznam 15,63 %, Bing 3,93 % | optimalizovat výhradně pro Google a ignorovat Seznam | [1](https://gs.statcounter.com/search-engine-market-share/all/czech-republic) |

### Nástroje

**Google Search Console** — zdarma

Jediný zdroj pravdy o skutečném stavu indexace. Report Indexování stránek s konkrétními důvody (Procházeno – momentálně nezaindexováno, Objeveno – momentálně nezaindexováno, Duplicita bez kanonické verze zvolené uživatelem, Duplicita, Google zvolil jinou kanonickou stránku než uživatel, Alternativní stránka se správnou kanonickou značkou, Stránka s přesměrováním, Soft 404, Vyloučeno značkou noindex, Blokováno souborem robots.txt, Zaindexováno, i když blokováno souborem robots.txt, Zaindexovaná stránka bez obsahu). Dále Kontrola URL s živým testem a zobrazeným vyrenderovaným HTML, report Sitemapy, Ruční akce, Bezpečnostní problémy, Statistiky procházení, Výkon.

**Rich Results Test (search.google.com/test/rich-results)** — zdarma

Nejdůležitější nástroj pro audit zvenčí, protože nevyžaduje vlastnictví webu. Načte libovolnou veřejnou URL jako Google-InspectionTool (výchozí je mobilní user-agent, lze přepnout na desktop), ukáže nalezená strukturovaná data, chyby a varování a náhled výsledku. Umožní i vložit kód místo URL.

**Schema Markup Validator (validator.schema.org)** — zdarma

Validace veškerých strukturovaných dat proti specifikaci schema.org bez ohledu na to, jestli z nich Google dělá rich result. Jediný způsob, jak ověřit Service, ProfessionalService, Offer, ContactPoint a další typy relevantní pro B2B firmu.

**Screaming Frog SEO Spider** — 199 £ za rok a licenci (cca 279 USD / 245 EUR); od 5 licencí 189 £, od 10 licencí 179 £, od 20 licencí 169 £. Bezplatná verze bez časového omezení.

Kompletní crawl zvenčí bez jakéhokoli přístupu k webu: stavové kódy, řetězce přesměrování, meta robots, canonical, hloubka kliknutí (Crawl Depth), osiřelé stránky (po napojení sitemap), duplicitní tituly a popisky, hreflang včetně kontroly zpětných odkazů, strukturovaná data, velikost stránek. Umí renderovat JavaScript a porovnat zdrojový HTML s vyrenderovaným DOM.

**Sitebulb** — desktopová verze Lite a Pro (roční platba se slevou 15 %), cloud od 95 £ měsíčně, další uživatel u Pro od 7 £ měsíčně; 14denní zkušební verze bez karty v rozsahu Pro

Podobný rozsah jako Screaming Frog, ale s výrazně lepším reportováním – strukturované 'Hints' s vysvětlením a prioritou, samostatná analýza hloubky procházení a interního prolinkování, porovnání auditů v čase, PDF report pro klienta.

**Ahrefs Webmaster Tools** — zdarma, bez expirace a bez karty

Site Audit s plným technickým crawlem, Site Explorer se zpětnými odkazy a pozicemi pro ověřený web, Ahrefs Web Analytics.

**Semrush Site Audit** — plán SEO 139 USD měsíčně, Starter 199 USD, Pro+ 299 USD, Advanced 549 USD; při roční platbě úspora do 17 %; sedmidenní zkušební verze

Přes 140 technických kontrol – crawlability, HTTPS, mobil, Core Web Vitals, markup, mezinárodní SEO, interní odkazy. Generuje report s prioritami, který se dá poslat klientovi.

**Seznam Webmaster (search.seznam.cz/wmt)** — zdarma

Česká obdoba Search Console: stav indexace u Seznamu, správa sitemap, komunikace se SeznamBotem. Nezbytné u firem, kde Seznam přináší podstatnou část poptávek.

**Bing Webmaster Tools** — zdarma

Kontrola URL, diagnostika procházení, integrovaný Site Scan (on-demand technický audit, který Google Search Console nemá), IndexNow, keyword research s reálnými objemy z Bingu, 16 měsíců výkonnostních dat.

**curl a prohlížeč (DevTools)** — zdarma

To nejdůležitější se dá ověřit bez jakéhokoli nástroje: curl -I URL (stavový kód, X-Robots-Tag, hlavička Link s hreflangem), curl -IL URL (celý řetězec přesměrování), curl -s URL | wc -c (velikost HTML proti limitu 2 MB), curl -A 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' URL (co dostane mobilní Googlebot z HTML). V DevTools: Network conditions → user agent, a Command palette → Disable JavaScript pro test, co zbude bez JS.

**httpstatus.io** — zdarma pro běžné použití (placené plány pro hromadné kontroly)

Vizuálně zobrazí celý řetězec přesměrování včetně typů (301/302/307/308) pro dávku URL najednou. Rychlý způsob, jak zkontrolovat všechny čtyři varianty domény a seznam starých URL po migraci.

**Wayback Machine (web.archive.org)** — zdarma

Náhrada za zrušenou Google cache. Ukáže, jak vypadal web před redesignem, jaké měl URL, a poskytne seznam historických URL, které by měly být dnes přesměrované. U auditu po redesignu je to jediný praktický zdroj starých URL, pokud klient nemá staré sitemapy.


### Časté chyby

**Zapomenutý Disallow: / v robots.txt po spuštění webu** — kritická

*Jak poznat:* Stáhnout https://domena.cz/robots.txt a hledat 'Disallow: /' bez dalšího omezení. V Search Console pak masivní počet URL ve stavu 'Blokováno souborem robots.txt'. Web nemá organickou návštěvnost prakticky žádnou.

*Náprava:* Odstranit blok. Počítat s tím, že Google robots.txt cachuje až 24 hodin a náběh indexace trvá dny až týdny. V Search Console pak spustit ověření opravy.

**Zaškrtnuté 'Požádat vyhledávače, aby web neindexovaly' ve WordPressu (Nastavení → Zobrazování)** — kritická

*Jak poznat:* Ve zdroji stránky <meta name='robots' content='noindex, nofollow' /> na všech stránkách. WordPress zároveň mění robots.txt. Typicky zůstane po vývoji nebo po obnovení webu ze zálohy vývojářského prostředí.

*Náprava:* Odškrtnout v administraci. Ověřit, že žádný SEO plugin (Yoast, Rank Math) nemá vlastní noindex na úrovni typu obsahu. Zkontrolovat i HTTP hlavičku X-Robots-Tag, kterou může přidávat server nebo CDN.

**Indexovaná testovací nebo vývojová verze webu** — kritická

*Jak poznat:* Zkusit subdomény test., dev., novy., staging., beta., wp., klient., stary. Dále dotaz site: (byť Google sám říká, že není diagnostický) a prohlídka certificate transparency logů. Poznávací znak: identický obsah na jiné doméně, často se starým designem nebo Lorem ipsum.

*Náprava:* Testovací prostředí zabezpečit HTTP autentizací – ne robots.txt a ne noindex, protože obojí lze obejít a noindex vyžaduje, aby robot stránku vůbec směl procházet. Existující indexované URL odstranit přes noindex plus dočasné odebrání v Search Console, pak zabezpečit.

**Web běží současně na www i bez www, na http i https, bez konsolidace** — vysoká

*Jak poznat:* Čtyři requesty: http://domena.cz, http://www.domena.cz, https://domena.cz, https://www.domena.cz. Pokud víc než jedna varianta vrací 200 místo 301 na jednu zvolenou, je problém. Časté u starších českých hostingů a u webů převedených na HTTPS bez úpravy pravidel.

*Náprava:* Zvolit jednu kanonickou variantu a zbylé tři na ni trvale přesměrovat jedním skokem (ne řetězcem http → https → www). Doplnit self-referencing canonical. V Search Console založit property typu Doména, která pokrývá všechny varianty.

**Řetězce přesměrování po redesignu** — vysoká

*Jak poznat:* curl -IL na starých URL. Typický nález: http://domena.cz/stara-stranka → https://domena.cz/stara-stranka → https://www.domena.cz/stara-stranka → https://www.domena.cz/nova-stranka/ → 200. Čtyři skoky tam, kde stačí jeden.

*Náprava:* Přepsat pravidla tak, aby každá stará URL mířila jedním 301 přímo na finální cíl. Googlebot následuje až 10 skoků, ale každý skok stojí kapacitu procházení a oslabuje přenos signálů. Přesměrování držet minimálně rok, doporučeně trvale.

**302 místo 301 po přesunu obsahu** — vysoká

*Jak poznat:* V hlavičce 'HTTP/2 302' nebo '307'. Typicky u přesměrování řešených pluginem, v CMS bez volby typu, nebo přes JavaScript. V Search Console se staré URL drží v indexu a nové se neobjevují.

*Náprava:* Změnit na 301 (nebo 308). U meta refresh použít nulové zpoždění – Google ho pak čte jako trvalý signál. JavaScriptové přesměrování nahradit serverovým.

**Canonical na všech stránkách míří na homepage** — kritická

*Jak poznat:* Zkontrolovat <link rel='canonical'> na pěti různých podstránkách. Pokud všechny ukazují na https://domena.cz/, je to chyba šablony. V Search Console se projeví jako hromada URL ve stavu 'Alternativní stránka se správnou kanonickou značkou' nebo 'Duplicita, Google zvolil jinou kanonickou stránku'.

*Náprava:* Opravit šablonu tak, aby canonical byl self-referencing a absolutní. U stránkování a filtrů se rozhodnout vědomě, co je kanonické. Ověřit, že canonical není v konfliktu se sitemap ani s přesměrováním.

**Canonical nebo hreflang míří na staging doménu** — kritická

*Jak poznat:* Ve zdroji produkční stránky odkazy na test.domena.cz, domena.local, domena.webflow.io, domena.wpengine.com apod. Zůstává po nasazení, když se URL bere z konfigurace prostředí, která se nezměnila.

*Náprava:* Opravit konfiguraci základní URL. Zkontrolovat i sitemap, strukturovaná data a Open Graph, kde bývá stejná chyba.

**sitemap.xml se vygenerovala při spuštění webu a už nikdy se neaktualizovala** — střední

*Jak poznat:* Porovnat počet URL v sitemap s počtem stránek nalezených crawlerem. V Search Console v reportu Sitemapy zkontrolovat datum posledního načtení a počet objevených URL. Poznávací znak: v sitemap chybí všechny články z posledního roku, nebo naopak obsahuje URL, které vracejí 404.

*Náprava:* Nasadit generování sitemap přímo z CMS (Yoast, Rank Math, nativní sitemap WordPressu, nativní sitemap Webflow). Do sitemap patří výhradně kanonické URL s odpovědí 200 bez noindex. Odkaz na sitemap doplnit do robots.txt a odeslat v Search Console i v Seznam Webmasteru.

**Stránka 'Nenalezeno' vrací HTTP 200 (soft 404)** — střední

*Jak poznat:* curl -I https://domena.cz/nahodny-nesmysl-abc123. Pokud vrátí 200 a zobrazí hezkou stránku 'Stránka nenalezena', je to soft 404. Časté u jednostránkových aplikací a u některých šablon, které chybu řeší jen vizuálně.

*Náprava:* Server musí u neexistujících URL vracet 404, u trvale smazaných 410. Vlastní vzhled chybové stránky se tím nemění – mění se jen stavový kód. U SPA je nutné, aby routování vracelo správný kód ze serveru, ne až z klienta.

**Obsah, který se objeví až po interakci uživatele (záložky, akordeon otevíraný kliknutím, 'načíst více')** — vysoká

*Jak poznat:* Porovnat 'Zobrazit zdroj stránky' s DOM v DevTools. Pokud text referencí, ceníku nebo popisu služby není ani ve zdroji, ani v DOM po načtení bez kliknutí, Google ho neuvidí – WRS uživatelskou interakci nesimuluje. Ověřit v Rich Results Test nebo v Kontrole URL.

*Náprava:* Obsah musí být v DOM po načtení stránky, i když je vizuálně skrytý (skrytí přes CSS je v pořádku). Načítání dalšího obsahu po kliknutí nahradit stránkováním s běžnými odkazy v atributu href.

**Web postavený čistě na klientském renderování (React, Vue, Next.js v CSR režimu)** — vysoká

*Jak poznat:* curl -s URL a hledat v HTML skutečný text stránky. Pokud vrátí prázdný <div id='root'></div> a balík JS, veškerý obsah závisí na renderování. Google to zvládne, ale s odkladem (fronta na renderování) a s rizikem, že se to nepovede.

*Náprava:* Nasadit serverové renderování nebo statické generování alespoň pro komerční stránky. Titulek, popisek, nadpisy, hlavní text, canonical a strukturovaná data musí být v HTML od serveru. Odkazy musí být <a href>, ne onclick.

**Menu a odkazy jen v JavaScriptu bez atributu href** — vysoká

*Jak poznat:* Ve zdroji hledat <a> bez href, nebo elementy <div onclick> a <button> místo odkazů. Crawler pak nenajde podstránky – projeví se jako web s jednou nalezenou URL v crawlu.

*Náprava:* Každý navigační prvek musí být <a href='/cesta'>. Google sbírá odkazy z atributu href. Toto je zároveň požadavek přístupnosti, takže náprava má dvojí efekt.

**Všechny služby na jedné stránce homepage** — vysoká

*Jak poznat:* Web má 5–8 stránek celkem, přičemž firma nabízí pět různých služeb popsaných v blocích na homepage. Sitemap i navigace to potvrdí.

*Náprava:* Každá služba dostane vlastní URL, vlastní titulek, vlastní text a vlastní poptávkový formulář nebo CTA. Homepage se stane rozcestníkem. Je to obsahová práce, ale technický audit ji odhalí a odůvodní – bez samostatných URL nemá web na co pozicovat.

**Osiřelé landing pages po PPC kampaních** — střední

*Jak poznat:* Porovnat seznam URL ze sitemap se seznamem URL nalezených crawlerem z homepage. Rozdíl jsou kandidáti na osiřelé stránky. Často jde o /akce-2023/, /nabidka/, /lp/ apod.

*Náprava:* Rozhodnout o každé zvlášť: buď propojit do struktury a nechat indexovat, nebo dát noindex, nebo smazat s 410. Nechat je bez rozhodnutí znamená, že si konkurují s hlavními stránkami.

**Text služeb zkopírovaný mezi 'městskými' stránkami (/instalater-praha, /instalater-brno…)** — střední

*Jak poznat:* Otevřít dvě takové stránky vedle sebe a porovnat text. Pokud se liší jen název města, jde o duplicitu, kterou Google typicky vyřeší indexací jedné a zahozením zbytku (stav 'Duplicita bez kanonické verze zvolené uživatelem').

*Náprava:* Buď stránky sloučit do jedné s krajským záběrem, nebo každé dát skutečně jedinečný obsah – konkrétní realizace v daném městě, jméno technika, reference, dojezdové časy. Google to v pravidlech proti spamu popisuje jako doorway stránky, pokud je jediným cílem manipulace.

**Jednosměrný nebo chybějící hreflang mezi .cz a .sk verzí** — vysoká

*Jak poznat:* Ověřit, že česká stránka odkazuje hreflangem na slovenskou a slovenská zpět na českou, a že obě uvádějí i samy sebe. Zkontrolovat kódy (cs-CZ, sk-SK; nikoli 'cz' jako jazyk – to je platný kód pro čeština? ne: jazykový kód pro češtinu podle ISO 639-1 je 'cs', 'cz' je kód země podle ISO 3166-1). Bez zpětných odkazů Google anotace ignoruje.

*Náprava:* Doplnit obousměrné anotace se self-referencí, plně kvalifikovanými URL a správnými kódy (cs, cs-CZ, sk, sk-SK, de-AT…). Přidat x-default. Zkontrolovat, že canonical na každé jazykové verzi ukazuje sám na sebe – hreflang na nekanonické stránce se zahazuje.

**Automatické přesměrování podle IP nebo jazyka prohlížeče** — vysoká

*Jak poznat:* Načíst web přes VPN z jiné země nebo změnit jazyk prohlížeče a sledovat, jestli dojde k přesměrování. Google před tímto postupem výslovně varuje.

*Náprava:* Nahradit přesměrování viditelným přepínačem jazyka a případně nenásilným upozorněním. Googlebot prochází převážně z USA – automatické přesměrování mu ukáže jen jednu verzi a zbytek se nezaindexuje.

**Chybějící nebo vygenerovaná strukturovaná data s nesprávnými údaji** — střední

*Jak poznat:* Pustit homepage přes Rich Results Test a validator.schema.org. Časté nálezy: žádná strukturovaná data, Organization vygenerovaná generátorem s cizí adresou nebo placeholderem, LocalBusiness na firmě bez provozovny, aggregateRating vymyšlené o vlastní firmě.

*Náprava:* Nasadit JSON-LD (Google ho doporučuje) s Organization na homepage nebo stránce o firmě: name, legalName, url, logo, address, telephone, email, sameAs, vatID (DIČ), taxID (IČO). Doplnit BreadcrumbList tam, kde existuje hierarchie. Vlastní hodnocení sebe sama přes aggregateRating nepoužívat – Google to zakazuje a hrozí manuální akce.

**FAQPage schema nasazené kvůli rozšířeným výsledkům Googlu** — nízká

*Jak poznat:* Ve zdroji JSON-LD s @type FAQPage. Klient obvykle uvádí, že to nasadili kvůli 'většímu výsledku ve vyhledávání'.

*Náprava:* Vysvětlit, že Google FAQ rich result ukončil 7. 5. 2026 a dokumentaci odstranil 15. 6. 2026 – u Googlu už nepřináší nic. Markup ale neškodí a Seznam FAQ snippety podle své nápovědy stále rozlišuje, takže u českých webů má smysl ho ponechat. Nesmí se prezentovat jako přínos pro Google.

**Robots.txt blokuje CSS, JavaScript a obrázky** — vysoká

*Jak poznat:* V robots.txt hledat Disallow: /wp-content/, /wp-includes/, /assets/, /static/, *.js, *.css. V Kontrole URL v Search Console se pak v seznamu zdrojů objeví blokované položky a snímek vyrenderované stránky je rozbitý.

*Náprava:* Odblokovat všechny zdroje potřebné k vykreslení stránky. Google bez nich stránku vyrenderuje špatně a nemůže posoudit mobilní použitelnost ani rozvržení obsahu.

**Web v Search Console založený jen jako Předpona URL na http:// nebo na variantě bez www** — střední

*Jak poznat:* Zeptat se klienta na typ property, nebo poznat podle toho, že v reportech chybí většina traffiku. Časté u property založených před přechodem na HTTPS.

*Náprava:* Založit property typu Doména (ověření přes DNS TXT záznam), která pokrývá všechny subdomény i protokoly. Původní property ponechat kvůli historii dat – ta se do nové property zpětně nepřenese.

**PDF katalogy a ceníky místo HTML stránek** — střední

*Jak poznat:* Navigace odkazuje na .pdf soubory. V Search Console se objeví jako indexované PDF. U českých výrobních firem velmi časté – produktová dokumentace existuje jen jako PDF.

*Náprava:* Klíčové informace přenést do HTML stránek, PDF ponechat jako doplněk ke stažení. Googlebot PDF indexuje do 64 MB, ale PDF se špatně pozicuje, nemá interní prolinkování, canonical se u něj řeší jen přes hlavičku Link a na mobilu se čte špatně.

**Nekonzistentní koncové lomítko a duplicitní varianty s /index.php** — střední

*Jak poznat:* Načíst /sluzby a /sluzby/ a /sluzby/index.php. Pokud všechny vrací 200 s totožným obsahem, existují tři URL pro jednu stránku. Časté u starších českých CMS a u ručně psaných webů.

*Náprava:* Zvolit jednu variantu a ostatní na ni 301 přesměrovat. Doplnit self-referencing canonical. Zkontrolovat, že interní odkazy používají zvolenou variantu – jinak vzniká zbytečné přesměrování při každém kliknutí.

**Server vrací 5xx při vyšší zátěži procházení** — vysoká

*Jak poznat:* V Search Console v reportu Statistiky procházení sledovat podíl odpovědí 5xx a průměrnou dobu odezvy. Zvenčí to jde odhadnout crawlem – pokud crawler při vyšší rychlosti dostává chyby, dostane je i Googlebot.

*Náprava:* Řešit s hostingem nebo vývojářem: navýšit kapacitu, zapnout cache, omezit generování stránek na dotaz. Google snižuje frekvenci procházení úměrně počtu chybujících URL, takže nové stránky se do indexu dostávají pomaleji. Omezovat procházení pomocí 401 a 403 Google výslovně nedoporučuje.


### Česká specifika

Seznam.cz je samostatná technická vrstva, kterou anglojazyčné metodiky vůbec neřeší. Podíl vyhledávačů v ČR podle Statcounteru (srpen 2026): Google 79,33 %, Seznam 15,63 %, Bing 3,93 %, DuckDuckGo 0,41 %. U regionálních a řemeslných firem bývá podíl poptávek ze Seznamu vyšší než tento průměr, u čistě B2B a technologických firem naopak nižší.

Rozdíly SeznamBota proti Googlebotu, které patří do každého českého auditu:
1. robots.txt: Seznam podporuje Disallow, Allow, Request-rate a Sitemap. Používá Request-rate (formáty 1/30s, 100/15m, 400/1h, 9000/1d), nikoli Crawl-delay. Minimální rychlost je 1 dokument za 30 sekund – pomalejší nastavení se automaticky převede na tuto hodnotu. V robots.txt lze uvést až 100 odkazů na sitemapy. Token je User-agent: SeznamBot (velké B).
2. Meta robots: Seznam dokumentuje index, noindex, follow, nofollow, all a rel="nofollow" na odkazech. Podporu hlavičky X-Robots-Tag ve své nápovědě neuvádí – u PDF a jiných nehtml souborů se proto nelze spolehnout na to, že Seznam direktivu uvidí.
3. Canonical: SeznamBot rel=canonical podporuje, zvládá i relativní adresy a mezidoménovou kanonizaci. Odkazy sama na sebe ignoruje. Klíčová podmínka: pokud mu stránky nepřijdou obsahově dost podobné, canonical nepřijme. Nesmí mířit na přesměrování ani na URL vyžadující cookies.
4. Strukturovaná data: Seznam podle své nápovědy rozlišuje article, event, product, recipe, diskusní vlákno, FAQ, film/seriál, how-to a video snippety, plus Open Graph. FAQ a how-to snippety u Seznamu tedy stále žijí, přestože Google FAQ rich result ukončil 7. 5. 2026 a how-to zrušil dříve. V českém auditu je proto správné doporučení jiné než v anglických článcích: FAQPage markup neodstraňovat, jen přestat slibovat efekt u Googlu.
5. IndexNow: Seznam ho podporuje, Google ne (Google od testování v roce 2021 protokol nepřijal). Pro rychlé propsání změn u Seznamu, Bingu, Yandexu a Naveru je to zdarma dostupná cesta, kterou většina českých firem nemá nasazenou.
6. AI vrstva: Seznam nabízí blokaci použití obsahu pro AI odpovědi přes robots.txt s user-agenty Seznam-Extended, AI nebo MachineLearning, případně přes meta name="seznambot" content="nosnippet" – ta ale zároveň vypne i běžné snippety ve výsledcích. Google má na totéž samostatné roboty Google-Extended, GoogleOther a Google-CloudVertexBot a direktivy nosnippet, data-nosnippet a max-snippet.
7. Seznam Webmaster (search.seznam.cz/wmt) je zdarma a je to jediný způsob, jak vidět stav indexace u Seznamu. Většina firem do 250 lidí ho vůbec nemá založený – je to snadné a viditelné doporučení do reportu.

Další české reálie:
- Diakritika v URL: Google i Seznam ji zvládají, ale musí být procentuálně zakódovaná podle RFC 3986. Praktický problém není v indexaci, ale v tom, že se taková URL rozpadá při kopírování do e-mailu, v analytice a při diktování po telefonu. Doporučení: URL bez diakritiky (/sluzby/instalatermistrovske-prace), ne kvůli SEO, ale kvůli provozu.
- Doména .cz a .sk pro stejnou firmu je běžná dvojice; z toho plyne, že hreflang je v ČR mnohem častější téma než v jiných malých trzích, a zároveň nejčastěji chybně implementovaný. Pozor na kódy: čeština je 'cs' (ISO 639-1), 'cz' je kód země (ISO 3166-1) – správně tedy cs, cs-CZ, sk, sk-SK.
- Starší české hostingy a šablonová řešení často nemají vyřešenou konsolidaci www/non-www a http/https – to je v ČR výrazně častější nález než na západních trzích, protože přechod na HTTPS proběhl u části webů jako doplněk certifikátu bez úpravy pravidel na serveru.
- WordPress je v ČR dominantní CMS a Shoptet dominantní e-shopová platforma; přesné podíly se z důvěryhodného zdroje nepodařilo ověřit (viz nejistoty). Z toho ale plyne praktický důsledek: většina nálezů půjde opravit v administraci WordPressu nebo v SEO pluginu bez zásahu vývojáře, což zásadně mění odhad ceny nápravy v reportu.
- Právní úprava: pro technické SEO v ČR neexistuje žádná specifická legislativa. Zákon č. 424/2023 Sb. o přístupnosti a evropský akt o přístupnosti (od 28. 6. 2025) se týkají přístupnosti, ne indexace – do dimenze technického SEO nepatří, ale při auditu se s nimi překrývá požadavek na sémantické HTML a odkazy s atributem href.

### Kde si nejsme jistí

- Podíl nezaindexovaných stránek na běžném webu: běžně se cituje 40–60 % nebo 20–30 %, ale všechny nalezené zdroje jsou SEO blogy bez zveřejněné metodiky a data si navzájem odporují. Žádnou oficiální hodnotu Google nezveřejňuje. Do metodiky proto nepatří žádná prahová hodnota typu 'zdravý web má nad X % indexovaných stránek' – místo ní se má reportovat absolutní počet neindexovaných prodejních stránek a konkrétní důvod u každé z nich.
- Prahová hodnota pro hloubku kliknutí (často se uvádí 'maximálně 3 kliknutí od homepage') se nepodařilo doložit žádným zdrojem od Googlu. Google hloubku zmiňuje jen nepřímo přes 'vnímaný inventář' v dokumentaci ke crawl budgetu. Do reportu patří jako relativní zjištění ('tato služba je 4 kliknutí hluboko, ostatní 2'), ne jako porušení normy.
- Retence dat ve výkonnostním reportu Search Console (16 měsíců) se z oficiální nápovědy Googlu nepodařilo v této rešerši doložit přímým citátem – všechny nalezené zdroje jsou nástroje a blogy třetích stran. Hodnota odpovídá rozsahu, který nabízí filtr data v rozhraní, ale před uvedením v placeném reportu se doporučuje ověřit přímo v nástroji.
- Údaj o mediánu 5 sekund čekání ve frontě na renderování pochází z vystoupení Martina Splitta na Chrome Dev Summit 2019 a Google ho od té doby neaktualizoval. Novější zdroje uvádějí, že reálné čekání se pohybuje od hodin po týdny podle zátěže. Číslo se v reportu nemá používat jako aktuální parametr, jen jako ilustrace, že renderování není okamžité.
- Podíly CMS v ČR (uváděné hodnoty pro WordPress kolem 80 %, Shoptet kolem 47 % e-shopů) se nepodařilo ověřit z primárního zdroje – W3Techs segmentace pro ČR nebyla na očekávané adrese dostupná a ostatní nalezené zdroje jsou agregátory bez metodiky. Do reportu proto nepatří jako číslo, jen jako kvalitativní konstatování, že WordPress a Shoptet jsou v ČR nejrozšířenější.
- Statistiky o chybovosti hreflangu (uváděných 67 % webů s lokalizačními značkami má základní chyby, 31 % má konfliktní direktivy) pocházejí ze sekundárních SEO zdrojů bez odkazu na původní studii a nepodařilo se je dohledat k primárnímu měření. Neuvádět jako podložené číslo.
- Podpora hlavičky X-Robots-Tag u SeznamBota: nápověda Seznamu ji nezmiňuje ani pro, ani proti. Nelze tedy tvrdit, že ji Seznam ignoruje, ani že ji respektuje. U PDF a nehtml souborů je bezpečnější spolehnout se na robots.txt a na to, že Seznam takové soubory typicky neindexuje s vysokou prioritou.
- Podpora hreflangu u Seznamu: v nápovědě SeznamBota není žádná stránka o vícejazyčných webech ani o hreflangu. Nelze proto tvrdit, že Seznam hreflang zpracovává. Pro české weby s .cz/.sk verzí to znamená, že hreflang řeší Google, zatímco u Seznamu je spolehlivější oddělit trhy doménou.
- Aktuální ceny nástrojů byly ověřeny k září 2026 (Screaming Frog přímo na stránce výrobce, Semrush přímo na semrush.com/prices, Sitebulb přímo na sitebulb.com/pricing). Konkrétní ceny plánů Sitebulb Lite a Pro nebyly na stránce v načtené podobě uvedeny číselně – ověřeny byly jen limity URL a cena cloudu od 95 £ měsíčně a doplňkového uživatele od 7 £. Před uvedením v nabídce je nutné ceny znovu ověřit.
- Report Indexování stránek v Search Console byl v červnu a červenci 2026 tři týdny zamrzlý na datech k 11. 6. 2026 a Google jej opravil až k 3. 7. 2026. To znamená, že datum posledního načtení dat je nutné v každém auditu explicitně zkontrolovat a uvést v reportu – jinak se auditor může opřít o data stará týdny, aniž by to poznal.
- Google v roce 2025–2026 podle diskusí v podcastu Search Off the Record zvažoval rozšíření sady podporovaných direktiv v robots.txt (údajně o 10–15 nejčastěji používaných nepodporovaných direktiv). Žádné oficiální oznámení o zavedení se nepodařilo dohledat – ke dni rešerše Google parsuje pouze user-agent, allow, disallow a sitemap.
- Skutečný podíl poptávek ze Seznamu u konkrétní firmy se z veřejných dat zjistit nedá. Statcounter měří podíl vyhledávání, ne podíl konverzí. Pokud klient nemá Seznam Webmaster ani rozlišený zdroj v analytice, patří to do reportu jako otevřená otázka, ne jako odhad.

<details><summary>Zdroje (61)</summary>

- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://www.sitemaps.org/protocol.html
- https://developers.google.com/search/docs/crawling-indexing/301-redirects
- https://developers.google.com/search/docs/crawling-indexing/http-network-errors
- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- https://developers.google.com/search/docs/crawling-indexing/url-structure
- https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- https://developers.google.com/search/docs/crawling-indexing/googlebot
- https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- https://developers.google.com/search/blog/2026/03/crawler-blog-post
- https://searchengineland.com/google-explains-how-crawling-works-in-2026-473110
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- https://developers.google.com/search/docs/appearance/structured-data/faqpage
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/essentials/technical
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://developers.google.com/search/updates
- https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- https://developers.google.com/search/blog/2022/10/performance-data-deep-dive
- https://developers.google.com/webmaster-tools/limits
- https://support.google.com/webmasters/answer/7440203
- https://support.google.com/webmasters/answer/9012289
- https://support.google.com/webmasters/answer/7687615
- https://support.google.com/webmasters/answer/7445569
- https://support.google.com/webmasters/answer/9689846
- https://support.google.com/webmasters/answer/12919192
- https://support.google.com/webmasters/answer/16984139
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/robots-txt/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/sitemap-xml/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/kanonicke-url/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/strukturovana-data/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/
- https://o-seznam.cz/napoveda/vyhledavani/en/indexing-control/
- https://gs.statcounter.com/search-engine-market-share/all/czech-republic
- https://www.screamingfrog.co.uk/seo-spider/pricing/
- https://sitebulb.com/pricing/
- https://www.semrush.com/prices/
- https://ahrefs.com/blog/awt-website-crawler/
- https://searchengineland.com/google-search-console-removing-the-page-experience-report-448397
- https://searchengineland.com/why-google-search-console-impressions-dropped-interpret-data-463677
- https://searchengineland.com/google-search-officially-retires-cache-link-437122
- https://searchengineland.com/google-search-console-ai-performance-reports-and-controls-to-block-your-content-in-ai-responses-479298
- https://www.seroundtable.com/google-render-5sec-28532.html
- https://www.seroundtable.com/google-page-indexing-report-fixed-and-updated-41626.html
- https://www.searchenginejournal.com/google-a-site-search-doesnt-show-all-pages/416662/
- https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/
- https://ahrefs.com/blog/search-traffic-study/
- https://en.wikipedia.org/wiki/IndexNow

</details>

---

## 2. Rychlost a Core Web Vitals

Kódy bodů v kontrolním seznamu: `RYCH-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| LCP (75. percentil, terénní data) | ≤ 2,5 s | > 4,0 s (mezi tím: potřebuje zlepšit) | [1](https://web.dev/articles/lcp) |
| INP (75. percentil, terénní data) | ≤ 200 ms | > 500 ms (200–500 ms: potřebuje zlepšit) | [1](https://web.dev/articles/inp) |
| CLS (75. percentil, terénní data) | ≤ 0,1 | > 0,25 (mezi tím: potřebuje zlepšit) | [1](https://web.dev/articles/cls) |
| TTFB (75. percentil) — diagnostická, ne Core Web Vital | ≤ 0,8 s | > 1,8 s (0,8–1,8 s: potřebuje zlepšit) | [1](https://web.dev/articles/ttfb) |
| FCP (75. percentil) — diagnostická, ne Core Web Vital | ≤ 1,8 s | > 3,0 s (1,8–3,0 s: potřebuje zlepšit) | [1](https://web.dev/articles/fcp) |
| Klasifikace originu / stránky | „Good", pokud ≥ 75 % zobrazení splní dobrý práh (tj. 75. percentil je v dobrém pásmu) | „Poor", pokud ≥ 25 % zobrazení překročí špatný práh | [1](https://web.dev/articles/defining-core-web-vitals-thresholds) |
| Rozpad LCP na části (doporučený poměr) | TTFB ~40 %, resource load delay < 10 %, resource load duration ~40 %, element render delay < 10 % | Jakákoli část výrazně nad podílem ukazuje, kde je úzké hrdlo; Google to označuje za vodítko, ne pravidlo | [1](https://web.dev/articles/optimize-lcp) |
| CLS — session window | Posuny odděleny mezerou ≥ 1 s se počítají do jiného okna; okno trvá max. 5 s; CLS = největší okno, ne součet | Posuny do 500 ms po interakci uživatele se nezapočítávají (hadRecentInput) | [1](https://web.dev/articles/cls) |
| INP — výběr interakce | U stránek s mnoha interakcemi se ignoruje 1 nejhorší interakce na každých 50 interakcí; výsledkem je 75. percentil napříč zobrazeními | U stránek s málo interakcemi se reportuje nejhorší interakce | [1](https://web.dev/articles/inp) |
| Lighthouse — váhy metrik v skóre výkonu | TBT 30 %, LCP 25 %, CLS 25 %, FCP 10 %, Speed Index 10 % | INP ve skóre NENÍ vůbec zastoupeno — Lighthouse ho nahrazuje TBT | [1](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) |
| Lighthouse — barevná pásma skóre | 90–100 zelená | 0–49 červená; 50–89 oranžová | [1](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) |
| Lighthouse — výchozí mobilní throttling | 150 ms RTT, 1,6 Mb/s download, 750 kb/s upload, 4× zpomalení CPU (odpovídá zhruba spodním 25 % 4G a horním 25 % 3G připojení) | PageSpeed Insights upravil 5. 12. 2024 faktor zpomalení CPU kvůli nízkému výkonu svých produkčních strojů — mobilní TBT v lab datech tím vzrostlo; terénní data a desktop se nezměnily | [1](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md) [2](https://developers.google.com/speed/docs/insights/release_notes) |
| CrUX — datové okno | 28denní klouzavé okno; v PSI a CrUX API aktualizováno denně | BigQuery dataset se vydává jednou měsíčně za předchozí kalendářní měsíc — čísla se proto neshodují s PSI | [1](https://developer.chrome.com/docs/crux/methodology) [2](https://developer.chrome.com/docs/crux/guides/pagespeed-insights) |
| Search Console — report Core Web Vitals | Stejné prahy jako CWV; URL se seskupují do skupin s podobným zážitkem; 28denní okno | Validace opravy trvá celých 28 dní; skupiny bez dostatku dat pro LCP i CLS se nezobrazí vůbec | [1](https://support.google.com/webmasters/answer/9205520) |
| Váha stránky — mediánová domovská stránka (HTTP Archive, crawl 2025) | p25 = 1 127 kB (mobil) / 1 275 kB (desktop); p10 = 516 / 607 kB | p50 = 2 164 / 2 412 kB; p75 = 4 119 / 4 570 kB; p90 = 8 337 / 9 179 kB | [1](https://almanac.httparchive.org/en/2025/page-weight) |
| Rozpad váhy — mediánová mobilní domovská stránka 2025 | HTML 22 kB, CSS 77 kB, fonty 122 kB | JavaScript 632 kB, obrázky 911 kB; 72 požadavků na mobilu, 77 na desktopu; meziroční růst velikosti +7,8 %, požadavků +9 % | [1](https://almanac.httparchive.org/en/2025/page-weight) |
| Podíl originů, které projdou všemi třemi CWV (2025) | desktop 56 % (LCP 74 %, INP 97 %, CLS 72 %) | mobil 48 % (LCP 62 %, INP 77 %, CLS 81 %) | [1](https://almanac.httparchive.org/en/2025/performance) |
| LCP obrázky v praxi (2025) | fetchpriority="high" používá 17,3 % mobilních / 16,3 % desktopových stránek; <link rel=preload> jen 2,1–2,2 % | 16–17 % stránek má LCP obrázek s loading="lazy"; formáty LCP obrázků: JPG 57 %, PNG 26 %, WebP 11 %, AVIF 0,7 % | [1](https://almanac.httparchive.org/en/2025/performance) |
| Obrázky bez rozměrů (2025) | — | 62 % mobilních a 65 % desktopových stránek má alespoň jeden obrázek bez width/height; medián 2 takové obrázky na stránku | [1](https://almanac.httparchive.org/en/2025/performance) |
| Blokátory bfcache (2025) | 1 z 10 navigací na desktopu a 1 z 5 na mobilu je zpět/vpřed — tj. potenciál je velký | Cache-Control: no-store používá 23 % stránek; unload handler 10–11 %; obojí bfcache zakáže | [1](https://almanac.httparchive.org/en/2025/performance) [2](https://web.dev/articles/bfcache) |
| Nekompozitované animace (2025) | — | 40 % mobilních a 44 % desktopových stránek animuje vlastnosti, které vynutí layout (top, left, box-shadow) místo transform | [1](https://almanac.httparchive.org/en/2025/performance) |
| font-display — délka block a swap periody | swap: block 0 ms / swap nekonečný (FOUT). fallback: block 100 ms / swap 3 s. optional: block 100 ms / bez swapu (nejlepší pro CLS) | block: block 2–3 s / swap nekonečný (FOIT). auto: definuje prohlížeč — Chrome se chová jako block, tj. cca 3 s neviditelného textu | [1](https://web.dev/articles/font-best-practices) |
| Google Fonts — velikost latin vs. latin-ext (Inter 400, ověřeno 8. 9. 2026) | latin subset: 23 664 B | latin-ext subset (nutný pro ě š č ř ž ů): 35 000 B navíc → česká stránka stáhne 58 664 B na jeden řez místo 23 664 B, tj. 2,5× | [1](https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap) |
| Dopad lazy loadingu na LCP obrázek | Medián stránky BEZ lazy loadingu má 75. percentil LCP 2 922 ms | Medián stránky S lazy loadingem má 75. percentil LCP 3 546 ms. A/B test na WordPressu: vypnutí lazy loadingu zlepšilo LCP na archivních stránkách z 2 029 na 1 759 ms (desktop, −13 %) a z 1 657 na 1 403 ms (mobil, −15 %) | [1](https://web.dev/articles/lcp-lazy-loading) |
| Dopad fetchpriority="high" na LCP obrázek | Google Flights: LCP 2,6 s → 1,9 s. Oodle: −2 s doby načtení u prvního obrázku v karuselu | fetchpriority nepřebije loading="lazy" — obrázek s oběma atributy se stále načte pozdě | [1](https://web.dev/articles/fetch-priority) [2](https://web.dev/articles/browser-level-image-lazy-loading) |
| Velikost DOM (Lighthouse) | pod ~800 uzlů v <body> | varování nad ~800 uzly, chyba nad ~1 400 uzly; dále hloubka > 32 úrovní nebo rodič s > 60 přímými potomky | [1](https://developer.chrome.com/docs/lighthouse/performance/dom-size) |
| Podpora formátů v prohlížečích (ověřeno 8. 9. 2026) | WebP 96,82 % globálního provozu (Chrome 32+, Firefox 65+, Safari 16+, Edge 18+) | AVIF 95,36 % (Chrome 85+, Firefox 93+, Safari 16.4+ / iOS 16+, Edge 121+) — bez podpory zůstávají Opera Mini a starší Android prohlížeče, proto se AVIF podává v <picture> s fallbackem | [1](https://caniuse.com/webp) [2](https://caniuse.com/avif) |
| Webflow — automaticky generované varianty srcset | Pro obrázek širší než 3200 px vygeneruje 7 variant: 3200, 2600, 2000, 1600, 1080, 800 a 500 px (v HTML jako přípona -p-500, -p-800, …). Menší originál = méně variant. | Maximální velikost nahrávaného obrázku je 4 MB. Varianty se generují jen pro <img> vložený jako Image element — NE pro background-image nastavený v CSS. | [1](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images) [2](https://help.webflow.com/hc/en-us/articles/33961269934227-Assets-panel) |
| Webflow — reálná velikost runtime JS (ověřeno 8. 9. 2026 na webkit.studio) | CSS: jeden sdílený soubor pro celý web, 19 758 B (brotli), Cache-Control: public, max-age=31536000, immutable | jQuery 3.5.1 = 31 496 B (gzip) z d3e54v103j8qbb.cloudfront.net s Cache-Control: max-age=84600, must-revalidate (tj. ~23,5 h, ne rok); webflow runtime 27 176 B + chunky 13 675 B a 12 980 B (brotli); webfont.js 5 437 B. Celkem ~85 kB přeneseného JS, než se přidá jakýkoli vlastní kód či měření. | Přímé měření: curl -I / -w na URL z HTML webkit.studio, 8. 9 |
| Webflow — limity vlastního kódu | 50 000 znaků vlastního kódu celkem napříč Site settings, Page settings, Code Embed a CMS rich text (na všech placených projektech) | 10 000 znaků na jedno pole Header/Footer a 10 000 znaků na jeden Embed element | [1](https://webflow.com/updates/increased-custom-code-character-limit) |
| CrUX API — kvóta | Zdarma, 150 dotazů za minutu na jeden Google Cloud projekt; vrací až 12 metrik včetně experimental_time_to_first_byte, round_trip_time, navigation_types a LCP image subparts; form factory PHONE / DESKTOP / TABLET | Kvótu nelze zvýšit ani za peníze; vyžaduje API klíč (bez něj vrací 403); collectionPeriod vždy hlásí 28 dní, i když je stránka mladší | [1](https://developer.chrome.com/docs/crux/api) |
| CrUX Vis — rozsah historie | Zdarma na cruxvis.withgoogle.com; 40 týdnů historie, nový datový bod každé pondělí (každý pokrývá předchozích 28 dní); filtr podle zařízení, origin/URL a percentilu; pokrývá přes 15 milionů originů | Nahradilo CrUX Dashboard, který byl vypnut do konce listopadu 2025; URL-level data nemusí existovat ani když existují origin-level | [1](https://developer.chrome.com/docs/crux/vis) [2](https://developer.chrome.com/blog/crux-dashboard-deprecation) |
| ÚOOÚ — pokuty za cookies (rok 2023 do 2. 8. 2023) | — | Uloženo celkem 4 443 000 Kč, z toho pravomocně 1 640 000 Kč; nejvyšší pravomocná pokuta 898 000 Kč (firma z oboru elektronických komunikací za ukládání marketingových cookies bez souhlasu) | [1](https://uoou.gov.cz/udeleny-pokuty-ve-vysi-temer-45-mil-kc) |

### Nástroje

**PageSpeed Insights (web, pagespeed.web.dev)** — zdarma, bez registrace

Jediné místo, kde vedle sebe uvidíte terénní data z CrUX (sekce „Zjistěte, jaké zkušenosti mají skuteční uživatelé" — LCP, INP, CLS, FCP, TTFB za 28 dní, zvlášť mobil/desktop, plus rozložení good/NI/poor) a laboratorní Lighthouse audit (sekce „Diagnostikujte problémy s výkonem"). Nahoře je odznak „Core Web Vitals Assessment: Passed/Failed" — ten se řídí VÝHRADNĚ terénními daty, ne skóre.

**PageSpeed Insights API (pagespeedonline.googleapis.com/v5)** — zdarma, vyžaduje API klíč z Google Cloud (bez klíče je sdílená anonymní kvóta a v praxi bývá vyčerpaná — ověřeno 8. 9. 2026: „Quota exceeded")

Strojově čitelné JSON: loadingExperience (URL-level CrUX), originLoadingExperience (origin-level), lighthouseResult s audity, verzí Lighthouse a benchmarkIndex. Ideální pro dávkové proměření 20–50 podstránek klienta a pro měření před/po.

**CrUX API (chromeuxreport.googleapis.com)** — zdarma, 150 dotazů/min na jeden Google Cloud projekt; nelze rozšířit ani za peníze; vyžaduje API klíč

Až 12 metrik včetně experimental_time_to_first_byte, round_trip_time, navigation_types a rozpadu LCP na subparts (od ledna 2025). Umožňuje segmentaci na PHONE / DESKTOP / TABLET. Jediný způsob, jak zvenčí dostat rozpad LCP na TTFB / load delay / load duration / render delay z reálných uživatelů.

**CrUX Vis (cruxvis.withgoogle.com)** — zdarma

Trend Core Web Vitals za 40 týdnů, nový bod každé pondělí (každý za předchozích 28 dní). Umí origin i URL úroveň, filtr zařízení, zobrazení 75. percentilu i celého rozdělení. Nejlepší nástroj pro odpověď „bylo to horší už před rokem, nebo to pokazila poslední úprava?"

**Google Search Console — report Core Web Vitals** — zdarma, ale vyžaduje přístup do účtu klienta

Jediný pohled na CWV napříč celým webem se seskupením URL do skupin s podobným zážitkem — ukáže, KTERÉ šablony jsou rozbité, ne jen homepage. Po opravě umí spustit validaci.

**Chrome DevTools — Performance panel + Lighthouse + Web Vitals rozšíření** — zdarma

Jediný nástroj, kterým zvenčí prakticky změříte INP — nahrajete interakci (menu, filtr, odeslání formuláře) a vidíte input delay / processing / presentation delay, dlouhé úlohy a jejich původ (skript třetí strany). Rovněž ukáže, který prvek je LCP, a v CLS insightu viníky posunů.

**Lighthouse CLI (npm lighthouse, aktuálně 13.4.1, vydáno 20. 7. 2026)** — zdarma, open source; vyžaduje Node 22.19+

Reprodukovatelné, skriptovatelné měření s vlastním throttlingem — umožní proměřit 30 podstránek klienta ve stejných podmínkách a uložit JSON pro porovnání před/po. Od verze 13 jsou staré audity nahrazeny „insights" sjednocenými s DevTools Performance panelem.

**curl (TTFB, přesměrování, hlavičky, komprese, HTTP verze)** — zdarma

Nejrychlejší tvrdá data do reportu bez jakéhokoli přístupu: curl -sS -o /dev/null -L -w '%{num_redirects} %{time_starttransfer} %{size_download} %{http_version}' https://firma.cz/ a curl -I pro Cache-Control (bfcache), Content-Encoding (br / gzip / deflate), Server, alt-svc (HTTP/3), Link (103 Early Hints). Dá se tím i ověřit, zda CDN podává AVIF/WebP podle hlavičky Accept.

**WebPageTest (webpagetest.org)** — zdarma 150 testovacích běhů měsíčně; placené plány od 180 USD/rok; plán Expert od 11 988 USD/rok (RUM + user journeys)

Test z konkrétní geografické lokality na konkrétním zařízení a síti — pro české klienty klíčové, protože umožní změřit TTFB a LCP z Evropy, ne z USA. Waterfall, filmstrip a video jsou nejlepší materiál do reportu pro netechnického klienta.

**Treo (treo.sh)** — Free: 0 USD (50 CrUX stránek, 5 webů, 2 roky historie, bez Lighthouse auditů). Vital 75 USD/měs, Pro 185 USD/měs, Scale 375 USD/měs; roční platba se slevou 25 %

CrUX dashboard s historií pro více webů a URL najednou. Free tier stačí na audit jednoho klienta a na porovnání s konkurencí.

**GTmetrix** — free tier k dispozici; Solo 10 USD/měs (5 sledovaných URL, 3 lokality), Starter 20 USD/měs (15 URL, 5 lokalit), Growth 40 USD/měs (30 URL, 7 lokalit)

Monitoring z vybraných lokalit s historií a upozorněními. Klienti ho často znají a mají v něm staré reporty.

**web-vitals JS knihovna (npm web-vitals, aktuálně 6.2.1)** — zdarma, open source

Vlastní RUM — jediný způsob, jak klient uvidí LCP a INP ze Safari a iOS, které CrUX nikdy nezachytí (od 12. 12. 2025 podporuje Safari 26.2 LCP API i Event Timing API). Umí attribution build, který u INP řekne, KTERÝ prvek a KTERÝ skript interakci zdržel.

**HTTP Archive — Web Almanac a Core Web Vitals Technology Report** — zdarma

Referenční hodnoty, proti kterým se dá klientovo číslo porovnat („jste v horní čtvrtině váhy stránek"). Technology Report umožní srovnat pass rate podle CMS/platformy.


### Časté chyby

**Klient (i dodavatel) považuje Lighthouse skóre 0–100 za „Core Web Vitals" a chce ho zelené** — kritická

*Jak poznat:* V PSI jsou to dvě úplně oddělené sekce. Odznak „Core Web Vitals Assessment: Passed/Failed" se řídí terénními daty z CrUX; číslo v kolečku je Lighthouse lab skóre. Běžně se rozcházejí — web se skóre 62 může mít CWV „Passed" a web se skóre 95 „Failed". Do skóre navíc INP nevstupuje vůbec (má tam 30% váhu TBT), takže web s katastrofálním INP může mít 95.

*Náprava:* V reportu vždy oddělit dvě otázky: (1) Procházíme Core Web Vitals? — odpověď z terénních dat, 75. percentil, mobil a desktop zvlášť. (2) Proč ne a co s tím? — odpověď z lab dat. Lighthouse skóre uvádět jako diagnostiku, ne jako cíl, a doplnit rozptyl z několika běhů. Klientovi řekněte rovnou: „skóre 100 negarantuje, že projdete, a skóre 70 neznamená, že neprocházíte."

**Homepage má stovky až tisíce <img> v HTML a téměř žádný nemá width a height** — kritická

*Jak poznat:* view-source a spočítat. Reálný nález na alcadrain.cz (8. 9. 2026): 1 321 kB HTML, 1 248 <img> tagů, z toho jen 6 s width i height a jen 15 s loading="lazy" — tedy přes 1 200 obrázků se načítá horlivě a bez rezervovaného místa. Na cetin.cz 35 obrázků, ani jeden s rozměry. Na cez.cz 26 obrázků, ani jeden s rozměry. Globálně má tenhle problém 62 % mobilních stránek.

*Náprava:* Doplnit width a height (nebo CSS aspect-ratio) ke každému obrázku — prohlížeč si z nich sám dopočítá poměr stran a rezervuje místo ještě před stažením. U mřížek produktů a referencí nastavit min-height kontejneru. Zároveň nasadit loading="lazy" na vše pod prvním viewportem: tady se řeší dva problémy najednou (CLS i objem přenesených dat).

**Celý katalog nebo obsah CMS je serializovaný do inline <script> v HTML** — kritická

*Jak poznat:* Neúměrně velké HTML při malém počtu obrázků. Reálný nález na koh-i-noor.cz (8. 9. 2026): HTML 1 186 131 B, z toho 1 164 217 B je inline <script> — tedy 98 % dokumentu je JSON s daty, ne obsah. Zároveň jede na HTTP/1.1. Podobně tescoma.cz 521 kB HTML, tonak.cz 735 kB HTML.

*Náprava:* Data přesunout do samostatného, cacheovatelného souboru nebo je načítat až po interakci. Inline blob se nedá cacheovat, znovu se stahuje při každém zobrazení stránky, musí se celý naparsovat na hlavním vlákně (přímý dopad na INP a TBT) a nafukuje TTFB, protože ho server musí vygenerovat. Toto je typicky nález, který se v reportu formuluje jako „strukturální" a vede na zakázku, ne na quick win.

**Cookie lišta naskočí až po načtení a odsune obsah dolů** — vysoká

*Jak poznat:* Načíst stránku v anonymním okně na mobilním rozlišení a sledovat první 2–3 sekundy. V HTML hledat cookiebot / onetrust / cookie-script / cookieconsent — na testovaných českých webech nalezeno na linet.com (Cookiebot), brano.eu (cookie-script), alcadrain.cz a rako.cz (vlastní řešení). V DevTools se to projeví jako CLS insight s viníkem <body> nebo hlavním kontejnerem.

*Náprava:* Lišta musí být position: fixed nebo v overlay mimo tok dokumentu, ne vložená nad obsah. Pokud musí být v toku, rezervovat místo přes min-height. Pozor: v ČR je od 1. 1. 2022 podle § 89 odst. 3 zákona o elektronických komunikacích povinný opt-in, takže lištu nelze prostě zrušit — a ÚOOÚ za to reálně pokutuje (jen do 2. 8. 2023 uložil 4 443 000 Kč, nejvyšší pravomocná pokuta 898 000 Kč). Řešení je technické, ne právní.

**Hero obrázek má loading="lazy", nebo je nastavený jako CSS background-image** — kritická

*Jak poznat:* V DevTools zjistit LCP prvek a podívat se, jestli má loading="lazy", případně jestli vůbec je v HTML. Pokud je LCP prvkem div s background-image, prohlížeč se o něm dozví až po stažení a zpracování CSS — v rozpadu LCP se to projeví jako vysoký resource load delay. Globálně má LCP obrázek s lazy loadingem 16–17 % stránek.

*Náprava:* LCP obrázek dát do HTML jako <img> bez loading="lazy", s fetchpriority="high". Pokud musí zůstat v CSS, přidat <link rel="preload" as="image" fetchpriority="high">. Doložitelný efekt: Google Flights zlepšil LCP z 2,6 s na 1,9 s jen fetchpriority; A/B test na WordPressu ukázal zlepšení LCP o 13–15 % po vypnutí lazy loadingu nad ohybem. Pozor na past: fetchpriority="high" NEPŘEBIJE loading="lazy" — kombinace obou je stále pomalá.

**Desítky stylesheetů a synchronních skriptů v <head>** — vysoká

*Jak poznat:* Spočítat v HTML <link rel=stylesheet> a <script src> bez async/defer před </head>. Reálné nálezy (8. 9. 2026): alcadrain.cz 29 stylesheetů a 5 synchronních skriptů v hlavičce; juta.cz 15 synchronních skriptů v hlavičce (a přitom jen 62 kB HTML); dek.cz 7 stylesheetů a 9 synchronních skriptů; skoda-auto.cz 10 stylesheetů; cetin.cz 6 stylesheetů a 3 synchronní skripty.

*Náprava:* Sloučit stylesheety do jednoho buildu. Každý <script src> v hlavičce, který není nutný pro první vykreslení, dostane defer (nebo async u nezávislých měřicích skriptů). Do reportu je to nejsrozumitelnější položka: „než se ukáže první písmeno, čeká váš web na 29 souborů se styly." Efekt se pozná jako zmenšení rozdílu FCP − TTFB.

**Fonty se načítají přes JavaScript (Web Font Loader) místo obyčejného <link>** — vysoká

*Jak poznat:* V hlavičce je <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"> BEZ async/defer a hned pod ním inline WebFont.load({google:{families:[...]}}). Ověřeno 8. 9. 2026 na webkit.studio (Webflow). Skript je render-blocking a Web Font Loader 1.6.26 volá starý endpoint fonts.googleapis.com/css (v1), který bez parametru display vrací @font-face BEZ font-display — tedy font-display: auto, tedy v Chrome zhruba 3 s neviditelného textu (FOIT).

*Náprava:* Nahradit obyčejným <link rel="stylesheet" href="https://fonts.googleapis.com/css2?...&display=swap"> s předřazeným preconnect na fonts.googleapis.com a fonts.gstatic.com (crossorigin), nebo ještě lépe fonty self-hostovat s vlastním @font-face a font-display: swap. Ověřeno: stejné URL s &display=swap už font-display do CSS vloží. Bonus: self-hosting zároveň řeší GDPR riziko (LG München, 20. 1. 2022, sp. zn. 3 O 17493/20, přiznal poškozenému 100 EUR za předání IP adresy Googlu bez souhlasu).

**Chybí latin-ext subset, nebo se naopak stahují všechny subsety** — vysoká

*Jak poznat:* Otevřít URL Google Fonts CSS z hlavičky a spočítat @font-face bloky. Pro Inter 400 (ověřeno 8. 9. 2026) jich je 7: cyrillic-ext, cyrillic, greek-ext, greek, vietnamese, latin-ext, latin. Česká stránka reálně stáhne latin (23 664 B) I latin-ext (35 000 B), protože ě š č ř ž ů jsou v latin-ext — dohromady 58 664 B na jeden řez místo 23 664 B. Při 3 rodinách × 3 řezech je to přes půl megabajtu jen na písmo.

*Náprava:* Redukovat počet rodin a řezů (typicky stačí 2 rodiny × 2–3 řezy). Self-hostovat a subsetovat na skutečně použité znaky (české weby nepotřebují cyrilici, řečtinu ani vietnamštinu). Pokud zůstane Google Fonts, preloadovat oba potřebné soubory (latin i latin-ext) — preload jen latinky nechá diakritiku doskočit později a text s háčky se překreslí zvlášť. Toto je specificky český problém, který anglojazyčné návody neřeší.

**Cache-Control: no-store na HTML zabíjí back/forward cache** — vysoká

*Jak poznat:* curl -I na homepage. Reálné nálezy (8. 9. 2026): alcadrain.cz „no-store, no-cache, must-revalidate, post-check=0, pre-check=0"; cetin.cz „private, no-cache, no-store, must-revalidate"; tescoma.cz „private, no-cache, no-store, max-age=0, must-revalidate". Globálně to má 23 % stránek.

*Náprava:* no-store patří jen na stránky se skutečně citlivým obsahem (účet, košík s osobními údaji), ne na homepage a katalog. Zároveň zkontrolovat unload handlery (má je 10–11 % stránek), které bfcache blokují stejně. Argument pro klienta: 1 z 5 mobilních navigací je tlačítko zpět — dnes u vás trvá stejně dlouho jako první načtení, mohlo by být okamžité. CrUX počítá obnovení z bfcache jako samostatnou návštěvu s prakticky nulovým LCP, takže to zlepší i 75. percentil.

**Řetězec přesměrování na vstupní URL** — střední

*Jak poznat:* curl -sSL -o /dev/null -w '%{num_redirects} %{time_starttransfer}'. Reálné nálezy (8. 9. 2026): kb.cz → 2 přesměrování, TTFB 2,29 s; brano.eu → www.brano.group/cs, 2 přesměrování; alcaplast.cz → www.alcadrain.cz (přesměrování na jinou doménu po rebrandu), TTFB 3,44 s. U českých firem po rebrandu nebo po sloučení je to skoro pravidlo.

*Náprava:* Zkrátit na jeden skok (nekanonická doména → cílová URL přímo, ne přes mezistupně). Nasadit HSTS, aby opakované návštěvy přeskočily http → https skok. Zkontrolovat, že odkazy v Google Ads, e-mailech a na vizitkách míří na finální URL, ne na přesměrovávanou. Levná položka s okamžitě měřitelným efektem — dobrý „vstupní" nález do reportu.

**Web běží na HTTP/1.1 bez HTTP/2 a HTTP/3** — vysoká

*Jak poznat:* curl -w '%{http_version}' a curl -I | grep alt-svc. Reálné nálezy (8. 9. 2026): kb.cz, cez.cz, cetin.cz a koh-i-noor.cz odpovídají na HTTP/1.1. Na HTTP/1.1 se každý z 70+ požadavků řadí do fronty na 6 paralelních spojení na doménu.

*Náprava:* Většinou stačí zapnout HTTP/2 na reverzní proxy nebo předřadit CDN. U velké banky nebo telco je to zásah do infrastruktury, ale je to fakt, který v reportu stojí za zmínku, protože se dá ověřit za deset sekund a zpochybnit nedá.

**Slabá nebo zastaralá komprese odpovědi** — střední

*Jak poznat:* curl -I --compressed | grep content-encoding. Reálný nález (8. 9. 2026): alcadrain.cz posílá „content-encoding: deflate" — legacy algoritmus, který komprimuje hůř než gzip i brotli. Pro srovnání tonak.cz posílá „br" (brotli).

*Náprava:* Zapnout Brotli (fallback gzip) na text/html, CSS, JS, SVG a JSON. Na HTML dokumentu o 1,3 MB je rozdíl mezi deflate a brotli řádově stovky kB, tedy přímý dopad na TTFB i LCP na mobilní síti.

**Obrázky ve starých formátech a v původním rozlišení z fotoaparátu** — vysoká

*Jak poznat:* Spočítat výskyty přípon v HTML. Reálné nálezy (8. 9. 2026): tonak.cz 689 odkazů na .png a 202 na .jpg, žádný webp/avif; tescoma.cz 275 .png; alcadrain.cz 1 225 .png; cez.cz 108 .jpg a žádný moderní formát. Globálně jsou LCP obrázky z 57 % JPG, 26 % PNG, 11 % WebP a jen 0,7 % AVIF.

*Náprava:* Fotky do AVIF (95,36 % podpory) nebo WebP (96,82 %) s <picture> fallbackem. Loga, ikony a diagramy do SVG — PNG s logem v 1200 px je vždy chyba. Pozor na výjimku: u malých obrázků a grafiky s ostrými hranami může být AVIF horší než dobře optimalizovaný PNG nebo SVG, takže je nutné porovnat výstupy, ne konvertovat naslepo.

**srcset je sice generovaný, ale sizes je paušální 100vw** — vysoká

*Jak poznat:* V HTML hledat sizes="100vw" u obrázků, které zjevně nezabírají celou šířku (dlaždice v mřížce, ikony, náhledy referencí). Ověřeno 8. 9. 2026 na produkčních Webflow webech: jasper.ai má sizes="100vw" u 29 z 33 obrázků se srcset; attentive.com u 17 z 23; lattice.com u části. Prohlížeč pak vybere nejširší variantu i pro obrázek zobrazený na 300 px.

*Náprava:* Vyplnit sizes podle skutečného layoutu, např. sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 380px". Ve Webflow se to zadává ručně v nastavení obrázku. Rozdíl bývá 3–6× v přenesených bajtech beze změny vzhledu — v reportu se to dobře doloží tabulkou „stahujete 1 600 px, zobrazujete 380 px".

**Lazy loading nasazený plošně na všechno včetně prvního viewportu** — vysoká

*Jak poznat:* Spočítat poměr loading="lazy" ku celkovému počtu obrázků a zjistit, jestli mezi nimi je LCP prvek. Ověřeno 8. 9. 2026: jasper.ai má loading="lazy" na 64 ze 64 obrázků (100 %), attentive.com na 118 ze 154, brano.eu na 39 ze 41. Ve Webflow je „lazy" výchozí volbou Image elementu, takže se to stane samo, pokud to nikdo nezmění.

*Náprava:* Pravidlo: vše v prvním viewportu eager, vše pod ním lazy. Doložitelný dopad: medián stránky bez lazy loadingu má 75. percentil LCP 2 922 ms, se zapnutým lazy loadingem 3 546 ms. V reportu to funguje jako protiargument k lidové moudrosti „lazy loading je vždy dobrý".

**Nekontrolovaně přibývající měřicí a marketingové skripty třetích stran** — vysoká

*Jak poznat:* Spočítat unikátní cizí hosty odkazované z HTML. Reálné nálezy (8. 9. 2026): alcadrain.cz 40 hostů, tescoma.cz 35, tonak.cz 29 a 98 externích JS souborů; ostatní testované české weby 12–17. Každý host znamená DNS + TCP + TLS navíc, každý skript parsování a spouštění na hlavním vlákně.

*Náprava:* Udělat inventuru: kdo skript objednal, kdo data čte, kdy naposledy. Zrušit skripty po skončených kampaních. Zbytek načítat až po interakci nebo přes consent (což je v ČR stejně povinné). U chatů a heatmap zvážit facade pattern. Toto je jediná část auditu, kde lze doporučit škrt bez ztráty funkce — a proto nejlépe průchozí u vedení firmy.

**Animace přes top / left / box-shadow místo transform** — střední

*Jak poznat:* V DevTools Performance panelu se to projeví jako opakované Layout a Paint během scrollování nebo hoveru. V CSS hledat @keyframes a transition, které cílí na top, left, width, height, box-shadow. Globálně to má 40 % mobilních a 44 % desktopových stránek.

*Náprava:* Přepsat na transform a opacity, které umí kompozitor bez layoutu. Dopad je na CLS (posuny) i na INP (hlavní vlákno má práci navíc, když uživatel klikne). U českých firemních webů to typicky přinášejí zakoupené šablony a jQuery efekty.

**Report se opírá o jedno měření z jednoho místa a jednoho běhu** — vysoká

*Jak poznat:* V reportu je jedno číslo bez data, bez lokality a bez informace, jestli jde o mobil nebo desktop. Google sám upozorňuje, že rozptyl Lighthouse skóre nezpůsobuje Lighthouse, ale měnící se podmínky (A/B testy, reklamy, routing, výkon stroje, rozšíření prohlížeče), a doporučuje uvažovat o výkonu jako o rozdělení, ne o jednom čísle.

*Náprava:* Do metodiky napevno: každou lab metriku měřit minimálně 3–5×, uvádět medián a rozptyl; vždy uvést datum, lokalitu měření, form factor a verzi Lighthouse. Terénní data uvádět s datem sběru a s explicitním údajem, zda jde o URL-level nebo origin-level. Bez toho je report zpochybnitelný a při reklamaci neobhajitelný.

**Audit slibuje zlepšení pozic ve vyhledávání jako hlavní přínos** — vysoká

*Jak poznat:* V nabídce nebo reportu je věta typu „zlepšíme vám pozice v Googlu". Google oficiálně říká jen to, že dobrý page experience „aligns with what our core ranking systems seek to reward"; John Mueller opakovaně uvedl, že relevance je výrazně důležitější a že CWV nejsou velký ranking faktor.

*Náprava:* Prodávat na doložitelných obchodních dopadech, ne na SEO slibech: Vodafone zlepšil LCP o 31 % a měl o 8 % vyšší prodeje; Tokopedia zlepšila LCP o 55 % a délku session o 23 %; iCook zlepšil CLS o 15 % a měl o 10 % vyšší příjmy z reklamy; Cdiscount +6 % tržeb; NDTV −50 % míra okamžitého opuštění. Pozice zmínit jako sekundární efekt, ne jako slib — jinak riskujete reklamaci, kterou neustojíte.


### Česká specifika

Diakritika zdvojnásobuje cenu písma. České ě š č ř ž ů leží v Unicode bloku latin-ext, ne v latin. Google Fonts servíruje subsety přes unicode-range, takže česká stránka reálně stáhne dva soubory tam, kde anglická stáhne jeden. Ověřeno 8. 9. 2026 na Interu 400: latin 23 664 B, latin-ext 35 000 B, dohromady 58 664 B na jeden řez místo 23 664 B, tedy 2,5×. Praktické důsledky pro audit: (1) rozpočet na fonty musí být pro české weby vyšší než v anglických metodikách, (2) preload jen latinkového souboru je chyba — nadpis s diakritikou doskočí zvlášť a překreslí se dvakrát, (3) subsetting se u českých webů vyplatí víc než jinde, protože se dá bezpečně vyhodit cyrilice, řečtina a vietnamština, které Google Fonts posílá v definici stejně.

Cookie lišta je právní povinnost, ne volitelný prvek. Od 1. 1. 2022 platí podle § 89 odst. 3 zákona o elektronických komunikacích režim opt-in — předchozí prokazatelný souhlas pro většinu cookies. ÚOOÚ to reálně vymáhá: jen za rok 2023 do 2. 8. 2023 uložil pokuty za 4 443 000 Kč, z toho pravomocně 1 640 000 Kč, nejvyšší pravomocná pokuta 898 000 Kč. Pro audit to znamená, že doporučení „zrušte lištu\" je nepoužitelné a doporučení musí být čistě technické: overlay místo prvku v toku dokumentu, rezervované místo, načtení lišty co nejdřív a co nejmenším skriptem. Zároveň platí, že blokování měřicích skriptů do souhlasu je v ČR povinné — což je mimochodem výkonově výhodné a dá se to klientovi prodat jako „shoda a rychlost v jednom\".

Google Fonts z CDN je v EU právní riziko, ne jen výkonové. LG München rozhodl 20. 1. 2022 (sp. zn. 3 O 17493/20), že vložení Google Fonts bez souhlasu porušuje práva uživatele předáním IP adresy do USA, a přiznal 100 EUR. Rozsudek není pro ČR závazný, ale je to standardní argument, kterým se dá u českých klientů prosadit self-hosting fontů — a self-hosting je zároveň výkonově lepší (odpadnou dvě cizí domény z kritické cesty, dá se subsetovat a dá se preloadovat konkrétní soubor).

Servery a CDN často stojí mimo ČR a mimo edge. Z testovaných českých firemních webů (8. 9. 2026) běží juta.cz na 151.80.91.111 (OVH), rako.cz na 157.230.116.199 (DigitalOcean), koh-i-noor.cz na 5.75.151.169 (Hetzner) a brano.group na AmazonS3 za CloudFrontem. U Webflow je HTML generováno v us-east-1 (hlavička x-wf-region: us-east-1, ověřeno na webkit.studio) a teprve pak cachováno na Cloudflare edge — první, necachovaný požadavek jde tedy pro českého návštěvníka přes Atlantik. Pro metodiku z toho plyne tvrdé pravidlo: TTFB měřený z jiného kontinentu není použitelný proti absolutním prahům. Měřte z ČR nebo alespoň z EU (WebPageTest umožňuje volbu lokality) a v reportu vždy uveďte, odkud se měřilo. Moje vlastní naměřené TTFB (kb.cz 2,29 s, alcadrain.cz 3,44 s, juta.cz 3,33 s, skoda-auto.cz 2,43 s) jsou z tohoto důvodu nadhodnocené a v klientském reportu by se takto použít nesměly — použitelné jsou jen relativně, k porovnání stránek téhož webu.

Zastaralý stack je u velkých českých značek běžný. Z testovaného vzorku odpovídají na HTTP/1.1 kb.cz, cez.cz, cetin.cz i koh-i-noor.cz; alcadrain.cz komprimuje ještě algoritmem deflate. To je v západních metodikách považováno za vyřešený problém, v ČR ho reálně najdete i u firem s miliardovými obraty — a je to nález, který se ověří za deset sekund a nedá se zpochybnit.

Segment 10–250 zaměstnanců má typicky nulová URL-level data v CrUX. Firemní web s několika tisíci návštěvami měsíčně nemá dost dat na to, aby PSI ukázalo terénní data pro konkrétní podstránku — spadne to na origin-level, tedy průměr přes celý web včetně kariérní sekce a blogu. To je nutné v reportu přiznat a je to zároveň nejsilnější argument pro navazující zakázku: nasazení web-vitals RUM, které jako jediné ukáže i iOS návštěvníky (CrUX je výhradně Chrome na desktopu a Androidu, bez Chrome na iOS, bez WebView a bez Edge). Od 12. 12. 2025 to konečně jde i technicky — Safari 26.2 přidalo LCP API a Event Timing API, takže LCP a INP jsou měřitelné napříč prohlížeči; CLS zůstává jen v Chromiu.

### Kde si nejsme jistí

- Webflow — chování obrázků: podle marketingových a SEO článků Webflow „automaticky servíruje obrázky ve WebP". Empiricky jsem to 8. 9. 2026 VYVRÁTIL: požadavek na PNG na cdn.prod.website-files.com s hlavičkou Accept: image/avif,image/webp vrátil stále image/png (7 032 B), a URL parametry ?format=webp, ?w=500 ani ?fm=webp neměly žádný efekt. Konverze formátu je ve Webflow ruční jednorázová operace v Assets panelu (Image conversion tool, dostupná od 31. 7. 2024, limit 100 assetů na požadavek a 10 požadavků za minutu). Automatické je pouze generování rozměrových variant srcset. Ověřte prosím na aktuálním projektu, než to napíšete do klientského reportu — Webflow to může kdykoli změnit.
- Webflow — chybějící width/height: na třech produkčních Webflow webech (jasper.ai, lattice.com, attentive.com, měřeno 8. 9. 2026) nemá ani jeden z 311 <img> tagů atributy width a height, a ani jeden nemá fetchpriority. Vypadá to jako systémové chování Webflow Designeru, ale nemám k tomu oficiální dokumentaci Webflow, která by to potvrdila jako záměr. Ověřte na vlastním projektu.
- Webflow — nedostupná oficiální dokumentace: help.webflow.com vrací pro automatizované dotazy 403 (Cloudflare challenge), takže čísla o variantách srcset (3200/2600/2000/1600/1080/800/500 px) a o limitu 4 MB na obrázek jsem převzal ze sekundárních citací oficiálního help centra, ne z přímého čtení. Před použitím v placeném reportu je otevřete v prohlížeči a ověřte.
- Ceník DebugBear se mi nepodařilo ověřit z primárního zdroje — stránka debugbear.com/pricing je vykreslovaná JavaScriptem a přes fetch vrací jen navigaci. Sekundární zdroje uvádějí rozporné údaje (79 USD/měs vs. Startup 125 / Team 249 / Corporate 899 USD/měs). Neuvádějte konkrétní číslo, dokud ho neuvidíte na webu.
- Ceník GTmetrix (Solo 10 / Starter 20 / Growth 40 USD měsíčně) pochází ze sekundárních zdrojů — gtmetrix.com/pro vrací 403 pro automatizované dotazy. Před citací ověřte v prohlížeči.
- Denní kvóta PageSpeed Insights API se mi nepodařilo najít v oficiální dokumentaci Google. Ověřeno je jen to, že bez API klíče je sdílená anonymní kvóta a 8. 9. 2026 byla vyčerpaná („Quota exceeded for quota metric Queries and limit Queries per day"). Pro produkční použití si zřiďte vlastní klíč a kvótu si přečtěte v Google Cloud Console.
- Rozpor uvnitř Web Almanacu 2025, kapitola Page Weight: distribuční tabulka uvádí mediánovou váhu 2 164 kB (mobil) / 2 412 kB (desktop), ale text téže kapitoly mluví o „2,6 MB" mobilní a „2,9 MB" desktopové mediánové domovské stránce. Pravděpodobně jde o různé řezy dat (všechny stránky vs. domovské stránky, případně jiný měsíc crawlu). V reportu používejte jedno z nich a uveďte, které — nemíchejte je.
- Několik SEO blogů tvrdí, že Google v březnu 2026 přešel na hodnocení Core Web Vitals na úrovni celého webu místo jednotlivých stránek a že zavádí novou metriku „Engagement Reliability (ER)". NEPODAŘILO SE MI TO OVĚŘIT z žádného oficiálního zdroje — web.dev/articles/vitals k 8. 9. 2026 uvádí stále jen LCP, INP a CLS a žádnou takovou změnu; CrUX release notes za leden až červenec 2026 žádnou změnu metrik ani prahů neobsahují. Považuji to za AI generovaný SEO obsah. Do metodiky to nedávejte.
- Tvrzení o pass rate podle platforem (Wix 80,7 %, Squarespace 70,2 %, Webflow 68,9 %, WordPress 49,3 % apod.) kolují po SEO blozích v mnoha vzájemně nekonzistentních variantách. Oficiální Core Web Vitals Technology Report na httparchive.org je JS aplikace bez veřejného dokumentovaného API (moje pokusy o endpointy vrátily 404), takže jsem žádné z těch čísel nemohl ověřit u zdroje. Pokud je chcete v nabídce použít, otevřete report v prohlížeči a odečtěte hodnotu ručně i s datem crawlu.
- Změna auditu velikosti DOM v Lighthouse 13 (že místo počtu uzlů nově vychází z toho, zda style recalculation a layout přesáhnou 40 ms) pochází ze sekundárního zdroje, ne z oficiálního blogu Chrome. Prahy ~800 / ~1 400 uzlů, hloubka > 32 a > 60 potomků jsou z oficiální dokumentace Lighthouse, ale mohly být verzí 13 nahrazeny.
- Všechna TTFB čísla naměřená u českých webů (kb.cz 2,29 s, alcadrain.cz 3,44 s, juta.cz 3,33 s, skoda-auto.cz 2,43 s, rohlik.cz 1,58 s, tescoma.cz 2,83 s, linet.com 3,05 s, rako.cz 2,18 s) byla pořízena 8. 9. 2026 z prostředí mimo Evropu přes proxy. Jsou proto nadhodnocená o transatlantickou latenci a NESMÍ se porovnávat s prahem 0,8 s. Použitelná jsou pouze relativně, k porovnání mezi weby a mezi stránkami téhož webu. Před použitím v klientském reportu přeměřte z ČR.
- Údaj o českém segmentu firem 10–250 zaměstnanců: neexistuje veřejný CrUX dataset filtrovaný na Českou republiku přes API (country dimenze je jen v BigQuery datasetu). Nemám tedy ověřený národní benchmark pass rate pro ČR. Pokud ho chcete v nabídce používat, je potřeba si ho jednorázově spočítat dotazem nad CrUX v BigQuery.
- Rozsudek LG München (20. 1. 2022, sp. zn. 3 O 17493/20) je německý a pro české soudy nezávazný. Nenašel jsem žádné rozhodnutí ÚOOÚ ani českého soudu, které by se týkalo přímo Google Fonts. Používejte ho jako indikaci rizika, ne jako právní tvrzení — a právní formulace v reportu nechte na právníkovi klienta.

<details><summary>Zdroje (60)</summary>

- https://web.dev/articles/vitals
- https://web.dev/articles/defining-core-web-vitals-thresholds
- https://web.dev/articles/lcp
- https://web.dev/articles/optimize-lcp
- https://web.dev/articles/inp
- https://web.dev/articles/optimize-inp
- https://web.dev/articles/cls
- https://web.dev/articles/optimize-cls
- https://web.dev/articles/ttfb
- https://web.dev/articles/optimize-ttfb
- https://web.dev/articles/fcp
- https://web.dev/articles/lab-and-field-data-differences
- https://web.dev/articles/crux-and-rum-differences
- https://web.dev/articles/bfcache
- https://web.dev/articles/font-best-practices
- https://web.dev/articles/browser-level-image-lazy-loading
- https://web.dev/articles/lcp-lazy-loading
- https://web.dev/articles/fetch-priority
- https://web.dev/articles/dom-size-and-interactivity
- https://web.dev/case-studies/vitals-business-impact
- https://web.dev/blog/inp-cwv-march-12
- https://web.dev/blog/inp-cwv-launch
- https://web.dev/blog/lcp-and-inp-are-now-baseline-newly-available
- https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- https://developer.chrome.com/docs/lighthouse/performance/dom-size
- https://developer.chrome.com/blog/lighthouse-13-0
- https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md
- https://developer.chrome.com/docs/crux/methodology
- https://developer.chrome.com/docs/crux/api
- https://developer.chrome.com/docs/crux/vis
- https://developer.chrome.com/docs/crux/release-notes
- https://developer.chrome.com/docs/crux/guides/pagespeed-insights
- https://developer.chrome.com/blog/crux-dashboard-deprecation
- https://developer.chrome.com/docs/web-platform/prerender-pages
- https://developers.google.com/speed/docs/insights/release_notes
- https://developers.google.com/speed/docs/insights/v5/about
- https://developers.google.com/speed/docs/insights/v5/get-started
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://support.google.com/webmasters/answer/9205520
- https://almanac.httparchive.org/en/2025/page-weight
- https://almanac.httparchive.org/en/2025/performance
- https://caniuse.com/avif
- https://caniuse.com/webp
- https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
- https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap
- https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images
- https://help.webflow.com/hc/en-us/articles/33961269934227-Assets-panel
- https://help.webflow.com/hc/en-us/articles/33961311761939-Image-conversion-tool
- https://webflow.com/updates/avif-image-support-conversion-tool
- https://webflow.com/updates/increased-custom-code-character-limit
- https://treo.sh/pricing
- https://www.webpagetest.org/signup
- https://www.debugbear.com/pricing
- https://gtmetrix.com/blog/weve-updated-our-gtmetrix-pro-plans/
- https://registry.npmjs.org/web-vitals/latest
- https://registry.npmjs.org/lighthouse/latest
- https://uoou.gov.cz/udeleny-pokuty-ve-vysi-temer-45-mil-kc
- https://www.pravniprostor.cz/clanky/ostatni-pravo/novela-zakona-o-elektronickych-komunikacich-zavadi-povinnost-predchoziho-souhlasu-pro-pouziti-cookies-od-1-ledna-2022
- https://www.lhr-law.de/magazin/datenschutzrecht/google-fonts/
- https://www.searchenginejournal.com/googles-mueller-dismisses-core-web-vitals-impact-on-rankings/530715/

</details>

---

## 3. Přístupnost (WCAG 2.2 AA, EN 301 549, zákon č. 424/2023 Sb.)

Kódy bodů v kontrolním seznamu: `PRIS-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| Kontrast běžného textu vůči pozadí | ≥ 4,5:1 (AA), ≥ 7:1 pro AAA | < 4,5:1 – porušení SC 1.4.3 | [1](https://www.w3.org/TR/WCAG22/) |
| Kontrast velkého textu | ≥ 3:1 (AA), ≥ 4,5:1 pro AAA | < 3:1 | [1](https://www.w3.org/TR/WCAG22/#dfn-large-scale) |
| Kontrast ovládacích prvků, jejich stavů a informační grafiky | ≥ 3:1 vůči sousedním barvám | < 3:1 – porušení SC 1.4.11. Netýká se neaktivních prvků a vzhledu určeného prohlížečem. | [1](https://www.w3.org/TR/WCAG22/) |
| Velikost cíle pro dotyk / ukazovací zařízení | ≥ 24 × 24 CSS px (AA), ≥ 44 × 44 CSS px (AAA). Menší cíl projde, pokud kružnice o průměru 24 px vycentrovaná na jeho obálce neprotne jiný cíl. | < 24 × 24 px bez splnění některé z pěti výjimek (rozestup, ekvivalent, uvnitř věty, řízeno prohlížečem, nezbytné) | [1](https://www.w3.org/TR/WCAG22/) |
| Indikátor zaměření (AAA měřítko, použitelné jako interní cíl) | Plocha indikátoru aspoň jako obvod o tloušťce 2 CSS px kolem prvku a kontrast ≥ 3:1 mezi zaměřeným a nezaměřeným stavem | Žádná vizuální změna při zaměření (porušení SC 2.4.7, úroveň AA) | [1](https://www.w3.org/TR/WCAG22/) |
| Přeformátování obsahu (reflow) | Bez rolování ve dvou směrech při šířce 320 CSS px (= 1280 px při zoomu 400 %), resp. výšce 256 CSS px | Vodorovné rolování při 320 px. Výjimka jen pro obsah, který dvourozměrné rozvržení nutně potřebuje (mapy, schémata, video, datové tabulky). | [1](https://www.w3.org/TR/WCAG22/) |
| Zvětšení textu | 200 % bez ztráty obsahu nebo funkčnosti | Zoom zablokovaný přes user-scalable=no nebo maximum-scale=1, nebo rozpad rozvržení | [1](https://www.w3.org/TR/WCAG22/) |
| Odolnost vůči uživatelskému nastavení mezer v textu | Beze ztráty obsahu při řádkování 1,5×, mezeře za odstavcem 2×, prostrkání 0,12× a mezislovní mezeře 0,16× velikosti písma | Ořezaný nebo překrývající se text | [1](https://www.w3.org/TR/WCAG22/) |
| Automaticky spuštěný pohyb (carousel, animace) | Pohyb kratší než 5 sekund, nebo dostupný ovládací prvek pro pauzu / zastavení / skrytí | Pohyb spuštěný automaticky, trvající déle než 5 s, vedle jiného obsahu, bez možnosti zastavení – porušení kritéria ÚROVNĚ A | [1](https://www.w3.org/TR/WCAG22/) |
| Blikání | Nejvýše 3 záblesky za sekundu, nebo pod obecným a červeným prahem záblesku | Více než 3 záblesky za sekundu – riziko fotosenzitivního záchvatu | [1](https://www.w3.org/TR/WCAG22/) |
| Rozsah WCAG 2.2 úrovně AA | 55 úspěšných kritérií (31 na úrovni A + 24 na úrovni AA) | Kritérium 4.1.1 Parsing bylo ve WCAG 2.2 označeno jako obsolete a odstraněno – kdo ho v auditu ještě uvádí, pracuje se starou verzí | [1](https://www.w3.org/TR/WCAG22/) |
| Pokuta poskytovateli služby za nezajištění přístupnosti (ČR) | 0 Kč – povinnost splněna nebo se zákon nevztahuje (mikropodnik, neregulovaná služba) | Do 10 000 000 Kč za nezajištění přístupnosti služby (§ 25 odst. 7 písm. a) a b) ve spojení s odst. 8 písm. a)); do 5 000 000 Kč za nevypracování posouzení nepřiměřené zátěže; do 2 000 000 Kč za neuchování posouzení; do 1 000 000 Kč za nezveřejnění informací o přístupnosti v obchodních podmínkách | [1](https://www.zakonyprolidi.cz/cs/2023-424) [2](https://krajta.slv.cz/2023/424/par_25)) |
| Hranice mikropodniku (výjimka ze zákona pro služby) | Méně než 10 zaměstnanců A ZÁROVEŇ roční obrat nebo bilanční suma roční rozvahy nepřevyšující 2 mil. EUR → služby jsou z působnosti zákona vyňaty | 10 a více zaměstnanců → výjimka neplatí, bez ohledu na obrat. U propojených a partnerských podniků se počty a finanční údaje sčítají, takže osmičlenná dcera velké skupiny mikropodnik není. | [1](https://mpo.gov.cz/assets/cz/podnikani/pristupnost-vyrobku-a-sluzeb/2025/6/prezentace_webinar_1.pdf) |
| Podíl chyb přístupnosti odhalitelných automatem (podle objemu nálezů) | 57,38 % objemu nálezů v reálných auditech odhalí axe-core | Zbylých ~43 % objemu nálezů automat nenajde vůbec – a jde o ty, které nejvíc bolí (klávesnice, pořadí, smysluplnost alt textů, chybové hlášky) | [1](https://www.deque.com/automated-accessibility-coverage-report/) |
| Podíl úspěšných kritérií WCAG plně pokrytých automatem | Odhad ~30 % kritérií plně automatizovatelných | ~60 % kritérií vyžaduje ruční posouzení. Rozdíl proti číslu 57 % není spor – měří se jiná věc (objem nálezů vs. počet kritérií). | [1](https://github.com/dequelabs/axe-core;) [2](https://github.com/dequelabs/axe-core/issues/4415) |
| Nezávislý test schopností automatických nástrojů | Nejlepší z 13 testovaných nástrojů našel 40 % ze 142 záměrně vložených bariér | Nejhorší našel 13 %. Žádný nástroj nenašel všechny. | [1](https://alphagov.github.io/accessibility-tool-audit/results.html) |
| Podíl domovských stránek s detekovanými chybami WCAG (svět) | Referenční hodnota neexistuje – 95,9 % stránek mělo detekované chyby | Průměr 56,1 chyby na stránku (nárůst o 10,1 % za rok). Nízký kontrast 83,9 % stránek, chybějící alt 53,1 %, chybějící popisky polí 51 %, prázdné odkazy 46,3 %, prázdná tlačítka 30,6 %, chybějící jazyk dokumentu 13,5 %. Šest nejčastějších typů chyb tvoří 96 % všech nálezů a seznam se sedm let nemění. | [1](https://webaim.org/projects/million/) |
| Nadpisy: skoky v úrovních a počet H1 (svět) | Právě jeden H1, žádné přeskočení úrovně | 41,8 % stránek přeskakuje úroveň nadpisu (v roce 2025 to bylo 39 %), 18,1 % má víc než jeden H1, 7,5 % nemá nadpisy vůbec | [1](https://webaim.org/projects/million/) |
| ARIA jako indikátor rizika | Nativní HTML prvky, ARIA jen tam, kde nativní ekvivalent neexistuje | Stránky s ARIA mají průměrně 59,1 detekovaných chyb oproti 42 u stránek bez ARIA. Průměr je 133,6 ARIA atributů na stránku (+27 % za rok). | [1](https://webaim.org/projects/million/) |
| Jak uživatelé čteček skutečně navigují | Kvalitní nadpisová osnova – 71,6 % hledá informaci na dlouhé stránce proskakováním nadpisů, 57 % považuje úrovně nadpisů za velmi užitečné | Spoléhat jen na landmarky: jako hlavní způsob hledání je uvádí 3,7 % (vždy nebo často je používá 31,8 %). Vyhledávání v textu 13,6 %, čtení celé stránky 6,4 %, proskakování odkazů 4,8 %. | [1](https://webaim.org/projects/screenreadersurvey10/) |
| Rozšíření skip linků a jejich funkčnost (svět) | Funkční skip link jako první fokusovatelný prvek | Skip link má jen 17,1 % stránek a každý desátý je rozbitý nebo nedostupný | [1](https://webaim.org/projects/million/) |
| Vestibulární potíže jako důvod pro omezení pohybu | Respektovaný @media (prefers-reduced-motion: reduce) | Nějakou formu vestibulární dysfunkce vykazovalo 35 % dospělých ve věku 40+ v americké populační studii NHANES (≈ 69 milionů lidí). To je typický profil návštěvníka českého B2B webu. | [1](https://pubmed.ncbi.nlm.nih.gov/19468085/) |
| Ztráta tržeb kvůli nepřístupnosti (UK, převoditelné jako řádový argument) | Web, na kterém lidé s postižením dokončí nákup | 69 % online zákazníků s postižením prostě odejde z webu, který se jim špatně používá; jen 8 % z nich dá provozovateli vědět. Odhad ztracených tržeb britského e‑commerce 17,1 mld. GBP ročně (2019; 11,75 mld. GBP v roce 2016). | [1](https://www.clickawaypound.com/) |
| Počet lidí s postižením – kontext pro klienta | – | V EU asi 87 milionů lidí s nějakou formou postižení. V ČR podle výběrového šetření ČSÚ 2018 přibližně 1 152 tisíc osob (13 % obyvatel 15+ v soukromých domácnostech), z toho 252 tisíc se cítilo omezeno zrakově i s brýlemi. | [1](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/persons-disabilities-eu_en) [2](https://www.czso.cz/csu/czso/vyberove-setreni-osob-se-zdravotnim-postizenim-2018) |

### Nástroje

**axe DevTools (rozšíření prohlížeče, Deque)** — Základní verze zdarma. Cena verze Pro není na ceníkové stránce Deque zveřejněná – jen přes obchod nebo bezplatný trial, po jehož konci se účet automaticky vrátí na Free.

Nejpřesnější automatický skener, minimum falešných poplachů. Ve verzi Pro navíc „Intelligent Guided Testing" – provede vás polostrukturovanou ruční kontrolou (klávesnice, modály, obrázky) a to je přesně to, co jinak děláte ručně.

**WAVE (WebAIM) – rozšíření pro Chrome a Firefox** — Rozšíření zdarma. WAVE API: 100 kreditů zdarma při registraci, dál 0,04 USD/kredit (250–999), 0,03 USD (1 000–9 999), 0,025 USD (10 000+), minimální nákup 10 USD za 250 kreditů. Jedna stránka = 1 kredit, pokročilé funkce 2–3 kredity.

Vizuální překryv přímo na stránce – ikony u problémů. Nejlepší nástroj pro report klientovi, protože screenshot z WAVE pochopí i netechnický jednatel. Skvělé zobrazení nadpisové osnovy a landmarků.

**Google Lighthouse (v Chrome DevTools) / PageSpeed Insights** — Zdarma

Rychlé skóre přístupnosti a základní nálezy. Postavené na axe-core.

**IBM Equal Access Accessibility Checker** — Zdarma, open source

Rozšíření do vývojářských nástrojů. Silné v tom, že nálezy třídí podle toho, jestli jde o jistou chybu, nebo o věc k ověření člověkem, a nabízí vlastní sadu pravidel navázanou na EN 301 549.

**ARC Toolkit (TPGi)** — Zdarma

Testy mapované na WCAG 2.0/2.1/2.2, EN 301 549 i Section 508. Dobré na zkoumání ARIA a stromu přístupnosti.

**Silktide Accessibility Checker (rozšíření pro Chrome a Edge)** — Zdarma (placené plány pro průběžné monitorování)

Přes 200 kontrol WCAG a hlavně simulace: ukáže stránku očima člověka s barvoslepostí, kataraktou, dyslexií, a simuluje čtečku obrazovky.

**Accessibility Insights for Web (Microsoft)** — Zdarma, open source

Dvě věci, které jinde nejsou: režim FastPass (automat + řízená ruční kontrola tabulátoru s vizualizací pořadí přímo na stránce) a Assessment – strukturovaný ruční průchod, který na konci vygeneruje report.

**Colour Contrast Analyser (TPGi, desktopová aplikace)** — Zdarma

Kapátkem změříte kontrast čehokoli na obrazovce, včetně textu přes fotku, přes video nebo v PDF – tedy přesně tam, kde automatické skenery selhávají.

**NVDA (čtečka obrazovky, Windows)** — Zdarma, open source

Jediný způsob, jak zjistit, co uživatel skutečně uslyší: jestli má tlačítko jméno, jestli se chybová hláška oznámí, jestli má formulářové pole popisek, jestli má obrázek smysluplný alt. Nejpoužívanější čtečka podle WebAIM (65,6 % respondentů ji používá).

**VoiceOver (macOS / iOS)** — Zdarma, součást systému

Kontrola na iOS je nutná – 70,6 % mobilních uživatelů čteček je na Apple platformě. Chování na mobilu se od desktopu liší (gesta místo tabulátoru).

**Samotná klávesnice a prohlížeč** — Zdarma

Nejcennější nástroj celého auditu. Odpojte myš a projděte hlavní cestu (homepage → produkt/služba → formulář → odeslání) jen klávesou Tab, Enter, mezerníkem, šipkami a Esc. Odhalí pasti klávesnice, neviditelný focus, nedostupné menu, nefunkční modály a rozbité pořadí – tedy věci, které automat nenajde vůbec.

**Playwright / Puppeteer + axe-core (skriptovaně)** — Zdarma, open source (axe-core je MIT)

Umožní projet desítky až stovky URL najednou a udělat srovnávací tabulku. Tímhle jsem změřil 25 českých firemních webů, na kterých stojí sekce častých chyb níže. Můžete si doplnit vlastní sondy, které axe neumí: počet cílů pod 24 px, výskyt @media prefers-reduced-motion v CSS, `outline: none` u :focus, vodorovné rolování při 320 px, skoky v pořadí tabulátoru.

**Vývojářské nástroje prohlížeče – strom přístupnosti a inspektor** — Zdarma

Chrome DevTools: panel Accessibility ukáže vypočtené přístupné jméno a roli konkrétního prvku – tím ověříte, jestli aria-label skutečně přebíjí viditelný text. Firefox má samostatný Accessibility Inspector s kontrolou kontrastu a simulací barvosleposti.

**Pa11y / pa11y-ci** — Zdarma, open source

Automat spustitelný v CI. Užitečné jako doporučení do reportu – aby klient nepropadl zpátky po opravě.


### Časté chyby

**Odkaz nebo tlačítko složené jen z ikony, bez přístupného jména** — Vysoká. Porušení SC 2.4.4 a 4.1.2, obojí úroveň A – tedy nesplnění nejnižší laťky. Uživatel čtečky uslyší jen „odkaz" a neví, kam vede.

*Jak poznat:* Nejčastější automaticky detekovaná chyba na českých firemních webech. Ve vlastním měření 25 českých firemních homepage (axe-core 4.13.0, WCAG A+AA, 1366×900, 8. 9. 2026) se pravidlo link-name porušovalo na 68 % webů (140 prvků) a button-name na 28 % webů (25 prvků). Prakticky vždy jde o: ikony sociálních sítí v patičce, lupu vyhledávání, hamburger menu, šipky carouselu, křížek pro zavření. Poznáte to spuštěním axe nebo WAVE; ověříte v NVDA (Insert+F7 → seznam odkazů, hledáte položky bez textu nebo s URL).

*Náprava:* Levná, hodiny práce. Přidat aria-label na <a>/<button>, nebo vizuálně skrytý text uvnitř (třída .visually-hidden), nebo u ikony v <img> správný alt popisující FUNKCI („Vyhledávání", ne „lupa"). U inline SVG přidat <title> nebo role="img" s aria-label.

**Nízký kontrast textu** — Vysoká. Porušení SC 1.4.3 (AA). Zároveň nejrozšířenější chyba na světě.

*Jak poznat:* Ve vlastním měření 64 % českých webů (252 prvků). Celosvětově 83,9 % domovských stránek (WebAIM Million 2026). Typické zdroje v ČR: šedý text v patičce a v drobných informacích (#999 na bílé = 2,85:1), popisky pod formulářovými poli, sekundární tlačítka („Zjistit více" světle šedě), text v hero sekci přes fotku bez překryvu, placeholder v poli. Zjistíte axe/WAVE; text přes fotku ale automat neumí – tam kapátko Colour Contrast Analyser a měříte nejhorší místo, ne průměr.

*Náprava:* Levná, pokud má web design systém – změna dvou tří barevných proměnných. Drahá, pokud jsou barvy roztroušené po šablonách. U textu přes fotku: poloprůhledný překryv, nebo textový stín, nebo přesun textu mimo obrázek. Pozor na značkovou barvu klienta – pokud je firemní modrá pod 4,5:1, potřebujete tmavší odstín pro text a tu původní nechat na velkých plochách.

**Chybějící nebo neviditelný indikátor zaměření** — Vysoká. Porušení SC 2.4.7 (AA). Uživatel klávesnice neví, kde na stránce je – web je pro něj nepoužitelný.

*Jak poznat:* Ve vlastním měření (skutečná navigace tabulátorem, 35 stisků Tab na web, 830 prvků celkem) nemělo 29,0 % prošlých prvků při zaměření vůbec žádnou vizuální změnu; 48 % webů mělo aspoň jeden takový prvek a 24 % webů nemělo focus prakticky nikde (≥ 90 % prvků). Nezávisle na tom nemělo 68 % webů v CSS vůbec pravidlo :focus-visible a 48 % mělo někde `outline: none` u :focus. Poznáte za třicet sekund: odpojte myš a mačkejte Tab.

*Náprava:* Nejlevnější oprava v celém auditu – jedno pravidlo v CSS. Odstranit `outline: none` bez náhrady a doplnit `:focus-visible { outline: 3px solid <barva>; outline-offset: 2px; }`. Barvu volte tak, aby měla ≥ 3:1 vůči pozadí i vůči nezaměřenému stavu. Použití :focus-visible místo :focus zajistí, že se rámeček neukáže při kliknutí myší – přesně to, kvůli čemu ho designéři původně vypínali.

**Placeholder místo popisku formulářového pole** — Vysoká. Porušení SC 3.3.2 (A) a 4.1.2 (A). Placeholder navíc typicky nesplňuje kontrast 4,5:1.

*Jak poznat:* Ve vlastním měření mělo 52 % webů aspoň jedno pole bez programově zjistitelného popisku a 40 % webů pole popsané jen placeholderem. Celosvětově 51 % stránek a 33,1 % všech polí (WebAIM Million 2026). Zjistíte tak, že do pole začnete psát – pokud popisek zmizel, je to placeholder. V DevTools zkontrolujte, jestli existuje <label for> spárovaný s id.

*Náprava:* Levná. Přidat <label for="id"> ke každému poli, případně vizuálně nad polem (plovoucí popisek je kompromis, ale musí zůstat viditelný). Kde popisek být nemá (vyhledávací pole vedle lupy), použít aria-label. Zároveň doplnit autocomplete="name|email|tel|street-address" – splní SC 1.3.5 (AA) a zrychlí vyplňování na mobilu, což vidí klient v konverzích.

**Cíle menší než 24 × 24 CSS px** — Střední až vysoká. Porušení SC 2.5.8 (AA, nové ve WCAG 2.2). Vysoká, když jde o prvek na konverzní cestě (množství v košíku, zavření modálu).

*Jak poznat:* Ve vlastním měření mělo 88 % webů aspoň jeden cíl pod limitem; pravidlo target-size hlásil axe na 32 % webů (127 prvků); pod limitem bylo 14,6 % všech klikatelných prvků. Typicky: ikony sociálních sítí v patičce, přepínač množství (+/−) v košíku, křížek zavření cookie lišty, tečky pod carouselem, jazykový přepínač CZ/EN, ikony filtrů. Poznáte v DevTools změřením obálky prvku, nebo pravidlem target-size v axe.

*Náprava:* Levná. Zvětšit klikatelnou plochu paddingem, aniž byste zvětšovali ikonu (`padding: 8px; margin: -8px;` nebo pseudo-element ::before s roztaženou plochou). Anebo využít výjimku rozestupu – nechat ikonu malou, ale odsadit ji tak, aby se kružnice 24 px neprotínaly.

**Automaticky se posouvající carousel bez možnosti zastavení** — Vysoká, a to je překvapení pro klienta: jde o porušení SC 2.2.2, což je úroveň A – nejnižší laťka. Automat to nezjistí.

*Jak poznat:* Ve vlastním měření mělo 72 % webů na homepage carousel, slider nebo swiper. Poznáte pohledem: hero sekce se sama přepíná. Pak hledáte tlačítko pauzy – většinou tam není, jsou tam jen tečky nebo šipky.

*Náprava:* Střední. Nejlepší varianta: carousel zrušit a udělat statický hero (ušetří to zároveň LCP a klient obvykle stejně měří, že třetí a čtvrtý snímek nikdo nevidí). Když musí zůstat: doplnit viditelné tlačítko pauzy, zastavit automatický posun při zaměření nebo najetí myší, a respektovat prefers-reduced-motion (při „reduce" se neposouvat vůbec).

**Žádné respektování prefers-reduced-motion** — Střední z hlediska písmene normy (SC 2.3.3 je jen AAA), ale vysoká z hlediska skutečné použitelnosti. Argumentujte tím, že jde o vědomé nastavení, které si uživatel zapnul v operačním systému, a že u lidí s vestibulárními potížemi vyvolávají velké posuny závrať a nevolnost.

*Jak poznat:* Ve vlastním měření nemělo 76 % webů v načteném CSS vůbec žádný @media dotaz na prefers-reduced-motion – přitom animace na scroll, paralaxa a fade-in efekty byly téměř všude. Zjistíte hledáním řetězce v CSS, nebo zapnutím „Emulate prefers-reduced-motion: reduce" v Chrome DevTools (Rendering panel) a porovnáním, jestli se něco změnilo.

*Náprava:* Levná, jedno pravidlo v CSS: `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`. U JS animačních knihoven (GSAP, AOS, Lenis) je potřeba dotaz vyhodnotit v kódu a animace vůbec neinicializovat.

**Chybějící <main> a nefunkční nebo chybějící skip link** — Střední. SC 2.4.1 (A) pro skip link, SC 1.3.1 (A) pro landmarky.

*Jak poznat:* Ve vlastním měření nemělo 48 % webů element <main> ani role="main" a 84 % nemělo skip link. Zjistíte prvním stiskem Tab po načtení stránky – měl by se objevit odkaz „Přejít na hlavní obsah". Když se neobjeví nic, není. Když se objeví, ověřte, že po Enteru focus skutečně skočí na obsah (často odkazuje na neexistující kotvu).

*Náprava:* Levná. První prvek v <body>: `<a class="skip" href="#main">Přejít na hlavní obsah</a>`, CSS ho posune mimo obrazovku a při :focus vrátí zpět. Cíl `<main id="main" tabindex="-1">`. Bez tabindex="-1" focus v některých prohlížečích neskočí.

**Rozbitá nadpisová osnova a nadpisy použité kvůli velikosti písma** — Vysoká z hlediska použitelnosti (nadpisy jsou hlavní navigační nástroj – 71,6 % uživatelů čteček podle WebAIM). Formálně SC 1.3.1 (A) a 2.4.6 (AA).

*Jak poznat:* Ve vlastním měření nemělo 40 % webů právě jeden <h1> a 20 % přeskakovalo úroveň nadpisu; u 40 % nebyl první nadpis na stránce H1. Nejlépe se to ukazuje ve WAVE (panel Structure) nebo v NVDA klávesou H. Specificky u českých webů: sekce „Naše služby" jako <div class="big-title"> a naopak claim v patičce jako <h2>, protože grafik chtěl větší písmo.

*Náprava:* Střední. Oddělit sémantiku od vzhledu – nadpisy dávat podle struktury obsahu a velikost řešit CSS třídou. V reportu klientovi udělejte prostý strom nadpisů jeho homepage vedle sebe „jak to je" a „jak by to mělo být" – pochopí to okamžitě. Argument SEO zde funguje jako bonus.

**Blokovaný zoom na mobilu (user-scalable=no, maximum-scale=1)** — Vysoká vzhledem k tomu, jak triviální je oprava. Porušení SC 1.4.4 (AA). Pro slabozrakého uživatele to znamená, že web na mobilu prostě nepřečte.

*Jak poznat:* Ve vlastním měření 28 % webů (pravidlo meta-viewport v axe, 7 z 25). Zjistíte pohledem do zdrojového kódu na <meta name="viewport">, nebo pokusem roztáhnout stránku dvěma prsty na telefonu.

*Náprava:* Nejlevnější oprava celého auditu – odstranit `user-scalable=no` a `maximum-scale=1` z meta tagu. Zbyde `<meta name="viewport" content="width=device-width, initial-scale=1">`. Riziko regrese téměř nulové.

**Vodorovné rolování při úzkém okně a při zvětšení** — Vysoká. Porušení SC 1.4.10 (AA). Pro člověka se zoomem 200 % je stránka, kde se musí posouvat i doprava, prakticky nepoužitelná.

*Jak poznat:* Ve vlastním měření mělo 24 % webů vodorovné rolování při šířce 320 CSS px (v jednom případě přetékalo o 1 680 px) a 12 % už při 683 px, což odpovídá 200 % zoomu na běžném notebooku. Zjistíte v DevTools nastavením šířky na 320 px, nebo klávesou Ctrl/Cmd + „+" až na 400 %. Nejčastější viníci: široké tabulky s ceníky, pevné šířky v px, obrázky bez max-width, dlouhé nezalomitelné řetězce (e-maily, čísla dílů).

*Náprava:* Střední. Pevné šířky nahradit max-width, tabulky zabalit do kontejneru s `overflow-x: auto` a přístupným popiskem, obrázkům dát `max-width: 100%`, dlouhým řetězcům `overflow-wrap: anywhere`.

**Focus zmizí pod lepivou hlavičkou nebo cookie lištou** — Střední až vysoká. Porušení SC 2.4.11 Focus Not Obscured (Minimum) – nové v WCAG 2.2, úroveň AA. Konkurence ho zatím většinou vůbec netestuje.

*Jak poznat:* Netestuje se automatem – jen ručně: tabujte dolů stránkou a sledujte, jestli zaměřený prvek zůstává vidět. Na českých webech s lepivou hlavičkou (dnes většina) se to stane skoro vždy u odkazů těsně pod aktuálním scrollem.

*Náprava:* Levná. `scroll-margin-top: <výška hlavičky + rezerva>` na fokusovatelných prvcích nebo na celém obsahu, případně `scroll-padding-top` na kořeni dokumentu.

**Focus na skrytém prvku – zavřené menu, modál nebo carousel zůstávají v pořadí procházení** — Vysoká. Porušení SC 2.4.3 (A) a v důsledku i 2.4.7 (AA). Uživatel klávesnice ztratí orientaci úplně.

*Jak poznat:* Ve vlastním měření skončil na 32 % webů focus během 35 stisků Tab na prvku, který nebyl vidět. Poznáte tak, že tabujete a focus najednou „zmizí" – stránka se neposouvá, ale rámeček nikde. Typicky jde o mobilní hamburger menu skryté jen přes `opacity: 0` nebo `transform: translateX(-100%)`, o snímky carouselu mimo zorné pole a o obsah zavřených akordeonů.

*Náprava:* Střední. Skrývat obsah tak, aby zmizel i ze stromu přístupnosti: `display: none`, `visibility: hidden`, nebo atribut `hidden` / `inert`. Kde to nejde, dát skrytým prvkům `tabindex="-1"` a rodiči `aria-hidden="true"` – ale nikdy aria-hidden na prvek, který zůstává fokusovatelný, to je horší než nic.

**Tlačítka postavená z <div> nebo <span>, odkazy bez href** — Vysoká. Porušení SC 2.1.1 (A – ovladatelnost klávesnicí) a 4.1.2 (A – role). Prvek prostě neexistuje pro nikoho, kdo nepoužívá myš.

*Jak poznat:* Ve vlastním měření 24 % webů. V DevTools hledáte `div[onclick]`, `span[onclick]` a `<a>` bez atributu href. Prakticky: klikněte na prvek myší (funguje) a pak na něj zkuste dojít tabulátorem (nedojdete).

*Náprava:* Levná až střední. Nahradit nativním <button type="button"> nebo <a href>. To přinese fokusovatelnost, obsluhu Enter/mezerníku i správnou roli zadarmo. Přidávat role="button" a tabindex="0" na <div> je nouzové řešení – musíte pak ručně doplnit i obsluhu klávesnice, a to se skoro vždycky zapomene.

**Chybová hláška jen barvou nebo neoznámená čtečkou** — Vysoká. SC 3.3.1 (A), 1.4.1 (A – nespoléhat jen na barvu), 3.3.3 (AA – návrh nápravy), 4.1.3 (AA – stavové zprávy).

*Jak poznat:* Ruční test za pět minut: odešlete poptávkový formulář prázdný. Sledujte, jestli je (a) u pole textový popis chyby, ne jen červený rámeček, (b) hláška konkrétní („Zadejte e‑mail ve tvaru jmeno@domena.cz"), ne jen „Chyba", (c) focus se přesune na první chybné pole nebo se hláška oznámí přes role="alert". Poslední bod ověříte jen s NVDA.

*Náprava:* Střední. Textová hláška vázaná na pole přes aria-describedby, `aria-invalid="true"` na chybném poli, souhrn chyb nahoře formuláře v kontejneru s role="alert", a po odeslání přesunout focus na ten souhrn. Tohle je zároveň nejlepší místo v reportu na propojení s konverzí – klient chápe, že nesrozumitelná chybová hláška = ztracená poptávka.

**Chybějící nebo nesprávný jazyk stránky** — Střední formálně (SC 3.1.1, úroveň A), ale prakticky vysoká: česká věta čtená anglickým syntetizérem je nesrozumitelná.

*Jak poznat:* Ve vlastním měření chybělo lang na <html> u 4 % webů a 8 % mělo jazyk jiný než čeština (typicky lang="en" zděděné ze zahraniční šablony). Celosvětově nemá jazyk dokumentu 13,5 % stránek (WebAIM Million 2026). Poznáte pohledem na první řádek HTML.

*Náprava:* Triviální – jeden atribut. `<html lang="cs">`. U vícejazyčných webů musí jazyk odpovídat verzi a cizojazyčné pasáže dostat vlastní lang.

**Chybějící nebo bezcenné alternativní texty obrázků** — Vysoká u informativních a funkčních obrázků (SC 1.1.1, úroveň A). U dekorativních obrázků je naopak chybou alt VYPLNIT.

*Jak poznat:* Ve vlastním měření mělo 28 % webů aspoň jeden <img> úplně bez atributu alt (pravidlo image-alt v axe, 11 prvků); celosvětově chybí alt u 16,2 % obrázků a 10,8 % obrázků s altem má sporný nebo opakující se text (WebAIM Million 2026). Automat najde jen chybějící atribut – ne to, že alt je „obrazek1", „banner", nebo že u fotky produktu je jen „foto". To musíte přečíst.

*Náprava:* Střední – je to editorská práce, ne programátorská. Dekorativní a redundantní obrázky (ikona vedle textu, pozadí, oddělovač) → alt="". Funkční obrázek v odkazu → alt popisuje funkci. Fotka produktu → co je na ní podstatné pro nákup. Graf nebo schéma → shrnutí v textu pod ním. Dejte klientovi rozhodovací strom W3C a seznam konkrétních obrázků k doplnění – to je zadání, které jeho marketér zvládne sám.

**Nasazený overlay widget místo skutečné opravy** — Vysoká, protože vytváří falešný pocit souladu. Overlay neopraví sémantiku, pořadí procházení, klávesové pasti ani smysluplnost alt textů – tedy většinu toho, co skutečně vadí.

*Jak poznat:* V kódu najdete skript accessiBe, UserWay, EqualWeb nebo podobný; na stránce plovoucí ikona panáčka. Klient vám řekne „přístupnost máme vyřešenou".

*Náprava:* Levná (odinstalovat) a zároveň uvolní rozpočet. Argumentujte primárním zdrojem: americká FTC v dubnu 2025 schválila konečné rozhodnutí, kterým firma accessiBe zaplatila 1 milion USD za klamavá tvrzení, že její automatizovaný nástroj dokáže učinit jakýkoli web souladný s WCAG, a na 20 let jí zakázala taková tvrzení bez důkazů. Neargumentujte názorem – tohle je doložitelný fakt.

**Nezveřejněné prohlášení o přístupnosti ve VOP (u regulovaných služeb)** — Střední – samostatný přestupek podle § 25 odst. 7 písm. d) zákona č. 424/2023 Sb. s pokutou do 1 000 000 Kč. Zároveň je to nejsnáz zkontrolovatelná věc, takže při kontrole ČOI padne jako první.

*Jak poznat:* Otevřete obchodní podmínky a hledejte informaci, jak služba splňuje požadavky na přístupnost, včetně popisu jednotlivých požadavků. U drtivé většiny českých e‑shopů tam nic takového není.

*Náprava:* Levná co do práce, ale musí být pravdivá. Text patří do VOP nebo do obdobného dokumentu, na žádost i ve zvukové formě, přístupný po celou dobu poskytování služby. Nepište „náš web je plně přístupný", pokud není – napište, které požadavky splňujete a co je v plánu. Nepravdivé prohlášení je horší než žádné.


### Česká specifika

PRÁVNÍ RÁMEC. Evropský akt o přístupnosti (směrnice EU 2019/882) je v ČR zákon č. 424/2023 Sb., o požadavcích na přístupnost některých výrobků a služeb, účinný od 28. 6. 2025. Klíč pro váš segment (firmy 10–250 lidí):

1) NA KOHO PADÁ. § 2 odst. 2 vyjmenovává služby POSKYTOVANÉ SPOTŘEBITELŮM: elektronické komunikace, přístup k audiovizuálním mediálním službám, finanční služby, služby elektronického obchodování, prodej e-knih a softwaru pro ně, a doprava. Nic víc. „Služby elektronického obchodování\" jsou v § 3 odst. 1 písm. i) definované jako služby na dálku, elektronickými prostředky, na individuální žádost spotřebitele, s cílem uzavřít SPOTŘEBITELSKOU smlouvu. Z toho plyne: čistě prezentační web výrobní firmy bez objednávky pod zákon nespadá. B2B e-shop, kde nakupují jen firmy, pod zákon nespadá. B2C e-shop spadá. Tohle napište klientovi rovnou a bez obalu – je to nejrychlejší způsob, jak si získat důvěru, a zbytek reportu pak stojí na skutečné hodnotě, ne na strachu.

2) MIKROPODNIK. § 2 odst. 3 písm. a) vyjímá služby poskytované mikropodnikem. § 3 odst. 1 písm. p) odkazuje na čl. 2 odst. 3 přílohy I nařízení Komise (EU) č. 651/2014: méně než 10 osob a zároveň roční obrat nebo bilanční suma roční rozvahy do 2 mil. EUR. Pro váš cílový segment 10–250 lidí to znamená, že výjimka NEPLATÍ nikomu. Pozor na dvě věci: u propojených a partnerských podniků se počty a finanční údaje sčítají podle přílohy I nařízení (osmičlenná dcera velké skupiny mikropodnik není), a pro přepočet na eura se podle § 27 odst. 1 použije kurz ČNB k rozvahovému dni.

3) MÝTUS „MÁME ČAS DO 2030\". Tohle je vaše největší konkurenční výhoda, protože to tvrdí skoro každý český článek i většina agentur. Neplatí to. § 28 odst. 2 říká, že povinnosti se vztahují na služby poskytované po 28. 6. 2025. Datum 28. 6. 2030 se v § 28 odst. 4 týká služeb poskytovaných s použitím nepřístupných VÝROBKŮ (terminály, kiosky, bankomaty) uvedených na trh do 28. 6. 2025, a v § 28 odst. 5 služeb podle smluv uzavřených nejpozději 27. 6. 2025. Prezentace MPO z webináře v červnu 2025 to potvrzuje doslova. Pro weby a e-shopy platí jen tři výjimky: mapy a on-line mapové služby (§ 2 odst. 3 písm. c)), předtočená média a kancelářské formáty zveřejněné nejpozději 27. 6. 2025 (§ 28 odst. 6) a obsah, který se po 28. 6. 2025 už neaktualizuje (§ 28 odst. 7). Ta poslední výjimka je past: jakmile klient stránku upraví, výjimka padá.

4) SANKCE (§ 25 odst. 7 a 8). Do 10 000 000 Kč za nezajištění přístupnosti služby nebo za nepřijetí nápravných opatření. Do 5 000 000 Kč za nevypracování posouzení nepřiměřené zátěže, pokud se na ni firma odvolává. Do 2 000 000 Kč za neuchování posouzení a podkladů. Do 1 000 000 Kč za nezveřejnění informací o přístupnosti v obchodních podmínkách. Formulujte to klientovi přesně a bez dramatizace: jde o horní hranice sazby, ne o částku, kterou dostane. Sankci předchází podle § 24 výzva orgánu dozoru k nápravě v přiměřené lhůtě – přestupkem podle písm. l) je až nepřijetí opatření v té lhůtě.

5) KDO KONTROLUJE. Podle § 19 je pro e-shopy, finanční služby a e-knihy orgánem dozoru Česká obchodní inspekce; pro elektronické komunikace Český telekomunikační úřad; pro audiovizuální mediální služby Rada pro rozhlasové a televizní vysílání; pro dopravu podle druhu krajský úřad, Drážní úřad, Úřad pro civilní letectví nebo Státní plavební správa. ČOI má už na webu samostatnou sekci pro podnikatele k přístupnosti výrobků a služeb.

6) POVINNOST, KTEROU NEMÁ SKORO NIKDO SPLNĚNOU. § 14: poskytovatel služby musí ve VOP nebo v obdobném dokumentu zveřejnit, jak služba splňuje požadavky na přístupnost, VČETNĚ POPISU JEDNOTLIVÝCH POŽADAVKŮ, plus všeobecný popis služby a vysvětlivky k jejímu fungování. Na žádost i ve zvukové formě. Přístupné po celou dobu poskytování služby. Tohle je ideální první položka nabídky: je to konkrétní, hotové za den, samostatný přestupek, a při kontrole ČOI to padne jako první, protože se to dá ověřit z kanceláře.

7) NEPŘIMĚŘENÁ ZÁTĚŽ NENÍ ZADNÍ VRÁTKA. § 15: poskytovatel nemusí splnit požadavky, pokud by šlo o zásadní změnu služby nebo o nepřiměřenou zátěž podle kritérií v příloze č. 4 zákona. Ale musí (a) vypracovat písemné posouzení, (b) uchovat ho 5 let, (c) obnovit ho při změně služby, nejpozději po 5 letech, (d) informovat předem orgán dozoru, (e) přiložit čestné prohlášení, že na přístupnost nedostal dotaci ani dar. Kdo dostal dotaci, nepřiměřenou zátěž uplatnit nemůže. Prakticky: vypracovat posouzení stojí často víc než opravit kontrast a popisky.

8) JAKÁ NORMA VLASTNĚ PLATÍ. Zákon slovo WCAG vůbec neobsahuje. Příloha č. 1 oddíl III bod 3 říká, že internetové stránky a mobilní aplikace musí být „vnímatelné, ovladatelné, srozumitelné a stabilní\" – to je doslovný překlad principů POUR z WCAG. Předpoklad shody vzniká podle § 16 splněním harmonizované normy. Ta norma je EN 301 549 a MPO ji ve svých návodných dokumentech k zákonu pro weby a mobilní aplikace výslovně uvádí. Stav k dnešku (září 2026) je ale právně choulostivý: v Úředním věstníku EU je dosud citovaná jen verze V3.2.1 (2021), a to pod směrnicí 2016/2102 o veřejném sektoru, ne pod EAA. Verze V4.1.1 datovaná 2026-09, přijatá 24. 8. 2026, je první, která má přílohu ZB mapující požadavky směrnice 2019/882 a která sladila kapitoly 9, 10 a 11 s WCAG 2.2 – ale sama ve svém úvodu píše „Once the present document is cited in the Official Journal…\", tedy citace zatím neproběhla. Praktický závěr do reportu: mířit na WCAG 2.2 úroveň AA. Je to nadmnožina WCAG 2.1 AA (tedy pokryje i starší citovanou verzi normy), odpovídá nové EN 301 549 V4.1.1, a klient tím nic neriskuje.

9) DRUHÁ PRÁVNÍ LINKA, KTEROU VĚTŠINA AUDITŮ VYNECHÁ. I když web pod 424/2023 nespadá, existuje zákon č. 198/2009 Sb. (antidiskriminační zákon). Za nepřímou diskriminaci z důvodu zdravotního postižení se považuje i odmítnutí nebo opomenutí přijmout přiměřená opatření, aby osoba se zdravotním postižením mohla využít služby určené veřejnosti – ledaže by to znamenalo nepřiměřené zatížení. Je to slabší a mnohem méně vymáhaná linka než 424/2023, ale u firem, které argumentují „na nás se to nevztahuje\", je to legitimní doplňkový argument. Formulujte ho opatrně a bez tvrzení o pravděpodobnosti sporu.

10) VEŘEJNÝ SEKTOR JAKO OBCHODNÍ PÁKA. Zákon č. 99/2019 Sb. ukládá přístupnost webů a mobilních aplikací subjektům veřejného sektoru (transpozice směrnice 2016/2102, dozor Ministerstvo vnitra / DIA). Pokud váš klient dodává do veřejného sektoru nebo se uchází o veřejné zakázky, může se přístupnost objevit v zadávacích podmínkách – a pak je audit investice do schopnosti soutěžit, ne náklad na compliance.

11) JAZYK A ČEŠTINA. Dvě věci, které v anglických metodikách nenajdete. Za prvé, české weby postavené na zahraničních šablonách často zůstávají s <html lang=\"en\"> – ve vlastním měření to mělo 8 % vzorku. Česká věta čtená anglickým syntetizérem je nesrozumitelná; přehrajte to klientovi nahlas, funguje to líp než jakýkoli paragraf. Za druhé, čeština je pro čtečky nativně podporovaná (NVDA má české hlasy), takže alt texty a popisky pište česky, ne anglicky.

12) NÁSTROJE V ČESKÉM KONTEXTU. Metodiky Blind Friendly Web (TyfloCentrum Brno) jsou historicky nejznámější česká metodika přístupnosti; pro EAA ale nejsou právně relevantní – argumentujte WCAG 2.2 a EN 301 549. Automatické skenery hlásí u českých textů občasné falešné poplachy u diakritiky v atributech; vždy ověřte ručně, než to dáte klientovi do reportu.

### Kde si nejsme jistí

- Vlastní měření 25 českých firemních webů (8. 9. 2026, axe-core 4.13.0, viewport 1366×900, Chromium): jde o NENÁHODNÝ vzorek homepage středních a větších českých firem (výroba, stavebnictví, IT, právo, spotřební zboží), nikoli o reprezentativní průzkum. Testovala se jedna stránka, jeden stav, jedno rozlišení a jeden okamžik. Formuláře, košíky a přihlášené stavy testované nebyly. Čísla používejte jako indikaci typického stavu, ne jako statistiku o českém webu obecně – a v reportu klientovi tuhle výhradu uveďte.
- Test viditelnosti focusu v mém měření porovnává vypočtené styly zaměřeného a nezaměřeného prvku. Focus indikátor realizovaný přes pseudo-element (::after), přes změnu potomka (SVG uvnitř tlačítka) nebo přes změnu rodiče by tento test nezachytil. Skutečný počet chybějících indikátorů je tedy spíš vyšší než naměřených 29,0 %, ne nižší – ale konkrétní nález u konkrétního webu je vždy potřeba potvrdit okem.
- Test velikosti cílů v mém měření nezohledňuje výjimku rozestupu podle SC 2.5.8 (kružnice 24 px). Naměřených 14,6 % prvků pod 24 × 24 px je tedy horní odhad; část z nich by kritérium mohla splnit díky dostatečnému odstupu. Pravidlo target-size v axe-core výjimku zohledňuje a hlásilo problém na 32 % webů – to je spolehlivější číslo.
- Test reflow (320 px) a zvětšení (683 px) je automatická aproximace nastavením velikosti okna, ne skutečný zoom prohlížeče na 400 %, resp. 200 %. Chování se může lišit, zejména u webů, které používají detekci zařízení místo čistě responzivního CSS. U konkrétního klienta vždy ověřte skutečným zoomem.
- Kontrast: v mém měření jsem započítal jen jisté nálezy axe (violations), ne položky „incomplete". Text přes fotografii, přechod nebo video axe vyhodnotit neumí a označí ho k ručnímu ověření – naměřených 64 % webů s kontrastní chybou je tedy spodní hranice. Skutečný podíl bude vyšší.
- Cena axe DevTools Pro: oficiální ceníková stránka Deque cenu nezveřejňuje (jen kontakt na obchod a trial). Třetí strany uvádějí řádově 45–100 USD za uživatele a měsíc, ale tyto údaje jsem neověřil u zdroje a do nabídky klientovi je nedávejte jako fakt.
- Počet auditů v Lighthouse (uvádí se 57 nebo 60+) se v různých zdrojích liší a mění se s verzí. Nepoužívejte konkrétní číslo; Google sám v dokumentaci uvádí jen to, že skóre je vážený průměr automatických auditů a že ruční audity se do něj nepočítají.
- Údaj, že axe-core plně automatizuje ~29,5 % kritérií WCAG 2.2 a ~60 % vyžaduje ruční test, pochází z komerčních blogů, ne z primárního zdroje Deque. Ověřený primární údaj je jen ten, že Deque v Automated Accessibility Coverage Report naměřilo 57,38 % nálezů podle objemu, a že axe-core README uvádí „on average 57% of WCAG issues automatically". Rozdíl mezi „57 % objemu" a „~30 % kritérií" je Deque sama v issue #4415 vysvětluje, ale konsolidované číslo pro kritéria z primárního zdroje nemám.
- Audit nástrojů GDS (nejlepší nástroj našel 40 % ze 142 bariér, nejhorší 13 %) je z roku 2016 s aktualizací 2018. Nástroje se od té doby zlepšily. Číslo používejte jako řádovou ilustraci limitu automatizace, ne jako aktuální benchmark – a datum uveďte.
- Právní status EN 301 549: tvrzení, že k dnešnímu dni není v Úředním věstníku EU citovaná žádná harmonizovaná norma na podporu směrnice 2019/882, jsem ověřil ve foreword textu samotné EN 301 549 V4.1.1 („Once the present document is cited in the Official Journal…") a v odborné analýze třetí strany, ne přímým prohledáním rejstříku harmonizovaných norem Komise. Před použitím v právně citlivém dokumentu si to ověřte přímo u Komise nebo ÚNMZ.
- Zda poptávkový nebo kontaktní formulář na B2B webu naplňuje definici „služby elektronického obchodování" podle § 3 odst. 1 písm. i) zákona (služba na dálku na individuální žádost spotřebitele s cílem uzavřít spotřebitelskou smlouvu), není v dostupných výkladech jednoznačně řešeno. Lead formulář sám o sobě smlouvu neuzavírá, takže spíš ne – ale je to šedá zóna a v reportu ji označte jako otázku na klientova právníka, ne jako svůj závěr.
- Zda ČOI už podle zákona č. 424/2023 Sb. uložila konkrétní pokuty a v jaké výši, se mi nepodařilo ověřit. Nenašel jsem zveřejněné výsledky kontrol přístupnosti. V reportu proto nepište nic o „pokutách, které už padly" – uveďte jen zákonné sazby.
- Statistiky o počtu osob se zdravotním postižením v ČR: v dohledaných zdrojích se objevil jak údaj 1 152 tisíc osob z šetření ČSÚ 2018, tak zmínka o 1,3 milionu z novějšího šetření VŠPO 2023/2024. Novější číslo jsem neověřil přímo v publikaci ČSÚ. Používejte ověřený údaj z roku 2018 s uvedením roku.
- Údaj o 35 % dospělých nad 40 let s vestibulární dysfunkcí pochází z americké studie NHANES (Agrawal et al. 2009), měřené posturálním testem, ne z dotazníku na obtíže. České ekvivalentní číslo neexistuje. Používejte ho jako řádovou ilustraci, že nejde o okrajovou skupinu, ne jako údaj o české populaci.
- Údaje Click-Away Pound (69 % odejde, 17,1 mld. GBP) jsou z britského trhu a z let 2016 a 2019. Na český trh je nepřepočítávejte – používejte je jako důkaz mechanismu (lidé odejdou tiše a neřeknou to), ne jako odhad ztráty konkrétního klienta.
- Neověřil jsem, zda existuje aktuální česká studie měřící přístupnost českých e-shopů nebo firemních webů. Jediný dohledaný český test (Rohlík 91 %, Alza 45 %) je z roku 2021, metodika není doložená a pro report ho nepoužívejte.

<details><summary>Zdroje (54)</summary>

- https://www.w3.org/TR/WCAG22/
- https://webaim.org/projects/million/
- https://webaim.org/projects/screenreadersurvey10/
- https://www.zakonyprolidi.cz/cs/2023-424
- https://krajta.slv.cz/2023/424/par_25
- https://mpo.gov.cz/cz/podnikani/standardizace/pristupnost-vyrobku-a-sluzeb/zakon-c--424-2023-sb---o-pozadavcich-na-pristupnost-nekterych-vyrobku-a-sluzeb--279601/
- https://mpo.gov.cz/assets/cz/podnikani/pristupnost-vyrobku-a-sluzeb/2025/6/prezentace_webinar_1.pdf
- https://mpo.gov.cz/assets/cz/podnikani/pristupnost-vyrobku-a-sluzeb/2026/3/Navodne-dokumenty-k-pozadavkum-zakona-c--424_2023-Sb--o-pozadavcich-na-pristupnost-nekterych-vyrobku-a-sluzeb-_1__1.pdf
- https://coi.gov.cz/pro-podnikatele/pristupnost-vyrobku-a-sluzeb-pro-podnikatele/
- https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf
- https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf
- https://www.legalithm.com/en/blog/en-301-549-no-presumption-of-conformity-eaa
- https://eur-lex.europa.eu/eli/dir/2019/882/oj
- https://www.zakonyprolidi.cz/cs/2019-99
- https://www.zakonyprolidi.cz/cs/2009-198
- https://www.deque.com/automated-accessibility-coverage-report/
- https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/
- https://github.com/dequelabs/axe-core
- https://github.com/dequelabs/axe-core/issues/4415
- https://alphagov.github.io/accessibility-tool-audit/results.html
- https://alphagov.github.io/accessibility-tool-audit/test-cases.html
- https://www.w3.org/TR/WCAG-EM/
- https://www.w3.org/WAI/news/2026-07-23/wcag-em-2/
- https://www.w3.org/WAI/test-evaluate/preliminary/
- https://www.w3.org/WAI/tutorials/images/decision-tree/
- https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
- https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million
- https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites
- https://www.ftc.gov/legal-library/browse/cases-proceedings/2223156-accessibe-inc
- https://overlayfactsheet.com/
- https://www.lflegal.com/2025/02/userway-overlay-lawsuit/
- https://www.clickawaypound.com/
- https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/persons-disabilities-eu_en
- https://www.czso.cz/csu/czso/vyberove-setreni-osob-se-zdravotnim-postizenim-2018
- https://pubmed.ncbi.nlm.nih.gov/19468085/
- https://www.a11yproject.com/posts/understanding-vestibular-disorders/
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://web.dev/articles/prefers-reduced-motion
- https://developer.chrome.com/docs/lighthouse/accessibility/scoring
- https://www.deque.com/axe/devtools/pricing/
- https://wave.webaim.org/api/
- https://wave.webaim.org/extension/
- https://silktide.com/toolbar/
- https://accessibilityinsights.io/
- https://www.ibm.com/able/toolkit/
- https://chromewebstore.google.com/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce
- https://www.tpgi.com/color-contrast-checker/
- https://webaim.org/resources/contrastchecker/
- https://www.nvaccess.org/download/
- https://www.w3.org/WAI/news/2026-03-03/wcag3
- https://en.havelpartners.blog/new-legislation-on-accessibility-who-does-it-apply-to-and-what-needs-to-be-done
- https://www.epravo.cz/top/clanky/nove-pozadavky-na-pristupnost-nekterych-vyrobku-a-sluzeb-118899.html
- https://www.epravo.cz/top/clanky/zakon-o-pristupnosti-120042.html
- https://www.centrumpronevidome.cz/blindfriendly/metodiky

</details>

---

## 4. Obsahové SEO a viditelnost ve vyhledávání

Kódy bodů v kontrolním seznamu: `SEO-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| Délka titulku (<title>) — pravděpodobnost, že jej Google přepíše | 51–60 znaků: Google přepsal jen 39–42 % titulků | nad 60 znaků: přes 76 % přepsáno; nad 70 znaků: 99,9 % přepsáno; 1–5 znaků: 96,6 % přepsáno | [1](https://zyppy.com/seo/google-title-rewrite-study/) |
| Celková míra přepisování titulků Googlem | — | Google přepsal 61,6 % všech zkoumaných titulků | [1](https://zyppy.com/seo/google-title-rewrite-study/) |
| Míra přepisování meta description Googlem | — | 62,78 % popisků Google přepíše (59,65 % u nejhledanějších frází, 65,62 % u long tailu); 25,02 % nejlépe umístěných stránek meta description vůbec nemá | [1](https://ahrefs.com/blog/meta-description-study/) |
| Oficiální limit délky titulku a meta description podle Google | Google žádný znakový limit neuvádí: „There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width.“ | — | [1](https://developers.google.com/search/docs/appearance/snippet) [2](https://developers.google.com/search/docs/appearance/title-link) |
| Pokles CTR na první pozici, když je v SERPu AI Overview (Google) | — | −34,5 % (měření březen 2024 vs. březen 2025, 300 000 klíčových slov: CTR poz. 1 klesla z 0,073 na 0,026 u AIO dotazů); v opakování studie z prosince 2025 už −58 % | [1](https://ahrefs.com/blog/ai-overviews-reduce-clicks/) |
| Podíl uživatelů, kteří kliknou na klasický výsledek při zobrazeném AI souhrnu | 15 % bez AI souhrnu | 8 % s AI souhrnem; na odkaz uvnitř AI souhrnu klikne 1 % návštěv | [1](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) |
| Podíl Seznam.cz na vyhledávání v ČR (celkem) | — | Google 79,33 %, Seznam 15,63 %, Bing 3,93 %, DuckDuckGo 0,41 % (srpen 2026) | [1](https://gs.statcounter.com/search-engine-market-share/all/czech-republic) |
| Podíl Seznam.cz podle zařízení (proč u B2B záleží na desktopu) | — | Desktop: Google 74,66 %, Seznam 15,64 %, Bing 8,14 %. Mobil: Google 83,71 %, Seznam 15,21 %, Bing 0,34 % (srpen 2026) | [1](https://gs.statcounter.com/search-engine-market-share/desktop/czech-republic) |
| Nadpisová struktura — reálný stav webu (1 000 000 domovských stránek) | — | 41,8 % stránek přeskakuje úrovně nadpisů (2025: 39 %); 7,5 % stránek nemá žádný nadpis; 18,1 % má více než jedno H1; 53,1 % má obrázky bez alt textu; 13,5 % nemá deklarovaný jazyk dokumentu | [1](https://webaim.org/projects/million/) |
| Search Console — dostupnost dat | 16 měsíců historie; API až 25 000 řádků na dotaz (denní strop 50 000 na web a typ vyhledávání) | V rozhraní max 1 000 řádků na export; „anonymizované dotazy“ (zadané jen několika desítkami uživatelů za 2–3 měsíce) se v tabulkách nezobrazují vůbec — u malých B2B webů chybí právě ta nejcennější část long tailu | [1](https://support.google.com/webmasters/answer/7576553) [2](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) |
| Seznam Webmaster — limit přidávání URL | IndexNow: bez limitu počtu URL; indexace do týdne, pokud o ní algoritmus rozhodne | API Seznam Webmastera: max 500 URL denně | [1](https://o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/) |
| Sitemap.xml — limity pro SeznamBota (podle sitemaps.org) | Do 50 000 URL a 50 MB nekomprimovaně na soubor; podporován gzip; v robots.txt lze uvést až 100 odkazů na sitemapy | Větší sitemapa se musí rozdělit a doplnit indexem; URL sitemapy v robots.txt musí být absolutní | [1](https://o-seznam.cz/napoveda/vyhledavani/seznambot/sitemap-xml/) |
| Podporovaná kódování stránky pro indexaci Seznamem | iso-8859-2, windows-1250, utf-8, utf-16 — a kódování musí být deklarované v hlavičce každé stránky | „Stránky s jiným než výše uvedeným kódováním se do indexu nedostanou.“ | [1](https://o-seznam.cz/napoveda/vyhledavani/optimalizace/optimalizacni-minimum/) |
| Aktualizace hodnoticích modelů Seznamu | — | „Aktualizace modelů strojového učení se provádí cca jednou za 3 měsíce.“ — dopad změn na Seznamu se tedy projeví později než na Googlu | [1](https://o-seznam.cz/napoveda/vyhledavani/technicke-podminky/) |
| Firmy.cz — cena firemního profilu | Základní profil (Seznam zdarma): 0 Kč | Seznam naplno od 15. 7. 2025: Startuj od 12 Kč/den, Rozvíjej od 25 Kč/den, Získávej od 50 Kč/den, Profituj od 100 Kč/den (vše bez DPH, cena za jeden den v aukci); minimální investice do jedné kategorie 12 Kč bez DPH | [1](https://www.seznam.cz/reklama/cz/obsahovy-web/sluzba-firmy/firmy-podpora-a-cena) |
| Rozšíření long tailu v databázích klíčových slov | — | 2,3 miliardy klíčových slov s méně než 10 hledáními měsíčně = téměř 93 % americké databáze Ahrefs; naproti tomu jen necelých 18 000 klíčových slov má 100 000+ hledání měsíčně | [1](https://ahrefs.com/blog/long-tail-keywords/) |
| Podíl B2B nakupujících preferujících nákup bez obchodníka | — | 67 % (průzkum Gartner, 646 nakupujících, srpen–září 2025); v předchozím průzkumu 2025 to bylo 61 % | [1](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience) |
| Poměr velikosti vyhledávání a AI chatbotů (kontext pro klienta) | — | Google Search 3,3 mld. unikátních návštěvníků měsíčně vs. 655 mil. u všech AI chatbotů dohromady; 95 % uživatelů ChatGPT (461 z 494 mil.) používá ve stejném období i Google; ChatGPT uváděl externí odkazy jen u 6,8 % odpovědí (květen 2026) | [1](https://www.searchenginejournal.com/ai-search-isnt-replacing-google-its-layering-on-top-similarweb-data/583378/) |
| Datum poslední veřejné verze Google Search Quality Rater Guidelines | — | Soubor na Google serveru má hlavičku Last-Modified: Thu, 11 Sep 2025 (ověřeno HTTP dotazem na searchqualityevaluatorguidelines.pdf, velikost 8 969 290 B) | [1](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf) |
| Spuštění AI funkcí Googlu v češtině | — | Přehledy od AI (AI Overviews) v ČR: 20. 5. 2025. Režim AI (AI Mode) v ČR: 7. 10. 2025. | [1](https://blog.google/intl/cs-cz/produkty-sluzby/objevujte-ziskavejte-odpovedi/google-spousti-v-cesku-prehledy-od-ai/) |
| Dostupnost reportu Generative AI performance v Search Console | Od 31. 8. 2026 celosvětově pro všechny weby | Obsahuje pouze imprese (žádné prokliky), neodděluje AI Overviews od AI Mode, platí standardní limit 1 000 řádků | [1](https://support.google.com/webmasters/answer/16984139) [2](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/) |

### Nástroje

**Google Search Console** — Zdarma

Skutečné dotazy, na které se web zobrazuje, prokliky, imprese, CTR a průměrná pozice po dotazech a stránkách; report Indexování stránek (které URL Google zaindexoval a proč ne); kontrola jednotlivé URL; report Generative AI performance (imprese v AI Overviews a AI Mode). Jediný spolehlivý zdroj pro diagnostiku kanibalizace: filtr na jeden dotaz + záložka Stránky.

**Seznam Webmaster (reporter.seznam.cz/wm/)** — Zdarma

Kolik stránek SeznamBot navštívil, kolik jich je v indexu, kolik hlásí přesměrování a kolik chybu; přes API vzorek až 1 000 chybových URL a detail toho, co robot na konkrétní URL vidí; ruční přidání URL k indexaci (API 500 URL/den).

**Sklik — Návrh klíčových slov** — Zdarma (stačí registrovaný účet, není nutné inzerovat)

Jediný veřejný zdroj hledanosti přímo ze Seznamu: návrhy frází, průměrná měsíční hledanost za poslední rok, odhad CPC. Seznam na tento nástroj sám odkazuje ve své SEO nápovědě.

**Marketing Miner** — Minee zdarma (10 měřených slov, 50 profilerů, 500 kreditů); Starter 499 Kč, Miner 849 Kč, Digger 1 799 Kč, Machine 2 899 Kč měsíčně bez DPH; všechny placené tarify mají stejné funkce, liší se jen limity

Analýza klíčových slov s českými daty, návrhy a metriky, hromadné zpracování ze 40+ nástrojů, měření pozic na Googlu i Seznamu, SEO audit, analýza konkurence, monitoring zmínek, měření AI viditelnosti (ChatGPT, Gemini, Perplexity, Google AI), napojení na AI asistenty přes MCP.

**Collabim** — Free (150 klíčových slov, 1 web, 70 kreditů); Lite 598 Kč, Advanced 1 140 Kč, Profi 1 598 Kč, Business 3 998 Kč měsíčně bez DPH při měsíční fakturaci (při roční Lite 538 Kč); 14 dní zdarma na všechny placené tarify

Měření pozic na Googlu i Seznamu (nejsilnější stránka v ČR), měření AI viditelnosti, analýza klíčových slov a konkurence, SEO audit, reporty pro klienta, zpětné odkazy, API a MCP.

**Ahrefs Webmaster Tools (nově Ahrefs Free)** — Zdarma po ověření vlastnictví webu

Site Audit (technický crawl, 170+ typů problémů) do 5 000 crawl kreditů měsíčně na projekt; Site Explorer pro vlastní ověřené weby (zpětné odkazy a organická klíčová slova, do 1 000 řádků na report); Web Analytics bez cookies do 1 mil. událostí měsíčně; SEO Toolbar.

**Screaming Frog SEO Spider** — Zdarma do 500 URL na crawl; licence 279 USD ročně (1–4 licence; cena a měna se liší podle regionu, ve VB uváděno ~199 GBP)

Nejrychlejší způsob, jak zvenčí bez jakéhokoli přístupu zjistit: všechny titulky a meta description a jejich duplicity, nadpisovou strukturu H1–H6, chybějící alt texty, stavové kódy, přesměrování a jejich řetězce, canonical, meta robots, hloubku zanoření stránek a osiřelé stránky. Základ mapování dotazů na stránky.

**Bing Webmaster Tools** — Zdarma

Data o dotazech a klikách z Bingu (na desktopu v ČR 8,14 % podle StatCounteru), Site Scan audit, zpětné odkazy včetně konkurenčních, IndexNow. Relevantní i proto, že Bing napájí Copilot.

**Prohlížeč, anonymní okno a view-source** — Zdarma

Nejdůležitější nástroj celého auditu: záměr hledání se určuje pohledem na skutečný SERP (Google i Seznam), přítomnost AI Overview u konkrétních dotazů klienta, kdo je citovaný, jak vypadá titulek a popisek klienta ve srovnání s konkurencí. Přes view-source: skutečný <title>, meta description, meta robots, canonical, hlavičky h1–h6, strukturovaná data, ověřovací meta tagy (seznam-wmt, google-site-verification), a hlavně jestli je obsah v HTML nebo se dokresluje JavaScriptem.

**robots.txt, sitemap.xml a HTTP hlavičky (curl)** — Zdarma

Otevřít domena.cz/robots.txt a domena.cz/sitemap.xml. Zjistí se: blokovaní AI roboti (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, Google-Extended, Seznam-Extended, AI, MachineLearning), omylem blokované sekce webu, chybějící nebo zastaralá sitemapa, absolutní vs. relativní URL sitemapy. Přes curl -I navíc redirecty, X-Robots-Tag a hlavičky.

**Firmy.cz, Mapy.cz, Google vyhledávání firmy a ARES** — Zdarma

Existuje zápis na Firmy.cz a Google Business Profile? Shodují se název, adresa a telefon napříč webem, Firmy.cz, Google a zápisem v ARES/obchodním rejstříku? Jsou uvedené povinné identifikační údaje (jméno, sídlo, IČO, zápis v OR)? Kolik a jakých recenzí firma má?

**Google Rich Results Test a Schema Markup Validator** — Zdarma

Jestli strukturovaná data na stránce existují, jsou validní a jestli na jejich základě může vzniknout rozšířený výsledek.


### Časté chyby

**Titulek homepage je „Úvod“, „Home“, „Vítejte“ nebo jen název firmy** — vysoká

*Jak poznat:* View-source homepage, nebo vyhledat firmu na Google a podívat se, co se zobrazí jako nadpis výsledku. Alternativně crawl přes Screaming Frog a seřadit podle sloupce Title.

*Náprava:* Titulek homepage ve struktuře „co firma dělá pro koho + název firmy“, 51–60 znaků. Ne „Úvod | Firma s.r.o.“, ale „Zakázková výroba plechových dílů na CNC | Firma s.r.o.“. Zabere 10 minut a je to nejlevnější zásah v celém auditu.

**Stejný title a meta description na všech podstránkách, protože šablona CMS je generuje z názvu webu** — vysoká

*Jak poznat:* Crawl webu a kontrola duplicit ve sloupcích Title a Meta Description. Typicky u webů postavených na šabloně, kde titulek neřešil nikdo po předání.

*Náprava:* Unikátní titulek pro každou stránku, která má přivádět návštěvnost. Seznam k tomu ve své nápovědě uvádí přímo: „Pro každou stránku by měl být jedinečný“ a varuje před obecnými titulky typu „Nová stránka“. U meta description dát prioritu homepage, stránkám služeb a stránkám s cenami — u zbytku se to nevyplatí, protože Google popisek přepíše v 62,78 % případů.

**Všechny služby na jedné dlouhé stránce „Naše služby“** — vysoká

*Jak poznat:* Web má 5–8 stránek celkem, ale firma nabízí 8–15 odlišných služeb. V navigaci je jedna položka „Služby“ vedoucí na jednu URL.

*Náprava:* Samostatná stránka pro každou službu, kterou někdo skutečně hledá jako samostatný pojem — to rozhoduje test, jestli má dotaz vlastní „parent topic“, ne intuice. Jedna stránka nemůže současně soutěžit o „montáž vzduchotechniky“ a „revize požárních klapek“. Toto je typicky nejdražší nález auditu, ale i ten s největší návratností.

**Web mluví interním jazykem firmy — názvy vlastních produktů, oborový žargon, zkratky — místo slovy, kterými zákazník hledá** — vysoká

*Jak poznat:* Vzít 10 hlavních výrazů z webu, zadat je do Návrhu klíčových slov ve Skliku a do Google Keyword Planneru. Pokud vycházejí nuly a přitom firma tvrdí, že po tom je poptávka, hledá se to jinak. Druhý test: existuje na webu vůbec věta, která říká, co firma dělá, bez použití vlastního názvosloví?

*Náprava:* Doplnit na stránky obecné pojmenování, kterým se to hledá, a teprve vedle něj vlastní název. Neznamená to opustit vlastní terminologii, ale nespoléhat na to, že ji někdo bude hledat. Seznam k tomu radí: „Je vhodné mít texty na stránkách rozmanité a nepoužívat v nich pouze nejhledanější slova a fráze.“

**Blog jako „Aktuality“ — vánoční přání, informace o dovolené, fotky z firemního večírku** — střední

*Jak poznat:* Projít 10 posledních článků a u každého se zeptat: existuje dotaz, na který tenhle článek odpovídá? Zkontrolovat, kdy vyšel poslední článek s odborným obsahem.

*Náprava:* Buď blog zrušit a energii dát do stránek služeb, nebo psát na dotazy, které zákazníci před nákupem reálně řeší. U B2B fungují srovnání, výběrové návody, ceníkové orientace a případové studie. Nikdy nedoporučovat „psát blog“ jako samostatný cíl — to je nejčastější způsob, jak firma promrhá rozpočet.

**Nadpisy jsou udělané vizuálně (velký tučný text v <div> nebo <p>), ne jako <h2>/<h3>** — střední

*Jak poznat:* View-source nebo crawl s výpisem H1–H6. Poznávací znamení: stránka vypadá dobře strukturovaná, ale crawl vrátí jen jedno H1 a nic dalšího.

*Náprava:* Převést vizuální nadpisy na skutečné hlavičky se správnou hierarchií. Seznam mezi hlavní parametry řazení explicitně počítá „statistiky výskytu html elementů (odstavce, nadpisy, seznamy, obrázky)“. Zároveň to opraví přístupnost — podle WebAIM Million 2026 přeskakuje úrovně nadpisů 41,8 % stránek a 7,5 % nemá nadpis žádný.

**H1 je logo, claim nebo obecná fráze („Vítejte na našich stránkách“, „Kvalita, na kterou se můžete spolehnout“)** — střední

*Jak poznat:* View-source, hledat <h1>. Časté u webů, kde je logo obalené do H1 z historických důvodů.

*Náprava:* H1 má říct, o čem stránka je. Nemá smysl řešit počet H1 — Google potvrdil, že jedno, více ani žádné H1 mu nevadí — ale má smysl řešit, jestli hlavní nadpis vůbec nese informaci. Bonus: pokud se H1 a titulek shodují v klíčových prvcích, Google podle Zyppy zachovává originální titulek výrazně častěji.

**Kanibalizace mezi stránkou služby, starým blogovým článkem a PPC landing page** — střední

*Jak poznat:* `site:domena.cz "hlavní fráze"` a sledovat, kolik vlastních URL se vrátí. S přístupem do Search Console: filtr na jeden dotaz, záložka Stránky, hledat rozdělené imprese a střídající se URL. Typický další signál jsou skoky průměrné pozice bez sezónního důvodu.

*Náprava:* Vybrat jednu stránku jako hlavní, ostatní sloučit a přesměrovat 301, případně nastavit canonical. Pozor: Seznam kanonický odkaz mířící sám na sebe ignoruje a canonical neakceptuje, pokud se mu stránky nezdají dostatečně obsahově podobné — u Seznamu je proto 301 spolehlivější než canonical.

**Žádný zápis na Firmy.cz, nebo zápis s neaktuálními údaji z doby vzniku firmy** — vysoká

*Jak poznat:* Vyhledat název firmy na Firmy.cz a na Seznamu. Porovnat název, adresu, telefon a e-mail s webem a se zápisem v ARES.

*Náprava:* Založit nebo aktualizovat základní profil — je zdarma. Kromě lokální viditelnosti to má přímý dopad na vzhled výsledku ve vyhledávání: Seznam popisek doplňuje z katalogového zápisu Firmy.cz, pokud se hledaný dotaz na stránce nevyskytuje nebo je text příliš krátký. Placený tarif Seznam naplno (od 12 Kč/den bez DPH) doporučovat až po vyčerpání bezplatných možností.

**Web není napojený na Search Console ani na Seznam Webmaster** — vysoká

*Jak poznat:* View-source homepage a hledat meta name="google-site-verification" a meta name="seznam-wmt", případně zkusit verifikační soubory v rootu. Nepřítomnost není důkaz (ověření může být přes DNS nebo Google Analytics), ale je to silná indicie — a klient obvykle sám potvrdí, že o nástrojích neví.

*Náprava:* Napojit obojí ještě před zahájením jakýchkoli obsahových úprav, aby existovala výchozí hodnota. Bez toho nelze po půl roce doložit, že audit fungoval. U Seznam Webmastera upozornit, že HTTP a HTTPS jsou samostatné weby s vlastním ověřením a že změna správce nenávratně smaže data starší 2 měsíců.

**Kontakt bez IČO, bez adresy sídla, bez jmen konkrétních lidí — jen formulář a obecný e-mail info@** — vysoká

*Jak poznat:* Otevřít stránku Kontakt a O nás. Zkontrolovat, jestli jsou uvedené identifikační údaje, které § 435 občanského zákoníku vyžaduje u informací zpřístupňovaných veřejnosti dálkovým přístupem (jméno a sídlo, u zapsaných v OR i údaj o zápisu včetně oddílu a vložky a IČO).

*Náprava:* Doplnit plné identifikační údaje, adresu, telefon a jména lidí s fotografií a rolí. Je to zároveň zákonná povinnost a nejsilnější dostupný signál důvěryhodnosti pro malou firmu — Google uvádí, že z E-E-A-T je „důvěra nejdůležitější“ a doporučuje „jasné zdrojování, doklady o odbornosti, informace o autorovi nebo o webu, například odkazy na stránku autora nebo stránku O nás“.

**Reference bez jmen — „spokojený zákazník z Prahy“, „přední výrobce z oboru automotive“** — střední

*Jak poznat:* Projít stránku Reference a spočítat, u kolika je uvedený název firmy, jméno člověka a měřitelný výsledek.

*Náprava:* Získat souhlas alespoň u 3–5 klientů a uvést název firmy, jméno a pozici konkrétní osoby, ideálně logo a číselný výsledek. Anonymní reference nemá pro B2B nakupujícího hodnotu a algoritmy z ní nemají co ověřit. Toto je typicky bod, který firma dokáže vyřešit bez rozpočtu, jen ochotou zavolat klientům.

**Ceny ani cenová orientace nikde na webu, protože „to záleží na zadání“** — vysoká

*Jak poznat:* Hledat na webu jakoukoli částku, rozpětí, „od“ cenu nebo popis toho, co cenu určuje.

*Náprava:* Doplnit alespoň pásmo, typický rozsah zakázky nebo popis faktorů, které cenu tvoří. Cenové a srovnávací dotazy jsou v B2B nejblíž nákupu, a firma bez jakéhokoli cenového signálu se na ně nemá jak umístit. Zároveň to filtruje nevhodné poptávky a šetří čas obchodu.

**Obsah se dokresluje JavaScriptem a bez něj je stránka prázdná** — vysoká

*Jak poznat:* View-source (ne Inspect — view-source ukáže původní HTML) a zkontrolovat, jestli je hlavní text v HTML. Nebo curl -s URL | grep na klíčovou větu ze stránky. Typické u webů postavených na React/Vue bez serverového renderování.

*Náprava:* Zajistit serverové renderování nebo statické předgenerování hlavního obsahu. Google si s JavaScriptem poradí lépe, Seznam mnohem hůř. Zároveň Seznam varuje před textem v obrázcích: „vyhledávač takový text nemusí zohlednit při indexaci.“

**Web běží současně na www i bez www, na http i https, bez jednotného přesměrování** — střední

*Jak poznat:* Postupně zkusit http://domena.cz, http://www.domena.cz, https://domena.cz, https://www.domena.cz a sledovat, kam se to přesměruje (curl -sIL). Zkontrolovat i /index.php nebo /index.html.

*Náprava:* Jedna kanonická varianta, 301 ze všech ostatních, jeden skok bez řetězení. Seznam duplicitní weby řadí mezi „nevhodné optimalizační techniky“ a uvádí, že jedna doména bude vybrána jako hlavní a ostatní penalizovány — a hlavní nemusí být ta, kterou firma chce.

**robots.txt blokuje vyhledávací AI roboty, obvykle omylem nebo výchozím nastavením hostingu či Cloudflare** — střední

*Jak poznat:* Otevřít domena.cz/robots.txt. Hledat OAI-SearchBot, Claude-SearchBot, PerplexityBot — blokování těchto tří firmu vyřazuje z citací v AI odpovědích. Blokování GPTBot, ClaudeBot a Google-Extended je jiná věc a může být záměr (týká se trénování, ne vyhledávání).

*Náprava:* Rozlišit v reportu trénovací a vyhledávací roboty a nechat rozhodnutí na klientovi. OpenAI uvádí přímo: „Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers.“ Google zase uvádí, že „Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal“. Zvlášť ověřit, jestli web neběží za Cloudflare, který od 1. 7. 2025 blokuje AI scraping u nových domén ve výchozím nastavení.

**Nasazený nosnippet nebo max-snippet, obvykle jako pozůstatek po někom, kdo „chtěl chránit obsah před AI“** — vysoká

*Jak poznat:* View-source, hledat meta name="robots" s hodnotou nosnippet nebo max-snippet. U Seznamu navíc meta name="seznambot" content="nosnippet".

*Náprava:* Odstranit, pokud to nebylo vědomé rozhodnutí. Google uvádí, že nosnippet „platí pro všechny formy výsledků vyhledávání (web search, Google Images, Discover, AI Overviews, AI Mode) a zabrání použití obsahu jako přímého vstupu pro AI Overviews a AI Mode“ — ale zároveň zruší normální popisek u běžných výsledků. Není možné být ve výsledcích s popiskem a zároveň mimo AI odpovědi.

**Sitemap.xml chybí, je zastaralá, nebo obsahuje URL, které vracejí 404 a přesměrování** — střední

*Jak poznat:* Otevřít domena.cz/sitemap.xml a domena.cz/robots.txt (je tam sitemapa uvedená? absolutní URL?). Namátkově otevřít 10 URL ze sitemapy a zkontrolovat stavové kódy.

*Náprava:* Generovat sitemapu automaticky z CMS, uvádět v robots.txt absolutní URL (Seznam to výslovně vyžaduje), držet limity 50 000 URL / 50 MB. Priority v sitemapě nastavovat rozlišeně nebo vůbec — Seznam uvádí, že „nemá také žádný význam nastavit prioritu všech stránek na 1“ a že priority nemají vliv na pořadí ve výsledcích.

**Firma investuje do textů psaných na hledanost, ale nemá stránku pro dotazy s nákupním záměrem („cena“, „srovnání“, „alternativa k X“, „recenze“)** — vysoká

*Jak poznat:* Vzít 10 dotazů, které by zadal někdo těsně před nákupem, a hledat, kam by na webu měly vést. Zkontrolovat, jestli existuje stránka typu ceník, srovnání variant, případová studie.

*Náprava:* Přesunout prioritu z informačních článků na komerční a transakční stránky. To je zároveň obrana proti AI odpovědím: podle Semrush (600 000 klíčových slov, listopad 2025 – duben 2026) rostl výskyt AI Overviews u komerčních dotazů o 71 %, ale u transakčních klesl o 5 % — čistě informační obsah je nejvíc vystavený tomu, že odpověď spotřebuje AI a proklik nepřijde.

**Report doporučuje llms.txt, „optimalizaci pro AI“ přes speciální soubory nebo speciální schema** — nízká

*Jak poznat:* Tohle je chyba dodavatele, ne klienta — ale klienti to často mají v nabídce od jiných agentur a ptají se na to.

*Náprava:* Odmítnout s odkazem na oficiální stanovisko: Google uvádí, že „nemusíte vytvářet nové strojově čitelné soubory, AI textové soubory ani markdown, abyste se objevili ve vyhledávání Google včetně jeho generativních AI funkcí, protože je Google Search nepoužívá“, a že „neexistuje žádná speciální schema.org strukturovaná data, která by bylo potřeba přidat“. Uvedení tohoto bodu v reportu zvyšuje důvěryhodnost auditu, protože klientovi ušetří peníze.


### Česká specifika

SEZNAM.CZ — REÁLNÝ PODÍL. StatCounter (srpen 2026): Google 79,33 %, Seznam 15,63 %, Bing 3,93 %. Podle zařízení je to zajímavější: desktop Google 74,66 % / Seznam 15,64 % / Bing 8,14 %, mobil Google 83,71 % / Seznam 15,21 % / Bing 0,34 %. Pro B2B, kde se rozhoduje u počítače v pracovní době, je tedy relevantní i Bing (8 % desktopu, navíc napájí Copilot). StatCounter měří přes referrery na svých partnerských webech, takže čísla se liší od NetMonitoru a od reálného mixu konkrétní firmy — u klienta se Seznamem 5 % i 30 % jsou obojí normální. Nejlepší odpověď na otázku „vyplatí se Seznam?“ není trh, ale vlastní data klienta: podíl zdroje seznam.cz v analytice a v Collabimu nebo Marketing Mineru. Orientačně platí, že Seznam je silnější u starší cílovky, u regionálních služeb a u řemesel a slabší v IT a technologickém B2B.

SEZNAM ZVEŘEJŇUJE SVÉ HODNOTICÍ PARAMETRY. V technických podmínkách (povinné zveřejnění podle DSA) Seznam uvádí hlavní parametry řazení: výskyt slov z dotazu v dokumentu nebo v odkazech; grafové algoritmy nad odkazovou sítí a statistiky zpětných odkazů; zpětná vazba od uživatelů (počet kliků na výsledek a na výsledky z webu); shoda jazyka dokumentu s jazykem dotazu; informace o dotazu (jazyk, slovní druhy, vzácnost slov, počet samostatně významových segmentů); informace o dokumentu (jazyk, statistiky výskytu HTML elementů — odstavců, nadpisů, seznamů, obrázků —, protokol http/https, velikost dokumentu, velikost komprimovaného dokumentu, výskyt kódů reklamních systémů). Modely strojového učení se aktualizují cca jednou za 3 měsíce. To je unikátní situace: u Googlu se tohle odhaduje, u Seznamu je to napsané. Report může přímo citovat.

TECHNICKÉ ODLIŠNOSTI SEZNAMU OD GOOGLU (vše z oficiální nápovědy):
— SeznamBot se NEŘÍDÍ HTTP hlavičkou X-Robots-Tag a ignoruje ji; stáhne vždy celou URL. Kdo řídí indexaci jen hlavičkou, má na Seznamu jiný stav indexu než na Googlu.
— Zápis <meta name="SeznamBot" content="..."> není podporován; použít je nutné name="robots".
— Podporovaná kódování stránky: iso-8859-2, windows-1250, utf-8, utf-16. Jiné kódování = stránka se do indexu nedostane. Kódování musí být deklarované v hlavičce každé stránky.
— Canonical mířící sám na sebe SeznamBot ignoruje. Canonical neakceptuje, pokud se mu stránky nezdají dostatečně obsahově podobné. Canonical nesmí mířit na přesměrování ani na URL vyžadující cookie (robot cookies nepodporuje). U Seznamu je proto 301 spolehlivější než canonical.
— Titulek bere výhradně z <title> a Seznam uvádí, že jej ze své strany nelze měnit. Popisek odvozuje ze zaindexovaného textu; pokud se dotaz na stránce nevyskytuje nebo je text příliš krátký, doplní jej z popisku katalogového zápisu Firmy.cz.
— „Rychlé odkazy“ (sitelinks) přebírá z odkazů uvedených na homepage, které vedou na dokumenty ze stejné domény 2. řádu.
— „Osnova“ (odkazy do částí stránky přímo ve výsledku) vyžaduje vnitřní odkazy pomocí kotev v HTML.
— Featured snippet vybírá pouze z prvních deseti výsledků.
— Sitemapa: URL v robots.txt musí být absolutní, až 100 odkazů na sitemapy, limity 50 000 URL / 50 MB, podporován gzip. Priority nemají vliv na pořadí ve výsledcích.
— Zakázané a nevhodné techniky mají vlastní veřejný seznam (webspam, MFA, linkfarmy, SEO PR, SEO katalogy, doorway, skrytá přesměrování, phishing, obsahové farmy; cybersquatting včetně použití cizí favicony, doménová farma, keyword stuffing, cloaking, nepřirozené odkazy; duplicitní weby, výsledky vyhledávání na stránkách). Postih je automatický, pravidla jsou neveřejná, majitel jej nemůže zrušit a postih trvá ještě nějakou dobu po odstranění techniky.

SEZNAM WEBMASTER. Zdarma, ale stále v beta verzi a Seznam sám upozorňuje, že data mohou být dočasně nedostupná nebo graf může nečekaně klesnout, aniž by web vypadl z indexu. Ověření pouze meta tagem seznam-wmt v <head> homepage nebo souborem seznam-wmt-<kód>.txt v rootu — ověření meta tagem vloženým skriptem není podporováno. HTTP a HTTPS jsou samostatné weby s vlastním ověřením. Jeden web má jednoho správce; změna správce nenávratně smaže data starší 2 měsíců. API pro přidání URL: max 500 URL denně.

INDEXNOW. Seznam protokol podporuje (stejně jako Bing, Yandex a Naver — Google ne). Na rozdíl od API Seznam Webmastera není limitovaný počtem URL. URL, u nichž algoritmus rozhodne o indexaci, se do výsledků dostanou do týdne. Klíč: UTF-8, 8–128 znaků z množiny a-z A-Z 0-9 -, v TXT souboru bez HTML a bez BOM, v rootu jako klíč.txt (doporučeno) nebo ve složce s uvedením keyLocation.

SEZNAM ASISTENT A AI. Seznam spustil vlastního AI asistenta postaveného na modelu SeLLMa; beta byla zpřístupněna všem přihlášeným uživatelům 25. 5. 2026. Featured snippet ve výsledcích už nabízí pokračování konverzací v Asistentovi. Seznam v technických podmínkách uvádí, že do výstupu Asistenta mohou být zahrnuty i sponzorované výsledky, ale úplata sama o sobě zařazení nezaručuje a výstup nelze koupit. Seznam má vlastní opt-out z AI odpovědí, který se liší od Googlu: v robots.txt stačí jedna z položek User-agent: Seznam-Extended / User-agent: AI / User-agent: MachineLearning s Disallow: /, případně meta hlavička nosnippet (ta ale zároveň zruší i běžné popisky ve výsledcích). Tohle patří do každého českého auditu robots.txt — na mezinárodních seznamech AI robotů tyhle user-agenty nejsou.

FIRMY.CZ. Základní firemní profil je zdarma a Seznam sám upozorňuje na firmy, které volají a nabízejí „placenou registraci v katalogu firem“ s odkazem na Seznam — a doporučuje si vždy ověřit, jestli jde skutečně o Seznam.cz. Placené tarify Seznam naplno fungují jako denní aukce a od 15. 7. 2025 stojí: Startuj od 12 Kč/den, Rozvíjej od 25 Kč/den, Získávej od 50 Kč/den, Profituj od 100 Kč/den (bez DPH); minimální investice do jedné kategorie 12 Kč bez DPH. Zápis má přímý dopad i na organické výsledky, protože z něj Seznam doplňuje popisky.

DATA O HLEDANOSTI V ČEŠTINĚ. Sklik (Návrh klíčových slov) je jediný veřejný zdroj hledanosti přímo ze Seznamu; stačí registrovaný účet, inzerovat není nutné. Seznam na něj sám odkazuje ve své SEO nápovědě. Googleovská data z Keyword Planneru vyžadují účet Google Ads a bez aktivních kampaní zobrazují jen rozpětí. Marketing Miner a Collabim obojí kombinují. Praktický důsledek: v češtině je nutné pracovat se dvěma sadami čísel a s vědomím, že obě podhodnocují long tail.

ČEŠTINA JAKO JAZYK. Skloňování a slovosled znamenají, že jeden pojem má 5–10 tvarů („účetní software“, „účetního softwaru“, „software pro účetnictví“, „účetní program“). Tvary se při analýze slučují do jedné skupiny a mapují na jednu stránku, nesčítají se jako samostatné cíle. Diakritika: bez ní se dotazy dnes obvykle vyhodnocují stejně, ale texty na webu se píší s diakritikou vždy — je to signál kvality i pro čtenáře. Seznam navíc uvádí, že „dominantní jazyk stránky rozpoznává na základě množství textu v jednotlivých jazycích“ a že „shoda jazyka dokumentu s jazykem dotazu“ je jeden z hlavních parametrů řazení — u dvojjazyčných webů (CZ/EN na jedné stránce nebo bez hreflang) to je reálný problém. Seznam u víceslovných domén upozorňuje, že „pokud jsou slova v doméně napsaná bez mezer, robot zpravidla rozezná jen ta nejběžnější“ — doporučuje spojovník.

AI FUNKCE GOOGLU V ČEŠTINĚ. Přehledy od AI (AI Overviews) jsou v ČR od 20. 5. 2025, Režim AI (AI Mode) od 7. 10. 2025. České AI Overviews jsou mladší než ta americká, takže dopadové studie z USA (Ahrefs, Pew) je nutné brát jako indikaci směru, ne jako číslo platné pro ČR. Report Generative AI performance v Search Console je celosvětově dostupný od 31. 8. 2026, ale obsahuje jen imprese, žádné prokliky, a neodděluje AI Overviews od AI Mode.

POVINNÉ ÚDAJE NA WEBU. § 435 zákona č. 89/2012 Sb. (občanský zákoník) ukládá podnikateli uvádět na obchodních listinách a v informacích zpřístupňovaných veřejnosti dálkovým přístupem jméno a sídlo; podnikatel zapsaný v obchodním rejstříku i údaj o zápisu včetně oddílu a vložky a přidělený identifikující údaj (IČO). Pro obchodní společnosti s internetovými stránkami platí navíc povinnosti podle zákona č. 90/2012 Sb. o obchodních korporacích. Je to zároveň zákonná povinnost i nejlevnější dostupný E-E-A-T signál — v auditu má smysl uvádět obě roviny.

### Kde si nejsme jistí

- Přesné znakové limity pro title (50–60 znaků / 580–600 px) a meta description (155–160 znaků desktop, ~120 mobil, 920 px / 580 px) nemají žádný primární zdroj. Google výslovně uvádí, že limit neexistuje a že zkracuje podle šířky zařízení. Čísla kolují po SEO blozích bez uvedení metodiky měření a data. Jediné dohledatelné měření s uvedeným vzorkem je studie Zyppy (pásmo 51–60 znaků má nejnižší míru přepsání), a i ta je z roku 2022. Do reportu doporučuji uvádět jen údaj ze Zyppy s odkazem a zbytek formulovat jako orientační pravidlo, ne jako normu.
- Rozsah naměřeného poklesu CTR kvůli AI Overviews je široký (−34,5 % Ahrefs 2025, −58 % Ahrefs 2026, −47 % relativně Pew, −65 % Seer) a jednotlivé studie měří různé věci na různých vzorcích a trzích. Žádná z nich neměřila český trh ani češtinu. České AI Overviews běží teprve od května 2025, tedy kratší dobu než data, ze kterých tyto studie vycházejí. Klientovi lze poctivě říct jen to, že pokles je doložený a významný, ne kolik konkrétně ztratí.
- Nepodařilo se ověřit, jaký podíl vyhledávání na Seznamu dnes končí u Seznam Asistenta a jestli a jak Asistent odkazuje na zdrojové weby v míře srovnatelné s AI Overviews. Seznam uvádí jen to, že „poměr pozitivní uživatelské zpětné vazby už atakuje hranici 90 %“, což o dopadu na návštěvnost webů neříká nic. Údaje o parametrech modelu SeLLMa (70 miliard parametrů, investice přes 100 mil. Kč) a o denních limitech dotazů (40 zdarma / 400 pro předplatitele) pocházejí ze sekundárních zdrojů, na blogu Seznamu se je potvrdit nepodařilo.
- Nepodařilo se dohledat spolehlivá segmentovaná data o podílu Seznamu podle oboru, kraje a věku uživatelů. Údaj o 3,5% podílu Seznamu v B2B IT segmentu se objevil ve výsledcích vyhledávání bez dohledatelné primární studie a neměl by se v reportu používat. Jediný obhajitelný postup je změřit podíl u konkrétního klienta z jeho analytiky, ne extrapolovat z trhu.
- Ve vlastní dokumentaci Seznamu je rozpor: stránka Meta tag robots uvádí „Nepodporujeme zápis s meta name=\"SeznamBot\"“, ale stránka Zákaz tvorby AI odpovědí zápis <meta name=\"seznambot\" content=\"nosnippet\"> naopak doporučuje. Bezpečnější je pro blokování AI odpovědí použít robots.txt (Seznam-Extended / AI / MachineLearning) a name=\"robots\" pro indexaci.
- Blogy uvádějí „červnový 2026 update“ Search Quality Rater Guidelines s konkrétními čísly sekcí (5.2, 5.4, 6.1) a novým pojmem „Synthetic Authority“. Ověření přímo na souboru u Googlu ukazuje hlavičku Last-Modified 11. 9. 2025, tedy že se soubor od té doby nezměnil. Ty články vypadají jako obsah generovaný AI s vymyšlenými detaily. Do reportu patří pouze ověřená verze ze září 2025.
- Čísla o podílu AI referral traffic na celkové návštěvnosti se napříč zdroji liší o řád (0,15 % / 1,08 % / 5 % sessions) podle vzorku, metodiky a období. Pro malý český B2B web není žádný z těchto benchmarků použitelný. Reálné číslo se dá zjistit jen z analytiky konkrétního klienta (referraly z chatgpt.com, perplexity.ai, claude.ai, gemini.google.com).
- Semrush studie o nejčastějších technických SEO chybách (50 % duplicitní obsah, 45 % chybějící alt, 35 % duplicitní titulky, 30 % duplicitní description, 25 % chybějící description, 20 % vícenásobné H1) je z 19. 7. 2016 na vzorku 100 000 webů a 450 mil. stránek. Čísla se často citují jako aktuální, ale jsou deset let stará a měří světový vzorek, ne český. Do reportu je lepší použít čerstvý WebAIM Million 2026, který má stejný typ nálezů a datum únor 2026.
- Cena licence Screaming Frog se zobrazuje v různých měnách podle regionu (279 USD/rok pro 1–4 licence z ceníku, ve VB uváděno ~199 GBP). Nepodařilo se ověřit, jaká je konkrétní částka v Kč nebo EUR pro Českou republiku.
- Údaj o pokutě do 50 000 Kč za neuvedení povinných údajů na webu podle § 24 zákona o přestupcích pochází ze sekundárního právního blogu, ne z ověřeného znění zákona. Existence povinnosti podle § 435 občanského zákoníku je nesporná, výše sankce v reportu uváděna být nemá bez ověření u právníka.
- Tvrzení, že u domén s nižší autoritou (DR pod 50) vede kanibalizace tří a více URL na jeden dotaz k pozicím 8–20, zatímco u domén DR 75+ je efekt zanedbatelný, pochází z blogu bez dohledatelné metodiky a vzorku. Mechanismus kanibalizace je dobře doložený, tahle konkrétní čísla nikoli.
- Twitterové a Reddit výroky Johna Muellera o počtu slov („Word count is not a ranking factor“) jsou dohledatelné jen přes sekundární citace v SEO médiích; původní příspěvky jsou z let 2020–2022 a část zdrojových platforem už není veřejně prohledávatelná. Obsahově to Google potvrzuje i v aktuální dokumentaci o užitečném obsahu, ale doslovnou citaci s odkazem na primární zdroj se ověřit nepodařilo.

<details><summary>Zdroje (64)</summary>

- https://gs.statcounter.com/search-engine-market-share/all/czech-republic
- https://gs.statcounter.com/search-engine-market-share/desktop/czech-republic
- https://gs.statcounter.com/search-engine-market-share/mobile/czech-republic
- https://o-seznam.cz/napoveda/vyhledavani/
- https://o-seznam.cz/napoveda/vyhledavani/technicke-podminky/
- https://o-seznam.cz/napoveda/vyhledavani/optimalizace/
- https://o-seznam.cz/napoveda/vyhledavani/optimalizace/optimalizacni-minimum/
- https://o-seznam.cz/napoveda/vyhledavani/optimalizace/zakazane-a-nevhodne-techniky/
- https://o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/
- https://o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/struktura-vysledku/
- https://o-seznam.cz/napoveda/vyhledavani/strukturovana-data/
- https://o-seznam.cz/napoveda/vyhledavani/seznam-webmaster/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/robots-txt/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/sitemap-xml/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/meta-tag-robots/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/kanonicke-url/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/
- https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/
- https://o-seznam.cz/napoveda/vyhledavani/en/indexing-control/
- https://napoveda.firmy.cz/faq/je-profil-na-firmy-cz-bezplatny/
- https://www.seznam.cz/reklama/cz/obsahovy-web/sluzba-firmy/firmy-podpora-a-cena
- https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/
- https://blog.seznam.cz/2025/11/seznam-asistent-umozni-uzivatelum-jednodussi-a-chytrejsi-orientaci-na-ceskem-internetu/
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- https://developers.google.com/search/blog/2022/10/performance-data-deep-dive
- https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- https://support.google.com/webmasters/answer/7576553
- https://support.google.com/webmasters/answer/16984139
- https://support.google.com/business/answer/13763036
- https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- https://blog.google/intl/cs-cz/produkty-sluzby/objevujte-ziskavejte-odpovedi/google-spousti-v-cesku-prehledy-od-ai/
- https://blog.google/intl/cs-cz/produkty-sluzby/objevujte-ziskavejte-odpovedi/rezim-ai-novinka-ve-vyhledavani-prichazi-do-ceska/
- https://ahrefs.com/blog/ai-overviews-reduce-clicks/
- https://ahrefs.com/blog/meta-description-study/
- https://ahrefs.com/blog/long-tail-keywords/
- https://ahrefs.com/webmaster-tools
- https://zyppy.com/seo/google-title-rewrite-study/
- https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- https://webaim.org/projects/million/
- https://www.semrush.com/blog/ai-overviews-commercial-search-study/
- https://www.semrush.com/blog/semrush-study-on-site-seo-issues/
- https://www.searchenginejournal.com/ai-search-isnt-replacing-google-its-layering-on-top-similarweb-data/583378/
- https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/
- https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-486269
- https://developers.openai.com/api/docs/bots
- https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/
- https://www.cloudflare.com/press/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/
- https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience
- https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience
- https://www.marketingminer.com/cs/pricing
- https://www.collabim.cz/cenik
- https://www.screamingfrog.co.uk/seo-spider/pricing/
- https://napoveda.sklik.cz/cileni/klicova-slova/
- https://www.bing.com/indexnow
- https://www.searchenginejournal.com/google-a-site-search-doesnt-show-all-pages/416662/
- https://www.searchenginejournal.com/word-count-not-a-quality-factor/397288/
- https://www.zakonyprolidi.cz/cs/2012-89#p435
- https://www.holec-advokati.cz/cs/povinnosti-ve-vztahu-k-obchodnim-listinam-a-internetovym-strankam-spolecnosti/

</details>

---

## 5. Obsah a sdělení

Kódy bodů v kontrolním seznamu: `SDEL-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| Flesch Reading Ease adaptovaný na češtinu: FRE_cz = 206,935 − 1,672 × (slov/větu) − 62,18 × (slabik/slovo) | 50 a více (pásmo „fairly difficult“ a lépe podle původní Fleschovy tabulky) | pod 35 | [1](https://ufal.mff.cuni.cz/biblio/attachments/2021-bendova-p179299898553114557.pdf) |
| Flesch-Kincaid Grade Level adaptovaný na češtinu: FKGL_cz = 0,52 × (slov/větu) + 9,133 × (slabik/slovo) − 16,393 | do 9 (odpovídá zhruba 9 letům školní docházky) | 12 a více | Bendová & Cinková (2021), tamtéž |
| Automatizovaný index čitelnosti pro češtinu: ARI_cz = 3,666 × (znaků/slovo) + 0,631 × (slov/větu) − 19,491 | do 8 | 12 a více | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Délka věty — podíl vět nad 22 slov | pod 5 % vět | nad 10 % vět | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Vzdálenost podmětu a přísudku ve větě | do 6 slov | nad 6 slov opakovaně | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Pozice přísudku od začátku věty | do 5 slov od začátku | nad 5 slov | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Nedostatek sloves (podíl sloves na počtu slov) — indikátor nominálního stylu | nad 0,06 | pod 0,06 | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Počet záporů ve větě | nejvýše 2 | 3 a více opakovaně | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Opakování stejného pádu v řadě za sebou (řetězení genitivů) | do 3 slov ve stejném pádu | nad 3 slova ve stejném pádu | [1](https://ufal.mff.cuni.cz/ponk/users-manual) |
| Podíl slov, který uživatel při průměrné návštěvě stihne přečíst | — | nejvýše 28 %, reálněji 20 % → obsah nad tento rozsah musí být skenovatelný | [1](https://www.nngroup.com/articles/how-little-do-users-read/) |
| Doba čtení navíc za každých 100 slov přidaných na stránku | — | 25 s základ + 4,4 s na každých dalších 100 slov (tj. z přidaných 100 slov se přečte ~18) | [1](https://www.nngroup.com/articles/how-little-do-users-read/) |
| Doba, po kterou se návštěvník rozhoduje o odchodu | — | prvních 10 s je kritických; teprve po ~30 s pravděpodobnost odchodu výrazně klesá | [1](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) |
| Zlepšení naměřené použitelnosti při úpravě webového textu | stručný text +58 %, skenovatelná úprava +47 %, věcný jazyk bez nadsazování +27 %, vše dohromady +124 % | — | [1](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) |
| Počet testerů pro test pěti sekund a test rodiče | 5 osob (odhalí ~85 % problémů použitelnosti) | 1–2 osoby (výsledek není průkazný) | [1](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) |
| Účinnost případových studií jako B2B formátu | 53 % B2B marketérů je uvádí mezi formáty s nejlepšími výsledky (2. místo za videem s 58 %; v předchozím ročníku 1. místo) | — | [1](https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research-2025) |
| Chybná pozitivita detektorů AI textu (proč se nesmí použít jako důkaz) | — | 61,3 % u esejí nerodilých mluvčích proti 5,1 % u rodilých; vlastní klasifikátor OpenAI odhalil jen 26 % AI textů a chybně označil 9 % lidských | [1](https://arxiv.org/abs/2304.02819) |
| Slabik na slovo v české firemní webové próze (příčina selhání anglických vzorců) | — | medián 2,40; rozpětí 2,01–2,68 (angličtina se pohybuje kolem 1,4–1,5) | Vlastní měření, 27 stránek z 15 českých B2B/IT webů, 9/2026, |
| Flesch Reading Ease počítaný ANGLICKÝM vzorcem na českém textu (kontrolní důkaz, že to nefunguje) | — | medián −5,3 (homepage) a −6,5 (podstránky); rozpětí −29,7 až +32,2; 20 z 27 měření vyšlo záporně, přestože anglická škála je 0–100 | Vlastní měření, 15 českých B2B/IT webů, 9/2026 (tamtéž). Sho |
| FRE_cz naměřený na reálných českých B2B webech (kalibrace, s čím klienta srovnávat) | — | medián 42,6 (podstránky) a 46,4 (homepage); rozpětí 22,9–74,3 — typický český B2B web se čte přibližně jako úřední text | Vlastní měření, 15 českých B2B/IT webů, 9/2026 (tamtéž). Pro |
| Poměr 2. osoby mn. č. k 1. osobě mn. č. (vy : my) na českých B2B webech | 1,0 a více | medián trhu 0,23 na podstránkách a 0,43 na homepage — typický web mluví o sobě 2–4× víc než o zákazníkovi | Vlastní měření, 15 českých B2B/IT webů, 9/2026 (tamtéž); poč |
| Směnný kurz mezi zkracováním vět a zkracováním slov v češtině (co se vyplatí opravovat) | — | snížení o 0,1 slabiky na slovo = zkrácení věty o 3,7 slova; v češtině je tedy výměna dlouhých abstrakt za krátká konkrétní slova ~3,7× účinnější než krácení vět | Vlastní odvození z koeficientů Bendová & Cinková (62,18 / 1, |
| Podíl vět nad 22 slov na reálných českých B2B webech (kalibrace) | — | medián 4,2 % (podstránky) a 1,3 % (homepage); maximum 19,4 % | Vlastní měření, 15 českých B2B/IT webů, 9/2026 (tamtéž) |

### Nástroje

**PONK — Asistent přístupné úřední komunikace (ÚFAL MFF UK), webová aplikace i REST API** — Zdarma pro testování. POZOR: podle podmínek užití vyžaduje jakékoli komerční využití služby (a navázaných služeb UDPipe a NameTag) výslovný písemný souhlas autorů — pro placený audit je nutné si ho vyžádat.

Jediný nástroj skutečně postavený na češtině, ne přepočtený z angličtiny. Vrací ARI, Aktivitu (poměr sloves k slovesům+přídavným jménům), Slovní bohatství (MATTR) a Vzdálenost sloves; navíc barevně vyznačí v textu konkrétní místa podle ~17 pravidel: příliš dlouhé věty (nad 22 slov), vzdálený přísudek, opisný trpný rod, přemíra podstatných jmen, opakování pádů, přemíra negací, slovní vata, vyprázdněná slova, knižní styl, dlouhé výrazy. Ověřeno funkční 9/2026, verze 0.62 (20260320), zpracování ~0,4 s.

**Vlastní skript na výpočet FRE_cz / FKGL_cz / ARI_cz a poměru vy:my (Python, ~90 řádků)** — Zdarma, jednorázově napsaný. Uložen jako /tmp/claude-0/-home-user-webkit-studio/57de1bf2-a146-5a0f-af00-82ac2e5fa4f6/scratchpad/cz_read.py — pro produkční použití je nutné přesunout mimo scratchpad.

Spočítá adaptované české indexy, slabiky na slovo, slova na větu, podíl vět nad 22 slov, nejdelší větu a poměr 2. os. mn. č. ku 1. os. mn. č. včetně slovesných koncovek. Umí zpracovat celý web dávkově a dát srovnání s mediánem trhu, který jsem naměřil.

**Lyssna (dříve UsabilityHub) — test pěti sekund s reálnými lidmi** — Free plán 0 $: neomezené „quick studies“, 3 místa, 15 odpovědí z vlastních respondentů; Growth 166 $/měsíc při roční platbě; nábor z panelu se platí zvlášť (ceníkově neuvedeno na stránce s cenami). Ověřeno 9/2026.

Ukáže screenshot na přesně 5 sekund a sesbírá odpovědi na otevřené otázky. Free plán s 15 odpověďmi bohatě stačí na Nielsenových 5 testerů a je použitelný pro placený audit bez nákladů.

**České online kalkulačky čitelnosti (pocetznaku.cz, pocetslov.cz, readabilityscorechecker a podobné)** — Zdarma

Rychlé spočítání slov, znaků a normostran — na tohle jsou v pořádku.

**Detektory AI textu (GPTZero, Turnitin, Copyleaks a další)** — Různě, od freemium po předplatné

Prakticky nic použitelného pro český audit.

**Prohlížeč + tabulka (checklist stránky služby a případové studie)** — Zdarma

Nejdůležitější nástroj celé dimenze. 9 prvků stránky služby a 7 prvků případové studie se odškrtává ručně ano/ne. Dvě třetiny bodů dimenze (struktura služby 15 + konkrétnost 15 + případovka 10 + cena 5 = 45 ze 100) nepotřebují žádný software.


### Časté chyby

**Nadpis H1, který neříká, co firma dělá — „Vaše cesta k úspěchu“, „Inovace, na které se můžete spolehnout“, „Jsme tu pro vás“, „Tvoříme budoucnost“** — Kritická — je to nejdražší chyba na webu, protože znehodnocuje veškerou návštěvnost, i tu placenou

*Jak poznat:* Test pěti sekund s 5 lidmi mimo obor. Rychlá kontrola bez testerů: zakryjte logo a název firmy. Pokud stránka může patřit komukoli v oboru, H1 nefunguje. Druhá kontrola: obsahuje H1 obor a cílového zákazníka?

*Náprava:* H1 přepsat na vzorec [co děláme] pro [koho] + podtitul s odlišením nebo důkazem. Např. místo „Vaše cesta k úspěchu“ → „Účetnictví a mzdy pro výrobní firmy od 20 do 200 zaměstnanců“ + „Převezmeme agendu do 30 dní včetně přechodu ze stávajícího systému.“ Poetický claim lze ponechat jako grafický prvek nad H1, ne místo něj.

**Text o sobě místo o zákazníkovi — „Jsme dynamicky se rozvíjející společnost s dlouholetou tradicí“, „Naším cílem je spokojenost zákazníka“, „Disponujeme moderním strojovým parkem“** — Vysoká

*Jak poznat:* Změřit poměr vy:my včetně slovesných koncovek (‑íme/‑áme/‑eme proti ‑te), ne jen zájmena — čeština zájmena vypouští. Naměřený medián trhu je 0,23 na podstránkách; pod 0,5 je červená.

*Náprava:* Mechanický přepis: každou větu začínající „Nabízíme / Zajišťujeme / Poskytujeme / Disponujeme“ otočit na výsledek pro zákazníka. „Disponujeme moderním strojovým parkem“ → „Vyrobíme díl s přesností 0,01 mm a dodáme do 10 dnů.“ Pozor: cílem není vymýtit „my“ — firma musí být vidět jako subjekt s odpovědností; cílem je poměr aspoň 1:1.

**Prázdná přídavná jména místo důkazů — kvalitní, komplexní, profesionální, individuální přístup, moderní, spolehlivý, flexibilní, dlouholeté zkušenosti** — Vysoká

*Jak poznat:* Test opaku: tvrdila by konkurence opak? Nikdo nepíše „jsme nekvalitní a nepružní“, takže tvrzení nenese informaci. Spočítat na 300 slov ověřitelná tvrzení (číslo, jméno, datum, lhůta) proti hodnotícím přídavným jménům.

*Náprava:* Nahradit číslem, lhůtou nebo jménem. „Dlouholeté zkušenosti“ → „Od roku 2011, 340 realizovaných zakázek.“ „Individuální přístup“ → „Na každou zakázku máme jednoho člověka, který ji vede od nabídky po předání; jeho jméno a telefon dostanete první den.“ „Rychle“ → „Do 48 hodin.“ Když k tvrzení nelze doplnit číslo, obvykle není pravdivé a patří pryč.

**Stránka služby jako výčet podstatných jmen bez procesu, ceny a důkazu — „Implementace, Konzultace, Podpora, Školení, Audit“ a pod tím tlačítko Kontaktujte nás** — Kritická — na této stránce se rozhoduje o poptávce

*Jak poznat:* Checklist 9 prvků. Prakticky vždy chybí: pro koho to NENÍ, jak dlouho to trvá, kolik to stojí, co konkrétně zákazník dostane. Typicky splněno 3–4 z 9.

*Náprava:* Doplnit v tomto pořadí podle poměru dopad/pracnost: (1) pro koho to je a pro koho ne — nejlevnější a nejúčinnější, (2) co konkrétně dostanete jako výstup, (3) kroky s časy, (4) cenové rozpětí nebo „od“, (5) jedna případová studie. Nepřepisovat celou stránku najednou — udělat jednu vzorovou službu a změřit.

**Nominální styl a řetězení genitivů — „Zajištění realizace optimalizace procesů výroby zákazníka“, „V rámci provádění implementace došlo k navýšení efektivity“** — Vysoká — v češtině je to hlavní příčina nízké čitelnosti, výrazně větší než délka vět

*Jak poznat:* PONK: pravidla „Přemíra podstatných jmen“, „Nedostatek sloves“ (podíl sloves pod 0,06) a „Opakování pádů“ (více než 3 slova ve stejném pádu za sebou). Ruční příznak: řetězec 3+ podstatných jmen v druhém pádu za sebou.

*Náprava:* Podstatné jméno zpět na sloveso: „zajištění realizace optimalizace“ → „zlepšíme“. Kvantifikovaně: snížení o 0,1 slabiky na slovo se ve vzorci vyrovná zkrácení věty o 3,7 slova, takže výměna „implementace/optimalizace/zabezpečení“ za „zavedení/zlepšení/ochrana“ je nejúčinnější jednotlivá úprava českého textu.

**Případová studie bez jména klienta a bez čísel — „Pro předního výrobce ze středních Čech jsme dodali řešení na míru, které přineslo výrazné úspory“** — Vysoká — anonymní studie bez čísel má nulovou důkazní hodnotu

*Jak poznat:* Checklist 7 prvků. Test základny: u každého procenta se ptejte „z čeho na co, za jak dlouho, měřeno jak“. „Zvýšili jsme produktivitu o 30 %“ bez základny je neověřitelné tvrzení.

*Náprava:* Získat od klienta souhlas se jménem (v B2B je to běžné, stačí se zeptat) a doplnit tři čísla: výchozí stav, výsledek, doba. Pokud klient jméno nedá, uvést alespoň obor, velikost firmy a kraj plus konkrétní čísla — segment musí být čitelný, aby se v něm čtenář poznal. Studie musí popisovat, co se změnilo klientovi, ne co dodavatel udělal.

**Souvislý blok textu bez nadpisů, odrážek a zvýraznění — typicky stránka „O nás“ a popisy služeb dlouhé 600+ slov v pěti odstavcích** — Střední až vysoká

*Jak poznat:* Přečtěte jen nadpisy a tučný text. Pokud z toho nevznikne srozumitelné sdělení, stránka není skenovatelná. Uživatel stihne přečíst nejvýš 20–28 % slov.

*Náprava:* Nadpis alespoň po každých ~150 slovech, odstavce do 4–5 řádků, výčty do odrážek, tučně klíčová sdělení (ne náhodná slova a ne celé věty). Nevyžaduje přepis textu, jen jeho členění — proto to patří mezi první doporučení v reportu. Doložená účinnost: skenovatelná úprava +47 % použitelnosti, v kombinaci se stručností a věcností +124 %.

**Nevysvětlený oborový žargon a korporátní vata — „Zajistíme vám end-to-end delivery“, „nastavíme procesy“, „synergie“, „řešení na míru“, „komplexní přístup“** — Vysoká

*Jak poznat:* Test rodiče: nechte člověka mimo obor převyprávět nabídku vlastními slovy. Neptejte se „je to srozumitelné?“. Kde použije slovo z textu, aniž ho umí vysvětlit, je žargon. Doplňkově: více než 5 nevysvětlených termínů na 300 slov.

*Náprava:* Termín buď nahradit českým slovem, nebo vysvětlit při prvním výskytu jednou větou. Zvláštní pozor na anglicismy, kde české slovo existuje (delivery → dodání, insight → zjištění, case study → případová studie). Argument pro klienta: web čte i člověk, který rozhoduje o rozpočtu a v oboru nepracuje, a ten musí nákup obhájit vlastními slovy.

**Generický text bez jediné neopakovatelné informace — platí o kterékoli firmě v oboru, žádné číslo, jméno, datum ani zkušenost z konkrétní zakázky** — Střední — obchodně vysoká, pro SEO nižší, než se běžně tvrdí

*Jak poznat:* Příznaky, ne detektor: nulová specifičnost; dokonalá symetrie (každá sekce stejně dlouhá, vždy tři odrážky); fráze „v dnešní rychle se měnící době“, „nejen…, ale i“, „klíčovým aspektem je“; chybějící autor a datum; text lze beze změny přenést na web konkurence.

*Náprava:* Doplnit to, co nikdo jiný napsat nemůže: jména lidí, čísla zakázek, konkrétní situace, i neúspěchy a omezení („tohle neděláme“). V reportu formulovat vždy jako „text nenese informaci, kterou by nemohl napsat kdokoli jiný“, NIKDY jako „psala to AI“ — to je neprokazatelné (detektory mají u nerodilých mluvčích 61 % chybnou pozitivitu) a v placeném auditu je to riziko. Google netrestá AI obsah jako takový, ale obsah bez přidané hodnoty tvořený ve velkém.

**Žádná cena ani cenové rozpětí u služeb a nejasné, co se stane po odeslání formuláře** — Střední — ale s přímým a snadno doložitelným dopadem na kvalitu poptávek

*Jak poznat:* Projít web jako zákazník: dozvím se řádovou cenu? Vím, do kdy a kdo se mi ozve? Na českých webech služeb je absence ceny norma, ne výjimka.

*Náprava:* Alespoň „od“, rozpětí, nebo způsob stanovení ceny („účtujeme podle počtu zaměstnanců, typicky 8–15 tis. Kč měsíčně“). U formuláře napsat, do kdy se ozvete a co bude potřeba. Podávat klientovi jako volbu s důsledkem (filtruje poptávky), ne jako chybu — jinak reaguje obranně („každá zakázka je jiná“) a odmítne i zbytek reportu.

**Pět soupeřících výzev k akci na jedné stránce, nebo naopak jen „Odeslat“ a „Více informací“ schované dole** — Střední

*Jak poznat:* Spočítat hlavní výzvy na stránce služby. Ověřit, zda text tlačítka říká, co se stane po kliknutí.

*Náprava:* Jeden hlavní další krok na stránku, pojmenovaný slovesem a výsledkem: místo „Odeslat“ → „Chci nezávaznou kalkulaci“, místo „Více informací“ → „Zobrazit ceník“. Ostatní kroky ponechat jako vedlejší, vizuálně slabší.

**Nadpisy, které nic neříkají — „Naše služby“, „O nás“, „Proč my“, „Reference“ — a vtipné nadpisy bez informace** — Střední

*Jak poznat:* Vypište osnovu nadpisů stránky. Pozná se z ní obsah? Nadpis „Proč my“ nese nulovou informaci, protože nesděluje důvod.

*Náprava:* Nadpis má nést sdělení, ne označovat sekci: „Proč my“ → „Máme vlastní techniky, nenajímáme subdodavatele“; „Naše služby“ → „Co pro vás uděláme“ nebo rovnou názvy služeb. Uživatel čte hlavně nadpisy, takže nadpis bez informace je promarněných 80 % pozornosti.


### Česká specifika

1) Anglické indexy čitelnosti na češtině nefungují a je to doložitelné číslem. Naměřil jsem na 27 stránkách z 15 českých B2B webů medián původního anglického Flesche −5,3 (homepage) a −6,5 (podstránky), 20 z 27 měření vyšlo záporně, přestože škála je 0–100. Mechanismus je čistě aritmetický: čeština má podle mého měření medián 2,40 slabiky na slovo (rozpětí 2,01–2,68), angličtina zhruba 1,4–1,5. Anglický vzorec násobí slabiky na slovo koeficientem 84,6, takže 84,6 × 2,40 = 203 bodů, což samo o sobě téměř vyčerpá konstantu 206,835 — na cokoli dalšího nezbývá. Totéž potvrdili Šlerka & Smolík (2010) na učebnicích: čítanka pro 5. třídu vyšla 26,9 bodu (tj. „pro absolventy univerzity“) a středoškolská učebnice dějepisu −12,8 a −21,1.

2) Existuje ověřená adaptace na češtinu a je zdarma. Bendová & Cinková (ÚFAL MFF UK, 2021) dofitovaly čtyři klasické vzorce na paralelních korpusech InterCorp a CzEng 2.0: FRE_cz = 206,935 − 1,672 × (slov/větu) − 62,18 × (slabik/slovo). Změna koeficientů je poučná sama o sobě — proti angličtině stoupl trest za délku věty (1,015 → 1,672, tj. 1,65×) a klesl trest za délku slova (84,6 → 62,18, tj. na 0,73×). Prakticky to znamená, že v češtině se vyplatí hlídat obojí, ale ne stejně: snížení o 0,1 slabiky na slovo odpovídá zkrácení věty o 3,7 slova. Výměna „implementace / optimalizace / zabezpečení“ za „zavedení / zlepšení / ochrana“ je tedy asi 3,7× účinnější než krácení vět — a to je jediné doporučení v této dimenzi, které má pod sebou spočítaný důkaz.

3) Pozor na chybu v tištěném článku. U ARI jsou v publikované verzi koeficienty prohozené (uvádí 3,666 × slov/větu + 0,631 × znaků/slovo, což dává nesmyslné hodnoty). Správné pořadí je 3,666 × znaků/slovo + 0,631 × slov/větu, jak to implementuje nástroj PONK ze stejného ústavu. Ověřil jsem to výpočtem na shodném textu: můj výsledek 4,4 = výsledek PONK 4,4.

4) Poměr „my : vy“ se v češtině nedá měřit počítáním zájmen. Čeština je pro-drop jazyk — osoba je v koncovce slovesa a zájmeno se běžně vypouští. „Zajistíme vám úsporu“ neobsahuje slovo „my“, „Získáte přehled“ neobsahuje slovo „vy“. Anglické nástroje a návody typu „počítej výskyty we a you“ proto na češtině dají nesmysl. Počítat se musí slovesné koncovky 1. os. mn. č. (‑íme, ‑áme, ‑eme) proti 2. os. mn. č. (‑te), plus zájmena a přivlastňovací tvary (náš/naše proti váš/vaše). Naměřený medián trhu: 0,23 na podstránkách, 0,43 na homepage. Navíc čeština rozlišuje tykání a vykání, takže volba oslovení je sama o sobě auditovatelná položka — a musí být konzistentní napříč webem, formuláři, chybovými hláškami i patičkou; míchání „ty“ a „vy“ na jednom webu je v ČR poměrně častý nedostatek u firem, které přebíraly texty z anglických šablon.

5) PONK je jediný česky stavěný nástroj — a má licenční háček. Webová aplikace i REST API na quest.ms.mff.cuni.cz/ponk/ jsou zdarma a funkční (ověřeno 9/2026, verze 0.62), ale podmínky užití vyžadují pro jakékoli komerční využití výslovný písemný souhlas autorů PONK i navázaných služeb UDPipe a NameTag. Pro placený audit je tedy nutné si souhlas vyžádat, nebo si indexy počítat vlastním skriptem (vzorce jsou publikované a volně použitelné). Zároveň je PONK laděn na úřední a právní texty, takže část jeho pravidel na marketingovém webu podstřeluje.

6) Kalibrace, se kterou má smysl klienta srovnávat. Na českých B2B webech jsem naměřil medián FRE_cz 42,6 (podstránky) a 46,4 (homepage), rozpětí 22,9–74,3. To je pásmo, které Bendová & Cinková naměřily na korpusu úředních a právních textů (většinou 30–50). Jinými slovy: typický český firemní web se čte přibližně jako úřední dopis. Pro klienta je to silnější argument než jakákoli obecná rada, protože ho srovnává s konkurencí a s úřadem zároveň.

7) Detektory AI jsou v českém prostředí ještě nespolehlivější než v anglickém. Trénovací data pro češtinu jsou řídká a už u angličtiny je chybná pozitivita u nerodilých mluvčích 61,3 %. V českém auditu se proto hodnotí pozorovatelné vlastnosti textu (nulová specifičnost, symetrie, prázdné fráze, chybějící autor), nikdy původ.

### Kde si nejsme jistí

- ISO 24495-1:2023 (Plain language — Part 1: Governing principles and guidelines) jsem nedokázal ověřit z primárního zdroje — iso.org vrací 403. Neuvádím proto z normy žádné znění ani čísla. Pokud by se z ní mělo v metodice citovat, je nutné normu koupit a ověřit; cena mi rovněž zůstala neověřena.
- Průměrný počet slabik na slovo v angličtině (uvádím orientačně 1,4–1,5) jsem nezměřil vlastním měřením ani nedohledal v primárním zdroji — použil jsem ho jen jako řádové srovnání pro vysvětlení mechanismu. Vlastní naměřená česká hodnota 2,40 primární zdroj má (vlastní měření).
- Tvrzení z marketingových blogů, že „62 % B2B nákupčích považuje případové studie za užitečné“ a že „případovky se všemi pěti prvky mají o 37 % vyšší konverzi na základě analýzy 250 studií B2B Marketing Institute“, se mi NEPODAŘILO dohledat v žádném primárním zdroji. Považuji je za nedoložená a v metodice je nepoužívám; nahradil jsem je ověřeným údajem z Content Marketing Institute (53 %, n = 980).
- Interpretační pásma Fleschovy škály (0–30 velmi obtížné, 30–50 obtížné, 50–60 středně obtížné atd.) pocházejí z původní anglické tabulky. Adaptace Bendová & Cinková byla fitována tak, aby české skóre odpovídalo anglickému skóre překladu, takže pásma by měla přenositelná být — ale nikdo je pro češtinu nevalidoval na skutečném porozumění českých čtenářů. Prahy 50 / 35, které navrhuji pro bodování, jsou proto můj návrh opřený o naměřené rozdělení na českých webech, ne validovaná norma.
- Autoři adaptace sami na svém testovacím korpusu NENAŠLI statisticky významnou korelaci mezi indexy čitelnosti a skutečně naměřeným porozuměním (většina p-hodnot nad 0,3, odhady efektu pod 0,2). Vysvětlují to malou variabilitou testovaných textů, ale znamená to, že index čitelnosti nesmí být hlavním skóre dimenze — proto mu v návrhu dávám jen 10 ze 100 bodů.
- Nástroj pocetznaku.cz deklaruje, že hranice Fleschovy metriky jsou „přizpůsobeny pro češtinu“, ale nezveřejňuje koeficienty. Nedokázal jsem ověřit, jaký vzorec skutečně počítá, a proto ho nedoporučuji jako zdroj čísel do placeného reportu.
- Můj vzorek pro kalibraci (15 firem, 27 stránek) je z oboru IT, software a poradenství a je malý. Mediány jsou orientační, ne reprezentativní pro celý český trh firem 10–250 lidí — u výrobních firem, řemesel nebo zdravotnictví budou hodnoty jiné. Před obchodním použitím doporučuji vzorek rozšířit na 50+ webů napříč obory; skript to zvládne dávkově.
- Dělení vět v mém skriptu selhává u zkratek, které mohou zároveň ukončit větu (typicky „atd.“), což mírně nadhodnocuje délku vět. Vliv jsem nekvantifikoval.
- Cenu za nábor respondentů z panelu Lyssna se mi nepodařilo zjistit — na oficiální stránce s ceníkem je uvedeno jen, že se účtuje zvlášť. Sekundární zdroje uvádějí model 1 kredit = 1 USD, ale to jsem z primárního zdroje nepotvrdil.
- Pro tvrzení, že experti a vysoce vzdělaní čtenáři preferují jednoduchý jazyk stejně jako ostatní (NN/g), existuje jen kvalitativní doklad — článek neuvádí velikost vzorku ani efekty. Používám ho proto jako argument, ne jako číslo.
- Původní práce Morkese & Nielsena je z roku 1997 a testovala 51 uživatelů na jednom webu (Travel Nebraska). Čísla +58 / +47 / +27 / +124 % jsou dodnes nejcitovanější, ale jde o jedinou starou studii, která nebyla replikována. Uvádím je se zdrojem, ale v reportu pro klienta bych je podával jako řádový argument, ne jako záruku výsledku.
- Vlastní měření poměru vy:my jsem ručně ověřil proti falešným shodám jen na třech webech. Regulární výrazy na slovesné koncovky mohou u některých textů zachytit i jiné tvary (zejména u přejatých slov); pro produkční nasazení by chtělo ověřit na větším vzorku, ideálně s morfologickým analyzátorem (MorphoDiTa) místo regulárních výrazů.

<details><summary>Zdroje (31)</summary>

- https://ufal.mff.cuni.cz/biblio/attachments/2021-bendova-p179299898553114557.pdf
- https://link.springer.com/chapter/10.1007/978-3-030-83527-9_14
- https://ufal.mff.cuni.cz/ponk/users-manual
- https://ufal.mff.cuni.cz/grants/ponk
- https://quest.ms.mff.cuni.cz/ponk/
- https://quest.ms.mff.cuni.cz/ponk/api-reference.php
- https://studiezaplikovanelingvistiky.ff.cuni.cz/wp-content/uploads/sites/19/2016/03/Josef_Slerka_33-44.pdf
- https://www.nngroup.com/articles/how-little-do-users-read/
- https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
- https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/
- https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/
- https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
- https://www.nngroup.com/articles/plain-language-experts/
- https://www.nngroup.com/videos/5-second-usability-test/
- https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research-2025
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/blog/2024/03/core-update-spam-policies
- https://arxiv.org/abs/2304.02819
- https://www.sciencedirect.com/science/article/pii/S0001691825014180
- https://journals.sagepub.com/doi/abs/10.1016/j.intmar.2017.05.001
- https://www.nature.com/articles/s41467-023-44515-1
- https://comm.osu.edu/sites/comm.osu.edu/files/PUS%202019-%20Bullock%20et%20al..pdf
- https://news.ufl.edu/2025/08/workplace-jargon/
- https://www.lyssna.com/pricing/
- https://www.pocetznaku.cz/
- https://www.martindomes.cz/7-nejcastejsich-chyb-ve-webovych-textech-ktere-vas-stoji-zakazniky-a-jak-je-opravit/
- https://vceliste.cz/blog/6-copywriterskych-chyb/
- https://www.sherpas.cz/blog/10-copy-chyb
- https://dspace.cuni.cz/bitstream/handle/20.500.11956/54727/130114061.pdf

</details>

---

## 6. Konverze a použitelnost

Kódy bodů v kontrolním seznamu: `KONV-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| Podíl doby prohlížení nad ohybem stránky | 57 % doby prohlížení připadá na obsah nad ohybem, 74 % na první dvě obrazovky (do 2160 px), více než 42 % na horní pětinu stránky. Praktický důsledek: primární sdělení a primární CTA patří do horní pětiny. | Pokud horní pětinu obsazuje navigace, cookie lišta, chat bublina a dekorativní obrázek a nadpis začíná až za druhou obrazovkou, firma vyhodila plochu s několikanásobně vyšší hodnotou. | [1](https://www.nngroup.com/articles/scrolling-and-attention/) |
| Čas, do kterého se návštěvník rozhoduje zůstat nebo odejít | Hodnotová nabídka musí být sdělena do 10 sekund. Po zhruba 30 sekundách míra odchodů výrazně klesá a návštěvník může zůstat dvě i více minut. | Doba na stránce má Weibullovo rozdělení s negativním stárnutím — u 99 % stránek je pravděpodobnost odchodu nejvyšší v prvních sekundách. Průměrná návštěva stránky trvá o něco méně než minutu. | [1](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) |
| Odeslání kontaktního formuláře ze zobrazení (view → completion) | Zuko uvádí, že méně než 10 % lidí, kteří kontaktní formulář uvidí, ho odešle — konkrétně 9,09 %. To je realistické měřítko, ne cíl 25 %, který koluje po marketingových blozích. | Očekávat u kontaktního formuláře dvouciferné procento ze zobrazení je nerealistické; klienti, kterým to někdo slíbil, měří proti špatné laťce. | [1](https://www.zuko.io/blog/8-surprising-insights-from-zukos-benchmarking-data) |
| Dokončení formuláře od zahájení vyplňování (starter → completion) podle typu | Registrace 60,7 % (26,6 mil. relací), nákup 54,4 % (20,2 mil.), onboarding 51,8 %, žádost/přihláška 51,6 %, porovnání/nabídka 46,4 %. | Kontaktní formuláře 47,4 % (322 tis. relací) a poptávkové / lead gen formuláře 42,7 % (4,8 mil. relací) — nejnižší hodnoty ze všech typů. Zhruba 57 % lidí, kteří začnou vyplňovat poptávku, ji nedokončí. | [1](https://www.zuko.io/benchmarking/form-type-benchmarking) |
| Rozdíl v dokončení formuláře mezi desktopem a mobilem | Desktop 55,5 % od zahájení k dokončení, 37,2 % od zobrazení k dokončení. | Mobil 47,5 % od zahájení k dokončení, 31,3 % od zobrazení k dokončení — tedy zhruba o 8 procentních bodů horší. Onboardingové formuláře na mobilu jen 35,33 % proti 50,8 % na desktopu. | [1](https://www.zuko.io/benchmarking/industry-benchmarking) |
| Vliv počtu polí na dokončení formuláře | Není prokázán jednoduchý vztah. Zuko na svých datech vynesla počet polí proti míře dokončení a trendová čára je téměř plochá. Vládní formuláře s průměrem 71 polí dosahují 85% dokončení. | Slepé zkracování může uškodit: v dokumentovaném testu snížení z 9 na 6 polí přineslo pokles konverze o 14 %, zatímco ponechání 9 polí a přepsání popisků dalo nárůst 19,2 %. Rozhoduje relevance a náročnost polí, ne jejich počet. | [1](https://www.zuko.io/blog/how-many-fields-should-an-enquiry-form-have-for-maximum-conversion) [2](https://cxl.com/blog/reduce-form-fields/) |
| Průběžná (inline) validace formulářových polí | Validovat až poté, co uživatel pole opustí nebo dosáhne správné délky; chybu odstranit okamžitě po opravě (na úrovni stisku klávesy); doplnit pozitivní potvrzení správně vyplněného pole. | 31 % webů nemá inline validaci vůbec, další 4 % ji mají implementovanou špatně. Předčasná validace a chybová hláška, která po opravě nezmizí, jsou v testech doložené zdroje frustrace a opuštění. | [1](https://baymard.com/blog/inline-form-validation) |
| Rychlost odpovědi na webovou poptávku — vliv na kvalifikaci (telefonní kontakt) | Volání do 5 minut od vzniku leadu. | Šance na kontakt při volání do 5 minut oproti 30 minutám klesá 100×; šance na kvalifikaci leadu klesá 21×. Šance na kontakt klesá více než 10× během první hodiny. Po 20 hodinách každý další pokus o dovolání schopnost kontaktovat a kvalifikovat lead už jen zhoršuje. | [1](https://www.onecavo.com/wp-content/uploads/2015/11/MIT-InsideSales.com_Lead-Response-Management.pdf) |
| Rychlost odpovědi na webovou poptávku — jak na tom firmy reálně jsou | Pokus o kontakt do jedné hodiny: téměř 7× vyšší šance lead kvalifikovat než při pokusu o hodinu později, a více než 60× vyšší než při čekání 24 hodin a déle. | Z 2 241 auditovaných amerických firem odpovědělo 37 % do hodiny, 16 % do 24 hodin, 24 % později než za 24 hodin a 23 % neodpovědělo vůbec. Průměrná doba odpovědi mezi těmi, kdo odpověděli do 30 dnů, byla 42 hodin. | [1](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) |
| Rychlost odpovědi u B2B SaaS firem (tajný nákup) | Odpověď do 5 minut — dokázalo ji 7 % testovaných firem. | 55 % ze 433 testovaných B2B SaaS firem neodpovědělo na poptávku vůbec ani během 5 pracovních dnů. | Drift, Lead Response Report: Is Your Lead Management Leaking |
| Kdy B2B kupující poprvé kontaktuje dodavatele a kolik jich hodnotí | Být tím prvním kontaktovaným dodavatelem — ten vyhrává 8 z 10 obchodů. | Kupující kontaktují dodavatele až v 61 % své nákupní cesty (2025; v roce 2024 to bylo 69 %). Hodnotí průměrně 5,1 dodavatele a na první krátký seznam se vejde zhruba 3,6 z nich. O většině rozhodnutí tedy padne, zatímco firma o návštěvníkovi vůbec neví. | [1](https://6sense.com/science-of-b2b/buyer-experience-report-2025/) |
| Transparentní cena jako požadavek B2B kupujících | Uvést alespoň spodní hranici, typové rozpětí nebo strukturu ceny. | Transparentní ceny jsou nejčastějším přáním kupujících vůči dodavatelům čtyři roky po sobě, od doby, kdy se TrustRadius na to začal ptát (od roku 2023). Zároveň 74 % kupujících používá při rozhodování recenze a 83 % zúží výběr na 3 a méně produktů — kdo do té trojice nepronikne kvůli nejasné ceně, do jednání se nedostane. | [1](https://www.prnewswire.com/news-releases/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust-302825792.html) |
| Kontrastní poměr textu (WCAG 2.2, úroveň AA) | Běžný text nejméně 4,5:1. Velký text (18 pt / cca 24 px, nebo 14 pt tučně / cca 18,5 px) nejméně 3:1. Úroveň AAA požaduje 7:1 pro běžný a 4,5:1 pro velký text. | Cokoli pod 4,5:1 u běžného textu. Výjimku mají jen neaktivní prvky, čistě dekorativní text, neviditelný text, text jako součást fotografie a text v logu nebo názvu značky. | [1](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) |
| Velikost klikacího / dotykového cíle (WCAG 2.2, SC 2.5.8, úroveň AA) | Nejméně 24 × 24 CSS pixelů. | Menší cíl bez uplatnění některé z pěti výjimek (dostatečný odstup — kružnice o průměru 24 px se středem na cíli neprotíná jiný cíl; existující alternativní ovládací prvek na stránce; cíl uvnitř textu; velikost určená prohlížečem; velikost je nezbytná pro sdělení informace). | [1](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) |
| Prahy Core Web Vitals použité v Microsoft Clarity jako filtr výkonu | LCP do 2,5 s, INP do 200 ms, CLS do 0,1. Skóre výkonu 81–100. | LCP nad 4 s, INP nad 500 ms, CLS nad 0,25. Skóre výkonu 0–50 znamená špatný výkon, 51–80 potřebu zlepšení. | [1](https://learn.microsoft.com/en-us/clarity/filters/clarity-filters) |
| Doba uchování dat v Microsoft Clarity | Klikací a scroll mapy jsou dostupné až 9 měsíců. Heatmapa se generuje do minuty, klik se v ní objeví do 30 minut. | Nahrávky relací a data pro webmastera jsou uchovávány jen 30 dnů od pořízení. Pro audit to znamená, že Clarity je nutné nasadit nejméně několik týdnů před vyhodnocením, jinak není co sledovat. Data jednotlivého uživatele nelze smazat bez smazání celého projektu. | [1](https://learn.microsoft.com/en-us/clarity/faq) |
| Limity heatmap v Microsoft Clarity | Heatmapy se generují zvlášť pro PC, tablet a mobil, podporují regulární výrazy v URL filtrech a zachytávají i dynamické prvky (rozbalovací menu, vyskakovací okna) přes žebříček prvků v levém panelu. | Heatmapa je omezena na 100 000 zobrazení stránky. Clarity nezobrazuje všechna nasbíraná klikací data — mapa se staví na vzorku zobrazení. Nelze vyloučit konkrétní prvky ze zobrazení v heatmapě. Kliky ve třetích iframech se nesledují. | [1](https://learn.microsoft.com/en-us/clarity/faq) |
| Podíl zařízení na návštěvnosti v Česku | Desktop 52,36 %, mobil 46,1 %, tablet 1,54 % (srpen 2026). Prakticky: mobilní a desktopová verze si zaslouží samostatné posouzení, žádná není okrajová. | Audit provedený jen na desktopu pomíjí zhruba polovinu provozu. Zároveň je chybou předpokládat u B2B webu drtivou převahu mobilu — v Česku desktop stále mírně vede. | [1](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/czech-republic) |
| Sankce za neuvedení povinných identifikačních údajů na webu | V patičce nebo na kontaktní stránce uveden úplný název, sídlo, IČO a údaj o zápisu v obchodním rejstříku včetně oddílu a vložky. | Za neuvedení hrozí pokuta až 50 000 Kč, případně zákaz činnosti až na 1 rok. Rejstříkový soud může kapitálové společnosti nebo družstvu uložit pořádkovou pokutu až 100 000 Kč. | [1](https://www.holec-advokati.cz/cs/povinnosti-ve-vztahu-k-obchodnim-listinam-a-internetovym-strankam-spolecnosti/) |
| Působnost zákona o přístupnosti (zákon č. 424/2023 Sb.) | Účinnost od 28. června 2025. Vztahuje se mimo jiné na elektronické komunikace, přístup k audiovizuálním mediálním službám, bankovní a finanční služby pro spotřebitele, elektronické obchodování, prodej elektronických knih a některé dopravní služby. | Zákon výslovně nedopadá na služby, které nejsou poskytovány spotřebitelům — čistě B2B firemní web tedy do působnosti nespadá. Výjimka pro mikropodniky: méně než 10 zaměstnanců a roční obrat nebo bilanční suma nepřesahující 2 mil. EUR. Prodávat takovému klientovi povinnou WCAG shodu jako zákonný požadavek je zavádějící, pokud neprodává spotřebitelům. | [1](https://coi.gov.cz/pro-podnikatele/pristupnost-vyrobku-a-sluzeb-pro-podnikatele/) |
| Bezplatná dostupnost nástrojů pro sledování chování | Microsoft Clarity: zdarma bez časového omezení, bez limitu provozu, bez vzorkování provozu, neomezený počet webů, projektů a členů týmu. | Hotjar se sloučil do Contentsquare; volný tarif nabízí 200 tis. relací měsíčně, 100 odpovědí v dotaznících a 5 uživatelských rozhovorů. Placený tarif Growth začíná na 49 USD měsíčně (Experience Analytics; při roční platbě sleva 20 % před DPH), Voice of Customer Growth na 99 USD měsíčně. | [1](https://learn.microsoft.com/en-us/clarity/faq) [2](https://contentsquare.com/pricing/) [3](https://contentsquare.com/hotjar/) |
| Nedůvěra jako důvod opuštění (e-commerce, pro B2B jen orientačně) | Viditelné, ověřitelné signály důvěry v místě zadávání citlivých údajů. | 19 % amerických nakupujících opustilo objednávku v posledních třech měsících proto, že webu nedůvěřovali s údaji o platební kartě (1 026 respondentů, 2025). 17 % uvádí jako důvod příliš dlouhý nebo složitý průchod objednávkou. Průměrná dokumentovaná míra opuštění košíku je 70,22 % (z 50 studií). | [1](https://baymard.com/blog/perceived-security-of-payment-form) [2](https://baymard.com/lists/cart-abandonment-rate) |
| Medián konverzního poměru přistávacích stránek (orientační, ne B2B služby) | Medián 6,6 % napříč obory. | Toto číslo NENÍ použitelné jako laťka pro firemní web se službou — jde o přistávací stránky ke kampaním s jasnou konverzní akcí, nikoli o domovské stránky B2B služeb. Uvádět jej klientovi jako cíl je metodicky chybné. | [1](https://unbounce.com/average-conversion-rates-landing-pages/) |

### Nástroje

**Microsoft Clarity** — Zdarma, bez časového omezení a bez limitu provozu. Neomezený počet projektů, webů a členů týmu (maximálně 10 čekajících pozvánek naráz).

Nahrávky relací, klikací a scroll mapy (zvlášť PC / tablet / mobil) a takzvané sémantické metriky: rage clicks (opakované klikání ve shluku v krátkém čase), dead clicks (klik bez jakékoli odezvy), excessive scrolling (nadprůměrné svislé scrollování), quick backs (odchod a rychlý návrat pod prahem doby setrvání). Dále JavaScriptové chyby včetně samostatné kategorie click errors (chyba po kliknutí) — to odhalí rozbité odeslání formuláře. Přes 30 filtrů v kategoriích: User Info (časové okno, den v týdnu, zařízení, prohlížeč, OS, lokalita až na město, typ uživatele nový/vracející se), User Actions (insights, pohyb kurzoru, zadaný text, označený text, změna velikosti okna, obnovení stránky, kliknutý text, hloubka scrollování v procentech, smart events, funnely), Path (vstupní / výstupní / navštívené URL s podporou regulárních výrazů), Traffic (odkazující web, utm_source, utm_medium, kampaň, kanál včetně AIPlatform, bot traffic), Performance (skóre, LCP, INP, CLS), Session (délka relace, počet kliků, počet stránek), Page (doba na stránce, počet kliků na stránce, JS chyby, rozměr stránky, rozlišení obrazovky, doba viditelnosti a skrytí stránky) a vlastní filtry (custom tagy a ID). Filtry lze uložit jako segmenty bez omezení počtu a přenášejí se mezi Dashboardem, Nahrávkami a Heatmapami.

**Hotjar (nyní Contentsquare)** — Volný tarif: 200 tis. relací měsíčně, 100 odpovědí v dotaznících, 5 uživatelských rozhovorů, monitoring chyb, 10+ integrací, plus 15denní zkouška tarifu Growth. Growth (Experience Analytics) od 49 USD měsíčně, Voice of Customer Growth od 99 USD měsíčně; při roční platbě sleva 20 % před DPH, při dvou produktech naráz dalších 10 % na levnější z nich. Pro a Enterprise na individuální kalkulaci.

Nahrávky, heatmapy (nově pod názvem Attention Maps), dotazníky a zpětnovazební widgety přímo na webu, funnely, monitoring chyb. Silnou stránkou oproti Clarity jsou nástroje na sběr vyjádření od návštěvníků — dotazník na výstupu ze stránky služby (Co vám tu chybělo?) je věc, kterou Clarity neumí a která pro audit přináší kvalitativní vstup.

**Zuko (formulářová analytika)** — Placený nástroj s bezplatnou zkušební dobou; ceník je na jejich webu a mění se, je nutné ověřit aktuálně.

Jediná kategorie nástroje, která měří formulář pole po poli: kolik lidí formulář vidělo, kolik začalo vyplňovat, kde přesně odešli, kolikrát se do kterého pole vrátili, jak dlouho v něm strávili a která pole generují chyby. Zároveň provozují veřejné benchmarky, které jsou pro audit použitelné i bez zakoupení nástroje — jde o největší veřejně dostupný datový soubor o formulářích (93 022 997 relací) a jediný zdroj, kde najdete srovnávací hodnoty pro kontaktní a poptávkové formuláře odděleně.

**Vlastní test tajným nákupem (poptávka z neutrálního e-mailu)** — Zdarma; stojí to 20 minut a jednu e-mailovou schránku.

Nejcennější položka celého auditu: skutečnou dobu do první lidské odpovědi, její formu (e-mail / telefon), obsah automatického potvrzení, jestli vůbec někdo odpoví, jestli poptávka dorazí, jestli se firma zeptá na správné věci a jestli nabídne konkrétní další krok. Zároveň otestuje celý formulář zevnitř — chování při chybě, chování na mobilu, obsah poděkovací stránky. Doporučený postup: odeslat dvě poptávky z různých schránek v různé časy (jednu v pondělí ráno, jednu v pátek odpoledne), formulovat je věrohodně a v rozsahu odpovídajícím běžné zakázce klienta, a zaznamenat všechny časové značky.

**Nástroje pro ověření kontrastu a přístupnosti (WAVE, axe DevTools, Lighthouse, Chrome DevTools)** — Zdarma (WAVE webové rozhraní i rozšíření, axe DevTools základní verze, Lighthouse zabudovaný v Chrome).

Tvrdá, nezpochybnitelná čísla: kontrastní poměry textu a prvků proti prahům 4,5:1 a 3:1, chybějící popisky formulářových polí, chybějící alternativní texty, nadpisová struktura, viditelnost fokusu při ovládání klávesnicí. Chrome DevTools navíc přes panel Elements ukáže atributy type, inputmode a autocomplete u formulářových polí — to je způsob, jak zvenčí ověřit mobilní klávesnice bez přístupu do administrace.

**Lyssna (dříve UsabilityHub) nebo Maze — pětisekundový test** — Oba mají volný tarif s omezeným počtem testů a respondentů; placené tarify pro větší vzorky a placený panel respondentů. Ceníky se mění, je nutné ověřit aktuálně.

Kvantifikuje srozumitelnost hodnotové nabídky: ukáže screenshot první obrazovky na 5 sekund a pak se ptá, co si člověk zapamatoval a co firma dělá. Výstupem jsou doslovné odpovědi, ze kterých je vidět, jestli lidé pochopili obor, cílovou skupinu a požadovanou akci. Metodická poznámka: respondentům se předem neříká, že obrázek uvidí jen pět sekund — jinak se připraví na zapamatování a výsledek je zkreslený.

**ARES a Sbírka listin (justice.cz)** — Zdarma, veřejné.

Ověření identifikačních údajů na webu proti skutečnosti: existuje ta firma, sedí IČO, sídlo, název, spisová značka, datum vzniku. Ze sbírky listin lze z účetních závěrek dohledat počet zaměstnanců a obrat a porovnat s tím, co firma o sobě tvrdí na webu. Také odhalí, jestli je firma v likvidaci, insolvenci nebo dlouho nezveřejňuje závěrky — to je informace, kterou si potenciální zákazník také může zjistit a která ovlivňuje důvěryhodnost.

**Zpětné vyhledávání obrázků (Google Images, TinEye)** — Zdarma.

Jestli jsou fotky týmu, kanceláří a realizací skutečné, nebo ze stockové banky. Když se stejná fotka objeví na desítkách jiných webů, je to stock — a v reportu to jde doložit screenshotem výsledků, což je pro klienta velmi názorné.

**Wayback Machine (archive.org)** — Zdarma.

Jak web vypadal dřív a co se na něm změnilo. Užitečné ve dvou situacích: (1) když klient tvrdí, že po předchozím zásahu konverze klesly — dá se najít, co se skutečně změnilo; (2) při analýze konkurence — jestli konkurent nedávno přidal ceník, změnil hlavní sdělení nebo přestavěl formulář, což naznačuje, co jim fungovalo.

**Prohlížeč v mobilním režimu a skutečné mobilní zařízení** — Zdarma.

Chování první obrazovky na reálném mobilu: kolik místa zabírá cookie lišta a chat bublina, jestli je CTA vidět bez scrollování, jaká klávesnice vyskočí u kterého pole, jestli jde formulář vyplnit jednou rukou, jestli se tlačítko neschovává pod lištu prohlížeče. Screenshot mobilní klávesnice u pole pro telefon je jeden z nejnázornějších důkazů, jaký může report obsahovat.


### Časté chyby

**Nadpis první obrazovky neříká, co firma dělá — místo toho uvádí obecnou frázi typu Komplexní řešení na míru, Váš spolehlivý partner, Dynamicky se rozvíjející společnost nebo Vítejte na našich stránkách** — Kritická

*Jak poznat:* Vezměte nadpis a nahraďte název firmy názvem libovolného konkurenta. Pokud věta pořád dává smysl, nadpis nenese informaci. Druhý test: ukažte první obrazovku pěti lidem mimo obor na pět sekund a nechte je říct, co ta firma dělá. Když tři z pěti tápou, je to potvrzené.

*Náprava:* Přepsat nadpis do struktury: co firma dělá + pro koho + čím se to liší. Konkrétnost je důležitější než elegance — Průmyslové vzduchotechniky pro potravinářské provozy, projekt i montáž poráží Komplexní řešení v oblasti VZT. Návrh nového znění patří do reportu jako konkrétní věta, ne jako doporučení zlepšit nadpis.

**Povinné zaškrtávací políčko Souhlasím se zpracováním osobních údajů u poptávkového formuláře** — Vysoká

*Jak poznat:* Otevřete poptávkový formulář a podívejte se, jestli je vedle odesílacího tlačítka povinný souhlas s GDPR. Je to na českých firemních webech naprosto rozšířené.

*Náprava:* Právně je to obvykle chybně: kontaktní formulář slouží ke komunikaci ohledně budoucího smluvního plnění, takže se osobní údaje zpracovávají na základě plnění smlouvy a předsmluvních jednání, nikoli souhlasu. Vyžádaný souhlas je navíc problematický i proto, že jej lze kdykoli odvolat, což firmě komplikuje evidenci. Zaškrtávátko odstranit a nahradit jednořádkovou informační větou s odkazem na zásady zpracování — informační povinnost totiž zůstává i tam, kde souhlas není potřeba. Odstranění zároveň ubere jeden povinný úkon těsně před odesláním, tedy v nejcitlivějším místě formuláře. Formulaci nechat potvrdit klientovým právníkem; audit ji navrhuje, nerozhoduje o ní.

**Formulář je jedinou cestou ke kontaktu — chybí přímý e-mail a telefon, nebo je jen obecné info@ bez jména** — Vysoká

*Jak poznat:* Projděte kontaktní stránku a patičku a hledejte klikatelný e-mail (mailto:) a telefon (tel:). Zkuste na uvedené číslo v pracovní době dvakrát zavolat.

*Náprava:* Doplnit přímý e-mail a telefon do patičky na každou stránku a na kontaktní stránku přidat konkrétního člověka se jménem, fotkou a přímým spojením. U B2B služby s vysokou hodnotou zakázky část kupujících formulář zásadně nepoužije — absence telefonu je tedy tvrdý filtr právě na největších zakázkách.

**Povinné pole Zpráva nebo Popis poptávky jako volný text bez jakéhokoli vodítka** — Vysoká

*Jak poznat:* Zkuste formulář odeslat vyplněný jen jménem, e-mailem a telefonem. Pokud formulář odmítne odeslání kvůli prázdné zprávě, je to potvrzeno. Sledujte také, jestli je u pole nějaký příklad nebo nápověda.

*Náprava:* Tohle je pravděpodobně největší jednotlivá ztráta poptávek na českých B2B webech, protože odfiltruje přesně ty návštěvníky, kteří ještě nemají zadání zformulované — tedy ty, kde má konzultace největší hodnotu. Nahradit povinným výběrem typu služby nebo rozsahu (což zároveň vyřeší kvalifikaci leadu) plus nepovinným polem pro doplnění, opatřeným konkrétním příkladem v nápovědě, ne v placeholderu.

**Případové studie popisují, co firma dělala, ale ne co to přineslo — chybí čísla, výchozí situace a jméno klienta** — Vysoká

*Jak poznat:* Otevřete referenční stránku a u každé položky hledejte: jméno klienta nebo aspoň odvětví a velikost, popis výchozího problému, konkrétní výsledek v číslech, časový rámec, vyjádření klienta. Když chybí výsledek, je to portfolio, ne případová studie.

*Náprava:* Přepsat tři nejsilnější reference do struktury situace → problém → co jsme udělali → výsledek v číslech → citace klienta. Tři takové poráží dvacet log. Zároveň zkontrolovat, že nejsou uzamčené za formulářem — v B2B, kde kupující dorazí k dodavateli až v 61 % nákupní cesty, brání uzamčení tomu, aby se firma vůbec dostala na krátký seznam.

**Reference jsou jen loga klientů bez jmen, bez citací, bez kontextu a bez možnosti ověření** — Střední

*Jak poznat:* Podívejte se, jestli je u loga uvedeno, co se pro danou firmu dělalo, a jestli existuje aspoň jedna citace s celým jménem, funkcí a fotkou. Zkuste jedno jméno ověřit na LinkedInu.

*Náprava:* Anonymní reference typu Jan N., spokojený zákazník mají v B2B nulovou nebo zápornou hodnotu, protože čtenář předpokládá, že jsou vymyšlené. Nahradit řadu log třemi ověřitelnými citacemi s celým jménem, funkcí, firmou a fotkou. Je to typicky bezplatná změna — jde jen o přeuspořádání toho, co firma už má, a o jeden e-mail třem klientům.

**Chybová hláška Vyplňte prosím povinná pole bez označení, která to jsou, nebo ztráta vyplněných dat po chybě** — Kritická

*Jak poznat:* Odešlete formulář prázdný a pak s chybnou e-mailovou adresou. Sledujte: objeví se chyba u konkrétního pole; odscrolluje stránka k prvnímu chybnému poli; zůstaly zachovány ostatní vyplněné hodnoty; zmizí chybová hláška po opravě.

*Náprava:* Chyba na konci formuláře zasahuje výhradně lidi, kteří už se rozhodli poptat — tedy ty nejcennější, takže ztráta je neúměrně dražší než ztráta na začátku. Zavést průběžnou validaci po opuštění pole (ne během psaní), chybu vypisovat u konkrétního pole slovy, která říkají, co je špatně a jak to opravit, chybu odstraňovat okamžitě po opravě a nikdy neresetovat vyplněná data.

**Popisky polí jsou jen jako šedý placeholder uvnitř pole a po začátku psaní zmizí** — Střední

*Jak poznat:* Klikněte do pole a začněte psát. Pokud popisek zmizel a už nevíte, co do pole patří, je to potvrzeno. Zvlášť závažné to je u polí s požadavky na formát a u rozbalovacích seznamů.

*Náprava:* Baymard z testování na 18 mobilních webech a přes tisíci vyplněných polí doloženě zjistil, že uživatelé mazali celý vstup, jen aby si popisek přečetli znovu — zejména při opravě chyby. Přesunout popisek nad pole. Placeholder ponechat jen pro příklad formátu, ne jako náhradu popisku. Výjimku má jediné samostatné pole (například vyhledávání).

**Telefon je povinné pole hned u prvního kontaktu** — Střední

*Jak poznat:* Zkuste formulář odeslat bez telefonu.

*Náprava:* Většina firem telefon vyžaduje, protože obchodník raději volá — ale u prvního kontaktu je to bariéra právě u opatrnějších kupujících. Doporučení pro report: udělat telefon nepovinným a doplnit jednou větou, proč o něj firma stojí (zrychlí to odpověď, ale stačí i e-mail). Rozhodnutí je ale obchodní, ne technické — pokud firma prokazatelně uzavírá obchody hlavně po telefonu a méně leadů s telefonem je pro ni lepší než víc leadů bez něj, má povinný telefon smysl. V reportu to proto formulovat jako volbu s vyčíslením obou stran, ne jako jednoznačnou chybu.

**Automaticky se posouvající karusel v první obrazovce se čtyřmi až šesti slidy** — Vysoká

*Jak poznat:* Otevřete domovskou stránku a počkejte deset sekund bez interakce.

*Náprava:* Karusel řeší interní spor o to, čí sdělení bude první, ne potřebu návštěvníka. V praxi to znamená, že v ploše s nejvyšší hodnotou (horní pětina stránky, kam připadá přes 42 % doby prohlížení) není žádné stabilní sdělení. Nahradit jedním pevným sdělením s jednou primární akcí. Zbylá sdělení mají místo níž na stránce jako sekce, kde jsou vidět všechna najednou.

**Na webu není žádné cenové vodítko — ani spodní hranice, ani rozpětí, ani struktura ceny** — Vysoká

*Jak poznat:* Prohledejte web na slova cena, ceník, kolik, od, rozpočet. Když nenajdete nic, je to potvrzeno.

*Náprava:* Transparentní cena je podle TrustRadius nejčastějším přáním B2B kupujících vůči dodavatelům čtyři roky po sobě. Argument, který u konzervativního klienta funguje: cenové vodítko není ceník, je to kvalifikační filtr, který šetří obchodní čas. Doporučit nejnižší přijatelnou úroveň závazku — spodní hranici (projekty začínají na X), typové rozpětí podle rozsahu, nebo alespoň popis, z čeho se cena skládá a na čem závisí, doplněný reálným rozpočtem z případovky. Klient většinou vidí jen náklad chybných poptávek a ne náklad ztracených kupujících, kteří ho vyřadili kvůli nejistotě — obojí je potřeba v reportu vyčíslit.

**Poptávky nikdo nečte rychle — odpověď přichází za dny, nebo vůbec** — Kritická

*Jak poznat:* Odešlete dvě reálné poptávky z neutrálních schránek v různé časy (pondělí ráno a pátek odpoledne) a měřte čas do první lidské odpovědi. Zaznamenejte všechny časové značky.

*Náprava:* Toto je jediné zjištění auditu, které vydělá peníze bez jediné změny na webu. Doporučit: (1) upozornění na poptávku okamžitě na telefon konkrétního člověka, ne jen do sdílené schránky; (2) jmenovitou odpovědnost a zástup pro dovolenou; (3) automatické potvrzení s uvedeným termínem lidské odpovědi; (4) měřitelný závazek doby odpovědi, který se zveřejní i na webu — tím se z interního pravidla stane veřejný slib a zároveň konverzní prvek. Doložit to čísly: podle auditu 2 241 firem publikovaného v HBR odpovědělo 23 % firem na webovou poptávku vůbec ne a průměrná doba odpovědi byla 42 hodin; Drift při testu 433 B2B SaaS firem naměřil 55 % bez odpovědi během pěti pracovních dnů. Klient si v tom sám sebe pozná.

**Fotky týmu a kanceláří jsou ze stockové banky** — Střední

*Jak poznat:* Použijte zpětné vyhledávání obrázků na hlavní fotky. Když se stejná fotka objeví na desítkách jiných webů, je to potvrzeno — a screenshot výsledků je velmi názorný důkaz do reportu.

*Náprava:* Stock fotka usmívajících se lidí v obleku u konferenčního stolu je v Česku natolik rozšířená, že už nese negativní signál — čtenář z ní vyčte, že firma o sobě nemá co ukázat. Nahradit skutečnými fotkami lidí, provozu a realizací. U kontaktní osoby je fotka konkrétního člověka, který poptávku vyřídí, přímé snížení bariéry kontaktu. Je to náklad jednoho odpoledne fotografa.

**Chybí IČO, sídlo nebo údaj o zápisu v obchodním rejstříku** — Střední

*Jak poznat:* Zkontrolujte patičku a kontaktní stránku: úplný název, sídlo, IČO, spisová značka včetně oddílu a vložky. Ověřte údaje proti ARES.

*Náprava:* Podle § 435 občanského zákoníku musí podnikatel v informacích zpřístupňovaných veřejnosti dálkovým přístupem uvádět jméno a sídlo a — je-li zapsán v obchodním rejstříku — i údaj o zápisu včetně oddílu a vložky; kapitálové společnosti a družstva mají navíc povinnost web zřídit podle § 7 ZOK. Hrozí pokuta až 50 000 Kč, u rejstříkového soudu pořádková pokuta až 100 000 Kč. Kromě právní stránky to má konverzní roli: chybějícího IČO u firmy, která chce zálohovou fakturu na půl milionu, si zákazník všimne. Oprava zabere pět minut a v reportu působí jako důkaz důkladnosti.

**Špatné typy vstupních polí — na mobilu vyskočí u e-mailu nebo telefonu běžná textová klávesnice** — Střední

*Jak poznat:* Otevřete formulář na skutečném telefonu a klepněte postupně do každého pole. Vyfoťte klávesnici. Alternativně zkontrolujte v DevTools atributy type, inputmode a autocomplete.

*Náprava:* Nastavit type=email u e-mailu, type=tel u telefonu, inputmode=numeric u čísel typu IČO. Nepoužívat type=number u údajů, které jsou jen řetězcem číslic — na desktopu přidá šipky a chová se nevhodně. Doplnit autocomplete (name, email, tel, organization), aby prohlížeč doplnil údaje sám; Zuko uvádí, že automatické doplňování koreluje s úspěšným dokončením napříč typy formulářů. Týká se to zhruba poloviny provozu — mobil má v Česku podíl 46,1 %. Je to oprava na jeden řádek kódu u každého pole.

**Po odeslání formuláře jen Děkujeme za zprávu bez informace, kdy a jak se firma ozve** — Střední

*Jak poznat:* Odešlete poptávku a zaznamenejte, co se objeví na obrazovce a co přijde e-mailem. Zkontrolujte i odesílatele a obsah automatické odpovědi.

*Náprava:* Doplnit konkrétní příslib: kdo se ozve, do kdy, jakým kanálem, a co bude potřeba. Do automatického potvrzení přidat totéž plus odkaz na případovky nebo ceník, aby měl člověk mezitím co číst. Interval mezi odesláním a lidskou odpovědí je nejzranitelnější místo procesu — v té chvíli člověk pravděpodobně píše i konkurenci.

**Cookie lišta zabírá na mobilu polovinu první obrazovky a nemá na první úrovni tlačítko Odmítnout** — Vysoká

*Jak poznat:* Otevřete web na mobilu v anonymním okně a změřte, jaká část obrazovky zbude na obsah. Zkontrolujte, jestli je odmítnutí stejně dostupné jako přijetí.

*Náprava:* Od 1. 1. 2022 platí v Česku podle § 89 odst. 3 zákona o elektronických komunikacích režim opt-in — předchozí, prokazatelný a aktivní souhlas. Lišta bez rovnocenného odmítnutí je právně sporná a zároveň ubírá z plochy, kde padá rozhodnutí o setrvání (57 % pozornosti nad ohybem). Vedlejší, ale pro klienta důležitý argument: bez souhlasu Clarity v EHP omezí sběr — relace se tříští a nejsou dostupné celé nahrávky, takže špatně nastavená lišta znehodnotí i data, ze kterých se má web zlepšovat.

**Tři až pět stejně silných, ale různých výzev k akci, které si konkurují** — Vysoká

*Jak poznat:* Sepište každý prvek, který vypadá jako tlačítko, s jeho textem, cílem a vizuální váhou. Když má web víc než jednu akci ve stejném vizuálním stylu na jedné obrazovce, konkurují si.

*Náprava:* Zvolit jednu primární akci pro celý web a jednu sekundární, nízkoprahovou. Primární akci ponechat plné tlačítko, ostatní degradovat na odkaz nebo obrysové tlačítko. Newsletter, katalog ke stažení a chat nesmí vypadat stejně jako poptávka. V analytice se to projeví tak, že web dosud sbíral konverze, které obchod nikdy nedostal.

**Klíčový text — nadpis, hodnotová nabídka, ceník — je zapečený v obrázku** — Střední

*Jak poznat:* Zkuste text na stránce označit myší. Co nejde označit, je obrázek. Nebo použijte hledání v prohlížeči (Ctrl+F) na slovo z nadpisu.

*Náprava:* Text v obrázku nepřečte čtečka obrazovky, nezvětší se při přiblížení, nenajde ho vyhledávač a špatně se přizpůsobí mobilu. Převést na skutečný text s CSS. Je to jeden z mála nálezů, který zároveň poškozuje konverzi, přístupnost i vyhledávání — v reportu se dá argumentovat třikrát.

**Nízký kontrast primárního tlačítka nebo textu na obrázkovém pozadí v hero sekci** — Střední

*Jak poznat:* Změřte kontrastní poměr pipetou nebo nástrojem WAVE proti prahu 4,5:1 pro běžný text a 3:1 pro velký text a pro obrys tlačítka. Nejhorší případy jsou bílý text přes světlou fotografii bez překryvu.

*Náprava:* Nejlevnější zjistitelná chyba s nejlepším poměrem přínos ku nákladům — oprava trvá minuty a jde o normou podložené číslo, o kterém se nediskutuje. Přidat tmavý překryv pod text, nebo text přesunout mimo obrázek. Na mobilu se nízký kontrast a malý cíl projeví v Clarity jako rage clicks, což je důkaz z klientových vlastních dat.

**Menu s devíti a více položkami, kde jsou služby rozdrobené a sedí vedle O nás, Kariéra a Ke stažení jako by měly stejnou váhu** — Střední

*Jak poznat:* Spočítejte položky hlavního menu. Zkuste z libovolné podstránky najít cestu k poptávce a spočítejte kliknutí.

*Náprava:* Zredukovat na hlavní služby, reference, ceny (pokud existují) a kontakt; zbytek do patičky. Každá hlavní služba potřebuje samostatnou stránku s vlastní hodnotovou nabídkou a vlastní výzvou k akci. Zkontrolovat, že poptávka je z každé podstránky na jedno kliknutí.

**Blog nebo aktuality s posledním příspěvkem starým dva a více roky, viditelně datované** — Nízká

*Jak poznat:* Otevřete blog a podívejte se na datum posledního článku. Zkontrolujte i copyright v patičce.

*Náprava:* Buď obnovit, nebo skrýt data u článků, které stárnou dobře, nebo sekci odstranit z hlavního menu. Mrtvý blog s posledním příspěvkem z roku 2021 na webu firmy, která má být spolehlivým partnerem, je signál, že se o web nikdo nestará. Rok v copyrightu v patičce nechat generovat automaticky.

**Odkaz vypadá jako tlačítko a tlačítko jako text — vizuální jazyk interaktivních prvků není konzistentní** — Nízká

*Jak poznat:* Projděte tři až pět stránek a porovnejte, jestli má primární akce všude stejnou barvu a tvar. Projděte web tabulátorem a sledujte, jestli je viditelné, kde se nacházíte.

*Náprava:* Sjednotit v CSS — je to většinou práce na jedno odpoledne, která se projeví napříč celým webem. Souvisí s Nielsenovou heuristikou konzistence a standardů. V Clarity se nekonzistence projeví jako dead clicks na prvcích, které vypadají klikatelně a nejsou.

**Web tvrdí čísla, která nesedí s obchodním rejstříkem (počet zaměstnanců, rok založení, obrat)** — Střední

*Jak poznat:* Porovnejte údaje na webu s ARES a s účetními závěrkami ve sbírce listin na justice.cz.

*Náprava:* Tohle je nález, který klienta překvapí, protože ho nikdo jiný nedělá. Uvést do souladu, nebo číslo z webu odstranit. Formulovat v reportu opatrně a jako otázku, ne jako obvinění — firma může být součástí skupiny nebo mít údaje zastaralé z legitimních důvodů. Ale platí, že si to potenciální zákazník může ověřit stejně snadno, a nekonzistence může zabít obchod ve fázi, kdy už do něj firma investovala.


### Česká specifika

Právní rámec, který je ověřitelný a patří do každého reportu. (1) § 435 zákona č. 89/2012 Sb., občanského zákoníku, ukládá každému podnikateli uvádět v informacích zpřístupňovaných veřejnosti dálkovým přístupem — tedy i na webu — jméno a sídlo, a je-li zapsán v obchodním rejstříku, i údaj o zápisu včetně oddílu a vložky. Kapitálové společnosti a družstva mají navíc podle § 7 zákona č. 90/2012 Sb., o obchodních korporacích, povinnost web zřídit a udržovat po celou dobu existence a uvedené údaje na něm zpřístupnit bezplatně. Sankce: pokuta až 50 000 Kč, případně zákaz činnosti až na rok; rejstříkový soud může uložit pořádkovou pokutu až 100 000 Kč. Chybějící IČO nebo spisová značka v patičce je tedy zároveň právní i důvěryhodnostní nález a opraví se za pět minut.

(2) Cookies: od 1. ledna 2022 platí podle § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích, režim opt-in — předchozí, prokazatelný a aktivní souhlas splňující požadavky GDPR. Výjimku mají jen cookies nezbytné pro přenos zprávy sítí nebo pro poskytnutí služby, kterou uživatel výslovně vyžádal. Pro audit to má dva dopady: lišta bez rovnocenného odmítnutí na první úrovni je právně sporná, a zároveň bez souhlasu Clarity v EHP omezí sběr — relace se tříští (návštěva stránky A a B se počítá jako dvě) a nejsou dostupné celé nahrávky. Špatně nastavená lišta tedy znehodnotí i data, ze kterých se má web zlepšovat, což je argument, kterým se u klienta prosadí korektní řešení lépe než odkazem na zákon.

(3) GDPR u poptávkového formuláře: povinné zaškrtávátko Souhlasím se zpracováním osobních údajů je na českých firemních webech téměř univerzální a ve většině případů nadbytečné a právně nesprávné. Kontaktní formulář slouží ke komunikaci ohledně budoucího smluvního plnění, takže právním titulem je plnění smlouvy a předsmluvní jednání, nikoli souhlas — a pokud existuje vhodnější titul než souhlas, má být použit přednostně. Souhlas navíc lze kdykoli odvolat, což firmě jen komplikuje evidenci. Odstranění zaškrtávátka je tedy současně právní náprava i odstranění jednoho povinného úkonu těsně před odesláním, tedy v nejcitlivějším místě formuláře. Informační povinnost zůstává — nahradit jednou větou s odkazem na zásady zpracování. Konkrétní formulaci nechat potvrdit klientovým právníkem.

(4) Zákon č. 424/2023 Sb., o požadavcích na přístupnost některých výrobků a služeb (transpozice European Accessibility Act), je účinný od 28. června 2025. Řada českých agentur ho prodává jako plošnou povinnost pro všechny weby, což není pravda a je vhodné to klientovi říct — buduje to důvěru. Zákon dopadá na vyjmenované služby poskytované spotřebitelům (elektronické komunikace, přístup k audiovizuálním mediálním službám, bankovní a finanční služby pro spotřebitele, elektronické obchodování, prodej elektronických knih, některé dopravní služby) a výslovně se nevztahuje na služby, které nejsou poskytovány spotřebitelům. Čistě B2B firemní web se službou tedy do působnosti nespadá. Navíc platí výjimka pro mikropodniky: méně než 10 zaměstnanců a roční obrat nebo bilanční suma nepřesahující 2 mil. EUR. Argumentovat přístupností je u B2B klienta správné, ale z hlediska použitelnosti (kontrast, klávesnice, popisky polí) a rizika, ne jako zákonná povinnost — pokud tedy klient neprodává i spotřebitelům, kdy do působnosti spadá.

(5) Rozložení zařízení: v Česku je podle StatCounteru za srpen 2026 desktop 52,36 %, mobil 46,1 % a tablet 1,54 %. To je pro audit důležité ve dvou směrech: mobilní verzi nelze odbýt jako okrajovou, ale zároveň nelze u B2B webu automaticky předpokládat převahu mobilu, jak je běžné v B2C — desktop v Česku stále mírně vede. Audit má proto obě verze posuzovat samostatně a v reportu je oddělit.

(6) Praktická realita českých B2B webů, která ovlivňuje formulaci doporučení: velmi častá je platforma WordPress se starší šablonou nebo redakční systém od lokální agentury, kde jsou formuláře postavené na pluginu s omezenými možnostmi validace a kde je jakákoli změna vázaná na dodavatele webu. Doporučení proto musí být seřazená podle náročnosti zásahu a rozdělená na to, co klient zvládne sám v administraci (texty, pořadí sekcí, obsah referencí, povinnost polí), a co vyžaduje zásah do kódu (typy vstupů, validace, kontrast, lepivé CTA). Bez tohoto rozdělení skončí report nerealizovaný. Druhá realita: v mnoha firmách té velikosti neexistuje nikdo, kdo za web odpovídá — je to vedlejší úkol asistentky nebo obchodního ředitele. Doporučení k rychlosti odpovědi na poptávku proto musí obsahovat jmenovitou odpovědnost a zástup, ne jen obecné reagujte rychleji.

### Kde si nejsme jistí

- Neexistuje veřejný datový soubor o konverzních poměrech českých B2B firemních webů se službou. Všechny použitelné benchmarky (Zuko, Unbounce, Baymard) jsou zahraniční a žádný nemá kategorii profesionálních nebo B2B služeb — u Zuka je nejbližší Software (50,61 %) a Misc (44,22 %). V reportu je nutné to přiznat a benchmarky používat jako řádovou orientaci, ne jako laťku.
- Vztah počtu polí a konverze je v marketingové literatuře systematicky zkreslený. Nejčastěji citovaná studie Imaginary Landscape je z let 2007–2008 a přesto se přes patnáct let opakuje jako důkaz. Zuko na 93 milionech relací nachází prakticky plochou trendovou čáru, CXL dokumentuje protipříklady, kde zkrácení konverzi snížilo. Konkrétní čísla typu každé další pole snižuje konverzi o 4,1 % nebo tabulky 3 pole = 25 %, 5 polí = 21 % kolující po blozích se mi nepodařilo dohledat k primárnímu zdroji s uvedenou metodikou a vzorkem — do reportu je neuvádět.
- Tvrzení o vícekrokových formulářích (nejčastěji o 86 % vyšší konverze nebo až 300 %) jsem nedokázal dohledat k primární studii s uvedenou metodikou a vzorkem. Zuko sama vlastní srovnávací data nepublikuje a explicitně uvádí, že přesná velikost zlepšení se mezi studiemi liší a že definitivní odpověď dá jen A/B test. Vícekrokový formulář lze doporučit strukturálně (od nejsnazších údajů k nejnáročnějším), ale bez konkrétního čísla a označený jako hypotéza k ověření.
- Test Start my free trial vs. Start your free trial s nárůstem 90 % je jediný neopakovaný experiment Michaela Aagaarda z roku 2013. Zdroje, které ho dnes citují jako prokázané pravidlo, jsou z velké části automaticky generovaný obsah bez ověření. V placeném reportu ho neuvádět jako pravidlo; formulace tlačítka se má řešit srozumitelností a mírou závazku, ne gramatickou osobou.
- Pro minimální počet relací potřebný ke spolehlivému čtení heatmapy jsem nenašel žádný autoritativní zdroj. Čísla kolující po blozích (200–300 relací na typ zařízení, 500 pro velká rozhodnutí, 1 000–3 000 pro statisticky významné vzory) nemají uvedený primární zdroj ani metodiku. Praktické doporučení bez falešné přesnosti: heatmapu ze stránky s několika desítkami relací nečíst vůbec a jít rovnou na nahrávky nebo na moderované testování s pěti lidmi.
- Výzkum trust badges a pečetí důvěry pochází výhradně z e-commerce a z kontextu platební brány (Baymard: 19 % opustilo objednávku kvůli nedůvěře s kartou, 1 026 respondentů, 2025). Na firemní web s poptávkovým formulářem, kde se nezadávají platební údaje, nelze tato čísla přenášet. Pro B2B služby jsem nenašel srovnatelný kvantitativní výzkum vlivu jednotlivých prvků důvěry na konverzi — doporučení v této oblasti proto stojí na strukturální argumentaci (ověřitelnost, konkrétnost, jméno), ne na číslech.
- Data o rychlosti odpovědi na poptávku jsou robustní ve směru, ale zastaralá v kontextu. Studie MIT/InsideSales je z roku 2007 a měří telefonický kontakt na datech z let 2004–2007; audit publikovaný v HBR je z roku 2011 a týká se amerických firem; Drift testoval americké B2B SaaS firmy v roce 2017. Novější studii se srovnatelnou metodikou, natož českou, jsem nenašel. Konkrétní násobky (100×, 21×, 7×, 60×) je proto vhodné uvádět s letopočtem a metodikou, ne jako univerzální konstanty — a hlavní důkazní váhu nechat na vlastním testu tajným nákupem u konkrétního klienta.
- Limity volného tarifu Hotjaru po sloučení s Contentsquare si protiřečí napříč zdroji: oficiální stránka uvádí 200 tis. relací měsíčně, zatímco starší limit byl 35 relací denně, a některé zdroje uvádějí, že 200 tis. je limit pro analytiku, nikoli pro nahrávky, u kterých se zaznamenává jen část relací. Před doporučením Hotjaru konkrétnímu klientovi je nutné limity ověřit přímo v jeho účtu.
- Není mi známa žádná studie kvantifikující vliv povinného zaškrtávátka souhlasu s GDPR na míru odeslání formuláře v českém prostředí. Doporučení jeho odstranění stojí primárně na právním argumentu (existuje vhodnější právní titul než souhlas) a sekundárně na obecném principu odstranění povinného úkonu před odesláním, ne na naměřeném dopadu.
- Ceníky nástrojů (Contentsquare/Hotjar, Zuko, Lyssna, Maze) se mění a uvedené hodnoty odpovídají stavu k datu této rešerše. Před uvedením konkrétní částky do klientského reportu je nutné je znovu ověřit. Microsoft Clarity je jediný, u kterého Microsoft výslovně garantuje bezplatnost bez limitů provozu i do budoucna, ale i to je závazek, který se může změnit.
- Pro tvrzení, jaký podíl českých B2B firemních webů má konkrétní chybu (například povinné zaškrtávátko GDPR nebo chybějící IČO), nemám kvantitativní podklad. Seznam častých chyb vychází z opakovaně pozorovaných vzorců, ne z měřeného vzorku. Pokud má být tohle prodejní argument, stálo by za to provést vlastní strukturovaný průzkum na vzorku 50–100 českých B2B webů s pevným kontrolním seznamem — to by byl podklad, který nikdo jiný na trhu nemá.
- Zuko neuvádí u svých benchmarků časové rozmezí sběru dat, jen celkový počet relací (93 022 997). Není tedy jasné, za jak dlouhé období data vznikla ani jak jsou aktuální, což omezuje jejich použitelnost jako současné laťky.
- Ověření § 435 občanského zákoníku proběhlo přes sekundární zdroj (advokátní kancelář), protože zakonyprolidi.cz vrátil HTTP 403. Znění paragrafu i výše sankcí je konzistentní napříč několika nezávislými českými právními zdroji, ale před citací přesného znění v klientském reportu doporučuji ověřit v primárním textu zákona.

<details><summary>Zdroje (40)</summary>

- https://www.nngroup.com/articles/scrolling-and-attention/
- https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
- https://www.nngroup.com/articles/ten-usability-heuristics/
- https://www.nngroup.com/videos/5-second-usability-test/
- https://baymard.com/blog/inline-form-validation
- https://baymard.com/blog/mobile-forms-avoid-inline-labels
- https://baymard.com/blog/mobile-form-usability-label-position
- https://baymard.com/blog/perceived-security-of-payment-form
- https://baymard.com/lists/cart-abandonment-rate
- https://baymard.com/labs/touch-keyboard-types
- https://baymard.com/learn/input-fields
- https://www.zuko.io/benchmarking/industry-benchmarking
- https://www.zuko.io/benchmarking/form-type-benchmarking
- https://www.zuko.io/blog/8-surprising-insights-from-zukos-benchmarking-data
- https://www.zuko.io/blog/how-many-fields-should-an-enquiry-form-have-for-maximum-conversion
- https://www.zuko.io/blog/single-page-or-multi-step-form
- https://cxl.com/blog/reduce-form-fields/
- https://hbr.org/2011/03/the-short-life-of-online-sales-leads
- https://www.onecavo.com/wp-content/uploads/2015/11/MIT-InsideSales.com_Lead-Response-Management.pdf
- https://6sense.com/science-of-b2b/buyer-experience-report-2025/
- https://www.prnewswire.com/news-releases/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust-302825792.html
- https://unbounce.com/average-conversion-rates-landing-pages/
- https://unbounce.com/landing-pages/whats-a-good-conversion-rate/
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://learn.microsoft.com/en-us/clarity/insights/semantic-metrics
- https://learn.microsoft.com/en-us/clarity/filters/clarity-filters
- https://learn.microsoft.com/en-us/clarity/faq
- https://clarity.microsoft.com/
- https://contentsquare.com/pricing/
- https://contentsquare.com/hotjar/
- https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/czech-republic
- https://www.zakonyprolidi.cz/cs/2023-424
- https://coi.gov.cz/pro-podnikatele/pristupnost-vyrobku-a-sluzeb-pro-podnikatele/
- https://www.holec-advokati.cz/cs/povinnosti-ve-vztahu-k-obchodnim-listinam-a-internetovym-strankam-spolecnosti/
- https://www.epravo.cz/top/clanky/cookies-nove-jen-se-souhlasem-poslanecka-snemovna-prijala-zprisnujici-pravidla-od-roku-2022-113207.html
- https://www.pravniprostor.cz/clanky/pravo-it/souhlas-zakaznika-se-zpracovanim-osobnich-udaju-kdy-je-kdy-neni-potreba
- https://www.martindomes.cz/jak-na-gdpr-4-resime-formulare-recenze-a-komentare-na-webu-a-e-shopu/
- https://css-tricks.com/better-form-inputs-for-better-mobile-user-experiences/
- https://css-tricks.com/finger-friendly-numerical-inputs-with-inputmode/

</details>

---

## 7. Měření, analytika a souhlas

Kódy bodů v kontrolním seznamu: `MER-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| GA4 uchování dat (user-level a klíčové události) – standardní property | 14 měsíců | 2 měsíce (nelze meziroční srovnání v průzkumech) | [1](https://support.google.com/analytics/answer/7667196) |
| GA4 uchování ostatních dat událostí – GA4 360 | až 50 měsíců | Standardní property má strop 14 měsíců; data Google signals mají strop 26 měsíců a věk/pohlaví/zájmy vždy jen 2 měsíce | [1](https://support.google.com/analytics/answer/7667196) |
| GA4 vlastní dimenze – standardní property | 25 user-scoped, 50 event-scoped, 10 item-scoped | 360 má 100 / 125 / 25. Po smazání dimenze je nutné čekat 48 hodin před přidáním nové. | [1](https://support.google.com/analytics/answer/10075209) |
| GA4 vlastní a vypočítané metriky – standardní property | 50 vlastních metrik, 5 vypočítaných | 360 má 125 a 50; při vyčerpání limitu nelze přidat další měření | [1](https://support.google.com/analytics/answer/10075209) |
| GA4 parametry na jednu událost | do 25 parametrů | Nad 25 se parametry zahodí bez varování | [1](https://support.google.com/analytics/answer/9267744) |
| GA4 vlastnosti uživatele (user properties) | do 25 na property | Nad limit se nezaznamenají | [1](https://support.google.com/analytics/answer/9267744) |
| GA4 délka názvu události / názvu parametru / hodnoty parametru | 40 / 40 / 100 znaků | Delší se ořízne; nelze zvýšit ani v 360 | [1](https://support.google.com/analytics/answer/9267744) |
| GA4 počet různých názvů událostí – webový datový proud | Bez limitu pro web | Mobilní aplikace: 500 na uživatele aplikace | [1](https://support.google.com/analytics/answer/9267744) |
| GA4 stropy na jednoho uživatele a den | 2 000 relací, 10 000 konverzí, 100 000 událostí | Nad tyto stropy se data zahazují – relevantní při chybném měření ve smyčce nebo při botech | [1](https://support.google.com/analytics/answer/9267744) |
| GA4 export do BigQuery – standardní property | 1 milion událostí denně | Nad limit se export zastaví; export lze použít i do bezplatného BigQuery sandboxu, při překročení jeho limitů vznikají poplatky | [1](https://support.google.com/analytics/answer/9358801) |
| GA4 modelování chování (behavioral modeling) – vstupní podmínky | Alespoň 1 000 událostí denně s analytics_storage='denied' po dobu alespoň 7 dní A ZÁROVEŇ alespoň 1 000 denních uživatelů s 'granted' v alespoň 7 z posledních 28 dní | Pod tyto hodnoty se modelování nikdy nespustí. Typický firemní web 10–250 lidí prahů nedosáhne, takže pokročilý Consent Mode mu žádná modelovaná data nepřinese. Ani splnění prahů nezaručuje způsobilost. | [1](https://support.google.com/analytics/answer/11161109) |
| GA4 časový limit relace | 30 minut (výchozí), nastavitelné v hodinách a minutách | Změna bez důvodu rozbíjí srovnatelnost s historií; délka jedné relace není nijak omezená | [1](https://support.google.com/analytics/answer/9191807) |
| GA4 zapojená relace (engaged session) | Trvá déle než 10 sekund NEBO obsahuje klíčovou událost NEBO má alespoň 2 zobrazení stránky | Míra opuštění je pouze doplněk do 100 % k míře zapojení – nelze ji srovnávat s čísly z Universal Analytics | [1](https://support.google.com/analytics/answer/12195621) |
| Životnost cookies GA4 | _ga a _ga_<container-id>: 2 roky (výchozí); lze přenastavit od okamžitého vypršení do 25 měsíců | Prohlížeče to stejně zkracují: Chrome maximálně 400 dní, Safari 7 dní. Deklarovaná doba v zásadách cookies proto často neodpovídá realitě. | [1](https://support.google.com/analytics/answer/11397207) |
| Search Console API – počet řádků na dotaz | 1–25 000 (rowLimit) | Výchozí hodnota je 1 000; kdo exportuje jen výchozí, přichází o dlouhý ocas dotazů | [1](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) |
| Search Console API – kvóty na web | Search Analytics: 1 200 dotazů za minutu; URL Inspection: 2 000 dotazů denně a 600 za minutu | Překročení vrací chybu, ne částečná data | [1](https://developers.google.com/webmaster-tools/limits) |
| Server-side GTM na Cloud Run – náklad | Cca 45 USD/měsíc na jednu instanci (1 vCPU, 0,5 GB, CPU always allocated); Google doporučuje minimum 2 instance, tedy zhruba 90 USD/měsíc | Jedna instance = riziko ztráty dat při výpadku. Autoškálování 2–10 instancí zvládne 35–350 požadavků za sekundu, takže pro běžný firemní web je i minimální sestava výrazně předimenzovaná. | [1](https://developers.google.com/tag-platform/tag-manager/server-side/cloud-run-setup-guide) |
| Microsoft Clarity – cena a limity | Zdarma navždy, bez limitu návštěvnosti, bez vzorkování, bez limitu počtu webů na účet | Nahrávky se uchovávají 30 dní od pořízení; oblíbené a náhodně vybraný vzorek až 9 měsíců | [1](https://learn.microsoft.com/en-us/clarity/faq) |
| Microsoft Clarity – vynucení souhlasu v EHP | Consent Mode je pro EHP, UK a Švýcarsko zapnutý ve výchozím stavu; souhlas se předává přes Consent API nebo podporovanou CMP | Od 31. 10. 2025 Clarity vynucuje consent signál pro návštěvy z EHP, UK a Švýcarska. Bez něj nelze používat cookies a je ovlivněna část funkcí (trychtýře, nahrávky relací). | [1](https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-mode) |
| Pokuty podle GDPR – vyšší sazba (týká se souhlasu) | n/a | Do 20 000 000 EUR nebo 4 % celkového celosvětového ročního obratu, podle toho, co je vyšší. Porušení základních zásad zpracování včetně podmínek souhlasu (čl. 5, 6, 7, 9) spadá do této vyšší sazby. | [1](https://gdpr-info.eu/art-83-gdpr/) |
| Pokuty podle GDPR – nižší sazba | n/a | Do 10 000 000 EUR nebo 2 % celosvětového ročního obratu (čl. 8, 11, 25–39, 42–43 – např. záznamy o činnostech, ochrana již od návrhu) | [1](https://gdpr-info.eu/art-83-gdpr/) |
| ÚOOÚ – pokuty za cookies, rok 2023 (stav k 2. 8. 2023) | n/a | Celkem 4 443 000 Kč uložených pokut, z toho 1 640 000 Kč pravomocných. Nejvyšší pravomocná pokuta 898 000 Kč společnosti v oboru elektronických komunikací za nahrávání marketingových cookies bez souhlasu. Úřad předtím rozeslal přes 120 vytýkacích dopisů a pokutoval až ty, kdo nezjednali nápravu. | [1](https://uoou.gov.cz/media-publikace/tiskove-zpravy/urad-udelil-pokuty-za-45-mil-kc) |
| ÚOOÚ – kontrolní a sankční činnost v oblasti GDPR, rok 2024 | n/a | 14 zahájených kontrol, 12 ukončených; 35 zahájených správních řízení, 20 pravomocně ukončených řízení o přestupku; 6 pokut v celkové výši 351 234 000 Kč (z toho 351 mil. Kč jediná pokuta antivirové společnosti). Ke cookies vedl Úřad pět řízení se středně velkými a velkými správci; těžiště se přesunulo od nastavení lišt k modelu consent or pay. | [1](https://uoou.gov.cz/media/vyrocni-zpravy/dokumenty/vz2024-elektronicka-verze-1.pdf) |
| ÚOOÚ – kontrolní a sankční činnost v oblasti GDPR, rok 2025 | n/a | 27 zahájených kontrol, 13 ukončených; 23 zahájených správních řízení, 15 pravomocně ukončených řízení o přestupku; 7 pokut v celkové výši 14 671 000 Kč. Pravděpodobnost kontroly konkrétní malé firmy je nízká, výše možné sankce ale nikoli. | [1](https://uoou.gov.cz/media/vyrocni-zpravy/vz-2025-uoou.pdf) |
| Certifikovaná CMP s IAB TCF – povinnost pro vydavatele Google reklamy | Nasazená certifikovaná CMP integrovaná s TCF | Od 16. ledna 2024 pro EHP a UK, od 31. července 2024 pro Švýcarsko: bez certifikované CMP nelze zobrazovat personalizovanou reklamu přes AdSense, Ad Manager ani AdMob | [1](https://support.google.com/admanager/answer/13554116) |
| Cookiebot (Usercentrics) – cena | Zdarma do 50 podstránek na 1 doméně, bez limitu návštěvnosti; placené plány od 7 EUR měsíčně | Ceníkové stupně podle počtu podstránek (do 50 / 350 / 3 500 / 7 000 / nad 7 000) se účtují za každou doménu; bezplatný plán lze použít jen na jednu doménu a bez vlastního designu lišty | [1](https://www.cookiebot.com/en/pricing/) |
| CookieYes – cena | Free: 5 000 zobrazení stránek měsíčně, 100 stránek na sken, 5 skenů měsíčně; Basic 10 USD, Pro 25 USD, Ultimate 55 USD měsíčně za doménu | IAB TCF v2.3, Global Privacy Control a sdílení souhlasu mezi subdoménami až od plánu Pro; nad limit zobrazení se doplácí 0,30 USD za 1 000 | [1](https://www.cookieyes.com/pricing/) |
| Sklik – ochrana proti dvojímu započtení konverze | Další konverze se započte až po uplynutí 3 minut | Opakované načtení konverzní stránky do 3 minut se ignoruje – při testování měření se na to snadno narazí a vypadá to jako nefunkční kód | [1](https://napoveda.sklik.cz/merici-skripty/konverzni-kod/) |
| Sklik – hodnoty parametru consent | consent: 1 (souhlas, běžné zpracování včetně zápisu a čtení cookies) nebo consent: 0 (bez souhlasu, anonymizované zpracování pro modelaci konverzí) | consent: -1 znamená, že kód na webu nemá správně implementované souhlasy. Ověřuje se v DevTools > Network > filtr „reta“ nebo „conv“ > Payload. | [1](https://napoveda.sklik.cz/pokrocila-prace-s-daty/consent-a-jak-kontrolovat-souhlas-v-devtools/) |
| Consent Mode – parametr gcs v požadavcích na Google | G111 = souhlas pro Google Ads i Google Analytics; G101 = jen Analytics; G110 = jen Ads (formát G1xy, x = Ads, y = Analytics) | G100 = žádný souhlas, lze odeslat jen v pokročilém režimu. Chybějící gcs = Consent Mode není nasazen. gcs=G111 před interakcí s lištou = měření bez souhlasu. V Consent Mode v2 přibývá parametr gcd se všemi čtyřmi signály. | [1](https://www.simoahava.com/analytics/consent-mode-v2-google-tags/) |

### Nástroje

**Chrome DevTools – záložky Network a Application** — Zdarma

Nejsilnější nástroj auditu zvenčí. Filtr g/collect (GA4), collect (Clarity, Meta), reta a conv (Sklik). V Payload čtete gcs, gcd, en (název události), consent. V Application > Cookies vidíte, jaké cookies vznikly PŘED kliknutím na lištu (_ga, _ga_*, _clck, _clsk, _fbp, sid, udid).

**Veřejně čitelný kontejner GTM (googletagmanager.com/gtm.js?id=GTM-XXXXXXX)** — Zdarma

Ověřeno v praxi: publikovaný kontejner vrátí kompletní konfiguraci. Vyčtete z ní G-ID pro GA4, AW- ID pro Google Ads, všechny třetí strany (connect.facebook.net, c.seznam.cz, clarity.ms, LinkedIn, TikTok), typy tagů a to, jestli kontejner vůbec zná consent klíče (ad_user_data, ad_personalization, analytics_storage) a trigger gtm.init_consent.

**Google Tag Assistant (tagassistant.google.com)** — Zdarma

Připojí se k libovolné doméně s Google tagy a zobrazí stav souhlasu pro každou událost (záložka Consent), pořadí spouštění tagů a hodnoty parametrů. Doporučovaná cesta místo ručního luštění parametru gcd.

**Microsoft Clarity** — Zdarma navždy, bez limitu návštěvnosti, bez vzorkování

Nahrávky relací, heatmapy kliknutí a scrollu, rage clicks, dead clicks, trychtýře, AI shrnutí. Pro audit se po dohodě s klientem nasadí na 2–4 týdny a dodá kvalitativní důkaz k číslům z GA4.

**Google Search Console** — Zdarma

Dotazy, zobrazení, prokliky, průměrná pozice, stav indexace, Core Web Vitals z reálných návštěvníků, ruční akce. Jediný zdroj toho, co lidé hledali, než na web přišli.

**Seznam Webmaster (reporter.seznam.cz/wm/)** — Zdarma

České specifikum. Ověření vlastnictví (souborem nebo meta tagem), kontrola dostupnosti stránek pro robota Seznamu, přidání a reindexace stránek, API.

**Cookie skenery (bezplatný sken Cookiebot, CookieYes Cookie Checker, Cookie Script)** — Zdarma v omezeném rozsahu; placené plány od 7 EUR nebo 10 USD měsíčně

Automaticky projdou web a vypíšou, jaké cookies a trackery se nastavují, jak dlouho platí a od koho jsou. Rychlý podklad pro tabulku cookies v reportu a pro porovnání s tím, co klient deklaruje v zásadách.

**CookieYes Google Consent Mode Checker** — Zdarma

Rychlý externí test, jestli je na doméně nasazen Consent Mode a v jaké podobě. Dobrý pro předběžný screening před schůzkou.

**Sklik – kontrola consentu v DevTools** — Zdarma

Postup přímo od Seznamu: DevTools > Network > vyhledat „reta“ (retargetingový kód) nebo „conv“ (konverzní kód) > F5 > kliknout na řádek > Payload > hodnota consent. Okamžitě ukáže 1, 0 nebo -1.

**curl a grep na zdrojový kód stránky** — Zdarma

Hromadná detekce napříč doménami: G-, GTM-, AW-, clarity.ms, c.seznam.cz, connect.facebook.net, CookieConsent, cookieyes, onetrust, Usercentrics, hotjar, smartlook, leady. Užitečné při auditu více webů jednoho klienta (hlavní web, microsite, kariérní web).

**GA4 DebugView a rozšíření Google Analytics Debugger** — Zdarma

Živý tok událostí včetně parametrů z jednoho zařízení. Nejrychlejší způsob, jak ověřit, že nově nasazená klíčová událost skutečně dorazila a se správnými parametry.

**BigQuery sandbox a export z GA4** — Zdarma v rámci sandboxu; standardní property má strop 1 milion událostí denně

Surová data událostí bez agregace a bez prahování. Jediný způsob, jak zpětně ověřit, co se skutečně měřilo a co se ztratilo, a jak obejít 14měsíční strop retention.

**Looker Studio** — Bezplatná verze existuje (cena placené úrovně se nepodařila ověřit)

Report, který klient reálně otevře. V auditu figuruje spíš jako doporučení do nápravy než jako nástroj zjišťování. Kontrolní otázka: existuje vůbec nějaký report a kdy byl naposledy otevřen?

**Matomo (On-Premise)** — Open source, ke stažení zdarma; Cloud varianta placená (cena se nepodařila ověřit)

Alternativa k GA4 pro klienty, kteří chtějí měřit bez souhlasu nebo chtějí data na vlastním serveru. Matomo nabízí režim consent-free tracking. Relevantní pro veřejný sektor a firmy s citlivostí vůči Googlu.


### Časté chyby

**GA4 je nasazené, ale nemá označenou ani jednu klíčovou událost** — Kritická

*Jak poznat:* Nejčastější nález vůbec. Zvenčí: odeslání formuláře nevyvolá žádný request na g/collect s vlastním názvem události, jen page_view na děkovací stránku (a i ta často chybí). S přístupem: v GA4 Admin > Klíčové události je prázdno nebo jen automatické first_visit.

*Náprava:* Definovat 3–6 klíčových událostí odpovídajících obchodním akcím (odeslání poptávky, klik na telefon, stažení ceníku), nasadit přes GTM a označit v GA4. Rozsah 4–8 hodin práce.

**Konverze je definovaná jako návštěva /dekujeme, na kterou se dá dostat i bez odeslání formuláře** — Vysoká

*Jak poznat:* Otevřete URL děkovací stránky přímo. Pokud se načte, každý bot, každý odkaz z e-mailu a každé obnovení stránky generuje falešnou konverzi.

*Náprava:* Měřit skutečnou událost odeslání (dataLayer push z formulářového pluginu nebo callback), ne návštěvu stránky. Minimálně děkovací stránku vyloučit z indexace a měřit až s parametrem v URL.

**Formulář odesílá přes AJAX, děkovací stránka neexistuje a konverze se neměří vůbec** — Kritická

*Jak poznat:* Po odeslání zůstane URL stejná a jen se objeví hláška. V Network není žádná událost pro GA4. Typické pro Webflow, WordPress s Contact Form 7, Elementor a moderní React weby.

*Náprava:* Nasadit posluchač na událost odeslání (u Webflow w-form-done, u CF7 wpcf7mailsent, u Elementoru submit_success) a poslat vlastní událost do dataLayeru. Ověřit v DebugView.

**GA4 měří dvakrát – gtag natvrdo v šabloně i tag v GTM se stejným G-ID** — Vysoká

*Jak poznat:* V Network filtru g/collect dorazí dva identické page_view na jedno načtení. V reportu je podezřele nízká míra opuštění a dvojnásobný počet zobrazení proti Search Console.

*Náprava:* Odstranit jedno z nasazení, obvykle to v šabloně, a nechat jen GTM. Do reportu jasně napsat, že historická data jsou nadhodnocená a od jakého data se to změní.

**Cookie lišta jen informuje: „Používáme cookies. OK.“** — Kritická

*Jak poznat:* Na liště je jediné tlačítko. Neexistuje odmítnout, neexistuje nastavení. Cookies se nastaví hned při načtení. Typické pro weby postavené před rokem 2022 a nikdy neaktualizované.

*Náprava:* Nasadit skutečnou CMP s rovnocennou volbou souhlasu i nesouhlasu v první vrstvě a s blokováním skriptů do udělení souhlasu. Cookiebot zdarma do 50 podstránek pokryje většinu firemních webů.

**„Setrváním na stránkách souhlasíte s ukládáním cookies“** — Kritická

*Jak poznat:* Doslovná formulace na liště nebo v zápatí. ÚOOÚ tento typ souhlasu výslovně označuje za neplatný, protože nečinnost neznamená souhlas.

*Náprava:* Kompletní výměna řešení souhlasu. Tato formulace je přímý důkaz porušení a v reportu se k ní cituje stanovisko ÚOOÚ.

**Tlačítko Přijmout vše je barevné a velké, Odmítnout je šedý text nebo až ve druhé vrstvě** — Vysoká

*Jak poznat:* Vizuální kontrola lišty na desktopu i mobilu. ÚOOÚ mezi zjištěnými nedostatky výslovně uvádí rozdíl ve viditelnosti tlačítek souhlasu a nesouhlasu a chybějící volbu nesouhlasu v první vrstvě.

*Náprava:* Vyrovnat obě tlačítka vizuálně (stejná velikost, stejný kontrast) a dát Odmítnout vše do první vrstvy. Změřit, jak se změní míra souhlasu – klient to bude chtít vědět dopředu.

**Analytika a pixely se spustí ještě před interakcí s lištou, protože jsou natvrdo v šabloně mimo GTM** — Kritická

*Jak poznat:* Vyčistit cookies, načíst web, neklikat. Pokud v Application > Cookies přibude _ga, _clck nebo _fbp, měří se bez souhlasu. Lišta v tomto případě funguje jen jako obrázek.

*Náprava:* Přesunout všechny měřicí skripty do GTM, nastavit trigger Consent Initialization a Additional Consent Checks u každého tagu. Zapnout v GTM Consent Overview (Admin > Nastavení kontejneru) a projít tagy hromadně.

**Consent Mode v2 vůbec není nasazen, přestože firma inzeruje v Google Ads** — Vysoká

*Jak poznat:* V requestu na Google chybí parametr gcs (a v Consent Mode v2 i gcd). Nebo je gcs=G111 už při prvním načtení před kliknutím na lištu.

*Náprava:* Nasadit Consent Mode přes CMP nebo šablonu v GTM. Pro většinu firem stačí základní režim (tagy se nespustí bez souhlasu, ale stav souhlasu se Googlu ohlásí). Není nutné začít sbírat data bez souhlasu.

**Není kde souhlas odvolat** — Vysoká

*Jak poznat:* V zápatí ani nikde jinde není odkaz typu Nastavení cookies. ÚOOÚ mezi nejčastějšími pochybeními uvádí ztíženou možnost odvolání souhlasu.

*Náprava:* Přidat trvalý odkaz do zápatí, který znovu otevře lištu. Většina CMP na to má jednořádkový snippet.

**Cookie lišta a seznam cookies jsou v angličtině nebo obsahují generický vzorový seznam, který neodpovídá realitě webu** — Střední

*Jak poznat:* Porovnat seznam cookies v zásadách s tím, co skutečně vidíte v Application > Cookies. ÚOOÚ výslovně vytýká informace v cizím jazyce, chybnou kategorizaci a chybějící informace o konkrétních cookies.

*Náprava:* Spustit sken (Cookiebot nebo CookieYes) a vygenerovat seznam odpovídající realitě. Přeložit do češtiny. Nastavit opakovaný sken, aby seznam nezastaral při dalším nasazení nástroje.

**Deklarovaná doba platnosti cookies neodpovídá skutečnosti** — Střední

*Jak poznat:* V zásadách je např. „2 roky“ u _ga, ale v Application > Cookies vidíte jinou hodnotu. ÚOOÚ mezi nedostatky uvádí neúměrně dlouhou dobu platnosti cookies. Prohlížeče navíc dobu samy zkracují (Chrome max 400 dní, Safari 7 dní).

*Náprava:* Aktualizovat soupis podle reálných hodnot ze skenu a zvážit zkrácení platnosti _ga v nastavení Google tagu (lze až na okamžité vypršení nebo naopak 25 měsíců).

**Clarity nasazená v roce 2023 nebo 2024 bez předávání souhlasu** — Střední

*Jak poznat:* V konzoli clarity('metadata', (d,u,c)=>console.log(c), false, true, true) vrátí DENIED i po přijetí všech cookies, nebo se nenastaví cookies _clck a _clsk. Od 31. 10. 2025 Clarity pro EHP, UK a Švýcarsko vyžaduje consent signál.

*Náprava:* Napojit Clarity Consent API na existující lištu nebo použít podporovanou CMP. Bez toho klient nemá žádné náklady, ale ani použitelná data – a v reportu se to často tváří jako „máme heatmapy“.

**Subdoména (e-shop, rezervace, konfigurátor) není v cross-domain měření** — Vysoká

*Jak poznat:* V GA4 se vlastní doména objevuje jako zdroj typu Referral (self-referral). Zvenčí: přechod na subdoménu nepřidá do URL parametr _gl a vznikne nová session.

*Náprava:* Nastavit v GA4 Admin > Datové proudy > Konfigurovat domény, sjednotit cookie doménu a použít na všech doménách stejné G-ID ze stejného datového proudu.

**E-maily, newslettery a QR kódy nemají UTM, takže vše spadne do Direct** — Vysoká

*Jak poznat:* V GA4 je Direct 40–70 % návštěv u firmy, která aktivně rozesílá. Zvenčí: rozkliknout odkaz z veřejně dostupného newsletteru a podívat se na URL.

*Náprava:* Zavést UTM konvenci (vždy malá písmena, pevný slovník zdrojů a médií) a šablonu pro rozesílku i pro tisk. Rozdíl v reportu je vidět do měsíce.

**UTM chaos: newsletter, Newsletter a NEWSLETTER jako tři různé zdroje** — Střední

*Jak poznat:* V reportu zdrojů jsou varianty téhož s různou velikostí písmen a překlepy. GA4 rozlišuje velká a malá písmena u utm_source a utm_medium.

*Náprava:* Sjednotit na malá písmena, doplnit přepis hodnot v GTM nebo vlastní skupinu kanálů v GA4 a napsat interní pravidlo. Historická data se opravit nedá.

**Interní provoz, agentura a monitoring nejsou vyfiltrované** — Vysoká

*Jak poznat:* U webu s 500–5000 návštěvami měsíčně to bývá významný podíl. Signály: špičky přesně v pracovní době bez vazby na kampaně, návštěvy administrátorských URL, opakovaně identická délka relace. GA4 filtruje jen známé boty.

*Náprava:* Nastavit v GA4 filtr interního provozu podle IP rozsahů klienta i dodavatelů a definovat vývojový provoz. Filtr nejdřív nechat v testovacím režimu a až po ověření aktivovat.

**Uchování dat zůstalo na 2 měsících** — Střední

*Jak poznat:* S přístupem: Admin > Nastavení dat > Uchovávání dat. Bez přístupu nepřímo: klient nedokáže ukázat žádnou meziroční analýzu z průzkumů.

*Náprava:* Přepnout na 14 měsíců (jediné kliknutí). Nefunguje zpětně – co propadlo, je pryč. Zároveň zapnout export do BigQuery, aby se to už neopakovalo.

**Google Search Console neexistuje nebo je na osobním účtu bývalého zaměstnance či agentury** — Vysoká

*Jak poznat:* Ptát se v úvodním dotazníku. Signál zvenčí: v HTML není meta tag google-site-verification a klient neumí ukázat žádná data o vyhledávacích dotazech.

*Náprava:* Ověřit vlastnictví přes DNS TXT záznam na firemní doméně (nezávislé na osobě), přidat firemní účty jako vlastníky. Přidat i Seznam Webmaster.

**GA4 nebo GTM účet vlastní agentura, klient má jen roli čtení** — Vysoká

*Jak poznat:* Dotazník před auditem: kdo má roli Administrator na úrovni ÚČtu (ne property) v GA4 a kdo je vlastník GTM účtu.

*Náprava:* Převést vlastnictví na firemní Google účet (ideálně sdílený, ne osobní). Pokud to agentura odmítá, založit nové property a exportovat historii do BigQuery, dokud ještě přístup existuje.

**Sklik konverzní a retargetingový kód posílá consent -1** — Vysoká

*Jak poznat:* DevTools > Network > filtr „reta“ nebo „conv“ > Payload > consent: -1. Podle Seznamu to znamená, že souhlasy nejsou na webu správně implementovány.

*Náprava:* Napojit hodnotu consent na stav lišty (0 bez souhlasu, 1 se souhlasem). Retargetingový kód spustit s consent 0 hned při příchodu a znovu s consent 1 ihned po udělení souhlasu, ne až na další stránce. Konverzní kód spouštět i s consent 0.

**Konverze nemají přiřazenou hodnotu, takže se nedá spočítat CPL ani PNO** — Vysoká

*Jak poznat:* V GA4 je počet konverzí, ale sloupec hodnota je nulový. V Google Ads chybí sloupec hodnota konverze a nelze použít strategie nabízení cílené na hodnotu.

*Náprava:* S klientem odhadnout hodnotu poptávky (průměrná zakázka × pravděpodobnost uzavření) a doplnit ji jako parametr value. I hrubý odhad je lepší než nula. U Sklik použít virtuální hodnotu i u mikrokonverzí.

**Měří se web, ale ne telefonáty, které tvoří většinu poptávek** — Vysoká

*Jak poznat:* Klient řekne, že „lidi hlavně volají“, a v GA4 není žádná událost na tel: odkaz. Typické pro řemesla, výrobu, služby a B2B.

*Náprava:* Minimálně měřit kliknutí na tel: odkazy jako klíčovou událost (jde přes GTM bez zásahu do webu). Při větším objemu zvážit call tracking s dynamickou výměnou čísla, ale jen tam, kde objem hovorů investici unese.

**Značka nebo GTM chybí na starých landing pages, microsite a kariérním webu** — Střední

*Jak poznat:* Projet sitemap.xml a namátkově zkontrolovat starší URL. Nebo porovnat počet stránek se zásahy v Search Console s počtem stránek v GA4.

*Náprava:* Doplnit kód, nebo staré stránky zrušit a přesměrovat. Zároveň zjistit, proč vznikly mimo hlavní šablonu – bývá to symptom rozpadlé správy webu.

**V GTM zůstávají tagy po bývalé agentuře, které nikdo nezná** — Vysoká

*Jak poznat:* Ověřitelné zvenčí z veřejného kontejneru gtm.js. Typicky Meta pixel, LinkedIn Insight Tag, Hotjar nebo Leady, které nikdo nepoužívá, ale posílají data třetí straně a patří do soupisu cookies.

*Náprava:* Projít kontejner, u každého tagu určit vlastníka a účel, zbytek pozastavit (ne rovnou smazat) a po měsíci odstranit. Tím se zároveň opravení soupis cookies v zásadách.

**Firma zaplatila server-side měření, které pro její objem nemá smysl** — Nízká

*Jak poznat:* Požadavky místo na google-analytics.com míří na vlastní subdoménu, ale web má jednotky tisíc návštěv měsíčně. Podle Google zvládne už minimální sestava 35–350 požadavků za sekundu.

*Náprava:* Není nutné rušit, ale patří do reportu jako položka nákladů zhruba 90 USD měsíčně bez odpovídajícího přínosu. Pokud totéž nefunguje ani správně (souhlas se nepředává), je to dvojnásobná ztráta.

**Data existují, ale nikdo se na ně nedívá** — Kritická

*Jak poznat:* Nejsou vytvořené žádné vlastní reporty ani uložené průzkumy, žádné publikum kromě výchozích, žádná anotace, žádný Looker Studio report, retention na výchozí hodnotě, jediný uživatel s přístupem. Na dotaz „co jste podle dat naposledy změnili“ klient nemá odpověď.

*Náprava:* Nezačínat dashboardem. Zavést jeden list na jednu stránku, čtyři až šest čísel, měsíčně, s jednou větou komentáře a jedním doporučeným krokem. Přiřadit konkrétního člověka a pevný termín v kalendáři. Dashboard bez vlastníka je jen dražší způsob, jak data ignorovat.


### Česká specifika

PRÁVNÍ ZÁKLAD. Cookies v ČR řeší § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích. Přesné znění: „Každý, kdo hodlá používat nebo používá sítě elektronických komunikací k ukládání údajů nebo k získávání přístupu k údajům uloženým v koncových zařízeních účastníků nebo uživatelů, získá od těchto účastníků nebo uživatelů předem prokazatelný souhlas s rozsahem a účelem jejich zpracování. Tato povinnost neplatí pro technické ukládání nebo přístup výhradně pro potřeby přenosu zprávy prostřednictvím sítě elektronických komunikací nebo je-li to nezbytné pro potřeby poskytování služby informační společnosti, která je výslovně vyžádána účastníkem nebo uživatelem.“ Opt-in režim platí od 1. 1. 2022; do té doby se česká úprava vykládala jako opt-out. Klíčové slovo pro audit je „předem prokazatelný“ – tedy před uložením cookies a s doložitelností.

KDO POKUTUJE A PODLE ČEHO. Nejčastěji chybně vykládaný bod, na kterém se dá odlišit od konkurence. Samotný zákon o elektronických komunikacích neobsahuje skutkovou podstatu přestupku pro porušení § 89 odst. 3 – v katalogu přestupků najdete odkazy na § 89 odst. 1 a odst. 4, nikoli odst. 3. Pokuty proto uděluje ÚOOÚ podle GDPR, za zpracování osobních údajů bez platného právního titulu. Tisková zpráva Úřadu z 2. 8. 2023 to formuluje jednoznačně: pokuty byly uloženy „za porušení GDPR v souvislosti se zpracováním osobních údajů prostřednictvím cookies souborů“. Sazba se tedy odvíjí od čl. 83 odst. 5 GDPR, tedy vyšší pásmo do 20 mil. EUR nebo 4 % celosvětového obratu, protože jde o porušení podmínek souhlasu (čl. 6 a 7).

REÁLNÁ VYMAHATELNOST. Do reportu patří poctivé číslo, ne strašení. ÚOOÚ v roce 2025 zahájil 27 kontrol a uložil 7 pravomocných pokut v celkové výši 14 671 000 Kč napříč všemi agendami. V roce 2024 to bylo 14 kontrol a 6 pokut v celkové výši 351 234 000 Kč, z čehož ale 351 mil. Kč připadá na jedinou pokutu antivirové společnosti (dosud nejvyšší v historii Úřadu). Pravděpodobnost, že Úřad zkontroluje konkrétní firmu s padesáti zaměstnanci, je nízká. Úřad navíc postupuje odstupňovaně – v roce 2023 nejdřív rozeslal přes 120 vytýkacích dopisů a k pokutám přistoupil až u těch, kdo nezjednali nápravu. Prodejní argument tedy nemá být „dostanete pokutu“, ale „nemáte důkaz o souhlasu, sbíráte data, která nemůžete legálně použít, a při jakémkoli podnětu, akvizici nebo due diligence je to problém“.

CO ÚOOÚ KONKRÉTNĚ VYTÝKÁ. Úřad zveřejnil seznam devíti nedostatků na cookie lištách: netechnické cookies bez souhlasu, neúměrně dlouhá doba platnosti cookies, chybějící volba nesouhlasu v první vrstvě, špatná kategorizace cookies, absence informací o konkrétních cookies, rozdíl ve viditelnosti tlačítek souhlasu a nesouhlasu, nesprávná klasifikace souborů, informace v cizím jazyce a lišta znesnadňující čtení stránky. Z rozhodovací praxe k tomu přidává manipulativní design (deceptive design pattern), ztížené odvolání souhlasu a nefunkční lišty. Tento seznam je ideální osnova pro sekci auditu – hodnotíte přesně to, co hodnotí dozorový orgán, a můžete to v reportu odcitovat.

PROKAZOVÁNÍ SOUHLASU. Podle výroční zprávy ÚOOÚ za rok 2025 z legislativy přímo nevyplývá povinnost logovat udělené souhlasy. Správce ale musí být schopen prokázat, že má platný právní titul. Logování je jedna z cest, rovnocenná jiným elektronickým záznamům; při zpochybnění logu může věc vyústit v analýzu technického fungování lišty, tedy v ověření, že netechnické cookies se skutečně nastaví až po souhlasu. Praktický důsledek: nestačí říct „máme CMP“, musí být ověřitelné, že lišta netechnické cookies opravdu blokuje.

KAM SE POSUNUL ZÁJEM ÚŘADU. Podle výroční zprávy za rok 2024 se těžiště agendy přesunulo od nastavení cookie lišt k modelu consent or pay (souhlas, nebo zaplať), na který Úřad obdržel rekordní počet stížností. Pro běžnou firmu 10–250 lidí to znamená dvě věci: cookie lišta je dnes spíš hygiena než hlavní téma dozoru, ale zároveň neexistuje důvod ji mít špatně, protože náprava je levná.

SEZNAM.CZ A SKLIK. České weby často měří i mimo Google a tam platí jiná pravidla. Sklik má v konverzním i retargetingovém kódu povinný parametr consent s hodnotami 0, 1 nebo -1, kde -1 znamená chybnou implementaci souhlasů. Kontrola jde udělat zvenčí v DevTools (Network, filtr „reta“ nebo „conv“, záložka Payload). Seznam sám doporučuje retargetingový kód spouštět s consent 0 hned při příchodu a znovu s consent 1 ihned po udělení souhlasu (jinak se do publik nedostanou lidé, kteří nepřešli na další stránku), a konverzní kód spouštět i bez souhlasu s consent 0, aby se část konverzí změřila anonymně a v souladu se zákonem. Seznam zároveň zavádí nový systém SEM (Seznam Event Measurement, zatím BETA), který čte IAB TCF automaticky, a pokud web TCF nemá, vyžaduje volání SEM('updateConsent') s klíči podle specifikace Google Consent Mode v2 (ad_storage, ad_user_data, ad_personalization, functionality_storage, analytics_storage). Konverze Sklik má navíc tříminutovou ochranu proti dvojímu započtení, což mate při testování.

SEZNAM WEBMASTER. Vedle Google Search Console je pro české firmy relevantní i Seznam Webmaster (reporter.seznam.cz/wm/). Je zdarma, ověřuje se souborem nebo meta tagem, rozlišuje http a https verzi a poskytuje kontrolu dostupnosti stránek pro robota, přidávání a reindexaci. Dat dává výrazně méně než GSC, ale audit, který ho vůbec nezmíní, působí u českého klienta jako přeložený zahraniční článek.

KONTEXT VELIKOSTI FIRMY. Práh pro modelování chování v GA4 (alespoň 1 000 událostí denně s odmítnutým souhlasem po dobu 7 dní a zároveň alespoň 1 000 denních uživatelů se souhlasem) znamená, že typický český firemní web s 10–250 zaměstnanci ho nikdy nedosáhne. Doporučovat takové firmě pokročilý Consent Mode „kvůli modelovaným datům“ je zavádějící – získá jen právní riziko navíc bez datového přínosu. Základní režim (tagy se nespustí bez souhlasu, ale stav souhlasu se Googlu ohlásí) je pro tuto velikost obvykle správná odpověď. Stejně tak server-side měření za zhruba 90 USD měsíčně dává smysl až od určitého obratu, ne jako výchozí doporučení. Ceny nástrojů jsou navíc v USD a EUR, takže do nabídky v Kč patří i kurzové riziko a DPH.

### Kde si nejsme jistí

- Termín března 2024 jako deadline pro Consent Mode v2 se nepodařilo doložit z aktuální oficiální dokumentace Google – Google z ní datum odstranil. Doložit lze pouze to, že v2 přidává parametry ad_user_data a ad_personalization (developers.google.com/tag-platform/security/guides/consent) a že od 16. 1. 2024 pro EHP a UK a od 31. 7. 2024 pro Švýcarsko platí povinnost certifikované CMP s IAB TCF pro vydavatele AdSense, Ad Manager a AdMob. Simo Ahava k dopadům nesplnění termínu píše, že to je stále nejasné a že pravděpodobně dojde k omezení budování publik a remarketingu. Do reportu proto neuvádět březen 2024 jako tvrdý zákonný termín.
- Uchování dat v Google Search Console (běžně uváděných 16 měsíců) se nepodařilo ověřit z oficiální dokumentace. Ověřeno je pouze: výchozí zobrazení je poslední 3 měsíce, API vrací 1 až 25 000 řádků na dotaz (výchozí 1 000) a stránka o známých problémech mluví o rozsahu 3 až 16 měsíců. Konkrétní číslo si před uvedením do placeného reportu ověřte v účtu klienta.
- Limit počtu klíčových událostí na GA4 property (běžně uváděných 30 pro standardní property) se nepodařilo ověřit z aktuální stránky limitů Google Analytics. Neuvádět jako fakt. Ověřeny jsou pouze limity událostí na uživatele a den (10 000 konverzí).
- Aktuální ceník Matomo Cloud a Looker Studio Pro se nepodařilo načíst – stránky jsou plně JavaScriptové. Ověřeno je pouze, že Matomo On-Premise je open source a ke stažení zdarma a že bezplatná verze Looker Studio existuje. Ceny pro nabídku ověřte přímo před odesláním.
- Konkrétní prahové hodnoty GA4 pro prahování dat (data thresholds) Google neuvádí. Dokumentace pouze potvrzuje, že prahy jsou systémové a uživatel je nemůže upravit. Nelze tedy říct klientovi, od kolika uživatelů se demografická data zobrazí.
- Ceny Cookiebot jsou na ceníkové stránce uvedeny v mixu měn (plány „od 7 EUR měsíčně“, ale stupně uvedené jako 8/16/34/56/96 dolarů měsíčně za doménu). Před uvedením do nabídky ověřte v korunové nebo eurové variantě ceníku.
- Nepodařilo se ověřit, jaký podíl českých firemních webů má konkrétní typ chyby – žádná veřejná česká studie s reprezentativním vzorkem k dispozici není. Formulace typu „X procent českých webů měří nelegálně“ proto do placeného reportu nepatří. Použitelné je pouze to, co ÚOOÚ sám uvádí jako nejčastěji zjišťované nedostatky.
- Role ČTÚ při dozoru nad § 89 odst. 3 se nepodařilo doložit. Z textu zákona vyplývá, že cookies podle odst. 3 nejsou v katalogu přestupků ZoEK, a z praxe ÚOOÚ vyplývá, že sankcionuje podle GDPR. Pokud by klient argumentoval jinak, ověřte u právníka a v auditu netvrďte víc, než je doloženo.
- Clarity uvádí, že podporovanou CMP je aktuálně CookieYes s tím, že další přibudou. Seznam podporovaných CMP se mění – před doporučením konkrétní kombinace Clarity plus CMP ověřte aktuální stav v dokumentaci Microsoftu.
- Ověření vlastnictví v Search Console přes meta tag google-site-verification se při testu na dvou českých webech nepotvrdilo – firmy častěji používají DNS nebo souborovou metodu. Nepřítomnost meta tagu tedy NENÍ důkaz, že Search Console není zapojená. Je to slabý signál, ne závěr.
- Neověřeno, jaká je aktuální dostupnost a ceník Smartlook (česká alternativa ke Clarity) – ceníková stránka se nenačetla. Pokud ho chcete v metodice nabízet, ověřte zvlášť.

<details><summary>Zdroje (47)</summary>

- https://www.zakonyprolidi.cz/cs/2005-127
- https://uoou.gov.cz/media-publikace/tiskove-zpravy/cookies-od-zacatku-roku-2022-pouze-se-souhlasem
- https://uoou.gov.cz/media-publikace/tiskove-zpravy/urad-udelil-pokuty-za-45-mil-kc
- https://uoou.gov.cz/media-publikace/tiskove-zpravy/cookies-listy-vykazuji-radu-nedostatku-1
- https://uoou.gov.cz/media/vyrocni-zpravy/vz-2025-uoou.pdf
- https://uoou.gov.cz/media/vyrocni-zpravy/dokumenty/vz2024-elektronicka-verze-1.pdf
- https://uoou.gov.cz/cookies
- https://gdpr-info.eu/art-83-gdpr/
- https://support.google.com/analytics/answer/9267744
- https://support.google.com/analytics/answer/7667196
- https://support.google.com/analytics/answer/10075209
- https://support.google.com/analytics/answer/9216061
- https://support.google.com/analytics/answer/9756891
- https://support.google.com/analytics/answer/10071811
- https://support.google.com/analytics/answer/12195621
- https://support.google.com/analytics/answer/9191807
- https://support.google.com/analytics/answer/11397207
- https://support.google.com/analytics/answer/11161109
- https://support.google.com/analytics/answer/9358801
- https://support.google.com/analytics/answer/9976101
- https://support.google.com/analytics/answer/9383630
- https://support.google.com/analytics/answer/9964640
- https://developers.google.com/tag-platform/security/guides/consent
- https://developers.google.com/tag-platform/security/concepts/consent-mode
- https://support.google.com/tagmanager/answer/10718549
- https://support.google.com/admanager/answer/13554116
- https://support.google.com/google-ads/answer/10000067
- https://developers.google.com/tag-platform/tag-manager/server-side
- https://developers.google.com/tag-platform/tag-manager/server-side/cloud-run-setup-guide
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- https://developers.google.com/webmaster-tools/limits
- https://support.google.com/webmasters/answer/7576553
- https://www.google.com/about/company/user-consent-policy/
- https://clarity.microsoft.com/
- https://learn.microsoft.com/en-us/clarity/faq
- https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-mode
- https://www.cookiebot.com/en/pricing/
- https://www.cookieyes.com/pricing/
- https://cookie-script.com/pricing
- https://napoveda.sklik.cz/merici-skripty/konverzni-kod/
- https://napoveda.sklik.cz/merici-skripty/retargetingovy-kod/
- https://napoveda.sklik.cz/pokrocila-prace-s-daty/consent-a-jak-kontrolovat-souhlas-v-devtools/
- https://napoveda.sklik.cz/merici-skripty/seznam-event-measurement/konfigurace-sem/consent-a-sprava-souhlasu/
- https://napoveda.sklik.cz/cookieless-check-list/
- https://o-seznam.cz/napoveda/vyhledavani/
- https://www.simoahava.com/analytics/consent-mode-v2-google-tags/
- https://matomo.org/pricing/

</details>

---

## 8. Technický stav, bezpečnost a provoz

Kódy bodů v kontrolním seznamu: `PROV-01` a dál.

### Prahy

| Co | Dobré | Špatné | Zdroj |
|---|---|---|---|
| HSTS — hodnota max-age | min. 15 768 000 s (6 měsíců) = 0 bodů; preload v seznamu prohlížečů = +5 bodů | méně než 6 měsíců = −10 bodů; hlavička chybí, je nečitelná, nebo web neběží na HTTPS = −20 bodů | [1](https://raw.githubusercontent.com/mdn/mdn-http-observatory/main/src/grader/charts.js) |
| HSTS — podmínky pro zápis do preload listu | max-age min. 31 536 000 s (1 rok) + includeSubDomains + preload, platný certifikát, přesměrování z HTTP na HTTPS na stejném hostu, všechny subdomény přes HTTPS | cokoli z toho chybí = doména není přijata; vystoupení ze seznamu trvá měsíce, než se změna dostane k uživatelům s aktualizací prohlížeče | [1](https://hstspreload.org/) |
| Content-Security-Policy — bodování | default-src 'none', žádné 'unsafe' a form-action 'none'/'self' = +10 bodů; bez 'unsafe-inline' a 'unsafe-eval' = +5 bodů | 'unsafe-inline' nebo data: ve script-src = −20; povolené HTTP zdroje = −20; nečitelná hlavička = −25; hlavička chybí = −25; pouze Report-Only = −25 | MDN HTTP Observatory charts.js (Expectation.Csp*) |
| X-Content-Type-Options | nosniff = 0 bodů (bez penalizace) | chybí nebo nečitelná = −5 bodů | MDN HTTP Observatory charts.js (Expectation.XContentTypeOpti |
| Referrer-Policy | no-referrer, same-origin, strict-origin nebo strict-origin-when-cross-origin = +5 bodů | origin, origin-when-cross-origin, unsafe-url, no-referrer-when-downgrade nebo nečitelná = −5 bodů (chybějící hlavička = 0) | MDN HTTP Observatory charts.js (Expectation.ReferrerPolicy*) |
| Ochrana proti clickjackingu | CSP frame-ancestors = +5 bodů; X-Frame-Options SAMEORIGIN nebo DENY = +5 bodů | chybí nebo nečitelná = −20 bodů | MDN HTTP Observatory charts.js (Expectation.XFrameOptions*) |
| Cookies | všechny se Secure, session s HttpOnly a se SameSite = +5 bodů | session cookie bez HttpOnly = −30 bodů (nejtvrdší penalizace); cookie bez Secure = −20; anti-CSRF token bez SameSite = −20 | MDN HTTP Observatory charts.js (Expectation.Cookies*) |
| CORS a Subresource Integrity | obsah není sdílen přes CORS = 0; SRI nasazené a skripty načtené bezpečně = +5 | Access-Control-Allow-Origin: * s možností posílat přihlašovací údaje = −50 bodů; chybějící SRI a externí skripty přes HTTP nebo // = −50 bodů | MDN HTTP Observatory charts.js (Expectation.CrossOriginResou |
| Přesměrování HTTP → HTTPS | první přesměrování na HTTPS na stejném hostu, cíl je HTTPS = 0 bodů | první přesměrování na jiný host = −5; přesměrování na jinou HTTP adresu = −10; cíl není HTTPS nebo přesměrování chybí = −20; neplatný certifikát v řetězu = −20 | MDN HTTP Observatory charts.js (Expectation.Redirection*) |
| Celková známka Mozilla / MDN HTTP Observatory | 100 a víc = A+; 90–99 = A; 85–89 = A−; 80–84 = B+; 70–79 = B (start je 100 bodů, bonusy se přičítají jen při skóre ≥ 90; maximum je 145) | 30–39 = D; 25–29 = D−; 0–24 = F | [1](https://developer.mozilla.org/en-US/observatory/docs/tests_and_scoring) |
| Maximální platnost TLS certifikátu (celosvětové pravidlo) | vydaný před 15. 3. 2026: max. 398 dní; 15. 3. 2026 – 15. 3. 2027: max. 200 dní; 15. 3. 2027 – 15. 3. 2029: max. 100 dní; od 15. 3. 2029: max. 47 dní | delší platnost prohlížeče odmítnou; z toho plyne, že ruční obnova přestává být od roku 2027 udržitelná | [1](https://raw.githubusercontent.com/cabforum/servercert/main/docs/BR.md;) [2](https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/) |
| SSL Labs — stropy známky | A+ vyžaduje dobrou konfiguraci, žádná varování a HSTS s max-age min. 6 měsíců | podpora TLS 1.0 nebo 1.1 = strop B; chybějící TLS 1.3 = strop A−; klíč pod 2048 bitů = strop B; neshoda jména = známka M; nedůvěryhodný certifikát = známka T | [1](https://raw.githubusercontent.com/wiki/ssllabs/research/SSL-Server-Rating-Guide.md) |
| TTFB — doba do prvního bajtu | 0,8 s a méně | nad 1,8 s (mezipásmo 0,8–1,8 s = vyžaduje zlepšení); měří se na 75. percentilu | [1](https://web.dev/articles/ttfb) |
| Core Web Vitals | LCP do 2,5 s, INP do 200 ms, CLS do 0,1 — na 75. percentilu, zvlášť pro mobil a desktop | překročení kterékoli z hodnot na 75. percentilu znamená, že stránka neprošla | [1](https://web.dev/articles/vitals) |
| Gmail — požadavky na odesílatele | všichni odesílatelé: SPF nebo DKIM, platné forward i reverse DNS, TLS spojení, spam rate pod 0,3 % podle Postmaster Tools | nad 5 000 zpráv denně: povinně SPF i DKIM i DMARC, zarovnání DMARC, jednoklikové odhlášení (List-Unsubscribe a List-Unsubscribe-Post); platí od 1. 2. 2024 | [1](https://support.google.com/a/answer/81126) |
| DMARC — platná norma | aktuálně platí RFC 9989 (květen 2026, Standards Track), která nahradila RFC 7489 a RFC 9091; přibyly tagy np (neexistující subdomény), psd a t | tag pct byl v RFC 9989 zrušen — konfigurace, které na něm stojí, jsou zastaralé; p=none nic nevynucuje a je to stav „máme záznam, ale neřeší nic“ | [1](https://www.rfc-editor.org/rfc/rfc9989.html) |
| .cz doména — co se stane po expiraci | registraci lze prodloužit i zpětně ode dne expirace, po celou dobu 60denní ochranné lhůty | po prvních 30 dnech ochranné lhůty je CZ.NIC oprávněn zrušit delegaci — web i firemní e-mail přestanou fungovat; uplynutím 60 dnů registrace zaniká a doména jde do aukce | [1](https://www.nic.cz/files/nic/doc/Pravidla_registrace_CZ.pdf) |
| WordPress — aktuální verze | 7.1 (vydáno 19. 8. 2026) — jediná označená jako latest | vše ostatní včetně 7.0.4, 6.9.7 a starších je v oficiálním API označeno jako outdated | [1](https://api.wordpress.org/core/stable-check/1.0/) [2](https://api.wordpress.org/core/version-check/1.7/) |
| WordPress ekosystém — objem zranitelností | není bezpečná hodnota; jde o měřítko rizika, které WordPress přináší oproti uzavřeným platformám | v roce 2025 bylo nalezeno 11 334 nových zranitelností (+42 % oproti 2024), z toho 1 966 (17 %) s vysokou závažností; 91 % v pluginech, 9 % v tématech, v jádře jen 6 nálezů | [1](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/) |
| WordPress — rychlost zneužití a spolehlivost aktualizací | není bezpečná hodnota; slouží jako argument, proč nestačí aktualizovat jednou za měsíc | medián doby do masového zneužití u silně exploatovaných zranitelností je 5 hodin; zhruba polovina vysoce rizikových zranitelností je zneužita do 24 hodin; 46 % zranitelností nedostalo od vývojáře opravu do data zveřejnění; hostingové firmy v testu zablokovaly jen 26 % útoků na zranitelnosti | Patchstack, State of WordPress Security In 2026 |
| PHP — podporované větve | každá větev má 2 roky plné podpory a další 2 roky jen bezpečnostní opravy; ke dni auditu jsou podporované 8.2, 8.3, 8.4 a 8.5 | 8.2 má už jen bezpečnostní opravy do 31. 12. 2026; 8.1 a starší jsou po konci životnosti a nedostávají žádné opravy | [1](https://www.php.net/supported-versions.php) |
| Chování při 404 podle Googlu | neexistující adresa vrací 404 nebo 410 | odpověď 200 s chybovým nebo prázdným obsahem — Google Search Console to vykáže jako chybu soft 404; Googlebot standardně následuje max. 10 přesměrování | [1](https://developers.google.com/search/docs/crawling-indexing/http-network-errors) |
| Podíl platforem na českém i světovém webu (kontext pro klienta) | neaplikuje se — jde o referenční hodnotu pro rozhodnutí o platformě | WordPress: 40,7 % všech webů (58,9 % mezi CMS); Shopify 5,3 %; Wix 4,2 %; Squarespace 2,5 %; Webflow 0,8 %. Z webů na WordPressu běží 60,0 % na verzi 7, 32,8 % na verzi 6, 4,9 % na verzi 5 a 2,0 % na verzi 4 | [1](https://w3techs.com/technologies/overview/content_management) [2](https://w3techs.com/technologies/details/cm-wordpress) |
| Bezpečnostní hlavičky na českém webu — referenční hodnoty pro srovnání s klientem | nadprůměr znamená mít současně HSTS, CSP, X-Content-Type-Options, Referrer-Policy a X-Frame-Options — to má 10 % webů ve vzorku | 31 % webů nemá ani jednu ze šesti sledovaných hlaviček. Jednotlivě: X-Frame-Options 52 %, X-Content-Type-Options 44 %, HSTS 42 % (z toho jen 34 s max-age ≥ 6 měsíců, 24 s includeSubDomains, 13 s preload), Referrer-Policy 32 %, CSP 21 %, Permissions-Policy 19 % | [1](https://tranco-list.eu/) |
| E-mailová autentizace na českém webu — referenční hodnoty | SPF s -all nebo ~all, DMARC s p=quarantine nebo p=reject a s vyplněným rua= | ze 97 domén s MX ve vzorku: SPF má 87 % (39× -all, 34× ~all, 12× ?all nebo bez all), DMARC 79 % — ale z 77 domén s DMARC má 45 politiku p=none, 20 quarantine a jen 12 reject; rua= pro sběr reportů má 58 ze 77. DNSSEC 46 %, CAA jen 5 %, skutečný security.txt 10 % | Vlastní měření, 8. 9. 2026, tentýž vzorek 120 domén .cz |
| Chování 404 a smíšený obsah na českém webu — referenční hodnoty | 404 na neexistující adrese a nula http:// odkazů v HTML | ze 102 měřených webů vrátilo 18 na neexistující adresu kód 200 (soft 404), 9 kód 403 a 69 správně 404; aspoň jeden http:// odkaz v HTML mělo 27 % webů, protokolově relativní // odkazy 33 %; apex a www končily na jiném hostu u 11 webů | Vlastní měření, 8. 9. 2026, tentýž vzorek 120 domén .cz |
| Životnost certifikátů v praxi (ukazatel automatizace) | 89–90 dní = téměř jistě automatická obnova přes ACME | ze 109 měřených certifikátů mělo 96 platnost 89–90 dní (Let's Encrypt 69×, Google Trust Services 21×, ZeroSSL 6×) a jen 13 delší (365–396 dní, případně 198 dní); žádný ve vzorku nebyl expirovaný ani neměl pod 25 dní do konce | Vlastní měření přes openssl s_client, 8. 9. 2026, tentýž vzo |

### Nástroje

**curl (příkazová řádka)** — zdarma, součást macOS i Linuxu

Úplný základ celého externího auditu. Bezpečnostní hlavičky (curl -sSI), řetěz přesměrování (-L -D -), stavový kód neexistující stránky (-o /dev/null -w "%{http_code}"), TTFB (-w "%{time_starttransfer}"), kompresi (--compressed). Vše ověřitelné a opakovatelné, výsledek se dá vložit do reportu jako důkaz.

**MDN HTTP Observatory** — zdarma, včetně veřejného API (POST https://observatory-api.mdn.mozilla.net/api/v2/scan?host=domena.cz)

Deset testů bezpečnostních hlaviček s číselným skóre 0–145 a známkou A+ až F. Nástupce Mozilla Observatory; API v1 bylo vypnuto 31. 10. 2024. Známka je pro report ideální — klient jí rozumí okamžitě.

**Qualys SSL Labs SSL Server Test** — zdarma

Kompletní rozbor TLS: platnost a řetěz certifikátu, podporované protokoly a šifry, známé zranitelnosti, známka A+ až F podle veřejně dokumentované metodiky (verze 2009r z 16. 5. 2025).

**hstspreload.org API** — zdarma

Stav domény v preload seznamu (/api/v2/status?domain=) a konkrétní seznam důvodů, proč doména nesplňuje podmínky (/api/v2/preloadable?domain=). Vrací strojově čitelný JSON, dá se pustit dávkou.

**Google CSP Evaluator** — zdarma

Rozbor nalezené CSP politiky: které direktivy jsou obcházitelné, kde je 'unsafe-inline', kde jsou příliš široké zdroje. Nejrychlejší způsob, jak zjistit, jestli je CSP skutečná ochrana, nebo jen dekorace.

**PageSpeed Insights / Chrome UX Report (CrUX)** — zdarma, včetně API

Terénní data od skutečných návštěvníků: LCP, INP, CLS a TTFB na 75. percentilu, zvlášť mobil a desktop. Jediný veřejný zdroj, který ukazuje, co lidé opravdu zažívají, a to bez jakéhokoli přístupu k webu.

**Screaming Frog SEO Spider** — zdarma do 500 URL; placená licence 279 USD za uživatele a rok (5–9 licencí 265 USD, 10–19 licencí 249 USD, 20+ 235 USD), licence platí 1 rok

Nefunkční odkazy a chybějící soubory na celém webu (4xx/5xx u stránek, obrázků, skriptů a PDF), řetězy přesměrování, duplicitní obsah, chybějící titulky a popisky, stavové kódy všeho. Umí i rendrovat JavaScript.

**Cloudflare DNS over HTTPS API** — zdarma

Náhrada za dig, když ho nemám: curl -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=TXT" pro SPF, type=MX, NS, CAA, a _dmarc.domena.cz pro DMARC. Odpověď obsahuje i AD flag, tedy stav validace DNSSEC. Vrací JSON, takže se dá projet dávkou přes celý seznam klientů.

**MXToolbox** — základní testy zdarma, placené monitorovací plány

Rychlá kontrola SPF, DKIM, DMARC, MX, blacklistů a otevřených relayů přes webové rozhraní. Praktické pro rychlý screening před schůzkou, kdy nechci psát skripty.

**WPScan** — CLI skener i API zdarma pro nekomerční použití, strop 25 API volání denně; enterprise plány na vyžádání

Databáze zranitelností WordPressu, pluginů a témat včetně CVE. WPScan je CVE Numbering Authority, takže přiděluje CVE čísla přímo. Slug pluginu zjištěný z HTML se dá dotázat na známé zranitelnosti.

**Patchstack** — plán Developer 69 USD měsíčně při roční platbě (828 USD ročně), 3 uživatelské účty (další za 24 USD/účet/měsíc), dalších 5 webů za 12,50 USD měsíčně; počet webů v základu se nastavuje posuvníkem

Databáze zranitelností WordPressu a virtuální patchování. Nejlepší veřejně dostupný zdroj čísel o stavu WordPress ekosystému (roční whitepaper). Vhodné spíš jako nástroj pro následnou správu webů než pro jednorázový audit.

**Sucuri SiteCheck** — zdarma

Rychlá kontrola, jestli web není označený jako napadený nebo na blacklistu, a hrubý odhad použitého CMS. Dobrý první screening.

**crt.sh (Certificate Transparency logy)** — zdarma

Historie všech certifikátů vystavených pro doménu. Odhalí subdomény, o kterých klient neví (staging, test, stary-web, phpmyadmin), a ukáže, jestli certifikáty vystavuje jedna CA, nebo jich je pět od pěti různých dodavatelů.

**Wappalyzer / BuiltWith / WhatCMS** — základní zjištění zdarma přes rozšíření nebo web, placené API

Identifikace CMS, frameworku, analytiky, chatů, marketingových nástrojů a CDN z HTML a hlaviček. Užitečné pro mapování třetích stran, které se do CSP budou muset dostat.

**WHOIS CZ.NIC** — zdarma, https://www.nic.cz/whois/

Držitel domény, určený registrátor, den expirace, stav domény a přiřazená sada nameserverů. Nejrychlejší způsob, jak odhalit, že doména není psaná na klienta.

**openssl s_client** — zdarma

Detail certifikátu bez závislosti na externí službě: vydavatel, platnost od–do (a tedy deklarovaná životnost, což prozradí, jestli je obnova automatizovaná), SAN, kompletnost řetězu, sjednaný protokol.

**Tranco list** — zdarma ke stažení

Referenční žebříček domén, ze kterého jde vzít vzorek českých webů a změřit si vlastní referenční hodnoty. Bez toho jsou v reportu tvrzení typu „většina firem to nemá“ nepodložená.

**securityheaders.com** — webová služba, ceník jsem neověřil

Populární rychlá kontrola bezpečnostních hlaviček se známkou A+ až F. Klienti ji znají, takže se hodí jako společný jazyk.


### Časté chyby

**HTTPS běží, ale bezpečnostní hlavičky nikdo nikdy nenastavil** — střední — jednotlivě nejde o díru, ale ukazuje to, že se o web technicky nikdo nestará

*Jak poznat:* curl -sSI https://domena.cz/ nevrátí ani jednu ze šesti hlaviček. V mém vzorku 102 českých webů to byl případ 31 % z nich a jen 10 % mělo současně HSTS, CSP, X-Content-Type-Options, Referrer-Policy a X-Frame-Options.

*Náprava:* Začít třemi hlavičkami s nulovým rizikem rozbití: X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, X-Frame-Options: DENY (nebo CSP frame-ancestors). CSP a HSTS až v druhém kroku, s testem. U Apache pozor na rozdíl mezi Header set a Header always set — OWASP doporučuje nejprve Header unset a pak Header always set, jinak vzniknou duplicitní hlavičky.

**HSTS je nasazené s krátkým max-age nebo se zapnutým includeSubDomains, aniž by to někdo domyslel** — nízká u krátkého max-age; vysoká u includeSubDomains bez ověření subdomén — může shodit interní systémy

*Jak poznat:* Hodnota max-age menší než 15 768 000, případně includeSubDomains na doméně, kde běží subdomény bez HTTPS. V mém vzorku mělo HSTS 43 webů, ale jen 34 z nich s max-age aspoň 6 měsíců.

*Náprava:* Nasazovat postupně: nejprve max-age=300 na týden, pak 86400, teprve pak 31536000. includeSubDomains zapnout až po vyjmenování všech subdomén a ověření, že každá umí HTTPS. Do preload seznamu jít jen tehdy, když firma nad všemi subdoménami skutečně vládne.

**Web vrací na neexistující adrese kód 200 místo 404** — střední — poškozuje indexaci a znemožňuje jakoukoli automatickou kontrolu odkazů

*Jak poznat:* curl -o /dev/null -w "%{http_code}" -L https://domena.cz/neexistujici-9x7q2/ vrátí 200. V mém vzorku to bylo u 18 ze 102 webů, dalších 9 vracelo 403.

*Náprava:* Nastavit správný stavový kód. Pozor: tuhle chybu je nutné odhalit jako první, protože znehodnocuje všechny ostatní testy — na webu se soft 404 vrací 200 i /.well-known/security.txt, /readme.html i neexistující soubory, takže crawler nic nenajde a audit vyjde falešně dobře.

**Doména je registrovaná na bývalou agenturu, ne na klienta** — kritická — je to jediný nález, který může firmu připravit o web i o firemní e-mail ze dne na den

*Jak poznat:* WHOIS na nic.cz. V kolonce držitele je jiná firma než klient, nebo je určeným registrátorem někdo, s kým klient už nespolupracuje.

*Náprava:* Převod držitele přes určeného registrátora podle čl. 7 Pravidel registrace. Řešit jako první položku reportu, dřív než cokoli technického. Zároveň si ověřit datum expirace: po prvních 30 dnech ochranné lhůty smí CZ.NIC zrušit delegaci a web i pošta zhasnou.

**DMARC existuje, ale je nastavený na p=none a nikdo nečte reporty** — střední — vypadá to jako vyřešené, ale nikoho to nechrání proti podvržení odesílatele

*Jak poznat:* TXT na _dmarc.domena.cz obsahuje p=none. V mém vzorku mělo DMARC 77 domén, ale 45 z nich mělo p=none a 19 nemělo ani rua= pro sběr reportů.

*Náprava:* Postup: nasadit p=none s rua=, 4–6 týdnů číst reporty a doplnit do SPF a DKIM všechny legitimní odesílatele (fakturační systém, newsletter, CRM, formuláře z webu), pak přepnout na p=quarantine a nakonec p=reject. Pozor: RFC 9989 z května 2026 zrušila tag pct, takže postupné nasazování přes procenta už není cesta.

**SPF končí ~all nebo ?all, nebo neobsahuje odesílatele formulářů z webu** — střední

*Jak poznat:* TXT záznam v=spf1 bez -all. Ve vzorku: 39 domén mělo -all, 34 ~all a 12 ?all nebo žádné all.

*Náprava:* Vyjmenovat všechny skutečné odesílatele, ověřit, že se nepřekračuje limit 10 DNS dotazů, a končit -all. Zvláštní pozor na kontaktní formulář na webu — často odesílá přes PHP mail() z IP hostingu, kterou v SPF nikdo neuvedl, a poptávky pak padají do spamu, aniž by o tom kdokoli věděl.

**WordPress veřejně vypisuje uživatelská jména** — vysoká — dává útočníkovi polovinu přihlašovacích údajů zdarma

*Jak poznat:* https://domena.cz/wp-json/wp/v2/users vrátí JSON se seznamem uživatelů, nebo https://domena.cz/?author=1 přesměruje na /author/jmeno/. V mém vzorku 11 WordPress webů to fungovalo u 6, resp. 7 z nich.

*Náprava:* Omezit REST endpoint /wp/v2/users pro nepřihlášené, vypnout přesměrování podle ?author=, nepoužívat jako přihlašovací jméno to, co je vidět jako jméno autora. Doplnit omezení počtu pokusů o přihlášení a dvoufaktorové ověření.

**WordPress je několik hlavních verzí pozadu a nikdo o tom neví** — kritická u jádra staršího než jedna hlavní verze

*Jak poznat:* Tag <generator> v /feed/ nebo parametry ?ver= u souborů z /wp-includes/. V mém vzorku odhalil feed verzi u 6 z 10 testovaných WordPress webů a jeden z nich běžel na verzi 6.2.2, zatímco aktuální je 7.1.

*Náprava:* Aktualizovat, ale nikdy ne přímo v produkci. Postup: záloha, kopie na staging, aktualizace jádra, pak pluginy po jednom, test formulářů a plateb, teprve pak produkce. Pozor na častou past: nespoléhat na /readme.html — moderní WordPress v něm verzi neuvádí, i když soubor vrací 200.

**Aktualizuje se jádro, pluginy nikdo neřeší** — kritická

*Jak poznat:* Verze jádra je aktuální, ale v HTML jsou parametry ?ver= s několik let starými verzemi pluginů. Úplný obraz zvenčí nezískám — to je hranice externího auditu.

*Náprava:* Podle Patchstacku bylo 91 % zranitelností roku 2025 v pluginech a 46 % z nich nemělo od vývojáře opravu ani v den zveřejnění. Doporučení proto nemůže znít jen „aktualizujte“: patří k tomu revize seznamu pluginů (co se dá odstranit, se má odstranit), kontrola, jestli není některý plugin opuštěný, a virtuální patchování nebo WAF jako pojistka na dobu mezi zveřejněním a opravou.

**Předražený nebo prošlý komerční certifikát obnovovaný ručně** — střední dnes, vysoká od roku 2027

*Jak poznat:* openssl ukáže platnost 365–398 dní a vydavatele z komerční CA. V mém vzorku mělo 96 ze 109 certifikátů platnost 89–90 dní (tedy automat), zbylých 13 delší.

*Náprava:* Přejít na ACME automat. Argument pro klienta je datovaný a nezpochybnitelný: od 15. 3. 2027 klesne maximální platnost na 100 dní a od 15. 3. 2029 na 47 dní — tedy 8 ručních obnov ročně. Kdo nemá automat, dřív nebo později zapomene.

**Smíšený obsah zbylý po přechodu na HTTPS** — nízká až střední — prohlížeče dnes obrázky, video a audio samy povyšují na HTTPS a ostatní blokují, takže to obvykle nic nerozbije, ale tiše to nefunguje

*Jak poznat:* Hledání src="http:// a href="http:// ve staženém HTML plus konzole prohlížeče. V mém vzorku mělo aspoň jeden http:// odkaz 27 % webů a protokolově relativní // odkazy 33 %.

*Náprava:* Hromadná náhrada v databázi (u WordPressu přes WP-CLI search-replace, ne přes SQL REPLACE kvůli serializovaným polím). Doplnit CSP direktivou upgrade-insecure-requests. Zvláštní pozor na PDF a obrázky ve starých článcích — tam je to nejčastěji.

**Apex a www vedou každý na jinou adresu, obojí vrací 200** — střední — tříští signály pro vyhledávače, rozděluje cookies a rozbíjí měření v analytice

*Jak poznat:* Porovnat finální URL pro https://domena.cz/ a https://www.domena.cz/. V mém vzorku to bylo u 11 ze 102 webů.

*Náprava:* Zvolit jednu kanonickou variantu a druhou přesměrovat jedním krokem 301. Zkontrolovat, že se přesměrování nekombinuje s přesměrováním HTTP→HTTPS do dvou po sobě jdoucích skoků — první přesměrování musí vést na HTTPS na stejném hostu, jinak nefunguje HSTS.

**Odkazy na weby partnerů a dodavatelů, kteří mezitím zanikli** — nízká technicky, vysoká reputačně

*Jak poznat:* Crawl externích odkazů, kontrola stavových kódů a toho, co je na cílové adrese dnes.

*Náprava:* Projít seznam, mrtvé odkazy odstranit nebo nahradit. Zvláštní pozor na .cz domény, které po 60denní ochranné lhůtě zanikly a byly znovu zaregistrovány někým jiným — odkaz z firemního webu na sázkovou nebo pochybnou stránku poškodí důvěryhodnost víc než chybějící hlavička.

**Zálohy leží na stejném serveru jako web a nikdy se netestovalo obnovení** — kritická

*Jak poznat:* Zvenčí neověřitelné — patří do dotazníku. Nepřímá stopa: soubory typu /backup.zip, /web.sql, /wp-content/backups/ dostupné z webu, což je zároveň kritický nález sám o sobě.

*Náprava:* Pravidlo tří kopií na dvou různých médiích s jednou mimo lokalitu. Zálohovat soubory i databázi, držet aspoň 30 dní zpět (ransomware a poškození obsahu se často odhalí až po týdnech), zálohu držet mimo hosting a jednou za půl roku obnovu skutečně vyzkoušet. Klientovi to prodávat přes RTO — kolik hodin výpadku firma unese a kolik ji hodina stojí.

**Firma je na Wixu nebo Squarespace a myslí si, že „to jde exportovat“** — vysoká jako obchodní riziko, nízká jako bezpečnostní

*Jak poznat:* Identifikace platformy z hlaviček a HTML. Otázka na klienta: co si představujete, že si odnesete, když budeme chtít odejít?

*Náprava:* Napsat do reportu doslova, co se exportuje a co ne, podle oficiální dokumentace platformy. U Wixu neexistuje export webu vůbec, jen dílčí CSV exporty obsahu. U Squarespace odejde jeden .xml s jednou blogovou stránkou, textovými a obrázkovými bloky a galeriemi — bez obchodu, portfolia, kalendáře, vlastního CSS a stylů. U Webflow je export kódu jen na placených Workspace plánech a neobsahuje CMS, e-commerce, User Accounts ani lokalizace, přičemž na exportovaném webu přestanou fungovat formuláře i vyhledávání a zmizí ochrana heslem. Nedělat z toho strašení — dělat z toho vyčíslenou položku.

**Server posílá čísla verzí a X-Powered-By** — nízká samo o sobě, ale prozrazuje zastaralost prostředí

*Jak poznat:* curl -sSI. V mém vzorku uvádělo 14 % webů v hlavičce Server číslo verze a 21 % posílalo X-Powered-By, mezi hodnotami se objevilo php/8.0.30, což je verze po konci podpory.

*Náprava:* Odstranit X-Powered-By a zkrátit Server podle doporučení OWASP. Důležitější je ale to, co se tím odhalilo: pokud web běží na PHP 8.0 nebo 8.1, je prostředí po konci životnosti a nedostává bezpečnostní opravy — to je skutečný nález, ne ta hlavička.

**CDN nasazený jen jako přepínač, bez měřitelného přínosu** — nízká — spíš zbytečný náklad než riziko

*Jak poznat:* Hlavičky cf-ray nebo x-cache jsou přítomné, ale TTFB zůstává vysoký a HTML se necachuje. V mém vzorku byl Cloudflare u 27 % webů.

*Náprava:* Změřit TTFB s CDN a bez něj a napsat rozdíl. U českého webu s českými zákazníky bývá přínos CDN výrazně menší než u mezinárodního projektu; pomalý původní server CDN nespraví. Poctivé doporučení může znít i „CDN vypnout a vyměnit hosting“.


### Česká specifika

DOMÉNA .CZ A CZ.NIC. Pravidla registrace jmen domén v ccTLD .cz účinná od 20. 1. 2026 stanoví v čl. 8.2, že neprodloužená doména vstupuje den po dni expirace na 60 dní do ochranné lhůty. Registraci lze prodloužit zpětně po celou tuto dobu, ale už po prvních 30 dnech ochranné lhůty smí CZ.NIC zrušit delegaci — a v ten okamžik přestane fungovat web i firemní e-mail, aniž by se cokoli smazalo. Uplynutím 60 dnů registrace zaniká a doména jde do aukce. Prakticky to znamená dvě věci pro audit: (1) datum expirace je veřejné a patří do reportu vždy, (2) změna nameserverů v ochranné lhůtě nepomůže — podle čl. 8.2.2 nevede k opětovné delegaci ani změna údajů v sadě nameserverů, ani přiřazení jiné sady. WHOIS pro .cz je na https://www.nic.cz/whois/ a u právnických osob ukazuje držitele, což je nejrychlejší způsob, jak odhalit doménu psanou na bývalou agenturu. Podle statistik CZ.NIC bylo ke dni auditu v registru 1 595 534 domén .cz.\n\nDNSSEC. Česko má tradičně vysokou míru podepsaných domén a řada českých registrátorů a hostingů DNSSEC zapíná automaticky. V mém vzorku 120 domén .cz jsem validaci ověřil u 46 %. Auditně zajímavější než přítomnost je zmizení: pokud firma přešla na zahraniční DNS nebo CDN a DNSSEC při tom vypadl, je to stopa po nedokončené migraci a stojí za zmínku.\n\nZÁKON O KYBERNETICKÉ BEZPEČNOSTI. Od 1. 11. 2025 platí zákon č. 264/2025 Sb., o kybernetické bezpečnosti (transpozice NIS2), doplněný vyhláškou č. 408/2025 Sb., o regulovaných službách. NÚKIB k němu provozuje Portál NÚKIB, kde se od 1. 11. 2025 hlásí incidenty přes formulář v sekci „Chci vyřídit“, a zveřejnil podpůrné materiály včetně kalkulačky pro určení, zda se zákon na subjekt vztahuje. Pro audit webu z toho plyne praktický postup: nejdřív se zeptat, jestli klient spadá do některého z regulovaných odvětví, a pokud ano, celý technický audit rámovat jako podklad k plnění povinností, ne jako doporučení dobré praxe — tím se výrazně mění vnímaná hodnota reportu i to, kdo ho ve firmě čte. Pokud klient regulovaný není, je poctivé mu to napsat a zákonem ho nestrašit.\n\nČESKÝ HOSTING. U firem 10–250 lidí je typický scénář sdílený hosting u českého poskytovatele, často zděděný po dodavateli webu, s doménou i e-mailem na stejném účtu. To má v auditu dva důsledky: (1) zásah do konfigurace serveru (bezpečnostní hlavičky, verze PHP, HTTP/2) může být omezený tím, co poskytovatel v tarifu vůbec dovolí — než se něco doporučí, má se ověřit, jestli to jde nastavit v .htaccess; (2) doména, web i pošta bývají svázané u jednoho dodavatele, takže migrace webu automaticky znamená i migraci pošty, což je největší skrytý náklad každého stěhování a patří do reportu explicitně.\n\nCDN A GEOGRAFIE. Firemní web s českými zákazníky obsluhuje návštěvníky z jedné země. Přínos globálního CDN je proto výrazně menší než u mezinárodního projektu a hlavní přínos je spíš v ochraně proti DDoS a v cachování statiky než v latenci. Doporučení „nasaďte CDN“ je u českého firemního webu s dobrým hostingem často zbytečná položka — poctivější je změřit TTFB a řešit původní server.\n\nE-MAIL. Firmy 10–250 lidí v Česku často provozují poštu u českého poskytovatele nebo v Microsoft 365, ale zároveň posílají faktury z účetního systému, newsletter z Ecomailu nebo SmartEmailingu a formulářové notifikace z webhostingu — tedy ze tří až čtyř různých zdrojů. Právě proto tolik českých domén má SPF, ale s ~all, a DMARC s p=none: nikdo si netroufne zpřísnit, protože neví, kdo všechno jménem domény odesílá. Nasazení rua= a vyhodnocení reportů je proto v českém prostředí nejužitečnější jednotlivé doporučení v celé e-mailové části.

### Kde si nejsme jistí

- Zda se zákon č. 264/2025 Sb. vztahuje na konkrétní firmu o 10–250 zaměstnancích, jsem z primárního zdroje neověřil. Existenci zákona, datum účinnosti 1. 11. 2025, prováděcí vyhlášku č. 408/2025 Sb. a fakt, že se incidenty hlásí přes Portál NÚKIB, ověřeno mám. Konkrétní kritéria velikosti a odvětví pro zařazení mezi poskytovatele regulované služby (§ 5) se mi z e-Sbírky ani z NÚKIB nepodařilo načíst — před uvedením do metodiky projít NÚKIB kalkulačku a znění § 5.
- Metodiku hodnocení securityheaders.com jsem neověřil — server je chráněný proti automatickému přístupu. Neuváděj jeho známky jako autoritativní; jako číselné měřítko používej MDN HTTP Observatory, jehož bodování je veřejně dohledatelné ve zdrojovém kódu.
- Zda a jak lze z Webflow exportovat obsah CMS do CSV, jsem z oficiální dokumentace neověřil. Ověřeno mám jen to, že export kódu obsah CMS neobsahuje. Než to napíšeš klientovi jako cestu ven, ověř aktuální stav v nápovědě Webflow nebo v Data API.
- Ceny GTmetrix, MXToolbox, Sucuri, Wappalyzer a BuiltWith se mi v této rešerši nepodařilo načíst (blokace robotů, ceny za přihlašovací stěnou). Před vydáním metodiky je ověř ručně — ceny SaaS nástrojů se mění několikrát ročně.
- Vlastní měření 120 domén .cz vychází ze žebříčku Tranco s pořadím ≥ 60 000, tedy z webů, které mají nezanedbatelnou návštěvnost. Skutečné firemní weby malých a středních podniků jsou v tomto žebříčku podreprezentované a jejich reálný stav bude pravděpodobně horší než naměřené hodnoty. Čísla používej jako referenční laťku pro srovnání, ne jako průměr českého firemního webu.
- Detekce DKIM zvenčí je principiálně neúplná — testoval jsem osm nejběžnějších selektorů. Naměřených 46 % je proto dolní odhad, ne skutečný podíl. V reportu to piš jako „nepodařilo se ověřit zvenčí“, ne jako „chybí“.
- Údaje ze statistik CZ.NIC (1 595 534 registrovaných domén .cz) jsem načetl z přehledové stránky, kde nebyly u čísel popisky. Druhé uvedené číslo (1 051 944) je pravděpodobně počet domén zabezpečených DNSSEC, ale popisek se mi nepodařilo přiřadit — než to použiješ, ověř přes REST API CZ.NIC.
- Ceny za výpadek e-shopu a podobné převody rizika na peníze v této rešerši ověřené nejsou — jsou to modelové výpočty. V reportu je počítej z čísel konkrétního klienta, ne z obecných benchmarků.

<details><summary>Zdroje (40)</summary>

- https://developer.mozilla.org/en-US/observatory/docs/tests_and_scoring
- https://raw.githubusercontent.com/mdn/mdn-http-observatory/main/src/grader/charts.js
- https://raw.githubusercontent.com/mdn/mdn-http-observatory/main/README.md
- https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- https://hstspreload.org/
- https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy
- https://raw.githubusercontent.com/cabforum/servercert/main/docs/BR.md
- https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/
- https://raw.githubusercontent.com/wiki/ssllabs/research/SSL-Server-Rating-Guide.md
- https://letsencrypt.org/2025/02/20/first-short-lived-cert-issued/
- https://web.dev/articles/ttfb
- https://web.dev/articles/vitals
- https://developers.google.com/search/docs/crawling-indexing/http-network-errors
- https://support.google.com/a/answer/81126
- https://www.rfc-editor.org/rfc/rfc9989.html
- https://www.rfc-editor.org/rfc/rfc7489.html
- https://www.rfc-editor.org/rfc/rfc9116.html
- https://api.wordpress.org/core/stable-check/1.0/
- https://api.wordpress.org/core/version-check/1.7/
- https://wordpress.org/download/releases/
- https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/
- https://patchstack.com/pricing/
- https://wpscan.com/pricing/
- https://www.php.net/supported-versions.php
- https://w3techs.com/technologies/overview/content_management
- https://w3techs.com/technologies/details/cm-wordpress
- https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code
- https://help.webflow.com/hc/en-us/articles/33961341546899-Collect-form-submissions-on-exported-sites
- https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere
- https://support.wix.com/en/article/cms-formerly-content-manager-exporting-content-from-your-collection
- https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site
- https://www.nic.cz/files/nic/doc/Pravidla_registrace_CZ.pdf
- https://www.nic.cz/page/314/pravidla-a-postupy/
- https://stats.nic.cz/
- https://nukib.gov.cz/cs/kyberneticka-bezpecnost/regulace-a-kontrola/
- https://nukib.gov.cz/cs/kyberneticka-bezpecnost/regulace-a-kontrola/podpurne-materialy/
- https://www.screamingfrog.co.uk/seo-spider/pricing/
- https://tranco-list.eu/
- https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/

</details>

---
