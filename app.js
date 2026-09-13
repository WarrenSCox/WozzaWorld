const flags={Canada:'🇨🇦','United States of America':'🇺🇸',Mexico:'🇲🇽',Brazil:'🇧🇷',Argentina:'🇦🇷','United Kingdom':'🇬🇧',France:'🇫🇷',Spain:'🇪🇸',Italy:'🇮🇹',Norway:'🇳🇴',Egypt:'🇪🇬','South Africa':'🇿🇦',India:'🇮🇳',China:'🇨🇳',Japan:'🇯🇵',Indonesia:'🇮🇩',Australia:'🇦🇺'};
const seed={statuses:{Norway:'going',Italy:'bucket',Spain:'visited',France:'visited'},places:{Italy:['Lake Como','Roscioli'],Norway:['Flåm railway']},trips:[{country:'Norway',name:'Norway',start:'2027-05-01',end:'2027-05-08',plan:'Cruise itinerary',status:'upcoming'},{country:'Italy',name:'Amalfi Coast',start:'2027-06-04',end:'2027-06-11',plan:'Positano',status:'upcoming'}]};
const oldState=JSON.parse(localStorage.getItem('myworld-state')||'null'),savedState=JSON.parse(localStorage.getItem('wozzaworld-state')||'null');let state=savedState||oldState||structuredClone(seed);Object.keys(state.statuses||{}).forEach(c=>{if(state.statuses[c]==='wishlist')state.statuses[c]='bucket'});state.visitHistory ??= []; state.companions ??= {}; state.memories ??= {}; state.recycleBin ??= []; state.places ??= {}; state.trips ??= []; let availableCountries=[];
// Existing saved data predates visit-history tracking. Seed a stable order once, then
// every future 'visited' action moves that country to the top as the latest visit.
for(const c of Object.keys(state.statuses||{})){if(state.statuses[c]==='visited'&&!state.visitHistory.includes(c))state.visitHistory.push(c)}
let currentCountry=null,holdTimer=null,longPressed=false,deferredInstallPrompt=null;let countrySlide=0;const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('wozzaworld-state',JSON.stringify(state));render()}function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}function pretty(d){return new Date(d+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}function tripCard(t){const dates=t.start?`${pretty(t.start)}${t.end?' – '+pretty(t.end):''}`:'Dates not set';return `<div class="trip-card"><div><strong>${flags[t.country]||'🌍'} ${esc(t.name)}</strong><p>${esc(t.country)} • ${dates}${t.plan?' • '+esc(t.plan):''}</p></div><span class="badge">${t.status==='upcoming'?'Upcoming ✈':'Trip'}</span></div>`}
function countryRows(status){
  const names=Object.keys(state.statuses||{}).filter(c=>state.statuses[c]===status);
  if(status==='visited'){
    const rank=new Map((state.visitHistory||[]).map((c,i)=>[c,i]));
    names.sort((a,b)=>(rank.get(b)??-1)-(rank.get(a)??-1));
  } else names.sort((a,b)=>a.localeCompare(b));
  return names;
}
function countryYear(c){
  const years=(state.trips||[]).filter(t=>t.country===c&&t.start).map(t=>String(t.start).slice(0,4)).filter(Boolean).sort((a,b)=>b.localeCompare(a));
  return years[0]||'';
}
function peopleIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-1.2c0-3 2.4-5.2 5.5-5.2s5.5 2.2 5.5 5.2V19"/><circle cx="17" cy="9" r="2.3"/><path d="M15.6 13.7c2.8-.4 4.9 1.3 4.9 3.8V19"/></svg>`}
function renderCountryLists(){
  const defs=[['visited','visitedCountries'],['going','goingCountries'],['bucket','bucketCountries']];
  defs.forEach(([status,listId])=>{
    const names=countryRows(status),list=document.getElementById(listId);if(!list)return;
    list.innerHTML=names.length?names.map(c=>{
      const year=status==='visited'?countryYear(c):'';
      const people=(state.companions[c]||[]);
      return `<div class="country-row" data-open-country="${esc(c)}" role="button" tabindex="0"><span class="country-row-main"><span class="country-flag">${flags[c]||'🌍'}</span><span class="country-row-copy"><strong>${esc(c)}</strong>${year?`<small class="country-row-year">${esc(year)}</small>`:''}</span></span>${people.length?`<button class="country-people" data-people-country="${esc(c)}" aria-label="Show ${people.length} travel companions">${peopleIcon()}<span>${people.length}</span></button>`:''}</div>`
    }).join(''):`<div class="country-empty">${status==='visited'?'No countries visited yet.':status==='going'?'No upcoming countries yet.':'Nothing on your bucket list yet.'}</div>`;
  });
  attachListRowEvents();
}
function attachListRowEvents(){
  document.querySelectorAll('.country-row').forEach(row=>{
    let timer=null,held=false;const c=row.dataset.openCountry;
    row.addEventListener('pointerdown',e=>{if(e.target.closest('.country-people'))return;held=false;timer=setTimeout(()=>{held=true;openRemoveDialog(c)},650)});
    row.addEventListener('pointerup',e=>{clearTimeout(timer);if(!held&&!e.target.closest('.country-people'))openCountry(c)});
    row.addEventListener('pointerleave',()=>clearTimeout(timer));row.addEventListener('pointercancel',()=>clearTimeout(timer));
    row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCountry(c)}})
  });
  document.querySelectorAll('.country-people').forEach(b=>b.onclick=e=>{e.stopPropagation();showPeople(b.dataset.peopleCountry)});
}
function setCountrySlide(i,animate=true,direction='next'){countrySlide=(i+3)%3;const track=document.getElementById('carouselTrack');if(!track)return;track.style.transition='none';track.style.transform=`translateX(-${countrySlide*33.333333}%)`;if(animate){const shell=document.getElementById('countryCarousel');shell.classList.remove('list-in-next','list-in-prev');void shell.offsetWidth;shell.classList.add(direction==='next'?'list-in-next':'list-in-prev');setTimeout(()=>shell.classList.remove('list-in-next','list-in-prev'),230)}}
function render(){document.querySelectorAll('.country').forEach(p=>{p.classList.remove('visited','going','bucket');const s=state.statuses[p.dataset.country];if(s)p.classList.add(s)});const vals=Object.values(state.statuses);$('#visitedCount').textContent=vals.filter(x=>x==='visited').length;$('#goingCount').textContent=vals.filter(x=>x==='going').length;$('#wishCount').textContent=vals.filter(x=>x==='bucket').length;$('#meVisited').textContent=$('#visitedCount').textContent;$('#meGoing').textContent=$('#goingCount').textContent;$('#meWishlist').textContent=$('#wishCount').textContent;$('#meTrips').textContent=state.trips.length;$('#tripList').innerHTML=state.trips.length?state.trips.map(tripCard).join(''):'<div class="hero-card"><p class="muted">No trips yet. Add your first adventure.</p></div>';renderCountryLists();renderRecycleBin();if(currentCountry)renderSheet()}
function showPeople(c){const people=state.companions[c]||[];$('#peopleDialogTitle').textContent=`${c} — travel companions`;$('#peopleDialogList').innerHTML=people.length?people.map(n=>`<span>${esc(n)}</span>`).join(''):'<span>No companions added yet.</span>';$('#peopleDialog').showModal()}
let pendingRemoveCountry=null,lastRemoved=null;
function openRemoveDialog(c){pendingRemoveCountry=c;$('#removeDialogTitle').textContent=`Remove ${c}?`;$('#removeDialog').showModal()}
function removeCountry(c){const status=state.statuses[c];if(!status)return;const item={country:c,status,removedAt:Date.now()};state.recycleBin=state.recycleBin.filter(x=>x.country!==c);state.recycleBin.unshift(item);delete state.statuses[c];lastRemoved=item;save();toast(`${c} moved to recycle bin — tap to undo`,()=>undoLastRemove())}
function undoLastRemove(){if(!lastRemoved)return;const x=lastRemoved;state.statuses[x.country]=x.status;state.recycleBin=state.recycleBin.filter(i=>i.country!==x.country);lastRemoved=null;save();toast(`${x.country} restored`)}
function renderRecycleBin(){const el=$('#recycleList');if(!el)return;el.innerHTML=state.recycleBin.length?state.recycleBin.map((x,i)=>`<div class="recycle-row"><span>${flags[x.country]||'🌍'}</span><strong>${esc(x.country)}</strong><button class="restore-btn" data-restore="${i}">Restore</button><button class="delete-btn" data-delete="${i}">Delete</button></div>`).join(''):'<p class="muted">Recycle bin is empty.</p>';el.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{const i=+b.dataset.restore,x=state.recycleBin[i];if(!x)return;state.statuses[x.country]=x.status;state.recycleBin.splice(i,1);save();toast(`${x.country} restored`)});el.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{const i=+b.dataset.delete,x=state.recycleBin[i];if(!x)return;if(confirm(`Permanently delete ${x.country} and its saved country information?`)){delete state.companions[x.country];delete state.memories[x.country];delete state.places[x.country];state.trips=state.trips.filter(t=>t.country!==x.country);state.recycleBin.splice(i,1);save()}})}
function setupCountrySearch(){document.querySelectorAll('.list-add').forEach(btn=>btn.onclick=()=>{const status=btn.dataset.addStatus,box=document.querySelector(`.country-search[data-search-for="${status}"]`);document.querySelectorAll('.country-search').forEach(x=>{if(x!==box)x.hidden=true});box.hidden=!box.hidden;if(!box.hidden){const input=box.querySelector('input');input.value='';renderSearchResults(box,status,'');setTimeout(()=>input.focus(),0)}});document.querySelectorAll('.country-search input').forEach(input=>input.addEventListener('input',()=>{const box=input.closest('.country-search');renderSearchResults(box,box.dataset.searchFor,input.value)}))}
function renderSearchResults(box,status,q){const term=q.trim().toLowerCase();const names=(availableCountries.length?availableCountries:Object.keys(flags)).filter(c=>!state.statuses[c]&&(!term||c.toLowerCase().includes(term))).slice(0,12);box.querySelector('.country-search-results').innerHTML=names.map(c=>`<button class="country-search-result" data-add-country="${esc(c)}">${flags[c]||'🌍'} ${esc(c)}</button>`).join('')||'<div class="muted" style="padding:8px 10px">No matches</div>';box.querySelectorAll('[data-add-country]').forEach(b=>b.onclick=()=>{const c=b.dataset.addCountry;state.statuses[c]=status;if(status==='visited'){state.visitHistory=state.visitHistory.filter(x=>x!==c);state.visitHistory.push(c)};box.hidden=true;save();toast(`${c} added`)})}
function attachCountryEvents(){document.querySelectorAll('.country').forEach(p=>{const start=e=>{e.preventDefault();longPressed=false;holdTimer=setTimeout(()=>{longPressed=true;state.statuses[p.dataset.country]='visited';state.visitHistory=state.visitHistory.filter(c=>c!==p.dataset.country);state.visitHistory.push(p.dataset.country);save();toast(`${p.dataset.country} marked visited ✓`)},550)},end=e=>{e.preventDefault();clearTimeout(holdTimer);if(!longPressed)openCountry(p.dataset.country)};p.addEventListener('pointerdown',start);p.addEventListener('pointerup',end);p.addEventListener('pointerleave',()=>clearTimeout(holdTimer));p.addEventListener('pointercancel',()=>clearTimeout(holdTimer))})}
async function buildMap(){try{const world=await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json());const features=topojson.feature(world,world.objects.countries).features;availableCountries=features.map(d=>d.properties.name).filter(Boolean).sort((a,b)=>a.localeCompare(b));const svg=d3.select('#worldMap'),projection=d3.geoEqualEarth().fitExtent([[24,28],[976,492]],{type:'Sphere'}),path=d3.geoPath(projection);svg.select('#sphere').attr('d',path({type:'Sphere'}));svg.select('#countries').selectAll('path').data(features).join('path').attr('class','country').attr('d',path).attr('data-country',d=>d.properties.name).attr('tabindex','0').attr('aria-label',d=>d.properties.name);$('#mapLoading').classList.add('hidden');attachCountryEvents();render()}catch(e){$('#mapLoading').textContent='Map could not load — check your connection';console.error(e)}}
function openCountry(c){currentCountry=c;renderSheet();$('#countrySheet').classList.add('open');$('#sheetBackdrop').classList.add('open');$('#countrySheet').setAttribute('aria-hidden','false')}
function closeSheet(){$('#countrySheet').classList.remove('open');$('#sheetBackdrop').classList.remove('open');$('#countrySheet').setAttribute('aria-hidden','true')}
function renderSheet(){
  const s=state.statuses[currentCountry];$('#countryFlag').textContent=flags[currentCountry]||'🌍';$('#countryName').textContent=currentCountry;$('#countryStatus').textContent=s?({visited:'Visited ✓',going:'Visiting / upcoming ✈',bucket:'On your bucket list ♡'}[s]):'Not marked yet';$$('.choice-grid button').forEach(b=>b.classList.toggle('selected',b.dataset.status===s));
  const trips=state.trips.filter(t=>t.country===currentCountry);$('#countryTrips').innerHTML=trips.length?trips.map(tripCard).join(''):'<p class="muted">No trips for this country yet.</p>';
  $('#savedPlaces').innerHTML=(state.places[currentCountry]||[]).map(x=>`<span class="chip">${esc(x)}</span>`).join('')||'<span class="muted">Nothing saved yet.</span>';
  $('#companionChips').innerHTML=(state.companions[currentCountry]||[]).map(x=>`<span class="chip">${esc(x)}</span>`).join('')||'<span class="muted">No travel companions added yet.</span>';
  $('#memoryNotes').value=state.memories[currentCountry]||'';
}
function toast(t,action=null){const el=$('#toast');el.textContent=t;el.classList.add('show');el.onclick=action?()=>{action();el.classList.remove('show')}:null;clearTimeout(el._timer);el._timer=setTimeout(()=>{el.classList.remove('show');el.onclick=null},action?4200:1700)}
$$('.choice-grid button').forEach(b=>b.onclick=()=>{
  if(state.statuses[currentCountry]===b.dataset.status){delete state.statuses[currentCountry]}
  else {state.statuses[currentCountry]=b.dataset.status;if(b.dataset.status==='visited'){state.visitHistory=state.visitHistory.filter(c=>c!==currentCountry);state.visitHistory.push(currentCountry)}}
  save()
});async function leaveMapMode(){
  document.body.classList.remove('map-view');
  try{screen.orientation?.unlock?.()}catch(e){}
  try{if(document.fullscreenElement)await document.exitFullscreen()}catch(e){}
}
async function showHome(){
  await leaveMapMode();
  $$('.header-nav-item').forEach(x=>x.classList.remove('active'));
  $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));
  window.scrollTo({top:0,behavior:'smooth'});
}
async function showMap(){
  document.body.classList.add('map-view');
  $$('.header-nav-item').forEach(x=>x.classList.remove('active'));
  $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));
  window.scrollTo({top:0});
  try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen({navigationUI:'hide'})}catch(e){}
  try{await screen.orientation?.lock?.('landscape')}catch(e){}
}
$$('.header-nav-item').forEach(b=>b.onclick=async()=>{
  if(b.dataset.target==='map'){await showMap();return}
  await leaveMapMode();
  $$('.header-nav-item').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen===b.dataset.target));
  window.scrollTo({top:0,behavior:'smooth'})
});
$('#homeLogo').onclick=showHome;
$('#mapClose').onclick=showHome;
$('#sheetClose').onclick=closeSheet;$('#sheetBackdrop').onclick=closeSheet;
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&document.body.classList.contains('map-view')){try{screen.orientation?.unlock?.()}catch(e){}}});
function openTrip(country=''){$('#tripCountry').value=country;$('#tripName').value='';$('#tripStart').value='';$('#tripEnd').value='';$('#tripPlan').value='';$('#tripDialog').showModal()}$('#newTripBtn').onclick=()=>openTrip();$('#addCountryTrip').onclick=()=>openTrip(currentCountry);$('#cancelTrip').onclick=()=>$('#tripDialog').close();$('#tripForm').onsubmit=e=>{e.preventDefault();const t={country:$('#tripCountry').value.trim(),name:$('#tripName').value.trim(),start:$('#tripStart').value,end:$('#tripEnd').value,plan:$('#tripPlan').value.trim(),status:'upcoming'};if(!t.country||!t.name)return;state.trips.push(t);if(!state.statuses[t.country])state.statuses[t.country]='going';save();$('#tripDialog').close();toast('Trip created ✈')};$('#placeForm').onsubmit=e=>{e.preventDefault();const v=$('#placeInput').value.trim();if(!v)return;(state.places[currentCountry]??=[]).push(v);$('#placeInput').value='';save()};$('#companionForm').onsubmit=e=>{e.preventDefault();const v=$('#companionInput').value.trim();if(!v||!currentCountry)return;(state.companions[currentCountry]??=[]).push(v);$('#companionInput').value='';save()};let memoryTimer=null;$('#memoryNotes').addEventListener('input',e=>{clearTimeout(memoryTimer);memoryTimer=setTimeout(()=>{if(!currentCountry)return;state.memories[currentCountry]=e.target.value;localStorage.setItem('wozzaworld-state',JSON.stringify(state));renderCountryLists()},250)});$('#confirmRemove').onclick=e=>{e.preventDefault();if(pendingRemoveCountry)removeCountry(pendingRemoveCountry);pendingRemoveCountry=null;$('#removeDialog').close()};
function isStandalone(){return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true}
function syncInstallButton(){const b=$('#installBtn');if(!b)return;b.classList.toggle('hidden',isStandalone()||localStorage.getItem('wozzaworld-installed')==='1')}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;syncInstallButton()});
const installBtn=$('#installBtn');
if(installBtn){installBtn.onclick=async()=>{if(isStandalone()){syncInstallButton();return}if(deferredInstallPrompt){deferredInstallPrompt.prompt();const choice=await deferredInstallPrompt.userChoice;if(choice.outcome==='accepted'){localStorage.setItem('wozzaworld-installed','1');syncInstallButton()}deferredInstallPrompt=null;return}const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);const helpText=$('#installHelpText');const help=$('#installHelp');if(helpText)helpText.textContent=ios?'In Safari, tap Share, then “Add to Home Screen”.':'Open your browser menu and choose “Add to Home screen” or “Install app”.';help?.classList.add('show')}}
const installHelpClose=$('#installHelpClose');if(installHelpClose)installHelpClose.onclick=()=>$('#installHelp')?.classList.remove('show');
window.addEventListener('appinstalled',()=>{localStorage.setItem('wozzaworld-installed','1');syncInstallButton();toast('WozzaWorld added to your mobile ✓')});
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',syncInstallButton);syncInstallButton();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=0.13.0',{updateViaCache:'none'}));
const carousel=document.getElementById('countryCarousel');
if(carousel){
  let sx=0,sy=0,drag=false;
  carousel.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;drag=true;carousel.setPointerCapture?.(e.pointerId)});
  carousel.addEventListener('pointerup',e=>{if(!drag)return;drag=false;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.2)setCountrySlide(countrySlide+(dx<0?1:-1),true,dx<0?'next':'prev')});
  carousel.addEventListener('pointercancel',()=>drag=false);
}
setCountrySlide(0,false);
setupCountrySearch();
buildMap();render();

const hideLaunchSplash=()=>document.getElementById('launchSplash')?.classList.add('hide');
if(document.readyState==='complete')setTimeout(hideLaunchSplash,350);else window.addEventListener('load',()=>setTimeout(hideLaunchSplash,350),{once:true});
setTimeout(hideLaunchSplash,1800);
