# Jak auditovat web

Metodika, kterou používám na webkit.studio i na klientských projektech.
Napsaná tak, aby ji šlo projít bez přemýšlení, co dál.

Tohle je ta krátká část — jak audit vést. Zbytek složky:

- [kontrolni-seznam.md](kontrolni-seznam.md) — 283 bodů v osmi oblastech, **co** ověřit
- [prahy-a-nastroje.md](prahy-a-nastroje.md) — **proti čemu** to porovnat a **čím** to změřit
- [vzorovy-report.md](vzorovy-report.md) — jak vypadá hotový výstup

---

## TL;DR

Audit není seznam chyb. Je to **seřazený seznam rozhodnutí**. Dobrý audit odpoví
na tři otázky: co opravit první, co to přinese, kolik to stojí. Špatný audit
vypíše šedesát nálezů a nechá je na klientovi.

Postupuj ve čtyřech vrstvách odshora dolů. Měř dvakrát — jednou v laboratoři,
jednou na skutečných návštěvnících. A do reportu dej maximálně tři věci
s cedulkou „teď".

---

## 1. Čtyři vrstvy, v tomhle pořadí

| # | Vrstva | Otázka | Čím se měří |
|---|---|---|---|
| 1 | **Obchodní** | Dělá web to, co má? | Cíl, publikum, konverzní cesta, čísla z analytiky |
| 2 | **Obsahová** | Pochopí to člověk za pět vteřin? | Sdělení, důkazy, důvěra, srozumitelnost |
| 3 | **Technická** | Je to rychlé, dostupné a nalezitelné? | Core Web Vitals, přístupnost, SEO |
| 4 | **Provozní** | Poznám, když se to zhorší? | Měření, alerty, pravidelná kontrola |

**Nejčastější chyba:** audit začne u vrstvy 3, protože je měřitelná, a k vrstvě 1
se nikdy nedostane. Pak vznikne report, kde je web rychlý, přístupný, dobře
indexovaný — a nepřivádí poptávky.

Když máš málo času, obětuj vrstvu 3, ne vrstvu 1.

---

## 2. Nástroje, které stačí (všechny zdarma)

| Nástroj | Co dá | Kdy | Na co si dát pozor |
|---|---|---|---|
| **PageSpeed Insights** | Lab i terénní data v jednom | První pohled | Bez API klíče má denní limit |
| **Lighthouse v DevTools** | Detailní lab audit | Ladění | Čísla kolísají ±10 bodů mezi běhy |
| **Search Console → Core Web Vitals** | Terénní data z reálných návštěv | Rozhodování | Potřebuje dost návštěv, jinak mlčí |
| **WebPageTest** | Waterfall, více lokalit | Když nevíš, co brzdí | Fronta bývá dlouhá |
| **axe DevTools / WAVE** | Přístupnost automaticky | Vždy | Zachytí zhruba třetinu problémů |
| **Screaming Frog** | Struktura, titulky, odkazy | Weby nad 20 stránek | Zdarma do 500 URL |
| **Microsoft Clarity** | Nahrávky, heatmapy, rage clicks | Vrstva 1 a 2 | Zdarma bez limitu, i pro klienty |
| **GA4** | Chování, cesty, konverze | Vrstva 1 | Bez nastavených událostí neřekne nic |

Placené nástroje (Ahrefs, Semrush, Hotjar) nepotřebuješ. Clarity nahradí Hotjar,
Search Console nahradí polovinu Ahrefs.

---

## 3. Laboratoř versus terén

Tohle je nejdůležitější rozlišení celé metodiky a většina lidí ho nezná.

**Laboratorní data** (Lighthouse, PageSpeed lab část) — simulace na jednom
stroji, jedna síť, jedno načtení. Dobré na ladění, protože je opakovatelné.
Špatné na rozhodování, protože to není realita.

**Terénní data** (Chrome UX Report, Search Console) — sesbíraná od skutečných
návštěvníků za posledních 28 dní. Jediné, co Google používá pro hodnocení.
Špatné na ladění, protože se hýbou pomalu.

**Pravidlo:** rozhoduj podle terénu, laď podle laboratoře.

Když web nemá dost návštěv na terénní data, řekni to v reportu nahlas.
Nepředstírej, že laboratorní číslo je pravda.

---

## 4. Metriky, které rozhodují

Google měří **75. percentil** — tedy zážitek tří čtvrtin návštěvníků.
Mobil a desktop se hodnotí zvlášť.

| Metrika | Co je | Dobré | Špatné |
|---|---|---|---|
| **LCP** | Kdy se objeví největší prvek | ≤ 2,5 s | > 4 s |
| **INP** | Jak rychle web odpoví na klik | ≤ 200 ms | > 500 ms |
| **CLS** | Jak moc obsah poskakuje | ≤ 0,1 | > 0,25 |

INP nahradilo FID v březnu 2024. Když někde ještě vidíš FID, je ten článek starý.

Pomocné metriky pro diagnostiku, ne pro hodnocení:

- **TTFB** ≤ 800 ms — když je vyšší, problém je na serveru, ne v kódu.
- **FCP** — kdy se objeví první pixel obsahu.
- **TBT** — laboratorní náhrada za INP.

---

## 5. Postup krok za krokem

### Krok 1 — Kontext (30 minut, bez počítače)

Než něco změříš, zjisti:

- Co má web udělat? Poptávka, prodej, nábor, důvěra?
- Kdo na něj chodí a odkud?
- Jaká čísla jsou dnes? Návštěvy, konverze, zdroje.
- Kdo jsou tři konkurenti a čím se liší?

**Bez tohohle kroku píšeš seznam přání, ne audit.**

### Krok 2 — Inventura

Sitemap, počet stránek, kolik je šablon. Auditovat jde šablona, ne stránka.
U webu s 200 stránkami stačí projít šest šablon.

### Krok 3 — Terénní data

Search Console → Core Web Vitals. Zapiš si počty URL v pásmech dobré / potřebuje
zlepšit / špatné, zvlášť mobil a desktop.

### Krok 4 — Laboratorní měření

Tři běhy, ber medián. Jeden běh nic neznamená.
Měř mobil i desktop. Mobil je skoro vždy horší a skoro vždy důležitější.

### Krok 5 — Přístupnost

Automat (axe, Lighthouse) zachytí zhruba třetinu. Zbytek ručně:

- Projdi web **jen klávesnicí**. Tab, Enter, Escape. Dostaneš se všude? Vidíš, kde jsi?
- Zvětši text na **200 %**. Rozpadne se to?
- Zapni **čtečku** (VoiceOver na Macu je zdarma). Dává osnova nadpisů smysl?
- Vypni obrázky. Zbyde srozumitelný text?
- Zkontroluj **kontrast** u všeho, co je světlé na světlém.

### Krok 6 — Obsah a konverze

- **Test pěti vteřin:** ukaž někomu homepage na pět vteřin, pak se zeptej,
  co ta firma dělá a pro koho. Když neví, sdělení je špatné.
- Je na první obrazovce jasné tlačítko a je jasné, co se po kliknutí stane?
- Jsou tam **důkazy**? Reference, čísla, jména, loga. Bez nich je to sliby.
- Kolik polí má formulář? Každé pole navíc stojí odeslání.
- Je vidět cena nebo aspoň rozsah? Mlčení o ceně filtruje poptávky špatným směrem.

### Krok 7 — Technické SEO

- Je stránka v indexu? (`site:domena.cz` a Search Console)
- Má každá stránka vlastní titulek a popis?
- Jeden `h1` na stránku, osnova nadpisů bez děr?
- `canonical`, `lang`, sitemap, robots.txt?
- Strukturovaná data (schema.org) tam, kde dávají smysl?
- Fungují odkazy? Přesměrování bez řetězů?

### Krok 8 — Syntéza

Tady se z nálezů stává report. Viz další kapitola.

---

## 6. Jak prioritizovat

Nedělej seznam šedesáti položek. Ohodnoť každý nález:

```
skóre = (dopad na cíl 1–5 × jistota 1–5) ÷ pracnost 1–5
```

- **Dopad na cíl** — ne „na skóre v Lighthouse", ale na to, co má web udělat.
- **Jistota** — vím to, nebo si to myslím? Nález bez důkazu má jistotu 1.
- **Pracnost** — hodiny práce, ne obtížnost.

Pak rozděl do tří košů a **drž se limitu**:

| Koš | Kolik | Co tam patří |
|---|---|---|
| **Opravit teď** | maximálně 3 | Nejvyšší skóre, blokuje cíl webu |
| **Tenhle sprint** | 5 až 8 | Zlepší, ale nehoří |
| **Hlídat** | zbytek | Zapiš, neřeš |

Když má „teď" pět položek, klient neudělá ani jednu.

---

## 7. Jak napsat report, který někdo přečte

**Struktura:**

1. **TL;DR** — pět vět. Stav, největší problém, doporučení, čeho se to týká, co dál.
2. **Skóre** — tabulka čísel před a po, mobil a desktop zvlášť.
3. **Opravit teď** — tři položky, každá v pěti řádcích.
4. **Tenhle sprint** — seznam s odhadem času.
5. **Hlídat** — jednořádkové položky.
6. **Jak jsem měřil** — poctivě, včetně toho, co změřit nešlo.

**Každý nález má pět částí:**

| Část | Příklad |
|---|---|
| Nález | Formulář poptávky má jedenáct polí |
| Důkaz | Screenshot + medián odeslání 1,2 % z Clarity |
| Dopad | Každé pole nad pět snižuje odeslání zhruba o 10 % |
| Oprava | Zkrátit na čtyři pole, zbytek se doptat e-mailem |
| Náklad | 1 hodina |

**Čeho se vyvarovat:**

- „Mohlo by být lepší." Co konkrétně a o kolik?
- Nálezy bez čísla. Když nemáš číslo, napiš, že ho nemáš.
- Skóre v Lighthouse jako cíl. Cíl je poptávka, ne stovka.
- Nálezy, které nikdo neopraví. Když je to na tři měsíce práce, patří to do „hlídat".

---

### Čtyři pravidla pro formulace

1. **Číslo klienta bije cizí procento.** „Na naši poptávku jste odpověděli za 19 hodin" je silnější než „firmy odpovídají průměrně za 42 hodin". Cizí číslo se používá jen jako srovnání a vždy se zdrojem.
2. **Vzorek se přiznává.** „Poslali jsme tři poptávky, odpověď přišla u jedné." Ne „firma neodpovídá na poptávky."
3. **Hypotéza se označí.** Kde odhad nemá oporu, napíše se to a navrhne se způsob ověření.
4. **Nález nikoho neobviňuje.** Popisuje stav, ne vinu. Kdo web postavil, není v reportu.

---

## 8. Kontrolní seznam ručních kontrol

Rychlá verze pro malý audit. Plný seznam s 283 body, prahy a větami pro
klienta je v [kontrolni-seznam.md](kontrolni-seznam.md) — tenhle výtah
odpovídá jeho kritickým bodům.

Tohle automat nezachytí. Projdi pokaždé.

**Klávesnice a čtečka**
- [ ] Tab projde celou stránku v logickém pořadí
- [ ] Focus je vždy viditelný
- [ ] Je odkaz „přeskočit na obsah"
- [ ] Modály jdou zavřít Escapem a nepustí focus ven
- [ ] Osnova nadpisů dává smysl, když ji čtu samotnou

**Zobrazení**
- [ ] 320 px na šířku bez vodorovného posuvníku
- [ ] Zoom 200 % nerozbije rozvržení
- [ ] Klikací plochy aspoň 24 × 24 px, ideálně 44 × 44
- [ ] Tmavý režim, pokud ho web hlásí
- [ ] Vypnuté animace (`prefers-reduced-motion`) něco nerozbijí

**Obsah**
- [ ] Test pěti vteřin projde
- [ ] Na první obrazovce je jasná akce
- [ ] Jsou tam důkazy, ne jen tvrzení
- [ ] Kontakt je dohledatelný do dvou kliků
- [ ] Chybové stavy formuláře říkají, co je špatně

**Provoz**
- [ ] Stránka 404 vede zpátky do webu
- [ ] Formulář opravdu doručí e-mail
- [ ] Analytika měří i konverzi, nejen návštěvy
- [ ] Souhlas s cookies neblokuje obsah

---

## 9. Časté nálezy a co s nimi

| Nález | Proč vzniká | Oprava |
|---|---|---|
| LCP nad 4 s na mobilu | Velký obrázek nebo písmo v kritické cestě | Předehrát (`preload`), zmenšit, moderní formát |
| Poskakující obsah (CLS) | Obrázky bez rozměrů, pozdě načtená písma | `width`/`height` na obrázky, `font-display: swap` |
| Blokující kód v hlavičce | Vložené knihovny a písma třetích stran | Přesunout dolů, hostovat u sebe, odložit |
| Nízký kontrast | Šedá na šedé v designu | Zvednout na 4,5 : 1 u textu, 3 : 1 u velkého |
| Chybí popisky obrázků | Nikdo je nevyplňuje | Popis toho, co obrázek sděluje, dekorace `alt=""` |
| Dvakrát načtená písma | Kombinace nastavení platformy a vlastního kódu | Vybrat jednu cestu |
| Stránky bez titulku | Šablona bez pole | Doplnit, u větších webů generovat |

---

## 10. Než audit odevzdáš

- Přečti si TL;DR samotné. Odpovídá na otázku klienta?
- Je v „opravit teď" opravdu jen to nejdůležitější?
- Má každý nález číslo nebo screenshot?
- Napsal jsi poctivě, co změřit nešlo?
- Umí klient podle reportu udělat první krok bez tebe?

Když je odpověď pětkrát ano, pošli to.

---

## 11. Co s auditem dál

**Report končí plánem, ne nabídkou.** Poslední strana je tabulka vln s hodinami a rolemi — ne ceník. Nabídka je samostatný dokument a přijde až po prezentaci.

**Postup po předání:**

1. **Prezentace, 90 minut, s majitelem.** Projde se rozhodovací list a vlna 1. Klient se rozhoduje, ne poslouchá. Zápis z prezentace obsahuje, co si vybral a co odložil.
2. **Nabídka do tří dnů.** Jen na vlnu 1, pevnou cenou, s termínem. Vlny 2 a 3 se necení dopředu — klient je může chtít jindy nebo od někoho jiného.
3. **Zadání pro cizího dodavatele je součástí auditu.** Každý nález je napsaný tak, aby podle něj pracoval kdokoli. Kdo si audit zaplatil, může opravy zadat konkurenci. To se neschovává, říká se to nahlas při zadávání auditu.
4. **Retest se prodává zvlášť**, s cenou uvedenou už v reportu. Měří se předem dohodnutá čísla z baseline (ZAD-10). Trvá 2 až 4 hodiny.

**Proč to takhle funguje jako obchod.** Audit ukázal ztrátu v korunách u konkrétních míst. Vlna 1 má poměr přínosu k nákladu nad 10 — nabídka na ni se neobhajuje, spočítá se. Klient, který uvidí, že první tři opravy stojí 15 000 Kč a týkají se čtvrt milionu ročně, si je objedná bez tlaku.

**Čeho se v nabídce držet:**
- Neceníme, co klient zvládne sám. U nálezů pod 30 minut se napíše návod a účtuje se nula.
- Nepřidáváme do vlny 1 nic, co v reportu nebylo.
- Kde si nejsme jistí odhadem, píšeme rozpětí a strop.
- Práce, kterou neděláme (fotografie, právní posudek, hosting), se pojmenuje a doporučí se, koho oslovit.

**Čemu se v této fázi vyhnout.** Report, ve kterém každý druhý nález končí větou „to za vás rádi uděláme", ztrácí důvěryhodnost i cenu. Nálezy se píšou stejně, ať je bude opravovat kdokoli.

---

## 12. Čemu se vyhnout

Chyby seřazené podle toho, jak moc znehodnotí placený výstup.

### 12.1 Chyby v evidenci

**Dva body se stejným kódem.** Nález se pak nedá dohledat, zopakovat ani reklamovat. Kódy jsou unikátní napříč všemi oblastmi. Kontroluje se před odesláním reportu.

**Jeden nález pětkrát.** Adresa webu, robots.txt, sitemap, nadpisy, kontrast, cookie lišta, stránky služeb a reference se dřív objevovaly ve třech až pěti oblastech, pokaždé s jinou závažností a jiným prahem. Klient dostal pět položek k jedné opravě a v reportu si to protiřečilo. Sloučené body v kapitole 3 mají poznámku „společné s" a v reportu jsou jednou.

**Chybějící hodnota „netýká se".** Bez ní dostane firma bez e-shopu nález o průchodu košíkem a firma s jednou jazykovou verzí nález o hreflangu. Body, které nedopadají, se vypisují na straně 2, ne mezi nálezy.

### 12.2 Chyby v kritériích

**Bod, který hodnotí auditora.** „Prošel: auditor si u každého čísla poznamenal zdroj." To je pracovní postup, ne stav webu. Patří do metodiky, ne do seznamu nálezů.

**Bod, který hodnotí názor klienta.** „Neprošel: klient si myslí, že mu FAQ přináší lepší výsledek." Dvě firmy se stejným webem dostanou opačný verdikt. Kde se ptáme na přesvědčení, cituje se odpověď a nedělá se z ní nález.

**Bod, který nemůže selhat.** Kritérium „prošel, i když to na webu je, stačí to popsat" netřídí nic. Buď má bod práh, nebo do seznamu nepatří.

**Vlnovka v prahu.** „Do ~1,1 MB", „pod ~800 prvků". V placeném auditu hranici určuje buď norma, nebo rozpočet dohodnutý s klientem — ne nálada. Kde práh není podložený, píše se to k němu.

**Relativní kritérium.** „Není hlouběji než ostatní" splní vždycky něco a nikdy všechno. Prahy jsou absolutní, nebo se bod mění na diagnostiku bez verdiktu.

**Kritérium, které si auditor sám vymyslí.** „Napiš 10 dotazů, které zadá zákazník" a pak se podle nich hodnotí. Vstupem musí být klientova data (GSC, Sklik, zápis ZAD-01), ne fantazie auditora.

**Bod, který si protiřečí.** Kritérium „známka B nebo lepší" s poznámkou „F u tohoto typu webu nic neznamená". Nejdřív se rozhodne, co se měří, pak se to změří.

### 12.3 Chyby v měření

**Verdikt ze vzorku dvou.** Dvě poptávky nebo dva telefonáty nejsou měření. Vzorek se zvedá na tři a v reportu se uvádí, kolik pokusů to bylo a jaké byly všechny výsledky.

**Měření bez referenčního prostředí.** INP naměřený na jiném notebooku dá jiné číslo. Bez zapsané sestavy, verze prohlížeče, lokality a stavu souhlasu se retest nedá porovnat.

**Laboratorní číslo proti terénnímu prahu.** INP z DevTools se neporovnává s hranicí 200 ms z terénních dat. Slouží k určení viníka.

**Jedno číslo z jednoho běhu.** Každá laboratorní metrika se měří 3–5×, uvádí se medián a rozptyl.

**Měření ve špatném stavu souhlasu.** Rychlost naměřená před přijetím cookies neodpovídá tomu, co vidí návštěvník. Právní kontrola naměřená po přijetí neodhalí nic. U každého čísla se stav zapisuje.

**Testování v pořadí, které si vyrábí falešné nálezy.** Vrací-li web 200 na neexistující adresu, projdou testy zapomenutých souborů a citlivých endpointů falešně dobře. IDX-10 se dělá jako první. Po bezpečnostních testech se ověřuje, jestli WAF nezablokoval IP — jinak se dalších dvacet nálezů vyrobí samo.

**Detekce strojově psaného textu.** Automatické detektory mají u nerodilých mluvčích vysokou chybovost a obvinění klienta je reputační i právní riziko. Hodnotí se, jestli text nese vlastní informaci — ne, kdo ho psal.

### 12.4 Chyby v argumentaci

**Cizí procento místo klientova čísla.** „Zrychlení o třetinu přineslo o 8 % vyšší prodeje" je argument do nabídky, ne nález na tomto webu. V reportu se cizí čísla používají jako srovnání, se zdrojem a datem ověření.

**Faktické tvrzení bez zdroje.** Data ukončení funkcí, výše pokut, změny norem. Jedno neplatné tvrzení zpochybní celý placený report. Ke každému se píše zdroj a datum ověření, metodika se reviduje jednou za půl roku.

**Právní kvalifikace.** Auditor popisuje skutkový stav a odkazuje na paragraf. Neříká, jestli klient pod zákon spadá. Šedou zónu označí jako otázku pro klientova právníka.

**Nález bez ceny a bez pořadí.** 200 položek se závažností a bez korun je papír do šuplíku. Report bez kapitoly 4 se nepředává.

### 12.5 Chyby v zadání a provozu

**Slib jednodenního auditu.** Nejde to. Nahrávky se sbírají tři týdny předem, na odpověď se čeká pět dnů, Google potvrzuje 28 dnů. Termín se slibuje kalendářně, ne v člověkodnech.

**Audit bez vstupního rozhovoru.** Třetina bodů stojí na tom, co klient označí za hlavní službu a hlavní zákazníky. Bez zápisu dojde jiný auditor k jinému výsledku na stejném webu.

**Aktivní testování bez pověření.** Fingované poptávky, telefonáty, dotazy na citlivé soubory a crawl se dělají jen s podpisem. Přístup do schránky poptávek a do nahrávek chování bez zpracovatelské smlouvy je stejná chyba, jakou auditujeme u klienta.

**Nástroje bez licence.** WPScan zdarma jen nekomerčně, PONK pro komerční užití se souhlasem autorů, Screaming Frog nad 500 URL placený. Placená služba na nelegálně použitém nástroji je zbytečné riziko.

**Nesplnitelné doporučení.** „Přepište nadpis, práce na 10 minut" u klienta, který na změnu textu čeká tři týdny a platí 2 500 Kč. Proto je v seznamu bod ZAD-06 — schopnost realizace se ověřuje dřív, než se píše plán.

**Report bez rozsahu.** Klient musí předem vědět, které body se dělají, které ne a co se stane, když nedodá přístupy. Nedodané přístupy se nezamlčují a nenahrazují dohadem.
