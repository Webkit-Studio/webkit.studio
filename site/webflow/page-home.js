
/* Webkit.Studio homepage. Nasazeno jako HTML Embed na konci stránky. */
(function(){
function boot(){
var q=function(s,r){return (r||document).querySelector(s)},qa=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var cl=function(v,a,b){return Math.max(a,Math.min(b,v))},lp=function(a,b,t){return a+(b-a)*t},eo=function(t){return 1-Math.pow(1-t,3)};

/* ---------- hero: slova reaguji na kurzor ----------
   Prototyp v8 mel v nadpisu magneticky efekt: cim bliz je mys, tim je
   slovo tucnejsi, uzsi a nakonec modre. Do Webflow to nepreslo, protoze
   nadpis je jen holy text. Slova tedy obalime tady a pak uz jen menime
   font-variation-settings. Bricolage Grotesque je promenny rez, takze
   se nic nedonacita.
   Na dotyku a pri prefers-reduced-motion se to nespusti vubec. */
var hnad=q('#hero .hero_title');
if(hnad&&fine&&!rm&&!q('.w',hnad)){
var slova=hnad.textContent.trim().split(/\s+/);
hnad.textContent='';
slova.forEach(function(w,i){
  var sp=document.createElement('span');sp.className='w';sp.textContent=w;
  hnad.appendChild(sp);
  if(i<slova.length-1)hnad.appendChild(document.createTextNode(' '));
});
var ws=qa('.w',hnad),vidi=true,mx=-9999,my=-9999,ceka=false;
if(window.IntersectionObserver){new IntersectionObserver(function(e){vidi=e[0].isIntersecting;}).observe(hnad);}
var kresli=function(){ceka=false;if(!vidi)return;
ws.forEach(function(w){var r=w.getBoundingClientRect();
var d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)),k=Math.max(0,1-d/380);
w.style.fontVariationSettings='"opsz" 96,"wdth" '+(100-k*20).toFixed(1)+',"wght" '+(300+k*500).toFixed(0);
w.style.color=k>0.55?'#1D2BE8':'';});};
addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;
if(!ceka){ceka=true;requestAnimationFrame(kresli);}},{passive:true});
addEventListener('pointerleave',function(){mx=-9999;my=-9999;kresli();});
}

qa('#brzdi .problem_visual').forEach(function(v){v.setAttribute('aria-hidden','true');});

/* Krivka ve treti karte byla poskladana z divu, takze kreslila V misto
   vzestupu a padu. Vlozime stejne SVG jako prototyp v8. */
var krivka=q('#brzdi .problem_visual.is-curve');
if(krivka&&!q('.wk-krivka',krivka)){
krivka.insertAdjacentHTML('beforeend','<svg class="wk-krivka" viewBox="0 0 300 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+
'<line x1="20" y1="150" x2="280" y2="150" stroke="#CDD2DC" stroke-width="1"/>'+
'<path class="ln" d="M20 150 Q150 150 150 40" fill="none" stroke="#1D2BE8" stroke-width="2"/>'+
'<path class="drop" d="M150 40 Q150 150 280 150" fill="none" stroke="#AEB5C4" stroke-width="2"/>'+
'</svg>');}

/* ---------- interaktivni ukazka ---------- */
var sec=q('#demo'),mac=q('#mac');
if(sec&&mac){
var intro=q('#dintro'),pg=q('#macpg'),shell=q('.mac-shell',mac),pin=q('.demo-pin',sec),dwin=q('#dwin');
var W=1200,PADX=24,PADT=18,PADB=16,SMAX=1.22,pgH=786,raf=0;
var measure=function(){
  pgH=pg.offsetHeight||786;
  if(dwin&&mac) mac.style.setProperty('--dwinh',dwin.offsetHeight+'px');
};
var fit=function(){
  var s=Math.min((mac.clientWidth-PADX*2)/W,((shell.clientHeight||720)-PADT-PADB)/pgH,SMAX);
  if(!(s>0.2))s=0.2;
  pg.style.transform='scale('+s.toFixed(4)+')';
  pg.style.left=Math.max(0,(mac.clientWidth-W*s)/2).toFixed(1)+'px';
  var volno=(shell.clientHeight||720)-pgH*s;
  pg.style.top=(volno>PADT+PADB?Math.round(volno/2):PADT)+'px';
  var iv=1/Math.max(s,0.9);
  pg.style.setProperty('--tf',(13.5*iv).toFixed(2)+'px');
  pg.style.setProperty('--tp',(8*iv).toFixed(2)+'px');
  pg.style.setProperty('--tw',Math.round(300*iv)+'px');
};
var relayout=function(){measure();fit();};
var raf2=function(){if(raf)return;raf=requestAnimationFrame(function(){raf=0;relayout();});};
if(window.ResizeObserver){new ResizeObserver(raf2).observe(mac);new ResizeObserver(raf2).observe(shell);}
relayout();addEventListener('resize',raf2);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayout);

var grow=function(){if(rm)return;
if(innerWidth<=760){document.body.classList.remove('demo-on');mac.style.width='';mac.style.height='';intro.style.opacity='';intro.style.transform='';return;}
var r=sec.getBoundingClientRect(),vh=pin.clientHeight||innerHeight,g=eo(cl(-r.top/(vh*1.1),0,1));
intro.style.opacity=String(1-Math.min(1,g*1.8));intro.style.transform='scale('+(1-g*0.06)+')';
document.body.classList.toggle('demo-on',g>0.85);
mac.style.width=lp(innerWidth*0.72,innerWidth,g)+'px';mac.style.height=lp(vh*0.62,vh,g)+'px';mac.style.setProperty('--g',g.toFixed(3));fit();};
if(!rm){addEventListener('scroll',grow,{passive:true});addEventListener('resize',grow);grow();}
if(window.IntersectionObserver){new IntersectionObserver(function(e){sec.classList.toggle('vis',e[0].isIntersecting);},{threshold:0.15}).observe(sec);}

var keys=['s','h','c','t','i','f'],st={},prev=0;keys.forEach(function(k){st[k]=false;});
var up=function(){var n=keys.filter(function(k){return st[k];}).length;
qa('.score',sec).forEach(function(sc){
  qa('.segs i',sc).forEach(function(i,j){var on=j<n;
    if(on&&!i.classList.contains('on')&&!rm){i.classList.add('pop');setTimeout(function(){i.classList.remove('pop');},540);}
    i.classList.toggle('on',on);});
  var b=q('b',sc);if(b)b.textContent=String(n);
  sc.style.setProperty('--p',(n/keys.length*100).toFixed(1)+'%');
  sc.classList.toggle('done',n===keys.length);
  if(n>prev&&!rm){sc.classList.remove('bump');void sc.offsetWidth;sc.classList.add('bump');}});
if(n===keys.length)qa('.dwin',sec).forEach(function(d){d.classList.add('on');});
prev=n;relayout();};
var fx=function(k){if(st[k])return;st[k]=true;qa('[data-fix="'+k+'"]',sec).forEach(function(el){el.classList.add('ok');});up();};
qa('[data-fix]',sec).forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();fx(el.getAttribute('data-fix'));});el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fx(el.getAttribute('data-fix'));}});});
up();}

/* ---------- sluzby: postupne se rozsveci jedna polozka ----------
   WCAG 2.2.2 chce, aby se pohyb dal zastavit, nebo aby sam skoncil.
   Na mysi ho zastavi najeti, na dotyku ale pointerenter nechodi, takze
   animace bezela donekonecna a nedala se zastavit vubec. Ted probehne
   sedm rozsviceni a zhasne; kdyz sekce vypadne z obrazovky a vrati se,
   pocitadlo se vynuluje. Dotyk ji zastavi natrvalo. */
var cap=q('#sluzby .services_grid'),lis=qa('#sluzby .services_item');
if(cap&&lis.length&&!rm){
var cols=lis.map(function(li){return li.closest('.services_grid > div');});
var bag=[],last=-1,vis=false,pause=false,rt=null,beh=0;
if(window.IntersectionObserver){new IntersectionObserver(function(e){var v=e[0].isIntersecting;if(v&&!vis)beh=0;vis=v;}).observe(cap);}else{vis=true;}
var refill=function(){for(var t=0;t<50;t++){var p=lis.map(function(_,i){return i;}).sort(function(){return Math.random()-0.5;}),ok=true;
for(var i=1;i<p.length;i++){if(cols[p[i]]===cols[p[i-1]]){ok=false;break;}}
if(ok&&(last<0||cols[p[0]]!==cols[last])){bag=p;return;}}bag=lis.map(function(_,i){return i;});};
var tick=function(){if(vis&&!pause){if(beh>=7){lis.forEach(function(l){l.classList.remove('is-hl');});setTimeout(tick,1500);return;}beh++;if(!bag.length)refill();var i=bag.shift();lis.forEach(function(l){l.classList.remove('is-hl');});lis[i].classList.add('is-hl');last=i;}setTimeout(tick,380+Math.random()*420);};tick();
var stop=function(){pause=true;clearTimeout(rt);lis.forEach(function(l){l.classList.remove('is-hl');});};
cap.addEventListener('pointerenter',stop);cap.addEventListener('pointerdown',stop);
cap.addEventListener('pointerleave',function(){if(!fine)return;clearTimeout(rt);rt=setTimeout(function(){pause=false;beh=0;},800);});}

/* @global sdilene-bloky */
/* ---------- kontakt: hlasky, ktere se samy vypisuji do pole Co resite ----------
   Stejne vety jako v prototypu v8. Placeholder zustava jako zaloha,
   kdyby tenhle kus nedobehl; CSS ho schova az kdyz obalka vznikne. */
var ta=q('#co-resite');
if(ta&&!ta.closest('.wk-tawrap')){
var HLASKY=['Potřebujeme nový web. Ten současný nám nepřivádí poptávky a nejde v něm nic změnit.',
'Chceme sjednotit, jak firma vypadá na autech, na webu a v nabídkách.',
'Nenašli jsme systém, který zvládne naše zakázky. Tabulky a formuláře už nestačí.',
'Rozjíždíme nový produkt a potřebujeme stránku, která bude do měsíce fungovat.'];
var obal=document.createElement('div');obal.className='wk-tawrap';
ta.parentNode.insertBefore(obal,ta);obal.appendChild(ta);
var duch=document.createElement('div');duch.className='wk-ghost';duch.setAttribute('aria-hidden','true');
obal.insertBefore(duch,ta);
var schovej=function(){obal.classList.toggle('typing',ta.value.length>0||document.activeElement===ta);};
['input','focus','blur'].forEach(function(u){ta.addEventListener(u,schovej);});
schovej();
if(rm){duch.textContent=HLASKY[0];}
else{var hi=0,zi=0,maze=false;
(function krok(){var v=HLASKY[hi];
if(!maze){zi++;duch.textContent=v.slice(0,zi);
if(zi===v.length){maze=true;setTimeout(krok,2600);return;}
setTimeout(krok,28);}
else{zi-=3;
if(zi<=0){zi=0;maze=false;hi=(hi+1)%HLASKY.length;duch.textContent='';setTimeout(krok,400);return;}
duch.textContent=v.slice(0,zi);setTimeout(krok,12);}})();}}

/* ---------- paticka: znovu vyvolat listu se souhlasem ---------- */
qa('[data-wk-cookies]').forEach(function(b){b.addEventListener('click',function(){
try{localStorage.removeItem('wk-consent');}catch(e){}
location.reload();});});

/* ---------- kontakt: slovo se maze a pise po znacich ---------- */
var rw=q('#wk-rotword');
if(rw){var ws=['web','značka','aplikace','projekt'],wi=0;
if(rm){rw.textContent=ws[0];}else{
var step=function(){var c=rw.textContent;if(c.length>0){rw.textContent=c.slice(0,-1);setTimeout(step,40);return;}
wi=(wi+1)%ws.length;var nx=ws[wi],n=0;var type=function(){n++;rw.textContent=nx.slice(0,n);if(n<nx.length)setTimeout(type,64);else setTimeout(step,2000);};setTimeout(type,220);};
setTimeout(step,2000);}}

/* ---------- odhalovani pri scrollu ---------- */
if(!rm&&window.IntersectionObserver){
var SKUPINY=[['#brzdi .problem_card',1],['#brzdi .ctabar',0],['#sluzby .services_grid > div',1],
             ['#postup .process_heading',0],['#postup .process_track',0],['#kontakt .contact_layout > *',1]];
var prvky=[];
SKUPINY.forEach(function(g){qa(g[0]).forEach(function(el,i){el.classList.add('wk-rv');if(g[1]&&i>0&&i<4)el.classList.add('wk-d'+i);prvky.push(el);});});
if(prvky.length){
document.documentElement.classList.add('wk-js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('is-in');io.unobserve(e.target);});},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
prvky.forEach(function(el){io.observe(el);});
setTimeout(function(){prvky.forEach(function(el){el.classList.add('is-in');});},3000);}}
/* @endglobal */


}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
