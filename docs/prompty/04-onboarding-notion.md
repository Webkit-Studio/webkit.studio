# Prompt 4 — Onboarding klienta do Notionu

> Do Coworku, kde máš napojený Notion, Gmail a Drive. Běží 30–45 minut.
> Výstupem je šablona a skill, ne jeden konkrétní onboarding.

---

Chci, aby se mi nový klient dostal do systému jedním příkazem a nemusel jsem
si pamatovat, co všechno musím založit.

## Jak to dneska vypadá

Když získám projekt, ručně zakládám: složku na Drivu, stránku v Notionu, projekt
v klientské zóně, přístup pro klienta, kalendářní termíny. Pokaždé na něco
zapomenu a pokaždé to vypadá jinak.

## Co chci postavit

### 1. Šablona projektu v Notionu

Jedna stránka na projekt, uvnitř všechno, co k projektu patří:

- **Karta projektu** — klient, kontaktní osoba, rozsah, cena, termín, fáze, stav
- **Fáze** — Analýza, Zadání, Návrh, Realizace, Spuštění, u každé datum od a do
- **Úkoly** — co, kdo, do kdy, stav. Rozlišuj úkoly moje a úkoly klienta
- **Dokumenty** — odkazy na nabídku, smlouvu, faktury, brief
- **Připomínky** — sem se budou zrcadlit připomínky z klientské zóny
- **Zápisy ze schůzek**
- **Deník rozhodnutí** — co jsme rozhodli, kdy a proč. Tohle mi pak šetří
  hodiny, když se klient po dvou měsících ptá, proč jsme něco udělali takhle

Propoj to na databáze, které už mám: Lidi, Dotyky, Schůzky, Materiály.

### 2. Onboardingový postup

Když napíšu **„založ projekt [název] pro [firma]"**, chci aby se stalo tohle:

1. Zeptáš se mě očíslovaně na to, co nevíš. Maximálně šest otázek,
   odpovídám jedním řádkem.
2. Založíš stránku projektu z šablony.
3. Naplníš fáze podle harmonogramu, který ti řeknu, a spočítáš data.
4. Vytvoříš úvodní úkoly, které mám u každého projektu stejné.
5. Založíš složku na Google Drivu se stejnou strukturou jako v Notionu.
6. Připravíš mi **uvítací e-mail klientovi** jako koncept v Gmailu.
   Neodešleš ho.
7. Připravíš **brief**, který klientovi pošlu před první schůzkou.
8. Vypíšeš mi seznam toho, co musím udělat ručně — hlavně přístup do
   klientské zóny, ten přes API zatím nejde.

### 3. Co dělat na konci projektu

Druhý příkaz: **„uzavři projekt [název]"**.

Přesune projekt do archivu, vytvoří případovku z deníku rozhodnutí,
připomene mi vystavit poslední fakturu a **připraví zprávu s prosbou o referenci**.
Tuhle poslední věc mi nesmí zapomenout připomenout, protože reference sbírám špatně.

## Pravidla

- **Nic neodesíláš.** E-maily připravíš jako koncepty. Odesílám já.
- **Data si nevymýšlíš.** Cenu, termín ani rozsah si nedomýšlej. Zeptej se.
- **Neduplikuješ.** Když projekt s tím jménem existuje, řekni to a zeptej se,
  jestli ho chci přepsat.

## Na konci

1. Ukaž mi šablonu a projdi ji se mnou dřív, než z ní uděláš skill.
2. Založ zkušební projekt na smyšlenou firmu, ať vidím výsledek.
3. Ulož to jako skill `webkit-onboarding`.
4. Řekni mi, co z toho půjde automatizovat až po tom, co dodělám
   obousměrný sync s klientskou zónou.
