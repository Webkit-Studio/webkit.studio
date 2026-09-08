/* wkForms — registrovaný skript, patička, na úrovni webu.

   Tři věci:

   1. Názvy polí. Webflow publikuje name="field", "field-2" a poptávka pak
      chodí do e-mailu jako „Field: …", „Field 2: …". Přes API to nejde
      opravit (set_attributes na formulářová pole vrací chybu, nastavení
      Name se do publikovaného HTML nepropíše), takže se názvy přepisují
      tady. Webflow formulář serializuje z DOM až při odeslání, takže se
      to na server dostane správně.

   2. Placeholdery. Webflow API je nastavit neumí, zůstává „Example Text".

   3. Měření. Při úspěšném odeslání pošle do dataLayer událost form_submit.
      Proč MutationObserver a ne událost submit: Webflow odesílá AJAXem
      a žádnou vlastní událost nevystaví, takže vestavěný spouštěč
      „Form Submission" v GTM odeslání často mine nebo se spustí i u
      formuláře, který spadl. Jediné spolehlivé znamení, že to prošlo,
      je zobrazení bloku .w-form-done. */
(function(){
var NAZVY={'co-resite':'Co řešíte','name':'Jméno','firma':'Firma','email':'E-mail'};

function pole(){
  Object.keys(NAZVY).forEach(function(id){
    var e=document.getElementById(id);if(!e)return;
    e.setAttribute('name',NAZVY[id]);
    e.setAttribute('data-name',NAZVY[id]);
  });
  [].slice.call(document.querySelectorAll('#kontakt input,#kontakt textarea')).forEach(function(e){
    if(e.type!=='submit')e.setAttribute('placeholder','');
  });
  var a=document.getElementById('co-resite');
  if(a)a.setAttribute('placeholder','Například: web nám nepřivádí poptávky a nejde v něm nic změnit.');
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
function start(){pole();mereni();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
