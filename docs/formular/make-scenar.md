# Jak z poptávky udělat hezký e-mail

## Proč to nejde přímo ve Webflow

Webflow u notifikace o odeslání formuláře nastavuje jen **komu** to přijde,
**předmět** a **reply-to**. Tělo e-mailu je pevná tabulka „název pole:
hodnota" a vlastní HTML tam nasadit nejde — ani přes API. Šablona proto musí
odejít odjinud. Nejmíň práce je Make.com, který už používáš.

```
Webflow formulář
      │
      ├─ Webflow notifikace (holá tabulka) → nech zapnutou jako zálohu
      │
      └─ Webhook → Make.com scénář
                        ├─ e-mail tobě        (email-poptavka.html)
                        └─ e-mail poptávajícímu (email-potvrzeni.html)
```

---

## Scénář v Make.com (5 modulů)

**1. Webflow → Watch Form Submissions**
Connection: Webkit Studio. Site: webkit.studio. Form: *Poptávka z homepage*.
Modul chodí na webhook, takže reaguje hned.

**2. Tools → Set multiple variables**

| Proměnná | Hodnota |
| --- | --- |
| `firma` | `{{ifempty(1.data.Firma; "Bez názvu firmy")}}` |
| `jmeno` | `{{1.data.Jméno}}` |
| `email` | `{{1.data.E-mail}}` |
| `zprava` | `{{1.data.Co řešíte}}` |
| `cas` | `{{formatDate(now; "D. M. YYYY, HH:mm"; "Europe/Prague")}}` |
| `stranka` | `{{ifempty(1.pageUrl; "webkit.studio")}}` |
| `utm` | `{{ifempty(1.data.utm_source; "přímý přístup")}}` |

**3. Resend → Send an Email** (tobě)
- From: `Webkit.Studio <formular@webkit.studio>`
- To: `inbox@webkit.studio`
- Reply-To: `{{2.email}}`
- Subject: `Nová poptávka — {{2.firma}}`
- HTML: obsah `email-poptavka.html`, zástupné texty nahraď proměnnými z kroku 2

**4. Resend → Send an Email** (poptávajícímu)
- From: `Lukáš Svoboda <inbox@webkit.studio>`
- To: `{{2.email}}`
- Reply-To: `inbox@webkit.studio`
- Subject: `Máme vaši poptávku`
- HTML: obsah `email-potvrzeni.html`

**5. Error handler na obou Resend modulech**
Directive **Resume** a pod něj Slack/e-mail zprávu sobě, ať se neztratí
poptávka, když Resend spadne. Webflow notifikace zůstává zapnutá jako druhá
záchranná síť.

---

## Než to pustíš

- V Resendu musí být ověřená doména `webkit.studio` (SPF, DKIM, DMARC).
  Bez toho půjde všechno do spamu.
- Adresu `formular@webkit.studio` stačí jako odesílací, nemusí mít schránku.
  Reply-to míří na tebe, takže odpovědi dorazí do inboxu.
- Otestuj přes webkit.studio na skutečný formulář, ne přes „Run once" s ručně
  vyplněnými daty — chceš vidět i názvy polí, jak je přepíše `wkFormsNames`.
- Zkontroluj v Gmailu i v Outlooku. Outlook zahazuje `border-radius`, takže
  rohy budou ostré. Nevadí, jen ať víš, že to tak má být.

---

## Až budeš chtít víc

Stejný scénář snese ještě dvě větve, obě bez dalšího nástroje:

- **Do Notionu** — nový řádek v databázi poptávek, ať máš pipeline mimo inbox.
- **Do kalendáře** — když poptávka přijde mimo pracovní dobu, naplánovat si
  úkol na ráno, ať nespoléháš na to, že si e-mail všimneš.
