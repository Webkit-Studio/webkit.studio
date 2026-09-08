/* wkForms — registrovaný skript, patička, na úrovni webu.
   Dvě věci: doplní placeholdery (Webflow API je nastavit neumí) a při
   úspěšném odeslání pošle do dataLayer událost form_submit.

   Proč MutationObserver a ne událost submit: Webflow odesílá formuláře
   AJAXem a žádnou vlastní událost nevystaví. Nativní spouštěč
   "Form Submission" v GTM proto odeslání často mine. Jediné spolehlivé
   znamení, že to opravdu prošlo, je, že se zobrazí blok .w-form-done. */
(function(){
function placeholdery(){
  var a=document.querySelector('#co-resite');
  if(a)a.setAttribute('placeholder','Například: web nám nepřivádí poptávky a nejde v něm nic změnit.');
  ['#telefon','#kontakt input[type=email]','#kontakt input[type=text]'].forEach(function(s){
    var e=document.querySelector(s);if(e)e.setAttribute('placeholder','');});
}
function mereni(){
  if(!window.MutationObserver)return;
  [].slice.call(document.querySelectorAll('.w-form')).forEach(function(w){
    var hotovo=w.querySelector('.w-form-done');if(!hotovo)return;
    var f=w.querySelector('form');
    var nazev=f&&(f.getAttribute('data-name')||f.getAttribute('name'))||'formular';
    new MutationObserver(function(){
      if(hotovo.__wk)return;
      if(getComputedStyle(hotovo).display==='none')return;
      hotovo.__wk=1;
      window.dataLayer=window.dataLayer||[];
      window.dataLayer.push({event:'form_submit',form_name:nazev,form_page:location.pathname});
    }).observe(hotovo,{attributes:true,attributeFilter:['style','class']});
  });
}
function start(){placeholdery();mereni();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
