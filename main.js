(()=>{
const menu=document.getElementById('mobile-menu'),trigger=document.getElementById('menu-trigger');
if(menu&&trigger){trigger.addEventListener('click',()=>{const on=menu.classList.toggle('open');trigger.setAttribute('aria-expanded',String(on));trigger.setAttribute('aria-label',on?'Menü schließen':'Menü öffnen')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');trigger.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('.filter-chip').forEach(chip=>chip.addEventListener('click',()=>{let cat=chip.dataset.filter;document.querySelectorAll('.filter-chip').forEach(c=>{c.classList.toggle('active',c===chip);c.setAttribute('aria-pressed',String(c===chip))});document.querySelectorAll('.service-card[data-category]').forEach(el=>el.classList.toggle('is-hidden',cat!=='Alle'&&el.dataset.category!==cat))}));
})();
