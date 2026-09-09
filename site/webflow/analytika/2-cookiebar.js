(function(){var K='wk-consent';try{if(localStorage.getItem(K))return}catch(e){}
var bar=document.createElement('div');bar.className='wk-ck';bar.setAttribute('role','dialog');bar.setAttribute('aria-label','Souhlas s měřením návštěvnosti');
bar.innerHTML='<div class="wk-ck-t"><b>Měříme návštěvnost.</b> Chceme vědět, které části webu lidem pomáhají. Bez souhlasu se neuloží žádná cookie a web funguje stejně. <a href="/osobni-udaje">Jak nakládáme s údaji</a></div><div class="wk-ck-a"><button type="button" data-v="necessary">Jen nezbytné</button><button type="button" data-v="all" class="ok">Souhlasím</button></div>';
document.body.appendChild(bar);requestAnimationFrame(function(){bar.classList.add('in')});
bar.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;var v=b.getAttribute('data-v');
try{localStorage.setItem(K,v)}catch(err){}
if(v==='all'&&window.wkGrant)window.wkGrant();
bar.classList.remove('in');setTimeout(function(){bar.remove()},320)})})();
