/* Webkit.Studio homepage. Nasazeno jako HTML Embed na konci stránky. */
(function(){
function boot(){
var q=function(s,r){return (r||document).querySelector(s)},qa=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var cl=function(v,a,b){return Math.max(a,Math.min(b,v))},lp=function(a,b,t){return a+(b-a)*t},eo=function(t){return 1-Math.pow(1-t,3)};

/* obrazky v kartach jsou dekorace, ctecky je preskoci */
qa('#brzdi .problem_visual').forEach(function(v){v.setAttribute('aria-hidden','true');});

/* ---------- interaktivni ukazka ---------- */
var sec=q('#demo'),mac=q('#mac');
if(sec&&mac){
var intro=q('#dintro'),pg=q('#macpg'),shell=q('.mac-shell',mac),pin=q('.demo-pin',sec),dwin=q('#dwin'),W=1200,H=740;

/* Ukazatel oprav ven z mocku. Uvnitr ho orezaval overflow a na sirokem
   monitoru skoncil u kraje obrazovky, kam se nikdo nedivá. */
var score=q('.mac .score',sec);
if(score&&pin) pin.appendChild(score);

/* Meritko se pocita z dostupne vysky BEZ spodni listy, jinak lista
   prekryje formular. Strop 1.15 drzi mock v navrhove velikosti, aby
   na sirokem monitoru nevypadal nafouknuty. */
var fit=function(){
  var dwinH=dwin?dwin.offsetHeight:0;
  var dostupna=Math.max(240,(shell.clientHeight||720)-dwinH);
  var s=Math.min(mac.clientWidth/W,dostupna/H,1.15);
  pg.style.transform='scale('+s+')';
  pg.style.left=Math.max(0,(mac.clientWidth-W*s)/2)+'px';
  pg.style.top=Math.max(0,(dostupna-H*s)/2)+'px';
};
if(window.ResizeObserver){new ResizeObserver(fit).observe(mac);new ResizeObserver(fit).observe(shell);}
fit();addEventListener('resize',fit);

var grow=function(){if(rm)return;
if(innerWidth<=760){document.body.classList.remove('demo-on');mac.style.width='';mac.style.height='';intro.style.opacity='';intro.style.transform='';return;}
var r=sec.getBoundingClientRect(),vh=pin.clientHeight||innerHeight,g=eo(cl(-r.top/(vh*1.1),0,1));
intro.style.opacity=String(1-Math.min(1,g*1.8));intro.style.transform='scale('+(1-g*0.06)+')';
document.body.classList.toggle('demo-on',g>0.85);
mac.style.width=lp(innerWidth*0.72,innerWidth,g)+'px';mac.style.height=lp(vh*0.62,vh,g)+'px';mac.style.setProperty('--g',g.toFixed(3));fit();};
if(!rm){addEventListener('scroll',grow,{passive:true});addEventListener('resize',grow);grow();}
if(window.IntersectionObserver){new IntersectionObserver(function(e){sec.classList.toggle('vis',e[0].isIntersecting);},{threshold:0.15}).observe(q('#phone')||sec);}

var keys=['s','h','c','t','i','f'],st={};keys.forEach(function(k){st[k]=false;});
var up=function(){var n=keys.filter(function(k){return st[k];}).length;
qa('.score',sec).forEach(function(sc){qa('.segs i',sc).forEach(function(i,j){i.classList.toggle('on',j<n);});var b=q('b',sc);if(b)b.textContent=String(n);sc.classList.toggle('done',n===keys.length);});
if(n===keys.length)qa('.dwin',sec).forEach(function(d){d.classList.add('on');});};
var fx=function(k){if(st[k])return;st[k]=true;qa('[data-fix="'+k+'"]',sec).forEach(function(el){el.classList.add('ok');});up();};
qa('[data-fix]',sec).forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();fx(el.getAttribute('data-fix'));});el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fx(el.getAttribute('data-fix'));}});});
up();}

/* ---------- sluzby: postupne se rozsveci jedna polozka ---------- */
var cap=q('#sluzby .services_grid'),lis=qa('#sluzby .services_item');
if(cap&&lis.length&&!rm){
var cols=lis.map(function(li){return li.closest('.services_grid > div');});
var bag=[],last=-1,vis=false,pause=false,rt=null;
if(window.IntersectionObserver){new IntersectionObserver(function(e){vis=e[0].isIntersecting;}).observe(cap);}else{vis=true;}
var refill=function(){for(var t=0;t<50;t++){var p=lis.map(function(_,i){return i;}).sort(function(){return Math.random()-0.5;}),ok=true;
for(var i=1;i<p.length;i++){if(cols[p[i]]===cols[p[i-1]]){ok=false;break;}}
if(ok&&(last<0||cols[p[0]]!==cols[last])){bag=p;return;}}bag=lis.map(function(_,i){return i;});};
var tick=function(){if(vis&&!pause){if(!bag.length)refill();var i=bag.shift();lis.forEach(function(l){l.classList.remove('is-hl');});lis[i].classList.add('is-hl');last=i;}setTimeout(tick,380+Math.random()*420);};tick();
if(fine){cap.addEventListener('pointerenter',function(){pause=true;clearTimeout(rt);lis.forEach(function(l){l.classList.remove('is-hl');});});cap.addEventListener('pointerleave',function(){clearTimeout(rt);rt=setTimeout(function(){pause=false;},800);});}}

/* ---------- postup: na mobilu se blok po klepnuti rozbali ---------- */
var bl=qa('#postup .process_block');
bl.forEach(function(b){b.addEventListener('click',function(){if(innerWidth>767)return;var o=b.classList.contains('is-open');bl.forEach(function(x){x.classList.remove('is-open');});if(!o)b.classList.add('is-open');});b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();b.click();}});});

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
/* pojistka: kdyby observer nesepnul, po trech vterinach je videt vsechno */
setTimeout(function(){prvky.forEach(function(el){el.classList.add('is-in');});},3000);}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
