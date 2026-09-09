# Kontrolní seznam auditu webu

283 bodů v osmi oblastech. U každého je otázka, jak ji ověřit, co znamená
„prošel", jak je to závažné, jak dlouho trvá náprava a věta, kterou to jde
napsat klientovi.

**Jak to používat.** Neprojíždět odshora dolů. Vybrat oblasti podle toho, co
klient řeší, a v každé jet od kritických bodů níž. U každého bodu je poznamenané,
jestli jde ověřit zvenčí, nebo je na něj potřeba přístup do klientových nástrojů.

**Než začneš cokoli měřit:** ověř, že web vrací 404 na neexistující adrese.
Když vrací 200, projde ti falešně dobře polovina testů na zapomenuté soubory
a citlivé adresy. A po bezpečnostních testech zkontroluj, jestli tě ochrana
webu nezablokovala — jinak si dalších dvacet nálezů vyrobíš sám.

**Kódy jsou unikátní napříč všemi oblastmi.** Ten samý kód v reportu, v zápisu
a při retestu znamená ten samý bod. Nepřečíslovávej je.

**Kam dál:** prahy, nástroje a česká specifika k oblastem jsou
v [prahy-a-nastroje.md](prahy-a-nastroje.md), jak z nálezů udělat report
v [metodika.md](metodika.md), jak vypadá hotový výstup
ve [vzorovy-report.md](vzorovy-report.md).

## Kolik je čeho

| Oblast | Kód | Bodů | 🔴 | 🟠 | 🟡 | ⚪ | Čas |
|---|---|--:|--:|--:|--:|--:|---|
| Technické SEO a indexace | `TECH` | 42 | 9 | 14 | 13 | 6 | 180–240 minut |
| Rychlost a Core Web Vitals | `RYCH` | 33 | 4 | 18 | 10 | 1 | 90–120 minut na jeden web v rozsahu homepage + 3–5 klíčových šablon |
| Přístupnost | `PRIS` | 32 | 4 | 15 | 12 | 1 | 210–300 minut |
| Obsahové SEO a viditelnost ve vyhledávání | `SEO` | 35 | 4 | 12 | 15 | 4 | 180–240 minut u webu do 100 stránek |
| Obsah a sdělení | `SDEL` | 24 | 3 | 10 | 9 | 2 | 180–210 minut vlastní práce auditora u webu se třemi stránkami služeb a jednou případovkou |
| Konverze a použitelnost | `KONV` | 42 | 6 | 13 | 19 | 4 | 240–330 minut čisté práce u jednoho webu, plus 5 pracovních dnů čekání |
| Měření, analytika a souhlas | `MER` | 29 | 5 | 15 | 7 | 2 | 100–150 minut na jeden web |
| Technický stav, bezpečnost a provoz | `PROV` | 46 | 9 | 15 | 12 | 10 | 75–110 minut u běžného firemního webu do 50 stránek, pokud jde jen o externí část |
| **Celkem** | | **283** | **44** | **112** | **97** | **30** | |

## Když není čas, projeď aspoň tohle

44 kritických bodů. Každý z nich sám o sobě dokáže zabít výsledek celého webu.

| Kód | Co se ověřuje | Náprava |
|---|---|---|
| `TECH-01` | Je robots.txt dostupný na všech variantách domény a neblokuje celý web? | minuty |
| `TECH-02` | Nemá některá z komerčně důležitých stránek v kódu zákaz zobrazování ve vyhledávání? | minuty |
| `TECH-03` | Neposílá server u prodejních stránek nebo u PDF skrytý zákaz indexace v HTTP hlavičce? | hodiny |
| `TECH-04` | Vrací všech 10–30 komerčně důležitých adres kód 200 přímo, bez přesměrování a bez chyby? | hodiny |
| `TECH-05` | Ukazuje na každé prodejní stránce značka canonical sama na sebe? | hodiny |
| `TECH-06` | Nemíří odkazy ve zdroji ostrého webu na testovací nebo vývojářskou doménu? | hodiny |
| `TECH-07` | Není veřejně dostupná a indexovaná testovací nebo vývojová verze webu? | hodiny |
| `TECH-08` | Nemá web od Googlu ruční postih nebo hlášený bezpečnostní problém? | dny |
| `TECH-09` | Co Google skutečně vidí na každé jednotlivé prodejní stránce? | hodiny |
| `RYCH-01` | Vidí návštěvník na mobilu hlavní obsah stránky do 2,5 sekundy (LCP)? | dny |
| `RYCH-02` | Odpoví server na první požadavek do 0,8 sekundy (TTFB)? | týdny |
| `RYCH-03` | Má hlavní obrázek v úvodu stránky prioritu, nebo se načítá jako poslední? | minuty |
| `RYCH-04` | Není v HTML zabalený celý katalog nebo obsah CMS jako blok dat? | týdny |
| `PRIS-01` | Projdete celou hlavní cestu k objednávce nebo poptávce jen klávesnicí, bez myši? | týdny |
| `PRIS-02` | Dá se z každého vyskakovacího okna, cookie lišty, chatu, mapy a přehrávače odejít jen klávesnicí? | dny |
| `PRIS-03` | Řekne formulář po chybném odeslání textem, které pole je špatně a jak to opravit? | dny |
| `PRIS-04` | Dá se dokončit objednávka, registrace a přihlášení jen klávesnicí a s odečítačem obrazovky? | týdny |
| `SEO-01` | Má každá služba, kterou firma prodává, na webu vlastní stránku, na kterou by se dal poslat zákazník hledající právě ji? | týdny |
| `SEO-02` | Je hlavní obsah stránky v HTML, nebo se dokresluje až JavaScriptem? | dny |
| `SEO-03` | Neblokuje soubor robots.txt část webu, kterou má vyhledávač vidět? | minuty |
| `SEO-04` | Jsou hlavní stránky webu skutečně v indexu Googlu i Seznamu? | hodiny |
| `SDEL-01` | Řekli aspoň 4 z 5 testerů mimo obor po pěti sekundách správně, co firma dělá a komu to prodává? | hodiny |
| `SDEL-02` | Obsahuje hlavní nadpis (H1) na homepage zároveň to, co firma dělá, i to, pro koho? | hodiny |
| `SDEL-03` | Má stránka služby aspoň 8 z 9 povinných prvků? | dny |
| `KONV-01` | Řeknou aspoň tři z pěti lidí mimo obor po pětisekundovém zhlédnutí první obrazovky správně, co firma dělá, pro koho a co po nich web chce? | hodiny |
| `KONV-02` | Mohl by přesně stejný nadpis a podnadpis použít kterýkoli konkurent ve vašem oboru? | hodiny |
| `KONV-03` | Ukáže formulář chybu u konkrétního pole, zachová vyplněné údaje a zmizí hláška hned po opravě? | hodiny |
| `KONV-04` | Odpověděl na testovací poptávku živý člověk do jedné hodiny v pracovní době? | dny |
| `KONV-05` | Nezpůsobuje na stránce s formulářem chyba v kódu, že se odeslání neprovede? | hodiny |
| `KONV-06` | Existuje jmenovitě určený člověk, který poptávku přečte, lhůta do kdy, a jeho zástup na dobu nepřítomnosti? | dny |
| `MER-01` | Vyvolá odeslání kontaktního nebo poptávkového formuláře měřitelnou událost? | hodiny |
| `MER-02` | Jsou v GA4 označené klíčové události (konverze) a odpovídají skutečným obchodním akcím? | hodiny |
| `MER-03` | Nastaví se analytické a marketingové cookies dřív, než návštěvník klikne na cookie lištu? | dny |
| `MER-04` | Objevuje se na webu formulace typu „setrváním na stránkách souhlasíte s používáním cookies“? | dny |
| `MER-05` | Dívá se na data pravidelně konkrétní člověk a vede to k rozhodnutím? | týdny |
| `PROV-01` | Je doména registrovaná na klienta (jeho firmu), ne na dodavatele nebo bývalou agenturu? | dny |
| `PROV-02` | Je doména prodloužená s dostatečnou rezervou (víc než 60 dní do expirace) a ví se, kdo ji hlídá? | minuty |
| `PROV-03` | Běží web na HTTPS a přesměrovává nezabezpečená adresa (http://) automaticky na zabezpečenou? | hodiny |
| `PROV-04` | Je certifikát platný, důvěryhodný a s kompletním řetězem? | hodiny |
| `PROV-05` | Běží web na aktuální hlavní verzi WordPressu? (jen pro WordPress weby) | hodiny |
| `PROV-06` | Jsou zásuvné moduly (pluginy), které jdou zvenčí odhalit, aktuální a bez známých zranitelností? | dny |
| `PROV-07` | Nejsou na webu veřejně dostupné zapomenuté citlivé soubory? | minuty |
| `PROV-08` | Existují zálohy webu, jsou uložené jinde než na stejném serveru a drží se dost dlouho zpět? | dny |
| `PROV-09` | Je znám úplný seznam doplňků včetně opuštěných a nepoužívaných? | dny |

---


## 1. Technické SEO a indexace

**Čas na oblast:** 180–240 minut (3–4 hodiny) čistého času u firemního webu do zhruba 200 URL. Rozpad: 30 min sestavení jmenného seznamu prodejních stránek a rychlé curl kontroly (robots, hlavičky, varianty domény, přesměrování), 40 min analýza crawlu (samotný crawl běží na pozadí, nepočítá se), 40 min JavaScript, mobilní parita a strukturovaná data, 15 min sitemap a hledání staging prostředí, 40 min Search Console, 10 min Seznam Webmaster, 25 min zápis nálezů do reportu. Vícejazyčný web (.cz/.sk/.de) přidá 20–30 minut na hreflang. Web nad 1 000 URL nebo e-shop přidá 60–90 minut. Bez přístupu do Search Console a Seznam Webmasteru ubyde ~45 minut, ale osm bodů (TECH-35 až TECH-42) zůstane s odpovědí „nelze ověřit“ — a to je samo o sobě nález do reportu.

### TECH-01 — Je robots.txt dostupný na všech variantách domény a neblokuje celý web?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** curl -I https://domena.cz/robots.txt (musí vrátit 200, ne 5xx) a curl -s https://domena.cz/robots.txt. Totéž zopakuj pro www variantu a pro každou subdoménu, kterou web používá — robots.txt platí zvlášť pro každý host a protokol. Ve výpisu hledej samostatný řádek 'Disallow: /' pod 'User-agent: *', 'Googlebot' nebo 'SeznamBot'. Zkontroluj, že soubor obsahuje řádek 'Sitemap:' s absolutní adresou.

**Prošel, když.** Soubor vrací HTTP 200, neobsahuje 'Disallow: /' bez dalšího upřesnění u žádného user-agenta a obsahuje odkaz na sitemap. Pokud web robots.txt nemá vůbec, musí adresa vracet 404 — to je také v pořádku.

**Pro klienta.** Na webu je soubor, kterým vyhledávačům zakazujete vstup na celý web. Google i Seznam ho poslouchají, takže se váš web ve výsledcích prakticky neobjeví — bez ohledu na to, kolik jste do něj investovali. Odstranění zákazu je práce na pár minut, ale návrat do výsledků trvá dny až týdny, protože si Google tento soubor načítá až s denním zpožděním.

### TECH-02 — Nemá některá z komerčně důležitých stránek v kódu zákaz zobrazování ve vyhledávání?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** Pro každou URL ze jmenného seznamu prodejních stránek: curl -s URL | grep -i -E 'name="(robots|googlebot|seznambot)"'. Hledáš hodnoty noindex a none. Pokud máš přístup do WordPressu, zkontroluj i Nastavení → Zobrazování → 'Požádat vyhledávače, aby web neindexovaly' a v pluginu Yoast/Rank Math nastavení jednotlivých typů obsahu.

**Prošel, když.** Žádná stránka ze seznamu neobsahuje noindex ani none. V pořádku je chybějící tag nebo hodnoty index, follow, all.

**Pro klienta.** Na této stránce je pokyn 'nezobrazovat ve vyhledávání'. Bývá to jeden zapomenutý přepínač z doby, kdy se web vyvíjel, ale znamená, že tuto službu přes vyhledávač nikdo nenajde — ať už se na ni ptá jakkoli. U firmy s deseti komerčními stránkami je to rozdíl mezi několika poptávkami měsíčně a nulou. Odškrtnutí zabere minutu, návrat do výsledků dny až týdny.

### TECH-03 — Neposílá server u prodejních stránek nebo u PDF skrytý zákaz indexace v HTTP hlavičce?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -I URL a hledej řádek 'x-robots-tag'. Projdi celý jmenný seznam prodejních stránek a navíc klíčové PDF (ceníky, katalogy, technické listy). Hlavičku přidává server, CDN nebo bezpečnostní plugin, takže ve zdrojovém kódu stránky ji neuvidíš.

**Prošel, když.** Hlavička x-robots-tag u prodejních stránek buď chybí, nebo neobsahuje noindex, none ani nofollow.

**Pro klienta.** Server u této stránky posílá vyhledávači neviditelný pokyn 'neindexovat'. V samotné stránce to není vidět, proto to nikdo neodhalil — najde se to jen kontrolou odpovědi serveru. Dokud to tam zůstane, stránka se ve vyhledávání neobjeví. Opravu dělá hosting nebo vývojář, je to zásah v řádu hodin.

### TECH-04 — Vrací všech 10–30 komerčně důležitých adres kód 200 přímo, bez přesměrování a bez chyby?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Nejdřív s klientem sestav jmenný seznam URL, které mají generovat poptávky: homepage, každá služba zvlášť, reference/case studies, kontakt, kariéra, klíčové články. Pak pro každou: curl -o /dev/null -s -w '%{http_code} %{url_effective}\n' -L URL. Alternativně vlož celý seznam najednou do httpstatus.io a přečti sloupec se stavovým kódem a cílovou adresou.

**Prošel, když.** Každá adresa ze seznamu vrací 200 přímo, bez jediného skoku. Žádná nevrací 3xx, 404 ani 5xx.

**Pro klienta.** Tyto konkrétní stránky mají přivádět zákazníky, ale server je nevydává tak, jak by měl — buď hlásí chybu, nebo posílá návštěvníka jinam. Odkazy na ně z e-mailů, z Facebooku i z vyhledávače tím ztrácejí sílu. Je to nejrychleji vyčíslitelná ztráta v celém auditu: u každé takové stránky se dá říct, který okruh poptávek je kvůli ní mrtvý.

### TECH-05 — Ukazuje na každé prodejní stránce značka canonical sama na sebe?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -s URL | grep -i 'rel="canonical"' na pěti až deseti různých podstránkách. Kontroluj tři věci: (1) adresa v canonical je stejná jako adresa stránky, (2) je absolutní (začíná https://), (3) není na všech stránkách stejná — typická chyba šablony je canonical mířící všude na homepage. Hromadně to ukáže Screaming Frog, záložka Canonicals, filtry 'Canonicalised' a 'Missing'.

**Prošel, když.** Každá prodejní stránka má právě jednu značku canonical, absolutní, mířící sama na sebe, a odkazovaná adresa vrací 200.

**Pro klienta.** Každá podstránka Googlu hlásí, že originál je někde jinde (typicky na úvodní stránce). Google jí tedy věří a podstránky do výsledků vůbec nepustí. Navenek to vypadá jako 'stránky máme, ale nikdo je nenajde'. Je to chyba jedné šablony, opraví ji vývojář za pár hodin a efekt je na celý web najednou.

### TECH-06 — Nemíří odkazy ve zdroji ostrého webu na testovací nebo vývojářskou doménu?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -s URL | grep -i -E 'test\.|dev\.|staging|\.local|webflow\.io|wpengine|myshopify|ngrok' a totéž prožeň přes sitemap.xml. Kontroluj čtyři místa: rel=canonical, hreflang, JSON-LD strukturovaná data a Open Graph (og:url, og:image).

**Prošel, když.** Ve zdroji ostrého webu ani v sitemap se neobjeví žádná adresa jiné než produkční domény.

**Pro klienta.** Váš web vyhledávači tvrdí, že originál jeho stránek leží na vývojářské adrese, která je pro veřejnost nedostupná. Google tím pádem ostré stránky vyřadí a na vývojářské se nedostane — celé sekce webu zmizí z výsledků. Zůstává to po nasazení, když se do konfigurace nepřepíše adresa webu. Oprava je jedno nastavení, ale musí se zkontrolovat i mapa webu a sdílecí náhledy.

### TECH-07 — Není veřejně dostupná a indexovaná testovací nebo vývojová verze webu?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Zkus subdomény: test., dev., novy., novy2., staging., beta., wp., web., klient., stary. u domény klienta. Dále projdi certificate transparency logy na crt.sh (zadej %.domena.cz — vypíše všechny subdomény, na které byl vydán certifikát). Doplň dotazem site:domena.cz ve vyhledávači a pohledem do zdroje ostrého webu na odkazy na jiné domény. Poznávací znak: identický obsah na jiné adrese, často se starým designem nebo s texty typu Lorem ipsum.

**Prošel, když.** Žádná nalezená testovací adresa se veřejně nenačte — buď neexistuje, nebo si vyžádá jméno a heslo (HTTP autentizace).

**Pro klienta.** Na internetu je veřejně dostupná testovací kopie vašeho webu. Konkurujete si tím sami se sebou o stejná klíčová slova a navíc je to bezpečnostní díra — na testovacích verzích bývají ceníky, nezveřejněné projekty nebo data zákazníků. Testovací prostředí se musí zamknout heslem; zákaz v souboru pro vyhledávače nestačí, ten se dá obejít a data zůstanou přístupná komukoli, kdo adresu zná.

### TECH-08 — Nemá web od Googlu ruční postih nebo hlášený bezpečnostní problém?

**🔴 kritická** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → levé menu, sekce 'Zabezpečení a ruční akce' → 'Ruční akce' a 'Bezpečnostní problémy'. U obou musí být zelené hlášení 'Nebyly zjištěny žádné problémy'. Je to první věc, kterou v Search Console kontroluješ — jakýkoli nález přebíjí všechny ostatní nálezy v auditu.

**Prošel, když.** Obě obrazovky hlásí, že nebyly zjištěny žádné problémy.

**Pro klienta.** Google váš web ručně postihl (nebo na něm našel škodlivý kód). Dokud to trvá, nemá smysl řešit nic jiného — web je ve výsledcích potlačený nebo z nich úplně vyřazený a žádná další optimalizace to nezmění. Musí se odstranit příčina a poslat žádost o nové posouzení; vyřízení trvá dny až týdny.

### TECH-09 — Co Google skutečně vidí na každé jednotlivé prodejní stránce?

**🔴 kritická** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → horní vyhledávací lišta 'Zkontrolovat libovolnou adresu URL' → vlož URL → přečti stav ('Adresa URL je v Googlu' / 'není v Googlu' a důvod), zvolenou kanonickou adresu (Google vs. uživatel), datum posledního procházení. Pak klikni na 'Otestovat aktivní adresu URL' → 'Zobrazit testovanou stránku' → záložka HTML (co Google po vyrenderování skutečně má), Snímek obrazovky a Další informace (blokované zdroje, chyby JavaScriptu). Zopakuj pro každou položku jmenného seznamu.

**Prošel, když.** Každá prodejní stránka je ve vyhledávání, Google zvolil stejnou kanonickou adresu jako web, ve vyrenderovaném HTML je hlavní text stránky a nejsou hlášené blokované zdroje.

**Pro klienta.** Tohle je nejpřímější spojka mezi technikou a penězi: u každé stránky, která vám má vydělávat, umíme říct, jestli ji Google má, nemá, nebo má jen napůl — a co přesně z ní vidí. Kde chybí text, který na stránce je, ví se to hned. Report vám u každé stránky odpoví jednou větou, ne obecným doporučením.

### TECH-10 — Má vyhledávač přístup ke stylům, skriptům a obrázkům, ze kterých se stránka skládá?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** V robots.txt hledej Disallow na /wp-content/, /wp-includes/, /assets/, /static/, /themes/, /media/, *.js, *.css. Když něco najdeš, ověř dopad: URL prodejní stránky vlož na search.google.com/test/rich-results, klikni na 'Zobrazit testovanou stránku' a projdi záložky 'Snímek obrazovky' (jak stránku vidí Google) a 'Další informace → Zdroje stránky' (seznam zablokovaných souborů).

**Prošel, když.** Žádné pravidlo nebrání načtení stylů, skriptů ani obrázků a snímek stránky v Rich Results Testu vypadá jako běžná stránka, ne jako holý text bez grafiky.

**Pro klienta.** Vyhledávači jste zakázali stáhnout vzhled a skripty webu. Google si stránku poskládá rozbitou — jako by neměla design — a podle takové ji hodnotí, včetně posouzení, jestli je použitelná na mobilu. Je to jednořádková oprava s okamžitým efektem na to, jak váš web ve vyhledávači působí.

### TECH-11 — Existuje web na jediné adrese, nebo běží současně na www i bez www a na http i https?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Čtyři samostatné požadavky: curl -I http://domena.cz, curl -I http://www.domena.cz, curl -I https://domena.cz, curl -I https://www.domena.cz. Sleduj stavový kód a hlavičku Location. Nebo vlož všechny čtyři do httpstatus.io a podívej se na vizualizovaný řetězec.

**Prošel, když.** Právě jedna varianta vrací 200, zbylé tři na ni vedou jediným trvalým přesměrováním (301 nebo 308) — ne řetězcem přes dvě a víc adres.

**Pro klienta.** Váš web existuje pro vyhledávač ve dvou až čtyřech kopiích současně. Hodnocení, které by mělo patřit jedné adrese, se rozdrobí mezi ně a všechny stránky jsou tím pádem ve výsledcích níž, než by měly být. Oprava je nastavení pravidel na serveru — u českých hostingů běžná úloha na pár hodin — a projeví se plošně na celém webu. Poměr ceny a výsledku je nejlepší z celého auditu.

### TECH-12 — Vedou stará URL (z doby před redesignem) na nové stránky jediným skokem?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Seznam starých adres získáš z web.archive.org (zadej doménu, projdi starší snímky a jejich menu) nebo ze staré sitemap, pokud ji klient má. Pak curl -IL stara-url a počítej řádky 'HTTP/' ve výstupu. Hromadně: Screaming Frog v režimu List, nahraj seznam starých URL, pak Reports → Redirects → Redirect Chains.

**Prošel, když.** Každá stará adresa dojde na finální cíl s HTTP 200 jedním skokem. Žádný řetězec o dvou a více přesměrováních, žádná stará adresa nekončí na 404 nebo na homepage místo na odpovídající nové stránce.

**Pro klienta.** Adresy, které jste měli před předěláním webu, vedou na nové stránky přes několik zastávek za sebou (typicky čtyři tam, kde stačí jedna). Vyhledávač i návštěvník tím ztrácejí čas a část hodnocení nastřádaného za roky se po cestě ztrácí. Pravidla se přepíší tak, aby každá stará adresa mířila přímo na cíl. Přesměrování se pak musí nechat běžet minimálně rok, lépe natrvalo.

### TECH-13 — Jsou přesměrování trvalá (301/308), nebo dočasná (302/307) či řešená až v prohlížeči?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -IL URL a čti typ na řádku 'HTTP/2 301' vs '302' nebo '307'. Dále ve zdroji hledej meta refresh: curl -s URL | grep -i 'http-equiv="refresh"' (nulové zpoždění Google čte jako trvalé, nenulové jako dočasné) a javascriptová přesměrování: grep -i 'window.location'. Hromadně: Screaming Frog, záložka Response Codes, filtr 'Redirection (3xx)', sloupec Status Code.

**Prošel, když.** Všechna přesměrování, která mají být trvalá (staré URL, konsolidace domény, změna adresy stránky), vracejí 301 nebo 308. Žádné klíčové přesměrování není řešené JavaScriptem.

**Pro klienta.** Přesměrování jsou nastavená jako dočasná. Vyhledávač je tak i chápe: ve výsledcích nechává starou adresu a novou stránku nezobrazuje. Typicky se to stane po redesignu, kdy je přesměrování řešené pluginem bez volby typu — firma pak po předělání webu ztratí návštěvnost a nechápe proč. Změna typu je nastavení, ne programování.

### TECH-14 — Je hlavní text prodejních stránek ve zdrojovém kódu, který posílá server, nebo se doskládá až JavaScriptem?

**🟠 vysoká** · náprava: týdny · zvenčí

**Jak ověřit.** curl -s URL > /tmp/stranka.html a v souboru hledej doslovný text z nadpisu a z hlavního odstavce stránky. Druhá kontrola: v prohlížeči Ctrl+U (zobrazit zdroj) a Ctrl+F na konkrétní větu. Třetí: DevTools → Ctrl+Shift+P → 'Disable JavaScript' → načíst stránku znovu. Kontrolní protipól: pusť URL přes search.google.com/test/rich-results a v 'Zobrazit testovanou stránku' → záložka HTML se podívej, co Google skutečně vyrenderoval.

**Prošel, když.** Nadpis, popisek, hlavní text, canonical a strukturovaná data jsou v HTML od serveru. Prázdný <div id="root"> a jen balík skriptů znamená neprošel.

**Pro klienta.** Váš web posílá vyhledávači prázdnou stránku a text do ní doplňuje až prohlížeč. Google to většinou zvládne, ale s odkladem — nové stránky se do vyhledávání dostávají se zpožděním a část se tam nemusí dostat vůbec. Seznam si s tím poradí hůř. Řešením je nechat server posílat hotový text alespoň u prodejních stránek; je to zásah do technologie webu, počítejte s prací na týdny.

### TECH-15 — Je obsah, který se objeví až po kliknutí (záložky, rozbalovací sekce, 'načíst více'), přítomný v kódu i bez toho kliknutí?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Otevři stránku s referencemi, ceníkem nebo FAQ. Bez jakéhokoli kliknutí porovnej 'Zobrazit zdroj stránky' (Ctrl+U) a DOM v DevTools (Elements) — hledej text ze zavřených záložek a akordeonů. Google při načítání stránky nesimuluje kliknutí, hover ani scroll. Potvrzení: Rich Results Test → 'Zobrazit testovanou stránku' → HTML a hledej v něm ten text.

**Prošel, když.** Veškerý text je v kódu stránky hned po načtení, i když je vizuálně schovaný pod záložkou nebo v rozbalovací sekci. Schování stylem je v pořádku, dotažení až po kliknutí není.

**Pro klienta.** Reference, ceník a odpovědi na časté dotazy se na webu načítají až ve chvíli, kdy na ně někdo klikne. Vyhledávač neklikne — takže tenhle obsah pro něj neexistuje. Zaplatili jste za texty, které ve vyhledávání nejsou. Obsah stačí mít v stránce od začátku a schovávat ho jen vizuálně; pro návštěvníka se nezmění nic.

### TECH-16 — Jsou položky menu a odkazy na podstránky skutečné odkazy s adresou v atributu href?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** curl -s URL | grep -o '<a[^>]*>' | head -50 a hledej odkazy bez href. Ve zdroji dál hledej '<div onclick', '<button onclick' a '<span onclick' použité místo odkazu. Praktický test: spusť Screaming Frog na homepage — pokud crawl skončí s jednou nebo pár nalezenými adresami, menu není v odkazech.

**Prošel, když.** Každý navigační prvek je <a href="/cesta">. Crawler z homepage najde celou strukturu webu.

**Pro klienta.** Menu na webu není z odkazů, ale z tlačítek, která reagují na kliknutí myší. Vyhledávač neklikne — projde jen úvodní stránku a o zbytku webu se nedozví. Stejný problém mají i lidé, kteří web ovládají klávesnicí nebo odečítačem obrazovky, takže oprava vyřeší i přístupnost. Vývojář to řeší v řádu dnů.

### TECH-17 — Vidí mobilní verze webu stejný obsah jako desktopová?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** curl -A 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' -s URL > /tmp/mobil.html a porovnej s desktopovou verzí (diff nebo porovnání délky). V DevTools: Network conditions → user agent → mobilní, a projdi nadpisy, texty, odkazy a JSON-LD. Google od července 2024 indexuje weby výhradně mobilním robotem.

**Prošel, když.** Mobilní verze obsahuje stejné nadpisy, stejný text, stejné odkazy a stejná strukturovaná data jako desktopová. Text schovaný v rozbalovací sekci je v pořádku, chybějící text není.

**Pro klienta.** Na mobilu se část textu vůbec nezobrazuje — nejspíš proto, aby stránka nebyla dlouhá. Jenže vyhledávač už dnes hodnotí weby výhradně podle mobilní verze, takže to, co na mobilu není, pro něj neexistuje. Vy to nevidíte, protože si web kontrolujete na počítači. Text se má na mobil dostat celý, klidně schovaný do rozbalovacích sekcí.

### TECH-18 — Má každá nabízená služba vlastní stránku s vlastní adresou?

**🟠 vysoká** · náprava: týdny · zvenčí

**Jak ověřit.** Porovnej, co firma nabízí (podle homepage, prezentace, ceníku nebo rozhovoru s klientem), se seznamem URL v sitemap a v menu. Nález: firma nabízí pět služeb, ale web má celkem 5–8 stránek a služby jsou popsané v blocích na homepage.

**Prošel, když.** Každá služba, na kterou firma chce chodit poptávky, má vlastní adresu, vlastní titulek stránky a vlastní výzvu k akci nebo formulář.

**Pro klienta.** Všech pět služeb máte popsaných na úvodní stránce. Vyhledávač může jednu stránku zobrazit v podstatě jen na jedno téma — takže bojujete o jeden dotaz místo pěti. Rozdělením na samostatné stránky, každou s vlastním textem a vlastním formulářem, otevřete pět vstupů pro zákazníky místo jednoho. Je to obsahová práce na týdny, ale bývá to nejvýnosnější doporučení z celého auditu.

### TECH-19 — Odkazují se jazykové verze webu (.cz/.sk/.de) navzájem správně? Jen u vícejazyčných webů.

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** curl -s URL | grep -i hreflang na české i slovenské verzi. Kontroluj: (1) česká stránka odkazuje na slovenskou a slovenská zpět na českou, (2) každá verze uvádí i sama sebe, (3) adresy jsou absolutní, (4) kódy jsou cs / cs-CZ / sk / sk-SK — čeština je 'cs', 'cz' je kód země a jako jazyk je neplatný, (5) je uveden x-default. Hromadně: Screaming Frog, záložka Hreflang, filtry 'Missing Return Links', 'Non-200 hreflang URLs' a 'Incorrect Language & Region Codes'. Ověř také, že canonical na každé jazykové verzi míří sám na sebe — jinak Google celé propojení zahodí.

**Prošel, když.** Propojení je obousměrné, každá verze uvádí sebe i všechny ostatní, kódy jsou platné, adresy absolutní, x-default je uvedený a canonical míří na sebe.

**Pro klienta.** Česká a slovenská verze webu si navzájem nepotvrzují, že patří k sobě. Google proto propojení ignoruje: slovenskému zákazníkovi ukáže českou verzi (nebo naopak), případně jednu z verzí do vyhledávání vůbec nepustí. Ztráta se týká celého zahraničního trhu, do kterého jste investovali překlady. U Seznamu na tohle propojení nespoléhejte vůbec — pro něj je spolehlivější oddělit trhy doménou.

### TECH-20 — Nepřesměrovává web návštěvníka automaticky podle jeho země nebo jazyka prohlížeče?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Načti web přes VPN z jiné země, nebo v prohlížeči změň pořadí jazyků (Nastavení → Jazyky) a sleduj, jestli tě web sám přehodí na jinou jazykovou verzi. Doplň: curl -H 'Accept-Language: en-US' -I URL a hledej Location.

**Prošel, když.** Web nikoho automaticky nepřesměrovává; jazyk se přepíná viditelným přepínačem, nanejvýš doplněným nenásilným upozorněním.

**Pro klienta.** Web sám rozhoduje, kterou jazykovou verzi návštěvníkovi ukáže, podle toho, odkud přichází. Roboti Googlu chodí převážně z USA — uvidí tedy jen jednu verzi a ostatní se do vyhledávání nedostanou. Google před tímto postupem výslovně varuje. Automatické přehazování nahraďte viditelným přepínačem jazyka; návštěvník tak neztratí kontrolu nad tím, co čte.

### TECH-21 — Má auditor přístup do Search Console a je property založená jako typ Doména?

**🟠 vysoká** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Klient tě přidá v Search Console → Nastavení → Uživatelé a oprávnění → Přidat uživatele; role 'Omezený uživatel' stačí ke čtení všech reportů. Typ property poznáš v přepínači vlevo nahoře: Doména se zobrazuje bez protokolu (domena.cz), Předpona URL s protokolem (https://www.domena.cz/). Nastavení → Vlastnictví property ukáže způsob ověření.

**Prošel, když.** Auditor má přístup a existuje property typu Doména, ověřená přes DNS záznam, která pokrývá všechny subdomény i protokoly.

**Pro klienta.** Váš účet ve službě Search Console sleduje jen jednu variantu adresy — nejspíš tu, která platila před přechodem na zabezpečené připojení. Vidíte tak jen část toho, co se s webem děje, a část problémů se do přehledů vůbec nedostane. Založení správného typu účtu je na pár minut a vyžaduje jeden zásah u správce domény. Původní účet nechte být kvůli historii, ta se nepřenáší.

### TECH-22 — Kolik stránek Google zná, kolik jich má ve vyhledávání a jaké důvody uvádí u vyřazených?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → Indexování → Stránky. Nahoře přepni mezi 'Všechny známé stránky' a 'Všechny odeslané stránky' (jen ty z vaší mapy webu) a porovnej čísla. Dole projdi tabulku 'Proč nejsou stránky indexovány' — klíčové důvody: Blokováno souborem robots.txt, Vyloučeno značkou noindex, Duplicita bez kanonické verze zvolené uživatelem, Duplicita – Google zvolil jinou kanonickou stránku, Soft 404, Objeveno – momentálně nezaindexováno, Procházeno – momentálně nezaindexováno. Vždy si zapiš datum poslední aktualizace dat (uvedené nad grafem) — report běžně nabírá několikadenní zpoždění a v létě 2026 byl tři týdny zamrzlý.

**Prošel, když.** Počet nezaindexovaných stránek se dá vysvětlit (většinu tvoří záměrně vyloučené adresy) a u žádného z důvodů nefiguruje prodejní stránka. Nehodnotí se procento — reportuje se absolutní počet nezaindexovaných prodejních stránek a důvod u každé.

**Pro klienta.** Google zná X stránek vašeho webu a Y z nich ve vyhledávání nemá. U každé přitom sám uvádí důvod. Nejde o nic tajemného — je to seznam konkrétních příčin, které se dají odstranit jedna po druhé. V reportu je u každé vaší prodejní stránky uvedeno, jestli ji Google zná, má, nebo odmítl, a proč.

### TECH-23 — Nevrací server při procházení chyby a není pomalý?

**🟠 vysoká** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → Nastavení → Statistiky procházení → Otevřít zprávu. Sleduj graf 'Podle odpovědi' (podíl 5xx a 429), 'Průměrná doba odezvy' a případné hlášení o dostupnosti hostitele. Zvenčí se to dá odhadnout: pokud crawler (Screaming Frog) při vyšší rychlosti dostává chyby 5xx, dostane je i Googlebot.

**Prošel, když.** Podíl odpovědí 5xx je zanedbatelný, doba odezvy je stabilní a nerostoucí, robots.txt nikdy nevrací 5xx.

**Pro klienta.** Váš server při zvýšené zátěži hlásí chyby. Google na to reaguje tím, že web prochází méně často — nové stránky se do vyhledávání dostávají pomaleji nebo vůbec. Když firma zrovna spustila nové služby, znamená to měsíce ztraceného náběhu. Řeší se s hostingem: navýšit kapacitu, zapnout mezipaměť. Omezovat roboty přes chybové stránky (401, 403) Google výslovně nedoporučuje.

### TECH-24 — Neblokuje robots.txt robota Seznamu a nebrzdí ho zbytečně?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** V robots.txt hledej blok 'User-agent: SeznamBot' (Seznam čte tento token s velkým B) a direktivu Request-rate. Ověř, že blok neobsahuje 'Disallow: /' a že Request-rate není nastavená pomaleji než 1/30s (například 1/60s nebo 10/1d). Seznam nepoužívá Crawl-delay, ten je pro něj neplatný.

**Prošel, když.** SeznamBot buď nemá vlastní blok a platí pro něj obecná pravidla, nebo má blok bez plošného zákazu a bez omezení rychlosti pomalejšího než jeden dokument za 30 sekund.

**Pro klienta.** Seznam.cz má v Česku zhruba 16 % vyhledávání a u regionálních, řemeslných a výrobních firem z něj chodí často víc poptávek, než tento průměr napovídá. Váš web ho ale odmítá pustit dovnitř (nebo mu procházení brzdí na hodiny), takže tento zdroj zákazníků nefunguje. Oprava je jeden řádek v souboru.

### TECH-25 — Vede každá stránka jen na jedné adrese, nebo funguje i s lomítkem, s /index.php a s velkými písmeny?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Pro tři vzorové podstránky vyzkoušej varianty: /sluzby, /sluzby/, /sluzby/index.php, /sluzby/index.html a /Sluzby. curl -I u každé. Google považuje /apple a /APPLE za dvě různé stránky. Hromadně to odhalí Screaming Frog v záložce URL, filtry 'Uppercase' a 'Duplicate'.

**Prošel, když.** Vždy jen jedna varianta vrací 200; ostatní vracejí 301 na ni, nebo 404. Interní odkazy v menu používají tu variantu, která vrací 200.

**Pro klienta.** Jedna a tatáž stránka je dostupná na dvou až třech adresách zároveň. Vyhledávač je vidí jako různé stránky se stejným obsahem a musí hádat, kterou zobrazit. Nastavením jedné varianty a přesměrováním ostatních se signály scelí. Zároveň je potřeba, aby na tu správnou variantu odkazovalo i menu — jinak každé kliknutí zbytečně prochází přesměrováním a web působí pomaleji.

### TECH-26 — Vrací neexistující adresa skutečnou chybu 404, nebo se tváří jako platná stránka?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -I https://domena.cz/nahodny-nesmysl-abc123 a přečti stavový kód. Doplň kontrolou prázdných stavů: prázdná kategorie v blogu, výpis reference bez výsledků, stránka 'produkt není dostupný', výsledky vyhledávání na webu bez shody — u každé stejný curl. U webů postavených jako aplikace (React, Vue) je chyba běžná.

**Prošel, když.** Neexistující adresa vrací 404 (u trvale smazaného obsahu 410). Vzhled chybové stránky přitom může zůstat jakýkoli — kontroluje se odpověď serveru, ne design.

**Pro klienta.** Když někdo zadá neexistující adresu, váš web mu ukáže hezkou stránku 'nenalezeno', ale vyhledávači zároveň hlásí, že je všechno v pořádku. Vyhledávač si tak ukládá stovky prázdných adres, plýtvá na ně kapacitou a v přehledech se pak ztrácejí skutečné problémy. Vzhled chybové stránky se měnit nemusí, mění se jen odpověď serveru pod ní.

### TECH-27 — Jsou prodejní stránky dostupné z úvodní stránky na jedno až dvě kliknutí?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog: crawl z homepage, pak záložka Internal, sloupec 'Crawl Depth' — seřaď sestupně a porovnej s jmenným seznamem prodejních stránek. V Sitebulb je na to samostatná sekce 'Crawl Depth'. Google žádnou oficiální hranici nezveřejnil, takže se vyhodnocuje relativně: co je hlouběji než zbytek webu.

**Prošel, když.** Žádná stránka ze jmenného seznamu není hlouběji než ostatní prodejní stránky. Reference a case studies jsou dosažitelné z homepage a ze stránek služeb, ne jen přes stránkovaný archiv.

**Pro klienta.** Reference a ukázky realizací jsou zahrabané tři kliknutí hluboko. Nenajde je ani vyhledávač, ani zákazník, který se právě rozhoduje mezi vámi a konkurencí — a to je přesně ten okamžik, kdy by je vidět měl. Stačí je prolinkovat z úvodní stránky a ze stránek jednotlivých služeb; práce na pár hodin s okamžitým dopadem na poptávky.

### TECH-28 — Existují na webu stránky, na které nevede žádný interní odkaz?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog: Configuration → Spider → Crawl → zaškrtni 'Crawl Linked XML Sitemaps' a 'Auto Discover XML Sitemaps via robots.txt'. Spusť crawl z homepage, po jeho dokončení Crawl Analysis → Start, pak záložka Sitemaps → filtr 'Orphan URLs'. Doplň seznam z Search Console (Výkon → Stránky) a z reklamních kampaní klienta.

**Prošel, když.** Seznam osiřelých adres je prázdný, nebo je u každé nalezené rozhodnuto, co s ní bude (prolinkovat, skrýt před vyhledávačem, nebo smazat).

**Pro klienta.** Na webu leží stránky, na které se z webu nedá dokliknout — typicky kampaňové stránky z minulých let. Vyhledávač je buď vůbec nezná, nebo je zná a konkurují vašim hlavním stránkám o stejná slova. Zaplatili jste za ně a nepracují. U každé se rozhodne: buď ji zapojíme do webu, nebo ji před vyhledávačem schováme, nebo ji smažeme.

### TECH-29 — Není stejný text použitý na více stránkách webu?

**🟡 střední** · náprava: týdny · zvenčí

**Jak ověřit.** Screaming Frog: Configuration → Content → Duplicates → zaškrtni 'Enable Near Duplicates', po crawlu Crawl Analysis → Start, pak záložka Content → filtry 'Exact Duplicates' a 'Near Duplicates'. Ručně: otevři vedle sebe dvě 'městské' stránky (/instalater-praha, /instalater-brno) nebo dvě podobné služby a porovnej text.

**Prošel, když.** Žádné dvě prodejní stránky nemají shodný nebo téměř shodný text. Rozdíl jen v názvu města nebo v jednom odstavci neprošel.

**Pro klienta.** Několik stránek na webu má prakticky stejný text, liší se jen názvem města nebo služby. Vyhledávač si z nich vybere jednu a zbytek zahodí — platíte za deset stránek a výkon máte z jedné. Buď je sloučíme do jedné s širším záběrem, nebo každá dostane skutečně vlastní obsah: konkrétní realizace v daném městě, jméno technika, dojezdové časy, fotky.

### TECH-30 — Existuje sitemap.xml, je odkazovaná z robots.txt a obsahuje všechny prodejní stránky?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -s https://domena.cz/robots.txt | grep -i sitemap, pak curl -s adresa-sitemap | grep -c '<loc>' pro počet adres. Porovnej počet s počtem stránek nalezených crawlerem a projdi, jestli je v sitemap každá adresa ze jmenného seznamu prodejních stránek. Poznávací znak zapomenuté sitemap: chybí všechny články z posledního roku.

**Prošel, když.** Sitemap existuje, je odkazovaná v robots.txt, obsahuje absolutní adresy a je v ní každá prodejní stránka. Počet adres zhruba odpovídá počtu stránek nalezených crawlerem.

**Pro klienta.** Mapa webu, kterou byste měli vyhledávači předkládat, se vygenerovala při spuštění webu a od té doby se neaktualizovala — chybí v ní všechno, co jste od té doby přidali. Nové stránky se tak do vyhledávání dostávají pomaleji a nemáte jak sledovat, jestli se stav zlepšuje. Řeší se zapnutím automatického generování v redakčním systému, práce na hodiny.

### TECH-31 — Obsahuje sitemap výhradně funkční stránky, které mají být ve vyhledávání?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Stáhni sitemap, vytáhni adresy (grep -o '<loc>[^<]*' | sed 's/<loc>//') a prožeň je Screaming Frogem v režimu List. Kontroluj sloupce Status Code (musí být 200), Indexability (žádné 'Non-Indexable'), Canonical Link Element (musí mířit sám na sebe). Hledáš v sitemap: 404, přesměrování, stránky s noindex, nekanonické adresy, adresy blokované v robots.txt.

**Prošel, když.** Sto procent adres v sitemap vrací 200, žádná nemá noindex, žádná není přesměrovaná a každá má canonical sama na sebe.

**Pro klienta.** V mapě webu jsou adresy, které už neexistují nebo které vyhledávači zároveň zakazujete zobrazit. Posíláte tím rozporné pokyny. Hlavní škoda je ale v tom, že přijdete o nejlepší nástroj na sledování stavu: přehled v Search Console, který má ukazovat 'kolik z odeslaných stránek je ve vyhledávání', přestane dávat čitelnou odpověď. Do mapy patří jen stránky, které fungují a mají být vidět.

### TECH-32 — Neobsahují strukturovaná data nepravdivé údaje nebo hodnocení, které si firma vystavuje sama sobě?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Projdi výstup z validator.schema.org a Rich Results Testu a hledej: aggregateRating nebo review o vlastní firmě, LocalBusiness u firmy bez provozovny, kterou zákazník navštíví, adresu nebo telefon z generátoru (cizí město, placeholder, +1 555…), otevírací dobu u firmy bez prodejny, geo souřadnice s méně než pěti desetinnými místy, priceRange delší než 100 znaků.

**Prošel, když.** Všechny uvedené údaje odpovídají skutečnosti, firma si sama sobě nepřiděluje hvězdičky a LocalBusiness je nasazený jen tam, kde má firma skutečnou provozovnu pro zákazníky.

**Pro klienta.** Web vyhledávači posílá údaje o firmě, které neodpovídají skutečnosti — v horším případě si sám sobě uděluje hvězdičkové hodnocení. To Google výslovně zakazuje a hrozí za to ruční postih, po kterém web z výsledků zmizí celý. Nepravdivé části se musí odstranit hned; je to práce na minuty a riziko je nepoměrně větší než přínos.

### TECH-33 — Nejsou klíčové informace (ceník, katalog, technické parametry) dostupné jen v PDF?

**🟡 střední** · náprava: týdny · zvenčí

**Jak ověřit.** Projdi navigaci a hledej odkazy končící na .pdf. Screaming Frog: záložka Internal, filtr 'PDF'. U nalezených PDF ověř velikost (Googlebot stahuje do 64 MB) a zkontroluj, jestli stejná informace existuje i jako běžná stránka.

**Prošel, když.** Každá informace, na kterou mají chodit zákazníci z vyhledávání, existuje jako běžná HTML stránka. PDF je jen doplněk ke stažení.

**Pro klienta.** Ceník a produktovou dokumentaci máte jen jako PDF ke stažení. Vyhledávač PDF sice přečte, ale ve výsledcích je umisťuje hůř, nedá se z něj proklikat dál na web a na mobilu se čte špatně — a mobil je dnes většina návštěv. Klíčové informace patří na běžné stránky, PDF ať zůstane jako verze k vytištění. Je to obsahová práce na týdny, ale otevírá to zákazníkům celou produktovou část webu.

### TECH-34 — Načítá si Google vaši mapu webu a kdy naposledy?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → Indexování → Sitemapy. Zkontroluj: je sitemap vůbec odeslaná, stav 'Úspěch', datum posledního načtení a počet objevených adres. Rozklikni sitemap a přejdi na filtrovaný pohled na report Indexování. Totéž zkontroluj v Seznam Webmasteru, sekce Sitemapy.

**Prošel, když.** Sitemap je odeslaná, stav je Úspěch, datum posledního načtení není starší než pár dnů a počet objevených adres odpovídá skutečnému počtu stránek.

**Pro klienta.** Mapa webu buď není Googlu vůbec odeslaná, nebo si ji dlouho nenačetl. Přicházíte tím o jediný přehled, který umí odpovědět na otázku 'kolik ze stránek, které chceme mít ve vyhledávání, tam skutečně je'. Odeslání je otázka minut a doporučujeme totéž udělat i v Seznam Webmasteru.

### TECH-35 — Chodí na web návštěvy i na dotazy, které neobsahují název firmy?

**🟡 střední** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup. Search Console → Výkon → Výsledky vyhledávání → '+ Nový' → 'Dotaz' → 'Dotaz neobsahuje' → zadej název firmy (a jeho varianty). Porovnej celkové kliky s kliky po odečtení značkových dotazů. Nastav rozsah 'Posledních 12 měsíců' a sleduj trend. Export z rozhraní je omezený na 1 000 řádků.

**Prošel, když.** Podstatná část kliknutí přichází na dotazy bez názvu firmy a u každé hlavní služby existuje aspoň nějaký dotaz, na který se web zobrazuje.

**Pro klienta.** Do vyhledávání chodí lidé, kteří už znají vaše jméno — hledají vás, ne vaši službu. To jsou zákazníci, které byste získali i bez webu. Kolik lidí vás našlo, protože hledali službu a vy jste jim vyskočili? Toto číslo je v reportu uvedené zvlášť a je to jediné poctivé měřítko toho, jestli vám web přivádí nové zákazníky, nebo jen obsluhuje ty stávající.

### TECH-36 — Má firma založený účet v Seznam Webmasteru a ví, co jí Seznam přináší?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** Vyžaduje přístup (ověření vlastnictví webu). Zkontroluj na search.seznam.cz/wmt, jestli je web přidaný a ověřený. Pokud ano, projdi sekci Indexace (stav u Seznamu) a Sitemapy. Pokud ne, je to samo o sobě nález. Doplň dotazem do analytiky klienta, kolik návštěv a poptávek přichází ze Seznamu — Statcounter měří podíl vyhledávání, ne podíl poptávek, takže odhad z něj nedělej.

**Prošel, když.** Web je v Seznam Webmasteru ověřený, má tam odeslanou sitemap a v analytice se dá rozlišit, kolik návštěv přichází ze Seznamu.

**Pro klienta.** Seznam.cz je v Česku druhý nejpoužívanější vyhledávač a u regionálních a řemeslných firem z něj chodí často výrazně víc poptávek, než napovídá jeho celkový podíl. Vy do něj přitom nevidíte — jeho bezplatný nástroj pro majitele webů nemáte založený, což je případ většiny českých firem. Založení je otázka minut a je to jediný způsob, jak zjistit, jestli vás Seznam vůbec zná. Bonus: Seznam na rozdíl od Googlu podporuje okamžité hlášení změn (IndexNow), takže se u něj nový obsah propíše rychleji.

### TECH-37 — Vejde se HTML kód prodejních stránek do 2 MB, které si vyhledávač stáhne?

**⚪ nízká** · náprava: dny · zvenčí

**Jak ověřit.** curl -s URL | wc -c u homepage a u nejdelších prodejních stránek. Výsledek je v bajtech, limit je 2 097 152. Pokud je stránka blízko limitu, zkontroluj, co je na jejím konci — nejčastěji patička s kontakty a blok strukturovaných dat.

**Prošel, když.** HTML každé prodejní stránky je pod 2 MB. U webů z page builderů s vloženými styly a obrázky přímo v kódu je typický nález 400 kB až 1,5 MB — to je v pořádku, ale hlídej trend.

**Pro klienta.** Vyhledávač si z jedné stránky stáhne nejvýš 2 MB kódu a co je za tím, jednoduše neexistuje. Vaše stránky se k limitu blíží kvůli tomu, jak je web postavený — obrázky a styly jsou vložené přímo do stránky místo do samostatných souborů. Pokud přes limit přepadne konec stránky s kontakty, přijdete o ně ve vyhledávání.

### TECH-38 — Jsou adresy stránek čitelné a bez zbytečných parametrů?

**⚪ nízká** · náprava: týdny · zvenčí

**Jak ověřit.** Projdi seznam URL z crawlu nebo ze sitemap a hledej: číselná ID místo slov (/index.php?id=42), podtržítka místo pomlček, velká písmena, identifikátory relace, diakritiku (musí být procentuálně zakódovaná), parametry řazení a filtrů, které nemění obsah.

**Prošel, když.** Adresy obsahují čitelná slova malými písmeny, oddělená pomlčkami, bez diakritiky a bez parametrů, které nemění obsah stránky.

**Pro klienta.** Adresy vašich stránek jsou pro člověka nečitelné. Snižuje to počet kliknutí ve výsledcích vyhledávání a znemožňuje rychlou orientaci ve statistikách návštěvnosti. Zároveň platí: měnit adresy na běžícím webu je drahé a riskantní, protože se musí zařídit přesměrování všech starých. Doporučujeme to řešit až při nejbližším předělání webu, ne jako samostatný zásah.

### TECH-39 — Má web na úvodní stránce strojově čitelnou vizitku firmy (Organization) se skutečnými údaji?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Pusť homepage přes search.google.com/test/rich-results a přes validator.schema.org. V Rich Results Testu čti sekci 'Zjištěné položky'; ve Schema Markup Validatoru rozklikni objekt Organization a projdi vlastnosti. Očekávané pro českou B2B firmu: name, legalName, url, logo, description, address (se streetAddress, addressLocality, postalCode, addressCountry), telephone, email, sameAs (LinkedIn a další profily), vatID (DIČ), taxID (IČO). Ověř, že údaje odpovídají skutečnosti a rejstříku.

**Prošel, když.** Na homepage nebo na stránce o firmě je JSON-LD s Organization, obsahuje název, adresu, telefon, e-mail, logo, IČO a DIČ a všechny hodnoty jsou pravdivé.

**Pro klienta.** Web nemá strojově čitelnou vizitku firmy. Je to nejlevnější způsob, jak vyhledávači sdělit, kdo jste — název, adresa, telefon, IČO, logo, profily na sociálních sítích — a mít ve výsledcích a v bočním panelu konzistentní identitu. Buďme upřímní: na pozice ve vyhledávání to přímý vliv nemá, působí to na značku a důvěru. Nasazení je práce na pár hodin.

### TECH-40 — Má web u vícestupňové struktury drobečkovou navigaci označenou pro vyhledávač (BreadcrumbList)?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Pusť podstránku druhé úrovně (například konkrétní službu nebo case study) přes search.google.com/test/rich-results a v 'Zjištěné položky' hledej Breadcrumbs. Zkontroluj, že seznam má aspoň dvě položky ListItem, každou s position, name a item (u poslední je item volitelný) a že cesta odpovídá skutečné struktuře adres.

**Prošel, když.** Stránky druhé a hlubší úrovně mají platnou drobečkovou navigaci s minimálně dvěma položkami a Rich Results Test u nich hlásí Breadcrumbs bez chyb.

**Pro klienta.** Ve výsledcích vyhledávání se u vašich stránek zobrazuje holá adresa místo čitelné cesty typu 'Domů › Služby › Revize elektro'. Cesta zvyšuje počet kliknutí a zároveň lidem hned říká, kde na webu jsou. Je to jedno z mála technických označení, jehož efekt je ve výsledcích skutečně vidět. Nasazení je práce na pár hodin ve šabloně webu.

### TECH-41 — Je na webu označení FAQ nebo návodů (FAQPage, HowTo) a je rozhodnuto, co s ním?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -s URL | grep -i -E 'FAQPage|HowTo' na stránkách s častými dotazy a návody. Ověř také, jestli klient tuto věc nasazoval s očekáváním rozšířeného výsledku u Googlu — ptej se přímo.

**Prošel, když.** Označení je buď na webu ponechané s vědomím, že u Googlu už nic nepřináší (a u Seznamu ano), nebo tam není a nikdo od něj nic neočekává. Neprošel = klient si myslí, že mu to u Googlu přináší větší výsledek.

**Pro klienta.** FAQ sekci jste pravděpodobně nasazovali kvůli většímu výsledku ve vyhledávání. Google tuto funkci 7. 5. 2026 ukončil a v červnu 2026 k ní smazal i dokumentaci — u Googlu už z toho nemáte nic. Seznam ale FAQ snippety podle své nápovědy stále rozlišuje, takže na českém webu má smysl označení ponechat. Jen ho nikdo nesmí prezentovat jako přínos pro Google.

### TECH-42 — Je rozhodnuto, jestli smí umělá inteligence používat obsah webu, a odpovídá tomu nastavení?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** V robots.txt hledej bloky pro Google-Extended, GoogleOther, Google-CloudVertexBot, Seznam-Extended, AI, MachineLearning. Ve zdroji stránek hledej nosnippet, data-nosnippet, max-snippet a meta name="seznambot" content="nosnippet". Google pro AI funkce nevyžaduje žádný nový soubor — llms.txt Vyhledávání nepoužívá, jeho přítomnost je bez efektu.

**Prošel, když.** Nastavení odpovídá vědomému rozhodnutí klienta. Neprošel = na webu je plošné nosnippet nebo blok, o kterém klient neví, nebo naopak klient chce obsah chránit a nic nastavené není.

**Pro klienta.** Jestli váš obsah smí používat umělá inteligence v odpovědích a při učení, je vaše rozhodnutí — ale mělo by být vědomé, ne náhodné. Zablokování robota pro učení nemá vliv na vaše pozice ve vyhledávání. Plošný zákaz zobrazování úryvků naopak sníží počet lidí, kteří na váš web kliknou. Připravili jsme obě varianty, potřebujeme od vás rozhodnutí — technicky je to pak otázka minut.

---

## 2. Rychlost a Core Web Vitals

**Čas na oblast:** 90–120 minut na jeden web v rozsahu homepage + 3–5 klíčových šablon (služba, detail produktu, kontakt, blog). Rozpad: ~20 min curl a rozbor staženého HTML, ~20 min PageSpeed Insights a CrUX Vis pro mobil i desktop, ~30 min Chrome DevTools (LCP prvek, CLS viníci, měření INP na třech reálných interakcích), ~20 min inventura obrázků a písem, ~15 min opakovaná měření a zápis čísel s datem a lokalitou. Poprvé u neznámé platformy (jiný CMS, vlastní řešení) počítejte 150 minut. Bez přístupu do Search Console odečtěte 10 minut, ale bod VYK-07 zůstane nedokončený.

### RYCH-01 — Vidí návštěvník na mobilu hlavní obsah stránky do 2,5 sekundy (LCP)?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** PageSpeed Insights, karta „Mobil", sekce s terénními daty, řádek „Největší vykreslení obsahu (LCP)". Odečíst číslo u 75. percentilu a barvu pruhu. Zapsat i procenta v pásmech good / needs improvement / poor.

**Prošel, když.** LCP ≤ 2,5 s (zelená). 2,5–4,0 s = potřebuje zlepšit, > 4,0 s = neprošlo.

**Pro klienta.** Čtvrtina lidí, kteří k vám přijdou z mobilu, kouká déle než X sekund na prázdnou nebo poloprázdnou stránku, než se objeví hlavní obrázek a nadpis. Část z nich do té doby odejde a nikdy se nedozví, co nabízíte — takže za návštěvu z reklamy zaplatíte, ale poptávku z ní nedostanete. Doložené případy z jiných firem: zrychlení tohoto ukazatele o třetinu přineslo o 8 % vyšší prodeje.

### RYCH-02 — Odpoví server na první požadavek do 0,8 sekundy (TTFB)?

**🔴 kritická** · náprava: týdny · zvenčí

**Jak ověřit.** Změřit z České republiky (vlastní stroj v ČR nebo webpagetest.org s lokalitou v Evropě): curl -sS -o /dev/null -L -w 'ttfb=%{time_starttransfer}\n' https://www.firma.cz/ — spustit 5× a vzít medián. Ověřit i proti terénním datům: v PSI je TTFB uveden pod rozbaleným LCP, přesnější rozpad dá CrUX API (metrika experimental_time_to_first_byte).

**Prošel, když.** TTFB ≤ 0,8 s měřeno z ČR. 0,8–1,8 s = potřebuje zlepšit, > 1,8 s = neprošlo.

**Pro klienta.** Server začne odpovídat až za X sekund — a teprve pak se začne cokoli načítat. Dokud je tohle číslo vysoké, nepomůže žádná optimalizace obrázků ani kódu, protože všechno ostatní na server jen čeká. Tohle je jediná část, kterou nespraví váš webař v kódu: znamená to změnu hostingu, předřazení CDN nebo zrychlení databáze, a je to jiná rozpočtová kategorie než ostatní body. Měřeno z ČR dne …

### RYCH-03 — Má hlavní obrázek v úvodu stránky prioritu, nebo se načítá jako poslední?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** V DevTools zjistit LCP prvek (viz VYK-15), najít ho ve staženém HTML a zkontrolovat dva atributy: nesmí mít loading="lazy" a měl by mít fetchpriority="high" (u obrázků v CSS ekvivalentně <link rel="preload" as="image" fetchpriority="high"> v hlavičce). Rychlý přehled: grep -o 'loading="lazy"' /tmp/home.html | wc -l a porovnat s prvními obrázky v dokumentu.

**Prošel, když.** LCP obrázek nemá loading="lazy" a má fetchpriority="high" nebo preload.

**Pro klienta.** Hlavnímu obrázku v úvodu stránky jste omylem řekli, ať se načte až později — přitom je to právě ten, na který návštěvník čeká. Google tímto jediným nastavením zrychlil zobrazení svých stránek z 2,6 na 1,9 sekundy. Je to úprava jednoho atributu v šabloně, tedy práce na minuty, a je to nejlevnější zrychlení v celém auditu. Pozor: pokud tam zůstane pokyn „načti až později", nepomůže ani nastavení priority.

### RYCH-04 — Není v HTML zabalený celý katalog nebo obsah CMS jako blok dat?

**🔴 kritická** · náprava: týdny · zvenčí

**Jak ověřit.** Změřit velikost HTML (curl -sS -o /dev/null -w '%{size_download}\n' https://www.firma.cz/) a porovnat s počtem obrázků a délkou viditelného textu. Nepoměr ověřit: stáhnout HTML a spočítat, kolik bajtů zabírají inline <script> bloky (např. python3 -c "import re,sys;h=open('/tmp/home.html').read();print(sum(len(m) for m in re.findall(r'<script(?![^>]*src)[^>]*>(.*?)</script>',h,re.S)))").

**Prošel, když.** HTML do ~100 kB a inline skripty tvoří méně než 20 % dokumentu.

**Pro klienta.** V každé stránce se přenáší celý balík dat z databáze — u některých webů tvoří i 98 % dokumentu. Znamená to, že se při každém zobrazení stránky stahuje a zpracovává znovu, nedá se to uložit do zásoby a telefon to musí celé rozebrat, než začne reagovat na klepnutí. Tohle není drobná oprava: jde o změnu způsobu, jakým se data na web dostávají, a patří to do samostatné zakázky.

### RYCH-05 — Existují pro tento web vůbec terénní data od skutečných uživatelů, a jsou za konkrétní stránku, nebo jen za celou doménu?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevřít pagespeed.web.dev, vložit přesnou URL (včetně https:// a www, pokud je web na www), spustit. Nahoře v sekci „Zjistěte, jaké zkušenosti mají skuteční uživatelé" si přečíst nadpis: buď hlásí data pro danou URL, nebo větu, že data pro stránku nejsou k dispozici a zobrazují se data pro celý zdroj (origin). Zopakovat pro každou testovanou podstránku. Pro jistotu ověřit i na cruxvis.withgoogle.com přepínačem Origin / URL.

**Prošel, když.** PSI zobrazuje URL-level data pro homepage i pro alespoň jednu klíčovou podstránku; auditor si u každého čísla poznamenal, zda je URL-level, nebo origin-level.

**Pro klienta.** Google sbírá rychlost jen z návštěv v prohlížeči Chrome na počítači a Androidu, a jen když jich je dost. U vašeho webu jich tolik není, takže čísla, která vidíte, jsou průměr za celou doménu — ne za tu stránku, na které vám záleží. Navíc v nich úplně chybí návštěvníci z iPhonu, kterých u firemních webů bývá i třetina. Doporučujeme jednorázově nasadit vlastní měření rychlosti (knihovna web-vitals, práce na pár hodin), abyste viděli skutečná čísla za své stránky a všechna zařízení.

### RYCH-06 — Reagují ovládací prvky (menu, filtry, formulář) na mobilu do 200 ms (INP)?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** PageSpeed Insights, karta „Mobil", řádek „Interakce k dalšímu vykreslení (INP)" v terénních datech. Pokud řádek chybí, nemá web dost naměřených interakcí — pak se opírat o bod VYK-28 (měření v DevTools).

**Prošel, když.** INP ≤ 200 ms (zelená). 200–500 ms = potřebuje zlepšit, > 500 ms = neprošlo.

**Pro klienta.** Když návštěvník na telefonu klepne na menu nebo na tlačítko ve formuláři, trvá X milisekund, než se něco stane. Nad půl sekundy to lidé vnímají jako „nefunguje to" a klepnou znovu — a pak vám do schránky přijde stejná poptávka dvakrát, nebo žádná. Skoro vždy za to mohou měřicí a marketingové skripty od třetích stran; viz bod o inventuře skriptů.

### RYCH-07 — Zůstává obsah při načítání na místě, nebo pod rukama uskakuje (CLS)?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** PageSpeed Insights, karta „Mobil", řádek „Kumulativní posun rozvržení (CLS)" v terénních datech. Doplnit vizuálním důkazem: načíst homepage v anonymním okně, v DevTools zapnout režim mobilu (Ctrl+Shift+M) a nahrát prvních 5 sekund v panelu Performance — filmstrip a insight „Layout shift culprits" ukáže viníka.

**Prošel, když.** CLS ≤ 0,1 (zelená). 0,1–0,25 = potřebuje zlepšit, > 0,25 = neprošlo.

**Pro klienta.** Při načítání se obsah stránky posouvá — text uskočí dolů, jakmile doskočí obrázek nebo cookie lišta. Lidé kvůli tomu klikají na něco jiného, než chtěli, a na mobilu je to nejčastější důvod, proč někdo omylem zavře stránku místo odeslání formuláře. Pozn.: tento ukazatel měří jen Chrome, takže z iPhonů žádná data nemáte.

### RYCH-08 — Jsou rozbité všechny šablony webu, nebo jen některé?

**🟠 vysoká** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Google Search Console → levé menu → Vylepšení → Core Web Vitals → Mobil → tlačítko „Otevřít přehled". Sloupec „Problém" ukazuje typ (např. LCP > 4 s), po rozkliknutí je seznam skupin URL s podobným zážitkem a příklady stránek. Bez přístupu do GSC nahradit dávkovým měřením 20–30 URL přes PageSpeed Insights API a porovnat výsledky po typech stránek.

**Prošel, když.** Report nehlásí žádné URL ve stavu „Nedostatečné" nebo „Špatné", případně je jasně určeno, které šablony jsou rozbité a kolik URL se jich týká.

**Pro klienta.** Rychlost se neopravuje po stránkách, ale po šablonách — když je pomalý detail produktu, je pomalých rovnou všech 400 detailů. Vyžádejte si čtenářský přístup do Search Console; ukáže, které typy stránek jsou rozbité, a tím se dá odhadnout cena opravy. Počítejte s tím, že po opravě trvá Googlu 28 dní, než změnu potvrdí — nečekejte výsledek za týden.

### RYCH-09 — Běží web na moderním protokolu HTTP/2 nebo HTTP/3, nebo na dvacet let starém HTTP/1.1?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** curl -sS -o /dev/null -L -w 'http=%{http_version}\n' https://www.firma.cz/ (výsledek 2 nebo 3 je v pořádku, 1.1 nikoli) a curl -sSI https://www.firma.cz/ | grep -i alt-svc pro zjištění podpory HTTP/3.

**Prošel, když.** Odpověď přichází přes HTTP/2 nebo HTTP/3.

**Pro klienta.** Váš web komunikuje s prohlížečem zastaralým způsobem, ve kterém se soubory stahují po malých frontách místo naráz. Typická stránka jich potřebuje přes sedmdesát, takže se návštěvník na mobilu načítání dočká výrazně později. U běžného hostingu je to přepnutí jedné volby nebo předřazení CDN — u banky nebo telco zásah do infrastruktury. Ověří se to za deset sekund a nedá se to zpochybnit.

### RYCH-10 — Posílá server texty a kód komprimovaně, a moderním algoritmem?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI --compressed https://www.firma.cz/ | grep -i content-encoding — očekáváme br (brotli), přijatelné je gzip. Hodnoty deflate nebo chybějící hlavička znamenají problém. Zkontrolovat i hlavní CSS a JS soubor stejným způsobem.

**Prošel, když.** HTML, CSS, JS, SVG i JSON se posílají s content-encoding: br, nebo alespoň gzip.

**Pro klienta.** Texty a kód se z vašeho serveru posílají nezabalené (nebo zabalené zastaralou metodou), takže se přenáší několikanásobně víc dat, než je nutné. Zapnutí moderní komprese je nastavení na serveru na pár hodin, nic se tím vizuálně nemění a na mobilním připojení je rozdíl okamžitě znát.

### RYCH-11 — Je návrat tlačítkem zpět okamžitý, nebo se stránka načítá celá znovu?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://www.firma.cz/ | grep -i cache-control — hledat no-store. Dále v HTML hledat unload handler: grep -o 'onunload' a addEventListener('unload'. Definitivní test: Chrome DevTools → Application → Back/forward cache → tlačítko „Test back/forward cache"; nástroj vypíše konkrétní důvod, proč stránka do cache nešla.

**Prošel, když.** HTML nemá Cache-Control: no-store, nemá unload handler a test v DevTools hlásí, že stránka byla obnovena z bfcache.

**Pro klienta.** Každá pátá návštěva na mobilu použije tlačítko zpět. U vás se v tu chvíli celá stránka načítá znovu od nuly, přestože by se mohla objevit okamžitě — brání tomu jediné nastavení, které serveru říká „nic si nepamatuj". Patří jen na stránky s citlivým obsahem (přihlášený účet, košík), ne na homepage a katalog. Změna jedné hlavičky, efekt v řádu minut práce.

### RYCH-12 — Na kolik souborů se styly a skripty čeká stránka, než ukáže první písmeno?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Stáhnout HTML (curl -sSL https://www.firma.cz/ > /tmp/home.html), vyříznout hlavičku po </head> a spočítat: počet <link rel="stylesheet"> a počet <script src=...> BEZ atributu async i defer. Ověřit dopad: v PSI porovnat FCP a TTFB v terénních datech — jejich rozdíl je přesně čas ztracený blokujícími soubory. V DevTools totéž ukáže Performance → insight „Render blocking requests".

**Prošel, když.** Nejvýše 2 stylesheety a 0 synchronních skriptů v hlavičce; rozdíl FCP − TTFB pod 0,5 s.

**Pro klienta.** Než se návštěvníkovi objeví první písmeno, čeká váš web na stažení X souborů se styly a Y skriptů v hlavičce. Dokud nedorazí všechny, zůstává obrazovka prázdná. Sloučení stylů do jednoho souboru a odložení skriptů, které nejsou potřeba k zobrazení, je běžná práce na jeden až dva dny a je na ní vidět okamžitý efekt. Vysoký počet je zároveň signál, že se web roky lepil bez údržby.

### RYCH-13 — Je hlavní obrázek v úvodu stránky vložený přímo v HTML jako obrázek, nebo je schovaný v CSS jako pozadí?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Chrome DevTools → Performance → tlačítko reload (nahrát načtení stránky) → v postranním panelu Insights otevřít „LCP by phase" nebo „LCP request discovery"; nástroj pojmenuje konkrétní LCP prvek. Pokud je to <div> s background-image, jde o nález. Alternativa: rozšíření Web Vitals → Console → element LCP.

**Prošel, když.** LCP prvkem je <img> přítomný přímo v HTML dokumentu (ne background-image, ne obrázek vkládaný JavaScriptem).

**Pro klienta.** Hlavní obrázek v úvodu stránky je vložený jako pozadí přes styly. Prohlížeč se o něm proto dozví až poté, co stáhne a zpracuje soubory se styly — začne ho stahovat pozdě a návštěvník na něj zbytečně dlouho čeká. Řešení je vložit ho jako běžný obrázek, případně dát prohlížeči předem pokyn, ať ho stahuje hned. Práce na hodiny, změna není vidět, zrychlení ano.

### RYCH-14 — Mají obrázky v HTML uvedené rozměry, aby si prohlížeč předem rezervoval místo?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Ze staženého HTML spočítat celkový počet obrázků a kolik z nich má oba rozměry: grep -o '<img' /tmp/home.html | wc -l a grep -o '<img[^>]*width=[^>]*height=' /tmp/home.html | wc -l. Alternativně přijatelné je aspect-ratio v CSS — ověřit v DevTools na konkrétním obrázku (Computed → aspect-ratio).

**Prošel, když.** Alespoň 95 % obrázků má width i height (nebo má jejich kontejner nastavený aspect-ratio či min-height).

**Pro klienta.** U obrázků není řečeno, jak jsou velké, takže si na ně prohlížeč nedokáže předem nechat místo — a když doskočí, odsune text a tlačítka dolů. Tohle je hlavní příčina toho, že lidem na mobilu uskakuje obsah pod prstem. Doplnění rozměrů do šablony je rutinní práce a řeší dva problémy najednou: uskakování i objem přenesených dat.

### RYCH-15 — Jsou fotky v moderním formátu a loga s ikonami ve vektorech, nebo se posílají staré JPG a PNG?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Ze staženého HTML spočítat výskyty přípon: for e in jpg jpeg png webp avif svg; do echo -n "$e "; grep -o -i "\.$e" /tmp/home.html | wc -l; done. Doplnit testem, zda CDN podává moderní formát podle prohlížeče: curl -sSI -H 'Accept: image/avif,image/webp,*/*' <url-obrazku> | grep -i content-type. U největšího obrázku ověřit i skutečnou velikost v kB (DevTools → Network → seřadit podle Size).

**Prošel, když.** Fotografie se podávají ve WebP nebo AVIF (s náhradou pro staré prohlížeče); loga, ikony a diagramy jsou v SVG; žádný jednotlivý obrázek nad ~200 kB.

**Pro klienta.** Fotky na webu jsou ve formátech starých dvacet let a přenáší se v nich zbytečně dvakrát až třikrát víc dat, než je dnes potřeba. Převod nic nezmění na vzhledu a dá se doložit v kilobajtech před a po. Pozor na jednu past: u některých platforem (například Webflow) se převod nedělá sám — je to jednorázová ruční operace, kterou je potřeba objednat a zaplatit; patří to do nabídky, ne až na fakturu.

### RYCH-16 — Stahuje mobil menší variantu obrázku, nebo tu největší, i když ji zobrazí na třetinu šířky?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** V HTML najít obrázky se srcset a zkontrolovat u nich sizes: grep -o 'sizes="[^"]*"' /tmp/home.html | sort | uniq -c. Paušální sizes="100vw" u obrázků v mřížce je nález. Důkaz: DevTools v režimu mobilu → Network → filtr Img → sloupec Size a u vybraného obrázku porovnat „Intrinsic size" (stažené rozlišení) s „Rendered size" (zobrazené rozlišení) na kartě Elements → Properties.

**Prošel, když.** Každý obrázek se srcset má sizes odpovídající skutečné šířce v layoutu; stažené rozlišení nepřesahuje zobrazené o víc než dvojnásobek.

**Pro klienta.** Váš web má připravené zmenšeniny obrázků, ale neříká prohlížeči, jak velký obrázek na stránce bude — tak stahuje ten největší. Návštěvník na telefonu tak stahuje obrázek o šířce 1600 bodů, aby ho viděl na 380 bodech. Rozdíl bývá tři až šestkrát víc dat bez jakékoli změny vzhledu. Oprava je nastavení v šabloně, u Webflow ruční pole u obrázku.

### RYCH-17 — Odsune cookie lišta při načtení obsah stránky?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Anonymní okno, mobilní rozlišení (DevTools Ctrl+Shift+M), načíst homepage a sledovat prvních 3–5 sekund; ideálně nahrát v Performance a projít filmstrip snímek po snímku. Potvrdit v Insights → „Layout shift culprits", zda je viníkem <body> nebo hlavní kontejner. V HTML dohledat řešení: grep -i -E 'cookiebot|onetrust|cookie-script|cookieconsent' /tmp/home.html.

**Prošel, když.** Lišta se zobrazí jako překryv (position: fixed / overlay) a obsah pod ní se nikam neposune; CLS insight neuvádí lištu mezi viníky.

**Pro klienta.** Cookie lišta se objeví až po načtení a odsune celou stránku dolů — přesně ve chvíli, kdy už návštěvník míří prstem na tlačítko. Lištu zrušit nelze, v Česku je od roku 2022 povinná a úřad za její absenci reálně pokutuje. Řešení je čistě technické: lišta se má zobrazovat jako překryv přes obsah, ne se do něj vkládat. Práce na pár hodin.

### RYCH-18 — Objeví se text hned, nebo návštěvník kouká na prázdné místo, dokud se nestáhne písmo?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** V hlavičce HTML hledat webfont.js nebo WebFont.load (JavaScriptový zavaděč písem — render-blocking nález). Otevřít URL fontového CSS z hlavičky a zkontrolovat, zda každý @font-face obsahuje font-display: swap (nebo optional). U Google Fonts to znamená parametr &display=swap v URL. Doplnit: ověřit přítomnost <link rel="preconnect"> na fonts.googleapis.com a fonts.gstatic.com (crossorigin).

**Prošel, když.** Písma se načítají obyčejným <link rel="stylesheet"> nebo ze self-hostingu, každý @font-face má font-display: swap nebo optional, a na cizí doménu s písmy je předřazený preconnect.

**Pro klienta.** Po dobu až tří sekund je na stránce text neviditelný — čeká se, až se stáhne písmo. Návštěvník v té době vidí prázdnou stránku, i když je obsah dávno připravený. Stačí prohlížeči povolit, aby text zobrazil hned náhradním písmem a to správné doplnil, jakmile dorazí. Bonus: přesun písem na váš vlastní server zároveň odstraňuje právní riziko předávání IP adres návštěvníků do USA, které v Německu skončilo soudní pokutou.

### RYCH-19 — Kolik cizích služeb a měřicích skriptů se na stránce spouští a jsou blokované do udělení souhlasu?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Spočítat unikátní cizí domény v HTML: grep -oE 'https?://[a-zA-Z0-9.-]+' /tmp/home.html | sed 's|https\?://||' | sort -u | grep -v 'firma\.cz' | wc -l. Doplnit z DevTools → Network → sloupec Domain, seřadit a spočítat požadavky na cizí domény. Ověřit v anonymním okně, zda se skripty spouštějí ještě před kliknutím na souhlas.

**Prošel, když.** Do 8 cizích domén; žádný marketingový ani analytický skript se nespouští před udělením souhlasu; chat a heatmapa se načítají až po interakci.

**Pro klienta.** Na vašem webu se spouští X cizích služeb — měření, remarketing, chat, heatmapy. Každá z nich zdržuje reakci stránky na klepnutí a část z nich pochází z kampaní, které skončily před dvěma lety: platíte rychlostí za data, která nikdo nečte. Udělejte inventuru (kdo skript objednal, kdo výstupy čte) a zbytek zrušte. Je to jediné doporučení v auditu, kde se něčeho zbavíte bez ztráty funkce — a blokování do souhlasu je v ČR stejně povinné.

### RYCH-20 — Kolik dat celkem stáhne návštěvník na mobilu při první návštěvě?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** DevTools → Network → zaškrtnout Disable cache → režim mobilu → reload → dole odečíst „transferred" a počet requestů. Rozpad podle typu dá filtr (Doc / CSS / JS / Img / Font) se sečtením sloupce. Rychlá kontrola samotného HTML: curl -sS -o /dev/null -w 'html=%{size_download}\n' https://www.firma.cz/.

**Prošel, když.** Firemní web (ne e-shop) do ~1,1 MB celkem na mobilu, z toho JavaScript do ~300 kB a HTML do ~100 kB; do 60 požadavků.

**Pro klienta.** Vaše homepage váží X MB, což je víc než u 60 % webů na světě — a přitom prodáváte poptávku, ne fotogalerii. Na mobilním připojení mimo město to znamená několik sekund čekání navíc. Dejte webu pevný rozpočet (kolik smí vážit) a držte ho při každé další úpravě; jinak stránky rostou samy o zhruba 8 % ročně.

### RYCH-21 — Jak dlouho trvá reakce na tři konkrétní interakce — otevření menu, použití filtru a odeslání formuláře?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Chrome v anonymním okně (bez rozšíření), DevTools → Performance → zapnout CPU throttling 4× a Network Slow 4G → tlačítko Record → provést jednu interakci → Stop. V Insights najít „INP by phase" (input delay / processing / presentation delay) a ve Summary dohledat, který skript blokoval hlavní vlákno. Zopakovat pro každou interakci 3×, zapsat medián. Doplnit rozšířením Web Vitals (režim console logging), které rovnou hlásí INP a viníka.

**Prošel, když.** Každá měřená interakce má INP ≤ 200 ms; žádná dlouhá úloha nad 200 ms způsobená skriptem třetí strany.

**Pro klienta.** Změřili jsme tři věci, které u vás návštěvník opravdu dělá: otevře menu, použije filtr a odešle formulář. Odezva je X ms — nad 200 ms to lidé vnímají jako zadrhnutí, nad 500 ms jako poruchu. Pozor: tohle číslo neuvidíte v žádném běžném testu rychlosti, protože ho automatické nástroje neumí změřit — musí se odklikat ručně. Viníkem bývají cizí skripty, ne váš web.

### RYCH-22 — Je každé číslo v reportu podložené opakovaným měřením s uvedeným datem, lokalitou a typem zařízení?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Kontrola vlastního výstupu před odesláním: každou laboratorní metriku měřit 3–5× (PSI opakovaně nebo lighthouse CLI se stejným nastavením), uvádět medián a rozptyl. U každého čísla musí být: datum, odkud se měřilo, mobil/desktop, a zda jde o terénní data (URL-level / origin-level), nebo o laboratorní běh a v jaké verzi Lighthouse.

**Prošel, když.** Žádné číslo v reportu není z jediného běhu; u všech je uvedeno datum, lokalita, zařízení a zdroj dat; skóre Lighthouse je uvedeno jako diagnostika, ne jako cíl.

**Pro klienta.** V reportu důsledně oddělte dvě otázky: (1) Procházíme hodnocení Google? — odpověď dávají jen data od skutečných návštěvníků. (2) Proč ne a co s tím? — na to odpovídají testovací nástroje. Klientovi rovnou řekněte, že barevné skóre 0–100 není totéž co hodnocení Googlu: web se skóre 62 může projít a web se skóre 95 propadnout, protože do skóre vůbec nevstupuje rychlost reakce na klepnutí. Jedno číslo z jednoho běhu je při reklamaci neobhajitelné.

### RYCH-23 — Prochází web hodnocení Core Web Vitals i na počítači?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** V PageSpeed Insights přepnout nahoře na kartu „Počítač" a odečíst LCP, INP a CLS ze stejné sekce terénních dat. Zapsat verdikt „Prošlo / Neprošlo" z odznaku Core Web Vitals Assessment zvlášť pro mobil a zvlášť pro počítač.

**Prošel, když.** Všechny tři metriky v zeleném pásmu, odznak hlásí „Prošlo".

**Pro klienta.** U B2B webu chodí velká část poptávek z počítače v pracovní době, takže desktop nelze ignorovat, i když bývá v lepším stavu než mobil. Uveďte obě čísla vedle sebe — když je desktop v pořádku a mobil ne, je zřejmé, že problém není v serveru, ale ve velikosti dat a v tom, co všechno se na telefonu musí zpracovat.

### RYCH-24 — Zhoršila se rychlost až v poslední době, nebo je špatná dlouhodobě?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** cruxvis.withgoogle.com, vložit origin (přesně https://www.firma.cz), zvolit metriku LCP a zařízení Phone. Graf ukazuje 40 týdnů historie, nový bod každé pondělí. Hledat schod nahoru a porovnat jeho datum s tím, co klient v té době na webu měnil (redesign, nová kampaň, nový chat).

**Prošel, když.** Křivka 75. percentilu je plochá nebo klesá; v posledních 12 týdnech není skokové zhoršení bez vysvětlení.

**Pro klienta.** Umíme ukázat, kdy přesně se web zpomalil. Pokud to sedí na datum poslední úpravy nebo na nasazení nového nástroje, je oprava obvykle levná — stačí vrátit nebo doladit jednu věc. Pokud je web pomalý roky, jde o stavbu, ne o poslední úpravu, a oprava je větší zakázka.

### RYCH-25 — Kolik přesměrování projde návštěvník, než se dostane na cílovou stránku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sS -o /dev/null -L -w 'redirects=%{num_redirects}\n' http://firma.cz/ — a totéž pro https://firma.cz/, https://www.firma.cz/ a pro URL z aktivní reklamy nebo z e-mailového podpisu. Řetězec vypsat detailně: curl -sSI -L http://firma.cz/ | grep -i -E '^HTTP|^location'.

**Prošel, když.** Maximálně 1 přesměrování z libovolné vstupní varianty domény; na odkazech z reklam a e-mailů 0.

**Pro klienta.** Než se návštěvníkovi otevře vaše stránka, prohlížeč ji dvakrát přesměruje na jinou adresu — a každý ten skok stojí čas, za který ještě nic nevidí. Typicky je to pozůstatek po přejmenování firmy nebo po přechodu na https. Zkrácení na jeden skok je práce na pár hodin a výsledek je hned měřitelný. Zároveň zkontrolujte, že odkazy v Google Ads a v e-mailových podpisech míří rovnou na finální adresu.

### RYCH-26 — Ukládají se obrázky, styly a skripty návštěvníkovi do zásoby na dost dlouho?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ze staženého HTML vzít URL hlavního CSS, hlavního JS a jednoho obrázku a na každé spustit curl -sSI <url> | grep -i cache-control. Očekáváme max-age v řádu měsíců a ideálně immutable u souborů s otiskem verze v názvu.

**Prošel, když.** Statické soubory mají max-age alespoň 30 dní (2592000); soubory s verzí v názvu mají max-age=31536000, immutable.

**Pro klienta.** Návštěvník, který se na web vrátí za týden, dnes stahuje stejné obrázky a styly znovu, přestože je má v počítači. Nastavení delší doby uchování je práce na hodinu a zrychlí to každou druhou a další návštěvu — tedy přesně ty, které nejčastěji končí poptávkou.

### RYCH-27 — Ve které fázi se ztrácí nejvíc času — na serveru, při hledání obrázku, při jeho stahování, nebo při vykreslení?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** CrUX API (chromeuxreport.googleapis.com/v1/records:queryRecord, s API klíčem) vyžádat metriku largest_contentful_paint_image_* subparts pro origin a form_factor PHONE. Bez klíče alespoň laboratorní rozpad: DevTools → Performance → Insights → „LCP by phase" (TTFB / load delay / load duration / render delay).

**Prošel, když.** Rozpad zhruba odpovídá poměru TTFB ~40 %, prodleva před stažením < 10 %, stahování ~40 %, vykreslení < 10 %.

**Pro klienta.** Tenhle rozbor určuje, kam dát peníze: když je hlavní ztráta na serveru, jde o hosting; když se ztrácí čas hledáním obrázku, je to úprava šablony za pár hodin; když se ztrácí stahováním, je problém ve velikosti souboru. Bez tohoto rozpadu se optimalizuje naslepo.

### RYCH-28 — Je odložené načítání zapnuté jen u obrázků pod prvním viewportem, nebo plošně u všech?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Spočítat poměr: grep -o 'loading="lazy"' /tmp/home.html | wc -l proti celkovému počtu <img>. Poté v prohlížeči na mobilním rozlišení zjistit, které obrázky jsou vidět bez scrollování, a ověřit, že žádný z nich nemá loading="lazy".

**Prošel, když.** Žádný obrázek viditelný bez scrollování nemá loading="lazy"; obrázky pod ohybem ho naopak mají.

**Pro klienta.** Odložené načítání obrázků je dobrá věc — ale jen pro to, co návštěvník zatím nevidí. U vás je zapnuté i na obrázcích v úvodu stránky, takže si web sám zpomaluje to nejdůležitější. V měřeních má stránka s plošně zapnutým odkládáním zobrazení hlavního obsahu o zhruba 20 % pomalejší. U Webflow je toto nastavení výchozí, takže se to stane samo, pokud to nikdo nezmění.

### RYCH-29 — Kolik různých písem a řezů se stahuje a řeší se česká diakritika správně?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevřít URL Google Fonts CSS z hlavičky (nebo projít @font-face v hlavním CSS) a spočítat rodiny a řezy. U Google Fonts zkontrolovat, které subsety se stahují — česká diakritika (ě š č ř ž ů) je v latin-ext, ne v latin. V DevTools → Network → filtr Font sečíst skutečně stažené bajty při načtení homepage.

**Prošel, když.** Nejvýše 2 rodiny a 2–3 řezy; písma jsou subsetovaná nebo se stahuje jen latin + latin-ext; celková váha písem na mobilu do ~150 kB; pokud se používá preload, jsou předneseny oba potřebné soubory (latin i latin-ext).

**Pro klienta.** České háčky a čárky jsou v samostatném souboru s písmem, takže česká stránka stahuje na každý řez dva soubory místo jednoho — u běžného písma je to 2,5× víc dat než u anglického webu. Když se k tomu přidají tři rodiny a tři tloušťky, jde jen za písma přes půl megabajtu. Zredukujte počet řezů a nechte si písma připravit jen pro znaky, které skutečně používáte — cyrilici, řečtinu ani vietnamštinu váš web nepotřebuje.

### RYCH-30 — Není stránka poskládaná z tolika prvků, že jejich přepočítání zdržuje každou reakci?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** V DevTools → Console spustit document.querySelectorAll('body *').length. Alternativně Lighthouse (DevTools → Lighthouse → Mobile → Performance) a audit „Avoid an excessive DOM size", který ukazuje počet uzlů, maximální hloubku a největší počet potomků jednoho prvku.

**Prošel, když.** Pod ~800 prvků v <body>, hloubka vnoření do 32 úrovní, žádný prvek s více než 60 přímými potomky.

**Pro klienta.** Stránka je poskládaná z neúměrného počtu prvků (často proto, že se do jedné stránky vypisuje celý seznam produktů). Prohlížeč je musí při každé změně přepočítat, což zpomaluje reakci na klepnutí, hlavně na starších telefonech. Řešení bývá stránkování nebo dočítání obsahu po částech.

### RYCH-31 — Používají animace vlastnosti, které nutí prohlížeč přepočítávat celou stránku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** V hlavním CSS hledat přechody a klíčové snímky cílící na top, left, width, height nebo box-shadow: grep -o -E 'transition:[^;]*(top|left|width|height|box-shadow)' u staženého CSS. Potvrdit v DevTools → Performance nahrávkou scrollování a hoveru: opakované bloky Layout a Paint znamenají nález.

**Prošel, když.** Animace a přechody používají jen transform a opacity; v nahrávce scrollování se neopakují bloky Layout.

**Pro klienta.** Efekty na stránce (posuny, najetí myší, rozbalování) jsou napsané způsobem, který nutí prohlížeč při každém snímku přepočítat rozložení celé stránky. Na počítači to není vidět, na telefonu se tím trhá scrollování a zpomaluje reakce na klepnutí. Přepsání na jiný způsob animace je práce na hodiny a vypadá to úplně stejně. Typicky to na web přinesla zakoupená šablona.

### RYCH-32 — Měří klient rychlost i u návštěvníků z iPhonu a Safari, nebo o nich nemá žádná data?

**🟡 střední** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** V HTML hledat vlastní měření Web Vitals: grep -i -E 'web-vitals|webVitals|onLCP|onINP' /tmp/home.html a v napojených skriptech. Ověřit, zda v analytice klienta (GA4 → Prozkoumat, nebo jiný nástroj) existují události s LCP/INP/CLS. Bez přístupu do analytiky lze určit jen to, zda je knihovna na webu vůbec nasazená.

**Prošel, když.** Na webu běží vlastní měření (knihovna web-vitals), data se ukládají a dají se filtrovat podle zařízení a prohlížeče.

**Pro klienta.** Data o rychlosti, která máte od Googlu, pocházejí výhradně z prohlížeče Chrome na počítači a Androidu. Návštěvníci z iPhonu v nich nejsou vůbec — a u firemních webů to bývá třetina lidí. Nasazení vlastního měření je práce na několik hodin a je to jediný způsob, jak uvidíte skutečná čísla za své stránky a všechna zařízení, a jak si po opravě ověříte výsledek dřív než za 28 dní. Sběr musí projít vaším režimem souhlasu s cookies.

### RYCH-33 — Načítá si web dopředu stránku, na kterou návštěvník nejspíš půjde dál?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** V HTML hledat <script type="speculationrules">: grep -i speculationrules /tmp/home.html. Ověřit funkčnost v DevTools → Application → Speculative loads (Preloading), kde je vidět, které URL se předběžně načetly a případný důvod odmítnutí.

**Prošel, když.** Na webu jsou pravidla pro předběžné načtení nejpravděpodobnější další stránky (typicky homepage → služba → kontakt) a v DevTools se ukazují jako úspěšná.

**Pro klienta.** Cesta návštěvníka na firemním webu je předvídatelná: úvod, služba, kontakt. Prohlížeči se dá říct, ať si další stránku připraví dopředu — pak se otevře prakticky okamžitě. Je to úprava na pár hodin, která zároveň vylepší čísla, podle kterých vás hodnotí Google. Férově dodáváme, že to nezrychluje samotný web — je to nadstavba, ne náhrada oprav z předchozích bodů.

---

## 3. Přístupnost (WCAG 2.2 AA, EN 301 549, zákon č. 424/2023 Sb.)

**Čas na oblast:** 210–300 minut (3,5–5 hodin) na jeden web se 3–5 typy šablon (domovská, přehled, detail, formulář, případně košík). Rozpad: automatický sken a jeho ruční ověření 25 min, kontrast včetně měření textu přes fotky 25 min, průchod klávesnicí přes hlavní cestu a komponenty 50–70 min, formuláře včetně chybových hlášek a testu s NVDA 30–40 min, struktura nadpisů a ARIA 20 min, zoom, reflow a mezery v textu 20 min, pohyb, otočníky a velikost cílů 20 min, právní část a prohlášení ve VOP 20 min, PDF a videa 15 min, sběr screenshotů a videa do reportu 25–40 min. Rychlý screening jen domovské stránky a jednoho formuláře (body PRI-02 až PRI-16, PRI-19, PRI-23, PRI-26) zvládnete za 60–75 minut. Body PRI-31 a PRI-32 vyžadují přístup od klienta a přidávají 60–90 minut navíc; hromadná náprava starších PDF se do auditu nepočítá vůbec a řeší se jako samostatná zakázka.

### PRIS-01 — Projdete celou hlavní cestu k objednávce nebo poptávce jen klávesnicí, bez myši?

**🔴 kritická** · náprava: týdny · zvenčí

**Jak ověřit.** Odpojte myš (opravdu, ne jen „nebudu ji používat"). Projděte cestu domovská stránka → služba nebo produkt → formulář → odeslání jen klávesami Tab, Shift+Tab, Enter, mezerník, šipky a Esc. U každého kroku si poznamenejte, kde se zaseknete: na co nedojdete, co nejde spustit Enterem ani mezerníkem, jaké menu se otevře jen najetím myši. Pro urychlení zapněte Accessibility Insights for Web → FastPass → Tab stops, které pořadí vykreslí přímo na stránku. Průchod nafoťte nebo nahrajte jako video — to je hlavní důkaz do reportu.

**Prošel, když.** Cesta až po odeslání formuláře je dokončitelná jen klávesnicí, každý ovládací prvek na ní je dosažitelný a spustitelný, žádné menu ani filtr nevyžaduje myš.

**Pro klienta.** Bez myši se na vašem webu nedá dojít až k odeslání poptávky. Netýká se to jen nevidomých: klávesnicí ovládá web každý, kdo má zlomenou ruku, třes, bolavé zápěstí, i ten, kdo prostě vyplňuje formulář rychle. Tohle nenajde žádný automatický nástroj — musí se to projít rukou. Je to nejzávažnější typ nálezu v celém auditu, protože znamená, že část lidí u vás objednávku nedokončí, ať se snaží sebevíc.

### PRIS-02 — Dá se z každého vyskakovacího okna, cookie lišty, chatu, mapy a přehrávače odejít jen klávesnicí?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Načtěte stránku a cookie lištu nezavírejte myší — zkuste ji projít a zavřít Tabem a Enterem. Otevřete klávesnicí každý modál (poptávka, přihlášení, galerie, výběr varianty), pak stiskněte Esc a Tab: musíte se dostat ven. Zvlášť projděte vložené prvky třetích stran — chat, rezervační kalendář, vložený YouTube přehrávač, Google mapu. Past poznáte tak, že Tab cyklí donekonečna uvnitř jednoho prvku a ven se nedostanete.

**Prošel, když.** Z každé komponenty jde odejít Tabem nebo Esc; po zavření modálu se zaměření vrátí na prvek, ze kterého se otevřel.

**Pro klienta.** Na webu je místo, ze kterého se návštěvník ovládající klávesnici nedostane ven — musí zavřít celou záložku prohlížeče. Je to jediná chyba přístupnosti, která doslova znemožní nákup: člověk je uvězněný v cookie liště nebo ve vyskakovacím okně a jediná cesta ven je odejít z webu. Tohle patří na první místo opravy, ať už řešíte zákon, nebo ne.

### PRIS-03 — Řekne formulář po chybném odeslání textem, které pole je špatně a jak to opravit?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Odešlete poptávkový formulář prázdný, pak s chybným e-mailem. Sledujte tři věci: (a) je u pole textová hláška, nebo jen červený rámeček; (b) je hláška konkrétní („Zadejte e-mail ve tvaru jmeno@domena.cz"), nebo jen „Chyba"; (c) dozví se o ní i nevidomý — zapněte NVDA a formulář odešlete znovu, hláška se musí sama ozvat, nebo se na ni musí přesunout zaměření. V DevTools ověřte aria-describedby u pole a role="alert" u souhrnu chyb.

**Prošel, když.** Každá chyba je popsaná textem u konkrétního pole, obsahuje návod k opravě, není sdělená jen barvou, a po odeslání se buď oznámí čtečce, nebo se na ni přesune zaměření.

**Pro klienta.** Když někdo vyplní formulář špatně, web mu neřekne srozumitelně co a kde. Červený rámeček bez textu nepomůže člověku s poruchou barvocitu (u mužů zhruba každý dvanáctý) ani nevidomému — a upřímně ani nikomu jinému, kdo spěchá. Konec je vždycky stejný: člověk to po druhém pokusu vzdá a poptávka nepřijde. Tohle je místo, kde se přístupnost nejrychleji vrátí v penězích: hláška musí říct, které pole je špatně a jak to má vypadat správně.

### PRIS-04 — Dá se dokončit objednávka, registrace a přihlášení jen klávesnicí a s odečítačem obrazovky?

**🔴 kritická** · náprava: týdny · potřebuje přístupy

**Jak ověřit.** Potřebujete domluvu s klientem: testovací účet, testovací platební bránu nebo souhlas s objednávkou, kterou pak stornujete. Projděte celý proces bez myši, se zapnutým NVDA: vložení do košíku, výběr dopravy a platby, souhlasy, kontrolní krok, odeslání. Zvlášť ověřte, že (a) jde objednávku před odesláním zkontrolovat, opravit nebo vzít zpět, (b) se stejný údaj nezadává dvakrát bez předvyplnění, (c) jde do pole s heslem vložit heslo ze schránky (Ctrl+V), (d) přihlášení nevyžaduje řešení hádanky bez alternativy.

**Prošel, když.** Celý proces od košíku po potvrzení objednávky jde dokončit jen klávesnicí, každý krok je oznámený čtečkou, heslo jde vložit ze schránky a objednávku lze před odesláním zkontrolovat a opravit.

**Pro klienta.** Ten nejdůležitější kus webu — cesta od košíku k zaplacení — je zároveň ten, který nikdo netestuje, protože se k němu z venku nedostane. Přitom právě tady stojí peníze: chyba na domovské stránce znamená, že si někdo něco nepřečte, chyba v objednávce znamená, že vám nezaplatí. Potřebujeme od vás testovací účet nebo souhlas s jednou zkušební objednávkou; projití zabere zhruba hodinu a je to nejcennější hodina celého auditu.

### PRIS-05 — Prodává web něco spotřebitelům (objednávka, rezervace, platba, e-knihy, finanční nebo dopravní služba), a spadá tedy pod zákon č. 424/2023 Sb.?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Zvenčí projděte web a hledejte košík, tlačítko Objednat / Rezervovat / Zaplatit, ceník s možností nákupu nebo klientskou zónu. V patičce otevřete obchodní podmínky a zjistěte, jestli je druhou smluvní stranou i spotřebitel (nepodnikatel), nebo jen firmy. Počet zaměstnanců a obrat ověřte ve výroční zprávě ve sbírce listin na justice.cz — výjimka pro mikropodnik platí jen pod 10 osob a zároveň do 2 mil. EUR, a u propojených a partnerských firem se údaje sčítají. Poptávkový nebo kontaktní formulář, který sám o sobě smlouvu neuzavírá, je šedá zóna — do reportu ho napište jako otázku na klientova právníka, ne jako svůj závěr.

**Prošel, když.** V reportu je jednoznačné ano/ne s odkazem na konkrétní prvek webu (např. „B2C e-shop s nákupem pro spotřebitele → spadá" nebo „prezentace bez objednávky → nespadá") a je vyloučena výjimka pro mikropodnik.

**Pro klienta.** Nejdřív si ujasněte, jestli se vás nový zákon o přístupnosti vůbec týká. Týká se jen služeb prodávaných běžným lidem, ne firmám: e-shop, rezervace, platby, e-knihy, doprava, finanční služby. Čistě prezentační web bez objednávky pod zákon nespadá — a je poctivé vám to říct rovnou. Pokud pod zákon spadáte, jde o povinnost, která platí už od 28. 6. 2025, a horní hranice pokuty je 10 milionů Kč. Zároveň platí, že i web mimo zákon má přístupnost řešit, protože zákazník, který nedokončí objednávku, prostě odejde a nic vám neřekne.

### PRIS-06 — Je ve všeobecných obchodních podmínkách (nebo v obdobném dokumentu) zveřejněno, jak služba splňuje požadavky na přístupnost, včetně popisu jednotlivých požadavků?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Platí jen pro weby, které v bodu PRI-01 vyšly jako regulované. Otevřete VOP z patičky a v prohlížeči hledejte (Ctrl+F) slova „přístupnost", „přístupné", „424/2023", „WCAG". Ověřte tři věci: (a) informace tam skutečně je, (b) není to jen jedna věta typu „náš web je přístupný", ale popis jednotlivých požadavků a fungování služby, (c) stránka s VOP je sama přístupná (ne jen naskenované PDF).

**Prošel, když.** Ve VOP nebo v samostatném odkazovaném dokumentu je oddíl o přístupnosti s popisem jednotlivých požadavků a popisem fungování služby, dostupný z každé stránky a čitelný jako HTML text.

**Pro klienta.** Zákon po vás chce, abyste v obchodních podmínkách veřejně popsali, jak je vaše služba přístupná. Je to samostatná povinnost s pokutou až 1 milion Kč a při kontrole padne jako první, protože se dá ověřit z kanceláře, aniž by k vám někdo přišel. Je to zároveň nejlevnější věc na celém seznamu — text vznikne za den. Jen pozor: musí být pravdivý. Napsat „náš web je plně přístupný", když není, je horší než nenapsat nic.

### PRIS-07 — Má každý odkaz a tlačítko složené jen z ikony (sociální sítě, lupa, hamburger, šipky, křížek) čitelný název?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** F12 → panel axe DevTools → tlačítko Scan ALL of my page → v seznamu Issues hledejte pravidla link-name a button-name; kliknutím na nález se prvek zvýrazní na stránce. Doplňkově ve WAVE (ikona rozšíření → záložka Details) hledejte položky Empty link a Empty button. Ověřte v NVDA: Insert+F7 → Odkazy — hledáte položky bez textu nebo s vypsanou adresou místo názvu.

**Prošel, když.** axe nehlásí žádnou chybu link-name ani button-name a v seznamu odkazů v NVDA má každá položka srozumitelný název („Vyhledávání", „Facebook", „Zavřít").

**Pro klienta.** Ikonky bez popisu (lupa, hamburger, ikony sociálních sítí, křížek pro zavření) jsou pro nevidomého návštěvníka jen slovo „odkaz" bez jakéhokoli vysvětlení, kam vede. Je to nejčastější technická chyba, kterou u českých firemních webů nacházíme, a zároveň jedna z nejlevnějších — jde o pár řádků kódu u každé ikony. Popisujte funkci, ne vzhled: „Vyhledávání", ne „lupa".

### PRIS-08 — Má všechen text kontrast alespoň 4,5:1 vůči pozadí (velký text od 24 px, resp. 18,7 px tučně alespoň 3:1)?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** F12 → axe DevTools → Scan ALL of my page → pravidlo color-contrast; každý nález má vypsanou naměřenou hodnotu a barvy. WAVE: ikona rozšíření → záložka Contrast → seznam Contrast Errors. Text přes fotku, přechod nebo video ani jeden nástroj nezměří — tam použijte Colour Contrast Analyser (TPGi), kapátkem naberte barvu písma a barvu nejsvětlejšího místa fotky pod ním a měřte nejhorší místo, ne průměr. Nezapomeňte na stavy: najeďte myší na tlačítka a odkazy a změřte i hover a navštívený odkaz.

**Prošel, když.** axe nehlásí žádnou chybu color-contrast a ručně změřený nejhorší vzorek textu přes obrázek má ≥ 4,5:1 (velký text ≥ 3:1).

**Pro klienta.** Světle šedý text v patičce, v popiskách u formuláře a v drobných informacích je pro velkou část návštěvníků špatně čitelný — netýká se to jen slabozrakých, ale každého nad padesát let a každého, kdo se na web dívá na mobilu venku. Je to nejrozšířenější chyba přístupnosti na světě. Pokud máte barvy definované na jednom místě v návrhu webu, opraví se to změnou dvou tří odstínů a projeví se to všude najednou. Firemní barvu si můžete nechat na velkých plochách, na drobný text potřebujete tmavší variantu.

### PRIS-09 — Mají obrázky, které nesou informaci, popis odpovídající jejich smyslu — a mají dekorativní obrázky popis prázdný?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Nejdřív automat: axe → pravidlo image-alt (najde jen úplně chybějící popis). Pak ručně, protože smysl automat neposoudí — WAVE: ikona rozšíření → v překryvu na stránce jsou zelené ikonky alt u obrázků, klikem se text zobrazí. Projděte je a hledejte nesmysly: „obrazek1", „banner", „DSC_0042", název souboru, nebo naopak popis u čistě dekorativní grafiky. U ikony vedle textu (ikona telefonu vedle „Zavolejte nám") má být popis prázdný, jinak čtečka přečte informaci dvakrát. U obrázku, který je zároveň odkazem, musí popis říkat, kam vede, ne co je na něm vidět.

**Prošel, když.** Žádný <img> bez atributu alt; informativní obrázky mají popis, ze kterého pochopíte obsah i bez podívání; dekorativní obrázky a ikony u textu mají popis prázdný; grafy a schémata mají shrnutí v textu pod nimi.

**Pro klienta.** Obrázky nemají popis, takže je nepřečte odečítač obrazovky nevidomému návštěvníkovi a hůř je zpracuje i vyhledávač. Pozor na obvyklý omyl „doplníme popis úplně všude": u dekorativní grafiky a u ikonek vedle textu má být popis naopak prázdný, jinak čtečka čte tutéž informaci dvakrát a web se pro toho člověka stane upovídaným zmatkem. Je to práce pro vašeho marketéra, ne pro programátora — dodáme seznam konkrétních obrázků a u každého, co tam patří.

### PRIS-10 — Je při ovládání klávesnicí vidět, na kterém prvku právě jste?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Odpojte myš, načtěte stránku a mačkejte Tab. Po každém stisku se musí někde objevit zřetelný rámeček nebo jiná viditelná změna. Projděte prvních 30–40 stisků na domovské stránce a pak celý formulář. Příčinu doložte v kódu: F12 → Sources → Ctrl+Shift+F (hledání ve všech souborech) → hledejte „outline: none", „outline:0" a „:focus-visible". Pozor na falešně negativní nález: indikátor může být udělaný přes stín nebo změnu vnitřního prvku — vždycky se dívejte okem, ne jen do kódu.

**Prošel, když.** Každý prvek, na který lze dojít Tabem, se při zaměření viditelně změní; rámeček má kontrast alespoň 3:1 vůči pozadí a je vidět i na tmavém a barevném podkladu.

**Pro klienta.** Když někdo ovládá web klávesnicí, nevidí, kde na stránce právě je — kurzor se pohybuje neviditelně. Je to jako psát na počítači s vypnutým monitorem. Vzniká to skoro vždy tím, že grafikovi vadil systémový modrý rámeček a programátor ho vypnul, aniž by dal náhradu. Oprava je jedno pravidlo ve stylech a dá se udělat tak, aby se rámeček ukazoval jen při ovládání klávesnicí a při klikání myší ne — tedy přesně tak, jak si to grafik původně přál.

### PRIS-11 — Postupuje zaměření při mačkání Tab v pořadí, v jakém je obsah vidět — a neskončí nikdy na prvku, který není vidět?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Accessibility Insights for Web → FastPass → Tab stops zapnout a projít stránku; nástroj vykreslí očíslované body přímo přes stránku a skoky uvidíte na první pohled. Ověřte i mobilní šířku (F12 → Ctrl+Shift+M → 390 px), kde se pořadí často rozchází kvůli přeuspořádání sloupců. Pokud zaměření „zmizí" (stránka se neposouvá, rámeček nikde), nechte otevřenou konzoli a v ní opakovaně spusťte document.activeElement — uvidíte, na jakém skrytém prvku stojíte. V kódu ještě hledejte kladné tabindex (F12 → Elements → Ctrl+F → tabindex="1").

**Prošel, když.** Zaměření postupuje shora dolů a zleva doprava podle vizuálního pořadí, nevrací se nahoru bez důvodu, nikdy neskončí na skrytém prvku (zavřené mobilní menu, neviditelný snímek carouselu, zavřený akordeon) a na stránce není žádný kladný tabindex.

**Pro klienta.** Při ovládání klávesnicí zaměření skáče po stránce v jiném pořadí, než jak je obsah vidět, a chvílemi zmizí úplně — protože stojí na skrytém mobilním menu nebo na neviditelném snímku otočníku. Pro návštěvníka to znamená, že mačká Tab a nic se neděje; obvykle to vzdá. Oprava je skrývat neviditelné části pořádně, ne je jen odsunout mimo obrazovku.

### PRIS-12 — Má každé pole formuláře trvale viditelný popisek (ne jen šedý text uvnitř pole) a mají pole o uživateli zapnuté automatické doplňování?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Klikněte do pole a začněte psát: pokud popisek zmizel, byl to jen placeholder a pole popisek nemá. Potvrďte v axe → pravidla label a form-field-multiple-labels, a ve WAVE → Details → Missing form label. Programové spárování ověřte v F12 → Elements → klikněte na pole → panel Accessibility → řádek Name: musí tam být text popisku, ne prázdno. Automatické doplňování zkontrolujte v Elements hledáním atributu autocomplete u polí jméno, e-mail, telefon, adresa.

**Prošel, když.** U každého pole je popisek vidět i po vyplnění, panel Accessibility u něj ukazuje neprázdné Name, a pole se jménem, e-mailem, telefonem a adresou mají autocomplete.

**Pro klienta.** Vaše formulářová pole mají popisek jen jako šedý text uvnitř, který zmizí, jakmile člověk začne psát. Poškozuje to úplně všechny návštěvníky, ne jen ty s postižením: lidé zapomenou, co do pole patří, a u delšího formuláře ho nedokončí. Trvalý popisek nad polem je oprava na pár hodin a projeví se na počtu poptávek. Zároveň doporučuji zapnout automatické doplňování, aby si mobil sám nabídl jméno, e-mail a adresu — vyplnění se tím zkrátí o desítky sekund.

### PRIS-13 — Jde poptávkový nebo objednávkový formulář odeslat bez obrázkové hádanky (CAPTCHA)?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Projděte formulář až k odeslání a podívejte se, jestli se objeví reCAPTCHA nebo jiná hádanka. Pokud ano, zkuste ji vyřešit jen klávesnicí a ověřte, jestli je k dispozici zvuková nebo jiná alternativa. Zaznamenejte typ ochrany (neviditelná reCAPTCHA v3, zaškrtnutí „Nejsem robot", obrázková mřížka, počítání příkladu, honeypot).

**Prošel, když.** Formulář jde odeslat bez řešení obrázkové nebo textové hádanky — ochrana je neviditelná (honeypot, skóre, časové razítko), nebo má rovnocennou alternativu ovladatelnou klávesnicí.

**Pro klienta.** Obrázková hádanka před odesláním formuláře je v průzkumech mezi nevidomými uživateli dlouhodobě problém číslo jedna na celém webu. Praktický dopad na vás: ztrácíte poptávky od lidí, které nikdy neuvidíte ve statistikách, protože jen 8 % zákazníků, kteří na webu neuspějí, dá firmě vědět; zbytek mlčky odejde ke konkurenci. Spam se dá odfiltrovat i neviditelně, bez toho, aby něco luštil skutečný zákazník.

### PRIS-14 — Má stránka jeden hlavní nadpis a navazující nadpisy bez přeskakování úrovní, které odpovídají tomu, co je vidět?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** WAVE → ikona rozšíření → záložka Structure: vypíše celou osnovu nadpisů s úrovněmi. Nebo NVDA a klávesa H, kterou proskáčete nadpisy stránky. Kontrolujte tři věci: (a) právě jeden nadpis první úrovně a je to hlavní sdělení stránky, (b) žádný skok z druhé na čtvrtou úroveň, (c) velké vizuální nadpisy sekcí („Naše služby") jsou skutečně nadpisy, a naopak zvětšený claim v patičce není nadpis jen kvůli velikosti písma. Doplňkově axe → pravidla page-has-heading-one a heading-order.

**Prošel, když.** Právě jeden H1, úrovně jdou po sobě bez skoků, každý vizuálně vypadající nadpis je nadpisem i v kódu a naopak.

**Pro klienta.** Nadpisy na stránce nejsou poskládané podle logiky obsahu, ale podle toho, jak měla která věta vypadat velká. Nadpisy jsou přitom pro nevidomé hlavní způsob, jak se po dlouhé stránce pohybovat — proskakuje jimi 72 % z nich. Bonus, který vás bude zajímat víc: je to jediná položka na tomhle seznamu, kde se argument kryje se SEO, protože podle nadpisů se v textu orientuje i vyhledávač. Do reportu dodáme strom nadpisů „jak to je" a „jak to má být" vedle sebe.

### PRIS-15 — Jsou všechny klikatelné prvky skutečná tlačítka a odkazy, ne obyčejné rámečky s obsluhou kliknutí?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** F12 → Elements → Ctrl+F → hledejte div[onclick], span[onclick] a <a> bez atributu href. Rychlý praktický test: klikněte na podezřelý prvek myší (funguje) a pak se na něj zkuste dostat Tabem (nedojdete). Pozor hlavně na dlaždice služeb, karty produktů, filtry, přepínače v košíku a vlastní rozbalovací seznamy.

**Prošel, když.** Každý prvek, na který se dá kliknout, je <button> nebo <a href> — dá se na něj dojít Tabem a spustit Enterem nebo mezerníkem.

**Pro klienta.** Část prvků, na které se na webu kliká, není z pohledu prohlížeče tlačítko ani odkaz — je to jen obrázek s reakcí na kliknutí myší. Pro každého, kdo nepoužívá myš, tyhle prvky prostě neexistují: nedá se na ně dojít a nedají se spustit. Když se nahradí obyčejným tlačítkem nebo odkazem, získá se ovládání klávesnicí zadarmo a navíc odkazy začnou fungovat pro vyhledávač.

### PRIS-16 — Otevřou se rozbalovací menu, modální okna a akordeony i klávesnicí, zavřou se Esc a vrátí zaměření zpátky?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Odpojte myš. U hlavního menu dojděte Tabem na položku s podnabídkou a zkuste ji otevřít Enterem, mezerníkem a šipkou dolů — pokud se otevře jen najetím myší, je to chyba. U modálu: otevřete ho klávesnicí, zkontrolujte, že zaměření skočilo dovnitř, že Tab cykluje uvnitř okna, že Esc zavírá a že se zaměření vrátilo na tlačítko, kterým se okno otevřelo. Totéž u akordeonů, záložek a filtrů. Ověřte s NVDA, že se stav ohlásí („rozbaleno", „sbaleno").

**Prošel, když.** Každá interaktivní komponenta jde otevřít i zavřít klávesnicí, Esc funguje, zaměření se po zavření vrátí na výchozí prvek a stav se ohlásí čtečce.

**Pro klienta.** Menu, které se rozbalí jen najetím myši, a okno, které se nedá zavřít klávesou Esc, jsou pro část návštěvníků slepá ulička. U menu je to obzvlášť drahé — člověk se nedostane do sekcí, kde máte produkty. Oprava se týká komponent, které se používají na celém webu, takže se udělá jednou a projeví se všude.

### PRIS-17 — Jde na mobilu roztáhnout stránka dvěma prsty (není zablokované přibližování)?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Ctrl+U → hledejte <meta name="viewport"> → v jeho obsahu nesmí být user-scalable=no ani maximum-scale=1. Potvrďte v axe → pravidlo meta-viewport. Praktická zkouška: otevřete web na telefonu a zkuste stránku roztáhnout dvěma prsty.

**Prošel, když.** Meta tag obsahuje jen width=device-width, initial-scale=1; na telefonu jde obsah roztáhnout dvěma prsty.

**Pro klienta.** Web má na mobilu zakázané přibližování prsty. Slabozraký návštěvník si tedy nemůže zvětšit text a váš web na telefonu prostě nepřečte — a mobil je dnes u většiny firem přes polovinu návštěv. Je to nastavení dvou slov v kódu, oprava na pár minut, prakticky bez rizika. Nejlevnější položka celého auditu, patří do kategorie „opravte tento týden".

### PRIS-18 — Dá se web používat při zvětšení na 200–400 %, aniž by bylo nutné rolovat i doprava?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** F12 → Ctrl+Shift+M (režim zařízení) → do pole šířky napište 320 a výšku 640; projděte stránku shora dolů a sledujte, jestli se objeví vodorovný posuvník nebo jestli něco přetéká mimo obrazovku. Pak totéž reálným zoomem: Ctrl a + až na 200 % a 400 % na běžném notebooku. Nejčastější viníci jsou široké ceníkové tabulky, pevné šířky v pixelech, obrázky bez omezení a dlouhé nezalomitelné řetězce (e-maily, čísla dílů). Zkontrolujte i to, že při zoomu nezmizí tlačítko Do košíku nebo Odeslat.

**Prošel, když.** Při šířce 320 px ani při zoomu 400 % se neobjeví vodorovné rolování (výjimkou jsou mapy, schémata a datové tabulky ve vlastním posuvném rámci) a všechna hlavní tlačítka zůstanou dostupná.

**Pro klienta.** Slabozraký návštěvník má v prohlížeči trvale zapnuté zvětšení, typicky 150 až 200 %. Na vašem webu se při něm rozvržení rozsype a musí se posouvat i do stran, což je v praxi nepoužitelné — takový člověk se k objednávce nedostane. Nejčastěji za to můžou široké tabulky a pevné šířky; oprava se dělá po šablonách a je to práce na dny.

### PRIS-19 — Dá se zastavit každý pohyb, který se spustí sám a trvá déle než 5 sekund (otočník v hlavičce, automatické přehrávání videa) — a nebliká na stránce nic rychleji než třikrát za sekundu?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Načtěte domovskou stránku a nedělejte nic 15 sekund. Pokud se hero sekce sama přepíná, hledejte tlačítko pauzy — samotné tečky a šipky nestačí. Ověřte i to, jestli se posun zastaví, když na otočník najedete myší nebo na něj dojdete klávesnicí. Zkontrolujte automaticky přehrávaná videa v pozadí a běžící textové pásy. Blikání posuďte okem; u podezřelé animace si ji nahrajte a přehrajte snímek po snímku.

**Prošel, když.** Každý automatický pohyb má viditelný ovládací prvek pro zastavení, nebo skončí do 5 sekund; nic na stránce nebliká víc než třikrát za sekundu.

**Pro klienta.** Otočník v hlavičce, který se sám přepíná a nedá se zastavit, je porušení té úplně nejnižší úrovně přístupnosti — což klienty vždycky překvapí, protože ho mají skoro všichni. Vadí lidem s poruchou pozornosti i každému, kdo si chce v klidu přečíst text, který mu zrovna uteče. Doporučení navíc často zní ten otočník zrušit úplně: druhý a další snímek stejně skoro nikdo nevidí a statická hlavička se rychleji načte, což ocení i vyhledávač.

### PRIS-20 — Běží na webu overlay widget na přístupnost (accessiBe, UserWay, EqualWeb, ikona panáčka v rohu)?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Podívejte se na plovoucí ikonu panáčka nebo brýlí v rohu stránky. Potvrďte v kódu: F12 → panel Network → filtr JS → hledejte accessibe, userway, equalweb, acsbapp; nebo Ctrl+U a v zdrojovém kódu hledejte tytéž řetězce. Pokud widget existuje, vypněte ho (v DevTools smažte jeho <script> a načtěte stránku znovu bez něj) a zkontrolujte, že zbylé body seznamu testujete na skutečném webu, ne na tom, co widget dokresluje.

**Prošel, když.** Web žádný overlay nemá — nebo ho má a v reportu je jasně napsáno, že soulad nezajišťuje a co konkrétně na webu i s ním zůstává nepřístupné.

**Pro klienta.** Máte na webu placený widget, který slibuje, že vyřeší přístupnost jedním řádkem kódu. Neřeší. Neopraví ovládání klávesnicí, popisky formulářů ani smysl popisků obrázků — tedy většinu toho, co lidem skutečně vadí. Není to názor: americký úřad FTC v dubnu 2025 uložil firmě accessiBe zaplatit 1 milion dolarů za klamavá tvrzení, že její nástroj udělá jakýkoli web souladný, a na 20 let jí taková tvrzení bez důkazů zakázal. Doporučuji předplatné zrušit a ty peníze dát do skutečných oprav.

### PRIS-21 — Mají rámečky formulářových polí, hranice tlačítek, zaškrtávátka a ikony nesoucí význam kontrast alespoň 3:1 vůči okolí?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Automat to najde jen zčásti — projděte to ručně. Otevřete stránku s formulářem, v Colour Contrast Analyser naberte barvu rámečku pole a barvu pozadí okolo něj. Totéž u ohraničení sekundárních tlačítek, u přepínačů, u zaškrtávacích políček a u stavů (vybraná položka filtru vs. nevybraná). U grafů a schémat změřte osy a čáry. Doplňkově axe → pravidlo non-text-contrast (hlásí jen část případů).

**Prošel, když.** Rámeček každého vstupního pole a hranice každého tlačítka mají ≥ 3:1 vůči sousední barvě a vybraný stav se od nevybraného liší víc než jen odstínem pod 3:1.

**Pro klienta.** Vaše formulářová pole mají tak světlý rámeček, že část návštěvníků nevidí, kam se má kliknout a psát. Působí to elegantně na návrhu v grafickém programu a špatně na skutečném monitoru v kanceláři. Ztmavení rámečků je změna v jedné barvě a přímo se projeví na počtu odeslaných poptávek.

### PRIS-22 — Je na stránce správně nastavený jazyk (u českého webu <html lang="cs">)?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Ctrl+U (zobrazit zdrojový kód) → hned první řádky, hledejte <html lang="…">. Nebo F12 → Elements → úplně první řádek stromu. Zkontrolujte i cizojazyčné mutace (na anglické verzi má být lang="en") a delší cizojazyčné pasáže uvnitř české stránky. Doplňkově axe → pravidla html-has-lang a html-lang-valid.

**Prošel, když.** Česká stránka má lang="cs", jazykové mutace mají svůj vlastní kód a cizojazyčné odstavce jsou označené.

**Pro klienta.** Web nemá nastavené, že je psaný česky — typicky proto, že vznikl na zahraniční šabloně. Pro nevidomého návštěvníka to znamená, že mu hlasový syntetizér přečte celou vaši stránku anglickou výslovností a nerozumí ani slovo. Je to jedno slovo v kódu, oprava na pět minut. Nechte si to jednou přehrát nahlas — pochopíte to rychleji než z jakéhokoli paragrafu.

### PRIS-23 — Zůstává zaměřený prvek vidět, i když je na stránce lepivá hlavička, cookie lišta nebo bublina chatu?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Ručně, automat to nezjistí. Odpojte myš a tabujte dolů celou stránkou. Sledujte, jestli se rámeček zaměření nezasune pod fixní hlavičku nahoře nebo pod lištu dole. Nejčastěji se to stane u odkazů těsně pod aktuálním výřezem a na mobilní šířce (F12 → Ctrl+Shift+M → šířka 390 px). Zopakujte na stránce s dlouhým obsahem, ne jen na domovské.

**Prošel, když.** Při průchodu celou stránkou zůstane zaměřený prvek vždy aspoň částečně viditelný, nikdy se neschová celý pod lepivou hlavičku nebo lištu.

**Pro klienta.** Vaše horní lišta zůstává při rolování na místě a při ovládání klávesnicí se pod ni „ztrácí" místo, kde návštěvník právě je. Prakticky to znamená, že po pár stiscích tabulátoru neví, kde se nachází, a musí odhadovat. Je to nový požadavek normy z roku 2023, který zatím netestuje skoro nikdo, a oprava je jedna hodnota ve stylech — deset minut práce.

### PRIS-24 — Je prvním prvkem po stisku Tab funkční odkaz „Přejít na hlavní obsah" a má stránka označený hlavní obsah?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Načtěte stránku, klikněte do adresního řádku, pak stiskněte Tab a šipku dolů zpět na stránku — nebo jednoduše načtěte stránku a hned mačkejte Tab. V levém horním rohu se má objevit odkaz. Pokud se objeví, stiskněte Enter a pak Tab: zaměření musí pokračovat v obsahu, ne znovu v menu. Existenci hlavního obsahu ověřte ve WAVE → záložka Structure (hledáte main) nebo v NVDA klávesou D pro procházení oblastí.

**Prošel, když.** Skip link je prvním prvkem v pořadí, je při zaměření vidět, po Enteru zaměření skutečně skočí do obsahu, a stránka má právě jeden hlavní obsah (<main>).

**Pro klienta.** Návštěvník ovládající klávesnici musí na každé podstránce protabovat celé menu — často 30 až 50 položek — než se dostane k tomu, kvůli čemu přišel. Standardní řešení je skrytý odkaz „Přejít na hlavní obsah", který se ukáže po prvním stisku klávesnice. Je to levná oprava a hezky se předvádí. Pozor: pokud odkaz máte, musí i skutečně fungovat — každý desátý na světě je rozbitý a nikam neskočí.

### PRIS-25 — Jsou skupiny přepínačů a zaškrtávátek uvedené otázkou, ke které patří, a jsou povinná pole označená i pro čtečku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Zapněte NVDA a klávesou F projděte pole formuláře — u skupiny voleb (varianta produktu, souhlas se zpracováním údajů, doručovací vs. fakturační adresa) musíte slyšet i otázku, ne jen „ano / ne". V DevTools ověřte, že skupina je obalená ve <fieldset> s <legend>. Povinnost pole ověřte v Elements: musí tam být atribut required nebo aria-required, ne jen hvězdička v textu popisku. U vícekrokového formuláře projděte, jestli se stejný údaj nechce dvakrát bez předvyplnění.

**Prošel, když.** Každá skupina voleb má nadřazenou otázku slyšitelnou ve čtečce, povinná pole mají atribut required, a v žádném vícekrokovém procesu se nezadává tentýž údaj podruhé ručně.

**Pro klienta.** U výběru varianty a u souhlasů slyší nevidomý návštěvník jen samotné možnosti — „ano, ne, nevím" — ale ne otázku, ke které patří. Klient to obvykle bere jako detail, dokud mu neukážete přepis toho, co ten člověk skutečně uslyší. Oprava je obalení skupiny a doplnění otázky, práce na pár hodin.

### PRIS-26 — Nepřebíjí doplňkové značky pro čtečku (ARIA) to, co je na stránce vidět, a odpovídají skutečnému stavu prvku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** F12 → Elements → klikněte na tlačítko nebo odkaz → panel Accessibility → řádek Name: porovnejte, jestli se shoduje s viditelným textem prvku. Rozbalte menu a v Elements sledujte, jestli se aria-expanded mění z false na true. V Elements hledejte aria-hidden="true" na prvcích, na které se dá dojít Tabem (to je horší než nic). Doplňkově axe → pravidla aria-*, aria-hidden-focus, aria-required-children.

**Prošel, když.** Přístupný název odpovídá viditelnému textu, aria-expanded se při otevření a zavření skutečně mění, žádný prvek dosažitelný Tabem není označený jako skrytý pro čtečku, a axe nehlásí chyby v ARIA.

**Pro klienta.** Web používá doplňkové značky pro odečítače obrazovky, ale nesprávně — a to je horší než je nepoužívat vůbec. Data to potvrzují: stránky s těmito značkami mají v průměru o třetinu víc chyb než stránky bez nich. Když vám někdo řekne „přístupnost máme vyřešenou, používáme ARIA", je to spíš varovný signál. Doporučení tady zní ubrat kód, ne přidat — a to je levné.

### PRIS-27 — Respektuje web systémové nastavení „omezit pohyb"?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** F12 → Ctrl+Shift+P → napište „Show Rendering" → v panelu Rendering nastavte Emulate CSS media feature prefers-reduced-motion na reduce → načtěte stránku znovu a porovnejte, jestli přestaly animace při rolování, paralaxa a prolínání. Doplňkově F12 → Sources → Ctrl+Shift+F → hledejte řetězec prefers-reduced-motion; pokud v žádném stylu není, web nastavení nerespektuje. U animačních knihoven (GSAP, AOS, Lenis) musí být nastavení vyhodnocené i v kódu, ne jen ve stylech.

**Prošel, když.** Se zapnutou emulací reduce se animace při rolování, paralaxa a automatický pohyb nespustí; v kódu je odpovídající pravidlo.

**Pro klienta.** Kdo má potíže s rovnováhou, tomu velké posuny a paralaxa při rolování způsobí závrať a nevolnost — nejde o okrajovou skupinu, v americké populační studii vykazovalo nějakou formu poruchy rovnováhy 35 % lidí nad 40 let, což je přesně profil vašeho zákazníka. Tihle lidé si v operačním systému vědomě zapnuli „omezit pohyb" a váš web to ignoruje. Oprava je jedno pravidlo ve stylech; u složitějších animací se musí doplnit i do kódu.

### PRIS-28 — Mají klikatelné prvky plochu alespoň 24 × 24 px, nebo dost velký odstup od sousedních?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** axe → pravidlo target-size (respektuje i výjimku odstupu, proto ho berte jako hlavní zdroj). Doplňkově F12 → Elements → najeďte na prvek a v přehledu rozměrů si přečtěte jeho velikost. Zaměřte se na ikony sociálních sítí v patičce, křížek pro zavření cookie lišty a modálu, přepínač množství v košíku, tečky pod otočníkem, přepínač jazyka a ikony filtrů. Ověřte na telefonu palcem, ne myší.

**Prošel, když.** axe nehlásí žádnou chybu target-size a všechny prvky na cestě k objednávce se dají na telefonu trefit palcem napoprvé.

**Pro klienta.** Některé ovládací prvky jsou tak malé, že se na mobilu trefíte až napodruhé — typicky křížek pro zavření, přepínač množství v košíku a ikony v patičce. Není to jen otázka přístupnosti, ale hlavně mobilní konverze: každé chybné klepnutí je krok k tomu, že návštěvník odejde. Klikatelná plocha se dá zvětšit, aniž by se zvětšila samotná ikonka, takže návrh zůstane beze změny.

### PRIS-29 — Mají PDF dokumenty na webu (ceníky, katalogy, technické listy, formuláře) textovou vrstvu a strukturu?

**🟡 střední** · náprava: týdny · zvenčí

**Jak ověřit.** Najděte odkazy na PDF (v Googlu dotaz site:domena.cz filetype:pdf, nebo projděte sekce Ke stažení a Dokumenty). U každého klíčového dokumentu otevřete PDF a zkuste v něm označit text myší a zkopírovat — pokud to nejde, je to jen naskenovaný obrázek. V Adobe Acrobatu ověřte Soubor → Vlastnosti → jazyk dokumentu a v postranním panelu existenci značek (Tags). U dokumentů zveřejněných po 28. 6. 2025 už nefunguje přechodná výjimka.

**Prošel, když.** Klíčové dokumenty jdou označit a zkopírovat jako text, mají nastavený jazyk a značkovanou strukturu (nadpisy, tabulky), nebo je jejich obsah dostupný i jako běžná HTML stránka.

**Pro klienta.** Vaše ceníky a technické listy jsou naskenované PDF — pro nevidomého návštěvníka i pro vyhledávač je to prázdná stránka. U výrobních firem je to zásadní, protože právě tyhle dokumenty jsou hlavní důvod, proč na web někdo přijde. Nejlevnější cesta obvykle není opravovat stovky starých PDF, ale zveřejnit klíčové informace přímo na webu jako text a upravit jen ty dokumenty, které se skutečně stahují.

### PRIS-30 — Mají videa na webu titulky?

**🟡 střední** · náprava: týdny · zvenčí

**Jak ověřit.** Projděte stránky s videem (domovská, o firmě, reference, produkt). U vlastního přehrávače hledejte tlačítko titulků a zapněte ho — ověřte, že titulky jsou skutečné, ne automaticky vygenerované s chybami. U vloženého YouTube zkontrolujte v přehrávači ozubené kolo → Titulky, jestli jsou nahrané ručně, nebo jen automatické. Zvlášť si všímejte videí, ve kterých je informace jen mluveným slovem (návod, vysvětlení služby).

**Prošel, když.** Každé předtočené video s mluveným slovem má titulky odpovídající skutečnému obsahu; u videí zveřejněných po 28. 6. 2025 to platí bez výjimky.

**Pro klienta.** Videa nemají titulky, takže z nich nic nemá ani neslyšící návštěvník, ani ten, kdo si video pouští v kanceláři nebo v tramvaji bez zvuku — a to je dnes většina lidí. Titulky jsou navíc text, který si přečte vyhledávač, takže se video začne objevovat ve výsledcích. U starších videí zveřejněných do června 2025 je zákonná výjimka, u nových už ne.

### PRIS-31 — Umožňuje redakční systém člověku, který web spravuje, doplnit popis obrázku a zvolit správnou úroveň nadpisu?

**🟡 střední** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Potřebujete přístup do administrace. Otevřete editaci běžné stránky a článku a ověřte: (a) je u nahrávaného obrázku pole pro popis a je vysvětlené, kdy se nechává prázdné; (b) nabízí textový editor volbu úrovně nadpisu (Nadpis 2, Nadpis 3), nebo jen velikost písma; (c) dá se u odkazu nastavit srozumitelný text, nebo šablona nutí „Více"; (d) neobchází editor nastavení jazyka a strukturu. Vyzkoušejte zveřejnit testovací stránku a projet ji nástrojem axe.

**Prošel, když.** Redakce dokáže bez programátora vložit obrázek s popisem, zvolit správnou úroveň nadpisu a napsat smysluplný text odkazu; nově zveřejněná testovací stránka projde automatickým skenem bez chyb.

**Pro klienta.** Opravit web jednorázově nestačí, pokud vám ho editor po půl roce zase rozbije. Zásadní je, aby člověk, který u vás plní web obsahem, mohl u obrázku vyplnit popis a u textu vybrat úroveň nadpisu — a aby věděl, kdy se popis naopak nechává prázdný. Když to systém neumožňuje, chyby se vrátí a zaplatíte druhý audit. Součástí opravy proto má být krátká instrukce pro redakci a případná úprava editoru.

### PRIS-32 — Zůstane text čitelný, když si návštěvník zvětší řádkování a mezery mezi písmeny?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Použijte bookmarklet Text Spacing od Steva Faulknera (nebo v DevTools → Elements → vyberte <body> → do panelu Styles přidejte: line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; a odstavcům margin-bottom: 2em !important). Projděte stránku a sledujte, jestli se text neořízne, nepřekryje a nezmizí uvnitř tlačítek a karet.

**Prošel, když.** Po nastavení zvětšených mezer nezmizí ani se neořízne žádný text, tlačítka a karty se roztáhnou podle obsahu.

**Pro klienta.** Lidé s dyslexií a se slabším zrakem si v prohlížeči zvětšují mezery mezi řádky a písmeny. Na vašem webu se pak text v tlačítkách a kartách ořízne nebo přeteče přes okraj. Oprava spočívá v tom, že se prvkům nenastavuje pevná výška, ale nechá se je růst podle obsahu — je to spíš údržba než přestavba.

---

## 4. Obsahové SEO a viditelnost ve vyhledávání

**Čas na oblast:** 180–240 minut u webu do 100 stránek. Zvenčí bez přístupů 150–180 minut, s přístupem do Search Console a Seznam Webmastera dalších 30–60 minut. Rozpad: crawl Screaming Frogem a kontrola titulků, nadpisů a obrázků 30 minut; robots.txt, sitemapa, přesměrování, kódování a JavaScript 25 minut; mapa služeb na stránky a nákupní dotazy 45 minut; kontrola pěti dotazů ve výsledcích Googlu i Seznamu a v AI odpovědích 30 minut; lokální entita, NAP, Firmy.cz a profil na Googlu 25 minut; důvěryhodnost (údaje o firmě, lidé, reference) a strukturovaná data 25 minut. U webu nad 500 stránek počítej o 60 minut víc kvůli placenému crawlu a širšímu vzorku.

### SEO-01 — Má každá služba, kterou firma prodává, na webu vlastní stránku, na kterou by se dal poslat zákazník hledající právě ji?

**🔴 kritická** · náprava: týdny · zvenčí

**Jak ověřit.** Vezmi seznam služeb z ceníku, prezentace nebo z toho, co firma říká po telefonu. Web projeď Screaming Frogem (spusť aplikaci, vlož doménu, Start; zdarma do 500 URL), pak záložka Internal > filtr HTML a export sloupců Address a Title. Ke každé službě ze seznamu přiřaď jednu URL. Pozor na past: stránka Služby, kde je osm služeb pod sebou na jedné adrese, se počítá jako jedna stránka, ne osm.

**Prošel, když.** Ke každé službě, po které firma chce poptávky, existuje jedna konkrétní URL. Žádná služba nekončí jen jako odstavec na sběrné stránce.

**Pro klienta.** Pro každou službu, kterou lidé hledají jako samostatnou věc, potřebujete samostatnou stránku. Když je všechno na jedné, vyhledávač neví, na co ji nabídnout, a zákazník na ní nenajde přesně to svoje. Jedna stránka nemůže současně soutěžit o montáž vzduchotechniky a o revize požárních klapek. Je to nejdražší nález celého auditu, ale i ten, který přinese nejvíc poptávek: kde stránka není, nemůže přijít návštěva ani telefonát.

### SEO-02 — Je hlavní obsah stránky v HTML, nebo se dokresluje až JavaScriptem?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Vezmi větu z prostředka textu stránky služby a spusť curl -s https://domena.cz/sluzba | grep -c "část věty". Nula znamená, že obsah v HTML není. Kontroluj přes view-source (Ctrl+U), ne přes Inspect, ten ukazuje až dokreslený stav. Ve Screaming Frogu můžeš porovnat crawl s vypnutým a zapnutým renderováním v Config > Spider > Rendering.

**Prošel, když.** Hlavní text, nadpisy a odkazy v navigaci jsou přímo ve zdrojovém HTML stránky.

**Pro klienta.** Když se text stránky doplňuje až v prohlížeči návštěvníka, Google si s tím většinou poradí, Seznam podstatně hůř, a část webu se do českého vyhledávače nemusí dostat vůbec. Nechte vývojáře nastavit, aby hlavní obsah chodil rovnou v HTML. Dokud tohle neplatí, nemá smysl řešit nic dalšího z tohoto seznamu: co robot nestáhne, nemůže vydělat.

### SEO-03 — Neblokuje soubor robots.txt část webu, kterou má vyhledávač vidět?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři domena.cz/robots.txt a projdi všechny řádky Disallow. Nálezy: Disallow: / (zavřený celý web), blokovaná složka se stránkami služeb, blogem nebo obrázky. S přístupem ověř v Search Console > Nastavení > robots.txt a přes Kontrolu URL u konkrétní stránky, kde se objeví hláška Blokováno souborem robots.txt.

**Prošel, když.** Žádné pravidlo Disallow nezasahuje stránky, které mají přivádět zákazníky.

**Pro klienta.** Soubor robots.txt je vrátný webu a jeden špatný řádek dokáže vyhledávačům zavřít celou sekci nebo celý web. Stává se to nejčastěji po spuštění nového webu, protože testovací verze se běžně zavírají celé a nastavení se omylem přenese na ostrou. Oprava je na pár minut, dopad při chybě je stoprocentní ztráta návštěvnosti.

### SEO-04 — Jsou hlavní stránky webu skutečně v indexu Googlu i Seznamu?

**🔴 kritická** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** S přístupem (spolehlivé): Search Console > Kontrola URL, vlož adresu každé hlavní stránky a hledej hlášku URL je na Googlu; pak Indexování > Stránky a sekce Proč nejsou stránky indexovány. Seznam Webmaster (reporter.seznam.cz/wm/) > přehled webu, počet stránek v indexu. Bez přístupu orientačně: vezmi doslovnou větu ze stránky a hledej ji v uvozovkách na Googlu i na Seznamu; když se stránka nevrátí, pravděpodobně v indexu není. Operátor site: k počítání stránek nepoužívej, Google sám uvádí, že je to jen hrubý odhad.

**Prošel, když.** Homepage, všechny stránky služeb a ceník jsou dohledatelné v obou vyhledávačích a v Search Console nespadají do žádné kategorie neindexováno.

**Pro klienta.** Stránka, kterou vyhledávač nemá ve svém seznamu, nemůže přivést nikoho, ať je napsaná sebelíp. Proto se tohle kontroluje mezi prvními věcmi: všechna ostatní doporučení mají smysl až potom. Pokud stránky v indexu nejsou, hledá se příčina mezi předchozími body (zavřený robots.txt, obsah jen v JavaScriptu, nepodporované kódování, špatné přesměrování).

### SEO-05 — Existuje na webu stránka pro člověka, který už chce nakupovat — ceník, srovnání variant, případová studie?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Napiš 10 dotazů, které zadá někdo těsně před objednávkou (cena X, X cena za m2, srovnání X a Y, alternativa k X, zkušenosti s X, X reference). Ke každému hledej v crawlu z OBS-01 nebo ručně v navigaci odpovídající URL. Doplň hledáním site:domena.cz cena a site:domena.cz srovnání v anonymním okně.

**Prošel, když.** Aspoň pro polovinu z 10 nákupních dotazů existuje odpovídající stránka, mezi nimi vždy stránka s cenovou orientací a aspoň jedna případová studie.

**Pro klienta.** Články typu jak vybrat přivedou čtenáře, ne zákazníka. Peníze jsou u dotazů, kde už člověk vybírá dodavatele: cena, srovnání, zkušenosti, reference. Pokud pro ně na webu není stránka, tyhle lidi obslouží konkurence. U informačních témat navíc roste riziko, že odpověď dá rovnou AI a proklik nepřijde — u prodejních a cenových dotazů se to zatím neděje.

### SEO-06 — Najde návštěvník na webu jakoukoli informaci o ceně — částku, rozpětí, cenu od, nebo aspoň popis toho, co cenu určuje?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Na stránkách služeb a v případném ceníku hledej Ctrl+F výrazy Kč, cena, od. Nebo zadej site:domena.cz "Kč" na Googlu. Když nic nevrátí, projdi stránky služeb očima a ověř, jestli tam není aspoň popis faktorů, které cenu tvoří.

**Prošel, když.** Aspoň u hlavních služeb je uvedené cenové pásmo, typický rozsah zakázky, nebo výčet toho, na čem cena závisí.

**Pro klienta.** Doplňte aspoň orientační rozpětí nebo popis toho, co cenu ovlivňuje. Věta záleží na zadání je pro zákazníka signál, ať se zeptá jinde. Firma bez jediného cenového údaje se navíc nemá jak dostat k lidem, kteří hledají cenu, a to jsou ti nejblíž objednávce. Bonus: orientační cena odfiltruje poptávky, na které stejně nechcete odpovídat, a ušetří čas obchodu.

### SEO-07 — Odpovídá typ stránky tomu, co Google a Seznam na daný dotaz ve výsledcích skutečně zobrazují?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Vezmi 5 nejdůležitějších dotazů. Každý zadej v anonymním okně na google.cz a na search.seznam.cz. U každého zapiš, co v prvních deseti výsledcích převažuje: články, návody a odpověď v rámečku = informační dotaz; firemní a produktové stránky a reklamy = nákupní dotaz. Porovnej s tím, jakou stránku na ten dotaz web nabízí. Zapiš datum, lokalitu a zařízení, výsledky jsou personalizované.

**Prošel, když.** U každého z pěti dotazů má web stránku stejného typu, jaký ve výsledcích převažuje.

**Pro klienta.** Když Google na dotaz ukazuje samé články a vy nabízíte prodejní stránku (nebo obráceně), nedostanete se nahoru ani s dokonalým textem. Vyhledávač jen kopíruje, co na ten dotaz lidé chtějí vidět. Než zaplatíte za další text, podívejte se v anonymním okně, jaký typ stránky ve výsledcích vyhrává, a udělejte takový.

### SEO-08 — Používá web slova, kterými zákazníci skutečně hledají, nebo jen vlastní názvy produktů a oborové zkratky?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vypiš 10 hlavních výrazů z homepage a stránek služeb. Zadej je do Skliku (přihlas se na sklik.cz > Nástroje > Návrh klíčových slov, stačí registrovaný účet, inzerovat není nutné) a do Google Keyword Planneru. Výrazy s nulovou hledaností v obou nástrojích jsou interní názvosloví. Druhý test: najdi na webu jednu větu, která bez firemních názvů říká, co firma dělá.

**Prošel, když.** Aspoň polovina hlavních výrazů má v Skliku nebo Keyword Planneru nenulovou hledanost a na homepage je věta popisující obor běžnými slovy.

**Pro klienta.** Svoje názvy produktů si nechte, ale vedle nich napište i to, jak tomu říká zákazník. Nikdo nehledá systém ProFlow 3, hledá evidenci docházky pro výrobu. Když ta obecná slova na webu nikde nejsou, vyhledávač nemá web na co nabídnout, protože nedokáže uhodnout, že jde o totéž.

### SEO-09 — Říká titulek homepage, co firma dělá a pro koho, místo slova Úvod nebo jen názvu firmy?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři view-source:https://domena.cz (v prohlížeči Ctrl+U) a najdi značku <title>. Rychlá kontrola bez kódu: vyhledej firmu na Googlu a přečti si modrý nadpis prvního výsledku. Ve Screaming Frogu je to záložka Page Titles, řádek s homepage.

**Prošel, když.** Titulek obsahuje obor nebo hlavní službu i název firmy a vejde se zhruba do 51 až 60 znaků.

**Pro klienta.** Nadpis, který lidé vidí ve výsledcích vyhledávání, je nejlevnější věc, kterou jde na webu zlepšit. Místo Úvod | Firma s.r.o. napište Zakázková výroba plechových dílů na CNC | Firma s.r.o. Úprava zabere deset minut a efekt je vidět ve statistikách do několika týdnů.

### SEO-10 — Má každá stránka, která má přivádět zákazníky, vlastní titulek, nebo je na víc stránkách stejný či prázdný?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog > záložka Page Titles > v pravém panelu filtry Duplicate a Missing. Projdi, které stránky se v duplicitách objevují, a ověř, jestli mezi nimi nejsou stránky služeb. U webů na šabloně je typické, že titulek generuje systém z názvu webu.

**Prošel, když.** Žádná stránka určená k přivádění návštěvnosti nemá prázdný titulek a žádné dvě takové stránky nemají titulek stejný.

**Pro klienta.** Každá stránka má mít vlastní nadpis pro výsledky vyhledávání, popisující, co je na ní. Když má pět stránek stejný titulek, vyhledávač je nerozliší a zákazník ve výsledcích netuší, kam klikne. Seznam to uvádí přímo ve své nápovědě: titulek má být pro každou stránku jedinečný. Opravu obvykle zvládne správce webu za jedno odpoledne.

### SEO-11 — Má web deklarované kódování, které Seznam podporuje?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** view-source homepage a jedné podstránky, hledej v hlavičce <meta charset=...>; nebo curl -sI https://domena.cz | grep -i content-type. Podporované hodnoty jsou utf-8, utf-16, iso-8859-2 a windows-1250. Deklarace musí být na každé stránce, ne jen na homepage.

**Prošel, když.** Každá kontrolovaná stránka deklaruje jedno ze čtyř podporovaných kódování (nejčastěji utf-8) a diakritika se zobrazuje správně.

**Pro klienta.** Seznam výslovně uvádí, že stránky s jiným než čtyřmi podporovanými kódováními se do jeho indexu vůbec nedostanou. Je to jeden řádek v hlavičce webu, ale bez něj může být firma na Seznamu neviditelná. U moderních webů bývá v pořádku, kontrola stojí minutu a vyplatí se ji nepřeskočit.

### SEO-12 — Nemá web nasazený zákaz zobrazování popisků (nosnippet nebo max-snippet)?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** view-source homepage a jedné stránky služby, hledej <meta name="robots" ...> s hodnotou nosnippet nebo max-snippet. Ve Screaming Frogu záložka Directives, sloupec Meta Robots 1. Zkontroluj i atribut data-nosnippet v kódu a hlavičku serveru: curl -sI https://domena.cz | grep -i x-robots-tag.

**Prošel, když.** Na stránkách, které mají přivádět zákazníky, není nosnippet ani max-snippet s nízkou hodnotou.

**Pro klienta.** Tohle na web občas nasadí někdo s dobrým úmyslem chránit obsah před AI. Důsledek je ale ten, že se ve výsledcích vyhledávání přestane zobrazovat i normální popisek pod odkazem, tedy text, podle kterého se lidé rozhodují, jestli kliknou. Nejde být ve výsledcích s popiskem a zároveň mimo AI odpovědi, je to jedno nastavení pro obojí. Pokud to nebylo vědomé rozhodnutí, odstraňte to.

### SEO-13 — Je web napojený na Google Search Console a dostane se do ní někdo z firmy?

**🟠 vysoká** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** view-source homepage, hledej meta name="google-site-verification"; ověření může být i přes DNS nebo Google Analytics, takže nepřítomnost není důkaz. Ověření uzavři s klientem: ať se zkusí přihlásit na search.google.com/search-console. Když se dostane dovnitř, zkontroluj v Výkon > Datum, jak dlouhá historie tam je.

**Prošel, když.** Klient se přihlásí do Search Console ke svému webu a vidí data aspoň za několik měsíců zpátky.

**Pro klienta.** Search Console je bezplatný nástroj od Googlu, který ukazuje, co lidé hledali, než přišli na váš web, kolikrát se web ve výsledcích zobrazil a kolikrát na něj klikli. Bez něj po půl roce nikdo nepozná, jestli úpravy zabraly, a z auditu se stane jednorázový papír. Napojte ho dřív, než se cokoli začne měnit, aby existovalo srovnání. Data se ukládají 16 měsíců zpětně, dřív než od napojení je získat nelze. Účet veďte pod firemním e-mailem, ne pod osobním e-mailem dodavatele.

### SEO-14 — Má firma zápis na Firmy.cz a jsou v něm aktuální údaje a správná kategorie?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vyhledej název firmy na firmy.cz a na search.seznam.cz. Otevři zápis a porovnej název, adresu, telefon, e-mail, popis a zvolenou kategorii s webem a s výpisem v ARES (ares.gov.cz).

**Prošel, když.** Zápis existuje, adresa i telefon souhlasí s webem, popis odpovídá tomu, co firma dnes dělá, a kategorie sedí na hlavní obor.

**Pro klienta.** Základní zápis na Firmy.cz je zdarma a má dvojí užitek: firmu najdou lidé v katalogu a Seznam z něj bere popisek do výsledků vyhledávání, když ho na stránce nenajde. Bez zápisu tedy vypadá výsledek hůř i pro lidi, kteří hledají firmu jménem. Placené tarify (od 12 Kč denně) řešte až po vyčerpání toho, co je zdarma. Pozor na telefonáty, kdy někdo nabízí placenou registraci v katalogu Seznamu; Seznam sám na tuhle praktiku upozorňuje, vždy si ověřte, s kým mluvíte.

### SEO-15 — Má firma vyplněný a ověřený profil na Googlu, a odpovídá nastavení tomu, jestli má provozovnu pro zákazníky?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vyhledej název firmy na Googlu a sleduj panel s firmou vpravo, případně mapy.google.com. Zkontroluj kategorii, otevírací dobu, telefon, odkaz na web, fotografie a počet recenzí. U firem, kam zákazníci nechodí, ověř, jestli není veřejně zobrazená adresa sídla.

**Prošel, když.** Profil existuje, je ověřený, kategorie i kontakty souhlasí s webem, a firma bez provozovny má adresu skrytou.

**Pro klienta.** Firemní profil na Googlu bývá u regionálních firem větší zdroj telefonátů než web sám a je zdarma. Doplňte kategorii, otevírací dobu, telefon, odkaz na web a skutečné fotografie. Když nemáte provozovnu, kam chodí zákazníci, musí být adresa skrytá — Google za zveřejněnou adresu bez provozovny profily pozastavuje a firma pak z map zmizí úplně.

### SEO-16 — Jsou na webu uvedené povinné identifikační údaje — název, sídlo, IČO a údaj o zápisu v obchodním rejstříku?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři stránku Kontakt a patičku webu. Hledej IČO, adresu sídla a větu o zápisu v obchodním rejstříku včetně spisové značky (oddíl a vložka). Porovnej s výpisem na ares.gov.cz, jestli údaje souhlasí a nejsou zastaralé.

**Prošel, když.** Na webu je uvedený název, sídlo, IČO a u firem zapsaných v obchodním rejstříku i oddíl a vložka; údaje souhlasí s rejstříkem.

**Pro klienta.** Uvedení názvu, sídla, IČO a zápisu v obchodním rejstříku není doporučení, ale povinnost podle § 435 občanského zákoníku, která platí i pro informace zveřejněné na webu. Zároveň je to nejlevnější způsob, jak dát najevo, že za webem stojí skutečná firma, a Google sám uvádí, že důvěryhodnost je z hodnocení kvality to nejdůležitější. Doplnění je práce na deset minut.

### SEO-17 — Vejdou se titulky hlavních stránek do zhruba 60 znaků?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog > Page Titles > sloupec Title 1 Length; seřaď sestupně a spočítej stránky nad 60 a nad 70 znaků a pod 30 znaků. Hranice se nastavují v Config > Spider > Preferences.

**Prošel, když.** Titulky hlavních stránek mají 51 až 60 znaků, žádný nepřesahuje 70 a žádný není kratší než pár slov.

**Pro klienta.** Dlouhý titulek si Google přepíše po svém. Podle měření na 80 tisících titulcích přepisuje nad 70 znaků prakticky vždy, zatímco v pásmu 51 až 60 znaků nejméně. Přepsaný titulek znamená, že o textu, který zákazník vidí, nerozhoduje firma. Vejděte se zhruba do šedesáti znaků a nejdůležitější slova dejte dopředu. Na Seznamu je to ještě důležitější, ten bere titulek výhradně z toho, co je na stránce napsané, a jinak ho ovlivnit nelze.

### SEO-18 — Má hlavní nadpis stránky informační hodnotu, nebo je to logo, claim nebo pozdrav?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog > záložka H1 > sloupec H1-1, projdi homepage a stránky služeb. Ověř ve view-source hledáním <h1>. Nález: uvnitř H1 je jen název firmy nebo logo, případně fráze typu Vítejte na našich stránkách nebo Kvalita, na kterou se můžete spolehnout.

**Prošel, když.** Hlavní nadpis každé důležité stránky jednou větou říká, o čem stránka je, a významově sedí s titulkem.

**Pro klienta.** Hlavní nadpis má říct, o čem stránka je, ne že jste kvalitní. Kolik takových nadpisů stránka má, neřešte, Google potvrdil, že mu nevadí jeden, více ani žádný. Řešte, jestli vůbec něco říká. Vedlejší přínos: když se hlavní nadpis a titulek shodují v klíčových slovech, Google si titulek přepisuje výrazně méně často.

### SEO-19 — Jsou mezinadpisy na stránce skutečné nadpisy v kódu, nebo jen zvětšený tučný text?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ve Screaming Frogu zapni Config > Spider > Extraction > H2, pak crawl a záložka H2. Podezřelý stav: stránka vypadá pěkně strukturovaně, ale crawl vrátí jen jeden H1 a žádné H2 a H3. Potvrď ve view-source hledáním <h2>. Sleduj i přeskakované úrovně, tedy H1 rovnou na H3.

**Prošel, když.** Každý vizuální mezinadpis na hlavních stránkách je v kódu označený jako nadpis (h2, h3) a úrovně jdou po sobě bez přeskakování.

**Pro klienta.** Mezititulky musí být pro počítač označené jako nadpisy, ne jen zvětšené a ztučněné písmo. Vyhledávač i odečítač obrazovky pro nevidomé podle nich čtou osnovu stránky. Když tam nejsou, vidí jeden dlouhý blok textu. Seznam navíc přímo uvádí, že při řazení výsledků počítá výskyt nadpisů, odstavců a seznamů. Opravou zároveň zpřístupníte web lidem s postižením, což vás nic dalšího nestojí.

### SEO-20 — Soupeří o stejný dotaz víc stránek jednoho webu?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Zvenčí: pro 5 hlavních frází zadej na Googlu site:domena.cz "fráze" a spočítej, kolik vlastních URL se vrátí a jestli mezi nimi není stránka služby plus starý článek plus landing page z reklamy. S přístupem do Search Console spolehlivěji: Výkon > + Nový > Dotaz > vyplň přesnou frázi > přepni na záložku Stránky. Kanibalizace vypadá jako rozdělené zobrazení mezi dvě až tři URL nebo jejich střídání v čase.

**Prošel, když.** Na každou hlavní frázi cílí jedna stránka. Ostatní výskyty jsou jen zmínky a odkazy, ne konkurenční stránky na stejné téma.

**Pro klienta.** Když na totéž míří stránka služby, starý článek na blogu a landing page z reklamy, vyhledávač neví, kterou nabídnout, síla se rozdělí a nahoru se nedostane ani jedna. Vyberte jednu hlavní stránku, obsah z ostatních do ní slučte a staré adresy na ni trvale přesměrujte. U Seznamu spoléhejte na přesměrování, značku canonical často ignoruje. U malého webu je tenhle zásah levný a efekt bývá vidět rychle.

### SEO-21 — Odpoví stránka na hlavní otázku návštěvníka v první obrazovce, nebo až po několika odstavcích firemního povídání?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Otevři 5 nejdůležitějších stránek na desktopu i na mobilu a přečti jen to, co je vidět bez rolování. Ptej se: vím, co firma nabízí, komu, a co mám udělat dál? Zároveň hledej opačný extrém, tedy stránku služby o třech větách, ze které se nedá zjistit, co je v ceně a jak spolupráce probíhá.

**Prošel, když.** Na první obrazovce je konkrétní odpověď a viditelný další krok. Žádná hlavní stránka není tak krátká, že neodpoví na základní otázky, ani tak dlouhá, že odsune cenu a kontakt pod několik obrazovek.

**Pro klienta.** Nejde o počet slov, Google opakovaně říká, že délka textu není měřítko kvality. Jde o to, aby čtenář hned nahoře zjistil, co děláte, pro koho a jak pokračovat. Na prodejních stránkách nesmí text odsunout cenu a kontakt dolů. A když má stránka služby tři věty, doplňte, co lidé potřebují vědět před poptávkou (co je v ceně, jak to probíhá, jak dlouho to trvá) — ne 1 500 slov kvůli délce.

### SEO-22 — Jsou klíčové údaje (ceník, technické parametry, rozsah služby, kontakt) napsané textem, nebo jen v obrázku či v PDF?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Na stránce zkus myší označit text ceníku a parametrů. Co nejde označit, je obrázek. Ověř přes curl -s https://domena.cz/cenik | grep "Kč", nebo Ctrl+F v prohlížeči na konkrétní částku. Zkontroluj i to, jestli hlavní informace nejsou schované jen v PDF ke stažení.

**Prošel, když.** Ceny, parametry i kontaktní údaje jdou na stránce označit a zkopírovat jako text.

**Pro klienta.** Co je uvnitř obrázku, vyhledávač nepřečte. Seznam to říká přímo: text v obrázku nemusí při zařazování stránky vůbec zohlednit. Ceník ani technické parametry proto nedávejte jako obrázek nebo PDF, ale jako normální text na stránce. Totéž platí pro odpovědi od AI: co není textem, do nich nemá jak proniknout.

### SEO-23 — Odpovídá aspoň polovina posledních deseti článků na otázku, kterou si zákazník klade před nákupem?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Otevři výpis blogu nebo aktualit, projdi 10 posledních článků a u každého napiš dotaz, na který odpovídá. Vánoční přání, oznámení dovolené a fotky z firemního večírku se počítají jako ne. Zapiš datum posledního článku s odborným obsahem.

**Prošel, když.** Aspoň 5 z 10 posledních článků odpovídá na konkrétní zákaznickou otázku a poslední takový článek je mladší než rok.

**Pro klienta.** Blog plný přání a firemních oznámení nepřivede nikoho. Buď ho zrušte a energii dejte do stránek služeb, nebo pište na otázky, které zákazníci řeší před objednávkou: jak vybrat, srovnání variant, kolik to stojí, jak to dopadlo u jiného klienta. Mít blog samo o sobě není cíl a je to nejčastější způsob, jak malá firma promrhá rozpočet na marketing.

### SEO-24 — Může se firma dostat do odpovědí ChatGPT, Perplexity a dalších AI vyhledávačů, nebo je jim web zavřený?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** V domena.cz/robots.txt hledej dvě různé skupiny. Vyhledávací roboti: OAI-SearchBot, Claude-SearchBot, PerplexityBot — jejich blokace vyřadí firmu z citací v AI odpovědích. Trénovací roboti: GPTBot, ClaudeBot, Google-Extended, Seznam-Extended, AI, MachineLearning — jejich blokace vyhledávání neovlivní. Zjisti také, jestli web běží za Cloudflare (curl -sI https://domena.cz | grep -i "cf-ray\|server"); Cloudflare od 1. 7. 2025 u nových domén blokuje AI roboty ve výchozím nastavení a v robots.txt to vidět není.

**Prošel, když.** Vyhledávací AI roboti nejsou v robots.txt zakázaní, web není za výchozím blokováním Cloudflare, a případný zákaz trénovacích robotů je vědomé rozhodnutí firmy.

**Pro klienta.** Rozlište dvě věci. Roboti, kteří sbírají data na trénování AI, se dají klidně zakázat, na vyhledávání to nemá vliv. Roboti, kteří hledají odpovědi pro uživatele, jsou něco jiného: když zakážete je, firmu v ChatGPT ani Perplexity nikdo nenajde a nikdo si toho nevšimne, protože to běžné SEO nástroje neukazují. Zvláštní pozor u webů za Cloudflare, kde to bývá zapnuté, aniž o tom kdokoli ví. Speciální soubory typu llms.txt naopak nepotřebujete, Google výslovně uvádí, že je nepoužívá.

### SEO-25 — Existuje aktuální sitemap.xml, je uvedená v robots.txt plnou adresou a fungují stránky, které obsahuje?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři domena.cz/robots.txt (řádek Sitemap: musí obsahovat plnou adresu včetně https://) a domena.cz/sitemap.xml. Zkontroluj, jestli jsou v ní všechny stránky služeb a jestli tam nejsou už smazané stránky. Namátkově otevři 10 URL ze sitemapy, případně přes curl -sI URL a sleduj stavový kód 200.

**Prošel, když.** Sitemapa existuje, obsahuje aktuální stránky včetně všech služeb, v robots.txt je uvedená absolutní adresou a vzorek 10 URL se načte bez chyby a bez přesměrování.

**Pro klienta.** Sitemapa je seznam stránek, který web posílá vyhledávačům, aby na žádnou nezapomněly. Nechte ji generovat automaticky ze systému webu, ať nezastarává, a v robots.txt uvádějte plnou adresu i s https://, protože Seznam zkrácený zápis nepřijme. Priority stránek v ní neřešte, na pořadí ve výsledcích nemají vliv.

### SEO-26 — Vede web z www i bez www a z http i https na jednu jedinou adresu, jedním přesměrováním?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Postupně spusť curl -sIL http://domena.cz, http://www.domena.cz, https://domena.cz a https://www.domena.cz a sleduj řádky Location a stavové kódy. Vyzkoušej i /index.php a /index.html. Nález: dvě verze webu se načtou samostatně, nebo přesměrování jde přes dva a víc skoků.

**Prošel, když.** Všechny čtyři varianty adresy končí jedním přesměrováním 301 na stejnou cílovou adresu.

**Pro klienta.** Když se web načte pod víc adresami, vyhledávač je bere jako víc různých webů a sílu si mezi ně rozdělí. Seznam to řadí přímo mezi nevhodné techniky: jednu adresu si vybere jako hlavní a ostatní znevýhodní, přičemž hlavní nemusí být ta, kterou chcete. Nastavení je práce na pár hodin pro toho, kdo web spravuje, a dělá se jednou provždy.

### SEO-27 — Je web napojený na Seznam Webmaster, a to na variantu s https?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** view-source homepage, hledej meta name="seznam-wmt"; případně zkus, jestli v kořeni webu leží soubor seznam-wmt-<kód>.txt. Potvrzení s klientem přihlášením na reporter.seznam.cz/wm/. Zkontroluj, že ověřený web je https varianta a že správcem je někdo z firmy.

**Prošel, když.** Web je v Seznam Webmasteru ověřený pod https variantou a účet spravuje člověk z firmy.

**Pro klienta.** Seznam má vlastní obdobu Search Console a je zdarma. Ukazuje, kolik stránek jeho robot našel a kolik jich má zařazených. Dva detaily, na kterých to lidem padá: http a https se počítají jako dva různé weby, takže ověřte tu s https; a web může mít jen jednoho správce, přičemž při jeho změně se nenávratně smažou data starší dvou měsíců. Zakládejte proto účet pod firemním e-mailem. Nástroj je zatím v testovací verzi, takže výkyvy v grafech neznamenají hned problém.

### SEO-28 — Shodují se název, adresa a telefon na webu, na Firmy.cz, v profilu na Googlu a v rejstříku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři vedle sebe čtyři zdroje: patičku a stránku Kontakt na webu, zápis na Firmy.cz, panel firmy na Googlu a výpis z ares.gov.cz. Porovnej znak po znaku, včetně právní formy, pořadí ulice a čísla, PSČ a formátu telefonního čísla.

**Prošel, když.** Ve všech čtyřech zdrojích je stejný název firmy, stejná adresa a stejné telefonní číslo.

**Pro klienta.** Když se údaje o firmě liší podle toho, kde je člověk najde, ztrácí důvěru zákazník i vyhledávač, protože nemá jak potvrdit, že jde o jednu a tutéž firmu. Sjednoťte název, adresu i formát telefonu všude na stejný tvar, nejlépe podle výpisu z rejstříku. Je to hodina práce a týká se to i starých zápisů v katalozích.

### SEO-29 — Je město nebo region, kde firma působí, uvedený v textu stránek, ne jen v patičce?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ctrl+F na homepage a na stránkách služeb hledej název města a kraje. Plošně ve Screaming Frogu: Config > Custom > Search, zadej název města, spusť crawl a otevři záložku Custom Search — ukáže, na kolika a kterých stránkách se výraz vyskytuje.

**Prošel, když.** Homepage i hlavní stránky služeb zmiňují působiště přímo v textu, například větou o tom, kam firma jezdí nebo kde má zákazníky.

**Pro klienta.** Když se web nikde v textu nezmíní, kde firma působí, nemá se jak dostat k lidem, kteří hledají službu i s městem. U řemesel, servisů, výroby na zakázku a regionálních dodavatelů to bývá podstatná část poptávek. Adresa v patičce nestačí, napište přímo do textu, kam jezdíte a odkud jsou vaši zákazníci.

### SEO-30 — Jsou na webu jména, role a fotografie skutečných lidí z firmy, a mají články uvedeného autora?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Projdi stránky O nás, Kontakt a Tým a spočítej lidi, u kterých je jméno, role i vlastní fotografie. Fotobanku poznáš tak, že obrázek přetáhneš do images.google.com nebo použiješ Google Lens a najdeš ho na desítkách jiných webů. U blogu zkontroluj, jestli je u článků uvedený autor a jestli jeho jméno vede na stránku, kde je vidět, čím se zabývá.

**Prošel, když.** Aspoň u kontaktních osob je jméno, role, vlastní fotografie a přímý kontakt; články mají uvedeného autora.

**Pro klienta.** U zakázek za statisíce se lidé rozhodují podle toho, komu je svěří. Web bez jediného jména a bez tváře vypadá jako schránka. Doplňte jména, pozice a skutečné fotografie místo fotobanky a u článků uveďte, kdo je psal a proč tomu rozumí. Je to práce na jedno odpoledne, nestojí to nic a je to část důvěryhodnosti, kterou malá firma opravdu ovlivní — na rozdíl od budování jména v oboru, které trvá roky.

### SEO-31 — Je u referencí uvedený název klientské firmy, jméno konkrétního člověka a co se udělalo?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Otevři stránku Reference (případně sekci na homepage) a spočítej, u kolika referencí je název firmy, jméno a pozice konkrétní osoby a popis výsledku. Formulace typu spokojený zákazník z Prahy nebo přední výrobce z oboru automotive se počítají jako ne.

**Prošel, když.** Aspoň tři reference nesou název klientské firmy, jméno konkrétní osoby a popis toho, co se dělalo a jak to dopadlo.

**Pro klienta.** Anonymní reference nemá pro zákazníka hodnotu, protože si nemá co ověřit. Zavolejte třem až pěti klientům a poproste o souhlas s uvedením názvu firmy, jména a výsledku, ideálně i s logem a číslem (kolik kusů, za jak dlouho, kolik to ušetřilo). Nestojí to nic než pár telefonátů a je to jedna z nejsilnějších věcí, které malá firma na webu mít může.

### SEO-32 — Má homepage, hlavní stránky služeb a stránka s cenami vlastní ručně napsaný popisek pod odkazem ve výsledcích vyhledávání?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog > záložka Meta Description > filtry Missing a Duplicate. Ručně přečti popisky u homepage, stránek služeb a ceníku a posuď, jestli lákají ke kliknutí, nebo je to zkopírovaný první odstavec. Podstránky typu jednotlivé články neřeš.

**Prošel, když.** Homepage, hlavní stránky služeb a ceník mají vlastní srozumitelný popisek. U zbytku webu se duplicity a chybějící popisky nepočítají jako nález.

**Pro klienta.** Popisek pod nadpisem ve výsledcích má smysl psát ručně jen u několika nejdůležitějších stránek. Google si ho zhruba v šesti případech z deseti stejně přepíše podle toho, co člověk hledal, a na hodnocení webu nemá vliv. Neplaťte nikomu za psaní popisků ke stovkám podstránek, jsou to vyhozené peníze.

### SEO-33 — Mají obrázky, které nesou informaci (realizace, produkty, schémata), textový popis?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog > záložka Images > filtr Missing Alt Text. Projdi seznam a všímej si, jestli mezi nimi nejsou fotky realizací, produktů a schémat. Dekorativní grafika a ikony popis mít nemusí, ty nálezem nejsou.

**Prošel, když.** Fotky realizací, produktů a schémata mají krátký popis toho, co je na nich. Dekorativní obrázky jsou bez popisu záměrně.

**Pro klienta.** Obrázky nemají popis, takže vyhledávač neví, co je na nich, a odečítač obrazovky je nevidomému nepřečte. U fotek realizací a produktů tím přicházíte o návštěvnost z vyhledávání obrázků, které u řemesel a výroby není zanedbatelné. Stačí u každé důležité fotky napsat jednou větou, co na ní je, ne seznam klíčových slov.

### SEO-34 — Má web platná strukturovaná data o firmě a funkční náhled při sdílení odkazu?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vlož adresu homepage do search.google.com/test/rich-results a do validator.schema.org a projdi chyby a varování. Náhled při sdílení ověř ve view-source hledáním og:title, og:description a og:image, nebo vložením odkazu do zprávy na LinkedInu či Facebooku a sledováním, co se zobrazí.

**Prošel, když.** Na homepage je platný záznam typu Organization nebo LocalBusiness s názvem, adresou a telefonem a odkaz na web se při sdílení zobrazí s názvem, popiskem a obrázkem.

**Pro klienta.** Strukturovaná data jsou technický zápis údajů o firmě určený pro vyhledávače. U výrobní nebo servisní firmy z nich nevzniknou hvězdičky ani ceny ve výsledcích, na ty typem obsahu nedosáhnete a nikdo by vám je neměl slibovat. Reálný přínos jsou konzistentní údaje o firmě a slušný náhled odkazu při sdílení, který používá i Seznam. Pro odpovědi od AI žádné speciální zápisy potřeba nejsou, Google to výslovně uvádí.

### SEO-35 — Zobrazuje se u hlavních dotazů klienta odpověď od AI, a je v ní web citovaný?

**⚪ nízká** · náprava: týdny · zvenčí

**Jak ověřit.** Zadej 5 hlavních dotazů v anonymním okně na Googlu a sleduj, jestli se nahoře objeví Přehled od AI a které weby jsou v něm uvedené jako zdroje. Týchž pět dotazů zadej do ChatGPT a Perplexity s dovětkem v ČR a zapiš citované zdroje. S přístupem: Search Console > Výkon, report Generative AI performance (obsahuje jen zobrazení, žádné prokliky).

**Prošel, když.** Je zaznamenané, u kterých dotazů se AI odpověď zobrazuje a kdo je v ní citovaný; ideálně je mezi zdroji i web klienta.

**Pro klienta.** Tohle je zjištění výchozího stavu, ne úkol na příští týden. Zapište si, u kterých dotazů odpovídá Google i ChatGPT sám a koho citují, ať je za půl roku s čím srovnávat. Nekupujte si optimalizaci pro AI přes speciální soubory: do AI odpovědí se dostane obsah, který je na stránce textem, odpovídá na otázku hned nahoře a robotům není zakázaný. Nic jiného zatím nikdo prokazatelně neumí a měření dopadu na český trh zatím neexistuje.

---

## 5. Obsah a sdělení

**Čas na oblast:** 180–210 minut vlastní práce auditora u webu se třemi stránkami služeb a jednou případovkou (příprava a očištění textů 20 min, měření skriptem a PONK 15 min, checklisty stránky služby a případovky 45 min, počítání konkrétnosti a žargonu 30 min, skenovatelnost a nadpisy 25 min, cena/CTA/formulář 15 min, zápis s doslovnými citacemi a přepsanými ukázkami 40 min). Navíc 30–40 minut na přípravu a vyhodnocení testu pěti sekund a testu rodiče — sběr odpovědí ale trvá 1–2 dny kalendářního času, proto se spouští jako první krok auditu. Dva body vyžadující přístupy (poptávky, Search Console) přidají 20–30 minut práce plus čekání na klienta. Poprvé na neznámém webu počítej +30 minut na zorientování.

### SDEL-01 — Řekli aspoň 4 z 5 testerů mimo obor po pěti sekundách správně, co firma dělá a komu to prodává?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Udělej screenshot horní části homepage bez scrollování: prohlížeč na šířku 1440 px, F12 → Ctrl+Shift+P → napiš 'screenshot' → 'Capture area screenshot' a obtáhni viditelnou část. Screenshot nahraj na lyssna.com (stačí Free plán zdarma, 15 odpovědí): Create test → typ Five second test → Upload image → tři otevřené otázky: 1) Co ta firma dělá? 2) Komu to prodává? 3) Co po vás chce? Odkaz na test pošli 5 lidem mimo klientův obor (panel Lyssny češtinu prakticky nemá, testery si musíš sehnat sám). Odpovědi čti v záložce Results → Responses a opiš je do reportu doslova. Bez nástroje: ukaž screenshot na telefonu přesně 5 sekund podle stopek, pak schovej a zapiš odpověď.

**Prošel, když.** 4 z 5 testerů správně uvede obor i cílového zákazníka. Neprošlo: obor ano a zákazník ne, nebo 3 a více testerů neví či hádá špatně.

**Pro klienta.** Pět lidí mimo váš obor se z úvodní stránky za pět sekund nedozvědělo, co prodáváte a komu. Tím se znehodnocuje veškerá návštěvnost včetně placené reklamy — platíte za lidi, kteří odejdou dřív, než pochopí, kam se dostali. V reportu máte jejich doslovné odpovědi; hlavní nadpis a větu pod ním přepište tak, aby na obě otázky odpovídaly samy.

### SDEL-02 — Obsahuje hlavní nadpis (H1) na homepage zároveň to, co firma dělá, i to, pro koho?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři homepage, F12 → záložka Console → vlož: document.querySelectorAll('h1').forEach(h=>console.log(h.innerText)) a zkopíruj text H1 doslova. Pak zakryj palcem logo a název firmy a odpověz: mohla by tahle stránka patřit kterékoli firmě v oboru? Ověřuj dvě věci zvlášť: (a) je v H1 nebo v podtitulu přímo pod ním pojmenovaná služba či produkt, (b) je tam pojmenovaný zákazník (obor, velikost firmy, situace).

**Prošel, když.** H1 nebo podtitul přímo pod ním obsahuje obor činnosti i cílového zákazníka a po zakrytí loga se nedá zaměnit s konkurencí. Neprošlo: 'Vaše cesta k úspěchu', 'Inovace, na které se můžete spolehnout', 'Jsme tu pro vás'.

**Pro klienta.** Hlavní nadpis je nejdražší místo na webu — přečte ho každý návštěvník a většina už nic dalšího. Teď na něm stojí věta, kterou by o sobě mohl napsat kdokoli. Nahraďte ji vzorcem [co děláme] pro [koho]: místo 'Vaše cesta k úspěchu' → 'Účetnictví a mzdy pro výrobní firmy od 20 do 200 zaměstnanců' a pod to jednu větu s důkazem, například 'Převezmeme agendu do 30 dní včetně přechodu ze stávajícího systému.' Poetickou větu si můžete nechat, ale nad nadpisem, ne místo něj.

### SDEL-03 — Má stránka služby aspoň 8 z 9 povinných prvků?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Vyber 3 nejdůležitější stránky služeb (podle hlavního menu a podle toho, co klient označí za hlavní zdroj příjmu). U každé odškrtej v tabulce ano/ne: 1) název služby jazykem zákazníka, ne interním názvem produktu; 2) pro koho to je a pro koho ne; 3) jaký problém to řeší, popsaný slovy, kterými si ho zákazník sám vygooglí; 4) co konkrétně dostane — výčet výstupů, ne vlastností; 5) jak to probíhá, kroky s časy; 6) jak dlouho to trvá; 7) kolik to stojí nebo aspoň rozpětí či 'od'; 8) důkaz — případová studie, čísla, jmenovaná reference; 9) jeden jednoznačný další krok. Skóruj medián ze tří stránek, ne nejhorší nález.

**Prošel, když.** Medián ze tří stránek je 8–9 splněných prvků. 6–7 je díra, 5 a méně vážný problém. Typický český B2B web má 3–4.

**Pro klienta.** Na stránce služby se rozhoduje o poptávce a vaše stránka odpovídá jen na část otázek, které si zákazník klade. Nejčastěji chybí: pro koho služba není, jak dlouho trvá, kolik stojí a co přesně zákazník dostane do ruky. Doplňujte v tomto pořadí, od nejlevnějšího: pro koho to je a pro koho ne, co konkrétně dostanete, kroky s termíny, cenové rozpětí, jedna případová studie. Nepřepisujte všechny služby najednou — udělejte jednu vzorovou a po měsíci změřte, jestli se změnila kvalita poptávek.

### SDEL-04 — Je někde na stránce služby napsáno, pro koho služba NENÍ?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Na třech vybraných stránkách služeb použij Ctrl+F a hledej: 'není pro', 'nehodí se', 'nevhodné', 'neděláme', 'nepracujeme', 'minimální', 'od ... zaměstnanců'. Pak stránku přečti a zapiš doslovnou větu, která vymezuje segment (obor, velikost firmy, rozpočet, region, typ zakázky). Věta typu 'pro firmy všech velikostí' se nepočítá, ta vymezení ruší.

**Prošel, když.** Aspoň na jedné ze tří stránek služby je konkrétní vymezení, koho firma neobsluhuje — velikost, obor, rozpočet nebo typ zakázky.

**Pro klienta.** Web nikde neříká, pro koho vaše služba není. Důsledek znáte: chodí vám poptávky od lidí, kterým nemůžete pomoct, a čas na jejich odbavení nikdo neplatí. Jedna věta typu 'Nepracujeme s firmami pod 15 zaměstnanců a neděláme jednorázové zakázky pod 50 tisíc' odfiltruje část těchto poptávek dřív, než vůbec dorazí. Je to nejlevnější úprava v celém auditu — jedna věta na každou stránku služby.

### SDEL-05 — Je na 300 slov textu služby víc ověřitelných tvrzení než prázdných přídavných jmen?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Ze stránky služby vezmi 300 slov souvislého textu (počet ověř na pocetslov.cz). Rozděl je do tabulky o dvou sloupcích: vlevo tvrzení obsahující číslo, datum, jméno, lhůtu nebo měřitelnou jednotku; vpravo hodnotící přídavná jména bez důkazu. Pravý sloupec najdeš rychle přes Ctrl+F: 'kvalitn', 'komplexn', 'profesionál', 'modern', 'individuáln', 'spolehliv', 'inovativ', 'flexibiln', 'dlouholet', 'na míru', 'široká nabídka'. Obě strany spočítej a tabulku dej do reportu — prázdný pravý sloupec mluví sám.

**Prošel, když.** Ověřitelných tvrzení je víc než prázdných přídavných jmen. Kritické je méně než 3 ověřitelná tvrzení na 300 slov.

**Pro klienta.** Text slibuje, ale nic nedokládá. Slova jako kvalitní, komplexní nebo individuální přístup nenesou informaci — nikdo o sobě netvrdí opak, takže vás od konkurence neodliší. Nahraďte je čísly a jmény: 'dlouholeté zkušenosti' → 'od roku 2011, 340 zakázek', 'rychle' → 'do 48 hodin', 'individuální přístup' → 'zakázku vede jeden člověk od nabídky po předání, jeho jméno a telefon dostanete první den'. Kde k tvrzení nejde doplnit číslo, obvykle není pravdivé a patří pryč.

### SDEL-06 — Dá se text stránky beze změny přenést na web konkurence, aniž by lhal?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Vezmi úvodní odstavec homepage a úvodní odstavec stránky služby, smaž z nich název firmy a projdi větu po větě dvěma testy: (1) tvrdila by konkurence opak? — nikdo nepíše 'jsme nespolehliví', takže 'spolehlivý' nesděluje nic; (2) dala by se ta věta napsat i o konkurenci? Spočítej věty, které oběma testy projdou, tedy platí jen o klientovi.

**Prošel, když.** V každém z obou odstavců je aspoň jedna věta, kterou o sobě konkurence napsat nemůže — obsahuje konkrétní číslo, jméno, situaci nebo omezení.

**Pro klienta.** Váš text platí o kterékoli firmě ve vašem oboru — dá se zkopírovat konkurenci a nikdo si ničeho nevšimne. Zákazník z něj tedy nemá důvod vybrat si právě vás. Doplňte to, co nikdo jiný napsat nemůže: jména lidí, čísla konkrétních zakázek, situace, které jste řešili, klidně i to, co neděláte.

### SDEL-07 — Drží se text sloves, nebo je poskládaný z podstatných jmen typu 'zajištění realizace optimalizace'?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** PONK (quest.ms.mff.cuni.cz/ponk/): vlož čistý text stránky služby → spusť analýzu → v přehledu metrik odečti Aktivitu a projdi pravidla 'Nedostatek sloves' (podíl sloves pod 0,06), 'Přemíra podstatných jmen' a 'Opakování pádů' (víc než 3 slova za sebou ve stejném pádu); nástroj místa v textu vybarví. Ruční kontrola bez nástroje: Ctrl+F na koncovky '-ání', '-ení', '-ace' a hledej řetězce tří a více podstatných jmen za sebou ve druhém pádu.

**Prošel, když.** Podíl sloves nad 0,06 a v textu nejsou řetězce tří a více podstatných jmen ve stejném pádu za sebou.

**Pro klienta.** Text je psaný úřednicky — děje jsou schované v podstatných jménech ('zajištění realizace optimalizace' místo 'zlepšíme'). V češtině je tohle větší brzda čtení než dlouhé věty: podle propočtu z českého vzorce se výměna jednoho dlouhého abstraktního slova vyrovná zkrácení věty o téměř čtyři slova. Praktické pravidlo: 'implementace' → 'zavedení', 'optimalizace' → 'zlepšení', 'zabezpečení' → 'ochrana', a nejlépe rovnou sloveso: zavedeme, zlepšíme, ochráníme.

### SDEL-08 — Dá se z přečtení pouhých nadpisů a tučného textu pochopit, co stránka nabízí a komu?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** K výpisu nadpisů (viz předchozí bod) přidej výpis tučného textu: F12 → Console → document.querySelectorAll('strong,b').forEach(e=>console.log(e.innerText.trim())). Slož obojí za sebe a přečti jako souvislý text. Odpověz: vzniklo srozumitelné sdělení o tom, co firma nabízí a komu? Zvlášť si všímej nadpisů bez informace: 'Naše služby', 'O nás', 'Proč my', 'Reference'.

**Prošel, když.** Z osnovy nadpisů a tučného textu vznikne srozumitelné sdělení a víc než polovina nadpisů něco říká, místo aby jen označovala sekci.

**Pro klienta.** Lidé na webu nečtou, projíždějí očima nadpisy a tučná slova — z průměrné návštěvy stihnou přečíst nanejvýš pětinu textu. Když si na vašem webu přečteme jen nadpisy, nevznikne z toho žádné sdělení. Nadpis má něco říkat, ne označovat sekci: místo 'Proč my' → 'Máme vlastní techniku, nenajímáme subdodavatele', místo 'Naše služby' → rovnou názvy služeb. Jsou to hodiny práce a patří to mezi nejlevnější úpravy vůbec.

### SDEL-09 — Je poměr oslovování zákazníka k mluvení o sobě (vy : my) aspoň 1,0?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Nepočítej zájmena — čeština je vypouští ('Zajistíme vám úsporu' neobsahuje slovo my, 'Získáte přehled' neobsahuje slovo vy). Spusť python3 cz_read.py stranka.html a čti pole vy_ku_my; skript počítá slovesné koncovky 1. osoby množného čísla (-íme, -áme, -eme) proti 2. osobě (-te) plus zájmena a přivlastňovací tvary. Měř zvlášť homepage a zvlášť 2–3 podstránky. U deseti náhodných shod ručně ověř, že skript nechytá nesouvisející tvary.

**Prošel, když.** vy_ku_my ≥ 1,0. 0,5–1,0 je slabé, pod 0,5 červená. Medián českých B2B webů: 0,23 na podstránkách, 0,43 na homepage.

**Pro klienta.** Váš web mluví o sobě několikanásobně víc než o zákazníkovi — naměřený poměr je [doplň číslo], typický český B2B web má 0,23 a zdravá hodnota je aspoň jedna ku jedné. Nejde o to přestat o firmě mluvit; jde o to otočit věty na výsledek pro zákazníka: 'Disponujeme moderním strojovým parkem' → 'Vyrobíme díl s přesností 0,01 mm a dodáme do 10 dnů.' Projděte věty začínající slovy Nabízíme, Zajišťujeme, Poskytujeme, Disponujeme — to je celý seznam práce.

### SDEL-10 — Dokáže člověk mimo obor po přečtení stránky služby vlastními slovy převyprávět, co firma nabízí a komu?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Vezmi jednoho až tři lidi mimo klientův obor (rodič, partner, kamarád z jiné branže). Nech je v klidu přečíst stránku služby a pak zavři notebook. Neptej se 'bylo to srozumitelné?', na to každý odpoví ano. Ptej se: 'Řekni mi svými slovy, co ta firma dělá a komu.' Zapisuj doslova. Kde tester zaváhá nebo použije slovo z textu, aniž ho umí vysvětlit, podtrhni to — to je žargon a patří do reportu jako citace.

**Prošel, když.** Tester převypráví nabídku správně a bez zaváhání vlastními slovy. Neprošlo, když pochopí jen obor, ne konkrétní službu.

**Pro klienta.** Dali jsme vaši stránku přečíst lidem mimo obor a nedokázali ji převyprávět vlastními slovy. Není to jen otázka laiků: u větších nákupů čte web i ten, kdo schvaluje rozpočet a ve vašem oboru nepracuje — jednatel nebo finanční ředitel — a ten musí nákup obhájit svými slovy před ostatními. Když to nedokáže, zakázka spadne pod stůl bez ohledu na to, jak dobří jste.

### SDEL-11 — Je na 300 slov méně než pět nevysvětlených oborových termínů a anglicismů?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Ve stejném 300slovném vzorku jako u konkrétnosti podtrhni tři druhy slov zvlášť: (a) oborové termíny (API, ERP, retenční nádrž); (b) korporátní vatu (synergie, řešení na míru, komplexní přístup, nastavení procesů); (c) anglicismy tam, kde existuje české slovo (delivery, insight, onboarding, case study, meeting). U každého termínu zkontroluj, jestli je při prvním výskytu vysvětlený jednou větou, a spočítej ty nevysvětlené.

**Prošel, když.** Méně než 5 nevysvětlených termínů na 300 slov a každý oborový termín je při prvním použití vysvětlen jednou větou.

**Pro klienta.** Text používá slova, kterým rozumí jen člověk z oboru. Buď je nahraďte českým slovem (delivery → dodání, insight → zjištění, case study → případová studie), nebo je při prvním použití jednou větou vysvětlete. Výzkum ukazuje, že odborné termíny zdržují čtení i tehdy, když vysvětlené jsou — o to méně jich má smysl používat zbytečně.

### SDEL-12 — Má nejlepší případová studie na webu aspoň 6 ze 7 prvků?

**🟠 vysoká** · náprava: týdny · zvenčí

**Jak ověřit.** Najdi sekci Reference, Případové studie nebo Realizace a vezmi tu nejpodrobnější. Odškrtej ano/ne: 1) jmenovaný klient — název firmy, ne 'přední výrobce ze středních Čech'; 2) výchozí situace s čísly (co to stálo, jak dlouho to trvalo předtím); 3) co klient zkoušel dřív a proč to nešlo; 4) co jsme udělali — konkrétní kroky, ne 'navrhli jsme řešení na míru'; 5) výsledek v číslech s obdobím; 6) citace jmenovaného člověka s pozicí a fotkou; 7) doba realizace a orientační rozsah.

**Prošel, když.** 6–7 prvků splněno a aspoň jedno číslo má uvedenou srovnávací základnu. 4–5 je slabé; 3 a méně, anonymní klient nebo žádná čísla se hodnotí, jako by případová studie na webu nebyla.

**Pro klienta.** Reference na webu nic nedokazují — chybí jméno klienta a čísla, takže si čtenář může myslet, že jste si je vymysleli. Anonymní studie má nulovou důkazní hodnotu. Zavolejte třem klientům a zeptejte se, jestli je můžete jmenovat; v B2B to většina povolí, jen se jich nikdo neptá. Ke každé studii doplňte tři čísla: stav před, výsledek a za jak dlouho. A pište o tom, co se změnilo klientovi, ne o tom, co jste vy udělali.

### SDEL-13 — Kolik z posledních 30 poptávek bylo mimo cílovou skupinu a na co se lidé ptají jako první?

**🟠 vysoká** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Potřebuješ přístup do klientovy schránky poptávek nebo do CRM — vyžádej si sdílení složky nebo export posledních 30 poptávek do tabulky. Roztřiď je na (a) v cílové skupině a (b) mimo ni (jiná velikost firmy, jiný obor, služba, kterou firma nedělá). Zvlášť spočítej, kolik poptávek už v prvním e-mailu žádá cenu, termín nebo rozsah — tyhle otázky patří na web.

**Prošel, když.** Méně než 20 % poptávek je mimo cílovou skupinu a v prvních e-mailech se neopakuje pořád stejná chybějící informace.

**Pro klienta.** Vaše vlastní poptávky ukazují, co na webu chybí: [X] z posledních 30 bylo od lidí, kterým nemůžete pomoct, a [Y] z nich se hned ptalo na to samé — typicky na cenu a termín. Každá taková otázka je věta, která má být přímo na stránce služby. Když ji doplníte, poptávek ubude, ale zakázek přibude, protože lidé přijdou už rozhodnutí.

### SDEL-14 — Dozví se návštěvník řádovou cenu, aniž by musel napsat nebo zavolat?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Projdi web jako zákazník: menu, stránky služeb, případný ceník, sekce častých dotazů. Ctrl+F na 'Kč', 'cena', 'ceník', 'od ', 'kalkulace', 'sazba', 'hodinov', 'měsíčn'. Za splněné se počítá konkrétní cena, rozpětí, 'od', nebo popsaný způsob výpočtu ('účtujeme podle počtu zaměstnanců, typicky 8–15 tis. Kč měsíčně'). 'Cena dohodou' a 'individuální kalkulace' se nepočítají.

**Prošel, když.** Aspoň jedna z uvedených forem cenové informace je dohledatelná do dvou kliknutí ze stránky služby.

**Pro klienta.** Na webu není žádná cenová informace. Není to chyba, je to rozhodnutí — ale má důsledek: dostáváte víc poptávek, přitom menší podíl z nich má rozpočet a skončí zakázkou. Když nemůžete říct pevnou cenu, řekněte aspoň, jak ji počítáte a od jaké částky začínáte. Lidé, kterým to nevyjde, vám nenapíší a ušetří vám čas; ti ostatní přijdou připravení a jednání je kratší.

### SDEL-15 — Je na stránce služby právě jeden hlavní další krok a říká text tlačítka, co se stane po kliknutí?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Na stránce služby spočítej vizuálně zvýrazněné výzvy k akci (tlačítka, bannery, vyskakovací okna). Pomůcka: F12 → Console → document.querySelectorAll('a.btn, button, [class*=button], [class*=cta]').forEach(e=>console.log(e.innerText.trim())) — z výpisu nech jen ty v hlavním obsahu stránky, ne v menu a patičce. Pak posuď text každého tlačítka: pojmenovává výsledek ('Chci nezávaznou kalkulaci', 'Zobrazit ceník'), nebo jen mechaniku ('Odeslat', 'Více informací', 'Klikněte zde')?

**Prošel, když.** Jeden vizuálně dominantní další krok, ostatní jsou slabší. Text hlavního tlačítka pojmenovává výsledek, ne akci.

**Pro klienta.** Stránka nabízí návštěvníkovi několik stejně hlasitých možností najednou — zavolejte, napište, stáhněte, přihlaste se k newsletteru, sledujte nás. Když má člověk vybrat z pěti věcí, obvykle nevybere žádnou. Nechte na stránce jeden hlavní krok a pojmenujte ho výsledkem: místo 'Odeslat' → 'Chci nezávaznou kalkulaci', místo 'Více informací' → 'Zobrazit ceník'. Ostatní možnosti ponechte, ale vizuálně slabší.

### SDEL-16 — Je u formuláře napsáno, do kdy se firma ozve, kdo se ozve a co si má zákazník připravit?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři kontaktní formulář na stránce služby a přečti text nad tlačítkem, pod ním i na děkovací stránce. Odešli testovací poptávku a zkontroluj: (a) co se objeví po odeslání, (b) jestli přijde automatická odpověď a co v ní stojí. Hledáš tři konkrétní údaje: lhůtu ('do 24 hodin v pracovní dny'), člověka ('ozve se Jan Novák') a další krok ('připravte si prosím...').

**Prošel, když.** Aspoň lhůta a další krok jsou napsané u formuláře nebo na děkovací stránce, ideálně i jméno člověka, který se ozve.

**Pro klienta.** Když někdo odešle formulář, nedozví se, co bude dál. To je místo, kde lidé zbytečně couvají — a taky důvod, proč mezitím napíší i konkurenci. Stačí jedna věta u tlačítka: 'Ozveme se do 24 hodin v pracovní dny, volá Jan Novák, připravte si prosím poslední vyúčtování.' Je to úprava na deset minut a je vidět okamžitě.

### SDEL-17 — Je podíl vět delších než 22 slov pod 5 %?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ze stejného výstupu skriptu (python3 cz_read.py stranka.html) čti pole vet_nad_22_slov_pct a nejdelsi_veta. Kontrolně nebo bez skriptu: quest.ms.mff.cuni.cz/ponk/ → vlož čistý text bez menu a patičky → spusť analýzu → v seznamu pravidel zapni 'Příliš dlouhé věty', nástroj je v textu barevně vyznačí. Do reportu vypiš tři nejdelší věty doslova. Pozor na licenci: PONK je zdarma pro testování, pro komerční audit vyžadují podmínky užití písemný souhlas autorů.

**Prošel, když.** Méně než 5 % vět má přes 22 slov. 5–10 % je slabé, nad 10 % kritické. Medián českých B2B webů: 4,2 % na podstránkách.

**Pro klienta.** Část vět na webu má přes 22 slov — než člověk dojde na konec, ztratí začátek. Nejlepší důkaz je zkouška: přečtěte si tyhle tři věty z vašeho webu nahlas na jeden nádech. Každou z nich rozdělte na dvě až tři. Je to práce na jedno odpoledne a nevyžaduje psát texty znovu.

### SDEL-18 — Je na stránce právě jedna H1, nepřeskakují se úrovně nadpisů a je nadpis aspoň po každých 150 slovech?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** F12 → Console → document.querySelectorAll('h1,h2,h3,h4').forEach(h=>console.log(h.tagName,'|',h.innerText.trim())). Z výpisu zkontroluj počet H1 (má být jedna) a jestli se úrovně nepřeskakují (H1 → H3 bez H2). Celkový počet slov stránky vezmi z výstupu skriptu cz_read.py (pole slov) a vyděl ho počtem nadpisů H2 a H3.

**Prošel, když.** Právě jedna H1, žádné přeskočení úrovně a v průměru méně než 150 slov na jeden mezinadpis.

**Pro klienta.** Delší bloky textu nemají mezinadpisy, takže čtenář nemá kde zastavit a zorientovat se. Vkládejte nadpis zhruba po každých 150 slovech, tedy asi po dvou odstavcích. Nadpisy zároveň říkají vyhledávači, o čem stránka je — proto má stránka mít jeden hlavní nadpis a pod ním podnadpisy v pořadí, ne přeskakované.

### SDEL-19 — Jsou odstavce do 4–5 řádků, výčty v odrážkách a tučně jen klíčová sdělení?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři stránku na notebooku i v mobilním zobrazení (F12 → ikona telefonu, šířka 390 px) a projdi tři věci: (a) je nějaký odstavec delší než 5 řádků na desktopu; (b) je někde výčet napsaný ve větě čárkami místo odrážek; (c) je tučně celé souvětí nebo náhodná slova místo klíčových sdělení. Zapiš počet porušení na stránku a vyfoť nejhorší blok textu do reportu.

**Prošel, když.** Žádný odstavec nad 5 řádků na desktopu, výčty jsou v odrážkách a tučné zvýraznění nese sdělení — ne celé odstavce, ne náhodná slova.

**Pro klienta.** Text je nalitý v souvislých blocích, takže si z něj nikdo nic nevybere. Rozdělte odstavce na 4–5 řádků, výčty přepište do odrážek a tučně zvýrazněte to, co má člověk pochopit, i kdyby nic jiného nepřečetl. Neznamená to psát texty znovu, jen je jinak naformátovat — a měřeními je doloženo, že samotné členění textu výrazně zvýší jeho použitelnost.

### SDEL-20 — Má každé číslo a procento v referencích uvedenou základnu — z čeho na co, za jak dlouho a čím měřeno?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Ctrl+F na znak '%' napříč sekcí referencí a případových studií, k tomu projdi všechna čísla v perexech. U každého se zeptej: z jaké hodnoty na jakou, za jaké období, jak měřeno. 'Zvýšili jsme produktivitu o 30 %' bez těchto údajů je neověřitelné tvrzení a počítá se jako nesplněné.

**Prošel, když.** U všech čísel v referencích je uvedena výchozí hodnota nebo období a aspoň u jednoho i způsob měření.

**Pro klienta.** Čísla v referencích nemají srovnávací základnu, takže je nejde ověřit — a zkušený nákupčí je proto přeskočí. 'Zvýšili jsme produktivitu o 30 %' neříká nic; 'z 12 na 16 vyrobených kusů denně za tři měsíce, měřeno výrobním systémem' je důkaz. Tenhle rozdíl rozhoduje o tom, jestli reference pomáhá prodávat, nebo je jen výplní stránky.

### SDEL-21 — Obsahuje text aspoň jednu informaci, kterou by o sobě nemohla napsat žádná jiná firma v oboru?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Projdi stránku a odškrtej příznaky: 1) nulová specifičnost — ani číslo, jméno, datum nebo cena; 2) dokonalá symetrie — každá sekce stejně dlouhá, všude přesně tři odrážky; 3) prázdné spojovací fráze (Ctrl+F: 'v dnešní', 'nejen', 'klíčovým aspektem', 'v neposlední řadě', 'stále více'); 4) text platí o kterékoli firmě v oboru; 5) chybí autor a datum u článků. Automatické detektory AI textu nepoužívej — u nerodilých mluvčích mají přes 60 % chybnou pozitivitu a v placeném auditu jsou právní i reputační riziko.

**Prošel, když.** Nejvýš 3 příznaky. Čtyři a víc znamená, že text nenese žádnou vlastní informaci.

**Pro klienta.** Text nenese žádnou informaci, kterou by nemohl napsat kdokoli jiný ve vašem oboru — dá se přenést na web konkurence a nikdo si nevšimne. Netvrdíme, že ho psal stroj; to se prokázat nedá a není to podstatné. Podstatné je, že zákazníkovi nedává důvod vybrat si vás. Doplňte to, co máte jen vy: jména lidí, čísla konkrétních zakázek, situace, které jste řešili, i to, co neděláte. Vedlejší efekt: Google netrestá text podle toho, kdo ho psal, ale podle toho, jestli přináší něco navíc.

### SDEL-22 — Používá web stejná slova, jakými službu hledají zákazníci?

**🟡 střední** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Potřebuješ přístup do Google Search Console klienta: search.google.com/search-console → vlevo nahoře vyber web → levé menu Výkon → záložka Dotazy → nastav filtr na posledních 3 měsíce → seřaď podle zobrazení. Prvních 20 dotazů porovnej se slovy, kterými web službu pojmenovává v H1, v názvech služeb a v menu. Bez přístupu částečně nahradíš: napiš název služby do Googlu a projdi našeptávač a sekci 'Související vyhledávání' pod výsledky.

**Prošel, když.** Aspoň polovina z 20 nejčastějších dotazů se slovně shoduje s tím, jak web službu pojmenovává v nadpisu, menu nebo názvu služby.

**Pro klienta.** Služby máte na webu pojmenované interním jazykem, ale zákazníci je hledají jinými slovy. Vyhledávač i člověk pak stránku minou, protože se v ní nepoznají. Přejmenujte položky menu a nadpisy služeb na slova, která používají zákazníci — víme přesně, jaká to jsou, jsou v tabulce v reportu.

### SDEL-23 — Vychází čitelnost souvislých textů (FRE_cz) 50 a víc?

**⚪ nízká** · náprava: dny · zvenčí

**Jak ověřit.** Nepoužívej běžné online kalkulačky čitelnosti — počítají anglický vzorec a na češtině vycházejí i záporná čísla (naměřený medián −5,3). Ulož stránku (Ctrl+S → formát 'Webová stránka, pouze HTML') a spusť: python3 cz_read.py stranka.html. Ve výstupu JSON čti pole FRE_cz (vzorec Bendová & Cinková 2021 adaptovaný na češtinu). Měř na souvislém textu — stránka služby, O nás, případová studie — nikdy na homepage složené z útržků a nadpisů, tam vzorec nedává smysl. Skript je v /tmp/claude-0/-home-user-webkit-studio/57de1bf2-a146-5a0f-af00-82ac2e5fa4f6/scratchpad/cz_read.py, pro produkční audity ho přesuň mimo scratchpad.

**Prošel, když.** FRE_cz ≥ 50. 35–50 je slabé, pod 35 kritické. Pro srovnání: medián českých B2B webů je 42,6 na podstránkách a 46,4 na homepage.

**Pro klienta.** Vaše texty se podle měření čtou zhruba jako úřední dopis. Není to katastrofa, protože stejně na tom je většina českých firemních webů — právě proto se tu dá levně získat náskok. Samotné číslo neřešte, berte ho jako signál, že je čas projít nejdelší věty a nejtěžší slova. Konkrétní místa najdete v následujících dvou bodech; index sám o sobě neměří, jestli člověk textu rozumí, a v hodnocení proto váží nejméně.

### SDEL-24 — Je oslovení (tykání versus vykání) stejné na celém webu včetně formulářů, chybových hlášek a patičky?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Projdi homepage, jednu stránku služby, kontaktní formulář (odešli ho prázdný a přečti chybovou hlášku), děkovací stránku, patičku a cookie lištu. Ctrl+F na 'tvůj', 'tvoje', 'tvé' proti 'váš', 'vaše', 'vám' a zapiš, kde se tyká a kde vyká.

**Prošel, když.** Na všech kontrolovaných místech včetně formulářů, hlášek a cookie lišty je stejná forma oslovení.

**Pro klienta.** Web na některých místech tyká a jinde vyká — nejčastěji proto, že část textů vznikla překladem ze šablony. Čtenář si toho všimne a působí to nedodělaně. Vyberte jednu formu a projděte s ní i formuláře, chybové hlášky, cookie lištu a patičku, tedy místa, na která se při psaní textů zapomíná.

---

## 6. Konverze a použitelnost

**Čas na oblast:** 240–330 minut čisté práce u jednoho webu, plus 5 pracovních dnů čekání. Rozpad: zvenčí 200–260 min — pětisekundový test včetně sehnání pěti lidí 30–40, první obrazovka, nadpisy a srovnání s konkurencí 40, inventura výzev k akci a cesty k poptávce 20, kontrast a velikosti prvků 20, formulář pole po poli a tři testy validace 45, mobil na skutečném telefonu (klávesnice, cookie lišta, dotykové cíle) 30, reference, případovky, fotky a ARES 35, cena, navigace, čitelnost a patička 25, odeslání dvou testovacích poptávek 15. S přístupem do Clarity dalších 45–70 min (nahrávky po segmentech jsou z toho zdaleka nejdelší). Test rychlosti odpovědi běží na pozadí až 5 pracovních dnů — čas auditora neběží, ale report se nedá uzavřít dřív, takže poptávky odešli jako úplně první krok. U neznámé šablony nebo webu s více než třemi službami připočti +60 min. Clarity musí být nasazená nejméně 3 týdny předem, jinak celá část s přístupem odpadá.

### KONV-01 — Řeknou aspoň tři z pěti lidí mimo obor po pětisekundovém zhlédnutí první obrazovky správně, co firma dělá, pro koho a co po nich web chce?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Udělej screenshot první obrazovky bez scrollování ve dvou rozměrech: Chrome, F12, ikona telefonu (Toggle device toolbar), nahoře nastav Responsive 1920x1080, pak iPhone 14 (390x844); screenshot přes Ctrl+Shift+P a příkaz Capture screenshot. Obrázek ukaž pěti lidem mimo obor (osobně, nebo v Lyssna/Maze: New test, Five second test, nahrát obrázek). Předem NEŘÍKEJ, že ho uvidí jen pět sekund. Po zavření obrázku polož tři otázky: Co ta firma dělá? Pro koho to je? Co po tobě chce, abys udělal? Odpovědi zapisuj doslova, ne parafrázovaně.

**Prošel, když.** Aspoň 3 z 5 pojmenují obor i cílovou skupinu věcně správně a aspoň 3 z 5 pojmenují požadovanou akci (poptávka, konzultace, ceník).

**Pro klienta.** Lidé nepoznají do pěti sekund, co prodáváte a komu. To znamená, že peníze za reklamu, SEO i veletrhy se ztrácejí dřív, než se návštěvník stihne dozvědět, co umíte — v prvních deseti sekundách odchází nejvíc lidí. Přepište hlavní nadpis do tvaru: co děláme + pro koho + čím se to liší. V reportu najdete tři konkrétní návrhy věty a doslovné odpovědi testovaných lidí. Přečtěte si je, je to nejrychlejší způsob, jak si sami ověřit, že problém je skutečný — a test si můžete kdykoli zopakovat na kolegovi z jiného oddělení.

### KONV-02 — Mohl by přesně stejný nadpis a podnadpis použít kterýkoli konkurent ve vašem oboru?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Vygoogli obor a lokalitu, otevři 3-5 webů přímých konkurentů a zkopíruj jejich hlavní nadpis a podnadpis do tabulky vedle nadpisu klienta. Pak udělej test záměny: v nadpisu klienta nahraď název firmy názvem konkurenta a přečti nahlas. Pokud věta pořád dává smysl, nadpis nenese informaci.

**Prošel, když.** Po záměně názvu firmy věta přestane platit a žádný z porovnávaných konkurentů nemá zaměnitelný nadpis.

**Pro klienta.** Váš nadpis by mohla mít kterákoli konkurenční firma — a v tabulce v reportu uvidíte, že ho skoro mají. Zákazník, který porovnává pět dodavatelů a do užšího výběru si nechá tři, nemá podle čeho vybrat, když se všechny weby čtou stejně. Rozhodne pak cena nebo náhoda. Konkrétnost poráží eleganci: Průmyslové vzduchotechniky pro potravinářské provozy, projekt i montáž je lepší nadpis než Komplexní řešení na míru. Návrhy nového znění jsou v reportu jako hotové věty, ne jako doporučení zlepšit nadpis.

### KONV-03 — Ukáže formulář chybu u konkrétního pole, zachová vyplněné údaje a zmizí hláška hned po opravě?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Tři testy za sebou: (1) odešli úplně prázdný formulář; (2) vyplň vše, ale e-mail napiš bez zavináče a odešli; (3) chybu oprav. U každého sleduj: objeví se chyba přímo u pole, nebo jen obecná hláška nahoře; odscrolluje stránka k první chybě; zůstanou ostatní vyplněné hodnoty; zmizí hláška hned po opravě; nekřičí validace už během psaní, dřív než člověk dopíše.

**Prošel, když.** Chyba se objeví u konkrétního pole, srozumitelně říká co je špatně, ostatní údaje zůstanou zachované, hláška zmizí ihned po opravě a nevyskakuje během psaní.

**Pro klienta.** Chyba na konci formuláře zasahuje výhradně lidi, kteří se už rozhodli vás oslovit — tedy ty nejcennější. Ztráta je proto nesrovnatelně dražší než odchod na začátku. Hláška Vyplňte prosím povinná pole bez označení, která to jsou, je konverzní katastrofa; nejhorší varianta je formulář, který po chybě smaže vyplněné údaje a člověk musí psát znovu. Nechte dodavatele nastavit: kontrola až po opuštění políčka, chyba přímo u něj a psaná lidsky (E-mail musí obsahovat zavináč), okamžité zmizení po opravě a nikdy nemazat, co už je vyplněné.

### KONV-04 — Odpověděl na testovací poptávku živý člověk do jedné hodiny v pracovní době?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Odešli dvě věrohodné poptávky ze dvou neutrálních schránek (ne z domény auditora) v různé časy — jednu v pondělí kolem 9:00, druhou v pátek kolem 15:00. Rozsah zadání nastav tak, aby odpovídal běžné zakázce klienta. Zapisuj přesné časové značky: odeslání, automatické potvrzení, první lidská odpověď e-mailem, první telefonát, forma a obsah odpovědi. Měř až pět pracovních dnů. Po prvním kontaktu jednání slušně ukonči, aby firma neinvestovala do přípravy nabídky.

**Prošel, když.** Na obě poptávky odpoví živý člověk do jedné hodiny v pracovní době a zeptá se na to, co potřebuje k dalšímu kroku.

**Pro klienta.** Toto je jediné zjištění celého auditu, které vám vydělá peníze bez jediné změny na webu. V reportu máte přesné časy — na naši poptávku jste odpověděli za tolik a tolik. Pro srovnání: v auditu 2 241 firem 23 % neodpovědělo na webovou poptávku vůbec a průměrná doba odpovědi byla 42 hodin; v testu 433 technologických firem jich 55 % neodpovědělo ani do pěti pracovních dnů. Směr je z dat robustní: kdo se ozve do hodiny, má několikanásobně vyšší šanci obchod získat. Konkrétní násobky pocházejí ze starších studií o telefonování, takže je berte jako směr, ne jako konstantu — a hlavně: srovnávejte se s vlastním výsledkem z tohoto testu. Nastavte čtyři věci: upozornění na poptávku okamžitě do telefonu konkrétního člověka (ne jen do sdílené schránky), jmenovitou odpovědnost a zástup na dovolenou, automatické potvrzení s uvedenou lhůtou, a měřitelný závazek doby odpovědi, který zveřejníte i na webu.

### KONV-05 — Nezpůsobuje na stránce s formulářem chyba v kódu, že se odeslání neprovede?

**🔴 kritická** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Nejdřív vlastní test: F12, záložka Console, odešli formulář a sleduj červené chybové hlášky. Pak v Clarity: Recordings, Filters, kategorie Page, JavaScript errors = Yes, k tomu Filters, kategorie Path, Visited URL obsahuje adresu stránky s formulářem. Zvlášť si všímej kategorie click errors (chyba po kliknutí). Projdi 10-15 nahrávek a zapiš časové značky. Zkontroluj i to, jestli testovací poptávka z KON-27 skutečně dorazila.

**Prošel, když.** Při odeslání se v konzoli neobjeví žádná chyba a v Clarity není segment nahrávek, kde lidé opakovaně klikají na odeslání bez efektu.

**Pro klienta.** Rozbité odeslání formuláře je nejdražší možná chyba na webu: platíte za návštěvnost, člověk vyplní všechny údaje, klikne — a nic se nestane. Nikdo vám to nepřijde říct. V reportu máte video, na kterém návštěvník několikrát zuřivě klikne na odeslání a pak odejde; je to nejpřesvědčivější položka celého auditu. Pošlete ho svému dodavateli webu s časovou značkou a nechte to opravit přednostně. Zároveň si zaveďte pravidlo: po každé změně na webu odeslat jednu testovací poptávku a ověřit, že dorazila.

### KONV-06 — Existuje jmenovitě určený člověk, který poptávku přečte, lhůta do kdy, a jeho zástup na dobu nepřítomnosti?

**🔴 kritická** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Ověř u klienta a v administraci: kam formulář odesílá (například WordPress, plugin Contact Form 7 nebo WPForms, nastavení příjemce e-mailu), jestli chodí upozornění i do telefonu konkrétního člověka, jestli poptávky nepadají do sdílené schránky, kterou nikdo nehlídá, a jestli nekončí ve spamu. Porovnej s časovými značkami z testovací poptávky (KON-27) — kdy zpráva přišla a kdy na ni někdo reagoval.

**Prošel, když.** Je jmenovaný odpovědný člověk i jeho zástup, upozornění chodí mimo sdílenou schránku (na telefon), a firma má stanovenou lhůtu odpovědi, kterou v testu dodržela.

**Pro klienta.** Ve firmách vaší velikosti se často stane, že za web a poptávky formálně neodpovídá nikdo — je to vedlejší úkol asistentky nebo obchodního ředitele, který zrovna jezdí po schůzkách. Obecné reagujte rychleji nefunguje. Určete jmenovitě jednoho člověka a jeho zástup, nastavte upozornění na poptávku přímo do jeho telefonu (ne jen do sdílené schránky), stanovte lhůtu, do které musí odpovědět aspoň potvrzením, a jednou měsíčně si nechte poslat přehled poptávek s časy odpovědí. Tohle je organizační změna, ne technická — a je to nejlevnější zdroj obratu, jaký v tomto auditu najdete.

### KONV-07 — Obsahuje první obrazovka všech pět prvků — konkrétní nadpis, jednu až dvě rozvíjející věty, jedno hlavní tlačítko, druhou nezávaznou cestu a jeden důkaz?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Na screenshotech z KON-01 (desktop i mobil, bez scrollování) odškrtej binárně pět položek: (1) nadpis říkající co a pro koho, (2) 1-2 věty, které přidávají mechanismus nebo důkaz, ne synonyma, (3) jedno plné tlačítko jako vizuálně nejsilnější prvek, (4) sekundární nízkoprahová cesta (ceník, případové studie, klikatelný telefon), (5) jeden důkaz — číslo, logo klienta se jménem, nebo citace. Zapiš, které chybí.

**Prošel, když.** Na desktopu je vidět všech pět prvků bez scrollování; na mobilu aspoň nadpis, rozvíjející věta, hlavní tlačítko a jedna sekundární cesta.

**Pro klienta.** Web dává návštěvníkovi jen dvě možnosti: poptat, nebo odejít. Většina firemních zákazníků ale kontaktuje dodavatele až ve chvíli, kdy má za sebou zhruba dvě třetiny svého rozhodování — v ten okamžik, kdy je u vás poprvé, ještě poptávat nechce. Doplňte na první obrazovku druhou, nezávaznou cestu (ceník, případové studie, přímý telefon), aby měl kam jít místo pryč. Není to slabší konverze, je to způsob, jak být tím prvním dodavatelem, kterého osloví — a ten vyhrává většinu zakázek.

### KONV-08 — Je v první obrazovce karusel, který se sám posouvá?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři domovskou stránku a nech ji deset sekund bez jediného pohybu myší. Sleduj, jestli se obsah první obrazovky sám změní. Zapiš počet slidů a interval přepnutí.

**Prošel, když.** V první obrazovce je jedno pevné sdělení, které se samo nemění.

**Pro klienta.** Otáčející se panely v úvodu obvykle neřeší potřebu návštěvníka, ale interní spor o to, čí sdělení bude první. Výsledek je, že na nejcennějším místě webu — v horní části, kam padá přes 40 % pozornosti — není žádné stabilní sdělení a člověk čte půlku věty, která mu zmizí pod rukama. Nechte jedno pevné sdělení a jednu akci. Ostatní sdělení dejte níž na stránku jako samostatné sekce, kde jsou vidět všechna najednou.

### KONV-09 — Je v horní pětině první obrazovky vidět hlavní sdělení, nebo tam sedí jen navigace, cookie lišta, chat a dekorativní fotka?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Screenshot desktopu 1920x1080. V grafickém editoru vyznač horních 20 % výšky obrazovky (u okna 1080 px jde o prvních zhruba 216 px) a sepiš, co v tomto pruhu je. Totéž na mobilu 390x844 (horních zhruba 170 px). Překryv se zvýrazněnými zónami vlož do reportu.

**Prošel, když.** V horní pětině začíná hlavní nadpis; navigace, cookie lišta a chatovací bublina dohromady zabírají méně než polovinu této plochy.

**Pro klienta.** Na horní pětinu stránky padá přes 40 % veškeré doby, kterou lidé prohlížením stráví — každý pixel tam má zhruba čtyřikrát vyšší cenu než pixel o dvě obrazovky níž. U vás je tato plocha obsazená menu, cookie lištou a fotkou a hlavní sdělení začíná až pod ní. Je to jako mít nejdražší výlohu na náměstí a nalepit do ní ceduli s otevírací dobou. Posuňte nadpis a hlavní tlačítko nahoru, dekoraci dolů.

### KONV-10 — Zabírá cookie lišta na mobilu více než čtvrtinu první obrazovky, nebo chybí na první úrovni rovnocenné tlačítko Odmítnout?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Na skutečném telefonu otevři web v anonymním okně, vyfoť obrazovku a změř poměr výšky lišty k výšce obrazovky. Zkontroluj tři věci: je vedle Přijmout stejně dostupné a stejně velké Odmítnout; dá se lišta zavřít bez udělení souhlasu; jde se stránkou pod lištou pracovat, nebo blokuje interakci.

**Prošel, když.** Lišta zabírá nejvýše čtvrtinu výšky obrazovky, na první úrovni je rovnocenné Odmítnout a stránka pod ní zůstává ovladatelná.

**Pro klienta.** Lišta vám na mobilu ukrajuje z plochy, kde se návštěvník rozhoduje, jestli zůstane. Od ledna 2022 navíc v Česku platí, že souhlas musí být předchozí a aktivní — lišta bez rovnocenného odmítnutí na první úrovni je právně sporná. A je tu třetí důvod, který bývá pro majitele nejpádnější: bez souhlasu se v Evropě omezí i sběr dat o chování, návštěva se rozpadne na několik oddělených relací a nemáte pak z čeho web zlepšovat. Korektní, nižší lišta s viditelným odmítnutím řeší všechny tři věci najednou.

### KONV-11 — Soutěží na jedné obrazovce dvě a více stejně silných, ale různých výzev k akci?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Na domovské stránce a na stránce hlavní služby sepiš do tabulky každý prvek, který vypadá jako výzva k akci: text, sekce a pozice, vizuální váha (plné tlačítko / obrys / textový odkaz), cíl. Spočítej, kolik různých cílů web nabízí a kolik plných tlačítek různých akcí je vidět v jedné obrazovce. Typický nález: poptávka, newsletter, katalog ke stažení, konzultace a chat, každé vypadá stejně důležitě.

**Prošel, když.** Na celém webu je jedna primární akce v jednom vizuálním stylu plného tlačítka a nejvýše jedna sekundární; newsletter, PDF a chat mají slabší styl.

**Pro klienta.** Máte na webu několik akcí, které vypadají stejně důležitě. Nesčítají se — dělí se o stejné lidi a navíc nutí návštěvníka rozhodovat se, místo aby jednal. V praxi to vypadá tak, že v analytice roste počet odběratelů newsletteru a stažení PDF, ale obchod z toho nedostane nic. Vyberte jednu hlavní akci pro celý web a jednu vedlejší, nízkoprahovou. Zbytek nechte jako obyčejný odkaz. V reportu najdete tabulku všech současných akcí i návrh, která má zůstat plným tlačítkem.

### KONV-12 — Obstojí každé povinné pole formuláře ve třech otázkách — zná návštěvník odpověď, chápe proč ji chcete, a nedá se místo psaní nabídnout výběr?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vypiš všechna pole do tabulky: název, povinné/nepovinné, typ (volný text / výběr / datum). U každého odpověz na tři otázky výše a napiš verdikt: nechat / udělat nepovinným / přesunout do druhého kroku / nahradit výběrem. Nepočítej pole, hodnoť jednotlivě — na 93 milionech vyplňování se neprokázalo, že by kratší formulář sám o sobě konvertoval lépe.

**Prošel, když.** Každé povinné pole projde všemi třemi otázkami; žádné povinné pole nežádá údaj, který návštěvník na začátku nemá (rozpočet, termín, číslo projektu, počet kusů).

**Pro klienta.** Rada zkraťte formulář, kterou jste nejspíš už slyšeli, je mýtus — v doložených případech zkrácení z devíti polí na šest konverzi snížilo o 14 %, zatímco přepsání popisků u stejných devíti polí ji zvedlo o 19 %. Nerozhoduje počet, ale jestli člověk odpověď v tu chvíli zná a chápe, proč ji chcete. V reportu máte tabulku pole po poli s konkrétním verdiktem. Začněte poli, u kterých musí návštěvník přemýšlet nebo si něco dohledávat, ne mazáním.

### KONV-13 — Je pole Zpráva nebo Popis poptávky povinné a bez jakéhokoli příkladu, co do něj napsat?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vyplň formulář jen jménem, e-mailem a telefonem a zkus ho odeslat. Pokud odeslání odmítne kvůli prázdné zprávě, je to potvrzeno. Zároveň zkontroluj, jestli je u pole konkrétní nápověda s příkladem (ne jen šedý text uvnitř pole).

**Prošel, když.** Formulář jde odeslat bez volného textu, nebo je místo něj povinný výběr typu služby a volné pole je nepovinné s konkrétním příkladem v nápovědě.

**Pro klienta.** Povinné pole Zpráva bez jakéhokoli vodítka je pravděpodobně největší jednotlivá ztráta poptávek na českých firemních webech. Odfiltruje totiž přesně ty lidi, kteří ještě nemají zadání zformulované — tedy ty, kde má vaše konzultace největší cenu a kde máte nejvyšší šanci určit si podmínky. Nahraďte ho povinným výběrem typu služby nebo rozsahu (to vám navíc rovnou předtřídí poptávky) a volné pole nechte nepovinné, s příkladem: Např. potřebujeme vyměnit vzduchotechniku ve výrobní hale, cca 800 m2, ideálně do konce roku.

### KONV-14 — Je u formuláře povinné zaškrtávátko Souhlasím se zpracováním osobních údajů?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři formulář a podívej se nad odesílací tlačítko. Zkus odeslat bez zaškrtnutí a zaznamenej, jestli to formulář odmítne. Ověř také, jestli je někde odkaz na zásady zpracování osobních údajů.

**Prošel, když.** U formuláře není povinné zaškrtávátko souhlasu, ale je tam jednořádková informační věta s odkazem na zásady zpracování.

**Pro klienta.** Povinné zaškrtnutí souhlasu je u poptávkového formuláře ve většině případů nadbytečné i právně nesprávné. Formulář slouží k domluvě o možné zakázce, takže údaje zpracováváte kvůli jednání o smlouvě, ne na základě souhlasu — a když existuje vhodnější důvod než souhlas, má se použít přednostně. Vyžádaný souhlas jde navíc kdykoli odvolat, což vám jen komplikuje evidenci. Zaškrtávátko odstraňte a nahraďte větou s odkazem na zásady; informační povinnost tím splníte. Vedlejší efekt: ubyde jeden povinný úkon těsně před odesláním, tedy v nejcitlivějším místě. Konečné znění si nechte potvrdit svým právníkem — my ho navrhujeme, nerozhodujeme o něm.

### KONV-15 — Je na webu přímý klikatelný e-mail a telefon, dostupné z každé stránky, a je u nich konkrétní jméno člověka s fotkou?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Projdi patičku, hlavičku a kontaktní stránku. Zkontroluj, jestli je e-mail a telefon klikatelný (na mobilu klepni na číslo — má se otevřít volání; na e-mail — má se otevřít poštovní program). Zaznamenej, jestli jde o obecné info@ bez jména, nebo o konkrétního člověka se jménem, funkcí, fotkou a přímým spojením.

**Prošel, když.** Telefon i e-mail jsou v patičce na každé stránce, jsou klikatelné, a na kontaktní stránce je aspoň jeden konkrétní člověk se jménem, fotkou a přímým spojením.

**Pro klienta.** Formulář je u vás prakticky jedinou cestou, jak se ozvat. Část firemních zákazníků — hlavně lidé na vyšších pozicích a ti, kdo řeší něco urgentního — formulář zásadně nepoužije. Chybějící telefon je tedy tvrdý filtr právě na největších zakázkách. Navíc formulář jako jediná cesta signalizuje, že s lidmi nechcete mluvit, což je u dražší služby špatný signál. Doplňte přímý telefon a e-mail do patičky na každou stránku a na kontakt dejte jméno, funkci a fotku člověka, který poptávku skutečně vyřídí.

### KONV-16 — Zvedne někdo telefon uvedený na webu?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Dvakrát zavolej na hlavní číslo v běžné pracovní době, v různé dny a různou denní dobu (dopoledne a odpoledne). Zaznamenej: zvedl někdo, po kolika vyzváněních, kdo se ohlásil, případně jestli se ozval automat nebo hlasová schránka a jestli někdo zavolal zpět.

**Prošel, když.** Aspoň při jednom ze dvou volání se ozve člověk; pokud ne, přijde zpětné volání do konce pracovního dne.

**Pro klienta.** Na číslo uvedené na webu se nedovoláte. Číslo na webu je slib — když ho nikdo nezvedá, je horší než žádné číslo, protože zákazník má první zkušenost s vámi tu, že jste nedostupní. Buď zajistěte, že telefon někdo v pracovní době bere (včetně zástupu), nebo uveďte přímé číslo na konkrétního člověka místo ústředny, nebo aspoň nastavte hlasovou schránku, která se skutečně poslouchá a ze které se volá zpět tentýž den.

### KONV-17 — Obsahuje aspoň jedna případová studie výchozí situaci, konkrétní výsledek v číslech a časový rámec — a je přístupná bez vyplnění formuláře?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Otevři referenční stránku a u každé položky odškrtej: jmenovaný klient (nebo aspoň odvětví a velikost), popis výchozího problému, konkrétní výsledek v číslech, za jak dlouho, vyjádření klienta. Pak zkontroluj, jestli je studie čitelná rovnou, nebo až po vyplnění formuláře či zadání e-mailu.

**Prošel, když.** Aspoň tři případové studie mají všech pět částí včetně výsledku v číslech a jsou čitelné bez vyplňování čehokoli.

**Pro klienta.** Vaše reference popisují, co jste dělali, ale ne co to klientovi přineslo — to je portfolio, ne případová studie. U služby, kterou si zákazník nemůže osahat, nahrazuje případovka vzorek: jako jediný typ obsahu zároveň dokazuje, že to umíte, a nastavuje cenovou hladinu. Přepište tři nejsilnější do struktury: výchozí situace, problém, co jsme udělali, výsledek v číslech, citace klienta. A pokud je máte zamčené za formulářem, odemkněte je — zákazníci si dnes většinu rozhodování udělají dřív, než vás poprvé osloví, takže zámek brání hlavně tomu, abyste se dostali do jejich užšího výběru.

### KONV-18 — Najde návštěvník na webu jakékoli cenové vodítko — spodní hranici, rozpětí, strukturu ceny nebo reálný rozpočet z případovky?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Vygoogli site:domena.cz cena a site:domena.cz ceník. Pak projdi stránky služeb a přes Ctrl+F hledej slova cena, od, kolik, rozpočet, investice. Zaznamenej, jestli je někde uvedena spodní hranice, typové rozpětí, popis toho, z čeho se cena skládá a na čem závisí, nebo konkrétní rozpočet zmíněný v případové studii.

**Prošel, když.** Aspoň jedna z těchto forem cenového vodítka je na stránce služby dostupná bez vyplňování formuláře.

**Pro klienta.** Na webu není žádné vodítko k ceně. Transparentní ceny jsou přitom podle opakovaného průzkumu mezi firemními kupujícími už čtvrtým rokem v řadě jejich nejčastějším přáním vůči dodavatelům. Absence ceny vás stojí dvakrát: přicházíte o zákazníky, kteří vás vyřadí kvůli nejistotě (o těch se nikdy nedozvíte), a dostáváte poptávky mimo vaši cenovou hladinu, které vám sežerou obchodní čas (ty vidíte). Nechceme po vás ceník — cenové vodítko je kvalifikační filtr, který šetří čas oběma stranám. Stačí věta Projekty u nás obvykle začínají na 150 tisíc, nebo popis toho, na čem cena závisí, plus reálné číslo v jedné případové studii.

### KONV-19 — Víš z nahrávek, na kterých konkrétních prvcích lidé klikají zuřivě nebo naprázdno a kde z formuláře odcházejí — a máš k tomu časové značky?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Clarity, Dashboard, dlaždice Rage clicks a Dead clicks — klikni na číslo, otevřou se odpovídající nahrávky. Pak Recordings, Filters, kategorie User Actions, Insights = Rage click, respektive Dead click, k tomu Path, Visited URL = stránka s formulářem a stránka služby. Druhý segment: návštěvy, které viděly poptávkovou stránku a neskončily odesláním (Path, Visited URL = adresa poptávky, Exit URL není děkovací stránka). Třetí: Filters, User Info, Device = Mobile na stránce s formulářem. Na každý segment projdi nejméně 10-15 nahrávek a zapisuj ve tvaru segment / co jsem viděl / kolikrát z kolika / časová značka / hypotéza.

**Prošel, když.** Pro každý ze tří segmentů je zapsáno aspoň 10 nahrávek a pojmenovaný opakující se vzorec s časovými značkami, ne dojem.

**Pro klienta.** Nahrávky návštěv nemá cenu sledovat náhodně — z náhodného koukání vznikne anekdota, ne důkaz. V reportu proto najdete zápis ve tvaru: který segment lidí, co konkrétně dělali, kolikrát z kolika nahrávek, na které vteřině záznamu, a co si o tom myslíme. U každého nálezu je odkaz na konkrétní video. To je rozdíl mezi názorem a podkladem pro rozhodnutí.

### KONV-20 — Říká text hlavního tlačítka, co návštěvník dostane a k čemu se zavazuje, a je někde v jeho okolí uvedeno, co se stane po kliknutí?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Opiš doslovný text hlavního tlačítka a text v jeho bezprostředním okolí. Odpověz na tři otázky: obsahuje tlačítko sloveso vyjadřující přínos pro návštěvníka (ne Odeslat, ne Kontaktujte nás); je někde uvedeno, kdo se ozve, kdy a jakým kanálem; je uvedeno, že je to nezávazné a bezplatné, pokud to platí.

**Prošel, když.** Text tlačítka pojmenovává výsledek pro návštěvníka a v jeho okolí je uvedeno, kdo se ozve a do kdy.

**Pro klienta.** Odeslat a Kontaktujte nás neříkají nic. U služby s dlouhým rozhodováním není hlavní překážkou lenost, ale obava, do čeho se člověk pouští — jestli se mu hned nezačne ozývat obchodník. Nezávazně poptat cenu, ozveme se do 24 hodin říká, co dostanu, co mě to stojí a kdy to skončí. Vedlejší efekt uvedeného termínu je vnitřní: jakmile je slib na webu, firma ho začne dodržovat — a to je nejcennější změna z celého auditu.

### KONV-21 — Dostane se návštěvník z libovolné podstránky k poptávce na jedno kliknutí a je hlavní akce dostupná i po odscrollování?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři pět různých podstránek (služba, reference, o nás, blogový článek, kontakt) a u každé spočítej kliknutí k formuláři nebo kontaktu. Na domovské stránce a na stránce služby odscrolluj do poloviny a do konce a sleduj, jestli je hlavní akce pořád dosažitelná (lepivá hlavička, opakované tlačítko v sekcích, lepivá lišta na mobilu).

**Prošel, když.** Z každé z pěti testovaných podstránek vede k poptávce jedno kliknutí a po odscrollování je hlavní akce viditelná bez návratu nahoru.

**Pro klienta.** Když se člověk dočte na konec stránky o vaší službě a v tu chvíli se rozhodne, nesmí hledat, kde vás osloví. Zopakujte hlavní tlačítko na konci každé stránky služby a nechte ho dostupné v hlavičce i po odscrollování. Na mobilu se osvědčuje úzký pruh dole s telefonem a poptávkou.

### KONV-22 — Splňuje text a hlavní tlačítko minimální kontrast — 4,5:1 u běžného textu, 3:1 u velkého textu a u hrany tlačítka?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** wave.webaim.org, vlož adresu, v levém panelu záložka Contrast, sekce Contrast Errors. Sporné a hlavně tlačítka přeměř v Chrome DevTools: F12, Elements, vyber prvek, v panelu Styles klikni na barevný čtvereček u vlastnosti color — v pipetě je vypsaný Contrast ratio se značkou AA. Bílý text přes fotku v úvodu WAVE nezachytí: změř ho ručně pipetou v nejsvětlejším místě fotky pod textem.

**Prošel, když.** Běžný text nejméně 4,5:1, text od 24 px (nebo 18,5 px tučně) nejméně 3:1, výplň nebo hrana hlavního tlačítka nejméně 3:1.

**Pro klienta.** Text a tlačítko jsou příliš málo výrazné proti pozadí — část lidí je na mobilu na slunci prostě nepřečte a nevšimne si jich. Není to otázka vkusu: existuje mezinárodní norma s konkrétním číslem a vy jste pod ním. Oprava je na pár minut — ztmavit tlačítko, nebo dát pod bílý text přes fotku tmavý překryv. Ze všech nálezů v tomto auditu má tenhle nejlepší poměr přínosu k nákladu.

### KONV-23 — Má každý klikací prvek na mobilu aspoň 24 x 24 pixelů, nebo dost místa kolem sebe?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Chrome, F12, ikona telefonu, vyber iPhone 14. V záložce Elements najeď myší na prvek — v žlutém popisku se zobrazí jeho rozměr v pixelech. Projdi: hlavní tlačítko, ikony v hlavičce, křížek cookie lišty, přepínač jazyka, odkazy v patičce, zaškrtávátka a odesílací tlačítko formuláře.

**Prošel, když.** Každý klikací prvek má nejméně 24 x 24 px, nebo je od sousedních cílů tak daleko, že se kružnice o průměru 24 px kolem něj nedotýká jiného cíle.

**Pro klienta.** Některé odkazy a ikony jsou na telefonu tak malé, že se do nich prstem netrefíte na první pokus. Norma říká minimálně 24 x 24 bodů. Když se do prvku lidé netrefují, projeví se to v datech o chování jako zuřivé opakované klikání — což je důkaz z vašich vlastních návštěvníků, ne názor. Zvětšit odsazení je práce na několik minut.

### KONV-24 — Je klíčový text — nadpis, hodnotová nabídka, čísla, ceník — skutečný text, nebo je zapečený v obrázku?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Zkus na stránce označit myší hlavní nadpis, podnadpis a čísla v sekci s výsledky. Co nejde označit, je obrázek. Potvrď přes Ctrl+F a zadej slovo z nadpisu — pokud prohlížeč nic nenajde, je to obrázek. Zkontroluj i ceník a infografiky.

**Prošel, když.** Každý nadpis, hodnotová nabídka i čísla jdou označit myší a najít přes Ctrl+F.

**Pro klienta.** Váš hlavní nadpis je obrázek, ne text. Znamená to tři věci najednou: vyhledávače ho nevidí, takže vám nepomáhá v hledání; program, který text předčítá lidem se zrakovým postižením, ho nepřečte; a na mobilu se nezalomí, takže se buď zmenší do nečitelna, nebo přeteče. Nechte ho převést na normální text — vzhled zůstane, dodavatel to udělá stylem.

### KONV-25 — Dá se stránka služby pochopit z pouhého přečtení nadpisů?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** wave.webaim.org, zadej adresu stránky služby, v levém panelu záložka Structure — vypíše se posloupnost nadpisů H1 až H6. Zkontroluj, že je právě jedno H1 a že posloupnost nepřeskakuje úrovně. Hlavní test je ale obsahový: přečti si za sebou jen nadpisy a zeptej se, jestli z nich sám vznikne srozumitelný přehled služby.

**Prošel, když.** Jedno H1, logická posloupnost úrovní, a ze samotných nadpisů je jasné, co služba je, pro koho, jak probíhá a co má člověk udělat dál.

**Pro klienta.** Návštěvník firemního webu text nečte, prolétne ho — a rozhoduje se podle nadpisů a prvních vět. Vaše stránka služby je psaná jako souvislý text s dlouhými odstavci, takže po ní člověk sklouzne a vyhodnotí vás podle toho, co si domyslel, ne podle toho, co umíte. Rozdělte ji mezititulky, které samy o sobě dávají odpověď: pro koho to je, jak to probíhá, co to stojí, co dál.

### KONV-26 — Má hlavní menu nejvýše sedm položek, jsou pojmenované jazykem zákazníka a má každá hlavní služba vlastní stránku?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Spočítej položky hlavního menu. U každé se zeptej, jestli by ji zákazník sám napsal do vyhledávače, nebo jde o interní název. Otevři domena.cz/sitemap.xml (nebo projdi menu) a ověř, že každá hlavní služba má vlastní adresu a vlastní stránku, ne jen odstavec na společném rozcestníku.

**Prošel, když.** Nejvýše 7 položek v hlavním menu, každá hlavní služba má vlastní stránku s vlastním nadpisem a vlastní výzvou k akci, názvy jsou v jazyce zákazníka.

**Pro klienta.** Menu s devíti a více položkami rozptýlí návštěvníka přesně ve chvíli, kdy hledá svou službu, a nutí ho hádat, pod co jeho problém spadá. Každé chybné kliknutí je riziko, že odejde ke konkurenci. Nechte v menu hlavní služby, reference, ceny a kontakt; kariéru, ke stažení a ostatní přesuňte do patičky. Samostatná stránka pro každou hlavní službu vám navíc zdvojnásobí počet vstupů z vyhledávačů a umožní mít pro každou službu vlastní argumenty a vlastní tlačítko.

### KONV-27 — Je telefon povinné pole hned u prvního kontaktu?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Vyplň formulář kompletně, ale bez telefonu, a zkus odeslat. Zaznamenej, jestli odeslání projde. Zkontroluj i to, jestli je u pole vysvětleno, proč firma o telefon stojí.

**Prošel, když.** Formulář jde odeslat bez telefonu, nebo je u povinného pole jednou větou vysvětleno proč, a firma to má obchodně odůvodněné.

**Pro klienta.** Povinný telefon hned u prvního kontaktu je bariéra právě u opatrnějších zákazníků — mnoho lidí ho při první zprávě dát nechce, protože čekají obchodní nátlak. Toto ale není jednoznačná chyba, je to obchodní volba: pokud prokazatelně uzavíráte hlavně po telefonu, méně poptávek s číslem může být pro vás lepší než víc poptávek bez něj. Doporučujeme udělat pole nepovinným a doplnit větu: Nechte nám číslo, pokud chcete odpověď rychleji — stačí ale i e-mail. Pak měsíc porovnejte počet a kvalitu poptávek.

### KONV-28 — Zůstane u každého pole viditelné, co do něj patří, i poté, co člověk začne psát?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Klikni do každého pole a začni psát. Sleduj, jestli popisek zmizel (byl jen jako šedý text uvnitř pole), nebo zůstal nad polem. Pak klikni na text popisku — pokud se kurzor přesune do pole, je popisek správně svázaný. Ověř i v DevTools: F12, Elements, hledej u pole značku label a atribut for shodný s id pole.

**Prošel, když.** U každého pole zůstává popisek viditelný během psaní (je nad polem, ne uvnitř) a kliknutí na popisek zaostří pole.

**Pro klienta.** Popisky máte jen jako šedý text uvnitř políček. Vypadá to čistě, ale jakmile člověk začne psát, popisek zmizí. V testech na tisícovce vyplněných polí lidé kvůli tomu mazali celý obsah políčka jen proto, aby si znovu přečetli, co tam měli napsat — nejčastěji ve chvíli, kdy opravovali chybu. Přesuňte popisky nad políčka; šedý text uvnitř nechte jen jako příklad formátu.

### KONV-29 — Vyskočí na telefonu u e-mailu klávesnice se zavináčem a u telefonu číselná, a nabízí prohlížeč doplnění uložených údajů?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Na skutečném telefonu (ideálně jeden Android a jeden iPhone, chovají se odlišně) klepni postupně do každého pole a vyfoť klávesnici — screenshot je do reportu velmi silný důkaz. Doplň kontrolou v DevTools: F12, Elements, najdi značku input a zkontroluj atributy type (má být email u e-mailu, tel u telefonu), inputmode a autocomplete (name, email, tel, organization). Emulace v prohlížeči skutečnou klávesnici neukáže, telefon je nutný.

**Prošel, když.** U e-mailu vyskočí klávesnice se zavináčem, u telefonu číselná telefonní, a prohlížeč nabízí doplnit dříve uložené jméno, e-mail a telefon.

**Pro klienta.** Na telefonu vyskakuje u e-mailu i u telefonního čísla obyčejná písmenková klávesnice, takže lidé hledají zavináč a přepínají na čísla. Týká se to zhruba poloviny vašich návštěvníků — mobil má v Česku 46 % provozu a formuláře se na něm dokončují asi o osm procentních bodů hůř než na počítači. Je to oprava na jeden řádek u každého políčka a udělá se jednou provždy. Při té příležitosti nechte zapnout automatické doplňování údajů z prohlížeče — to prokazatelně souvisí s vyšším dokončením.

### KONV-30 — Míchá formulář v jednom kroku snadné údaje (jméno, e-mail) s náročnými (rozpočet, termín, popis zadání) a je jich dohromady víc než pět?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Spočítej, kolik údajů formulář v jednom kroku žádá, a rozděl je na snadné (návštěvník je zná zpaměti) a náročné (musí je promyslet nebo dohledat). Zkontroluj, jestli formulář ukazuje průběh (krok 1 ze 2).

**Prošel, když.** Formulář žádá v prvním kroku nejvýše pět snadných údajů; náročné údaje jsou až v dalším kroku a je vidět, kolik kroků zbývá.

**Pro klienta.** Formulář hned na začátku míchá věci, které člověk napíše bez přemýšlení, s věcmi, nad kterými musí přemýšlet — a jakmile narazí na rozpočet nebo termín, často skončí. Nabízí se rozdělit ho do dvou kroků od nejsnazšího po nejnáročnější, protože kdo už jednou začal, obvykle pokračuje. Říkáme to ale rovně: konkrétní čísla, která na tohle téma kolují po internetu, se nedají dohledat k žádné pořádné studii. Je to hypotéza, kterou doporučujeme ověřit na vašem webu, ne jistota. Než do toho půjdete, vyřešte body KON-17 a KON-18 — ty jsou doložené.

### KONV-31 — Ukáže se po odeslání samostatná děkovací stránka s konkrétním příslibem, kdo se ozve a do kdy?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Odešli skutečnou poptávku (viz KON-27) a zaznamenej, co se stane: objeví se samostatná stránka, nebo jen řádek textu v místě formuláře; je uvedeno kdo, do kdy a jakým kanálem se firma ozve; nabízí stránka mezitím další krok (případové studie, ceník, kalendář na schůzku). Screenshot obrazovky ulož do reportu.

**Prošel, když.** Objeví se samostatná stránka s poděkováním, konkrétní lhůtou odpovědi, jménem nebo aspoň rolí člověka, který se ozve, a odkazem na další obsah.

**Pro klienta.** Po odeslání se objeví jen Děkujeme za zprávu. To je promarněná chvíle — člověk je právě teď nejaktivnější a s vysokou pravděpodobností v ten samý okamžik píše i vašim konkurentům. Napište mu, kdo se ozve, do kdy a jak, co si má připravit, a dejte mu mezitím co číst: dvě případové studie nebo ceníkové vodítko. Samostatná děkovací stránka má navíc tu výhodu, že se dá měřit, kolik poptávek skutečně přišlo.

### KONV-32 — Přijde po odeslání automatické potvrzení e-mailem, je v něm uvedena lhůta odpovědi a má rozpoznatelného odesílatele?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Po odeslání testovací poptávky sleduj schránku včetně spamu. Zaznamenej: za jak dlouho potvrzení přišlo, kdo je uvedený jako odesílatel (jméno firmy, nebo noreply bez identifikace), je v něm uvedená lhůta lidské odpovědi, obsahuje překlepy nebo nefunkční odkazy, je v něm kopie toho, co člověk odeslal.

**Prošel, když.** Potvrzení dorazí do několika minut, nekončí ve spamu, má lidského odesílatele, uvádí lhůtu odpovědi a rekapituluje odeslané údaje.

**Pro klienta.** Po odeslání poptávky nepřijde žádné potvrzení (nebo přijde od anonymního odesílatele bez informací). Doba mezi odesláním a vaší lidskou odpovědí je nejzranitelnější místo celého obchodu — člověk neví, jestli zpráva vůbec dorazila, a mezitím oslovuje další firmy. Automatická odpověď s větou Ozveme se do 24 hodin, do té doby se můžete podívat na tři naše realizace ho podrží a nic vás nestojí; nastaví se jednou v nastavení formuláře.

### KONV-33 — Jsou na webu aspoň tři reference s celým jménem, funkcí, firmou a fotkou — a dá se aspoň jedna nezávisle ověřit?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** U každé reference urči úroveň: 1 = jen logo bez kontextu; 2 = logo se jménem firmy a odvětvím; 3 = citace s celým jménem, funkcí, firmou a fotkou; 4 = citace popisující konkrétní situaci a výsledek, ověřitelná odkazem (LinkedIn, web klienta, veřejný projekt). Jedno jméno zkus ověřit na LinkedInu (jméno + firma) — existuje ten člověk a dělá tu funkci? Zaznamenej také, jestli je aspoň jedna reference vidět na domovské stránce a na stránce služby, nebo jsou všechny schované na podstránce.

**Prošel, když.** Aspoň tři reference na úrovni 3 nebo 4, aspoň jedna nezávisle ověřitelná, a aspoň jedna je vidět na domovské stránce i na stránce služby.

**Pro klienta.** Reference typu Jan N., spokojený zákazník nebo řada log bez kontextu mají u firemních zákazníků nulovou až zápornou hodnotu — čtenář předpokládá, že jsou vymyšlené. Tři ověřitelné citace s celým jménem, funkcí, firmou a fotkou porazí dvacet log. Je to typicky změna zdarma: jde jen o přeuspořádání toho, co už máte, a o jeden e-mail třem klientům s prosbou o dvě věty a souhlas se jménem. Umístěte je tam, kde se rozhoduje — na stránku služby vedle tlačítka, ne na samostatnou podstránku.

### KONV-34 — Sedí čísla, která web o firmě tvrdí, s obchodním rejstříkem?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Vypiš každé číslo, které web o firmě tvrdí: rok založení, počet zaměstnanců, obrat, počet realizovaných projektů, certifikace. Ověř v ARES (ares.gov.cz, vyhledat podle IČO, sekce Základní údaje — datum vzniku, sídlo, název) a ve sbírce listin (or.justice.cz, vyhledat subjekt, záložka Sbírka listin, poslední účetní závěrka — příloha uvádí průměrný počet zaměstnanců, výkaz zisku a ztráty obrat). Zvlášť si všímej neověřitelných tvrzení typu spokojenost 99 %, stovky klientů, lídr na trhu.

**Prošel, když.** Rok založení a řádová velikost firmy na webu odpovídají rejstříku a žádné číslo na webu není v rozporu s veřejně dostupnými údaji.

**Pro klienta.** Porovnali jsme čísla na vašem webu s obchodním rejstříkem a účetními závěrkami. Tohle si potenciální zákazník může udělat úplně stejně snadno — ARES je veřejný a u větších zakázek to firmy běžně dělají. Nesoulad ve fázi, kdy už do jednání investovali čas, dokáže obchod zabít. Uveďte údaje do souladu, nebo číslo z webu odstraňte. Obecně platí: konkrétní ověřitelné číslo (rok založení, počet realizací) funguje jako důkaz, kulaté nadsazené číslo jako varovný signál.

### KONV-35 — Jsou hlavní fotky na webu skutečné, nebo ze stockové banky?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** U tří hlavních fotek (úvodní, tým, kontaktní osoba): pravé tlačítko, Kopírovat adresu obrázku, pak images.google.com, ikona fotoaparátu, vložit adresu. Případně tineye.com. Zaznamenej počet cizích webů se stejnou fotkou a udělej screenshot výsledků do reportu.

**Prošel, když.** Fotky lidí, provozu a realizací se neobjevují na jiných webech a u kontaktní osoby je skutečná fotka se jménem.

**Pro klienta.** Vaše hlavní fotky jsme našli na desítkách jiných webů — jsou ze stockové banky (screenshot je v reportu). Fotka usmívajících se lidí v oblecích u konferenčního stolu je v Česku tak rozšířená, že už nese negativní signál: čtenář z ní vyčte, že firma o sobě nemá co ukázat. Vyfoťte skutečné lidi, provoz a realizace. U člověka, který vyřizuje poptávky, snižuje jeho skutečná fotka bariéru kontaktu měřitelně víc než jakýkoli text. Je to náklad jednoho odpoledne fotografa.

### KONV-36 — Jsou v patičce nebo na kontaktní stránce úplný název, sídlo, IČO a údaj o zápisu v obchodním rejstříku včetně oddílu a vložky?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Projdi patičku a kontaktní stránku a hledej všechny čtyři údaje: úplný název včetně právní formy, sídlo, IČO a spisovou značku (například C 12345 vedená u Městského soudu v Praze). Porovnej s ARES (ares.gov.cz, vyhledat podle IČO).

**Prošel, když.** Všechny čtyři údaje jsou na webu dohledatelné a odpovídají zápisu v ARES.

**Pro klienta.** Podle občanského zákoníku musí každý podnikatel v informacích zpřístupňovaných veřejnosti na dálku — tedy i na webu — uvádět jméno a sídlo, a je-li zapsán v obchodním rejstříku, také údaj o zápisu včetně oddílu a vložky. Kapitálové společnosti a družstva mají navíc povinnost web zřídit a tyto údaje na něm bezplatně zpřístupnit. Za neuvedení hrozí pokuta až 50 000 Kč a rejstříkový soud může uložit pořádkovou pokutu až 100 000 Kč. Kromě právní stránky to má i obchodní roli: chybějícího IČO u firmy, která chce zálohovou fakturu na půl milionu, si zákazník všimne. Oprava zabere pět minut.

### KONV-37 — Běží na webu nástroj pro sledování chování a má nasbíraná data aspoň za tři týdny?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** Ověř, jestli je na webu měřicí kód: F12, záložka Network, do filtru napsat clarity nebo hotjar, načíst stránku. Pokud nástroj běží, vyžádej si od klienta pozvánku (Clarity: Settings, Team, Invite) a v Dashboardu vpravo nahoře přepni rozsah na Last 30 days a zkontroluj počet relací a počet zobrazení stránky s formulářem. Pokud nástroj chybí, pošli klientovi kód (clarity.microsoft.com, Add new project, Get tracking code) a tuto část auditu odlož — nahrávky se uchovávají jen 30 dnů, takže je nutné nasadit dopředu.

**Prošel, když.** Nástroj běží nejméně tři týdny a stránka s formulářem má za posledních 30 dnů aspoň několik set zobrazení.

**Pro klienta.** Na webu neběží nic, co by ukazovalo, co na něm lidé skutečně dělají. Microsoft Clarity je zdarma, bez limitu provozu a bez omezení doby — vložení kódu je práce na deset minut pro vašeho dodavatele. Jedna věc je ale zásadní: nahrávky návštěv se uchovávají jen 30 dnů, takže nástroj musí běžet nejméně tři týdny předtím, než se z něj dá cokoli číst. Nasaďte ho hned, i když audit vyhodnocujeme teprve za měsíc.

### KONV-38 — Je hlavní tlačítko nad výškou, do které doscrolluje polovina návštěvníků — zvlášť na počítači a zvlášť na mobilu?

**🟡 střední** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Clarity, Heatmaps, zadej adresu domovské stránky, vpravo nahoře přepni z Click na Scroll, a pak přepni zvlášť PC a zvlášť Mobile (Clarity generuje mapy odděleně). Odečti výšku, ve které zbývá 50 % návštěvníků, a porovnej ji s pozicí hlavního tlačítka a sekcí, které klient považuje za klíčové. V klikací mapě si zvlášť všimni kliknutí na neklikatelné prvky (nadpisy, obrázky, čísla, loga klientů) — to je nesplněné očekávání. Mapu ze stránky s několika desítkami návštěv nečti vůbec, jdi rovnou na nahrávky.

**Prošel, když.** Hlavní tlačítko i klíčová sekce jsou nad čárou 50 % na počítači i na mobilu a v klikací mapě nejsou výrazná kliknutí na neklikatelné prvky.

**Pro klienta.** Mapa scrollování ukazuje, do jaké výšky se dostane polovina návštěvníků. Sekci, kterou považujete za klíčovou, vidí jen zlomek lidí — konkrétní číslo je v reportu. Je to argument pro přeuspořádání stránky, který se nedá odbýt názorem. Zároveň jsme našli místa, kam lidé klikají, i když tam žádný odkaz není: to jsou nesplněná očekávání a levná příležitost — stačí z toho prvku udělat odkaz tam, kam ho lidé zjevně chtějí.

### KONV-39 — Vypadá hlavní akce na všech stránkách stejně, a je při procházení klávesnicí vidět, kde se člověk nachází?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Projdi čtyři stránky a porovnej barvu, tvar a velikost hlavní akce. Zkontroluj, jestli nemá stejný styl něco, co hlavní akce není. Pak klikni do adresního řádku, mačkej Tab a projdi stránku klávesnicí — sleduj, jestli je vždy vidět, na kterém prvku právě jsi.

**Prošel, když.** Hlavní akce má na všech stránkách stejnou barvu i tvar, žádný jiný prvek nemá stejný styl, a při procházení Tabem je zaměřený prvek vždy viditelně označený.

**Pro klienta.** Na webu vypadá na různých místech tlačítko jinak a některé věci vypadají klikatelně, i když nejsou. Návštěvník to pokaždé znovu luští — je to drobná zátěž, která se v datech o chování projeví jako klikání naprázdno. Sjednocení je většinou práce na jedno odpoledne v šabloně a projeví se napříč celým webem. Při té příležitosti nechte zapnout viditelné zvýraznění prvku při ovládání klávesnicí.

### KONV-40 — Má základní text aspoň 16 px a drží stránka pohromadě při zvětšení na 200 %?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** F12, Elements, klikni na běžný odstavec, záložka Computed, hodnota font-size. Pak Ctrl a plus na 200 % a projdi domovskou stránku a stránku služby — sleduj překryvy, useknutý text a nutnost posouvat obsah do stran.

**Prošel, když.** Základní text má nejméně 16 px a při 200 % se nic nepřekrývá, neuseká a nevyžaduje vodorovné posouvání.

**Pro klienta.** Text je menší, než je na telefonu pohodlné, a při zvětšení se stránka rozsype. Týká se to hlavně starších rozhodovatelů — a to jsou u velkých zakázek často právě ti lidé, kteří o dodavateli rozhodují. Zvětšit základní písmo je změna v jednom řádku šablony.

### KONV-41 — Je každý zobrazený certifikát nebo odznak ověřitelný odkazem či číslem a zná ho váš cílový zákazník?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** Vypiš všechny odznaky, pečeti, loga certifikací a partnerských statusů. U každého zjisti: je u něj číslo certifikátu nebo odkaz do registru vydavatele; klikne se na něj někam; je to značka, kterou zákazník v daném oboru zná (ISO 9001 u výroby, partnerské statusy u IT). Zbylé zařaď jako dekoraci.

**Prošel, když.** Každý zobrazený odznak je klikatelný nebo doplněný číslem, které jde ověřit, a je z oboru, který zákazník zná.

**Pro klienta.** Nemá smysl přidávat další odznaky — má smysl udělat ověřitelné ty, které už máte. Výzkum ukazuje, že vnímaná důvěryhodnost je věcí rozpoznání značky, ne skutečného zabezpečení: v jednom testu si podomácku vyrobená pečeť vedla lépe než pečeti od zavedených vydavatelů. Ponechte ty certifikace, které váš zákazník v oboru zná, a doplňte u nich číslo nebo odkaz do registru. Zbytek odstraňte — zabírá místo, které patří referencím.

### KONV-42 — Je poslední článek v blogu nebo v aktualitách starší než rok a je u něj viditelné datum?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** Otevři blog nebo aktuality a podívej se na datum posledního příspěvku. Zkontroluj i rok v copyrightu v patičce a data u případových studií a novinek na domovské stránce.

**Prošel, když.** Poslední příspěvek není starší než rok, nebo sekce není v hlavním menu; rok v patičce odpovídá letošnímu.

**Pro klienta.** Blog s posledním článkem z předloňska a rok 2021 v patičce na webu firmy, která se prezentuje jako spolehlivý partner, říká návštěvníkovi jediné: o web se tu nikdo nestará. Buď sekci obnovte, nebo ji vyhoďte z hlavního menu, nebo u nadčasových článků skryjte data. Rok v patičce nechte doplňovat automaticky — to je práce na pět minut.

---

## 7. Měření, analytika a souhlas

**Čas na oblast:** 100–150 minut na jeden web. Rozpad: zvenčí (bez přístupů) 55–70 minut včetně testovacího odeslání formuláře a tří průchodů cookie lištou; s přístupem do GA4 a GTM dalších 30–45 minut; dotazník na vlastnictví účtů a využívání dat 15 minut. U webu s e-shopem, rezervačním systémem nebo druhou doménou připočíst 20–30 minut na cross-domain a Sklik. Zápis nálezů a screenshotů do reportu není v odhadu.

### MER-01 — Vyvolá odeslání kontaktního nebo poptávkového formuláře měřitelnou událost?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevřít F12 > Network, zaškrtnout Preserve log, do filtru napsat collect. V Console napsat dataLayer a nechat otevřené. Vyplnit formulář testovacími daty (do zprávy napsat AUDIT) a odeslat. Sledovat, jestli odejde request s vlastním názvem události (en=generate_lead, form_submit, kontakt apod.) nebo přibude push do dataLayer. Zopakovat u všech formulářů na webu (kontakt, poptávka, kariéra, newsletter).

**Prošel, když.** Po odeslání odejde událost s vlastním názvem, nebo se načte děkovací stránka s vlastní URL a k ní událost. Platí pro každý formulář zvlášť.

**Pro klienta.** Odeslané poptávky se nikde nepočítají. Nevíte tedy, kolik jich web přinesl, ani ze kterého zdroje přišly, takže se nedá spočítat, co stojí jedna poptávka z reklamy. Nasadíme měření odeslání u každého formuláře — je to práce na půl dne a bez ní je jakékoli rozhodování o rozpočtu jen odhad.

### MER-02 — Jsou v GA4 označené klíčové události (konverze) a odpovídají skutečným obchodním akcím?

**🔴 kritická** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** GA4 > Administrátor > Zobrazení dat > Klíčové události. Vypsat seznam. Pak Administrátor > Události a zkontrolovat, jestli tam vůbec jsou události odpovídající poptávce, kliku na telefon, stažení ceníku a objednání schůzky. Porovnat s tím, co klient označil za obchodní akci v úvodním rozhovoru.

**Prošel, když.** Existují 3–6 klíčových událostí, které odpovídají skutečným obchodním akcím, a v posledních 30 dnech mají nenulový počet.

**Pro klienta.** Analytika zatím ukazuje jen návštěvy, ne obchodní výsledek. Dokud někdo ručně neoznačí, co je pro firmu úspěch (poptávka, telefonát, stažení ceníku), nelze porovnat, který kanál se vyplatí. Určíme tři až šest takových akcí a nastavíme je — od té chvíle jde reklamu řídit podle poptávek, ne podle návštěv.

### MER-03 — Nastaví se analytické a marketingové cookies dřív, než návštěvník klikne na cookie lištu?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Anonymní okno (Ctrl+Shift+N). F12 > Application > Storage > Clear site data. Načíst web a NEKLIKAT na lištu. Pak Application > Cookies > vybrat doménu a hledat _ga, _ga_*, _gcl_au, _fbp, _clck, _clsk, sid, udid. Zároveň Network > filtr collect: odešel hit na google-analytics.com, facebook.com nebo c.seznam.cz? Udělat screenshot — je to hlavní důkaz do reportu.

**Prošel, když.** Před jakoukoli interakcí s lištou nevznikne žádná analytická ani marketingová cookie a neodejde žádný měřicí hit. Přítomné jsou jen technické cookies (relace, jazyk, samotná CMP).

**Pro klienta.** Web začne sbírat data o návštěvnících dřív, než dají souhlas — cookie lišta je v tomto stavu jen obrázek. Podle českého zákona musí být souhlas předem a prokazatelný, a pokutuje se podle GDPR, kde je horní sazba 20 milionů eur nebo 4 % obratu. Praktičtější riziko než pokuta: nemáte důkaz o souhlasu, takže data, která sbíráte, nemůžete legálně použít, a při jakékoli stížnosti, prodeji firmy nebo prověrce je to problém. Náprava je práce na dva až tři dny.

### MER-04 — Objevuje se na webu formulace typu „setrváním na stránkách souhlasíte s používáním cookies“?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Ctrl+F na cookie liště, v zápatí a na stránce Zásady cookies / Ochrana osobních údajů. Hledat výrazy: 'setrváním', 'používáním webu souhlasíte', 'pokračováním v prohlížení', 'dalším procházením'. Zkontrolovat i to, jestli lišta nemá jen jedno tlačítko OK / Rozumím.

**Prošel, když.** Nikde na webu není souhlas odvozený z nečinnosti nebo z dalšího prohlížení a lišta nabízí skutečnou volbu, ne jen potvrzení.

**Pro klienta.** Věta „setrváním na stránkách souhlasíte“ je podle Úřadu pro ochranu osobních údajů neplatný souhlas — mlčení a nečinnost souhlas neznamenají. Je to zároveň nejsnáze doložitelné porušení, protože stačí screenshot vašeho vlastního webu. Řešení souhlasu je potřeba vyměnit celé, ne přeformulovat větu.

### MER-05 — Dívá se na data pravidelně konkrétní člověk a vede to k rozhodnutím?

**🔴 kritická** · náprava: týdny · potřebuje přístupy

**Jak ověřit.** Otázka na klienta: Co jste na webu naposledy změnili kvůli něčemu, co jste viděli v datech? Kdy a kdo se naposledy do přehledů díval? Kontrola s přístupem: GA4 > Průzkumy (existují uložené?), Knihovna > vlastní sestavy, Administrátor > Publika (jen výchozí?), Administrátor > Správa přístupu (kolik lidí?), existuje vůbec nějaký report v Looker Studiu?

**Prošel, když.** Klient jmenuje konkrétní změnu na webu z posledního půl roku podložnou daty, existuje alespoň jeden vlastní report nebo uložený průzkum a k datům má přístup víc než jeden člověk.

**Pro klienta.** Platíte za web, reklamu i nástroje, ale rozhodujete se podle dojmu — do dat se nikdo pravidelně nedívá a nikdo za ně neodpovídá. Nezačínejte přehledovým dashboardem, ten skončí neotevřený. Zaveďte jeden list na jednu stránku: čtyři až šest čísel, jednou měsíčně, jedna věta komentáře a jeden doporučený krok. Přidělte to konkrétnímu člověku a dejte tomu pevný termín v kalendáři. Tohle přinese víc než většina technických oprav.

### MER-06 — Je měřicí kód GA4 na webu právě jednou a jen s jedním měřicím ID?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Ctrl+U (zdroj stránky) a hledat 'G-', 'GTM-' a 'UA-'. Pak F12 > Network > do filtru napsat g/collect > Ctrl+Shift+R (tvrdé obnovení). Rozkliknout každý řádek > Payload / Query String a porovnat parametr tid (měřicí ID) a en (název události). Zopakovat na domovské stránce a na jedné podstránce.

**Prošel, když.** Na jedno načtení stránky odejde právě jeden page_view na jedno G-ID. Ve zdroji není staré UA- ID a stejné G-ID není zároveň natvrdo v šabloně i v GTM.

**Pro klienta.** Návštěvnost se počítá dvakrát, takže všechna čísla v přehledech jsou zhruba dvojnásobná a lidé vypadají spokojenější, než ve skutečnosti jsou. Necháme jen jedno měření a do reportu jasně napíšeme, od kterého data jsou čísla srovnatelná — historii bohužel opravit nejde.

### MER-07 — Dá se na děkovací stránku, na které se počítá konverze, dostat i bez odeslání formuláře?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Po testovacím odeslání si poznamenat URL děkovací stránky. Otevřít ji v anonymním okně přímo z adresního řádku a znovu ji obnovit (F5). Sledovat v Network > filtr g/collect, jestli odejde konverzní událost. Zkontrolovat i to, jestli stránka není v sitemap.xml a jestli ji nemá zaindexovanou Google (site:domena.cz/dekujeme).

**Prošel, když.** Buď se konverze měří ze skutečné události odeslání (ne z návštěvy stránky), nebo je děkovací stránka nedostupná přímo a je vyloučená z indexace.

**Pro klienta.** Konverze se počítá pokaždé, když někdo otevře děkovací stránku — tedy i při obnovení, při návratu tlačítkem zpět a při návštěvě robota. Počet poptávek v přehledech je proto vyšší než ve skutečnosti. Přepneme měření na skutečné odeslání formuláře, pak budou čísla sedět s tím, co dorazí do e-mailu.

### MER-08 — Měří se kliknutí na telefonní číslo a na e-mailovou adresu?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Zkontrolovat ve zdroji stránky, jestli je číslo vůbec odkaz (hledat 'tel:' a 'mailto:') nebo jen text. Pak F12 > Network, Preserve log, filtr collect, kliknout na číslo i na e-mail a sledovat odchozí událost. Kontrolovat v hlavičce, v patičce i na kontaktní stránce.

**Prošel, když.** Telefon i e-mail jsou klikací odkazy a klik na ně odešle vlastní událost do GA4.

**Pro klienta.** Většina lidí u vás poptává telefonem, ale kliknutí na číslo se nikde nepočítá. Web tak vypadá výrazně slabší, než je. Měření kliků na telefon a e-mail nasadíme přes správce značek bez zásahu do webu — obvykle to během měsíce zdvojnásobí počet doložených poptávek z webu.

### MER-09 — Mají konverze přiřazenou peněžní hodnotu?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** GA4 > Reporty > Zapojení > Klíčové události a podívat se na sloupec s hodnotou. Případně Průzkumy > nový průzkum > metrika Hodnota události. V Google Ads > Cíle > Konverze zkontrolovat sloupec Hodnota konverze.

**Prošel, když.** U hlavních konverzí je nenulová hodnota, byť odhadnutá, a je zdokumentováno, jak vznikla.

**Pro klienta.** Konverze jsou zatím jen kusy, ne peníze. Dokud k nim není přiřazená hodnota, nejde spočítat, kolik vás stojí získání jedné zakázky, a reklama se řídí podle počtu proklik. Stačí hrubý odhad (průměrná zakázka krát pravděpodobnost, že poptávku uzavřete) a poprvé uvidíte, jestli se reklama vyplácí, nebo ne.

### MER-10 — Má cookie lišta v první vrstvě tlačítko Odmítnout vše, stejně viditelné jako Přijmout vše?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Načíst web na desktopu i na mobilu (F12 > Toggle device toolbar > iPhone SE). Vyfotit lištu v obou režimech. Kontrolovat: je Odmítnout vše hned v první vrstvě (ne až v Nastavení)? Má stejnou velikost, barvu a kontrast jako Přijmout vše? Nejde lišta zavřít křížkem bez volby? Nepřekrývá lišta obsah tak, že se stránka nedá číst?

**Prošel, když.** Obě tlačítka jsou v první vrstvě, vizuálně rovnocenná (stejná velikost i kontrast) a lišta nebrání čtení stránky ani na mobilu.

**Pro klienta.** Zelené tlačítko Přijmout vše a šedý text Odmítnout vedle sebe nejsou rovnocenná volba — přesně tohle Úřad pro ochranu osobních údajů vyjmenovává mezi nedostatky, které nachází. Na mobilu navíc lišta překrývá obsah a část lidí odejde, než vůbec něco uvidí. Sjednocení obou tlačítek je práce na pár hodin. Počítejte s tím, že po opravě klesne podíl souhlasů, ale data, která zůstanou, budou konečně použitelná.

### MER-11 — Může návštěvník souhlas kdykoli odvolat a funguje to?

**🟠 vysoká** · náprava: minuty · zvenčí

**Jak ověřit.** Prohlédnout zápatí a stránku Zásady cookies: existuje trvalý odkaz typu Nastavení cookies? Kliknout na něj — musí se znovu otevřít lišta. Pak přijmout vše, odvolat souhlas a v F12 > Application > Cookies ověřit, že marketingové a analytické cookies zmizely (nebo se přestaly obnovovat po znovunačtení).

**Prošel, když.** V zápatí je odkaz, který znovu otevře lištu, a po odvolání souhlasu se dotčené cookies smažou a znovu nevznikají.

**Pro klienta.** Kdo jednou souhlas dal, nemá jak ho vzít zpět — ztížené odvolání souhlasu je jedna z věcí, které Úřad vytýká nejčastěji. Většina nástrojů na cookie lištu na to má hotový jednořádkový odkaz do patičky, oprava je otázka minut.

### MER-12 — Je nasazen Consent Mode (režim souhlasu) ve verzi 2, tedy posílá web Googlu stav souhlasu?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** F12 > Network > filtr g/collect > kliknout na řádek > Payload / Query String a hledat parametry gcs a gcd. Pohodlnější varianta: tagassistant.google.com > Add domain > vložit URL > projít záložku Consent u jednotlivých událostí. Pokud web vůbec žádný hit neposílá před souhlasem, ověřit až po přijetí.

**Prošel, když.** V požadavcích na Google je přítomen parametr gcs a zároveň gcd (to je verze 2 se signály ad_user_data a ad_personalization).

**Pro klienta.** Web Googlu neříká, jestli návštěvník souhlas dal, nebo ne. Google to bere jako nesouhlas a u návštěvníků z Evropy omezuje remarketing a měření konverzí — platíte tedy za reklamu, která nemůže dobře cílit. Nasazení je práce na jeden až dva dny a nevyžaduje, abyste začali sbírat víc dat než dnes.

### MER-13 — Odpovídá hlášený stav souhlasu tomu, co návštěvník skutečně zvolil?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Test třikrát v anonymním okně, vždy po vymazání dat webu (Application > Clear site data). 1) Před kliknutím na lištu, 2) po Odmítnout vše, 3) po Přijmout vše. Pokaždé v Network > filtr g/collect > Payload číst hodnotu gcs. Formát je G1xy: x = Google Ads, y = Analytics, 1 = souhlas, 0 = nesouhlas.

**Prošel, když.** Před volbou a po Odmítnout vše je gcs=G100 (nebo se neodešle nic), po Přijmout vše je gcs=G111.

**Pro klienta.** Lišta hlásí Googlu souhlas i tehdy, když návštěvník klikl na Odmítnout. To je horší než nemít lištu vůbec, protože firma je v přesvědčení, že má vše v pořádku, a přitom má doložitelné porušení. Napojení voleb na skutečné chování skriptů je oprava na několik hodin.

### MER-14 — Posílá Sklik správnou hodnotu souhlasu (0 nebo 1), nebo posílá -1?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Postup přímo od Seznamu: F12 > Network > do filtru napsat 'reta' (retargeting), pak 'conv' (konverze) > F5 > kliknout na řádek > záložka Payload > najít řádek consent. Otestovat před souhlasem, po odmítnutí i po přijetí. Pozor: konverze Sklik má tříminutovou ochranu proti dvojímu započtení, takže opakované obnovení konverzní stránky do tří minut vypadá jako nefunkční kód.

**Prošel, když.** consent je 0 před souhlasem a 1 po udělení souhlasu. Hodnota -1 se neobjeví ani jednou.

**Pro klienta.** Kód Skliku hlásí, že souhlasy nejsou na webu správně napojené. Prakticky to znamená, že platíte Sklik, ale nesbíráte publika pro opakované oslovení a měří se vám jen část konverzí. Napojení hodnoty souhlasu na lištu je krátká práce s okamžitým a měřitelným efektem na výkon kampaní.

### MER-15 — Drží se měření pohromadě při přechodu na jinou doménu nebo subdoménu (e-shop, rezervace, konfigurátor)?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Zvenčí: projít cestu z hlavního webu na druhou doménu a v adresním řádku zkontrolovat, jestli se do URL přidal parametr _gl. S přístupem: GA4 > Reporty > Akvizice > Získání návštěvnosti > dimenze Zdroj/médium relace a hledat vlastní doménu v seznamu (self-referral). Dále GA4 > Administrátor > Datové proudy > web > Konfigurovat nastavení značky > Konfigurovat domény.

**Prošel, když.** Při přechodu se do URL doplní parametr _gl, obě domény používají stejné měřicí ID a ve zdrojích návštěvnosti se neobjevuje vlastní doména.

**Pro klienta.** Když návštěvník přejde z webu do rezervačního systému (nebo e-shopu), měření ho ztratí a začne ho počítat jako nového návštěvníka, který přišel z vašeho vlastního webu. Tržby se pak nepřipíšou reklamě ani vyhledávači, který zákazníka skutečně přivedl. Propojení domén je nastavení na pár hodin a obvykle výrazně změní, který kanál v přehledech vyhrává.

### MER-16 — Mají odkazy v newsletterech, e-mailových podpisech, QR kódech a tištěných materiálech označení kampaně (UTM)?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Vyžádat od klienta poslední rozesílku, ukázku tištěného materiálu s QR kódem a e-mailový podpis. Rozkliknout odkaz a v adresním řádku hledat utm_source a utm_medium. S přístupem: GA4 > Reporty > Akvizice > Získání návštěvnosti a podívat se na podíl kanálu Direct.

**Prošel, když.** Odkazy z rozesílek a tištěných materiálů obsahují utm_source a utm_medium. Podíl kanálu Direct není u aktivně rozesílající firmy nápadně vysoký (orientačně nad 40 % je varovný signál).

**Pro klienta.** Návštěvy z newsletteru, z podpisu v e-mailu i z QR kódu na letáku spadnou do kolonky „přímý přístup“, takže to vypadá, jako by tyhle věci nefungovaly. Zavedeme jednoduché značkování odkazů — je to hodinová práce a už za měsíc uvidíte, co vám rozesílka a tisk reálně přinesly.

### MER-17 — Je vyfiltrovaný provoz zaměstnanců, dodavatelů a monitorovacích služeb?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** GA4 > Administrátor > Datové proudy > web > Konfigurovat nastavení značky > Zobrazit vše > Definovat interní provoz (jsou tam IP rozsahy?). Pak Administrátor > Nastavení dat > Filtry dat: je filtr aktivní, nebo jen v testovacím režimu? Signály v datech: špičky přesně v pracovní době bez vazby na kampaně, návštěvy administrátorských URL, opakovaně identická délka relace.

**Prošel, když.** Interní provoz je definován podle IP rozsahů klienta i dodavatelů a filtr je ve stavu Aktivní, ne Testování.

**Pro klienta.** V datech jsou započítané i návštěvy vašich vlastních lidí, dodavatelů a hlídacích služeb. U webu s pár tisíci návštěvami měsíčně to bývá klidně třetina, takže úspěšnost webu vypadá výrazně hůř, než je. Firma pak řeší problém, který neexistuje. Nastavení filtru je práce na pár hodin.

### MER-18 — Vlastní firma sama své účty GA4, GTM, Google Ads a Sklik, nebo je má agentura či bývalý zaměstnanec?

**🟠 vysoká** · náprava: dny · potřebuje přístupy

**Jak ověřit.** Dotazník před auditem plus kontrola s přístupem: GA4 > Administrátor > Správa přístupu k účtu (pozor, k ÚČTU, ne ke službě) — kdo má roli Administrátor. GTM > Administrátor > Správa uživatelů na úrovni účtu. Ověřit, že role Administrátor drží e-mail na firemní doméně, ideálně sdílený firemní účet, ne osobní gmail.

**Prošel, když.** Firemní e-mail na firemní doméně má roli Administrátor na úrovni účtu u GA4 i GTM. Dodavatelé mají přístup, ale nejsou jedinými vlastníky.

**Pro klienta.** Účty, ve kterých jsou vaše data o návštěvnosti a reklamě, nevlastníte vy, ale dodavatel nebo bývalý kolega. Při rozchodu o ně můžete ze dne na den přijít a historii už nikdo zpětně nepřenese. Převod vlastnictví na firemní účet je administrativní krok na pár dní, který je potřeba udělat dřív, než ho budete potřebovat.

### MER-19 — Má firma zapojenou Google Search Console (a Seznam Webmaster) na vlastní účet?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** Zeptat se klienta a nechat si ukázat data přes sdílení obrazovky. Ověřit způsob potvrzení vlastnictví — ideálně DNS TXT záznam na firemní doméně, ne osobní účet. Slabý signál zvenčí: curl -s https://domena.cz | grep google-site-verification (pozor, nepřítomnost NENÍ důkaz, že Search Console chybí — většina firem používá DNS nebo soubor). Pro Seznam: reporter.seznam.cz/wm/, pozor na rozlišení http a https verze.

**Prošel, když.** Search Console je zapojená, potvrzená přes DNS na firemní doméně, firemní účet je vlastníkem a data sahají alespoň rok zpět. Seznam Webmaster je zapojený pro https verzi.

**Pro klienta.** Nemáte zapojený nástroj, který jako jediný ukazuje, co lidé hledali, než na váš web přišli — a je zdarma. Bez něj nevíte, na které dotazy se zobrazujete zbytečně nízko a kde stačí přepsat titulek, aby přišlo víc lidí. Zapojíme ho přes DNS záznam, aby patřil firmě a ne osobě, a přidáme i českou obdobu pro Seznam.

### MER-20 — Jsou v GTM kontejneru tagy a pixely, ke kterým se nikdo nehlásí?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevřít veřejně čitelný kontejner https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX a projít, na jaké třetí strany se odesílají data: connect.facebook.net (Meta), c.seznam.cz (Sklik), snap.licdn.com (LinkedIn), analytics.tiktok.com, hotjar, smartlook, leady, clarity.ms. S přístupem: GTM > Tagy > seřadit podle Naposledy upraveno a u každého tagu určit vlastníka a účel.

**Prošel, když.** Ke každému tagu v kontejneru existuje živý účet, konkrétní odpovědná osoba a důvod, proč tam je. Nic navíc.

**Pro klienta.** Na webu běží sledovací kódy po předchozí agentuře, které nikdo nepoužívá — ale pořád posílají data o vašich návštěvnících třetím stranám a patří do seznamu cookies, kde nejsou. Je to zbytečné právní riziko. Projdeme kontejner, u každého kódu určíme majitele a účel, zbytek pozastavíme a po měsíci smažeme.

### MER-21 — Měří se všechny části webu, včetně starých landing pages, blogu, kariérní sekce a děkovacích stránek?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Stáhnout sitemap.xml (domena.cz/sitemap.xml) a vybrat 8–10 URL napříč sekcemi, hlavně ty nejstarší a ty mimo hlavní šablonu. Na každé F12 > Network > filtr g/collect a ověřit odchozí page_view. Hromadně: curl -s URL | grep -o 'G-[A-Z0-9]*'. Nezapomenout na jiné subdomény a microsite.

**Prošel, když.** Měřicí kód se spustí na všech kontrolovaných URL včetně děkovací stránky a stránek mimo hlavní šablonu.

**Pro klienta.** Část stránek se vůbec nepočítá, takže se tváří jako mrtvé, i když na ně lidé chodí. Doplníme na ně měření, nebo je zrušíme a přesměrujeme — a hlavně zjistíme, proč vznikly mimo hlavní šablonu, protože to bývá známka rozpadlé správy webu.

### MER-22 — Je měření vedeno přes Google Tag Manager, nebo je vlepené natvrdo v šabloně webu?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Ze zdroje stránky vzít GTM ID a otevřít https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX (publikovaný kontejner je veřejně čitelný). V textu hledat 'G-', 'AW-', 'connect.facebook.net', 'c.seznam.cz', 'clarity.ms', 'snap.licdn.com', a dále 'analytics_storage', 'ad_user_data', 'gtm.init_consent'. Pak v Ctrl+U ověřit, jestli je gtag.js nebo pixel vložen i přímo v šabloně mimo GTM.

**Prošel, když.** Všechny měřicí a reklamní skripty jsou v GTM, kontejner zná klíče souhlasu (analytics_storage, ad_user_data, ad_personalization) a v šabloně webu není nic navíc.

**Pro klienta.** Měřicí a reklamní skripty jsou zadrátované přímo ve webu, takže se nedají zapínat podle souhlasu ani měnit bez programátora. Přesun do správce značek je jednorázová práce, po které jde každá další úprava měření udělat za hodinu místo za týden a bez zásahu do webu.

### MER-23 — Jsou automaticky měřené akce (stažení PDF, odeslání formuláře, vyhledávání na webu) využité jako konverze?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** GA4 > Administrátor > Datové proudy > vybrat web > Rozšířené měření (ikona ozubeného kola) — které přepínače jsou zapnuté. Pak Administrátor > Klíčové události: je mezi nimi file_download nebo form_submit? Zvenčí lze aspoň ověřit, že se událost odesílá: F12 > Network > filtr g/collect > kliknout na odkaz na PDF > hledat en=file_download.

**Prošel, když.** Rozšířené měření je zapnuté a alespoň jedna z automatických událostí, která má obchodní význam (stažení ceníku, odeslání formuláře), je označená jako klíčová událost.

**Pro klienta.** Stahování ceníku a katalogů se už měří, jen to nikdo neoznačil za úspěch, takže se to v přehledech ztrácí. Jedním kliknutím získáte metriku zájmu o vaše ceny bez jakéhokoli programování a bez nákladů.

### MER-24 — Odpovídá seznam cookies v zásadách tomu, co web skutečně ukládá, a je česky?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Přijmout na webu všechny cookies, pak F12 > Application > Cookies a vypsat reálný seznam včetně doby platnosti. Porovnat řádek po řádku se stránkou Zásady cookies. Kontrolovat: je seznam česky, je tam každá reálně nastavená cookie, sedí uvedená doba platnosti, sedí kategorie (analytická vs. marketingová). Pro rychlý podklad lze pustit bezplatný sken (Cookiebot nebo CookieYes Cookie Checker).

**Prošel, když.** Seznam v zásadách je v češtině, obsahuje všechny reálně nastavované cookies včetně těch od třetích stran a uvedené doby platnosti odpovídají skutečnosti.

**Pro klienta.** Seznam cookies v zásadách neodpovídá tomu, co web opravdu dělá — část je anglicky, část tam chybí a doby platnosti jsou opsané ze vzoru. Úřad tohle výslovně vyjmenovává mezi nedostatky. Necháme web proskenovat, vygenerujeme seznam podle skutečnosti a nastavíme opakovaný sken, aby nezastaral při každém dalším nasazení nástroje.

### MER-25 — Předává web souhlas do Microsoft Clarity, pokud je nasazená?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ověřit přítomnost: ve zdroji stránky hledat 'clarity.ms'. Pak přijmout všechny cookies a v F12 > Console spustit: clarity('metadata', (d,u,c)=>console.log(c), false, true, true). Zkontrolovat i Application > Cookies: existují _clck a _clsk? V Clarity (s přístupem) ověřit, jestli za poslední měsíc vůbec přibývají nahrávky.

**Prošel, když.** Po přijetí souhlasu vrátí konzole stav granted a vzniknou cookies _clck a _clsk. Clarity zaznamenává nové nahrávky.

**Pro klienta.** Nástroj na nahrávky obrazovky sice na webu je, ale od konce října 2025 vyžaduje předání souhlasu, a to se neděje — instalace je fakticky mrtvá a žádná data nesbírá. Nestojí to nic navíc, ale v přehledu nástrojů to vypadá, že máte nahrávky, a nemáte. Napojení na cookie lištu je práce na pár hodin a hned uvidíte, kde lidé na formuláři odpadají.

### MER-26 — Je označování kampaní jednotné, nebo se stejný zdroj objevuje v několika variantách?

**🟡 střední** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** GA4 > Reporty > Akvizice > Získání návštěvnosti > přepnout dimenzi na Zdroj relace / Médium relace, seřadit podle abecedy a hledat varianty téhož: newsletter / Newsletter / NEWSLETTER, email / e-mail / mail, facebook / Facebook / fb. GA4 rozlišuje velká a malá písmena.

**Prošel, když.** Každý zdroj a médium se v seznamu objevuje právě v jedné podobě, malými písmeny.

**Pro klienta.** Jeden a tentýž newsletter je v přehledech rozdělený do tří různých řádků, protože se pokaždé psal jinak. Výsledky vypadají menší, než jsou, a nikdo je nesečte. Sjednotíme názvosloví a napíšeme jednostránkové pravidlo pro toho, kdo rozesílá. Historii bohužel opravit nejde.

### MER-27 — Je uchování dat v GA4 nastavené na 14 měsíců?

**🟡 střední** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** GA4 > Administrátor > Nastavení dat > Uchovávání dat > položka Uchovávání údajů o uživatelích a událostech. Bez přístupu nepřímý signál: klient nedokáže ukázat žádné meziroční srovnání z průzkumů.

**Prošel, když.** Nastaveno na 14 měsíců (maximum běžné verze GA4).

**Pro klienta.** Podrobná data se po dvou měsících mažou, takže nejde udělat srovnání s loňskou sezonou ani sledovat, kde lidé odpadají v delším období. Přepnutí na 14 měsíců je jedno kliknutí zdarma, ale nefunguje zpětně — co se smazalo, je pryč, takže čím dřív, tím líp.

### MER-28 — Pokud web používá serverové měření (server-side GTM), odpovídá jeho cena velikosti provozu?

**⚪ nízká** · náprava: dny · zvenčí

**Jak ověřit.** F12 > Network > filtr collect: míří požadavky na google-analytics.com, nebo na vlastní subdoménu klienta (sgtm.firma.cz, gtm.firma.cz, analytics.firma.cz)? Pokud ano, porovnat s měsíční návštěvností z GA4 a zeptat se klienta na fakturu za cloud. Ověřit také, jestli serverové řešení vůbec správně předává souhlas (viz MAS-15).

**Prošel, když.** Buď serverové měření vůbec není, nebo je jeho přínos doložitelný objemem provozu a tržeb a souhlas se přes něj předává správně.

**Pro klienta.** Platíte zhruba 2 000 Kč měsíčně za pokročilé serverové měření, které je pro váš objem návštěv výrazně předimenzované — i minimální sestava zvládne mnohonásobek toho, co máte. Není nutné to hned rušit, ale patří to do přehledu nákladů. Pokud navíc přes něj neprochází správně souhlas, platíte za něco, co vám ještě přidělává právní problém.

### MER-29 — Je zapnutý export dat do BigQuery?

**⚪ nízká** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** GA4 > Administrátor > Odkazy na produkty > BigQuery. Zkontrolovat, jestli existuje propojení a od kdy běží. Běžná verze GA4 zvládne export do 1 milionu událostí denně.

**Prošel, když.** Export je zapnutý a běží. U webu s malým provozem se vejde do bezplatného rozsahu BigQuery.

**Pro klienta.** Data z analytiky se po 14 měsících nenávratně mažou. Export do datového skladu je u vaší velikosti provozu zdarma, zapíná se na pár kliknutí a zajistí, že za dva roky budete mít s čím srovnávat. Zpětně to nejde — exportuje se až od chvíle zapnutí.

---

## 8. Technický stav, bezpečnost a provoz

**Čas na oblast:** 75–110 minut u běžného firemního webu do 50 stránek, pokud jde jen o externí část (body označené jako ověřitelné zvenčí). Rozpad: 15 min hlavičky, HTTPS a certifikát včetně SSL Labs a Observatory (běží na pozadí, mezitím se dá dělat něco jiného); 10 min doména, DNS a e-mailová autentizace přes DNS over HTTPS; 20–30 min crawl webu ve Screaming Frogu (u pomalého hostingu s omezenou rychlostí i déle — pusť ho jako první a nech běžet na pozadí); 15 min WordPress, zapomenuté soubory a subdomény z Certificate Transparency; 10 min rychlost a PageSpeed; 15 min zápis nálezů s konkrétními hodnotami. Připočti 20–30 minut u e-shopu nebo webu nad 500 stránek (crawl neprojde v bezplatné verzi Screaming Frogu a je potřeba vzorkovat). Části vyžadující přístup nebo dotazník (PRIS-01 až PRIS-05, doplnění MAIL-03 a MON-01) přidávají 30–45 minut, ale probíhají na schůzce s klientem, ne u počítače. Poprvé u nového klienta počítej 2× tolik — orientace v tom, na jaké platformě web běží a kdo co spravuje, zabere víc než samotné testy.

### PROV-01 — Je doména registrovaná na klienta (jeho firmu), ne na dodavatele nebo bývalou agenturu?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** Otevři https://www.nic.cz/whois/, zadej doménu bez www, Enter. V odpovědi čti řádek „Držitel" (u právnických osob je vidět název firmy) a řádek „Registrátor". Porovnej název držitele s obchodním jménem klienta ve veřejném rejstříku (justice.cz). U jiné TLD než .cz použij whois přes registrátora nebo https://who.is/. Pokud je držitel skrytý (fyzická osoba, GDPR), zeptej se klienta na přístup do administrace registrátora a nech si ukázat kontaktní e-mail držitele.

**Prošel, když.** V kolonce Držitel je název firmy klienta (nebo jméno majitele) a klient má přihlašovací údaje k účtu u registrátora.

**Pro klienta.** Vaše internetová adresa je vedená na jinou firmu než na vás. Prakticky to znamená, že web ani firemní e-mail nevlastníte — máte je v pronájmu. Kdyby došlo k rozchodu s dodavatelem, může vám adresu ze dne na den vypnout a nemáte na to právní páku. Převod na vaši firmu je běžný úkon u registrátora, trvá pár dní a je to první věc, kterou byste měli vyřešit — dřív než cokoli technického.

### PROV-02 — Je doména prodloužená s dostatečnou rezervou (víc než 60 dní do expirace) a ví se, kdo ji hlídá?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** Ve stejném výpisu z https://www.nic.cz/whois/ čti řádek „Expirace". Spočítej dny do dnešního data. Doplň dotazem na klienta: kdo platí fakturu za doménu a chodí upozornění na aktivní e-mail (ne na adresu bývalého zaměstnance)?

**Prošel, když.** Expirace je víc než 60 dní v budoucnu a klient umí říct, komu chodí upozornění na prodloužení.

**Pro klienta.** Vaše internetová adresa má datum platnosti jako řidičák. Když se zapomene prodloužit, po 30 dnech se web i firemní pošta vypnou — bez varování a bez toho, aby se cokoli smazalo, prostě přestanou fungovat. Po 60 dnech adresa propadne a jde do dražby, kde ji může koupit kdokoli. Nastavte si automatické prodloužení a ověřte, že upozornění chodí na e-mail, který někdo čte.

### PROV-03 — Běží web na HTTPS a přesměrovává nezabezpečená adresa (http://) automaticky na zabezpečenou?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** V terminálu: curl -sSI http://domena.cz/ a sleduj hlavičku Location v odpovědi. Musí být kód 301 nebo 308 a Location musí začínat https:// na stejném hostu (tedy http://domena.cz → https://domena.cz, ne rovnou na https://www.domena.cz). Ověř i řetěz do konce: curl -sSL -o /dev/null -w "%{url_effective} %{http_code}\n" http://domena.cz/. Kontrolní pohled: otevři web v prohlížeči a podívej se, jestli je vlevo v adresním řádku zámek a ne varování.

**Prošel, když.** Nezabezpečená adresa vrací 301 na https:// na stejném hostu a konečná adresa je https:// s kódem 200.

**Pro klienta.** Když někdo napíše vaši adresu bez „https", musí ho web sám přehodit na zabezpečenou verzi. Pokud to nedělá, prohlížeč u kontaktního formuláře zobrazí červené „Nezabezpečeno" a lidé formulář neodešlou — přijdete přímo o poptávky. Nastavení je na straně serveru, obvykle půl hodiny práce.

### PROV-04 — Je certifikát platný, důvěryhodný a s kompletním řetězem?

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Rychle: echo | openssl s_client -connect domena.cz:443 -servername domena.cz 2>/dev/null | openssl x509 -noout -dates -issuer -subject. Sleduj notAfter (datum konce platnosti). Důkladně: https://www.ssllabs.com/ssltest/, zadej doménu a ZAŠKRTNI „Do not show the results on the boards" (u klientského webu vždy). Ve výsledku sleduj: velké písmeno známky nahoře (A+ až F), sekci Certificate → řádek „Chain issues" (musí být None) a „Trusted" (musí být Yes). Známka M = neshoda jména, známka T = nedůvěryhodný certifikát, obojí je okamžitý nález. Test trvá 2–3 minuty.

**Prošel, když.** Certifikát platí ještě aspoň 20 dní, Trusted = Yes, Chain issues = None, známka B nebo lepší.

**Pro klienta.** Bezpečnostní certifikát je to, díky čemu prohlížeč ukazuje zámek. Když propadne, návštěvník místo webu uvidí celostránkové červené varování a dál nepokračuje — web je fakticky mimo provoz. Horší je neúplně nainstalovaný certifikát: web funguje na vašem počítači, ale části návštěvníků se nezobrazí, a nikdo si toho měsíce nevšimne.

### PROV-05 — Běží web na aktuální hlavní verzi WordPressu? (jen pro WordPress weby)

**🔴 kritická** · náprava: hodiny · zvenčí

**Jak ověřit.** Tři zdroje v tomto pořadí: (1) curl -sS https://domena.cz/feed/ | grep -i generator — tag <generator> v RSS je nejspolehlivější; (2) curl -sS https://domena.cz/ | grep -i 'name="generator"'; (3) parametry ?ver= u souborů z /wp-includes/ v HTML. NESPOLÉHEJ na /readme.html — moderní WordPress v něm verzi neuvádí, i když soubor vrací 200, a dostaneš falešně negativní výsledek. Nalezenou verzi porovnej s https://api.wordpress.org/core/stable-check/1.0/ — hledej jedinou položku označenou "latest".

**Prošel, když.** Verze je označená jako latest, nebo je to poslední vydání předchozí menší řady.

**Pro klienta.** Systém, na kterém web běží, je několik verzí pozadu. Znamená to, že nedostává bezpečnostní opravy a jsou u něj veřejně popsané způsoby, jak se dovnitř dostat — návod je volně na internetu. Aktualizace se nedělá přímo na živém webu: nejdřív záloha, pak zkušební kopie, pak aktualizace a test formulářů, teprve pak ostrý web. Je to půl dne práce, ale odkládat to je nejdražší varianta.

### PROV-06 — Jsou zásuvné moduly (pluginy), které jdou zvenčí odhalit, aktuální a bez známých zranitelností?

**🔴 kritická** · náprava: dny · zvenčí

**Jak ověřit.** curl -sS https://domena.cz/ | grep -oE '/wp-content/plugins/[^/]+/[^"]*ver=[0-9.]+' | sort -u — dostaneš slug pluginu a často i verzi. Každý slug zadej do https://wpscan.com/plugins/<slug> nebo https://patchstack.com/database/ a porovnej nalezenou verzi s uvedenými zranitelnostmi. POZOR na licenci: bezplatné použití WPScan je výslovně jen pro nekomerční účely — pro placený audit klienta potřebuješ komerční licenci nebo jiný zdroj. Zvenčí uvidíš jen pluginy, které něco vkládají do stránky; formuláře, zálohy a SEO nástroje často neuvidíš vůbec.

**Prošel, když.** Žádný odhalený plugin nemá ve veřejné databázi zranitelnost pro danou verzi.

**Pro klienta.** Devět z deseti bezpečnostních děr ve WordPressu není v samotném systému, ale v doplňcích. U vašeho webu jsem zvenčí odhalil tyto doplňky a u X z nich je veřejně popsaná zranitelnost. Rychlost je tu podstatná: u vážných děr začínají hromadné útoky v řádu hodin od zveřejnění, ne dnů. Doporučení proto nezní jen „aktualizujte" — patří k tomu i vyhodit doplňky, které nepoužíváte, a mít průběžnou ochranu pro dobu mezi zveřejněním díry a vydáním opravy.

### PROV-07 — Nejsou na webu veřejně dostupné zapomenuté citlivé soubory?

**🔴 kritická** · náprava: minuty · zvenčí

**Jak ověřit.** Otestuj postupně a kontroluj OBSAH, ne jen kód (na webu se soft 404 vrátí 200 na všechno): for p in .git/config .env wp-config.php.bak backup.sql web.zip phpinfo.php info.php adminer.php .DS_Store; do echo -n "$p "; curl -o /dev/null -sS -w "%{http_code} %{size_download}\n" https://domena.cz/$p; done. U každé odpovědi 200 stáhni prvních pár řádků (curl -sS https://domena.cz/.env | head -5) a podívej se, jestli je to skutečně ten soubor, nebo chybová stránka. Doplň výpis adresářů: otevři https://domena.cz/wp-content/uploads/ a https://domena.cz/wp-content/backups/ v prohlížeči — nesmí být vidět seznam souborů. Vypiš i subdomény z https://crt.sh/?q=%25.domena.cz a projdi ty, které vypadají jako staging nebo test.

**Prošel, když.** Žádná z testovaných cest nevrací skutečný obsah citlivého souboru a adresáře nevypisují seznam souborů.

**Pro klienta.** Na veřejné adrese vašeho webu leží záloha databáze (nebo složka se zdrojovým kódem). Kdokoli na světě si ji může stáhnout — obsahuje hesla k databázi a data vašich zákazníků. Tohle je jediná věc z celého auditu, kterou vám volám telefonicky a řeším týž den: soubor je potřeba smazat a hesla změnit, protože nevíte, kdo ho už stáhl.

### PROV-08 — Existují zálohy webu, jsou uložené jinde než na stejném serveru a drží se dost dlouho zpět?

**🔴 kritická** · náprava: dny · potřebuje přístupy

**Jak ověřit.** POTŘEBA PŘÍSTUP nebo dotazník. Ptej se konkrétně, ne obecně: (1) Zálohují se soubory i databáze, nebo jen jedno? (2) Jak často? (3) Kam přesně — na stejný server jako web, nebo jinam? (4) Jak dlouho zpět se drží? (5) Kdo má k zálohám přístup? Nepřímá stopa zvenčí: pokud test SEC-01 najde /backup.zip nebo /wp-content/backups/, je to zároveň kritický nález sám o sobě. Odpověď „hosting to zálohuje" bez znalosti rozsahu = neprošlo.

**Prošel, když.** Zálohují se soubory i databáze, ukládají se mimo hosting webu, drží se aspoň 30 dní zpět.

**Pro klienta.** Záloha uložená na stejném serveru jako web není záloha. Při napadení nebo výpadku hostingu zmizí obojí naráz. Druhá věc je jak dlouho zpět: poškozený obsah nebo napadení se často odhalí až po týdnech, takže záloha ze včerejška je k ničemu — potřebujete aspoň měsíc zpět. A třetí: zálohovat se musí soubory i databáze, ne jen jedno z toho, protože web bez databáze je prázdná šablona.

### PROV-09 — Je znám úplný seznam doplňků včetně opuštěných a nepoužívaných?

**🔴 kritická** · náprava: dny · potřebuje přístupy

**Jak ověřit.** POTŘEBA PŘÍSTUP. V administraci WordPressu: Pluginy → Instalované pluginy. Projdi seznam a sleduj: (1) neaktivní pluginy (mají zůstat smazané, ne jen vypnuté — zranitelné jsou i vypnuté), (2) u každého klikni na „Zobrazit detaily" a čti „Naposledy aktualizováno" — víc než rok = podezření na opuštěný projekt, (3) pluginy, které už nejsou v oficiálním repozitáři (odkaz na detaily nefunguje) = stažené kvůli zranitelnosti. V reportu z externí fáze uveď tento bod jako výslovný limit auditu a jako důvod pro druhou fázi.

**Prošel, když.** Existuje aktuální seznam doplňků, žádný není déle než rok bez aktualizace a žádný neaktivní není jen vypnutý místo smazaného.

**Pro klienta.** Zvenčí jsem viděl jen ty doplňky, které něco vykreslují na stránce — formuláře, zálohovací nástroje ani SEO doplňky odtud vidět nejdou. Přitom právě opuštěné doplňky, které vývojář před lety přestal spravovat, jsou nejnebezpečnější kategorie vůbec: díra se v nich najde a nikdo ji nikdy neopraví. Doporučuji druhou fázi s přístupem do administrace, kde se seznam projde a co se nepoužívá, se smaže — nestačí vypnout, vypnutý doplněk je zranitelný stejně jako zapnutý.

### PROV-10 — Fungují obě varianty adresy — s www i bez www — a končí obě na jedné jediné adrese?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Spusť obojí zvlášť: curl -sSL -o /dev/null -w "%{url_effective} %{http_code}\n" https://domena.cz/ a totéž pro https://www.domena.cz/. Obě musí skončit na téže konečné adrese s kódem 200. Nespoléhej na to, co je v certifikátu (SAN) — CDN často obsluhuje každou variantu jinak. Pokud jedna vrací chybu certifikátu, curl to ohlásí jako „SSL certificate problem".

**Prošel, když.** Obě varianty vrací 200 a %{url_effective} je u obou identický řetězec.

**Pro klienta.** Vaše adresa existuje ve dvou tvarech — s „www" a bez. Obě musí vést na stejné místo. Pokud jedna nefunguje, lidé, kteří adresu opíší z vizitky nebo z Map Google, skončí na chybové hlášce. Pokud fungují obě, ale každá zvlášť, Google neví, která je ta pravá, dělí si mezi ně hodnocení a rozpadne se vám měření návštěvnosti.

### PROV-11 — Nastavuje web cookies s příznaky Secure, HttpOnly a SameSite?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i set-cookie. U každé cookie sleduj přítomnost slov Secure, HttpOnly, SameSite. Doplň v prohlížeči: F12 → Application (Chrome) nebo Storage (Firefox) → Cookies → vyber doménu; sloupce HttpOnly, Secure, SameSite jsou zaškrtávací. Zvenčí uvidíš jen cookies pro nepřihlášeného návštěvníka — cookie přihlášeného uživatele je za přihlášením a patří do fáze s přístupem.

**Prošel, když.** Všechny nastavené cookies mají Secure; přihlašovací (session) cookie má navíc HttpOnly a SameSite.

**Pro klienta.** Cookie je malý soubor, kterým si web pamatuje přihlášeného uživatele. Pokud u ní chybí ochranný příznak, dá se ukrást skriptem a útočník se přihlásí jako váš zákazník nebo jako správce webu — bez znalosti hesla. U e-shopu to znamená převzetí zákaznického účtu. Je to nejtvrději hodnocená chyba ve všech bezpečnostních žebříčcích a oprava je nastavení na straně aplikace, ne přepis webu.

### PROV-12 — Nesdílí web data přes CORS s hvězdičkou v kombinaci s přihlašovacími údaji?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -iE 'access-control-allow-origin|access-control-allow-credentials'. Kritický nález: Access-Control-Allow-Origin: * SOUČASNĚ s Access-Control-Allow-Credentials: true. Otestuj i API cesty, ne jen homepage: curl -sSI -H "Origin: https://example.com" https://domena.cz/wp-json/.

**Prošel, když.** Buď hlavičky chybí, nebo Access-Control-Allow-Origin uvádí konkrétní adresu místo hvězdičky.

**Pro klienta.** Toto nastavení určuje, které cizí weby smí číst data z vašeho webu. Když je nastavené na „kdokoli" a zároveň se posílají přihlašovací údaje, může libovolná cizí stránka číst data vašeho přihlášeného zákazníka. Je to jedna ze dvou nejhůř hodnocených chyb vůbec.

### PROV-13 — Mají externí skripty z cizích domén kontrolu neporušenosti (SRI)?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sS https://domena.cz/ | grep -oE '<script[^>]*src="https?://[^"]*"[^>]*>' a u každého skriptu z cizí domény sleduj přítomnost atributu integrity="sha384-...". Zvlášť si všímej skriptů načítaných přes http:// nebo přes // (bez protokolu) — to je nejhorší varianta. Alternativně v prohlížeči: F12 → Sources → seznam domén v levém panelu ukáže všechny třetí strany.

**Prošel, když.** Skripty z cizích domén mají atribut integrity, nebo jde jen o skripty, kde to nelze (Google Tag Manager, chat) a načítají se přes https.

**Pro klienta.** Váš web načítá kód z cizích serverů — analytiku, chat, mapy, počítadla. Když někdo napadne server té třetí strany, spustí se jeho kód na vašem webu jménem vaší značky. Prakticky to znamená podvržený platební nebo kontaktní formulář na vaší adrese. Ochrana spočívá v tom, že se u každého cizího skriptu uloží jeho otisk a prohlížeč odmítne spustit cokoli, co otisku neodpovídá.

### PROV-14 — Jsou na webu nefunkční interní odkazy, obrázky nebo soubory ke stažení?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Screaming Frog SEO Spider (zdarma do 500 URL): zadej https://domena.cz/, Start. Po dojetí crawlu jdi na záložku Response Codes → filtr v rozbalovacím poli nahoře přepni na „Client Error (4xx)" a pak na „Server Error (5xx)". U každého nálezu klikni na řádek a dole v panelu otevři záložku Inlinks — ukáže, ze kterých stránek se na rozbitou adresu odkazuje. Ten seznam adres jde rovnou do reportu. Pozor: u slabého hostingu nejprve Configuration → Speed → sniž na 1–2 vlákna, jinak můžeš web přetížit.

**Prošel, když.** Nula odkazů, obrázků, PDF nebo skriptů s kódem 4xx/5xx.

**Pro klienta.** Prošel jsem celý váš web a našel X odkazů, které nikam nevedou — mezi nimi odkaz na ceník a katalog v PDF. Když na ně zákazník klikne, dostane chybovou stránku a obvykle odejde ke konkurenci. Přikládám přesný seznam adres, kde je to potřeba opravit; u většiny jde o práci na minuty.

### PROV-15 — Nevypisuje WordPress veřejně přihlašovací jména uživatelů?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Tři testy: (1) curl -sS https://domena.cz/wp-json/wp/v2/users — nesmí vrátit JSON se seznamem uživatelů; (2) curl -sSI -L https://domena.cz/?author=1 | grep -i location — nesmí přesměrovat na /author/nejakejmeno/; (3) curl -sSI https://domena.cz/xmlrpc.php — pokud vrací 200, ověř, jestli je potřeba (dnes většinou ne). Doplň dostupnost /wp-login.php.

**Prošel, když.** REST endpoint uživatelů nevrací seznam a ?author=1 nepřesměrovává na jméno.

**Pro klienta.** Váš web komukoli na požádání vypíše seznam přihlašovacích jmen správců. Útočník tak dostane polovinu přihlašovacích údajů zdarma a zbývá mu jen zkoušet hesla — což stroje dělají tisíckrát za minutu. Zavřít se to dá nastavením a je k tomu potřeba doplnit omezení počtu pokusů o přihlášení a dvoufaktorové ověření. Ve vzorku 11 českých WordPress webů to bylo otevřené u 6 z nich.

### PROV-16 — Běží web na podporované verzi PHP?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** Nepřímo z hlavičky X-Powered-By (viz HLAV-10). Pokud ji server neposílá, zeptej se klienta nebo si nech ukázat administraci hostingu. Nalezenou verzi porovnej s https://www.php.net/supported-versions.php — tabulka barevně odlišuje aktivní podporu (zelená), jen bezpečnostní opravy (oranžová) a konec životnosti (červená).

**Prošel, když.** Verze je 8.3 nebo vyšší (8.2 je do konce roku 2026 už jen v režimu bezpečnostních oprav).

**Pro klienta.** Programovací prostředí, na kterém web běží, je po konci podpory — nedostává už žádné bezpečnostní opravy. Časem navíc přestane být kompatibilní s aktuálním redakčním systémem a doplňky, takže se nebudete moci aktualizovat, ani kdybyste chtěli. Přepnutí na novější verzi je obvykle jedno kliknutí v administraci hostingu, ale musí následovat test webu — starší doplňky ho nemusí zvládnout.

### PROV-17 — Odpovídá server dostatečně rychle (TTFB do 0,8 s)?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** Laboratorně: for i in 1 2 3 4 5; do curl -o /dev/null -sS -w "%{time_starttransfer}\n" https://domena.cz/; done — ber medián, ne první měření (to zahrnuje navázání spojení). Terénně (důležitější): https://pagespeed.web.dev/, zadej adresu, Analyze. V horní části výsledku sekce „Zjistěte, jak vaše stránka funguje v reálném provozu" (data CrUX) → řádek TTFB neboli „Doba do prvního bajtu". Přepínej mezi kartami Mobil a Počítač. Pokud tam terénní data nejsou, web nemá dost návštěvnosti a musíš vystačit s měřením curlem — v reportu to napiš.

**Prošel, když.** TTFB do 0,8 s na 75. percentilu; 0,8–1,8 s = k zlepšení; nad 1,8 s = neprošlo.

**Pro klienta.** Server vašeho webu potřebuje X sekund, než vůbec začne odpovídat — teprve pak se začne cokoli načítat. Je to strop pro všechno ostatní: sebelepší optimalizace obrázků nespraví server, který přemýšlí vteřinu. Zároveň je to jediné číslo, které jde jednoznačně přiřknout hostingu, takže je to konkrétní argument pro jeho výměnu — a ta bývá levnější než optimalizace webu.

### PROV-18 — Splňuje web základní ukazatele rychlosti pro návštěvníky (Core Web Vitals)?

**🟠 vysoká** · náprava: dny · zvenčí

**Jak ověřit.** https://pagespeed.web.dev/ → zadej adresu → Analyze. Nahoře v sekci terénních dat čti tři metriky: LCP (kdy se zobrazí hlavní obsah, limit 2,5 s), INP (jak rychle web reaguje na kliknutí, limit 200 ms), CLS (jak moc obsah poskakuje při načítání, limit 0,1). Nahoře přepni kartu Mobil / Počítač — mobil je u firemního webu důležitější a bývá horší. Zelený štítek „Prošla hodnocením" nahoře znamená, že prošly všechny tři.

**Prošel, když.** Všechny tři metriky v zeleném pásmu na mobilu i na počítači.

**Pro klienta.** Tohle jsou tři čísla, kterými Google měří, jestli je web pro návštěvníka příjemný: jak rychle se objeví hlavní obsah, jak rychle web reaguje na klik a jestli obsah při načítání neposkakuje. Vstupují do hodnocení ve vyhledávání a hlavně: pomalý web na mobilu lidé zavřou dřív, než se načte. Měřím to na skutečných návštěvnících vašeho webu, ne na testovacím serveru.

### PROV-19 — Má doména platný SPF záznam, jen jeden, a končí přísně?

**🟠 vysoká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=TXT" | grep -o 'v=spf1[^"]*'. Kontroluj tři věci: (1) existuje vůbec, (2) je právě jeden (dva SPF záznamy = celá konfigurace je neplatná), (3) jak končí — -all je přísné, ~all mírné, ?all nebo chybějící all bez efektu. Ověření limitu 10 DNS dotazů a rozklad include: https://mxtoolbox.com/spf.aspx (zdarma, omezený počet dotazů denně).

**Prošel, když.** Právě jeden SPF záznam, končí -all nebo ~all, a nepřekračuje limit 10 dotazů.

**Pro klienta.** SPF je seznam serverů, které smějí odesílat poštu vaším jménem. Bez něj (nebo se špatným nastavením) končí vaše faktury a nabídky ve spamu — a vy o tom nevíte, protože odesílateli se nic nevrátí. Zvláštní pozor na kontaktní formulář: často odesílá odjinud než firemní pošta a v seznamu chybí, takže poptávky z webu tiše padají do spamu. Je to škoda, kterou poznáte na tržbách dřív než jakoukoli bezpečnostní věc.

### PROV-20 — Má doména DMARC záznam, který skutečně něco vynucuje, a chodí reporty?

**🟠 vysoká** · náprava: týdny · zvenčí

**Jak ověřit.** curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=_dmarc.domena.cz&type=TXT". Čti tag p= (none / quarantine / reject) a jestli je vyplněné rua= (adresa pro sběr reportů). p=none = záznam existuje, ale nic nevynucuje. Pozor: podle platné normy RFC 9989 (květen 2026) byl zrušen tag pct — konfigurace, které na něm stojí, jsou zastaralé.

**Prošel, když.** p=quarantine nebo p=reject a vyplněné rua=. Ve vzorku mělo DMARC 79 % domén, ale 45 ze 77 mělo p=none.

**Pro klienta.** Máte nastavení proti tomu, aby se někdo cizí vydával za vaši firmu v e-mailu — ale je nastavené na „jen sleduj, nic nedělej". Prakticky to tedy nikoho nechrání: podvodník může poslat vašim zákazníkům fakturu s vaší adresou a projde to. Zpřísnění se nedělá naráz: nejdřív se 4–6 týdnů sbírají hlášení, aby se zjistilo, kdo všechno vaším jménem legitimně odesílá (fakturační systém, newsletter, formuláře z webu), a teprve pak se to utáhne. Google navíc od února 2024 tohle nastavení vyžaduje po každém, kdo posílá přes 5 000 zpráv denně — což se týká i běžného newsletteru.

### PROV-21 — Ví klient přesně, co si odnese, kdyby chtěl odejít z platformy, na které web běží?

**🟠 vysoká** · náprava: týdny · zvenčí

**Jak ověřit.** Nejdřív urči platformu: curl -sSI https://domena.cz/ (hlavičky server, x-served-by) a curl -sS https://domena.cz/ | grep -iE 'wix|squarespace|webflow|shopify|wp-content'. Pak podle platformy zapiš do reportu konkrétní rozsah exportu z oficiální dokumentace: WEBFLOW — export kódu jen na placených Workspace plánech, neobsahuje obsah CMS, e-shop, uživatelské účty ani jazykové verze; na exportovaném webu přestanou fungovat formuláře, vyhledávání a zmizí ochrana heslem. WIX — export celého webu neexistuje vůbec, jen dílčí CSV (kolekce, kontakty, produkty). SQUARESPACE — jeden .xml soubor: jedna blogová stránka, textové a obrázkové bloky, galerie; NEexportuje se e-shop, portfolio, kalendář, vlastní CSS, styly ani obsah v patičkách; obrázky se často přenesou jen jako odkazy, které po zrušení účtu přestanou fungovat. WORDPRESS — přenositelné je všechno, ale záleží na tom, kdo drží přístupy. Doplň otázkou na klienta: „Co si představujete, že si odnesete, když se rozhodneme odejít?"

**Prošel, když.** Klient má reálnou představu odpovídající dokumentaci platformy a v reportu je vyčíslený rozsah toho, co se musí dělat znovu.

**Pro klienta.** Web běží na platformě, ze které se nedá odejít stažením zálohy. Konkrétně: co si odnesete, je [seznam podle platformy], a co se musí udělat znovu od nuly, je [seznam]. Neříkám to jako strašení — říkám to proto, abyste si mohli spočítat, co vás stojí zůstat a co odejít. Pokud jste spokojení, je to v pořádku; jen ať to není překvapení ve chvíli, kdy odejít budete chtít.

### PROV-22 — Zkoušel někdo zálohu skutečně obnovit a ví firma, jak dlouho by obnova trvala?

**🟠 vysoká** · náprava: hodiny · potřebuje přístupy

**Jak ověřit.** POTŘEBA PŘÍSTUP nebo dotazník. Otázka: „Kdy naposledy někdo zálohu skutečně obnovil na zkušební prostředí?" Odpověď „nikdy" znamená, že zálohy jsou nadějí, ne jistotou. Doplň dvěma čísly: kolik hodin výpadku firma unese a kolik dat smí ztratit. Převeď na peníze z čísel klienta (jeho obrat), ne z obecných benchmarků.

**Prošel, když.** Obnova byla vyzkoušená v posledním roce a klient umí říct, za jak dlouho by byl web zpátky.

**Pro klienta.** Máte zálohy, ale nikdo nikdy nezkusil je použít. Dokud se obnova nevyzkouší, není to jistota, je to naděje — nefunkční záloha se pozná až ve chvíli, kdy ji potřebujete. Zkušební obnova jednou za půl roku trvá pár hodin. Zároveň si spočítejte, kolik vás stojí hodina, kdy web nefunguje; to je číslo, kterým se tahle položka obhájí u vedení.

### PROV-23 — Ví se, kdo všechno má administrátorský přístup, a je zapnuté dvoufaktorové ověření?

**🟠 vysoká** · náprava: minuty · potřebuje přístupy

**Jak ověřit.** POTŘEBA PŘÍSTUP. V administraci WordPressu: Uživatelé → Všichni uživatelé → filtr Administrátor. U každého sleduj sloupec s datem posledního přihlášení (pokud plugin eviduje) a e-mailovou doménu — účty s adresou bývalého dodavatele nebo bývalého zaměstnance jsou nález. Ptej se: má někdo z bývalých spolupracovníků pořád účet? Sdílí se hesla? Je zapnuté dvoufaktorové ověření aspoň u správců?

**Prošel, když.** Každý administrátorský účet má konkrétního žijícího vlastníka ve firmě, hesla se nesdílejí, u správců je zapnuté dvoufaktorové ověření.

**Pro klienta.** Nejčastější příčina napadení webu u malé firmy není díra v softwaru, ale živý účet bývalého spolupracovníka nebo heslo, které zná pět lidí. Projít seznam správců a zrušit účty, které tam nemají co dělat, trvá deset minut a je to zdarma. Dvoufaktorové ověření (kód z mobilu k heslu) je jediná věc, která spolehlivě zastaví útok hádáním hesel.

### PROV-24 — Je písemně dohodnuté, kdo odpovídá za aktualizace, zálohy a jak rychle se reaguje na výpadek?

**🟠 vysoká** · náprava: dny · potřebuje přístupy

**Jak ověřit.** POTŘEBA PŘÍSTUP / dotazník. Zeptej se na čtyři věci zvlášť: (1) Kdo dělá aktualizace systému a doplňků a jak často? (2) Kdo odpovídá za zálohy? (3) Jaká je dohodnutá reakční doba při výpadku? (4) Kdo drží přístupy k doméně, hostingu a administraci? Odpověď „to nějak řeší agentura" bez smlouvy = neprošlo. Poznamenej si i to, jestli klient spadá pod zákon o kybernetické bezpečnosti (od 1. 11. 2025 zákon č. 264/2025 Sb.) — ověř přes kalkulačku NÚKIB na https://nukib.gov.cz/cs/kyberneticka-bezpecnost/regulace-a-kontrola/podpurne-materialy/. Pokud ano, celý audit rámuj jako podklad k plnění povinností. Pokud ne, napiš mu to a zákonem ho nestraš.

**Prošel, když.** Existuje písemná dohoda, která pojmenovává odpovědnou osobu za aktualizace, zálohy a reakční dobu.

**Pro klienta.** Nikde není zapsané, kdo se o web technicky stará. V praxi to znamená, že si každý myslí, že aktualizace dělá někdo jiný — a nedělá je nikdo. Není to technická věc, ale je to nejčastější kořen všech ostatních problémů v tomhle reportu. Stačí jednostránková dohoda, která pojmenuje, kdo dělá aktualizace, kdo hlídá zálohy, za jak dlouho se reaguje na výpadek a kdo drží přístupy.

### PROV-25 — Obnovuje se certifikát automaticky?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ze stejného výpisu openssl spočítej rozdíl mezi notBefore a notAfter. 89–90 dní = automatická obnova přes ACME (typicky vydavatel Let's Encrypt, Google Trust Services, ZeroSSL — vidíš v řádku issuer). 365–398 dní a komerční vydavatel = pravděpodobně ruční obnova. Potvrď dotazem: „Kdo a jak certifikát obnovuje?" Odpověď „máme to v kalendáři" = neprošlo.

**Prošel, když.** Platnost certifikátu je 90 dní nebo méně, nebo klient doloží automat.

**Pro klienta.** Certifikát se vám obnovuje ručně jednou za rok. To dnes ještě jde, ale od března 2027 zkrátí prohlížeče maximální platnost na 100 dní a od března 2029 na 47 dní — to je osm ručních obnov ročně. Kdo nemá automat, jednou zapomene a web na den vypadne. Přechod na automatickou obnovu je jednorázová práce na pár hodin a pak se o to nikdo nestará.

### PROV-26 — Jaká je celková známka bezpečnostních hlaviček podle MDN HTTP Observatory?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři https://developer.mozilla.org/en-US/observatory/, zadej doménu, Scan. Zapiš známku (A+ až F) a číselné skóre. Rozklikni „Scan results" — každý test má řádek se ziskem nebo ztrátou bodů a odůvodněním; ten seznam je hotový podklad do reportu. Alternativa skriptem: curl -sS -X POST "https://observatory-api.mdn.mozilla.net/api/v2/scan?host=domena.cz". Pozor: jeden sken na hosta za minutu, jinak vrátí uloženou odpověď. Známku ber jako orientační měřítko, ne jako verdikt — web bez uživatelských účtů dostane F a přitom mu nic vážného nehrozí.

**Prošel, když.** Známka B nebo lepší. Pro srovnání: 31 % českých webů ve vzorku nemá ani jednu ze šesti základních hlaviček.

**Pro klienta.** Existuje sada nastavení serveru, která prohlížeči říká, jak má s vaším webem bezpečně zacházet. Nezpůsobují samy o sobě díru, ale jejich úplná absence je spolehlivá známka toho, že se o web technicky roky nikdo nestaral. Klientovi to říkám takhle: máte známku X, přičemž tři z těch nastavení jdou zapnout do hodiny a bez rizika, že se něco rozbije.

### PROV-27 — Je web chráněný proti vložení do cizího rámu (clickjacking)?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -iE 'x-frame-options|content-security-policy'. Prošlo, pokud je přítomné X-Frame-Options s hodnotou DENY nebo SAMEORIGIN, NEBO pokud hlavička Content-Security-Policy obsahuje direktivu frame-ancestors. Stačí jedno z toho, ideálně obojí (frame-ancestors jako hlavní, X-Frame-Options jako záloha pro starší prohlížeče).

**Prošel, když.** Přítomné X-Frame-Options: DENY/SAMEORIGIN nebo CSP s frame-ancestors.

**Pro klienta.** Bez tohoto nastavení může kdokoli vložit váš web do své podvodné stránky jako neviditelnou vrstvu a nechat návštěvníka klikat na tlačítka, o kterých neví. Používá se to k podvodům jménem důvěryhodné značky. Oprava je jeden řádek v konfiguraci serveru.

### PROV-28 — Má web nastavenou Referrer-Policy na bezpečnou hodnotu?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i referrer-policy. Bezpečné hodnoty: no-referrer, same-origin, strict-origin, strict-origin-when-cross-origin. Nebezpečné (horší než nic): unsafe-url, origin-when-cross-origin, no-referrer-when-downgrade.

**Prošel, když.** Hlavička je přítomná a má jednu ze čtyř bezpečných hodnot.

**Pro klienta.** Když návštěvník z vašeho webu klikne na cizí odkaz, odesílá se cizímu serveru celá adresa stránky, ze které odešel — včetně toho, co je v ní za otazníkem. Pokud máte adresy typu /dekujeme?objednavka=12345&email=jan@firma.cz, tyhle údaje se ukládají do logů cizích služeb. U webů s klientskou sekcí je to reálný únik dat. Oprava je jeden řádek.

### PROV-29 — Má web Content-Security-Policy a je to skutečná ochrana, ne jen dekorace?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i content-security-policy. Pokud existuje, zkopíruj celou hodnotu a vlož ji do https://csp-evaluator.withgoogle.com/ → tlačítko CHECK CSP. Sleduj červené řádky: 'unsafe-inline' nebo 'unsafe-eval' ve script-src, povolené http:// zdroje, příliš široké domény. Pokud je hlavička jen Content-Security-Policy-Report-Only, nic to nechrání — je to jen měřicí režim.

**Prošel, když.** Hlavička existuje, není Report-Only, CSP Evaluator neukazuje 'unsafe-inline' ani 'unsafe-eval' ve script-src.

**Pro klienta.** Tohle je pravidlo, které prohlížeči říká, odkud smí váš web načítat skripty a kam smí odejít odeslaný formulář. Je to hlavní obrana proti tomu, aby vám někdo do stránky podstrčil cizí kód. Nastavit se to ale nedá na jedno odpoledne: u webu, kde běží Google Analytics, Facebook Pixel, chat a mapa, je to projekt na několik dní včetně testování. Nebudu vám to prodávat jako rychlou opravu — je to plánovaná investice, ne položka do dnešního seznamu.

### PROV-30 — Je nasazené HSTS a je nastavené správně (ne krátce, ne nebezpečně široce)?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i strict-transport. Čti hodnotu max-age v sekundách: 15768000 = 6 měsíců (minimum pro „dobře"), 31536000 = rok. Pokud je přítomné includeSubDomains, ověř, že všechny subdomény umí HTTPS — vypiš je z https://crt.sh/?q=%25.domena.cz a každou zkus otevřít. Stav v preload seznamu: https://hstspreload.org/api/v2/status?domain=domena.cz (vrací JSON), důvody nezpůsobilosti: /api/v2/preloadable?domain=domena.cz.

**Prošel, když.** max-age je aspoň 15768000 a pokud je includeSubDomains, všechny subdomény skutečně běží na HTTPS.

**Pro klienta.** Toto nastavení řekne prohlížeči, aby na vaši adresu chodil už napořád jen zabezpečeně a neposílal vůbec první nešifrovaný požadavek. Je to nejlevnější bezpečnostní opatření, jaké existuje — jeden řádek. Pozor ale na to, že je to zároveň jediné nastavení, které se dá pokazit nevratně: když ho zapnete i pro všechny podadresy a některá z nich zabezpečení neumí, přestane fungovat a nejde to rychle vrátit. Proto se nasazuje postupně.

### PROV-31 — Vrací web na neexistující adrese správný kód 404?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -o /dev/null -sS -w "%{http_code}\n" -L https://domena.cz/neexistujici-stranka-9x7q2/. Prošlo při 404 nebo 410. Kód 200 = soft 404 (chyba). Kód 403 je také nález. POZOR: tenhle bod ověřuj jako první ze všech testů obsahu — pokud web vrací 200 na neexistující adresu, znehodnotí to i testy OBSA-04, WP-03 a SEC-01, protože i tam se vrátí 200 a vyjde falešně dobrý výsledek.

**Prošel, když.** Odpověď je 404 nebo 410. Ve vzorku 102 českých webů to zvládlo jen 69.

**Pro klienta.** Když někdo zadá adresu, která na vašem webu neexistuje, musí server odpovědět „tady nic není". Váš web místo toho odpovídá „vše v pořádku" a ukáže chybovou stránku. Google to hlásí jako chybu, špatně indexuje web a žádný kontrolní nástroj u vás nedokáže najít rozbité odkazy — všechno vypadá funkčně, i když není.

### PROV-32 — Vedou externí odkazy na weby, které pořád existují a jsou důvěryhodné?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** Ve Screaming Frog: Configuration → Spider → záložka Crawl → zaškrtni „Check External Links". Po crawlu jdi na External → filtr „Client Error (4xx)" a „Server Error (5xx)". U .cz domén, které vrací 200, ale jsou to odkazy na dávno neaktivní partnery, otevři cílovou adresu v prohlížeči a podívej se, co tam dnes je — zaniklá doména mohla být znovu zaregistrovaná někým jiným.

**Prošel, když.** Žádný externí odkaz nevrací 4xx/5xx a žádný nevede na obsah, který nemá s partnerem nic společného.

**Pro klienta.** Na webu máte odkazy na partnery a dodavatele, kteří mezitím skončili. Část z těch adres mezitím koupil někdo jiný — a z vaší stránky Reference se dnes kliká na sázkovou kancelář. Pro zákazníka, který to zkusí, to vypadá jako by váš web někdo napadl. Projít a odstranit je práce na hodinu.

### PROV-33 — Má doména aspoň dva nameservery a rozumné TTL?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=NS" — spočítej záznamy v poli Answer (musí být aspoň 2, ideálně u víc než jednoho poskytovatele, poznáš podle různých domén nameserverů). TTL u webu: totéž s &type=A a čti pole TTL (v sekundách). 86400 = jeden den.

**Prošel, když.** Aspoň dva nameservery a TTL u záznamu A do 3600 s (hodina).

**Pro klienta.** Nameservery jsou rozcestník, který internetu říká, kde váš web a pošta bydlí. Máte jen jeden — je to jediný bod, jehož výpadek shodí web i firemní poštu naráz. Druhá věc je nastavená prodleva: teď je na jeden den, což znamená, že když bude potřeba web narychlo přestěhovat (havárie, výměna hostingu), potrvá to celý den, než se to k lidem propíše. Snížit ji je záležitost minut a dělá se to vždycky před stěhováním.

### PROV-34 — Podepisuje doména odchozí poštu pomocí DKIM?

**🟡 střední** · náprava: hodiny · zvenčí

**Jak ověřit.** DKIM se ověřuje na selektoru, který zvenčí neznáš. Zkus běžné: for s in default google selector1 selector2 s1 k1 mail dkim; do echo -n "$s: "; curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=$s._domainkey.domena.cz&type=TXT" | grep -c 'v=DKIM1'; done. NENALEZENÍ NEZNAMENÁ ABSENCI — jen že selektor je nestandardní. Spolehlivě to zjistíš až z hlaviček skutečného e-mailu: požádej klienta, ať ti pošle e-mail z firemní adresy, a v Gmailu klikni u zprávy na tři tečky → „Zobrazit originál" → řádek DKIM: 'PASS'.

**Prošel, když.** DKIM nalezený na běžném selektoru, nebo doložený PASS z hlavičky skutečného e-mailu.

**Pro klienta.** DKIM je elektronický podpis, kterým vaše pošta dokazuje, že skutečně pochází od vás. Bez něj se vám hůř doručuje do schránek a nedá se nasadit ochrana proti podvržení odesílatele. Zvenčí se to nedá spolehlivě ověřit — pošlete mi prosím jeden běžný e-mail z firemní adresy a já to potvrdím z jeho hlavičky.

### PROV-35 — Zůstanou při případném stěhování zachované adresy stránek a přístup k e-mailu?

**🟡 střední** · náprava: dny · zvenčí

**Jak ověřit.** Adresy: podívej se, jestli má web čitelné adresy typu /sluzby/instalace-tepelnych-cerpadel/ nebo systémové typu /page?id=42. Doplň mapu adres z https://domena.cz/sitemap.xml. E-mail: curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=MX" a porovnej cíl MX záznamu s hostingem webu — pokud je pošta na stejném účtu jako web, migrace webu automaticky znamená i migraci pošty. Doplň dotazem: kdo drží přístup do administrace hostingu a domény?

**Prošel, když.** Adresy jsou čitelné a přenositelné a pošta běží nezávisle na hostingu webu (nebo klient ví, že to bude potřeba řešit).

**Pro klienta.** Dvě věci, které se u stěhování webu vždycky podcení. První: adresy jednotlivých stránek. Když se změní, přijdete o pozice ve vyhledávání, které jste roky budovali. Druhá a dražší: máte web i firemní poštu u jednoho dodavatele na jednom účtu, takže stěhování webu automaticky znamená i stěhování pošty — a to je největší skrytý náklad každé migrace. Patří to do rozpočtu předem, ne jako překvapení uprostřed.

### PROV-36 — Hlídá někdo dostupnost webu a dozví se firma o výpadku dřív než zákazník?

**🟡 střední** · náprava: minuty · zvenčí

**Jak ověřit.** Zvenčí nezjistitelné jednorázově — zeptej se: „Kdo se dozví, když web spadne, a jak rychle?" Odpověď „zavolá nám zákazník" nebo „všimneme si" = neprošlo. Doplň vlastním měřením: na dobu auditu nasaď bezplatné sledování (např. UptimeRobot, 5minutový interval) a v reportu uveď skutečně naměřená data místo dojmu.

**Prošel, když.** Existuje sledování, které při výpadku pošle upozornění konkrétnímu člověku do minut.

**Pro klienta.** Když váš web spadne, dozvíte se to od zákazníka nebo od obchodníka — obvykle po hodinách, někdy až druhý den. Automatické hlídání pošle SMS nebo e-mail do pěti minut od výpadku a v základní verzi je zdarma. Je to nejlevnější položka z celého návrhu opatření a nastavení zabere čtvrt hodiny.

### PROV-37 — Posílá web hlavičku X-Content-Type-Options: nosniff?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i x-content-type-options. Musí vrátit řádek s hodnotou nosniff. Prázdný výstup = chybí.

**Prošel, když.** Odpověď obsahuje x-content-type-options: nosniff.

**Pro klienta.** Jednořádkové nastavení serveru, které brání tomu, aby se nahraný soubor tvářící se jako obrázek spustil jako program. Nulové riziko, že se tím něco rozbije, práce na deset minut. Tohle je položka „opravit dnes" — rychlá výhra, kterou má smysl udělat hned.

### PROV-38 — Neprozrazuje server čísla verzí svého softwaru?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -iE '^server:|^x-powered-by:'. Nález: hlavička Server obsahující číslo verze (např. Apache/2.4.29) nebo přítomná hlavička X-Powered-By (např. PHP/8.0.30). Zaznamenej si konkrétní verzi PHP — je to vstup pro bod PROV-01.

**Prošel, když.** Server neuvádí číslo verze a X-Powered-By chybí.

**Pro klienta.** Váš server v každé odpovědi hlásí, jaký software a jakou verzi používá. Samo o sobě to není díra, ale útočníkovi to zkrátí práci: nemusí zkoušet, rovnou ví, na co zaútočit. Vypnutí je pár minut. Důležitější je ale to, co se tím prozradilo — pokud tam vidíme starou verzi, je skutečný problém ta verze, ne ta hláška.

### PROV-39 — Má web Permissions-Policy?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -i permissions-policy. Bod zapisuj do reportu jako doporučení, ne jako nález — hlavička je podle MDN vedená jako Limited availability a nefunguje ve všech prohlížečích. MDN HTTP Observatory ji netestuje vůbec.

**Prošel, když.** Hlavička je přítomná. Absence není nález — 81 % českých webů ve vzorku ji nemá.

**Pro klienta.** Nastavení, které webu zakáže sahat na kameru, mikrofon nebo polohu, i kdyby to zkusil vložený obsah třetí strany. Podpora v prohlížečích ale zatím není úplná, takže je to doporučení nad rámec základu, ne položka, kterou byste měli řešit přednostně. Kdo vám tohle prodává jako kritický nález, prodává vzduch.

### PROV-40 — Má chybová stránka 404 design webu, navigaci a odkaz zpět?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** Otevři v prohlížeči https://domena.cz/neexistujici-stranka-9x7q2/ a podívej se: je tam logo, menu, vyhledávání a odkaz na hlavní sekce? Nebo je to holý text „Not Found — The requested URL was not found on this server"?

**Prošel, když.** Stránka drží vizuál webu a nabízí aspoň menu nebo odkaz na hlavní stránku.

**Pro klienta.** Když návštěvník klikne na starý odkaz nebo se překlepne, uvidí bílou stránku s technickou hláškou a odejde. Upravená chybová stránka s vaším logem, menu a vyhledáváním ho udrží na webu a dovede tam, kam mířil. Je to levná úprava s okamžitě měřitelným efektem na to, kolik lidí z webu odchází.

### PROV-41 — Zbyly na webu odkazy na nezabezpečený obsah (http://) po přechodu na HTTPS?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sS https://domena.cz/ | grep -oE '(src|href)="http://[^"]*"' | sort -u — a totéž na 5–10 dalších podstránkách, hlavně starých článcích a stránkách s PDF. Doplň v prohlížeči: F12 → Console a hledej hlášky „Mixed Content". Pozor: prohlížeče dnes obrázky, video a audio samy povýší na https a zbytek tiše zablokují, takže na obrazovce nemusí být nic vidět.

**Prošel, když.** Nula výskytů src="http:// a href="http:// odkazujících na vlastní obsah. Pro srovnání: 27 % českých webů ve vzorku aspoň jeden má.

**Pro klienta.** Po přechodu na zabezpečený web zůstaly na některých stránkách staré nezabezpečené odkazy na obrázky a soubory. Prohlížeč je dnes buď sám opraví, nebo je tiše zablokuje — takže se nic nerozbije viditelně, ale chybí obrázek ve starším článku nebo nejde stáhnout PDF. Vy to nevidíte, protože chodíte hlavně na úvodní stránku. Hromadná oprava v databázi je záležitost jednoho zásahu.

### PROV-42 — Používá web kompresi, moderní protokol a rozumné nastavení mezipaměti?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI --compressed https://domena.cz/ | grep -iE 'content-encoding|cache-control|alt-svc'. Sleduj: content-encoding musí být br nebo gzip; alt-svc s h3 znamená podporu HTTP/3. Cache pak zvlášť u statického souboru: curl -sSI --compressed https://domena.cz/cesta/k/obrazku.jpg | grep -i cache-control — u obrázků a CSS má být dlouhá platnost (max-age v řádu měsíců), u HTML krátká. Nález: cache-control: no-cache nebo max-age=0 na obrázcích.

**Prošel, když.** HTML se posílá komprimované (br/gzip) a statické soubory mají max-age aspoň 2592000 (30 dní).

**Pro klienta.** Váš server posílá stránky nezabalené a říká prohlížeči, aby si obrázky nikdy nepamatoval — takže se u vracejícího se návštěvníka stahuje pokaždé všechno znovu. Je to zbytečná ztráta rychlosti bez jakéhokoli přínosu. Nastavení je na straně serveru, práce na hodinu, a projeví se to okamžitě v měření rychlosti.

### PROV-43 — Pokud je nasazený CDN, přináší něco měřitelného?

**⚪ nízká** · náprava: hodiny · zvenčí

**Jak ověřit.** curl -sSI https://domena.cz/ | grep -iE 'cf-ray|x-cache|x-served-by|^server:' — cf-ray nebo server: cloudflare značí Cloudflare, x-served-by Fastly, akamaighost Akamai. Klíčová otázka není přítomnost, ale co přes CDN chodí: podívej se na hlavičku cache-control a x-cache u HTML (má být HIT, ne MISS nebo BYPASS) a porovnej TTFB s hodnotou z PROV-02. U českého webu s českými zákazníky je přínos výrazně menší než u mezinárodního projektu.

**Prošel, když.** CDN buď není (a TTFB je dobrý), nebo je a HTML se přes něj skutečně cachuje.

**Pro klienta.** Máte zapnutou zrychlovací službu, ale ta jen předává požadavky na pomalý původní server — tedy platíte za něco, co vám nic nezrychluje. U webu s českými zákazníky je přínos takové služby stejně mnohem menší než u mezinárodního projektu; hlavní hodnota je v ochraně proti útokům, ne v rychlosti. Poctivé doporučení je změřit rozdíl a případně službu vypnout a vyměnit hosting.

### PROV-44 — Je doména zabezpečená pomocí DNSSEC?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=A" a v odpovědi hledej "AD":true. Podrobně: https://dnsviz.net/, zadej doménu, Analyze — zelené šipky znamenají platný podpis, červené problém. Zvláštní pozor: pokud klient nedávno přešel na zahraniční DNS nebo CDN a DNSSEC zmizel, je to stopa po nedokončené migraci.

**Prošel, když.** AD flag je true. Pro srovnání: 46 % českých domén ve vzorku DNSSEC má.

**Pro klienta.** DNSSEC je elektronický podpis rozcestníku vaší domény — brání tomu, aby někdo návštěvníky poslal na podvržený web místo na váš. U českých domén ho většina registrátorů zapíná jedním kliknutím zdarma. Pokud jste ho dřív měli a teď ne, znamená to, že poslední stěhování webu nikdo nedodělal.

### PROV-45 — Má doména CAA záznam?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sS -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=domena.cz&type=257" — typ 257 je CAA. Prázdné pole Answer = záznam chybí.

**Prošel, když.** Existuje aspoň jeden CAA záznam. Pro srovnání: má ho jen 5 % českých domén ve vzorku.

**Pro klienta.** Levná pojistka: v nastavení domény se dá vyjmenovat, které společnosti smějí vydat bezpečnostní certifikát pro vaši adresu. Bez toho může teoreticky někdo získat platný certifikát na vaši doménu jinde a vydávat se za vás. Nastavení je na pár minut a je zdarma. Je to doporučení nad rámec základu — hezky vypadá, ale neřešte ho dřív než body výše.

### PROV-46 — Má web soubor security.txt s kontaktem pro hlášení bezpečnostních problémů?

**⚪ nízká** · náprava: minuty · zvenčí

**Jak ověřit.** curl -sS https://domena.cz/.well-known/security.txt | head -5 — a KONTROLUJ OBSAH, ne stavový kód: na webu se soft 404 (viz OBSA-01) vrátí kód 200 a HTML stránku. Prošlo jen tehdy, pokud výstup obsahuje řádek začínající Contact:.

**Prošel, když.** Soubor existuje a obsahuje řádek Contact:. Pro srovnání: má ho jen 10 % českých domén ve vzorku.

**Pro klienta.** Textový soubor s kontaktem, kam napsat, když někdo najde na vašem webu bezpečnostní problém. Není to ochrana — je to způsob, jak se o díře dozvíte od poctivého nálezce místo od útočníka. Nastavení je na deset minut a v očích technicky zdatných návštěvníků to působí profesionálně. Nízká priorita, řešte až po ostatním.

---
