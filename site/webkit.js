(function(){
const root=document.getElementById('frame')||document.documentElement; root.classList.add('js');
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const inViewer=!!document.getElementById('frame');
// header
const hdr=$('#top'); if(hdr) addEventListener('scroll',()=>hdr.classList.toggle('s',scrollY>8),{passive:true});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
$$('.rv, .ph').forEach(el=>io.observe(el));
// cursor + hero weight + magnetic
let mx=-9999,my=-9999; const cur=$('#cur'); const words=$$('#q .w'); const mags=$$('[data-mag]');
if(fine&&cur&&!inViewer){ addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY; cur.classList.add('on');},{passive:true}); document.addEventListener('mouseleave',()=>cur.classList.remove('on'));
 document.addEventListener('pointerover',e=>{ if(e.target.closest('a,button,.fx')) cur.classList.add('big'); }); document.addEventListener('pointerout',e=>{ if(e.target.closest('a,button,.fx')) cur.classList.remove('big'); }); }
else if(fine){ addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;},{passive:true}); }
let heroVisible=!!$('#q'); if($('#q')) new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;}).observe($('#q'));
function loop(){
  if(fine){ if(cur&&!inViewer) cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
    if(heroVisible) words.forEach(w=>{ const r=w.getBoundingClientRect(); const d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)); const k=Math.max(0,1-d/380); w.style.fontVariationSettings=`"opsz" 96,"wdth" ${(100-k*20).toFixed(1)},"wght" ${(300+k*500).toFixed(0)}`; w.style.color=k>.55?'#1D2BE8':''; });
    if(!inViewer) mags.forEach(m=>{ const r=m.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; const cx=r.left+r.width/2, cy=r.top+r.height/2; const dx=mx-cx, dy=my-cy; const d=Math.hypot(dx,dy); const pull=d<120?(1-d/120):0; m.style.transform=pull?`translate(${dx*pull*.25}px,${dy*pull*.25}px)`:''; });
  }
  requestAnimationFrame(loop);
}
if(!rm) requestAnimationFrame(loop);
// demo: the big computer
const mac=$('#mac');
if(mac){
  const pg=$('#macpg'), shell=$('.mac-shell',mac), W=1200;
  function fit(){ const s=Math.min(1,mac.clientWidth/W); pg.style.transform=`scale(${s})`; shell.style.height=(pg.offsetHeight*s)+'px'; }
  new ResizeObserver(fit).observe(mac); new ResizeObserver(fit).observe(pg); fit();
  const state={}; const keys=['h','c','t','i','f','s']; keys.forEach(k=>state[k]=false);
  const labels=['nízká','nízká','vyšší','vyšší','dobrá','vysoká','vysoká'];
  function update(){ const n=keys.filter(k=>state[k]).length; $('#dcount').textContent=`${n} z ${keys.length} opraveno`; $('#dbar').style.width=(8+n*15)+'%'; $('#dlab').textContent='šance na poptávku: '+labels[n]; $('#dhint').classList.toggle('off',n>0); if(n===keys.length) setTimeout(()=>$('#dwin').classList.add('on'),700); }
  $$('[data-fix]',mac).forEach(el=>el.addEventListener('click',e=>{ e.preventDefault(); const k=el.dataset.fix; if(state[k]) return; state[k]=true; el.classList.add('ok'); if(k==='s') el.innerHTML='<b>0,9 s</b> načítání'; fit(); update(); }));
  update();
}
// poptávka form
const form=$('#form');
if(form){
  let size=null; $$('#size button').forEach(b=>b.addEventListener('click',()=>{ size=b.dataset.v; $$('#size button').forEach(x=>x.classList.toggle('on',x===b)); }));
  const q=new URLSearchParams(location.search); if(q.get('co')==='sprint'){ const ta=form.querySelector('textarea'); if(ta) ta.value='Mám zájem o Sprint 14 dní. '; }
  form.addEventListener('submit',e=>{ e.preventDefault(); if(!form.checkValidity()){ form.reportValidity(); return; }
    $('#poptavka').classList.add('sent'); const cal=$('#cal'); cal.innerHTML='<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1pf0MciJYC4bKv_rLrEd2S7-W12kxw1gXc5lwvqzYdm3rnzOY_h6f1P_9bREELClkj8lCLbi7E?gv=true" title="Rezervace 30 minut"></iframe>'; $('#done').scrollIntoView({behavior:'smooth',block:'start'}); });
}
// cookie
const ck=$('#ck');
if(ck&&!inViewer){ try{ if(!localStorage.getItem('wk-consent')) ck.hidden=false; }catch(e){ ck.hidden=false; }
  $('#ckok').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','all');}catch(e){} ck.hidden=true; window.dataLayer=window.dataLayer||[]; dataLayer.push({event:'consent_granted'}); window.dispatchEvent(new Event('wk-consent')); });
  $('#ckno').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','necessary');}catch(e){} ck.hidden=true; }); }
})();
