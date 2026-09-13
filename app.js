const flags={Canada:'🇨🇦','United States':'🇺🇸',Mexico:'🇲🇽',Brazil:'🇧🇷',Argentina:'🇦🇷','United Kingdom':'🇬🇧',France:'🇫🇷',Spain:'🇪🇸',Italy:'🇮🇹',Norway:'🇳🇴',Egypt:'🇪🇬','South Africa':'🇿🇦',India:'🇮🇳',China:'🇨🇳',Japan:'🇯🇵',Indonesia:'🇮🇩',Australia:'🇦🇺'};
const seed={statuses:{Norway:'going',Italy:'bucket',Spain:'visited',France:'visited'},places:{Italy:['Lake Como','Roscioli'],Norway:['Flåm railway']},trips:[{country:'Norway',name:'Norway',start:'2027-05-01',end:'2027-05-08',plan:'Cruise itinerary',status:'upcoming'},{country:'Italy',name:'Amalfi Coast',start:'2027-06-04',end:'2027-06-11',plan:'Positano',status:'upcoming'}]};
const oldState=JSON.parse(localStorage.getItem('myworld-state')||'null');
const savedState=JSON.parse(localStorage.getItem('wozzaworld-state')||'null');
let state=savedState||oldState||structuredClone(seed);
Object.keys(state.statuses||{}).forEach(c=>{if(state.statuses[c]==='wishlist')state.statuses[c]='bucket'});
let currentCountry=null,holdTimer=null,longPressed=false,deferredInstallPrompt=null;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('wozzaworld-state',JSON.stringify(state));render();}
function render(){
  $$('#countries path').forEach(p=>{p.classList.remove('visited','going','bucket');const s=state.statuses[p.dataset.country];if(s)p.classList.add(s)});
  const vals=Object.values(state.statuses);$('#visitedCount').textContent=vals.filter(x=>x==='visited').length;$('#goingCount').textContent=vals.filter(x=>x==='going').length;$('#wishCount').textContent=vals.filter(x=>x==='bucket').length;
  $('#meVisited').textContent=$('#visitedCount').textContent;$('#meGoing').textContent=$('#goingCount').textContent;$('#meWishlist').textContent=$('#wishCount').textContent;$('#meTrips').textContent=state.trips.length;
  $('#tripList').innerHTML=state.trips.length?state.trips.map(tripCard).join(''):'<div class="hero-card"><p class="muted">No trips yet. Add your first adventure.</p></div>';
  if(currentCountry)renderSheet();
}
function tripCard(t){const dates=t.start?`${pretty(t.start)}${t.end?' – '+pretty(t.end):''}`:'Dates not set';return `<div class="trip-card"><div><strong>${flags[t.country]||'🌍'} ${esc(t.name)}</strong><p>${esc(t.country)} • ${dates}${t.plan?' • '+esc(t.plan):''}</p></div><span class="badge">${t.status==='upcoming'?'Upcoming ✈':'Trip'}</span></div>`}
function pretty(d){return new Date(d+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
function esc(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function openCountry(c){currentCountry=c;renderSheet();$('#countrySheet').classList.add('open');$('#sheetBackdrop').classList.add('open');$('#countrySheet').setAttribute('aria-hidden','false')}
function closeSheet(){$('#countrySheet').classList.remove('open');$('#sheetBackdrop').classList.remove('open');$('#countrySheet').setAttribute('aria-hidden','true')}
function renderSheet(){const s=state.statuses[currentCountry];$('#countryFlag').textContent=flags[currentCountry]||'🌍';$('#countryName').textContent=currentCountry;$('#countryStatus').textContent=s?({visited:'Visited ✓',going:'Visiting / upcoming ✈',bucket:'On your bucket list ♡'}[s]):'Not marked yet';$$('.choice-grid button').forEach(b=>b.classList.toggle('selected',b.dataset.status===s));const trips=state.trips.filter(t=>t.country===currentCountry);$('#countryTrips').innerHTML=trips.length?trips.map(tripCard).join(''):'<p class="muted">No trips for this country yet.</p>';$('#savedPlaces').innerHTML=(state.places[currentCountry]||[]).map(x=>`<span class="chip">${esc(x)}</span>`).join('')||'<span class="muted">Nothing saved yet.</span>'}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1700)}
$$('#countries path').forEach(p=>{const start=()=>{longPressed=false;holdTimer=setTimeout(()=>{longPressed=true;state.statuses[p.dataset.country]='visited';save();toast(`${p.dataset.country} marked visited ✓`)},550)};const end=()=>{clearTimeout(holdTimer);if(!longPressed)openCountry(p.dataset.country)};p.addEventListener('pointerdown',start);p.addEventListener('pointerup',end);p.addEventListener('pointerleave',()=>clearTimeout(holdTimer));p.addEventListener('pointercancel',()=>clearTimeout(holdTimer));});
$$('.choice-grid button').forEach(b=>b.onclick=()=>{if(state.statuses[currentCountry]===b.dataset.status)delete state.statuses[currentCountry];else state.statuses[currentCountry]=b.dataset.status;save()});
$$('.nav-item').forEach(b=>b.onclick=()=>{$$('.nav-item').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen===b.dataset.target));$('#screenTitle').textContent={map:'Explore',trips:'Trips',me:'Me'}[b.dataset.target]});
$('#sheetClose').onclick=closeSheet;$('#sheetBackdrop').onclick=closeSheet;
function openTrip(country=''){ $('#tripCountry').value=country;$('#tripName').value='';$('#tripStart').value='';$('#tripEnd').value='';$('#tripPlan').value='';$('#tripDialog').showModal() }
$('#newTripBtn').onclick=()=>openTrip();$('#addCountryTrip').onclick=()=>openTrip(currentCountry);$('#cancelTrip').onclick=()=>$('#tripDialog').close();
$('#tripForm').onsubmit=e=>{e.preventDefault();const t={country:$('#tripCountry').value.trim(),name:$('#tripName').value.trim(),start:$('#tripStart').value,end:$('#tripEnd').value,plan:$('#tripPlan').value.trim(),status:'upcoming'};if(!t.country||!t.name)return;state.trips.push(t);if(!state.statuses[t.country])state.statuses[t.country]='going';save();$('#tripDialog').close();toast('Trip created ✈')};
$('#placeForm').onsubmit=e=>{e.preventDefault();const v=$('#placeInput').value.trim();if(!v)return;(state.places[currentCountry]??=[]).push(v);$('#placeInput').value='';save()};
$('#resetBtn').onclick=()=>{if(confirm('Reset the WozzaWorld demo data?')){state=structuredClone(seed);save();toast('Demo reset')}};

// PWA install: Android/Chrome will show the button when the app is installable.
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;$('#installBtn').hidden=false});
$('#installBtn').onclick=async()=>{if(!deferredInstallPrompt){toast('Use your browser menu → Add to Home screen');return}deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;$('#installBtn').hidden=true};
window.addEventListener('appinstalled',()=>{$('#installBtn').hidden=true;toast('WozzaWorld added to your mobile ✓')});
if(window.matchMedia('(display-mode: standalone)').matches)$('#installBtn').hidden=true;
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
render();
