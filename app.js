
// v0.14.9 — WozzaWatch-style Android status bar + web-only install control.
const syncSystemBarTheme=()=>{
  let meta=document.querySelector('meta[name="theme-color"]');
  if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta);}
  meta.setAttribute('content','#075E78');
};
syncSystemBarTheme();
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncSystemBarTheme()});
const flags={"Central African Rep.":"cf","Central African Republic":"cf","Dem. Rep. Congo":"cd","Democratic Republic of the Congo":"cd","Aruba":"aw","Afghanistan":"af","Islamic Republic of Afghanistan":"af","Angola":"ao","Republic of Angola":"ao","Anguilla":"ai","Åland Islands":"ax","Albania":"al","Republic of Albania":"al","Andorra":"ad","Principality of Andorra":"ad","United Arab Emirates":"ae","Argentina":"ar","Argentine Republic":"ar","Armenia":"am","Republic of Armenia":"am","American Samoa":"as","Antarctica":"aq","French Southern Territories":"tf","Antigua and Barbuda":"ag","Australia":"au","Austria":"at","Republic of Austria":"at","Azerbaijan":"az","Republic of Azerbaijan":"az","Burundi":"bi","Republic of Burundi":"bi","Belgium":"be","Kingdom of Belgium":"be","Benin":"bj","Republic of Benin":"bj","Bonaire, Sint Eustatius and Saba":"bq","Burkina Faso":"bf","Bangladesh":"bd","People's Republic of Bangladesh":"bd","Bulgaria":"bg","Republic of Bulgaria":"bg","Bahrain":"bh","Kingdom of Bahrain":"bh","Bahamas":"bs","Commonwealth of the Bahamas":"bs","Bosnia and Herzegovina":"ba","Republic of Bosnia and Herzegovina":"ba","Bosnia and Herz.":"ba","Saint Barthélemy":"bl","Belarus":"by","Republic of Belarus":"by","Belize":"bz","Bermuda":"bm","Bolivia, Plurinational State of":"bo","Plurinational State of Bolivia":"bo","Bolivia":"bo","Brazil":"br","Federative Republic of Brazil":"br","Barbados":"bb","Brunei Darussalam":"bn","Bhutan":"bt","Kingdom of Bhutan":"bt","Bouvet Island":"bv","Botswana":"bw","Republic of Botswana":"bw","Central African Republic":"cf","Canada":"ca","Cocos (Keeling) Islands":"cc","Switzerland":"ch","Swiss Confederation":"ch","Chile":"cl","Republic of Chile":"cl","China":"cn","People's Republic of China":"cn","Côte d'Ivoire":"ci","Republic of Côte d'Ivoire":"ci","Cameroon":"cm","Republic of Cameroon":"cm","Congo, The Democratic Republic of the":"cd","Congo":"cg","Republic of the Congo":"cg","Cook Islands":"ck","Colombia":"co","Republic of Colombia":"co","Comoros":"km","Union of the Comoros":"km","Cabo Verde":"cv","Republic of Cabo Verde":"cv","Costa Rica":"cr","Republic of Costa Rica":"cr","Cuba":"cu","Republic of Cuba":"cu","Curaçao":"cw","Christmas Island":"cx","Cayman Islands":"ky","Cyprus":"cy","Republic of Cyprus":"cy","Czechia":"cz","Czech Republic":"cz","Germany":"de","Federal Republic of Germany":"de","Djibouti":"dj","Republic of Djibouti":"dj","Dominica":"dm","Commonwealth of Dominica":"dm","Denmark":"dk","Kingdom of Denmark":"dk","Dominican Republic":"do","Algeria":"dz","People's Democratic Republic of Algeria":"dz","Ecuador":"ec","Republic of Ecuador":"ec","Egypt":"eg","Arab Republic of Egypt":"eg","Eritrea":"er","the State of Eritrea":"er","Western Sahara":"eh","Spain":"es","Kingdom of Spain":"es","Estonia":"ee","Republic of Estonia":"ee","Ethiopia":"et","Federal Democratic Republic of Ethiopia":"et","Finland":"fi","Republic of Finland":"fi","Fiji":"fj","Republic of Fiji":"fj","Falkland Islands (Malvinas)":"fk","France":"fr","French Republic":"fr","Faroe Islands":"fo","Micronesia, Federated States of":"fm","Federated States of Micronesia":"fm","Gabon":"ga","Gabonese Republic":"ga","United Kingdom":"gb","United Kingdom of Great Britain and Northern Ireland":"gb","Georgia":"ge","Guernsey":"gg","Ghana":"gh","Republic of Ghana":"gh","Gibraltar":"gi","Guinea":"gn","Republic of Guinea":"gn","Guadeloupe":"gp","Gambia":"gm","Republic of the Gambia":"gm","Guinea-Bissau":"gw","Republic of Guinea-Bissau":"gw","Equatorial Guinea":"gq","Republic of Equatorial Guinea":"gq","Greece":"gr","Hellenic Republic":"gr","Grenada":"gd","Greenland":"gl","Guatemala":"gt","Republic of Guatemala":"gt","French Guiana":"gf","Guam":"gu","Guyana":"gy","Republic of Guyana":"gy","Hong Kong":"hk","Hong Kong Special Administrative Region of China":"hk","Heard Island and McDonald Islands":"hm","Honduras":"hn","Republic of Honduras":"hn","Croatia":"hr","Republic of Croatia":"hr","Haiti":"ht","Republic of Haiti":"ht","Hungary":"hu","Indonesia":"id","Republic of Indonesia":"id","Isle of Man":"im","India":"in","Republic of India":"in","British Indian Ocean Territory":"io","Ireland":"ie","Iran, Islamic Republic of":"ir","Islamic Republic of Iran":"ir","Iran":"ir","Iraq":"iq","Republic of Iraq":"iq","Iceland":"is","Republic of Iceland":"is","Israel":"il","State of Israel":"il","Italy":"it","Italian Republic":"it","Jamaica":"jm","Jersey":"je","Jordan":"jo","Hashemite Kingdom of Jordan":"jo","Japan":"jp","Kazakhstan":"kz","Republic of Kazakhstan":"kz","Kenya":"ke","Republic of Kenya":"ke","Kyrgyzstan":"kg","Kyrgyz Republic":"kg","Cambodia":"kh","Kingdom of Cambodia":"kh","Kiribati":"ki","Republic of Kiribati":"ki","Saint Kitts and Nevis":"kn","Korea, Republic of":"kr","South Korea":"kr","Kuwait":"kw","State of Kuwait":"kw","Lao People's Democratic Republic":"la","Laos":"la","Lebanon":"lb","Lebanese Republic":"lb","Liberia":"lr","Republic of Liberia":"lr","Libya":"ly","Saint Lucia":"lc","Liechtenstein":"li","Principality of Liechtenstein":"li","Sri Lanka":"lk","Democratic Socialist Republic of Sri Lanka":"lk","Lesotho":"ls","Kingdom of Lesotho":"ls","Lithuania":"lt","Republic of Lithuania":"lt","Luxembourg":"lu","Grand Duchy of Luxembourg":"lu","Latvia":"lv","Republic of Latvia":"lv","Macao":"mo","Macao Special Administrative Region of China":"mo","Saint Martin (French part)":"mf","Morocco":"ma","Kingdom of Morocco":"ma","Monaco":"mc","Principality of Monaco":"mc","Moldova, Republic of":"md","Republic of Moldova":"md","Moldova":"md","Madagascar":"mg","Republic of Madagascar":"mg","Maldives":"mv","Republic of Maldives":"mv","Mexico":"mx","United Mexican States":"mx","Marshall Islands":"mh","Republic of the Marshall Islands":"mh","North Macedonia":"mk","Republic of North Macedonia":"mk","Mali":"ml","Republic of Mali":"ml","Malta":"mt","Republic of Malta":"mt","Myanmar":"mm","Republic of Myanmar":"mm","Montenegro":"me","Mongolia":"mn","Northern Mariana Islands":"mp","Commonwealth of the Northern Mariana Islands":"mp","Mozambique":"mz","Republic of Mozambique":"mz","Mauritania":"mr","Islamic Republic of Mauritania":"mr","Montserrat":"ms","Martinique":"mq","Mauritius":"mu","Republic of Mauritius":"mu","Malawi":"mw","Republic of Malawi":"mw","Malaysia":"my","Mayotte":"yt","Namibia":"na","Republic of Namibia":"na","New Caledonia":"nc","Niger":"ne","Republic of the Niger":"ne","Norfolk Island":"nf","Nigeria":"ng","Federal Republic of Nigeria":"ng","Nicaragua":"ni","Republic of Nicaragua":"ni","Niue":"nu","Netherlands":"nl","Kingdom of the Netherlands":"nl","Norway":"no","Kingdom of Norway":"no","Nepal":"np","Federal Democratic Republic of Nepal":"np","Nauru":"nr","Republic of Nauru":"nr","New Zealand":"nz","Oman":"om","Sultanate of Oman":"om","Pakistan":"pk","Islamic Republic of Pakistan":"pk","Panama":"pa","Republic of Panama":"pa","Pitcairn":"pn","Peru":"pe","Republic of Peru":"pe","Philippines":"ph","Republic of the Philippines":"ph","Palau":"pw","Republic of Palau":"pw","Papua New Guinea":"pg","Independent State of Papua New Guinea":"pg","Poland":"pl","Republic of Poland":"pl","Puerto Rico":"pr","Korea, Democratic People's Republic of":"kp","Democratic People's Republic of Korea":"kp","North Korea":"kp","Portugal":"pt","Portuguese Republic":"pt","Paraguay":"py","Republic of Paraguay":"py","Palestine, State of":"ps","the State of Palestine":"ps","French Polynesia":"pf","Qatar":"qa","State of Qatar":"qa","Réunion":"re","Romania":"ro","Russian Federation":"ru","Rwanda":"rw","Rwandese Republic":"rw","Saudi Arabia":"sa","Kingdom of Saudi Arabia":"sa","Sudan":"sd","Republic of the Sudan":"sd","Senegal":"sn","Republic of Senegal":"sn","Singapore":"sg","Republic of Singapore":"sg","South Georgia and the South Sandwich Islands":"gs","Saint Helena, Ascension and Tristan da Cunha":"sh","Svalbard and Jan Mayen":"sj","Solomon Islands":"sb","Sierra Leone":"sl","Republic of Sierra Leone":"sl","El Salvador":"sv","Republic of El Salvador":"sv","San Marino":"sm","Republic of San Marino":"sm","Somalia":"so","Federal Republic of Somalia":"so","Saint Pierre and Miquelon":"pm","Serbia":"rs","Republic of Serbia":"rs","South Sudan":"ss","Republic of South Sudan":"ss","Sao Tome and Principe":"st","Democratic Republic of Sao Tome and Principe":"st","Suriname":"sr","Republic of Suriname":"sr","Slovakia":"sk","Slovak Republic":"sk","Slovenia":"si","Republic of Slovenia":"si","Sweden":"se","Kingdom of Sweden":"se","Eswatini":"sz","Kingdom of Eswatini":"sz","Sint Maarten (Dutch part)":"sx","Seychelles":"sc","Republic of Seychelles":"sc","Syrian Arab Republic":"sy","Syria":"sy","Turks and Caicos Islands":"tc","Chad":"td","Republic of Chad":"td","Togo":"tg","Togolese Republic":"tg","Thailand":"th","Kingdom of Thailand":"th","Tajikistan":"tj","Republic of Tajikistan":"tj","Tokelau":"tk","Turkmenistan":"tm","Timor-Leste":"tl","Democratic Republic of Timor-Leste":"tl","Tonga":"to","Kingdom of Tonga":"to","Trinidad and Tobago":"tt","Republic of Trinidad and Tobago":"tt","Tunisia":"tn","Republic of Tunisia":"tn","Türkiye":"tr","Turkey":"tr","Republic of Türkiye":"tr","Tuvalu":"tv","Taiwan, Province of China":"tw","Taiwan":"tw","Tanzania, United Republic of":"tz","United Republic of Tanzania":"tz","Tanzania":"tz","Uganda":"ug","Republic of Uganda":"ug","Ukraine":"ua","United States Minor Outlying Islands":"um","Uruguay":"uy","Eastern Republic of Uruguay":"uy","United States":"us","United States of America":"us","Uzbekistan":"uz","Republic of Uzbekistan":"uz","Holy See (Vatican City State)":"va","Saint Vincent and the Grenadines":"vc","Venezuela, Bolivarian Republic of":"ve","Bolivarian Republic of Venezuela":"ve","Venezuela":"ve","Virgin Islands, British":"vg","British Virgin Islands":"vg","Virgin Islands, U.S.":"vi","Virgin Islands of the United States":"vi","Viet Nam":"vn","Socialist Republic of Viet Nam":"vn","Vietnam":"vn","Vanuatu":"vu","Republic of Vanuatu":"vu","Wallis and Futuna":"wf","Samoa":"ws","Independent State of Samoa":"ws","Yemen":"ye","Republic of Yemen":"ye","South Africa":"za","Republic of South Africa":"za","Zambia":"zm","Republic of Zambia":"zm","Zimbabwe":"zw","Republic of Zimbabwe":"zw","Russia":"ru","Brunei":"bn","Ivory Coast":"ci","Côte d’Ivoire":"ci","Cote d’Ivoire":"ci","Democratic Republic of the Congo":"cd","DR Congo":"cd","Palestine":"ps","Kosovo":"xk"}
const seed={statuses:{Norway:'going',Italy:'bucket',Spain:'visited',France:'visited'},places:{Italy:['Lake Como','Roscioli'],Norway:['Flåm railway']},trips:[{id:'seed1',name:'Norway',start:'2027-05-01',end:'2027-05-08',countries:['Norway'],cities:{Norway:['Flåm']},plan:'Cruise itinerary',status:'upcoming'}]};
const oldState=JSON.parse(localStorage.getItem('myworld-state')||'null'),savedState=JSON.parse(localStorage.getItem('wozzaworld-state')||'null');let state=savedState||oldState||structuredClone(seed);state.statuses??={};Object.keys(state.statuses).forEach(c=>{if(state.statuses[c]==='wishlist')state.statuses[c]='bucket'});state.visitHistory??=[];state.companions??={};state.memories??={};state.recycleBin??=[];state.tripRecycleBin??=[];state.companionRecycleBin??=[];state.vibeRecycleBin??=[];state.places??={};state.trips??=[];state.cities??={};state.countryAddedAt??={};state.visitedListPrefs??={sort:'default',year:'all',rating:'all'};state.visitedListPrefs.rating??='all';state.companionBank??=[];state.vibeBank??=['City Break','Beach Holiday','Spa & Wellness','Adventure','Road Trip','Snow & Ski','Cruise','Visiting Friends & Family','Celebration','Great Outdoors','Camping'];state.vibeBank=state.vibeBank.map(v=>v==='Relax & Recharge'?'Spa & Wellness':v==='Winter & Snow'?'Snow & Ski':v).filter(v=>v!=='Once in a Lifetime');if(!state.vibeBank.some(v=>String(v).toLowerCase()==='cruise'))state.vibeBank.push('Cruise');state.trips.forEach(t=>{if(Array.isArray(t.vibes))t.vibes=[...new Set(t.vibes.map(v=>v==='Relax & Recharge'?'Spa & Wellness':v==='Winter & Snow'?'Snow & Ski':v).filter(v=>v!=='Once in a Lifetime'))]});state.bucketOrder??=[];state.recycleSelection??=[];state.customDestinations??=[];state.extraStatuses??={};Object.values(state.companions).flat().forEach(n=>{if(n&&!state.companionBank.some(x=>x.toLowerCase()===String(n).toLowerCase()))state.companionBank.push(n)});state.trips.forEach(t=>(t.companions||[]).forEach(n=>{if(n&&!state.companionBank.some(x=>x.toLowerCase()===String(n).toLowerCase()))state.companionBank.push(n)}));
// Migrate old one-country trips into multi-country trips without losing data.
state.trips=state.trips.map((t,i)=>({...t,id:t.id||`trip-${Date.now()}-${i}`,countries:t.countries||[t.country].filter(Boolean),cities:t.cities||{}}));
for(const c of Object.keys(state.statuses)){if(state.statuses[c]==='visited'&&!state.visitHistory.includes(c))state.visitHistory.push(c);if(!state.countryAddedAt[c])state.countryAddedAt[c]=new Date(Date.now()-(Object.keys(state.statuses).indexOf(c)*1000)).toISOString()}
let availableCountries=[],currentCountry=null,holdTimer=null,longPressed=false,countrySlide=0,pendingRemoveCountry=null,lastRemoved=null,editingTripId=null;const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}function save(){localStorage.setItem('wozzaworld-state',JSON.stringify(state));render()}function pretty(d){if(!d)return'';return new Date(d+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}function monthPretty(m){if(!m)return'Date not set';const [y,mo]=m.split('-');return new Date(+y,+mo-1,1).toLocaleDateString('en-GB',{month:'short',year:'numeric'})}
function flagUrl(c){const code=flags[c];return code?`https://flagcdn.com/w160/${code}.png`:''}function flagMarkup(c,cls='flag-img'){const u=flagUrl(c);return u?`<img class="${cls}" src="${u}" alt="">`:`<span class="flag-fallback">◉</span>`}
function tripCountries(t){return t.countries||[t.country].filter(Boolean)}function orderedTripDates(t){const stops=(t.destinations||[]).filter(Boolean);if(stops.length){const first=stops[0]||{},last=stops[stops.length-1]||{};return {start:first.start||'',end:(stops.length===1?first.end:last.end)||''}}return {start:t.start||'',end:t.end||''}}function tripStars(t){const r=Math.max(0,Math.min(5,Number(t.rating)||0));return `<div class="trip-stars" data-trip-rating="${esc(t.id||'')}" aria-label="Rate ${esc(t.name)}">${[1,2,3,4,5].map(n=>`<button type="button" data-rate="${n}" aria-label="${n} star${n===1?'':'s'}">${n<=r?'★':'☆'}</button>`).join('')}</div>`}function travelModeIcon(mode){const m=String(mode||'').toLowerCase();const icons={air:'air',plane:'air',sea:'sea',ferry:'sea',cruise:'sea',train:'train',car:'car',campervan:'campervan',motorhome:'campervan',narrowboat:'narrowboat',motorbike:'motorbike',bicycle:'bicycle','on foot':'on-foot',other:'other'};const icon=icons[m]||(m.includes('coach')||m.includes('bus')?'coach-bus':'');return icon?`<img class="travel-mode-icon" src="${icon}.png" alt="" aria-hidden="true">`:''}function tripTravelModes(t){const modes=[...(t.destinations||[]).map(d=>d.travelMode),t.travelMode].filter(Boolean);return [...new Set(modes)].filter(m=>travelModeIcon(m))}function tripTravelIcons(t){const modes=tripTravelModes(t);return modes.length?`<div class="trip-travel-icons" aria-label="Travel methods: ${esc(modes.join(', '))}">${modes.map(m=>`<span title="${esc(m)}">${travelModeIcon(m)}</span>`).join('')}</div>`:''}function vibeIcon(vibe){const k=String(vibe||'').toLowerCase(),icons={'city break':'vibe-city-break','beach holiday':'vibe-beach-holiday','spa & wellness':'vibe-spa-wellness','adventure':'vibe-adventure','road trip':'vibe-road-trip','snow & ski':'vibe-snow-ski','cruise':'vibe-cruise','visiting friends & family':'vibe-visiting-friends-family','celebration':'vibe-celebration','great outdoors':'vibe-great-outdoors','camping':'vibe-camping'},icon=icons[k];return icon?`<img class="vibe-icon" src="${icon}.svg" alt="" aria-hidden="true">`:''}function tripVibeIcons(t){const travelModes=tripTravelModes(t).map(m=>String(m).toLowerCase()),vibes=[...new Set(t.vibes||[])].filter(v=>vibeIcon(v)&&!(String(v).toLowerCase()==='cruise'&&travelModes.includes('cruise')));return vibes.length?`<div class="trip-vibe-icons" aria-label="Trip vibes: ${esc(vibes.join(', '))}">${vibes.map(v=>`<span title="${esc(v)}">${vibeIcon(v)}</span>`).join('')}</div>`:''}function tripCard(t){const cs=tripCountries(t),td=orderedTripDates(t),dates=td.start?`${pretty(td.start)}${td.end?' – '+pretty(td.end):''}`:'Dates to be confirmed',days=countdownDays(td.start),count=days===null&&tripIsOnHorizon(t)?'PLANNING':days===0?'TODAY ✈':days>0?`${days} DAYS TO GO`:'';const countryFlags=cs.map(c=>`<button type="button" class="trip-country-flag" data-trip-country="${esc(c)}" aria-label="Open ${esc(c)} country card">${flagMarkup(c,'trip-country-flag-img')}</button>`).join('');const countries=cs.length?`<div class="trip-card-country">${cs.map(esc).join(' · ')}</div>`:'';const dateLine=dates?`<div class="trip-card-date">${dates}</div>`:'';return `<div class="trip-card premium-trip editable-trip" data-open-trip="${esc(t.id||'')}" role="button" tabindex="0" aria-label="Open ${esc(t.name)} trip"><div class="trip-card-copy"><div class="trip-card-title-row"><strong class="${String(t.name||'').length>32?'trip-title-long ':''}${String(t.name||'').length>42?'trip-title-xlong':''}">${esc(t.name)}</strong></div>${countries}${dateLine}<div class="trip-card-meta-row">${tripStars(t)}${tripTravelIcons(t)}${tripVibeIcons(t)}</div></div><div class="trip-card-side">${count?`<span class="countdown-badge">${count}</span>`:''}<div class="trip-card-flags" aria-label="Trip countries">${countryFlags}</div></div></div>`}function countdownDays(d){if(!d)return null;const today=new Date();today.setHours(0,0,0,0);const target=new Date(d+'T00:00:00');return Math.ceil((target-today)/86400000)}
function countryKey(c){const aliases={'Dominican Rep.':'Dominican Republic','S. Sudan':'South Sudan','eSwatini':'Eswatini'};c=aliases[c]||c;const code=flags[c];return code?code:String(c||'').trim().toLowerCase().replace(/[^a-z0-9]+/g,' ')}
function sameCountry(a,b){return countryKey(a)===countryKey(b)}
function countryHasStatus(c,status){return state.statuses[c]===status||(state.extraStatuses?.[c]||[]).includes(status)}
function setCountryStatus(c,status,on=true){state.extraStatuses??={};const primary=state.statuses[c],extras=new Set(state.extraStatuses[c]||[]);if(on){if(primary!==status)extras.add(status)}else{if(primary===status){const replacement=[...extras][0]||'';if(replacement){state.statuses[c]=replacement;extras.delete(replacement)}else delete state.statuses[c]}else extras.delete(status)}if(extras.size)state.extraStatuses[c]=[...extras];else delete state.extraStatuses[c]}
function allStatusCountries(){return [...new Set([...Object.keys(state.statuses||{}),...Object.keys(state.extraStatuses||{})])]}
function countryTrips(c){return state.trips.filter(t=>tripCountries(t).some(x=>sameCountry(x,c)))}function countryRows(status){let a=allStatusCountries().filter(c=>countryHasStatus(c,status));if(status==='visited'){const prefs=state.visitedListPrefs||{sort:'default',year:'all',rating:'all'};if(prefs.year&&prefs.year!=='all')a=a.filter(c=>countryVisitMonths(c).some(m=>m.startsWith(prefs.year+'-')));if(prefs.rating&&prefs.rating!=='all'){const min=Number(prefs.rating);a=a.filter(c=>(countryRating(c)||0)>=min)}const r=new Map(state.visitHistory.map((c,i)=>[c,i])),dateKey=c=>countryVisitMonths(c)[0]||'',added=c=>state.countryAddedAt?.[c]||'';switch(prefs.sort){case'az':a.sort((x,y)=>x.localeCompare(y));break;case'za':a.sort((x,y)=>y.localeCompare(x));break;case'added-new':a.sort((x,y)=>added(y).localeCompare(added(x)));break;case'added-old':a.sort((x,y)=>added(x).localeCompare(added(y)));break;case'trip-new':a.sort((x,y)=>{const dx=dateKey(x),dy=dateKey(y);if(!dx&&!dy)return x.localeCompare(y);if(!dx)return 1;if(!dy)return-1;return dy.localeCompare(dx)});break;case'trip-old':a.sort((x,y)=>{const dx=dateKey(x),dy=dateKey(y);if(!dx&&!dy)return x.localeCompare(y);if(!dx)return 1;if(!dy)return-1;return dx.localeCompare(dy)});break;case'people-high':a.sort((x,y)=>countryCompanions(y).length-countryCompanions(x).length||x.localeCompare(y));break;case'people-low':a.sort((x,y)=>countryCompanions(x).length-countryCompanions(y).length||x.localeCompare(y));break;case'rating-high':a.sort((x,y)=>(countryRating(y)||0)-(countryRating(x)||0)||x.localeCompare(y));break;case'rating-low':a.sort((x,y)=>(countryRating(x)||0)-(countryRating(y)||0)||x.localeCompare(y));break;default:a.sort((x,y)=>(r.get(y)??-1)-(r.get(x)??-1))}}else if(status==='bucket'){const order=state.bucketOrder||[];a.sort((x,y)=>{const ix=order.findIndex(c=>sameCountry(c,x)),iy=order.findIndex(c=>sameCountry(c,y));return (ix<0?9999:ix)-(iy<0?9999:iy)||x.localeCompare(y)})}else if(status==='going'){const nextDate=c=>{const dates=countryTrips(c).map(t=>t.start).filter(d=>d&&countdownDays(d)>=0).sort();return dates[0]||''},added=c=>state.countryAddedAt?.[c]||'';a.sort((x,y)=>{const dx=nextDate(x),dy=nextDate(y);if(dx&&dy)return dx.localeCompare(dy);if(dx)return-1;if(dy)return 1;return added(x).localeCompare(added(y))||x.localeCompare(y)})}else a.sort((a,b)=>a.localeCompare(b));return a}
function countryRating(c){const rs=countryTrips(c).map(t=>Number(t.rating)||0).filter(Boolean);return rs.length?rs.reduce((a,b)=>a+b,0)/rs.length:0}function ratingMarkup(c){const r=countryRating(c);if(!r)return '';const rounded=Math.round(r);return `<small class="country-rating" title="Average trip rating ${r.toFixed(1)} out of 5">${'★'.repeat(rounded)}${'☆'.repeat(5-rounded)}${rsafe(r)}</small>`}function rsafe(r){return r%1?` <b>${r.toFixed(1)}</b>`:''}
function countryVisitMonths(c){const months=[];for(const t of countryTrips(c)){if(t.start)months.push(t.start.slice(0,7))}for(const city of state.cities[c]||[])for(const m of city.visits||[]){if(m)months.push(String(m).slice(0,7))}return [...new Set(months.filter(m=>/^\d{4}-\d{2}$/.test(m)))].sort().reverse()}
function countryVisitMonth(c){const latest=countryVisitMonths(c)[0];return latest?monthPretty(latest):''}
function countryYear(c){const latest=countryVisitMonths(c)[0];return latest?latest.slice(0,4):''}
function countryVisitMeta(c){const month=countryVisitMonth(c),trips=countryTrips(c).filter(t=>!t.start||countdownDays(t.start)<0).length;return {month,trips,label:month,repeat:trips>1?(trips===2?'Visited twice':`Visited ${trips} times`):''}}
function countryCompanions(c){const names=[...(state.companions[c]||[])];countryTrips(c).forEach(t=>(t.companions||[]).forEach(n=>names.push(n)));return [...new Map(names.filter(Boolean).map(n=>[String(n).trim().toLowerCase(),String(n).trim()])).values()]}
function countryCityNames(c){const names=(state.cities[c]||[]).map(x=>x.name);countryTrips(c).forEach(t=>{(t.destinations||[]).forEach(d=>{if(sameCountry(d.country||tripCountries(t)[0],c))names.push(d.name)});const map=t.cities||{};Object.entries(map).forEach(([country,cities])=>{if(sameCountry(country,c))names.push(...(cities||[]))})});return [...new Set(names.map(x=>String(x).trim().toLowerCase()).filter(Boolean))]}
function uniqueCities(c){return countryCityNames(c).length}function peopleCount(c){return countryCompanions(c).length+1}
function peopleIcon(){return `<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-1.2c0-3 2.4-5.2 5.5-5.2s5.5 2.2 5.5 5.2V19"/><circle cx="17" cy="9" r="2.3"/><path d="M15.6 13.7c2.8-.4 4.9 1.3 4.9 3.8V19"/></svg>`}function cityIcon(){return `<svg viewBox="0 0 24 24"><path d="M4 20V9l5-3v14M9 20V4l6 3v13M15 20v-8l5-2v10M2 20h20"/></svg>`}
function attachCountryListSwipe(){
  /* Swipe handling is owned by #countryCarousel only.
     Keeping a single gesture owner prevents one physical swipe firing twice. */
}
function renderCountryLists(){[['visited','visitedCountries'],['going','goingCountries'],['bucket','bucketCountries']].forEach(([status,id])=>{const list=$('#'+id),names=countryRows(status);list.innerHTML=names.length?names.map((c,idx)=>{const visitMeta=status==='visited'?countryVisitMeta(c):{month:'',trips:0,label:''},pc=peopleCount(c),cc=uniqueCities(c),tc=visitMeta.trips,next=status==='going'?countryTrips(c).filter(tripIsOnHorizon).sort(tripSortUpcoming)[0]:null,days=next?countdownDays(orderedTripDates(next).start):null;return `<div class="country-row premium-country-row${status==='bucket'?' bucket-rank-row':''}" data-open-country="${esc(c)}" ${status==='bucket'?`data-bucket-country="${esc(c)}"`:''} role="button" tabindex="0">${status==='bucket'?`<span class="bucket-rank">${idx+1}</span>`:''}<span class="overview-flag">${flagMarkup(c,'overview-flag-img')}</span><span class="country-row-copy"><strong>${esc(c)}</strong>${next?`<small class="trip-countdown">${days===null?'PLANNING':days===0?'TODAY ✈':days+' days to go'+(orderedTripDates(next).start?' · '+pretty(orderedTripDates(next).start):'')}</small>`:visitMeta.label?`<small class="country-row-year">${visitMeta.label}</small>`:''}${ratingMarkup(c)}</span><span class="row-metrics">${status==='visited'||countryCompanions(c).length?`<button class="country-people" data-people-country="${esc(c)}">${peopleIcon()}<span>${pc}</span></button>`:''}${status==='visited'||cc?`<button class="country-cities" data-cities-country="${esc(c)}">${cityIcon()}<span>${cc}</span></button>`:''}${status==='bucket'?`<button type="button" class="bucket-remove-btn" data-bucket-remove="${esc(c)}" aria-label="Remove ${esc(c)} from bucket list"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button>`:''}</span></div>`}).join(''):`<div class="country-empty">${status==='visited'?'No countries visited yet.':status==='going'?'No upcoming countries yet.':'Nothing on your bucket list yet.'}</div>`;if(names.length>10)list.insertAdjacentHTML('beforeend','<div class="jump-top-wrap"><button type="button" class="jump-top-btn" aria-label="Jump to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14l6-6 6 6"/></svg></button></div>')});attachListRowEvents();attachBucketRanking();attachCountryListSwipe();document.querySelectorAll('.jump-top-btn').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();window.scrollTo({top:0,behavior:'smooth'})});requestAnimationFrame(()=>setCountrySlide(countrySlide,false))}
function attachListRowEvents(){
  ['visitedCountries','goingCountries','bucketCountries'].forEach(id=>{
    const list=$('#'+id); if(!list)return;
    list.querySelectorAll('[data-open-country]').forEach(row=>{
      const c=row.dataset.openCountry;
      let timer=null,longPress=false,startX=0,startY=0;
      row.onclick=e=>{if(e.target.closest('button')||longPress)return;openCountry(c)};
      row.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button')){e.preventDefault();openCountry(c)}};
      if(id!=='bucketCountries'){
        row.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;longPress=false;startX=e.clientX;startY=e.clientY;timer=setTimeout(()=>{longPress=true;navigator.vibrate?.(20);openRemoveDialog(c,id==='visitedCountries'?'visited':'going')},600)});
        row.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-startX,e.clientY-startY)>10){clearTimeout(timer);timer=null}});
        row.addEventListener('pointerup',()=>{clearTimeout(timer);timer=null;setTimeout(()=>{longPress=false},0)});
        row.addEventListener('pointercancel',()=>{clearTimeout(timer);timer=null;longPress=false});
      }
    });
    list.querySelectorAll('[data-people-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();showPeople(b.dataset.peopleCountry)});
    list.querySelectorAll('[data-cities-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();showCities(b.dataset.citiesCountry)});
    list.querySelectorAll('[data-bucket-remove]').forEach(b=>{b.onpointerdown=e=>e.stopPropagation();b.onpointerup=e=>e.stopPropagation();b.onclick=e=>{e.preventDefault();e.stopImmediatePropagation();openRemoveDialog(b.dataset.bucketRemove,'bucket')}});
  });
}
function attachBucketRanking(){
  const list=$('#bucketCountries');if(!list)return;
  if(!document.getElementById('bucket-ranking-style')){
    const style=document.createElement('style');style.id='bucket-ranking-style';style.textContent=`
      #bucketCountries .bucket-rank-row{cursor:grab;-webkit-user-select:none;user-select:none;touch-action:pan-y;-webkit-touch-callout:none;display:grid!important;grid-template-columns:52px 76px minmax(0,1fr) 42px!important;align-items:center!important;column-gap:0!important;padding-left:4px!important;padding-right:28px!important}
      #bucketCountries .bucket-rank-row .overview-flag{justify-self:start!important;margin-left:4px!important}
      #bucketCountries .bucket-rank-row .country-row-copy{justify-self:start!important;min-width:0!important}
      #bucketCountries .bucket-rank-row .row-metrics{grid-column:4!important;justify-self:end!important;margin-left:0!important}
      #bucketCountries .bucket-rank{background:none!important;border:0!important;width:52px!important;min-width:52px!important;height:auto!important;padding:0!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;color:#0b1d3b!important;font-size:30px!important;line-height:1!important;font-weight:900!important;box-shadow:none!important;font-variant-numeric:tabular-nums}
      #bucketCountries .bucket-remove-btn{margin-left:auto!important;width:42px!important;height:42px!important;min-width:42px!important;padding:9px!important;border:0!important;background:transparent!important;color:#9aa4aa!important;opacity:.72!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
      #bucketCountries .bucket-remove-btn svg{width:22px!important;height:22px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
      #bucketCountries>.bucket-drag-marker{display:block!important;box-sizing:border-box!important;border:0!important;background:transparent!important;padding:0!important;visibility:hidden!important}
      .bucket-drag-live{display:grid!important;position:fixed!important;z-index:2147483647!important;pointer-events:none!important;opacity:.94!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important}
      .bucket-drag-live{grid-template-columns:52px 76px minmax(0,1fr) 42px!important;align-items:center!important;column-gap:0!important;padding-left:4px!important;padding-right:28px!important}
      .bucket-drag-live .bucket-rank{background:none!important;border:0!important;border-radius:0!important;width:52px!important;min-width:52px!important;height:auto!important;padding:0!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;color:#0b1d3b!important;font-size:30px!important;line-height:1!important;font-weight:900!important;box-shadow:none!important;font-variant-numeric:tabular-nums}
      .bucket-drag-live .overview-flag{justify-self:start!important;margin-left:4px!important}
      .bucket-drag-live .country-row-copy{justify-self:start!important;min-width:0!important}
      .bucket-drag-live .row-metrics{grid-column:4!important;justify-self:end!important;margin-left:0!important}
      .bucket-drag-live .bucket-remove-btn{margin-left:auto!important;width:42px!important;height:42px!important;min-width:42px!important;padding:9px!important;border:0!important;border-radius:0!important;background:transparent!important;color:#9aa4aa!important;opacity:.72!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;box-shadow:none!important}
      .bucket-drag-live .bucket-remove-btn svg{width:22px!important;height:22px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
      @media(max-width:620px){#bucketCountries .bucket-rank-row,.bucket-drag-live{grid-template-columns:50px 72px minmax(0,1fr) 42px!important}#bucketCountries .bucket-rank,.bucket-drag-live .bucket-rank{width:50px!important;min-width:50px!important;font-size:29px!important}}
    `;document.head.appendChild(style)
  }
  const rows=()=>[...list.querySelectorAll('[data-bucket-country]')];
  const updateRanks=()=>rows().forEach((row,i)=>{const n=row.querySelector('.bucket-rank');if(n)n.textContent=i+1});
  rows().forEach(row=>{
    let holdTimer=null,startX=0,startY=0,lastY=0,dragging=false,marker=null,grabY=0,activeTouchId=null,suppressClick=false;
    const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
    const pointFromTouch=e=>{const a=[...(e.touches||[]),...(e.changedTouches||[])];return a.find(t=>activeTouchId==null||t.identifier===activeTouchId)||a[0]||null};
    const placeMarker=y=>{
      const cards=rows().filter(el=>el!==row);let before=null;
      for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}
      if(before)list.insertBefore(marker,before);else list.appendChild(marker);
    };
    const startDrag=(x,y)=>{
      dragging=true;window.__wozzaBucketReorderActive=true;
      const r=row.getBoundingClientRect(),cs=getComputedStyle(row);
      grabY=Math.max(10,Math.min(r.height-10,y-r.top));
      marker=document.createElement('div');marker.className='bucket-drag-marker';
      marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
      list.insertBefore(marker,row);
      row.dataset.dragStyle=row.getAttribute('style')||'';row.classList.add('bucket-drag-live');
      Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
      document.body.appendChild(row);navigator.vibrate?.(20);
    };
    const moveDrag=(x,y)=>{if(!dragging)return;row.style.top=`${y-grabY}px`;placeMarker(y)};
    const finishDrag=()=>{
      clearHold();if(!dragging){activeTouchId=null;return}
      dragging=false;if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);marker?.remove();marker=null;
      const prior=row.dataset.dragStyle||'';row.classList.remove('bucket-drag-live');if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');delete row.dataset.dragStyle;
      state.bucketOrder=rows().map(x=>x.dataset.bucketCountry);localStorage.setItem('wozzaworld-state',JSON.stringify(state));updateRanks();
      window.__wozzaBucketReorderActive=false;activeTouchId=null;suppressClick=true;setTimeout(()=>{suppressClick=false},120);
    };
    row.addEventListener('touchstart',e=>{
      if(e.target.closest('button,input,select,textarea,a')||e.touches.length!==1)return;
      const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;lastY=t.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
    },{passive:true});
    document.addEventListener('touchmove',e=>{
      if(activeTouchId==null)return;const t=pointFromTouch(e);if(!t)return;
      if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}
      if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold();lastY=t.clientY;
    },{passive:false,capture:true});
    document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
    document.addEventListener('touchcancel',finishDrag,{capture:true});
    row.addEventListener('pointerdown',e=>{
      if(e.pointerType==='touch'||e.target.closest('button,input,select,textarea,a'))return;startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
      const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};
      const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);finishDrag()};
      document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true});
    });
    row.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true);
  });
}

function setCountrySlide(i,animate=true,direction='next'){countrySlide=(i+3)%3;
if(window.WozzaSagBars)window.WozzaSagBars.set(countrySlide,animate);const t=$('#carouselTrack'),carousel=$('#countryCarousel');if(!t)return;t.style.transition='none';t.style.transform=`translateX(-${countrySlide*33.333333}%)`;requestAnimationFrame(()=>{const panel=t.children[countrySlide];if(carousel&&panel)carousel.style.height=panel.scrollHeight+'px'});if(animate){const s=$('#countryCarousel');s.classList.remove('list-in-next','list-in-prev');void s.offsetWidth;s.classList.add(direction==='next'?'list-in-next':'list-in-prev');setTimeout(()=>s.classList.remove('list-in-next','list-in-prev'),230)}}
function tripSortUpcoming(a,b){const ad=orderedTripDates(a),bd=orderedTripDates(b),da=ad.start||'',db=bd.start||'';if(da&&db)return da.localeCompare(db);if(da)return-1;if(db)return 1;return String(a.id||'').localeCompare(String(b.id||''))}
function tripSortRearview(a,b){const ad=orderedTripDates(a),bd=orderedTripDates(b),da=ad.start||ad.end||'',db=bd.start||bd.end||'';if(da&&db)return db.localeCompare(da);if(da)return-1;if(db)return 1;return String(b.id||'').localeCompare(String(a.id||''))}
function tripIsOnHorizon(t){const td=orderedTripDates(t),today=new Date();today.setHours(0,0,0,0);const start=td.start?new Date(td.start+'T00:00:00'):null,end=td.end?new Date(td.end+'T00:00:00'):null;if(end)return end>=today;if(start)return start>=today;const status=String(t.status||'').toLowerCase(),countries=tripCountries(t);return status==='upcoming'||status==='planning'||countries.some(c=>countryHasStatus(c,'going'))}function reconcileTripCountryStatuses(countries){[...new Set((countries||[]).filter(Boolean))].forEach(c=>{const trips=countryTrips(c),hasUpcoming=trips.some(tripIsOnHorizon),hasPast=trips.some(t=>!tripIsOnHorizon(t));setCountryStatus(c,'going',hasUpcoming);if(hasPast){setCountryStatus(c,'visited',true);if(!state.visitHistory.some(x=>sameCountry(x,c)))state.visitHistory.push(c)}})}
let rearviewExpanded=false,rearviewSort='date-new',rearviewYears=new Set();
function rearviewYear(t){const d=orderedTripDates(t);return String(d.start||d.end||'').slice(0,4)}
function rearviewSortedTrips(items){let a=items.filter(t=>!rearviewYears.size||rearviewYears.has(rearviewYear(t)));if(rearviewSort==='az')a.sort((x,y)=>String(x.name||'').localeCompare(String(y.name||'')));else if(rearviewSort==='za')a.sort((x,y)=>String(y.name||'').localeCompare(String(x.name||'')));else if(rearviewSort==='rating-high')a.sort((x,y)=>(Number(y.rating)||0)-(Number(x.rating)||0)||tripSortRearview(x,y));else if(rearviewSort==='rating-low')a.sort((x,y)=>(Number(x.rating)||0)-(Number(y.rating)||0)||tripSortRearview(x,y));else if(rearviewSort==='date-old')a.sort((x,y)=>-tripSortRearview(x,y));else a.sort(tripSortRearview);return a}
function rearviewFilterPanel(all){const years=[...new Set(all.map(rearviewYear).filter(Boolean))].sort((a,b)=>b.localeCompare(a));return `<div class="rearview-filter-panel" hidden><strong>Sort trips</strong><div class="rearview-sort-options"><button data-rear-sort="az" class="${rearviewSort==='az'?'active':''}">A–Z</button><button data-rear-sort="za" class="${rearviewSort==='za'?'active':''}">Z–A</button><button data-rear-sort="rating-high" class="${rearviewSort==='rating-high'?'active':''}">Rating: high to low</button><button data-rear-sort="rating-low" class="${rearviewSort==='rating-low'?'active':''}">Rating: low to high</button><button data-rear-sort="date-new" class="${rearviewSort==='date-new'?'active':''}">Newest first</button><button data-rear-sort="date-old" class="${rearviewSort==='date-old'?'active':''}">Oldest first</button></div>${years.length?`<strong>Filter by year</strong><div class="rearview-year-options"><button data-rear-year="all" class="${!rearviewYears.size?'active':''}">All years</button>${years.map(y=>`<button data-rear-year="${y}" class="${rearviewYears.has(y)?'active':''}">${y}</button>`).join('')}</div>`:''}</div>`}
function renderMyTrips(){if(!state.trips.length)return '<div class="hero-card"><p class="muted">No trips yet. Add your first adventure.</p></div>';const horizon=state.trips.filter(tripIsOnHorizon).sort(tripSortUpcoming),rearAll=state.trips.filter(t=>!tripIsOnHorizon(t)),rearview=rearviewSortedTrips([...rearAll]);const horizonHtml=`<section class="trip-category"><div class="trip-category-head"><h3 class="trip-category-title">ON THE HORIZON</h3></div><div class="trip-category-list">${horizon.length?horizon.map(tripCard).join(''):'<p class="trip-category-empty">No trips on the horizon yet.</p>'}</div></section>`;const rearHtml=`<section class="trip-category rearview-category${rearviewExpanded?'':' collapsed'}"><div class="trip-category-head"><h3 class="trip-category-title">IN THE REARVIEW</h3><div class="rearview-head-actions"><button type="button" class="rearview-filter-toggle" aria-label="Sort and filter past trips" ${rearviewExpanded?'':'hidden'}><span></span><span></span><span></span></button><button type="button" class="section-collapse-toggle rearview-toggle" aria-expanded="${rearviewExpanded}" aria-label="${rearviewExpanded?'Minimise':'Expand'} In the Rearview">${rearviewExpanded?'−':'+'}</button></div></div>${!rearviewExpanded?'<img class="rearview-handnote" src="rearview-past-adventures-illustrated.svg?v=20260917-19" alt="Click to see your past adventures">':''}${rearviewFilterPanel(rearAll)}<div class="trip-category-list" ${rearviewExpanded?'':'hidden'}>${rearview.length?rearview.map(tripCard).join(''):'<p class="trip-category-empty">No trips match this filter.</p>'}</div></section>`;return horizonHtml+rearHtml}
function renderExtraStats(){const grid=$('.screen[data-screen="me"] .stats-grid');if(!grid)return;const going=$('#meGoing'),trips=$('#meTrips');if(going?.parentElement){const label=going.parentElement.querySelector('span');if(label)label.textContent='Upcoming trips'}if(trips?.parentElement){trips.textContent=state.trips.filter(t=>!tripIsOnHorizon(t)).length;const label=trips.parentElement.querySelector('span');if(label)label.textContent='Trips completed'}grid.querySelectorAll('.wozza-extra-stat').forEach(x=>x.remove());const transportGroup=m=>{m=String(m||'').toLowerCase();if(m==='air'||m==='plane')return'By air';if(m==='sea'||m==='ferry'||m==='cruise'||m==='narrowboat')return'By water';if(['car','campervan','motorhome','train','coach / bus','motorbike','bicycle','on foot'].includes(m))return'By land';return m?'Other':''};const modes=state.trips.flatMap(tripTravelModes).map(transportGroup).filter(Boolean);const counts={};modes.forEach(m=>counts[m]=(counts[m]||0)+1);const fav=Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0]?.[0]||'';const ratings=state.trips.map(t=>Number(t.rating)||0).filter(Boolean);const avg=ratings.length?ratings.reduce((a,b)=>a+b,0)/ratings.length:0;const visited=countryRows('visited'),continents=milestoneContinents(visited),worldPct=visited.length?visited.length/193*100:0;const vibeCounts={};state.trips.filter(t=>!tripIsOnHorizon(t)).forEach(t=>{new Set(t.vibes||[]).forEach(v=>{v=String(v||'').trim();if(v)vibeCounts[v]=(vibeCounts[v]||0)+1})});const favVibe=Object.entries(vibeCounts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0]?.[0]||'',vibeStatLabels={'City Break':'City','Beach Holiday':'Beach','Spa & Wellness':'Wellness','Snow & Ski':'Snow','Visiting Friends & Family':'Friends & Family','Great Outdoors':'Outdoors'},favVibeDisplay=vibeStatLabels[favVibe]||favVibe;const add=(value,label,cls='')=>{const card=document.createElement('div');card.className='stat wozza-extra-stat';card.innerHTML=`<strong class="${cls}">${value}</strong><span>${label}</span>`;grid.append(card)};add(`${continents} of 7`,'Continents travelled');add(worldPct?`${worldPct.toFixed(1)}%`:'0.0%','World explored');add(fav?esc(fav):'—','Favourite way to travel');add(favVibeDisplay?esc(favVibeDisplay):'—','Most travelled vibe',favVibeDisplay.length>12?'wozza-stat-vibe-value wozza-stat-vibe-long':'wozza-stat-vibe-value');add(avg?avg.toFixed(1)+' <em class="avg-rating-star">★</em>':'—','Average trip rating');const baseVisited=grid.querySelector('#meVisited')?.closest('.stat'),dest=grid.querySelector('#meCities')?.closest('.stat'),completed=grid.querySelector('#meTrips')?.closest('.stat'),upcoming=grid.querySelector('#meGoing')?.closest('.stat'),extras=[...grid.querySelectorAll('.wozza-extra-stat')];[baseVisited,extras[0],extras[1],dest,completed,upcoming,extras[2],extras[3],extras[4]].filter(Boolean).forEach(card=>grid.append(card));if(!document.getElementById('wozza-nine-stat-grid-style')){const st=document.createElement('style');st.id='wozza-nine-stat-grid-style';st.textContent='.stats-grid .wozza-stat-long-value{font-size:clamp(16px,4.4vw,21px)!important;line-height:1.05!important;overflow-wrap:anywhere}.stats-grid .wozza-stat-vibe-value{white-space:nowrap!important}.stats-grid .wozza-stat-vibe-long{font-size:clamp(13px,3.7vw,18px)!important;line-height:1!important;letter-spacing:-.025em!important}';document.head.appendChild(st)}}
function setupTripTitleScroll(){requestAnimationFrame(()=>{document.querySelectorAll('.trip-card-title-row strong').forEach(el=>{el.getAnimations?.().forEach(a=>a.cancel());el.style.transform='';const box=el.parentElement;if(!box)return;const fullWidth=Math.ceil(el.getBoundingClientRect().width||el.scrollWidth),visibleWidth=Math.floor(box.getBoundingClientRect().width||box.clientWidth),overflow=Math.max(0,fullWidth-visibleWidth);if(overflow>2){el.animate([{transform:'translateX(0)'},{transform:'translateX(0)',offset:.18},{transform:`translateX(-${overflow}px)`,offset:.72},{transform:`translateX(-${overflow}px)`,offset:.84},{transform:'translateX(0)'}],{duration:12000,iterations:Infinity,easing:'ease-in-out'})}});const input=$('#tripName');if(input){clearInterval(input._wozzaTitleTimer);clearTimeout(input._wozzaTitleStart);cancelAnimationFrame(input._wozzaTitleRaf||0);input.scrollLeft=0;const glide=(to,duration=6500)=>{cancelAnimationFrame(input._wozzaTitleRaf||0);const from=input.scrollLeft,start=performance.now(),delta=to-from;const tick=now=>{if(document.activeElement===input)return;const t=Math.min(1,(now-start)/duration),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;input.scrollLeft=from+delta*e;if(t<1)input._wozzaTitleRaf=requestAnimationFrame(tick)};input._wozzaTitleRaf=requestAnimationFrame(tick)};const run=()=>{const max=input.scrollWidth-input.clientWidth;if(max>2&&document.activeElement!==input){glide(max,6500);setTimeout(()=>{if(document.activeElement!==input)glide(0,4200)},8000)}};input._wozzaTitleStart=setTimeout(()=>{run();input._wozzaTitleTimer=setInterval(run,14000)},2200)}})}
function milestoneContinents(visited){const continentMap={Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova'],Africa:['Niger','Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria'],Asia:['China','Japan','Thailand','India','Vietnam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey'],"North America":['United States of America','United States','Canada','Mexico','Cuba','Jamaica'],"South America":['Brazil','Argentina','Chile','Peru','Colombia'],Oceania:['Australia','New Zealand','Fiji'],Antarctica:['Antarctica']};return Object.values(continentMap).filter(list=>visited.some(c=>list.some(x=>sameCountry(x,c)))).length}
function milestoneAwards(){const visited=countryRows('visited'),continents=milestoneContinents(visited),completed=state.trips.filter(t=>!tripIsOnHorizon(t)).length;return [{name:'First Stamp',desc:'Visit your first country.',img:'milestone-first-stamp.png',unlocked:visited.length>=1},{name:'Continental Drift',desc:'Visit 2 different continents.',img:'milestone-continental-drift.png',unlocked:continents>=2},{name:'Frequent Flyer',desc:'Complete 10 trips.',img:'milestone-frequent-flyer.png',unlocked:completed>=10},{name:'Quarter of the World',desc:"Visit 25% of the world’s countries.",img:'milestone-quarter-world.png',unlocked:visited.length>=Math.ceil(195*.25)},{name:'Seven Continents',desc:'Set foot on all 7 continents.',img:'milestone-seven-continents.png',unlocked:continents>=7}]}
function openMilestoneDialog(a){const d=$('#milestoneDialog');if(!d)return;$('#milestoneDialogArt').innerHTML=`<img src="${a.img}" alt="${esc(a.name)} milestone stamp">`;$('#milestoneDialogTitle').textContent=a.name;$('#milestoneDialogDesc').textContent=a.desc;$('#milestoneDialogStatus').textContent=a.unlocked?'Milestone unlocked':'Locked — keep exploring';d.showModal()}
function renderMilestones(){const grid=$('#milestonesGrid');if(!grid)return;const awards=milestoneAwards();const lock=`<span class="milestone-strap" aria-hidden="true"><i></i></span><span class="milestone-tag" aria-hidden="true"><b>lock</b></span>`;const tile=(a,i)=>`<button type="button" class="milestone-tile ${a.unlocked?'is-unlocked':'is-locked'}" data-milestone="${i}" aria-label="${esc(a.name)} — ${a.unlocked?'unlocked':'locked'}"><div class="milestone-stamp-wrap"><img src="${a.img}" alt="" class="milestone-stamp">${a.unlocked?'':lock}</div></button>`;const blanks=Array.from({length:15},()=>`<div class="milestone-tile milestone-blank is-locked" aria-label="Future milestone locked"><div class="milestone-stamp-wrap"><span class="blank-stamp-art" aria-hidden="true">⌁</span>${lock}</div></div>`).join('');grid.innerHTML=awards.map(tile).join('')+blanks;grid.querySelectorAll('[data-milestone]').forEach(b=>b.onclick=()=>openMilestoneDialog(awards[Number(b.dataset.milestone)]))}
function render(){ applyWorldViewName(); const passportName=$('#passportName');if(passportName&&document.activeElement!==passportName)passportName.value=(localStorage.getItem('wozzaworld-first-name')||'');$$('.country').forEach(p=>{p.classList.remove('visited','going','bucket');['visited','going','bucket'].forEach(s=>{if(countryHasStatus(p.dataset.country,s))p.classList.add(s)})});const vals=allStatusCountries(),visited=new Set(allStatusCountries().filter(c=>countryHasStatus(c,'visited')));$('#visitedCount').textContent=visited.size;const vh=$('#visitedCountriesHeading'),wp=$('#worldExploredPercent');if(vh)vh.textContent='VISITED';if(wp)wp.textContent=`${Math.round(visited.size/195*100)}% OF THE WORLD EXPLORED`;$('#goingCount').textContent=vals.filter(c=>countryHasStatus(c,'going')).length;$('#wishCount').textContent=vals.filter(c=>countryHasStatus(c,'bucket')).length;const meVisited=$('#meVisited');if(meVisited){const current=meVisited.querySelector('.visited-current');if(current)current.textContent=visited.size;else meVisited.textContent=visited.size;}$('#meCities').textContent=[...visited].reduce((n,c)=>n+uniqueCities(c),0);$('#meGoing').textContent=vals.filter(c=>countryHasStatus(c,'going')).length;$('#meTrips').textContent=state.trips.length;renderCompanionStats();renderMilestones();renderPassportCarouselStats();setPassportStatsSlide(passportStatsSlide);renderExtraStats();$('#tripList').innerHTML=renderMyTrips();setupTripTitleScroll();renderCountryLists();renderRecycleBin();renderDepartureBoard();attachTripRatingEvents();attachTripCardEvents();if(currentCountry)renderSheet()}
function showPeople(c){const p=countryCompanions(c);$('#peopleDialogTitle').textContent=`${c} — ${p.length+1} travellers`;$('#peopleDialogList').innerHTML=`<span class="you-chip">You</span>`+(p.length?p.map(n=>`<span>${esc(n)}</span>`).join(''):'');$('#peopleDialog').showModal()}function countryCityDisplay(c){const map=new Map();for(const x of state.cities[c]||[])map.set(String(x.name).trim().toLowerCase(),{name:x.name,type:x.type||'City',visits:[...(x.visits||[])]});for(const t of countryTrips(c)){for(const d of t.destinations||[]){if(!sameCountry(d.country||tripCountries(t)[0],c))continue;const k=String(d.name||'').trim().toLowerCase();if(!k)continue;const rec=map.get(k)||{name:d.name,type:d.type||'Other',visits:[]};const m=d.start?d.start.slice(0,7):(t.start?t.start.slice(0,7):'');if(m&&!rec.visits.includes(m))rec.visits.push(m);map.set(k,rec)}for(const [country,cities] of Object.entries(t.cities||{})){if(!sameCountry(country,c))continue;for(const name of cities||[]){const k=String(name).trim().toLowerCase();if(!k)continue;const rec=map.get(k)||{name,type:'City',visits:[]};const m=t.start?t.start.slice(0,7):'';if(m&&!rec.visits.includes(m))rec.visits.push(m);map.set(k,rec)}}}return [...map.values()]}
function openRemoveDialog(c,status=null){pendingRemoveCountry=c;pendingRemoveStatus=status||state.statuses[c];status=pendingRemoveStatus;const label=status==='visited'?'Visited':status==='going'?'Visiting':'Bucket List',bodyLabel=status==='visited'?'visited countries':status==='going'?'visiting countries':'Bucket List';$('#removeDialogTitle').textContent=`Remove from ${label}?`;const dialog=$('#removeDialog'),copy=dialog?.querySelector('p'),confirm=$('#confirmRemove');if(copy)copy.textContent=`Do you want to remove ${c} from your ${bodyLabel}? You can always add it back later.`;if(confirm)confirm.textContent='Remove';dialog.showModal()}function removeCountry(c,status=pendingRemoveStatus||state.statuses[c]){if(!status||!countryHasStatus(c,status))return;const item={country:c,status,removedAt:Date.now()};state.recycleBin=state.recycleBin.filter(x=>!(x.country===c&&x.status===status));state.recycleBin.unshift(item);setCountryStatus(c,status,false);lastRemoved=item;save();toast(`${c} removed — tap to undo`,undoLastRemove)}function undoLastRemove(){if(!lastRemoved)return;setCountryStatus(lastRemoved.country,lastRemoved.status,true);state.recycleBin=state.recycleBin.filter(i=>!(i.country===lastRemoved.country&&i.status===lastRemoved.status));lastRemoved=null;save();toast('Country restored')}
function permanentlyDeleteCountryAt(i){const x=state.recycleBin[i];if(!x)return;delete state.companions[x.country];delete state.memories[x.country];delete state.places[x.country];delete state.cities[x.country];state.trips=state.trips.map(t=>({...t,countries:tripCountries(t).filter(c=>!sameCountry(c,x.country))})).filter(t=>t.countries.length);state.recycleBin.splice(i,1)}
let permanentDeleteAction=null;function askPermanentDelete(title,text,action){permanentDeleteAction=action;$('#permanentDeleteTitle').textContent=title;$('#permanentDeleteText').textContent=text;$('#permanentDeleteDialog').showModal()}$('#cancelPermanentDelete').onclick=()=>{permanentDeleteAction=null;$('#permanentDeleteDialog').close()};$('#confirmPermanentDelete').onclick=()=>{const fn=permanentDeleteAction;permanentDeleteAction=null;$('#permanentDeleteDialog').close();fn?.()};
function preloadRecycleEmptyAssets(){if(window.__wozzaRecycleEmptyAssetsPreloaded)return;window.__wozzaRecycleEmptyAssetsPreloaded=true;['recycle-empty-desert.png','recycle-tumbleweed.png'].forEach(src=>{const img=new Image();img.decoding='async';img.src=src})}function renderRecycleBin(){const el=$('#recycleList');if(!el)return;preloadRecycleEmptyAssets();const saveAndKeepRecycleOpen=()=>{localStorage.setItem('wozzaworld-state',JSON.stringify(state));const d=$('#recycleDialog');if(d?.open){el.style.transition='opacity 110ms ease';el.style.opacity='.15';setTimeout(()=>{renderRecycleBin();el.style.opacity='0';requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.opacity='1';setTimeout(()=>{el.style.removeProperty('transition');el.style.removeProperty('opacity')},140)}))},90)}else{render();requestAnimationFrame(()=>{if(d&&!d.open)d.showModal()})}};let selection=new Set(),selectMode=false;const undo=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5v-4M5.5 7.5A8 8 0 1 1 4 14"/></svg>`,bin=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>`;const countries=state.recycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="c:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.country)}" tabindex="-1">✓</button>${flagMarkup(x.country)}<span class="recycle-copy"><strong>${esc(x.country)}</strong><small>Country</small></span><span class="recycle-actions"><button class="restore-btn" data-restore-country="${i}" aria-label="Restore ${esc(x.country)}">${undo}</button><button class="delete-btn" data-delete-country="${i}" aria-label="Delete ${esc(x.country)} permanently">${bin}</button></span></div>`);const companions=state.companionRecycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="p:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.name)}" tabindex="-1">✓</button><span class="recycle-copy"><strong>${esc(x.name)}</strong><small>Travel companion</small></span><span class="recycle-actions"><button class="restore-btn" data-restore-companion="${i}" aria-label="Restore ${esc(x.name)}">${undo}</button><button class="delete-btn" data-delete-companion="${i}" aria-label="Delete ${esc(x.name)} permanently">${bin}</button></span></div>`);const vibes=state.vibeRecycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="v:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.name)}" tabindex="-1">✓</button><span class="recycle-copy"><strong>${esc(x.name)}</strong><small>Custom vibe</small></span><span class="recycle-actions"><button class="restore-btn" data-restore-vibe="${i}" aria-label="Restore ${esc(x.name)}">${undo}</button><button class="delete-btn" data-delete-vibe="${i}" aria-label="Delete ${esc(x.name)} permanently">${bin}</button></span></div>`);const trips=state.tripRecycleBin.map((t,i)=>`<div class="recycle-row" data-recycle-key="t:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(t.name)}" tabindex="-1">✓</button><span class="recycle-trip-icon">✈</span><span class="recycle-copy"><strong>${esc(t.name)}</strong><small>Trip · ${tripCountries(t).map(esc).join(' · ')}</small></span><span class="recycle-actions"><button class="restore-btn" data-restore-trip="${i}" aria-label="Restore ${esc(t.name)}">${undo}</button><button class="delete-btn" data-delete-trip="${i}" aria-label="Delete ${esc(t.name)} permanently">${bin}</button></span></div>`);el.innerHTML=(countries.length||trips.length||companions.length||vibes.length)?`<div class="recycle-select-head"><span>Choose items to restore or permanently delete.</span><button type="button" data-enter-select>Select</button></div><div class="recycle-bulkbar" hidden><strong><span data-selected-count>0</span> selected</strong><button type="button" data-select-all>Select all</button><button type="button" data-delete-selected disabled>Delete selected</button><button type="button" data-cancel-selected>Done</button></div>${[...countries,...trips,...companions,...vibes].join('')}`:`<div class="recycle-empty-state recycle-desert-empty"><p class="recycle-empty-subtitle">Nothing to see here.</p><div class="recycle-desert-scene"><img class="recycle-desert-bg" src="recycle-empty-desert.png" alt="Open suitcase in a quiet desert"><img class="recycle-tumbleweed recycle-tumbleweed-back" src="recycle-tumbleweed.png" alt="" aria-hidden="true"><img class="recycle-tumbleweed recycle-tumbleweed-front" src="recycle-tumbleweed.png" alt="" aria-hidden="true"></div></div>`;const bar=el.querySelector('.recycle-bulkbar'),head=el.querySelector('.recycle-select-head'),deleteSelected=el.querySelector('[data-delete-selected]'),selectAll=el.querySelector('[data-select-all]');const rows=()=>[...el.querySelectorAll('.recycle-row')];const sync=()=>{el.classList.toggle('selection-mode',selectMode);if(head)head.hidden=selectMode;if(bar)bar.hidden=!selectMode;el.querySelector('[data-selected-count]')&&(el.querySelector('[data-selected-count]').textContent=selection.size);if(deleteSelected)deleteSelected.disabled=!selection.size;if(selectAll)selectAll.textContent=selection.size===rows().length&&rows().length?'Deselect all':'Select all';rows().forEach(r=>{const on=selection.has(r.dataset.recycleKey);r.classList.toggle('selected',on);r.querySelector('.recycle-select-dot')?.setAttribute('aria-pressed',String(on))})};const toggleRow=row=>{if(!selectMode)return;selection.has(row.dataset.recycleKey)?selection.delete(row.dataset.recycleKey):selection.add(row.dataset.recycleKey);sync()};el.querySelector('[data-enter-select]')?.addEventListener('click',()=>{selectMode=true;selection.clear();sync()});selectAll?.addEventListener('click',()=>{const all=rows();if(selection.size===all.length)selection.clear();else all.forEach(r=>selection.add(r.dataset.recycleKey));sync()});rows().forEach(row=>row.addEventListener('click',e=>{if(!selectMode||e.target.closest('.restore-btn,.delete-btn'))return;e.preventDefault();toggleRow(row)}));el.querySelectorAll('.recycle-select-dot').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();toggleRow(b.closest('.recycle-row'))});el.querySelectorAll('.delete-btn').forEach(btn=>btn.onclick=e=>{e.stopPropagation();if(selectMode)return;if(btn.dataset.deleteCountry!==undefined){const i=+btn.dataset.deleteCountry,x=state.recycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.country}? This cannot be undone.`,()=>{permanentlyDeleteCountryAt(i);saveAndKeepRecycleOpen()})}else if(btn.dataset.deleteCompanion!==undefined){const i=+btn.dataset.deleteCompanion,x=state.companionRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.name}? This cannot be undone.`,()=>{state.companionRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}else if(btn.dataset.deleteVibe!==undefined){const i=+btn.dataset.deleteVibe,x=state.vibeRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.name}? This cannot be undone.`,()=>{state.vibeRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}else{const i=+btn.dataset.deleteTrip,t=state.tripRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${t.name}? This cannot be undone.`,()=>{state.tripRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}});el.querySelectorAll('[data-restore-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();const x=state.recycleBin[+b.dataset.restoreCountry];state.statuses[x.country]=x.status;state.recycleBin.splice(+b.dataset.restoreCountry,1);save()});el.querySelectorAll('[data-restore-companion]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreCompanion,x=state.companionRecycleBin[i];if(x&&!state.companionBank.some(n=>n.toLowerCase()===String(x.name).toLowerCase()))state.companionBank.push(x.name);state.companionRecycleBin.splice(i,1);save();toast(`${x.name} restored`)});el.querySelectorAll('[data-restore-vibe]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreVibe,x=state.vibeRecycleBin[i];if(x&&!state.vibeBank.some(n=>String(n).toLowerCase()===String(x.name).toLowerCase()))state.vibeBank.push(x.name);state.vibeRecycleBin.splice(i,1);save();toast(`${x.name} restored`)});el.querySelectorAll('[data-restore-trip]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreTrip,t=state.tripRecycleBin[i];state.trips.push(t);state.tripRecycleBin.splice(i,1);tripCountries(t).forEach(c=>{if(!state.statuses[c])state.statuses[c]=t.start&&countdownDays(t.start)>=0?'going':'visited'});save();toast(`${t.name} restored`)});el.querySelector('[data-cancel-selected]')?.addEventListener('click',()=>{selection.clear();selectMode=false;sync()});deleteSelected?.addEventListener('click',()=>{if(!selection.size)return;askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${selection.size} selected item${selection.size===1?'':'s'}? This cannot be undone.`,()=>{const ci=[...selection].filter(k=>k.startsWith('c:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),ti=[...selection].filter(k=>k.startsWith('t:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),pi=[...selection].filter(k=>k.startsWith('p:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),vi=[...selection].filter(k=>k.startsWith('v:')).map(k=>+k.slice(2)).sort((a,b)=>b-a);ci.forEach(permanentlyDeleteCountryAt);ti.forEach(i=>state.tripRecycleBin.splice(i,1));pi.forEach(i=>state.companionRecycleBin.splice(i,1));vi.forEach(i=>state.vibeRecycleBin.splice(i,1));saveAndKeepRecycleOpen()})});sync()}
function closeCountrySearchPickers(fromPop=false){let closed=false;$$('.country-search').forEach(box=>{if(!box.hidden){box.hidden=true;closed=true}});if(closed&&!fromPop&&history.state?.wozzaCountryPicker)history.back();return closed}
function ensureCountrySearchClose(box){if(box.querySelector('.country-search-close'))return;const input=box.querySelector('input');if(!input)return;let field=input.closest('.country-search-field');if(!field){field=document.createElement('div');field.className='country-search-field';input.parentNode.insertBefore(field,input);field.appendChild(input)}const close=document.createElement('button');close.type='button';close.className='country-search-close';close.setAttribute('aria-label','Close country picker');close.textContent='×';close.onclick=e=>{e.preventDefault();e.stopPropagation();closeCountrySearchPickers()};field.appendChild(close)}
function setupCountrySearch(){if(!document.getElementById('country-search-close-style')){const st=document.createElement('style');st.id='country-search-close-style';st.textContent=`.country-search-field{position:relative!important;width:100%!important}.country-search-field>input{width:100%!important;box-sizing:border-box!important;padding-right:54px!important}.country-search-field>.country-search-close{position:absolute!important;z-index:5!important;right:14px!important;top:50%!important;transform:translateY(-50%)!important;width:30px!important;height:30px!important;border-radius:50%!important;border:0!important;background:#f1f0eb!important;color:#111!important;font-size:22px!important;line-height:1!important;font-weight:500!important;display:flex!important;align-items:center!important;justify-content:center!important;margin:0!important;padding:0!important}`;document.head.appendChild(st)}$$('.country-search').forEach(ensureCountrySearchClose);$$('.list-add').forEach(btn=>btn.onclick=()=>{const status=btn.dataset.addStatus,box=$(`.country-search[data-search-for="${status}"]`);$$('.country-search').forEach(x=>{if(x!==box)x.hidden=true});const opening=box.hidden;box.hidden=!box.hidden;if(opening){history.pushState({...history.state,wozzaCountryPicker:true},'');const input=box.querySelector('input');input.value='';renderSearchResults(box,status,'');input.focus()}else if(history.state?.wozzaCountryPicker)history.back()});$$('.country-search input').forEach(input=>input.oninput=()=>{const box=input.closest('.country-search');renderSearchResults(box,box.dataset.searchFor,input.value)})}
window.addEventListener('popstate',()=>closeCountrySearchPickers(true));
function renderSearchResults(box,status,q){const term=q.trim().toLowerCase(),names=(availableCountries.length?availableCountries:Object.keys(flags)).filter(c=>!state.statuses[c]&&(!term||c.toLowerCase().includes(term))).slice(0,12);box.querySelector('.country-search-results').innerHTML=names.map(c=>`<button class="country-search-result" data-add-country="${esc(c)}">${esc(c)}</button>`).join('')||'<div class="muted">No matches</div>';box.querySelectorAll('[data-add-country]').forEach(b=>b.onclick=()=>{const c=b.dataset.addCountry;state.statuses[c]=status;state.countryAddedAt[c]=new Date().toISOString();if(status==='visited'){state.visitHistory=state.visitHistory.filter(x=>x!==c);state.visitHistory.push(c)}if(status==='bucket'&&!state.bucketOrder.some(x=>sameCountry(x,c)))state.bucketOrder.push(c);box.hidden=true;if(history.state?.wozzaCountryPicker)history.back();save();toast(`${c} added`)})}
function attachCountryEvents(){$$('.country').forEach(p=>{
  /* World View countries now have one job: a normal tap/click opens the Country Card.
     D3 continues to own pan/pinch/zoom and suppresses clicks produced by a real drag. */
  p.onpointerdown=null;
  p.onpointermove=null;
  p.onpointerup=null;
  p.onpointerleave=null;
  p.onpointercancel=null;
  p.onclick=e=>{
    if(!document.body.classList.contains('map-view'))return;
    e.preventDefault();
    e.stopPropagation();
    openCountry(p.dataset.country,{type:'map'});
  };
  p.onkeydown=e=>{
    if(!document.body.classList.contains('map-view'))return;
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      openCountry(p.dataset.country,{type:'map'});
    }
  };
})}
let mapZoomBehavior=null;
function resetMapZoom(animate=true){const svg=d3.select('#worldMap');svg.select('#sphere').attr('transform',null);svg.select('#countries').attr('transform',null);svg.select('#countryLabels').selectAll('text').style('display','none').attr('transform',null);if(!mapZoomBehavior)return;svg.property('__zoom',d3.zoomIdentity);if(document.body.classList.contains('map-view'))svg.transition().duration(animate?260:0).call(mapZoomBehavior.transform,d3.zoomIdentity)}
async function buildMap(){try{const world=await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()),features=topojson.feature(world,world.objects.countries).features;availableCountries=[...new Set([
...features.map(d=>d.properties.name).filter(Boolean),
...Object.keys(flags).filter(c=>![
'Eastern Republic of Uruguay','Republic of Uzbekistan','Holy See (Vatican City State)',
'Bolivarian Republic of Venezuela','Venezuela, Bolivarian Republic of',
'Virgin Islands, British','Virgin Islands, U.S.','Virgin Islands of the United States',
'Socialist Republic of Viet Nam','Viet Nam','Republic of Yemen',
'Republic of South Africa'
].includes(c))
])].sort();const svg=d3.select('#worldMap'),projection=d3.geoEqualEarth().fitExtent([[24,28],[976,492]],{type:'Sphere'}),path=d3.geoPath(projection);const sphereD=path({type:'Sphere'});svg.select('#sphere').attr('d',sphereD);let defs=svg.select('defs');if(defs.empty())defs=svg.insert('defs',':first-child');let globeClip=defs.select('#worldGlobeClip');if(globeClip.empty())globeClip=defs.append('clipPath').attr('id','worldGlobeClip');globeClip.selectAll('path').data([null]).join('path').attr('d',sphereD);svg.select('#countries').attr('clip-path','url(#worldGlobeClip)');svg.select('#countries').selectAll('path').data(features).join('path').attr('class','country').attr('d',path).attr('data-country',d=>d.properties.name).attr('tabindex','0').attr('aria-label',d=>d.properties.name);function labelFeature(f){if(f.geometry?.type!=='MultiPolygon')return f;const polys=f.geometry.coordinates.map(coords=>({type:'Feature',properties:f.properties,geometry:{type:'Polygon',coordinates:coords}}));return polys.sort((a,b)=>d3.geoArea(b)-d3.geoArea(a))[0]||f}const labelData=features.map(f=>{const lf=labelFeature(f);return{feature:lf,name:f.properties.name==='eSwatini'?'Eswatini':f.properties.name,centroid:path.centroid(lf),bounds:path.bounds(lf)}}).filter(x=>Number.isFinite(x.centroid[0])&&Number.isFinite(x.centroid[1]));
const vietnamLabel=labelData.find(d=>d.name==='Vietnam');if(vietnamLabel){const vietnamAnchor=projection([107.75,16.2]);if(vietnamAnchor)vietnamLabel.centroid=vietnamAnchor;}
const kaliningradPt=projection([20.52,54.71]);
if(kaliningradPt)labelData.push({name:'Kaliningrad',country:'Russia',centroid:kaliningradPt,bounds:[[kaliningradPt[0]-7,kaliningradPt[1]-4],[kaliningradPt[0]+7,kaliningradPt[1]+4]]});const labels=svg.select('#countryLabels').selectAll('text').data(labelData).join('text').attr('class','map-country-label').text(d=>d.name).attr('text-anchor','middle').attr('dominant-baseline','central').style('display','none').attr('tabindex','0').attr('role','button').attr('aria-label',d=>d.name).on('click',(event,d)=>{if(!document.body.classList.contains('map-view'))return;event.preventDefault();event.stopPropagation();openCountry(d.country||d.name,{type:'map'})}).on('keydown',(event,d)=>{if(!document.body.classList.contains('map-view'))return;if(event.key==='Enter'||event.key===' '){event.preventDefault();openCountry(d.country||d.name,{type:'map'})}});let portraitLabelBand=0;
function updateCountryLabels(transform){
 if(!document.body.classList.contains('map-view')){labels.style('display','none');portraitLabelBand=0;return}
 const portrait=window.matchMedia('(orientation: portrait)').matches;
 if(!portrait){
  if(transform.k<2.15){labels.style('display','none');return}
  const occupied=[];
  labels.each(function(d){
   const pt=transform.apply(d.centroid),bw=(d.bounds[1][0]-d.bounds[0][0])*transform.k,bh=(d.bounds[1][1]-d.bounds[0][1])*transform.k,font=8,tw=Math.max(8,d.name.length*4.25);
   let show=bw>tw*1.25&&bh>font*1.7&&pt[0]>8&&pt[0]<992&&pt[1]>8&&pt[1]<512;
   if(show){const box=[pt[0]-tw/2-2,pt[1]-font/2-2,pt[0]+tw/2+2,pt[1]+font/2+2];if(occupied.some(b=>!(box[2]<b[0]||box[0]>b[2]||box[3]<b[1]||box[1]>b[3])))show=false;else occupied.push(box)}
   d3.select(this).attr('x',pt[0]).attr('y',pt[1]-(d.name==='Croatia'?(transform.k>=12?68:34):0)).style('display',show?null:'none')
  });
  return
 }
 const k=transform.k;
 if(k<2.15){portraitLabelBand=0;labels.style('display','none');return}
 /* Stable zoom bands. Different enter/leave thresholds stop labels chattering
    when a pinch gesture hovers around a boundary. */
 if(portraitLabelBand===0)portraitLabelBand=1;
 if(portraitLabelBand===1&&k>=3.45)portraitLabelBand=2;
 else if(portraitLabelBand===2&&k<3.10)portraitLabelBand=1;
 if(portraitLabelBand===2&&k>=5.35)portraitLabelBand=3;
 labels.each(function(d){
  const pt=transform.apply(d.centroid);
  const baseW=d.bounds[1][0]-d.bounds[0][0],baseH=d.bounds[1][1]-d.bounds[0][1],baseArea=baseW*baseH;
  const show=portraitLabelBand===3||(portraitLabelBand===2&&baseArea>=28)||(portraitLabelBand===1&&baseArea>=115);
  d3.select(this).attr('x',pt[0]).attr('y',pt[1]-(d.name==='Croatia'?(transform.k>=12?68:34):0)).style('display',show?null:'none')
 })
}function clearPortraitWorldCopies(){svg.selectAll('.portrait-world-copy').remove()}
function ensurePortraitOcean(){
 let ocean=svg.select('#portraitOcean');
 if(ocean.empty())ocean=svg.insert('rect',':first-child').attr('id','portraitOcean').attr('x',-5000).attr('y',-5000).attr('width',11000).attr('height',10520).attr('pointer-events','none');
 const sphereFill=getComputedStyle(svg.select('#sphere').node()).fill;
 ocean.attr('fill',sphereFill).style('display',document.body.classList.contains('map-view')&&window.matchMedia('(orientation: portrait)').matches?null:'none')
}
function ensurePortraitWorldCopies(){
 if(!document.body.classList.contains('map-view')||!window.matchMedia('(orientation: portrait)').matches)return;
 if(!svg.select('.portrait-countries-copy-left').empty())return;
 [-1,1].forEach(dir=>{
  const c=svg.select('#countries').node().cloneNode(true);
  c.removeAttribute('id');c.setAttribute('class',`portrait-world-copy portrait-countries-copy portrait-countries-copy-${dir<0?'left':'right'}`);c.setAttribute('pointer-events','auto');c.setAttribute('aria-hidden','true');
  svg.node().insertBefore(c,svg.select('#countryLabels').node());
  d3.select(c).selectAll('.country').attr('tabindex',null).on('click',(event,d)=>{
   if(!document.body.classList.contains('map-view'))return;
   event.preventDefault();event.stopPropagation();
   const country=event.currentTarget?.dataset?.country||d?.properties?.name;
   if(country)openCountry(country,{type:'map'})
  });
  const l=svg.select('#countryLabels').node().cloneNode(true);
  l.removeAttribute('id');l.setAttribute('class',`portrait-world-copy portrait-label-copy portrait-label-copy-${dir<0?'left':'right'}`);l.setAttribute('pointer-events','none');l.setAttribute('aria-hidden','true');
  svg.node().appendChild(l)
 })
}
function renderPortraitWorldCopies(t){
 ensurePortraitOcean();ensurePortraitWorldCopies();
 if(!document.body.classList.contains('map-view')||!window.matchMedia('(orientation: portrait)').matches)return;
 const period=952*t.k;
 [-1,1].forEach(dir=>{
  const suffix=dir<0?'left':'right',dx=dir*period;
  svg.select(`.portrait-countries-copy-${suffix}`).attr('transform',`translate(${t.x+dx},${t.y}) scale(${t.k})`);
  const copy=svg.select(`.portrait-label-copy-${suffix}`);
  copy.selectAll('text').each(function(_,i){
   const source=labels.nodes()[i];if(!source)return;
   const x=parseFloat(source.getAttribute('x')),y=parseFloat(source.getAttribute('y'));
   d3.select(this).attr('x',Number.isFinite(x)?x+dx:0).attr('y',Number.isFinite(y)?y:0).style('display',source.style.display)
  })
 })
}
mapZoomBehavior=d3.zoom().scaleExtent([1,56]).translateExtent([[0,0],[1000,520]]).extent([[0,0],[1000,520]]).filter(event=>document.body.classList.contains('map-view')&&(!event.ctrlKey||event.type==='wheel')).on('start',()=>{const portrait=window.matchMedia('(orientation: portrait)').matches;mapZoomBehavior.scaleExtent([portrait?1.15:1,56]).translateExtent(portrait?[[-1e9,0],[1e9,520]]:[[0,0],[1000,520]]);if(!portrait){clearPortraitWorldCopies();svg.select('#portraitOcean').style('display','none')}}).on('zoom',event=>{if(!document.body.classList.contains('map-view'))return;let t=event.transform;if(window.matchMedia('(orientation: portrait)').matches){const period=952*t.k,centre=500;let x=t.x;while(x>centre+period/2)x-=period;while(x<centre-period/2)x+=period;const baseY=(520-520*t.k)/2;const y=t.k<=1.7?baseY:t.y;t=d3.zoomIdentity.translate(x,y).scale(t.k);svg.property('__zoom',t)}svg.select('#sphere').attr('transform',t);svg.select('#countries').attr('transform',t);updateCountryLabels(t);renderPortraitWorldCopies(t)});
svg.call(mapZoomBehavior).on('dblclick.zoom',null);
$('#mapLoading').classList.add('hidden');attachCountryEvents();render()}catch(e){$('#mapLoading').textContent='Map could not load — check your connection'}}
let countryCardOrigin=null;
function currentCountryCardOrigin(){
 if(document.body.classList.contains('map-view'))return {type:'map'};
 const active=document.querySelector('.screen.active')?.dataset.screen||'home';
 return {type:'screen',screen:active,tripsView:document.body.classList.contains('trips-view')};
}
function openCountry(c,origin=null){const aliases={'Dominican Rep.':'Dominican Republic','S. Sudan':'South Sudan','eSwatini':'Eswatini'};c=aliases[c]||c;countryCardOrigin=origin||currentCountryCardOrigin();currentCountry=c;renderSheet();$('#countrySheet').classList.add('open');$('#sheetBackdrop').classList.add('open');$('#countrySheet').setAttribute('aria-hidden','false')}
async function closeSheet(){
 $('#countrySheet').classList.remove('open');$('#sheetBackdrop').classList.remove('open');$('#countrySheet').setAttribute('aria-hidden','true');
 const origin=countryCardOrigin;countryCardOrigin=null;
 if(origin?.type==='map'&&!document.body.classList.contains('map-view'))await showMap();
 else if(origin?.type==='screen'){
   document.body.classList.toggle('trips-view',!!origin.tripsView);
   $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen===origin.screen));
   $$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target===origin.screen));
 }
}
function attachTripRatingEvents(){$$('[data-trip-rating] button').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const wrap=b.closest('[data-trip-rating]'),t=state.trips.find(x=>String(x.id)===String(wrap?.dataset.tripRating));if(!t)return;t.rating=Number(b.dataset.rate)||0;save();toast(`Rated ${t.rating} out of 5 ★`)})}
function attachTripCardEvents(root=document){document.body.classList.remove('trip-selection-focus');let selected=new Set(),selectMode=false,longPressTimer=null,suppressOpen=false;const cards=()=>[...root.querySelectorAll?.('[data-open-trip]')||[]];let bar=root.querySelector?.('.trip-selection-bar');if(!bar&&root.querySelector?.('#tripList')){bar=document.createElement('div');bar.className='trip-selection-bar';bar.hidden=true;bar.innerHTML='<button type="button" class="trip-selection-cancel" aria-label="Cancel selection">×</button><button type="button" class="trip-selection-bin" aria-label="Send selected trips to recycle bin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button>';root.querySelector('#tripList').prepend(bar)}const sync=()=>{if(bar)bar.hidden=!selectMode;document.body.classList.toggle('trip-selection-focus',selectMode);cards().forEach(c=>c.classList.toggle('trip-selected',selected.has(c.dataset.openTrip)))};const toggle=card=>{const id=card.dataset.openTrip;selected.has(id)?selected.delete(id):selected.add(id);if(!selected.size)selectMode=false;sync()};const begin=card=>{selectMode=true;selected.add(card.dataset.openTrip);suppressOpen=true;sync();setTimeout(()=>suppressOpen=false,450)};cards().forEach(card=>{const open=e=>{if(e?.target?.closest?.('[data-trip-rating],[data-trip-country]')||selectMode||suppressOpen)return;const t=state.trips.find(x=>String(x.id)===String(card.dataset.openTrip));if(t)openTripEditor(t)};card.onclick=e=>{if(selectMode){e.preventDefault();toggle(card);return}open(e)};card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMode?toggle(card):open(e)}};let pressX=0,pressY=0;const down=e=>{if(e.target.closest('[data-trip-rating],[data-trip-country]'))return;pressX=e.clientX;pressY=e.clientY;clearTimeout(longPressTimer);longPressTimer=setTimeout(()=>begin(card),520)};const cancel=()=>clearTimeout(longPressTimer);const move=e=>{if(Math.hypot(e.clientX-pressX,e.clientY-pressY)>12)cancel()};card.addEventListener('pointerdown',down);card.addEventListener('pointerup',cancel);card.addEventListener('pointercancel',cancel);card.addEventListener('pointermove',move)});root.querySelectorAll?.('[data-trip-country]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();if(!selectMode)openCountry(b.dataset.tripCountry)});bar?.querySelector('.trip-selection-cancel')?.addEventListener('click',()=>{selected.clear();selectMode=false;sync()});bar?.querySelector('.trip-selection-bin')?.addEventListener('click',()=>{if(!selected.size)return;const n=selected.size;showWozzaConfirm(n===1?'Send trip to recycle bin?':'Send trips to recycle bin?',n===1?'Do you want to send this trip to the recycle bin?':'Do you want to send these trips to the recycle bin?',()=>{const ids=new Set(selected);const moving=state.trips.filter(t=>ids.has(String(t.id)));moving.forEach(t=>state.tripRecycleBin.unshift({...structuredClone(t),removedAt:Date.now()}));state.trips=state.trips.filter(t=>!ids.has(String(t.id)));selected.clear();selectMode=false;save();toast(`${n} trip${n===1?'':'s'} moved to recycle bin`)},'Send to recycle bin')});root.querySelectorAll?.('.rearview-toggle').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();rearviewExpanded=!rearviewExpanded;$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents()});root.querySelectorAll?.('.rearview-filter-toggle').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const p=b.closest('.rearview-category')?.querySelector('.rearview-filter-panel');if(p)p.hidden=!p.hidden});root.querySelectorAll?.('[data-rear-sort]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();rearviewSort=b.dataset.rearSort;$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents();document.querySelector('.rearview-filter-panel')?.removeAttribute('hidden')});root.querySelectorAll?.('[data-rear-year]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const y=b.dataset.rearYear;if(y==='all')rearviewYears.clear();else{rearviewYears.has(y)?rearviewYears.delete(y):rearviewYears.add(y)}$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents();document.querySelector('.rearview-filter-panel')?.removeAttribute('hidden')})}
function renderDepartureBoard(){const el=$('#departureBoard'),txt=$('#departureText');if(!el||!txt)return;const upcoming=state.trips.filter(t=>t.start&&countdownDays(t.start)>=0&&tripCountries(t).some(c=>state.statuses[c]==='going')).sort((a,b)=>a.start.localeCompare(b.start))[0];if(!upcoming){el.hidden=true;return}const days=countdownDays(upcoming.start),dest=tripCountries(upcoming).find(c=>state.statuses[c]==='going')||tripCountries(upcoming)[0]||upcoming.name;txt.textContent=`YOUR NEXT TRIP TO ${String(dest).toUpperCase()} ${days===0?'DEPARTING TODAY':days===1?'DEPARTING TOMORROW':`DEPARTING IN ${days} DAYS`}`;el.hidden=false}
function renderCitiesSheet(){const a=state.cities[currentCountry]||[];$('#cityList').innerHTML=a.length?a.map((x,i)=>`<div class="city-entry"><div><strong>${esc(x.name)}</strong><small>${(x.visits||[]).length?(x.visits||[]).map(monthPretty).join(' · '):'Date not set'}</small></div><button data-remove-city="${i}" aria-label="Remove destination">×</button></div>`).join(''):'<p class="muted">No destinations recorded yet.</p>';$('#cityList').querySelectorAll('[data-remove-city]').forEach(b=>b.onclick=()=>{state.cities[currentCountry].splice(+b.dataset.removeCity,1);save()})}
function addToCompanionBank(name){name=String(name||'').trim();if(!name)return '';const existing=state.companionBank.find(x=>x.toLowerCase()===name.toLowerCase());if(existing)return existing;state.companionBank.push(name);return name}
function renderCompanionStats(){const el=$('#companionStats');if(!el)return;const counts={};state.trips.forEach(t=>{const seen=new Set();(t.companions||[]).forEach(n=>{const name=String(n).trim();if(!name||seen.has(name.toLowerCase()))return;seen.add(name.toLowerCase());counts[name]=(counts[name]||0)+1})});for(const [country,names] of Object.entries(state.companions||{})){const linked=countryTrips(country),linkedNames=new Set(linked.flatMap(t=>t.companions||[]).map(n=>String(n).trim().toLowerCase()));for(const raw of names||[]){const name=String(raw).trim();if(!name||linkedNames.has(name.toLowerCase()))continue;counts[name]=(counts[name]||0)+1}}const rows=Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10);const max=rows[0]?.[1]||1;if(!rows.length){el.innerHTML='<p class="muted">Add companions to trips to build your chart.</p>';return}el.innerHTML=rows.map(([n,c],i)=>`<div class="companion-stat-row ${i>=5?'is-stat-hidden':''}"><span>${esc(n)}</span><div><i style="width:${Math.max(12,c/max*100)}%"></i></div><strong>${c} ${c===1?'trip':'trips'}</strong></div>`).join('')+(rows.length>5?'<button type="button" class="stats-show-more list-add" data-expanded="false" aria-label="Show more">＋</button>':'');const btn=el.querySelector('.stats-show-more');if(btn)btn.onclick=()=>{const expanding=btn.dataset.expanded!=='true';el.querySelectorAll('.companion-stat-row').forEach((r,i)=>r.classList.toggle('is-stat-hidden',!expanding&&i>=5));btn.dataset.expanded=expanding?'true':'false';btn.textContent=expanding?'−':'＋';btn.setAttribute('aria-label',expanding?'Show less':'Show more');el.closest('.passport-stats-carousel')?.classList.toggle('stats-expanded',expanding)}}function renderPassportCarouselStats(){const track=$('#passportStatsTrack');if(track){const carousel=track.closest('.passport-stats-carousel');if(carousel&&!carousel.previousElementSibling?.classList.contains('passport-charts-heading')){const h=document.createElement('h2');h.className='passport-section-heading passport-charts-heading';h.textContent='CHARTS';carousel.before(h)}}if(track&&!$('#highestRatedStatsSlide')){const slide=document.createElement('article');slide.id='highestRatedStatsSlide';slide.className='passport-stats-slide';slide.innerHTML='<h4>Highest rated</h4><div id="highestRatedStats" class="passport-mini-list"></div>';track.appendChild(slide)}if(track&&!$('#tripsPerYearStatsSlide')){const slide=document.createElement('article');slide.id='tripsPerYearStatsSlide';slide.className='passport-stats-slide trips-per-year-slide';slide.innerHTML='<h4>Stops per year</h4><div id="tripsPerYearChart" class="trips-per-year-chart"></div>';track.appendChild(slide)}const yearCounts={};state.trips.forEach(t=>{const stops=(t.destinations||[]).filter(Boolean);if(stops.length){stops.forEach(d=>{const raw=d.start||d.end||t.start||t.end||'';const m=String(raw).match(/(\d{4})/);if(m){const yr=Number(m[1]);yearCounts[yr]=(yearCounts[yr]||0)+1}})}else{const raw=t.start||t.end||'';const m=String(raw).match(/(\d{4})/);if(m){const yr=Number(m[1]);yearCounts[yr]=(yearCounts[yr]||0)+1}}});const tripYears=Object.keys(yearCounts).map(Number).sort((a,b)=>a-b);if(tripYears.length>1){for(let yr=tripYears[0];yr<=tripYears[tripYears.length-1];yr++)if(yearCounts[yr]===undefined)yearCounts[yr]=0}const tripYearRows=Object.entries(yearCounts).map(([yr,count])=>[Number(yr),count]).sort((a,b)=>a[0]-b[0]);const tripYearEl=$('#tripsPerYearChart');if(tripYearEl){if(!tripYearRows.length){tripYearEl.innerHTML='<p class="muted">Add dated stops to build your chart.</p>'}else{const W=560,H=270,L=44,R=20,T=32,B=42,max=Math.max(1,...tripYearRows.map(row=>row[1])),span=Math.max(1,tripYearRows.length-1),px=i=>L+i*(W-L-R)/span,py=value=>T+(max-value)*(H-T-B)/max,ticks=[0,Math.ceil(max/2),max].filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>a-b),guides=ticks.map(v=>{const gy=py(v);return `<g><line x1="${L}" y1="${gy}" x2="${W-R}" y2="${gy}"/><text class="trip-year-y-label" x="${L-12}" y="${gy+5}" text-anchor="end">${v}</text></g>`}).join(''),points=tripYearRows.map((row,i)=>`${px(i)},${py(row[1])}`).join(' '),area=`${L},${py(0)} ${points} ${W-R},${py(0)}`,labelEvery=tripYearRows.length>11?2:1,marks=tripYearRows.map((row,i)=>`<g><circle cx="${px(i)}" cy="${py(row[1])}" r="5"/>${row[1]>0?`<text class="trip-year-value" x="${px(i)}" y="${py(row[1])-12}" text-anchor="middle">${row[1]}</text>`:''}${(i%labelEvery===0||i===tripYearRows.length-1)?`<text class="trip-year-label" x="${px(i)}" y="${H-12}" text-anchor="middle">${row[0]}</text>`:''}</g>`).join('');tripYearEl.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Stops per year line chart"><defs><linearGradient id="stopYearArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#056b89" stop-opacity=".18"/><stop offset="100%" stop-color="#056b89" stop-opacity="0"/></linearGradient></defs><g class="trip-year-guides">${guides}</g><polygon class="trip-year-area" points="${area}"/><polyline class="trip-year-line" points="${points}"/>${marks}</svg>`}}const visited=countryRows('visited');const continentMap={Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova'],Africa:['Niger','Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria'],Asia:['China','Japan','Thailand','India','Vietnam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey'],"North America":['United States of America','United States','Canada','Mexico','Cuba','Jamaica'],"South America":['Brazil','Argentina','Chile','Peru','Colombia'],Oceania:['Australia','New Zealand','Fiji']};const continents=Object.entries(continentMap).map(([n,a])=>[n,visited.filter(c=>a.some(x=>sameCountry(x,c))).length]).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]);const countryCounts=visited.map(c=>[c,Math.max(1,countryTrips(c).length)]).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const cityCounts={};state.trips.forEach(t=>{(t.destinations||[]).forEach(d=>{const k=String(d.name||'').trim();if(k)cityCounts[k]=(cityCounts[k]||0)+1});Object.entries(t.cities||{}).forEach(([c,names])=>(names||[]).forEach(n=>{const k=String(n).trim();if(k)cityCounts[k]=(cityCounts[k]||0)+1}))});const cities=Object.entries(cityCounts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const bindMore=el=>{const btn=el?.querySelector('.stats-show-more');if(!btn)return;btn.onclick=()=>{const expanding=btn.dataset.expanded!=='true';el.querySelectorAll('.passport-mini-row').forEach((r,i)=>r.classList.toggle('is-stat-hidden',!expanding&&i>=5));btn.dataset.expanded=expanding?'true':'false';btn.textContent=expanding?'−':'＋';btn.setAttribute('aria-label',expanding?'Show less':'Show more');el.closest('.passport-stats-carousel')?.classList.toggle('stats-expanded',expanding)}};const fill=(id,rows,unit)=>{const el=$('#'+id);if(!el)return;if(!rows.length){el.innerHTML='<p class="muted">More travel data will appear here.</p>';return}el.innerHTML=rows.slice(0,10).map(([n,c],i)=>`<div class="passport-mini-row ${i>=5?'is-stat-hidden':''}"><b>${i+1}</b><span>${esc(n)}</span><strong>${c} ${c===1?unit:unit+'s'}</strong></div>`).join('')+(rows.length>5?'<button type="button" class="stats-show-more list-add" data-expanded="false" aria-label="Show more">＋</button>':'');bindMore(el)};fill('continentStats',continents,'country');fill('countryStats',countryCounts,'trip');fill('cityStats',cities,'visit');const rated=state.trips.filter(t=>Number(t.rating)>0).sort((a,b)=>(Number(b.rating)||0)-(Number(a.rating)||0)||String(a.name||'').localeCompare(String(b.name||'')));const ratedEl=$('#highestRatedStats');if(ratedEl){if(!rated.length)ratedEl.innerHTML='<p class="muted">Rate a trip to build your chart.</p>';else{ratedEl.innerHTML=rated.slice(0,10).map((t,i)=>`<div class="passport-mini-row highest-rated-row ${i>=5?'is-stat-hidden':''}"><b>${i+1}</b><span>${esc(t.name||'Untitled trip')}</span><strong>${Number(t.rating)} ★</strong></div>`).join('')+(rated.length>5?'<button type="button" class="stats-show-more list-add" data-expanded="false" aria-label="Show more">＋</button>':'');bindMore(ratedEl)}}}let passportStatsSlide=0;function setPassportStatsSlide(i){const track=$('#passportStatsTrack'),dots=$('#passportStatsDots');if(!track)return;const slides=[...track.querySelectorAll('.passport-stats-slide')],count=Math.max(1,slides.length);passportStatsSlide=(i+count)%count;track.style.transform='none';slides.forEach((slide,idx)=>slide.classList.toggle('is-active',idx===passportStatsSlide));if(dots)dots.textContent=slides.map((_,x)=>x===passportStatsSlide?'●':'○').join(' ')}
let passportStatsAutoTimer=0;function restartPassportStatsAuto(){clearInterval(passportStatsAutoTimer);const track=$('#passportStatsTrack');if(!track)return;passportStatsAutoTimer=setInterval(()=>{if(document.hidden||track.closest('.passport-stats-carousel')?.classList.contains('stats-expanded'))return;setPassportStatsSlide(passportStatsSlide+1)},6000)}
function renderCompanionBanks(){const selected=new Set(state.companions[currentCountry]||[]);const bank=$('#companionBank');if(bank)bank.innerHTML=state.companionBank.map(n=>`<button type="button" class="companion-tag ${selected.has(n)?'selected':''}" data-companion="${esc(n)}">${esc(n)}</button>`).join('');$$('#companionBank .companion-tag').forEach(b=>b.onclick=()=>{const n=b.dataset.companion;state.companions[currentCountry]??=[];state.companions[currentCountry]=state.companions[currentCountry].includes(n)?state.companions[currentCountry].filter(x=>x!==n):[...state.companions[currentCountry],n];save()})}

let countryGuideData=null,countryWeatherData=null;
const countryGuideAliases={
  'Dem. Rep. Congo':'Democratic Republic of the Congo',
  'Congo':'Republic of the Congo',
  'Central African Rep.':'Central African Republic',
  'Dominican Rep.':'Dominican Republic',
  'Eq. Guinea':'Equatorial Guinea',
  'S. Sudan':'South Sudan',
  'eSwatini':'Eswatini',
  'W. Sahara':'Western Sahara',
  'United States of America':'United States',
  'Bosnia and Herz.':'Bosnia and Herzegovina'
};
async function loadCountryGuideData(){
 if(countryGuideData&&countryWeatherData)return;
 const [g,w]=await Promise.all([
  fetch('country-guides.json').then(r=>{if(!r.ok)throw new Error('Country guide data unavailable');return r.json()}),
  fetch('country-typical-weather.json').then(r=>{if(!r.ok)throw new Error('Weather data unavailable');return r.json()})
 ]);
 countryGuideData=g;countryWeatherData=w;
}
function countryGuideName(name){return countryGuideAliases[name]||name}
function factRow(label,value){
 if(!value||!String(value).trim())return '';
 return `<div class="country-fact-row"><strong>${esc(label)}</strong><span>${esc(String(value))}</span></div>`
}
function factList(title,items){
 if(!Array.isArray(items)||!items.length)return '';
 return `<section class="country-fact-section"><h3>${esc(title)}</h3><ul>${items.map(x=>`<li>${esc(String(x))}</li>`).join('')}</ul></section>`
}

function properCaseCuisine(value){
 const s=String(value||'').trim();
 return s ? s.charAt(0).toUpperCase()+s.slice(1) : s;
}
function factListContent(items){
 if(!Array.isArray(items)||!items.length)return '<p class="country-facts-empty-inline">No information available yet.</p>';
 return `<ul class="country-facts-accordion-list">${items.map(x=>`<li>${esc(String(x))}</li>`).join('')}</ul>`;
}
function countryInfoAccordion(title,content){
 return `<section class="country-facts-accordion">
   <button type="button" class="country-facts-accordion-toggle" aria-expanded="false">
    <span>${esc(title)}</span><span class="country-facts-accordion-icon" aria-hidden="true">+</span>
   </button>
   <div class="country-facts-accordion-panel" hidden>${content||'<p class="country-facts-empty-inline">No information available yet.</p>'}</div>
  </section>`;
}

function weatherBlock(weather){
 if(!weather?.typicalWeather?.length)return '';
 return `<section class="country-fact-section country-weather-section"><h3>Typical weather</h3>
  <div class="country-weather-grid">${weather.typicalWeather.map(x=>`<div class="country-weather-card"><strong>${esc(x.months||'')}</strong><b>${esc(x.season||'')}</b><span>${Number.isFinite(x.typicalTemperatureC?.low)&&Number.isFinite(x.typicalTemperatureC?.high)?`${x.typicalTemperatureC.low}–${x.typicalTemperatureC.high}°C`:''}</span><p>${esc(x.summary||'')}</p></div>`).join('')}</div>
 </section>`
}
function ensureCountryGuidePhotoStyle(){
 if(document.getElementById('country-guide-photo-style'))return;
 const style=document.createElement('style');
 style.id='country-guide-photo-style';
 style.textContent=`
  .country-guide-photo{margin:0 0 18px;width:100%;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#eef3f3;box-shadow:0 8px 20px rgba(6,52,66,.10)}
  .country-guide-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
  #countrySheet .country-hero-minimal.has-country-photo{background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;position:relative!important}
  #countrySheet .country-hero-minimal.has-country-photo .flag img{box-shadow:0 6px 14px rgba(0,0,0,.18)}
  #countrySheet .sheet-close{position:absolute!important;z-index:999!important}
  #countrySheet .country-hero-minimal{position:relative!important;z-index:1}
  @media (orientation:landscape){
   body.map-view #countryInfoBody:has(> .country-guide-photo){display:grid;grid-template-columns:minmax(0,45%) minmax(0,55%);column-gap:18px;align-items:stretch}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-facts-key{grid-column:1;grid-row:1;grid-template-columns:1fr!important;align-content:center;margin:0}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-guide-photo{grid-column:2;grid-row:1;margin:0!important;aspect-ratio:auto!important;min-height:180px;max-height:230px;height:100%}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-facts-accordion{grid-column:1 / -1}
  }
 `;
 document.head.appendChild(style);
}
async function openCountryInfo(){
 ensureCountryGuidePhotoStyle();
 const dialog=$('#countryInfoDialog'),body=$('#countryInfoBody');
 if(!dialog||!body)return;
 const name=countryGuideName(currentCountry);
 $('#countryInfoTitle').textContent=currentCountry;
 const u=flagUrl(currentCountry);
 $('#countryInfoFlag').innerHTML=u?`<img src="${u}" alt="${esc(currentCountry)} flag">`:'';
 body.innerHTML='<p class="country-facts-loading">Loading country guide…</p>';
 if(!dialog.open)dialog.showModal();
 try{
  await loadCountryGuideData();
  const guideName=name==='Turkey'?'Türkiye':name;
  const guide=countryGuideData.find(x=>x.country===guideName);
  const weather=countryWeatherData.find(x=>x.country===guideName);
  if(name==='Antarctica'){
   body.innerHTML=`<figure class="country-guide-photo"><img src="antarctica-country-hero.jpg" alt="Expedition ship in Antarctic waters"></figure>
   <section class="country-facts-key">${factRow('Capital','None')}${factRow('Permanent population','None')}${factRow('Governance','Antarctic Treaty System')}${factRow('Visitor season','October to April')}${factRow('Getting there','Primarily expedition ship')}</section>
   ${countryInfoAccordion('LANDSCAPE',factListContent(['Ice sheet, mountains, glaciers and ice shelves']))}
   ${countryInfoAccordion('WILDLIFE',factListContent(['Penguins, seals, whales and seabirds']))}
   ${countryInfoAccordion('GOOD TO KNOW',factListContent(['Antarctica is not owned by any one nation. The Antarctic Treaty System supports peaceful use and scientific cooperation.','Tourism is carefully managed to help protect the environment.']))}`;
   return;
  }
  if(name==='Greenland'){
   body.innerHTML=`<figure class="country-guide-photo"><img src="greenland-country-hero.jpg" alt="Iceberg and expedition boat in Greenland"></figure>
   <section class="country-facts-key">${factRow('Capital','Nuuk')}${factRow('Languages','Greenlandic (official), Danish widely used')}${factRow('Currency','Danish krone (DKK)')}${factRow('Plug sockets','C, E, F and K')}${factRow('Driving side','Right')}</section>
   ${countryInfoAccordion('WEATHER',factListContent(['Arctic climate with cool summers and very cold winters. Conditions vary considerably by region and season.']))}
   ${countryInfoAccordion('INTERESTING FACTS',factListContent(['Greenland is the world’s largest island that is not a continent.','Almost 80% of Greenland is covered by the ice cap and glaciers.','Greenland is self-governing within the Kingdom of Denmark.']))}
   ${countryInfoAccordion('LANDMARKS',factListContent(['Ilulissat Icefjord','Nuuk','Disko Bay','Greenland Ice Sheet']))}
   ${countryInfoAccordion('FAMOUS CUISINE',factListContent(['Suaasat, a traditional Greenlandic soup','Fish and seafood','Reindeer and musk ox']))}`;
   return;
  }
  if(!guide){
   body.innerHTML='<p class="country-facts-empty">Country information is not available yet.</p>';
   return;
  }
  const currency=(guide.currency||[]).map(x=>x.name?`${x.name}${x.code?` (${x.code})`:''}`:x.code).filter(Boolean).join(', ');
  const guidePhotos={Belgium:{src:'belgium-country-guide.jpg',alt:'Bruges canal and historic buildings in Belgium'},France:{src:'france-country-hero.jpg',alt:'Eiffel Tower in Paris, France',caption:'Champ de Mars, Eiffel Tower, Paris'},Antarctica:{src:'antarctica-country-hero.jpg',alt:'Expedition ship in Antarctic waters'},Morocco:{src:'morocco-country-hero.jpg',alt:'Camel on the Moroccan coast'},Portugal:{src:'portugal-country-hero.jpg',alt:'Canal and traditional boats in Portugal'},Switzerland:{src:'switzerland-country-hero.jpg',alt:'Historic bridge and waterfront in Switzerland'},Luxembourg:{src:'luxembourg-country-hero.jpg',alt:'Luxembourg cityscape'},Greece:{src:'greece-country-hero.jpg',alt:'Blue-domed church overlooking the sea in Greece'},Netherlands:{src:'netherlands-country-hero.jpg',alt:'Amsterdam waterfront at night'},Poland:{src:'poland-country-hero.jpg',alt:'Horse-drawn carriages in Poland'},Italy:{src:'italy-country-hero.jpg',alt:'Venice Grand Canal and historic skyline'},Germany:{src:'germany-country-hero.jpg',alt:'Brandenburg Gate and Berlin TV Tower'},Spain:{src:'spain-country-hero.jpg',alt:'Traditional Spanish festival dress in Valencia'},Denmark:{src:'denmark-country-hero.jpg',alt:'Nyhavn waterfront in Copenhagen'},Ireland:{src:'ireland-country-hero.jpg',alt:'Irish coastal cliffs and countryside'},'United Kingdom':{src:'united-kingdom-country-hero.jpg',alt:'Tower Bridge illuminated at night in London'},Norway:{src:'norway-country-hero.jpg',alt:'Norwegian fjord with mountains and ferry'},Hungary:{src:'hungary-country-hero.jpg',alt:'Hungarian Parliament Building in Budapest'},Austria:{src:'austria-country-hero.jpg',alt:'Hallstatt lakeside village and mountains in Austria'},Russia:{src:'russia-country-hero.jpg',alt:'St Basils Cathedral and Kremlin in Moscow'},China:{src:'china-country-hero.jpg',alt:'Great Wall of China through mountain landscape'},Japan:{src:'japan-country-hero.jpg',alt:'Neon-lit street in Shinjuku, Tokyo'},'Canada':{src:'canada-country-hero.jpg',alt:'Toronto skyline and CN Tower in Canada'},'Mexico':{src:'mexico-country-hero.jpg',alt:'Traditional procession and dress in Mexico'},'Brazil':{src:'brazil-country-hero.jpg',alt:'Rio de Janeiro coastline in Brazil'},'Jamaica':{src:'jamaica-country-hero.jpg',alt:'Beach and calm bay in Jamaica'},'Venezuela':{src:'venezuela-country-hero.jpg',alt:'Caribbean coastline and mangroves in Venezuela'},'Greenland':{src:'greenland-country-hero.jpg',alt:'Iceberg and expedition boat in Greenland'},'Iceland':{src:'iceland-country-hero.jpg',alt:'Reykjavik and snowy mountains in Iceland'},'Australia':{src:'australia-country-hero.jpg',alt:'Sydney Opera House and Harbour Bridge in Australia'},'Egypt':{src:'egypt-country-hero.jpg',alt:'Pyramids of Giza and camel in Egypt'},'India':{src:'india-country-hero.jpg',alt:'Taj Mahal in Agra, India'},'Rwanda':{src:'rwanda-country-hero.jpg',alt:'Green rolling hills and cultivated landscape in Rwanda'},'Sudan':{src:'sudan-country-hero.jpg',alt:'Nubian pyramid in the Sudanese desert'},'United Arab Emirates':{src:'united-arab-emirates-country-hero.jpg',alt:'Sheikh Zayed Grand Mosque in Abu Dhabi'},'Saudi Arabia':{src:'saudi-arabia-country-hero.jpg',alt:'Kaaba at Masjid al-Haram in Mecca, Saudi Arabia'},Turkey:{src:'turkey-country-hero.jpg',alt:'Hagia Sophia in Istanbul, Turkey'},Iran:{src:'iran-country-hero.jpg',alt:'Azadi Tower in Tehran, Iran'},Iraq:{src:'iraq-country-hero.png',alt:'Malwiya Minaret at the Great Mosque of Samarra, Iraq'},'South Africa':{src:'south-africa-country-hero.jpg',alt:'Cape Town coastline beneath the Twelve Apostles mountain range, South Africa'},'Bosnia and Herzegovina':{src:'bosnia-and-herzegovina-country-hero.jpg',alt:'Mostar and Stari Most in Bosnia and Herzegovina'},Croatia:{src:'croatia-country-hero.jpg',alt:'Split waterfront and mountains in Croatia'},Czechia:{src:'czechia-country-hero.jpg',alt:'Prague Castle and Charles Bridge in Czechia'},Slovenia:{src:'slovenia-country-hero.jpg',alt:'Lake Bled in Slovenia'},Slovakia:{src:'slovakia-country-hero.jpg',alt:'Calvary of Banska Stiavnica in Slovakia'},Romania:{src:'romania-country-hero.jpg',alt:'Palace of Culture in Iasi, Romania'},Serbia:{src:'serbia-country-hero.jpg',alt:'Zemun and the Danube in Belgrade, Serbia'},Montenegro:{src:'montenegro-country-hero.jpg',alt:'Bay of Kotor in Montenegro'},Sweden:{src:'sweden-country-hero.jpg',alt:'Stockholm waterfront in Sweden'},Finland:{src:'finland-country-hero.jpg',alt:'Northern Lights over Finland'},'United States':{src:'united-states-country-hero.jpg',alt:'Statue of Liberty and Manhattan skyline in New York'},Vietnam:{src:'vietnam-country-hero.jpg',alt:'Golden rice terraces of Mù Cang Chải, northern Vietnam',caption:'Golden rice terraces of Mù Cang Chải, northern Vietnam.'},Pakistan:{src:'pakistan-country-hero.jpg',alt:'Mountain landscape in northern Pakistan',caption:'The spectacular mountain landscapes of northern Pakistan.'}};
  const guidePhoto=guidePhotos[name];
  const countryPhoto=guidePhoto ? `<figure class="country-guide-photo"${guidePhoto.caption?` data-caption="${esc(guidePhoto.caption)}"`:''}><img src="${guidePhoto.src}" alt="${guidePhoto.alt}"></figure>` : '';
  body.innerHTML=`
   ${countryPhoto}
   <section class="country-facts-key">
    ${factRow('Capital',guide.capital)}
    ${factRow('Languages',(guide.officialLanguages||[]).join(', '))}
    ${factRow('Currency',currency)}
    ${factRow('Plug sockets',(guide.plugSocketTypes||[]).join(', '))}
    ${factRow('Driving side',guide.drivingSide?guide.drivingSide.charAt(0).toUpperCase()+guide.drivingSide.slice(1):'')}
   </section>
   ${countryInfoAccordion('WEATHER',weatherBlock(weather))}
   ${countryInfoAccordion('INTERESTING FACTS',factListContent(guide.interestingFacts))}
   ${countryInfoAccordion('LANDMARKS',factListContent(guide.notableLandmarks))}
   ${countryInfoAccordion('FAMOUS CUISINE',factListContent((guide.wellKnownCuisine||[]).map(properCaseCuisine)))}
  `;
 }catch(err){
  body.innerHTML='<p class="country-facts-empty">Country information could not be loaded.</p>';
 }
}
function closeCountryInfo(){const d=$('#countryInfoDialog');if(d?.open)d.close()}

function renderSheet(){
 ensureCountryGuidePhotoStyle();
 const s=state.statuses[currentCountry],u=flagUrl(currentCountry),trips=countryTrips(currentCountry),cities=countryCityDisplay(currentCountry),companions=countryCompanions(currentCountry),rating=countryRating(currentCountry);
 const hero=$('#countrySheet .country-hero-minimal'),heroPhotos={Belgium:'belgium-country-guide.jpg',France:'france-country-hero.jpg',Antarctica:'antarctica-country-hero.jpg',Morocco:'morocco-country-hero.jpg',Portugal:'portugal-country-hero.jpg',Switzerland:'switzerland-country-hero.jpg',Luxembourg:'luxembourg-country-hero.jpg',Greece:'greece-country-hero.jpg',Netherlands:'netherlands-country-hero.jpg',Poland:'poland-country-hero.jpg',Italy:'italy-country-hero.jpg',Germany:'germany-country-hero.jpg',Spain:'spain-country-hero.jpg',Denmark:'denmark-country-hero.jpg',Ireland:'ireland-country-hero.jpg','United Kingdom':'united-kingdom-country-hero.jpg',Norway:'norway-country-hero.jpg',Hungary:'hungary-country-hero.jpg',Austria:'austria-country-hero.jpg',Russia:'russia-country-hero.jpg',China:'china-country-hero.jpg',Japan:'japan-country-hero.jpg','Canada':'canada-country-hero.jpg','Mexico':'mexico-country-hero.jpg','Brazil':'brazil-country-hero.jpg','Jamaica':'jamaica-country-hero.jpg','Venezuela':'venezuela-country-hero.jpg','Greenland':'greenland-country-hero.jpg','Iceland':'iceland-country-hero.jpg','Australia':'australia-country-hero.jpg','Egypt':'egypt-country-hero.jpg','India':'india-country-hero.jpg','Rwanda':'rwanda-country-hero.jpg','Sudan':'sudan-country-hero.jpg','United Arab Emirates':'united-arab-emirates-country-hero.jpg','Saudi Arabia':'saudi-arabia-country-hero.jpg',Turkey:'turkey-country-hero.jpg',Iran:'iran-country-hero.jpg',Iraq:'iraq-country-hero.png','South Africa':'south-africa-country-hero.jpg','Bosnia and Herzegovina':'bosnia-and-herzegovina-country-hero.jpg',Croatia:'croatia-country-hero.jpg',Czechia:'czechia-country-hero.jpg',Slovenia:'slovenia-country-hero.jpg',Slovakia:'slovakia-country-hero.jpg',Romania:'romania-country-hero.jpg',Serbia:'serbia-country-hero.jpg',Montenegro:'montenegro-country-hero.jpg',Sweden:'sweden-country-hero.jpg',Finland:'finland-country-hero.jpg','United States':'united-states-country-hero.jpg',Vietnam:'vietnam-country-hero.jpg',Pakistan:'pakistan-country-hero.jpg'},heroPhoto=heroPhotos[countryGuideName(currentCountry)]||'';if(hero){hero.classList.toggle('has-country-photo',!!heroPhoto);hero.style.backgroundImage=heroPhoto?`linear-gradient(90deg,rgba(0,126,143,.96) 0%,rgba(0,143,157,.88) 42%,rgba(0,116,137,.56) 100%),url("${heroPhoto}")`:'';hero.style.backgroundPosition=countryGuideName(currentCountry)==='France'?'center 54%':'center'}
 const countryFlagEl=$('#countryFlag');countryFlagEl.innerHTML=u?`<img src="${u}" alt="">`:'◉';const countryNameEl=$('#countryName');countryNameEl.textContent=currentCountry;countryNameEl.setAttribute('role','link');countryNameEl.setAttribute('tabindex','0');countryNameEl.setAttribute('title',`Search Google for ${currentCountry}`);const googleCountry=()=>window.open(`https://www.google.com/search?q=${encodeURIComponent(currentCountry)}`,'_blank','noopener');countryNameEl.onclick=googleCountry;countryNameEl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();googleCountry()}};if(countryFlagEl){countryFlagEl.setAttribute('role','link');countryFlagEl.setAttribute('tabindex','0');countryFlagEl.setAttribute('title',`Search Google for ${currentCountry}`);countryFlagEl.onclick=googleCountry;countryFlagEl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();googleCountry()}}};
 const pills=$('#countrySummaryPills');if(pills)pills.innerHTML=`<span><b>${trips.length}</b> ${trips.length===1?'trip':'trips'}</span><span><b>${cities.length}</b> ${cities.length===1?'place':'places'}</span><span><b>${companions.length}</b> ${companions.length===1?'companion':'companions'}</span>`;
 const cr=$('#countryRatingSummary');if(cr)cr.innerHTML=rating?`<span aria-label="Country rating ${rating.toFixed(1)} out of 5">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5-Math.round(rating))}</span>`:'';const infoBtn=$('#countryInfoButton');if(infoBtn){infoBtn.onclick=e=>{e.preventDefault();openCountryInfo()}}
 $$('.choice-grid button').forEach(b=>{const selected=countryHasStatus(currentCountry,b.dataset.status);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected?'true':'false');const tick=b.querySelector('.status-tick');if(tick)tick.textContent=selected?'✓':'';const bucket=b.querySelector('.status-bucket');if(bucket)bucket.classList.toggle('filled',selected);const clock=b.querySelector('.status-clock');if(clock)clock.classList.toggle('filled',selected)});
 $('#countryTrips').innerHTML=trips.length?trips.map(t=>{const td=orderedTripDates(t),dates=td.start?`${pretty(td.start)}${td.end&&td.end!==td.start?' – '+pretty(td.end):''}`:'Dates not set',r=Math.max(0,Math.min(5,Number(t.rating)||0)),days=countdownDays(td.start),count=days===null&&tripIsOnHorizon(t)?'PLANNING':days===0?'TODAY ✈':days>0?`${days} DAYS TO GO`:'';return `<div class="country-trip-card" data-open-trip="${esc(t.id||'')}" role="button" tabindex="0"><div class="country-trip-copy"><strong>${esc(t.name)}</strong><p>${dates}</p>${r?`<div class="country-trip-rating" aria-label="${r} out of 5 stars">${'★'.repeat(r)}${'☆'.repeat(5-r)}</div>`:''}</div><div class="country-trip-side">${count?`<span class="countdown-badge country-trip-countdown">${count}</span>`:''}<span class="country-trip-chevron" aria-hidden="true">›</span></div></div>`}).join(''):'<p class="muted country-no-trips">No trips for this country yet.</p>';
 const info=$('#countryInfoSummary');if(info){const cityNames=cities.map(x=>x.name),parts=[];if(cityNames.length)parts.push(`<div><strong>Destinations</strong><p>${cityNames.map(esc).join(' · ')}</p></div>`);if(companions.length)parts.push(`<div><strong>Travel companions</strong><p>${companions.map(esc).join(' · ')}</p></div>`);info.innerHTML=`<h3>SUMMARY</h3>${parts.join('')}`}
 attachTripCardEvents($('#countryTrips'));
}
function toast(t,action=null){const el=$('#toast');el.textContent=t;el.style.pointerEvents=action?'auto':'none';el.style.touchAction=action?'manipulation':'';Object.assign(el.style,{background:'#e3bd4d',color:'#17213f',border:'none',borderRadius:'999px',fontWeight:'800',boxShadow:'0 5px 16px rgba(15,56,70,.22)',padding:'12px 22px',maxWidth:'calc(100vw - 40px)',textAlign:'center'});el.classList.add('show');el.onpointerdown=action?e=>{e.preventDefault();e.stopPropagation()}:null;el.onclick=action?e=>{e.preventDefault();e.stopPropagation();action();el.classList.remove('show');el.style.pointerEvents='none';el.onpointerdown=null;el.onclick=null}:null;clearTimeout(el._timer);el._timer=setTimeout(()=>{el.classList.remove('show');el.style.pointerEvents='none';el.onpointerdown=null;el.onclick=null},action?4200:1800)}
$$('.choice-grid button').forEach(b=>b.onclick=()=>{const status=b.dataset.status,was=countryHasStatus(currentCountry,status);if(status==='bucket'&&!was){setCountryStatus(currentCountry,'bucket',true)}else setCountryStatus(currentCountry,status,!was);if(status==='visited'&&!was){state.visitHistory=state.visitHistory.filter(c=>c!==currentCountry);state.visitHistory.push(currentCountry)}save()});
async function leaveMapMode(){try{const m=d3.select('#worldMap');m.selectAll('.portrait-world-copy').remove();m.select('#portraitOcean').style('display','none')}catch(e){}document.body.classList.remove('map-view');resetMapZoom(false);try{screen.orientation?.unlock?.()}catch(e){}try{if(document.fullscreenElement)await document.exitFullscreen()}catch(e){}}

// Home <-> World View morph. This deliberately does not alter either animation system:
// the Home planes and World View clouds keep their existing markup, timing and styling.
// The browser transitions the existing map card between its two layouts as one shared element.
async function withWorldMapMorph(update){
 const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(!document.startViewTransition||reduce){await update();return}
 document.documentElement.classList.add('world-map-morphing');
 try{
  const transition=document.startViewTransition(()=>update());
  await transition.finished;
 }catch(e){await update()}
 finally{document.documentElement.classList.remove('world-map-morphing')}
}
async function showHome(){
 const fromMap=document.body.classList.contains('map-view');
 document.body.classList.remove('trips-view');
 const update=async()=>{await leaveMapMode();$$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target==='home'));$$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));applyWorldViewName();countrySlide=0;renderCountryLists();resetMapZoom(false);window.scrollTo({top:0})};
 if(fromMap)await withWorldMapMorph(update);else await update();
 requestAnimationFrame(()=>requestAnimationFrame(()=>setCountrySlide(0,false)));
}
async function showMap(){
 if(document.body.classList.contains('map-view'))return;
 const update=()=>{document.body.classList.remove('trips-view');document.body.classList.add('map-view');$$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target==='map'));$$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));const bar=document.querySelector('.topbar');if(bar)requestAnimationFrame(()=>document.documentElement.style.setProperty('--worldview-header-height',bar.getBoundingClientRect().height+'px'));window.scrollTo({top:0});ensureWorldViewClouds();if(window.matchMedia('(orientation: portrait)').matches&&mapZoomBehavior){const svg=d3.select('#worldMap'),k=1.52,t=d3.zoomIdentity.translate((1000-1000*k)/2,(520-520*k)/2).scale(k);mapZoomBehavior.scaleExtent([1.15,56]);svg.call(mapZoomBehavior.transform,t)}else if(mapZoomBehavior){mapZoomBehavior.scaleExtent([1,56])}};
 await withWorldMapMorph(update);
 try{await screen.orientation?.lock?.('landscape')}catch(e){}
}
async function showSection(target){
  if(target==='home')return showHome();
  if(target==='map')return showMap();
  const update=async()=>{
    await leaveMapMode();
    document.body.classList.toggle('trips-view',target==='trips');
    $$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target===target));
    $$('.screen').forEach(x=>{x.style.transition='';x.style.opacity='';x.classList.toggle('active',x.dataset.screen===target)});
    window.scrollTo({top:0,behavior:'auto'});
  };
  await withWorldMapMorph(update);
}
window.addEventListener('resize',()=>{if(document.body.classList.contains('map-view')){const bar=document.querySelector('.topbar');if(bar)document.documentElement.style.setProperty('--worldview-header-height',bar.getBoundingClientRect().height+'px')}});

// WozzaWatch-style top pull navigation: when already at the top, a deliberate
// downward pull cycles the four top-level WozzaWorld sections and suppresses
// the browser/PWA pull-to-refresh gesture.
function initTopPullSectionCycle(){
  if(window.__wozzaTopPullSectionCycle)return;
  window.__wozzaTopPullSectionCycle=true;
  const order=['home','map','trips','me'];
  const threshold=92;
  let startY=0,startX=0,pulling=false,distance=0;
  const current=()=>{
    if(document.body.classList.contains('map-view'))return'map';
    const active=document.querySelector('.header-nav-item.active')?.dataset?.target;
    return order.includes(active)?active:null;
  };
  const blocked=target=>!!target?.closest?.('dialog[open],.sheet.open,.trip-selection-bar,input,textarea,select,[contenteditable="true"]');
  // On the World Map, a downward drag while zoomed in belongs to D3 map panning,
  // not top-level navigation. Keep pull-to-cycle available at the normal map view.
  const mapIsZoomedIn=()=>{
    if(!document.body.classList.contains('map-view'))return false;
    try{
      const node=document.querySelector('#worldMap');
      if(!node||typeof d3==='undefined')return false;
      const k=d3.zoomTransform(node).k||1;
      const normalK=window.matchMedia('(orientation: portrait)').matches?1.52:1;
      return k>normalK+0.06;
    }catch(e){return false;}
  };
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1||blocked(e.target)||!current()||mapIsZoomedIn())return;
    const t=e.touches[0];
    startY=t.clientY;startX=t.clientX;distance=0;pulling=true;
  },{passive:true,capture:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling||e.touches.length!==1)return;
    const t=e.touches[0],dy=t.clientY-startY,dx=t.clientX-startX;
    if(dy<=0){distance=0;return;}
    if(window.scrollY>1||Math.abs(dx)>dy*.85){pulling=false;distance=0;return;}
    distance=dy;
    e.preventDefault();
  },{passive:false,capture:true});
  const finish=()=>{
    if(!pulling)return;
    pulling=false;
    const from=current(),travel=distance;
    distance=0;
    if(travel<threshold||!from)return;
    const next=order[(order.indexOf(from)+1)%order.length];
    showSection(next);
  };
  window.addEventListener('touchend',finish,{passive:true,capture:true});
  window.addEventListener('touchcancel',()=>{pulling=false;distance=0;},{passive:true,capture:true});
}
initTopPullSectionCycle();

$$('.header-nav-item').forEach(b=>b.onclick=()=>showSection(b.dataset.target));$('#homeLogo').onclick=null;$('#mapClose').onclick=showHome;$('#mapStage').addEventListener('click',()=>{if(!document.body.classList.contains('map-view'))showMap()});$('#sheetClose').onclick=closeSheet;$('#sheetBackdrop').onclick=closeSheet;
const countryInfoDialog=$('#countryInfoDialog');
$('#countryInfoClose').onclick=closeCountryInfo;
$('#countryInfoBody')?.addEventListener('click',e=>{
 const btn=e.target.closest('.country-facts-accordion-toggle'); if(!btn)return;
 const panel=btn.nextElementSibling,open=btn.getAttribute('aria-expanded')==='true';
 btn.setAttribute('aria-expanded',String(!open));
 btn.querySelector('.country-facts-accordion-icon').textContent=open?'+':'−';
 panel.hidden=open;
});
countryInfoDialog?.addEventListener('click',e=>{if(e.target===countryInfoDialog)closeCountryInfo()});
$('#sheetBackdrop').onclick=closeSheet;
let wozzaSelectOverlay=null;
function syncWozzaSelect(select){const btn=select?._wozzaButton;if(!btn)return;const opt=select.options[select.selectedIndex];btn.textContent=opt?.textContent||'';btn.classList.toggle('placeholder',!select.value)}
let wozzaSelectHistory=false;function closeWozzaSelect(fromHistory=false){wozzaSelectOverlay?.remove();wozzaSelectOverlay=null;document.body.classList.remove('wozza-select-open');if(wozzaSelectHistory&&!fromHistory){wozzaSelectHistory=false;history.back()}else if(fromHistory)wozzaSelectHistory=false}
window.addEventListener('popstate',()=>{if(wozzaSelectOverlay)closeWozzaSelect(true)});
function openWozzaSelect(select){if(wozzaSelectOverlay)closeWozzaSelect();const overlay=document.createElement('div');overlay.className='wozza-select-overlay';const panel=document.createElement('div');panel.className='wozza-select-panel';const title=document.createElement('div');title.className='wozza-select-title';title.textContent=select.getAttribute('aria-label')||'Choose an option';const closeBtn=document.createElement('button');closeBtn.type='button';closeBtn.className='wozza-select-close';closeBtn.setAttribute('aria-label','Close options');closeBtn.textContent='×';closeBtn.onclick=()=>closeWozzaSelect();panel.appendChild(title);panel.appendChild(closeBtn);[...select.options].forEach((opt,i)=>{const b=document.createElement('button');b.type='button';b.className='wozza-select-option'+(i===select.selectedIndex?' selected':'')+(opt.value?'':' placeholder-option');b.textContent=opt.textContent;b.onclick=()=>{select.selectedIndex=i;select.dispatchEvent(new Event('change',{bubbles:true}));syncWozzaSelect(select);closeWozzaSelect()};panel.appendChild(b)});overlay.appendChild(panel);overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)closeWozzaSelect()});const host=select.closest('dialog[open]')||document.body;host.appendChild(overlay);wozzaSelectOverlay=overlay;document.body.classList.add('wozza-select-open');requestAnimationFrame(()=>overlay.classList.add('shown'))}
function enhanceWozzaSelect(select){if(!select||select.dataset.wozzaEnhanced)return;select.dataset.wozzaEnhanced='1';const wrap=document.createElement('span');wrap.className='wozza-select-wrap';select.parentNode.insertBefore(wrap,select);wrap.appendChild(select);const btn=document.createElement('button');btn.type='button';btn.className='wozza-select-button';btn.setAttribute('aria-label',select.getAttribute('aria-label')||'Open options');btn.onclick=()=>openWozzaSelect(select);wrap.appendChild(btn);select.classList.add('wozza-native-select');select._wozzaButton=btn;syncWozzaSelect(select)}
function showWozzaAlert(message,title='WozzaWorld'){document.querySelector('.wozza-alert-overlay')?.remove();const overlay=document.createElement('div');overlay.className='wozza-alert-overlay';overlay.innerHTML=`<div class="wozza-alert-card" role="alertdialog" aria-modal="true"><strong>${esc(title)}</strong><p>${esc(message)}</p><button type="button">OK</button></div>`;const close=()=>overlay.remove();overlay.querySelector('button').onclick=close;overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)close()});const host=document.querySelector('#tripDialog[open]')||document.querySelector('dialog[open]')||document.body;host.appendChild(overlay);overlay.querySelector('button').focus()}
function showWozzaConfirm(title,message,onConfirm,confirmText='Confirm'){document.querySelector('.wozza-alert-overlay')?.remove();const overlay=document.createElement('div');overlay.className='wozza-alert-overlay';overlay.innerHTML=`<div class="wozza-alert-card" role="alertdialog" aria-modal="true"><strong>${esc(title)}</strong><p>${esc(message)}</p><div class="wozza-confirm-actions"><button type="button" class="secondary">Cancel</button><button type="button" class="danger">${esc(confirmText)}</button></div></div>`;const close=()=>overlay.remove();overlay.querySelector('.secondary').onclick=close;overlay.querySelector('.danger').onclick=()=>{close();onConfirm?.()};overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)close()});(document.querySelector('#tripDialog[open]')||document.querySelector('dialog[open]')||document.body).appendChild(overlay)}
const DESTINATION_TYPES=['City','Town','Region','Island','Other'];
const TRAVEL_MODES=['Plane','Train','Cruise','Ferry','Car','Campervan','Motorhome','Narrowboat','Coach / Bus','Motorbike','Bicycle','On foot','Other'];
const CURATED_DESTINATIONS=[{name:'Algarve',type:'Region',country:'Portugal'},{name:'Madeira',type:'Island',country:'Portugal'},{name:'Azores',type:'Island',country:'Portugal'},{name:'Tuscany',type:'Region',country:'Italy'},{name:'Sicily',type:'Island',country:'Italy'},{name:'Sardinia',type:'Island',country:'Italy'},{name:'Mallorca',type:'Island',country:'Spain'},{name:'Ibiza',type:'Island',country:'Spain'},{name:'Canary Islands',type:'Island',country:'Spain'},{name:'Costa del Sol',type:'Region',country:'Spain'},{name:'Lake District',type:'Region',country:'United Kingdom'},{name:'Cotswolds',type:'Region',country:'United Kingdom'},{name:'Scottish Highlands',type:'Region',country:'United Kingdom'},{name:'Cornwall',type:'Region',country:'United Kingdom'},{name:'Provence',type:'Region',country:'France'},{name:'French Riviera',type:'Region',country:'France'},{name:'Bavaria',type:'Region',country:'Germany'},{name:'Santorini',type:'Island',country:'Greece'},{name:'Crete',type:'Island',country:'Greece'},{name:'Bali',type:'Island',country:'Indonesia'}];
function knownDestination(name,country=''){const q=String(name||'').trim().toLocaleLowerCase();return [...CURATED_DESTINATIONS,...(state.customDestinations||[])].find(d=>d.name.toLocaleLowerCase()===q&&(!country||!d.country||sameCountry(d.country,country)))||null}
function destinationSuggestions(query,country=''){const q=String(query||'').trim().toLocaleLowerCase();if(!q)return[];const custom=state.customDestinations||[],old=(state.cities[country]||[]).map(x=>({name:x.name,type:'City',country}));return [...CURATED_DESTINATIONS,...custom,...old].filter(d=>(!country||!d.country||sameCountry(d.country,country))&&d.name.toLocaleLowerCase().includes(q)).filter((d,i,a)=>a.findIndex(x=>x.name.toLocaleLowerCase()===d.name.toLocaleLowerCase()&&sameCountry(x.country||country,d.country||country))===i).slice(0,6)}
function countryOptions(selected=''){const pool=(availableCountries.length?availableCountries:Object.keys(flags)).slice().sort((a,b)=>a.localeCompare(b));return `<option value="">Choose a country...</option>${pool.map(c=>`<option${sameCountry(c,selected)?' selected':''}>${esc(c)}</option>`).join('')}`}
function destinationTypeOptions(selected=''){return `<option value="">Choose a destination type...</option>${DESTINATION_TYPES.map(t=>`<option value="${t}"${t===selected?' selected':''}>${t}</option>`).join('')}`}
function travelModeOptions(selected=''){const raw=String(selected||''),lower=raw.toLowerCase();const normalized=lower==='sea'?'Ferry':lower==='air'?'Plane':raw;return `<option value="">Choose transport...</option>${TRAVEL_MODES.map(t=>`<option value="${t}"${t===normalized?' selected':''}>${t}</option>`).join('')}`}
function tripCountryChoices(){return [...new Set($$('#tripDestinationStops .trip-stop-country').map(x=>canonicalCountry(x.value)||x.value.trim()).filter(Boolean))]}
function applyDestinationSuggestion(row,d){row.querySelector('.trip-destination-name').value=d.name;row.querySelector('.trip-destination-name').dataset.selected=d.name;const country=row.querySelector('.trip-stop-country');if(d.country&&(!country.value||sameCountry(country.value,d.country))){country.value=d.country;syncWozzaSelect(country)}selectDestinationType(row,d.type||'Other');row.querySelector('.destination-suggestions').hidden=true}
function selectDestinationType(row,type){row.dataset.destinationType=type;row.querySelectorAll('.destination-type-chip').forEach(b=>{const on=b.dataset.type===type;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))})}
function renderDestinationSuggestions(row){const input=row.querySelector('.trip-destination-name'),box=row.querySelector('.destination-suggestions'),country=row.querySelector('.trip-stop-country').value,q=input.value.trim();if(!q){box.hidden=true;return}const matches=destinationSuggestions(q,country);box.innerHTML=matches.map((d,i)=>`<button type="button" data-suggestion="${i}"><strong>${esc(d.name)}</strong><small>${esc(d.type||'Other')}${d.country?' · '+esc(d.country):''}</small></button>`).join('')+(!matches.some(d=>d.name.toLocaleLowerCase()===q.toLocaleLowerCase())?`<button type="button" class="add-custom-destination" data-custom="1"><strong>＋ Add “${esc(q)}”</strong><small>as a custom destination</small></button>`:'');box.hidden=false;box.querySelectorAll('[data-suggestion]').forEach(b=>b.onclick=()=>applyDestinationSuggestion(row,matches[+b.dataset.suggestion]));box.querySelector('[data-custom]')?.addEventListener('click',()=>{const name=input.value.trim();if(!name)return;input.dataset.selected=name;const c=canonicalCountry(row.querySelector('.trip-stop-country')?.value||'');const type=row.querySelector('.trip-destination-type')?.value||'Other';if(!(state.customDestinations||[]).some(d=>d.name.toLowerCase()===name.toLowerCase()&&sameCountry(d.country,c)))state.customDestinations.push({id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name,type,country:c});box.innerHTML='';box.hidden=true;updateStopSummary(row);input.blur()})}
function updateStopLabels(){const rows=$$('#tripDestinationStops .trip-destination-stop'),multi=rows.length>1;rows.forEach((row,i)=>{const label=row.querySelector('.trip-stop-number');if(label)label.textContent=(multi||row.classList.contains('collapsed'))?`Stop ${i+1}`:'Details';row.classList.toggle('single-stop',!multi);updateStopSummary(row)});refreshTripEditorSummaryLine()}
function updateStopSummary(row){const name=row.querySelector('.trip-destination-name')?.value.trim(),country=row.querySelector('.trip-stop-country')?.value.trim(),summary=row.querySelector('.trip-stop-summary'),flagSlot=row.querySelector('.trip-stop-summary-flag-slot'),meta=row.querySelector('.trip-stop-collapsed-meta');const label=name||country||'';if(summary)summary.textContent=label;if(flagSlot)flagSlot.innerHTML=country?flagMarkup(country,'trip-stop-summary-flag'):'';if(meta){const rows=$$('#tripDestinationStops .trip-destination-stop'),single=rows.length===1,collapsed=row.classList.contains('collapsed'),start=row.querySelector('.trip-destination-from')?.value||'',end=row.querySelector('.trip-destination-to')?.value||'',mode=row.querySelector('.trip-travel-mode')?.value||'';meta.innerHTML=single&&collapsed?`${start?`<span class="single-stop-summary-date">${pretty(start)}${end?' – '+pretty(end):''}</span>`:''}${mode?`<span class="single-stop-summary-mode">${travelModeIcon(mode)}</span>`:''}`:''}}
function toggleStopCollapsed(row,force){const next=force===undefined?!row.classList.contains('collapsed'):force;row.classList.toggle('collapsed',next);const b=row.querySelector('.stop-collapse-toggle');if(b){b.textContent=next?'+':'−';b.setAttribute('aria-expanded',String(!next));b.setAttribute('aria-label',next?'Expand stop':'Minimise stop')}updateStopLabels()}
function enableStopReorder(row){
  let holdTimer=null,startX=0,startY=0,lastY=0,dragging=false,ghost=null,marker=null,grabY=0,activeTouchId=null;
  const wrap=$('#tripDestinationStops');
  const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
  const getScroller=()=>{
    const dlg=$('#tripDialog')||row.closest('dialog,.modal,.sheet');
    if(!dlg)return null;
    return [dlg,...dlg.querySelectorAll('*')].find(el=>{const cs=getComputedStyle(el);return /auto|scroll/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight+4})||dlg;
  };
  const pointFromTouch=e=>{
    const list=[...(e.touches||[]),...(e.changedTouches||[])];
    return list.find(t=>activeTouchId==null||t.identifier===activeTouchId)||list[0]||null;
  };
  const placeMarker=y=>{
    const cards=[...wrap.querySelectorAll('.trip-destination-stop')].filter(el=>el!==row);
    let before=null;
    for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}
    if(before)wrap.insertBefore(marker,before);else wrap.appendChild(marker);
  };
  const startDrag=(x,y)=>{
    dragging=true;
    const r=row.getBoundingClientRect(),cs=getComputedStyle(row);
    grabY=Math.max(10,Math.min(r.height-10,y-r.top));
    marker=document.createElement('div');
    marker.className='trip-stop-mobile-marker';
    marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
    wrap.insertBefore(marker,row);
    row.dataset.dragStyle=row.getAttribute('style')||'';
    row.classList.add('trip-stop-mobile-live');
    Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
    const dragLayer=$('#tripDialog[open]')||row.closest('dialog[open]')||document.body;
    dragLayer.appendChild(row);
    navigator.vibrate?.(20);
  };
  const moveDrag=(x,y)=>{
    if(!dragging)return;
    row.style.top=`${y-grabY}px`;
    placeMarker(y);
    const sc=getScroller();
    if(sc){
      const r=sc.getBoundingClientRect(),edge=Math.min(80,Math.max(50,r.height*.16));
      if(y<r.top+edge)sc.scrollTop-=Math.min(14,Math.max(4,(r.top+edge-y)/5));
      else if(y>r.bottom-edge)sc.scrollTop+=Math.min(14,Math.max(4,(y-(r.bottom-edge))/5));
    }
  };
  const finishDrag=()=>{
    clearHold();
    if(!dragging){activeTouchId=null;return}
    dragging=false;
    if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);
    marker?.remove();marker=null;
    const prior=row.dataset.dragStyle||'';
    row.classList.remove('trip-stop-mobile-live');
    if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');
    delete row.dataset.dragStyle;
    updateStopLabels();
    activeTouchId=null;
  };
  row.addEventListener('touchstart',e=>{
    if(e.target.closest('button,input,select,textarea,.destination-suggestions'))return;
    if(e.touches.length!==1)return;
    const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;lastY=t.clientY;clearHold();
    holdTimer=setTimeout(()=>startDrag(startX,startY),420);
  },{passive:true});
  document.addEventListener('touchmove',e=>{
    if(activeTouchId==null)return;
    const t=pointFromTouch(e);if(!t)return;
    if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}
    if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold();
    lastY=t.clientY;
  },{passive:false,capture:true});
  document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
  document.addEventListener('touchcancel',finishDrag,{capture:true});
  // Mouse/desktop fallback.
  row.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch'||e.target.closest('button,input,select,textarea,.destination-suggestions'))return;
    startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
    const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};
    const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);finishDrag()};
    document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true});
  });
}
function addDestinationStop(data={}){const wrap=$('#tripDestinationStops'),row=document.createElement('section');row.className='trip-destination-stop';row.dataset.stopId=data.id||'';row.innerHTML=`<div class="trip-stop-card-head"><span class="trip-stop-summary-flag-slot" aria-hidden="true"></span><span class="trip-stop-number"></span><strong class="trip-stop-summary"></strong><span class="trip-stop-collapsed-meta"></span><div class="trip-stop-actions"><button type="button" class="stop-collapse-toggle" aria-expanded="true" aria-label="Minimise stop">−</button><button type="button" class="remove-destination-stop" aria-label="Delete stop">×</button></div></div><div class="trip-stop-body"><div class="trip-stop-top"><select class="trip-stop-country" aria-label="Country">${countryOptions(data.country||'')}</select></div><div class="destination-autocomplete destination-name-label"><input class="trip-destination-name" aria-label="Destination name" autocomplete="off" placeholder="Start typing a destination…" value="${esc(data.name||'')}"><div class="destination-suggestions" hidden></div></div><div class="destination-type-field"><select class="trip-destination-type" aria-label="Destination type">${destinationTypeOptions(data.type||'')}</select></div><div class="travel-mode-field"><select class="trip-travel-mode" aria-label="Travelling by">${travelModeOptions(data.travelMode||'')}</select></div><div class="trip-stop-dates"><div class="date-field"><input class="trip-destination-from" type="date" aria-label="Start date" value="${esc(data.start||'')}" data-placeholder="Start"></div><span class="date-to-word">to</span><div class="date-field"><input class="trip-destination-to" type="date" aria-label="End date" value="${esc(data.end||'')}" data-placeholder="End"></div></div><div class="itinerary-swipe-prompt" aria-hidden="true"><span>→</span> Swipe to create itinerary</div></div>`;wrap.appendChild(row);row.querySelectorAll('select').forEach(enhanceWozzaSelect);const input=row.querySelector('.trip-destination-name');input.addEventListener('input',()=>{input.dataset.selected='';renderDestinationSuggestions(row);updateStopSummary(row)});input.addEventListener('focus',()=>renderDestinationSuggestions(row));row.querySelector('.trip-stop-country').addEventListener('change',()=>{renderDestinationSuggestions(row);updateStopSummary(row)});row.querySelector('.remove-destination-stop').onclick=()=>{row.remove();updateStopLabels()};row.querySelector('.stop-collapse-toggle').onclick=()=>toggleStopCollapsed(row);enableStopReorder(row);bindWozzaDateInputs(row);updateStopLabels();return row}
function collectDestinationStops(){const rows=$$('#tripDestinationStops .trip-destination-stop'),out=[];for(const row of rows){const country=canonicalCountry(row.querySelector('.trip-stop-country').value);if(!country)continue;const input=row.querySelector('.trip-destination-name'),typed=input.value.trim();let name='',type=row.querySelector('.trip-destination-type')?.value||'Other',custom=false;if(typed){const known=knownDestination(typed,country);name=known?.name||typed;type=type||known?.type||'Other';custom=!known;if(custom){const exists=(state.customDestinations||[]).some(d=>d.name.toLowerCase()===name.toLowerCase()&&sameCountry(d.country,country));if(!exists)state.customDestinations.push({id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name,type,country})}}out.push({id:row.dataset.stopId||crypto.randomUUID?.()||String(Date.now()+out.length),name,type,country,start:row.querySelector('.trip-destination-from').value,end:row.querySelector('.trip-destination-to').value,travelMode:row.querySelector('.trip-travel-mode')?.value||'',custom})}return out}
function legacyDestinations(t){if((t.destinations||[]).length){const ds=t.destinations.map(d=>({...d}));if((t.start||t.end)&&!ds.some(d=>d.start||d.end)){if(ds[0])ds[0].start=t.start||'';if(ds[ds.length-1])ds[ds.length-1].end=t.end||''}return ds;}const out=[];for(const [country,names] of Object.entries(t.cities||{}))for(const name of names||[])out.push({name,type:'City',country,start:t.start||'',end:t.end||''});if(!out.length)tripCountries(t).forEach(country=>out.push({name:'',type:'Other',country,start:t.start||'',end:t.end||''}));return out}
function setTripRatingInput(r=0){r=Math.max(0,Math.min(5,Number(r)||0));$('#tripRating').value=String(r);$$('#tripRatingInput button').forEach(b=>{const on=Number(b.dataset.rating)<=r;b.textContent=on?'★':'☆';b.classList.toggle('selected',on)})}
function populateTripCompanions(selected=[]){const wanted=new Set(selected.map(x=>String(x).toLowerCase()));const tb=$('#tripCompanionBank');if(!tb)return;tb.innerHTML=[...state.companionBank].sort((a,b)=>String(a).localeCompare(String(b),undefined,{sensitivity:'base'})).map(n=>`<button type="button" class="companion-tag ${wanted.has(n.toLowerCase())?'selected':''}" data-companion="${esc(n)}">${esc(n)}</button>`).join('');$$('#tripCompanionBank .companion-tag').forEach(b=>{let hold=null,longPressed=false,sx=0,sy=0;const cancelHold=()=>{clearTimeout(hold);hold=null};b.onclick=e=>{if(longPressed){e.preventDefault();e.stopPropagation();longPressed=false;return}b.classList.toggle('selected')};b.addEventListener('contextmenu',e=>e.preventDefault());b.addEventListener('pointerdown',e=>{if(e.button!=null&&e.button!==0)return;sx=e.clientX;sy=e.clientY;longPressed=false;cancelHold();try{b.setPointerCapture?.(e.pointerId)}catch{}hold=setTimeout(()=>{longPressed=true;const name=b.dataset.companion;showWozzaConfirm('Remove companion?',`Send “${name}” to the recycle bin?`,()=>{const selectedNow=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).filter(x=>x.toLowerCase()!==name.toLowerCase());state.companionRecycleBin=state.companionRecycleBin.filter(x=>String(x.name).toLowerCase()!==name.toLowerCase());state.companionRecycleBin.unshift({name,removedAt:Date.now()});state.companionBank=state.companionBank.filter(x=>x.toLowerCase()!==name.toLowerCase());populateTripCompanions(selectedNow);localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${name} moved to recycle bin`)},'Move to recycle bin');navigator.vibrate?.(20)},520)});b.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-sx,e.clientY-sy)>14)cancelHold()});b.addEventListener('pointerup',cancelHold);b.addEventListener('pointercancel',cancelHold)})}
function saveNewTripCompanion(){const input=$('#tripCompanions'),v=addToCompanionBank(input.value.trim());if(!v)return;input.value='';populateTripCompanions([v,...$$('#tripCompanionBank .companion-tag.selected').map(b=>b.dataset.companion)]);const match=$$('#tripCompanionBank .companion-tag').find(b=>b.dataset.companion.toLowerCase()===v.toLowerCase());match?.classList.add('selected');localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${v} saved ✓`)}
function setTripCompanionsCollapsed(collapsed){const section=document.querySelector('.trip-companions-section'),body=$('#tripCompanionsBody'),b=$('#tripCompanionsToggle'),summary=$('#tripSelectedCompanions');if(!section||!body||!b)return;const selected=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).filter(Boolean);if(summary)summary.textContent=selected.join(' · ');section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand travel companions':'Minimise travel companions')}
function toggleTripCompanions(){const section=document.querySelector('.trip-companions-section');if(section)setTripCompanionsCollapsed(!section.classList.contains('collapsed'))}

function ensureTripVibeSection(){
 if($('#tripVibeSection'))return;
 const companions=document.querySelector('.trip-companions-section');if(!companions)return;
 const section=document.createElement('div');section.id='tripVibeSection';section.className='trip-vibe-section trip-companions-section collapsed';
 section.innerHTML='<div class="trip-vibe-head trip-companions-head"><div class="trip-section-title">THE VIBE</div><div id="tripVibeSummary" class="trip-selected-summary"></div><button type="button" id="tripVibeToggle" class="section-collapse-toggle" aria-expanded="false" aria-label="Expand the vibe">+</button></div><div id="tripVibeBody"><div id="tripVibeBank" class="vibe-bank companion-bank"></div><div class="trip-new-vibe trip-new-companion"><input id="tripVibeCustom" autocomplete="off" placeholder="Add your own vibe"></div></div>';
 companions.insertAdjacentElement('afterend',section);
 const st=document.createElement('style');st.id='wozza-trip-vibe-style';st.textContent=`
 #tripVibeSection{margin-top:28px!important;margin-bottom:0!important;padding:0!important}
 #tripVibeSection .trip-vibe-head{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) 54px!important;column-gap:14px!important;align-items:start!important;min-height:54px!important;padding:0!important;margin:0!important}
 #tripVibeSection .trip-vibe-head>.trip-section-title{min-width:0!important;padding-top:7px!important}
 #tripVibeSection .trip-vibe-head>.trip-selected-summary{grid-column:1!important;margin-top:6px!important;padding:0!important}
 #tripVibeSection.collapsed .trip-vibe-head:has(.trip-selected-summary:empty)>.trip-section-title{padding-top:0!important;align-self:center!important;transform:translateY(11px)!important}
 #tripVibeSection.collapsed .trip-vibe-head:has(.trip-selected-summary:not(:empty))>.trip-section-title{transform:none!important}
 #tripVibeSection .section-collapse-toggle{grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:start!important;margin:0!important;position:static!important;transform:none!important;width:54px!important;height:54px!important}
 #tripVibeSection .vibe-tag{position:relative}
 `;
 document.head.appendChild(st);
 $('#tripVibeToggle').addEventListener('click',toggleTripVibe);
 $('#tripVibeCustom').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();saveNewTripVibe()}});
}
function populateTripVibes(selected=[]){
 ensureTripVibeSection();const bank=$('#tripVibeBank');if(!bank)return;
 const native=['City Break','Beach Holiday','Spa & Wellness','Adventure','Road Trip','Snow & Ski','Cruise','Visiting Friends & Family','Celebration','Great Outdoors','Camping'];
 const wanted=new Set((selected||[]).map(x=>String(x).toLowerCase())),all=[...state.vibeBank];(selected||[]).forEach(v=>{if(!all.some(x=>String(x).toLowerCase()===String(v).toLowerCase()))all.push(v)});all.sort((a,b)=>String(a).localeCompare(String(b),undefined,{sensitivity:'base'}));
 bank.innerHTML=all.map(n=>{const isNative=native.some(x=>x.toLowerCase()===String(n).toLowerCase());return `<button type="button" class="companion-tag vibe-tag ${wanted.has(String(n).toLowerCase())?'selected':''}" data-vibe="${esc(n)}" data-native="${isNative?'1':'0'}">${esc(n)}</button>`}).join('');
 $$('#tripVibeBank .vibe-tag').forEach(b=>{let hold=null,longPressed=false,sx=0,sy=0;const cancel=()=>{clearTimeout(hold);hold=null};b.onclick=e=>{if(longPressed){e.preventDefault();e.stopPropagation();longPressed=false;return}b.classList.toggle('selected');syncTripVibeSummary();refreshTripEditorSummaryLine()};if(b.dataset.native==='1')return;b.addEventListener('contextmenu',e=>e.preventDefault());b.addEventListener('pointerdown',e=>{if(e.button!=null&&e.button!==0)return;sx=e.clientX;sy=e.clientY;longPressed=false;cancel();hold=setTimeout(()=>{longPressed=true;const name=b.dataset.vibe;showWozzaConfirm('Add vibe to recycle bin?',`Are you sure you want to add this vibe to the recycle bin?`,()=>{const selectedNow=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe);state.vibeRecycleBin=state.vibeRecycleBin.filter(x=>String(x.name).toLowerCase()!==String(name).toLowerCase());state.vibeRecycleBin.unshift({name,removedAt:Date.now()});state.vibeBank=state.vibeBank.filter(x=>String(x).toLowerCase()!==String(name).toLowerCase());populateTripVibes(selectedNow.filter(x=>String(x).toLowerCase()!==String(name).toLowerCase()));localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${name} moved to recycle bin`);refreshTripEditorSummaryLine()},'Move to recycle bin');navigator.vibrate?.(20)},520)});b.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-sx,e.clientY-sy)>14)cancel()});b.addEventListener('pointerup',cancel);b.addEventListener('pointercancel',cancel)})
}
function saveNewTripVibe(){
 const input=$('#tripVibeCustom'),raw=String(input?.value||'').trim();if(!raw)return;
 const existing=state.vibeBank.find(x=>String(x).toLowerCase()===raw.toLowerCase()),v=existing||raw;
 if(!existing)state.vibeBank.push(v);
 const selected=[v,...$$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe)];
 input.value='';populateTripVibes(selected);
 localStorage.setItem('wozzaworld-state',JSON.stringify(state));syncTripVibeSummary();toast(`${v} saved ✓`);
}
function syncTripVibeSummary(){const summary=$('#tripVibeSummary');if(!summary)return;summary.textContent=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe).filter(Boolean).join(' · ')}
function setTripVibeCollapsed(collapsed){
 ensureTripVibeSection();const section=$('#tripVibeSection'),body=$('#tripVibeBody'),b=$('#tripVibeToggle'),summary=$('#tripVibeSummary');if(!section||!body||!b)return;
 syncTripVibeSummary();
 section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand the vibe':'Minimise the vibe');
}
function toggleTripVibe(){const section=$('#tripVibeSection');if(section)setTripVibeCollapsed(!section.classList.contains('collapsed'))}

function updateTripNotesSummary(){const summary=$('#tripNotesSummary'),notes=$('#tripNotes');if(summary)summary.textContent=(notes?.value||'').trim()}function setTripNotesCollapsed(collapsed){updateTripNotesSummary();const section=document.querySelector('.trip-notes-section'),body=$('#tripNotesBody'),b=$('#tripNotesToggle');if(!section||!body||!b)return;section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand notes':'Minimise notes')}
function toggleTripNotes(){updateTripNotesSummary();const section=document.querySelector('.trip-notes-section'),body=$('#tripNotesBody'),b=$('#tripNotesToggle');if(!section||!body||!b)return;const next=!section.classList.contains('collapsed');section.classList.toggle('collapsed',next);body.hidden=next;b.textContent=next?'+':'−';b.setAttribute('aria-expanded',String(!next));b.setAttribute('aria-label',next?'Expand notes':'Minimise notes')}
function normaliseTripTodos(items=[]){return (items||[]).map(x=>typeof x==='string'?{text:x,done:false}:{text:String(x?.text||''),done:!!x?.done}).filter(x=>x.text)}
const TODO_SCRIBBLE_VARIANTS=[
  {phase:.10,amp:5.2,bias:.15},{phase:.42,amp:4.6,bias:-.10},{phase:.73,amp:5.6,bias:.05},{phase:1.05,amp:4.9,bias:.18},{phase:1.38,amp:5.3,bias:-.16}
];
function tripTodoWrappedLines(input){const text=input.value.trim();if(!text)return[];const cs=getComputedStyle(input),canvas=tripTodoWrappedLines.canvas||(tripTodoWrappedLines.canvas=document.createElement('canvas')),ctx=canvas.getContext('2d');ctx.font=`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const max=Math.max(30,input.clientWidth-(parseFloat(cs.paddingLeft)||0)-(parseFloat(cs.paddingRight)||0));const words=text.split(/\s+/),lines=[];let line='';for(const word of words){const trial=line?line+' '+word:word;if(ctx.measureText(trial).width<=max||!line)line=trial;else{lines.push({text:line,width:Math.min(max,ctx.measureText(line).width)});line=word}}if(line)lines.push({text:line,width:Math.min(max,ctx.measureText(line).width)});return lines.slice(0,3)}
function scribblePath(width,variant,line=0){const v=TODO_SCRIBBLE_VARIANTS[variant%TODO_SCRIBBLE_VARIANTS.length],cycles=Math.max(1,Math.min(5,Math.round(width/72))),step=width/cycles;let d=`M 2 ${13+v.bias*4}`;for(let i=0;i<cycles;i++){const x=i*step+2,x2=Math.min(width-2,x+step),mid=(x+x2)/2,amp=v.amp*(.82+(((i+variant+line)%3)*.13)),dir=((i+variant+line)%2?1:-1);d+=` C ${x+step*.22} ${13+dir*amp}, ${mid-step*.12} ${13-dir*amp*.9}, ${mid} ${13+dir*amp*.35} S ${x2-step*.18} ${13-dir*amp}, ${x2} ${13+dir*amp*.12}`};return d}
function todoScribbleMarkup(i=0){return `<svg class="trip-todo-scribble" aria-hidden="true"></svg>`}
function sizeTripTodoScribble(row){const input=row?.querySelector('.trip-todo-input'),svg=row?.querySelector('.trip-todo-scribble');if(!input||!svg)return;const lines=tripTodoWrappedLines(input);if(!lines.length)return;const cs=getComputedStyle(input),lh=parseFloat(cs.lineHeight)||22,padTop=parseFloat(cs.paddingTop)||0,padLeft=parseFloat(cs.paddingLeft)||0,variant=Math.abs(Number(row.dataset.scribble)||0)%5;const widths=lines.map(x=>Math.min(input.clientWidth-padLeft-(parseFloat(cs.paddingRight)||0),Math.max(28,x.width+10)));const w=Math.max(...widths)+4,h=Math.max(input.clientHeight,Math.ceil(padTop*2+lh*lines.length));svg.style.left=`${padLeft-4}px`;svg.style.top='0';svg.style.width=`${w}px`;svg.style.height=`${h}px`;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.innerHTML=widths.map((width,n)=>`<path d="${scribblePath(width,variant,n)}" transform="translate(0 ${padTop+n*lh})"></path>`).join('')}
function autoSizeTripTodo(input){input.style.height='auto';const cs=getComputedStyle(input),lh=parseFloat(cs.lineHeight)||22,pad=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.paddingBottom)||0),max=lh*3+pad;input.style.height=`${Math.min(input.scrollHeight,max)}px`;input.style.overflowY=input.scrollHeight>max?'auto':'hidden'}
function todoRowMarkup(item={text:'',done:false},i=0){const text=String(item.text||''),done=!!item.done;return `<div class="trip-todo-row${text?' has-text':''}${done?' is-done':''}" data-scribble="${i%5}"><textarea class="trip-todo-input" rows="1" placeholder="Type here..." aria-label="To do action ${i+1}">${esc(text)}</textarea>${done?todoScribbleMarkup(i):''}<button type="button" class="trip-todo-check status-tick${done?' selected':''}" aria-label="${done?'Mark incomplete':'Mark complete'}" aria-pressed="${done}"></button><button type="button" class="trip-todo-remove" aria-label="Remove to do action">×</button></div>`}
function bindTripTodoRow(row){const input=row.querySelector('.trip-todo-input'),check=row.querySelector('.trip-todo-check'),remove=row.querySelector('.trip-todo-remove');const scribbleIndex=()=>Number(row.dataset.scribble||0)%5;const syncScribble=()=>{row.querySelector('.trip-todo-scribble')?.remove();if(row.classList.contains('is-done')&&input.value.trim()){input.insertAdjacentHTML('afterend',todoScribbleMarkup(scribbleIndex()));requestAnimationFrame(()=>sizeTripTodoScribble(row))}};const sync=()=>{autoSizeTripTodo(input);row.classList.toggle('has-text',!!input.value.trim());if(!input.value.trim()){row.classList.remove('is-done');check.classList.remove('selected');check.setAttribute('aria-pressed','false')}syncScribble();updateTripTodoSummary()};input.addEventListener('input',sync);input.addEventListener('change',sync);input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();const text=input.value.trim();if(!text)return;if(!row.classList.contains('has-text'))sync();let next=row.nextElementSibling;if(!next||next.classList.contains('has-text')){addTripTodoRow();next=$('#tripTodoList')?.lastElementChild}else next.querySelector('.trip-todo-input')?.focus()}});check.onclick=()=>{if(!input.value.trim())return;const done=!row.classList.contains('is-done');row.classList.toggle('is-done',done);check.classList.toggle('selected',done);check.setAttribute('aria-pressed',String(done));check.setAttribute('aria-label',done?'Mark incomplete':'Mark complete');syncScribble();updateTripTodoSummary()};remove.onclick=()=>{row.remove();if(!$('#tripTodoList')?.children.length)addTripTodoRow();updateTripTodoSummary()};autoSizeTripTodo(input);if(row.classList.contains('is-done'))requestAnimationFrame(()=>sizeTripTodoScribble(row))}
function attachTripTodoReorder(){
 const list=$('#tripTodoList');if(!list)return;
 if(!document.getElementById('trip-todo-reorder-style')){
  const st=document.createElement('style');st.id='trip-todo-reorder-style';st.textContent=`
   #tripTodoList .trip-todo-row{cursor:grab;-webkit-touch-callout:none}
   #tripTodoList>.trip-todo-drag-marker{display:block!important;box-sizing:border-box!important;border:0!important;background:transparent!important;padding:0!important;visibility:hidden!important}
   .trip-todo-drag-live{position:fixed!important;z-index:2147483647!important;pointer-events:none!important;opacity:.94!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important;border-radius:18px!important;overflow:hidden!important;clip-path:inset(0 round 18px)!important}
  `;document.head.appendChild(st)
 }
 const rows=()=>[...list.querySelectorAll('.trip-todo-row')];
 rows().forEach(row=>{
  if(row.dataset.todoReorderBound==='1')return;row.dataset.todoReorderBound='1';
  let holdTimer=null,startX=0,startY=0,dragging=false,marker=null,grabY=0,activeTouchId=null,suppressClick=false;
  const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
  const pointFromTouch=e=>{const a=[...(e.touches||[]),...(e.changedTouches||[])];return a.find(t=>activeTouchId==null||t.identifier===activeTouchId)||a[0]||null};
  const placeMarker=y=>{const cards=rows().filter(el=>el!==row);let before=null;for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}if(before)list.insertBefore(marker,before);else list.appendChild(marker)};
  const startDrag=(x,y)=>{
   dragging=true;window.__wozzaTodoReorderActive=true;
   const r=row.getBoundingClientRect(),cs=getComputedStyle(row);grabY=Math.max(10,Math.min(r.height-10,y-r.top));
   marker=document.createElement('div');marker.className='trip-todo-drag-marker';marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
   list.insertBefore(marker,row);row.dataset.todoDragStyle=row.getAttribute('style')||'';row.classList.add('trip-todo-drag-live');
   Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
   /* Proven stop-reorder fix: keep the live dragged node inside the open trip dialog.
      This preserves the #tripDialog descendant styling instead of moving it to body. */
   const dragLayer=$('#tripDialog[open]')||row.closest('dialog[open]')||document.body;
   dragLayer.appendChild(row);navigator.vibrate?.(20)
  };
  const moveDrag=(x,y)=>{if(!dragging)return;row.style.top=`${y-grabY}px`;placeMarker(y)};
  const finishDrag=()=>{clearHold();if(!dragging){activeTouchId=null;return}dragging=false;if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);marker?.remove();marker=null;const prior=row.dataset.todoDragStyle||'';row.classList.remove('trip-todo-drag-live');if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');delete row.dataset.todoDragStyle;updateTripTodoSummary();window.__wozzaTodoReorderActive=false;activeTouchId=null;suppressClick=true;setTimeout(()=>{suppressClick=false},120)};
  row.addEventListener('touchstart',e=>{if(e.target.closest('button')||e.touches.length!==1)return;const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420)},{passive:true});
  document.addEventListener('touchmove',e=>{if(activeTouchId==null)return;const t=pointFromTouch(e);if(!t)return;if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold()},{passive:false,capture:true});
  document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
  document.addEventListener('touchcancel',finishDrag,{capture:true});
  row.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.target.closest('button'))return;startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};const up=()=>{document.removeEventListener('pointermove',move);finishDrag()};document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true})});
  row.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true)
 })
}
function renderTripTodos(items=[]){const list=$('#tripTodoList');if(!list)return;const vals=normaliseTripTodos(items);list.innerHTML=vals.map((v,i)=>todoRowMarkup(v,i)).join('');$$('.trip-todo-row',list).forEach(bindTripTodoRow);attachTripTodoReorder();updateTripTodoSummary()}
function addTripTodoRow(value=''){const list=$('#tripTodoList');if(!list)return;const item=typeof value==='string'?{text:value,done:false}:value;const wrap=document.createElement('div');wrap.innerHTML=todoRowMarkup(item,list.children.length);const row=wrap.firstElementChild;list.appendChild(row);bindTripTodoRow(row);attachTripTodoReorder();row.querySelector('.trip-todo-input')?.focus();updateTripTodoSummary()}
function collectTripTodos(){return $$('.trip-todo-row').map(row=>({text:row.querySelector('.trip-todo-input')?.value.trim()||'',done:row.classList.contains('is-done')})).filter(x=>x.text)}
function updateTripTodoSummary(){const summary=$('#tripTodoSummary');if(!summary)return;const items=collectTripTodos().filter(x=>!x.done);summary.textContent=items.map(x=>x.text).join(', ');summary.hidden=!items.length}
function setTripTodoCollapsed(collapsed){const section=document.querySelector('.trip-todo-section'),body=$('#tripTodoBody'),b=$('#tripTodoToggle');if(!section||!body||!b)return;section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand to do list':'Minimise to do list');updateTripTodoSummary();if(!collapsed)requestAnimationFrame(()=>{$$('.trip-todo-row',body).forEach(row=>{const input=row.querySelector('.trip-todo-input');if(input)autoSizeTripTodo(input);if(row.classList.contains('is-done')){if(!row.querySelector('.trip-todo-scribble'))input?.insertAdjacentHTML('afterend',todoScribbleMarkup(Number(row.dataset.scribble||0)));sizeTripTodoScribble(row)}})})}
function toggleTripTodo(){const section=document.querySelector('.trip-todo-section');if(!section)return;const opening=section.classList.contains('collapsed');setTripTodoCollapsed(!opening);if(opening&&!$('#tripTodoList')?.children.length)addTripTodoRow()}
function setTripDialogMode(isEdit){const form=$('#tripForm'),title=form?.querySelector('h2'),submit=form?.querySelector('.dialog-actions .primary'),del=$('#deleteTripBtn');if(title)title.textContent=isEdit?'Edit trip':'Create trip';if(submit)submit.textContent=isEdit?'Save changes':'Create trip';if(del)del.hidden=!isEdit;form?.classList.toggle('trip-edit-mode',isEdit);form?.classList.toggle('trip-create-mode',!isEdit)}
function resetDestinationStops(items=[]){$('#tripDestinationStops').innerHTML='';(items.length?items:[{}]).forEach(addDestinationStop);updateStopLabels()}

function updateNewTripNameArrow(){const form=$('#tripForm');if(!form)return;let arrow=form.querySelector('.new-trip-name-arrow');const show=!$('#tripName').value.trim()&&$('#tripDialog')?.open;if(show&&!arrow){arrow=document.createElement('div');arrow.className='new-trip-name-arrow';arrow.setAttribute('aria-hidden','true');arrow.innerHTML='<svg viewBox="0 0 150 115"><path d="M18 100 C25 58, 58 28, 119 22"/><path d="M101 10 L123 21 L105 39"/></svg>';form.appendChild(arrow);requestAnimationFrame(()=>arrow.classList.add('show'))}else if(!show&&arrow){arrow.classList.remove('show');setTimeout(()=>arrow.remove(),220)}}
const tripNameInput=$('#tripName');if(tripNameInput){tripNameInput.placeholder='Give your trip a name…';tripNameInput.maxLength=50;tripNameInput.style.textTransform='uppercase';tripNameInput.addEventListener('input',()=>{tripNameInput.style.textTransform='uppercase';updateNewTripNameArrow();tripNameInput.dataset.count=String(tripNameInput.value.length)})}
let tripEditorSnapshot='';
function currentTripEditorSnapshot(){const form=$('#tripForm');if(!form)return'';const fields=$$('input,textarea,select',form).map(el=>[el.id||el.name||el.className,el.type==='checkbox'||el.type==='radio'?el.checked:el.value]);const selected=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).sort();const vibes=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe).sort();return JSON.stringify({fields,selected,vibes,todos:collectTripTodos(),stops:collectDestinationStops(),rating:$('#tripRating')?.value||'0'})}
function rememberTripEditorSnapshot(){tripEditorSnapshot=currentTripEditorSnapshot()}
function tripEditorIsDirty(){return !!tripEditorSnapshot&&currentTripEditorSnapshot()!==tripEditorSnapshot}
function closeTripEditorNow(){editingTripId=null;tripEditorSnapshot='';$('#tripForm')?.querySelector('.new-trip-name-arrow')?.remove();$('#tripDialog').close()}
function requestCloseTripEditor(){if(!tripEditorIsDirty()){closeTripEditorNow();return}$('#tripUnsavedDialog')?.showModal()}
function openTrip(country=''){editingTripId=null;setTripDialogMode(false);$('#tripName').value='';$('#tripForm')?.querySelector('.trip-editor-date-range')?.remove();resetDestinationStops([{country}]);$('#tripCompanions').value='';populateTripCompanions([]);setTripCompanionsCollapsed(true);populateTripVibes([]);setTripVibeCollapsed(true);renderTripTodos([]);setTripTodoCollapsed(true);$('#tripNotes').value='';setTripNotesCollapsed(true);setTripRatingInput(0);$('#tripDialog').showModal();requestAnimationFrame(()=>{document.activeElement?.blur?.();$('#tripDialog').scrollTop=0;updateNewTripNameArrow();setupTripTitleScroll();rememberTripEditorSnapshot()})}
function refreshTripEditorSummaryLine(){const form=$('#tripForm'),host=$('#tripDestinationStops');if(!form||!host)return;const rows=$$('.trip-destination-stop',host),multi=rows.length>1,singleCollapsed=rows.length===1&&rows[0].classList.contains('collapsed');let line=form.querySelector('.trip-editor-date-range');if(!line){line=document.createElement('div');line.className='trip-editor-date-range'}if(line.nextElementSibling!==host)host.insertAdjacentElement('beforebegin',line);const first=rows[0],last=rows[rows.length-1]||first,start=first?.querySelector('.trip-destination-from')?.value||'',end=(rows.length===1?first:last)?.querySelector('.trip-destination-to')?.value||'',modes=[...new Set(rows.map(r=>r.querySelector('.trip-travel-mode')?.value).filter(Boolean))],show=multi||singleCollapsed;const date=start?`${pretty(start)}${end?' – '+pretty(end):''}`:'Dates to be confirmed';const vibes=$$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe).filter(v=>vibeIcon(v));line.innerHTML=show?`<span>${date}</span>${modes.length?`<span class="trip-editor-transport-icons">${modes.map(travelModeIcon).join('')}</span>`:''}${vibes.length?`<span class="trip-editor-vibe-icons">${vibes.map(vibeIcon).join('')}</span>`:''}`:'';line.hidden=!show}function updateTripEditorDateRange(t){refreshTripEditorSummaryLine()}
function openTripEditor(t){editingTripId=t.id;setTripDialogMode(true);$('#tripName').value=t.name||'';resetDestinationStops(legacyDestinations(t));updateTripEditorDateRange(t);const stopRows=$$('#tripDestinationStops .trip-destination-stop');stopRows.forEach(row=>toggleStopCollapsed(row,stopRows.length>1));$('#tripCompanions').value='';populateTripCompanions(t.companions||[]);setTripCompanionsCollapsed(true);populateTripVibes(t.vibes||[]);setTripVibeCollapsed(true);renderTripTodos(t.todos||[]);setTripTodoCollapsed(true);$('#tripNotes').value=t.notes||'';setTripNotesCollapsed(true);setTripRatingInput(t.rating||0);$('#tripDialog').showModal();requestAnimationFrame(()=>{document.activeElement?.blur?.();$('#tripDialog').scrollTop=0;updateNewTripNameArrow();setupTripTitleScroll();rememberTripEditorSnapshot()})}
$('#addTripDestination').onclick=()=>{addDestinationStop({country:tripCountryChoices().slice(-1)[0]||currentCountry||''});updateStopLabels()};
$('#tripCompanions').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();saveNewTripCompanion()}});

document.querySelectorAll('select').forEach(enhanceWozzaSelect);
const addStopBtn=$('#addTripDestination');if(addStopBtn){addStopBtn.classList.add('tourist-add-stop');addStopBtn.innerHTML='<span>+ ADD STOP</span><span class="tourist-add-arrow" aria-hidden="true">›</span>';const wiggle=()=>{if(addStopBtn.classList.contains('wozza-add-stop-subtle')){addStopBtn.classList.remove('wiggle');return}addStopBtn.classList.remove('wiggle');void addStopBtn.offsetWidth;addStopBtn.classList.add('wiggle')};addStopBtn.addEventListener('click',wiggle);setInterval(()=>{if(document.querySelector('#tripDialog[open]')&&addStopBtn.isConnected)wiggle()},10000)}
$('#tripCompanionsToggle')?.addEventListener('click',toggleTripCompanions);$('#tripTodoToggle')?.addEventListener('click',toggleTripTodo);$('#addTripTodo')?.addEventListener('click',()=>addTripTodoRow());$('#tripNotesToggle')?.addEventListener('click',toggleTripNotes);$('#tripNotes')?.addEventListener('input',updateTripNotesSummary);$('#newTripBtn').onclick=()=>openTrip();$('#addCountryTrip').onclick=()=>openTrip(currentCountry);const closeTripEditor=closeTripEditorNow;$('#cancelTrip').onclick=requestCloseTripEditor;$('#closeTripDialog').onclick=requestCloseTripEditor;$('#tripUnsavedCancel')?.addEventListener('click',()=>$('#tripUnsavedDialog').close());$('#tripUnsavedLeave')?.addEventListener('click',()=>{$('#tripUnsavedDialog').close();closeTripEditorNow()});let tripSaveAndContinue=false;$('#tripUnsavedSaveContinue')?.addEventListener('click',()=>{tripSaveAndContinue=true;$('#tripUnsavedDialog').close();$('#tripForm')?.requestSubmit()});$('#tripUnsavedSave')?.addEventListener('click',()=>{tripSaveAndContinue=false;$('#tripUnsavedDialog').close();$('#tripForm')?.requestSubmit()});$('#deleteTripBtn').onclick=()=>{const t=state.trips.find(x=>String(x.id)===String(editingTripId));if(!t)return;showWozzaConfirm('Remove trip?',`Send “${t.name}” to the recycle bin?`,()=>{state.tripRecycleBin.unshift({...structuredClone(t),removedAt:Date.now()});state.trips=state.trips.filter(x=>String(x.id)!==String(t.id));closeTripEditor();save();toast(`${t.name} moved to recycle bin`)},'Move to recycle bin')};
function parseCities(raw){return {}}
$$('#tripRatingInput button').forEach(b=>b.onclick=()=>{const n=Number(b.dataset.rating),current=Number($('#tripRating').value)||0;setTripRatingInput(current===1&&n===1?0:n)});
$('#tripForm').onsubmit=e=>{e.preventDefault();const stops=collectDestinationStops(),countries=[...new Set(stops.map(d=>d.country).filter(Boolean))];if(!countries.length){showWozzaAlert('Please choose a country for at least one stop.');return}let name=$('#tripName').value.trim();if(!name)name=countries.length===1?countries[0]:countries.join(' & ');const firstStop=stops[0]||{},lastStop=stops[stops.length-1]||firstStop,start=firstStop.start||'',end=(stops.length===1?firstStop.end:lastStop.end)||'';const companions=[...new Set($$('#tripCompanionBank .companion-tag.selected').map(b=>b.dataset.companion).filter(Boolean))];const vibes=[...new Set($$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe).filter(Boolean))];const existing=editingTripId?state.trips.find(x=>String(x.id)===String(editingTripId)):null,oldCountries=existing?tripCountries(existing).slice():[],t=existing||{id:crypto.randomUUID?.()||String(Date.now())};const tripStatus=existing?.status||'upcoming',hadLegacyDates=!!existing&&!(existing.destinations||[]).some(d=>d.start||d.end)&&!!(existing.start||existing.end),safeStart=hadLegacyDates&&!start?existing.start||'':start,safeEnd=hadLegacyDates&&!end?existing.end||'':end;Object.assign(t,{name,start:safeStart,end:safeEnd,countries,destinations:stops,cities:{},companions,vibes,plan:existing?.plan||'',todos:collectTripTodos(),notes:$('#tripNotes').value.trim(),rating:Number($('#tripRating').value)||0,status:tripStatus});if(!existing)state.trips.push(t);countries.forEach(c=>{if(!state.countryAddedAt[c])state.countryAddedAt[c]=new Date().toISOString()});reconcileTripCountryStatuses([...oldCountries,...countries]);save();if(tripSaveAndContinue){tripSaveAndContinue=false;editingTripId=t.id;setTripDialogMode(true);rememberTripEditorSnapshot();toast(existing?'Trip updated ✓':'Trip created ✈');return}editingTripId=null;tripEditorSnapshot='';$('#tripDialog').close();toast(existing?'Trip updated ✓':'Trip created ✈')};
$('#cityForm').onsubmit=e=>{e.preventDefault();const typed=$('#cityInput').value.trim(),name=canonicalCity(typed),month=$('#cityMonth').value;if(!typed||!currentCountry)return;if(!name){alert('Please choose a destination from the WozzaWorld suggestions.');return;}state.cities[currentCountry]??=[];let rec=state.cities[currentCountry].find(x=>x.name.toLowerCase()===name.toLowerCase());if(!rec){rec={name,visits:[]};state.cities[currentCountry].push(rec)}if(month&&!rec.visits.includes(month))rec.visits.push(month);$('#cityInput').value='';$('#cityMonth').value='';save()};$('#placeForm').onsubmit=e=>{e.preventDefault();const v=$('#placeInput').value.trim();if(v){(state.places[currentCountry]??=[]).push(v);$('#placeInput').value='';save()}};$('#companionForm').onsubmit=e=>{e.preventDefault();const v=addToCompanionBank($('#companionInput').value.trim());if(v){state.companions[currentCountry]??=[];if(!state.companions[currentCountry].some(x=>x.toLowerCase()===v.toLowerCase()))state.companions[currentCountry].push(v);$('#companionInput').value='';save()}};let memoryTimer;$('#memoryNotes').oninput=e=>{clearTimeout(memoryTimer);memoryTimer=setTimeout(()=>{state.memories[currentCountry]=e.target.value;localStorage.setItem('wozzaworld-state',JSON.stringify(state));renderCountryLists()},250)};$('#confirmRemove').onclick=e=>{e.preventDefault();if(pendingRemoveCountry)removeCountry(pendingRemoveCountry,pendingRemoveStatus);pendingRemoveCountry=null;pendingRemoveStatus=null;$('#removeDialog').close()};
const carousel=$('#countryCarousel');if(carousel){
  /* One gesture owner for the overview country rows.
     Horizontal = exactly one cyclic tab step; vertical = native page scroll. */
  carousel.style.touchAction='pan-y';
  let sx=0,sy=0,drag=false,direction=null,swipedAt=0;
  carousel.onpointerdown=e=>{
    if(e.pointerType==='mouse'&&e.button!==0){drag=false;return}
    if(e.target.closest('button,input,select,textarea,a')){drag=false;return}
    sx=e.clientX;sy=e.clientY;drag=true;direction=null;
  };
  carousel.onpointermove=e=>{
    if(window.__wozzaBucketReorderActive){drag=false;direction=null;return}
    if(!drag||direction)return;
    const dx=e.clientX-sx,dy=e.clientY-sy;
    if(Math.abs(dx)<8&&Math.abs(dy)<8)return;
    if(Math.abs(dy)>=Math.abs(dx)){direction='vertical';drag=false}
    else direction='horizontal';
  };
  carousel.onpointerup=e=>{
    if(window.__wozzaBucketReorderActive){drag=false;direction=null;return}
    if(!drag||direction==='vertical'){drag=false;direction=null;return}
    const dx=e.clientX-sx,dy=e.clientY-sy;
    drag=false;direction=null;
    if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.35){
      swipedAt=Date.now();
      const step=dx<0?1:-1;
      setCountrySlide((countrySlide+step+3)%3,true,step>0?'next':'prev');
    }
  };
  carousel.onpointercancel=()=>{drag=false;direction=null};
  carousel.addEventListener('click',e=>{
    if(Date.now()-swipedAt<450){e.preventDefault();e.stopImmediatePropagation()}
  },true);
}setCountrySlide(0,false);const ps=$('#passportStatsTrack');if(ps&&!ps.dataset.ready){ps.dataset.ready='1';let px=0,py=0;ps.onpointerdown=e=>{clearInterval(passportStatsAutoTimer);px=e.clientX;py=e.clientY};ps.onpointerup=e=>{const dx=e.clientX-px,dy=e.clientY-py;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)setPassportStatsSlide(passportStatsSlide+(dx<0?1:-1));restartPassportStatsAuto()};ps.onpointercancel=restartPassportStatsAuto;setPassportStatsSlide(0);restartPassportStatsAuto()}[['.summary.visited',0],['.summary.going',1],['.summary.bucket',2]].forEach(([sel,i])=>{const el=$(sel);el.setAttribute('role','button');el.setAttribute('tabindex','0');const jump=()=>{setCountrySlide(i,true,i>=countrySlide?'next':'prev')};el.onclick=jump;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();jump()}}});

/* Home status tabs: cyclic left/right swipe without changing vertical scroll position. */
const homeStatusSummary=document.querySelector('.map-summary');
if(homeStatusSummary&&!homeStatusSummary.dataset.cycleSwipeReady){
  homeStatusSummary.dataset.cycleSwipeReady='1';
  let statusSwipeX=0,statusSwipeY=0,statusSwipe=false;
  homeStatusSummary.addEventListener('pointerdown',e=>{
    if(e.target.closest('button,input,a')){statusSwipe=false;return}
    statusSwipeX=e.clientX;statusSwipeY=e.clientY;statusSwipe=true;
  });
  homeStatusSummary.addEventListener('pointerup',e=>{
    if(!statusSwipe)return;
    statusSwipe=false;
    const dx=e.clientX-statusSwipeX,dy=e.clientY-statusSwipeY;
    if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.2){
      setCountrySlide(countrySlide+(dx<0?1:-1),true,dx<0?'next':'prev');
    }
  });
  homeStatusSummary.addEventListener('pointercancel',()=>statusSwipe=false);
}


/* Country-list swipe is intentionally handled only by #countryCarousel above. */

// v0.15.2 — quiet plane animation layer on the HOME map overview only.
const travelAnim=$('#travelAnimations');
const NS='http://www.w3.org/2000/svg';
const planeRoutes=[
  'M 80 170 C 250 80 430 95 610 165 C 755 220 860 185 955 105',
  'M 940 335 C 790 275 665 250 540 285 C 385 330 250 285 80 225',
  'M 110 390 C 260 330 390 230 520 175 C 665 115 800 125 925 190',
  'M 900 115 C 760 160 650 215 525 230 C 365 250 245 190 95 105'
];
function svgEl(tag,attrs={}){const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));return e}
function runTravelVehicle(){
  if(!travelAnim||document.hidden)return scheduleTravel(4000);
  const d=planeRoutes[Math.floor(Math.random()*planeRoutes.length)];
  const g=svgEl('g',{'class':'travel-vehicle plane'});
  const ghost=svgEl('path',{d,fill:'none',stroke:'transparent'});
  const trail=svgEl('g',{'class':'gradient-contrail'});
  const segs=[];
  for(let i=0;i<8;i++){const s=svgEl('line',{'class':'contrail-segment'});trail.appendChild(s);segs.push(s)}
  const icon=svgEl('text',{'class':'travel-icon plane-icon','text-anchor':'middle','dominant-baseline':'central'});icon.textContent='✈';
  g.append(ghost,trail,icon);travelAnim.appendChild(g);
  const len=ghost.getTotalLength(),duration=22000+Math.random()*9000,start=performance.now();
  function frame(now){
    if(!g.isConnected)return;
    const t=Math.min(1,(now-start)/duration),head=len*t,pt=ghost.getPointAtLength(head),pt2=ghost.getPointAtLength(Math.min(len,head+2));
    icon.setAttribute('transform',`translate(${pt.x} ${pt.y}) rotate(${Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI})`);
    const tailLen=Math.min(88,head),step=tailLen/segs.length;
    segs.forEach((s,i)=>{const a=Math.max(0,head-step*(i+1)),b=Math.max(0,head-step*i),p1=ghost.getPointAtLength(a),p2=ghost.getPointAtLength(b);s.setAttribute('x1',p1.x);s.setAttribute('y1',p1.y);s.setAttribute('x2',p2.x);s.setAttribute('y2',p2.y);s.style.opacity=String(.08+.72*((segs.length-i)/segs.length)**2)});
    if(t<1)requestAnimationFrame(frame);else{g.animate([{opacity:1},{opacity:0}],{duration:900,fill:'forwards'}).onfinish=()=>g.remove();scheduleTravel(5000+Math.random()*10000)}
  }
  requestAnimationFrame(frame);
}
function scheduleTravel(delay){setTimeout(()=>{const active=travelAnim?.querySelectorAll('.travel-vehicle.plane').length||0;if(active>=3)return scheduleTravel(4500);runTravelVehicle()},delay)}
// Three independent, slow plane streams; never more than three planes at once.
scheduleTravel(1800);scheduleTravel(7000);scheduleTravel(12500);


function refreshVisitedFilterUI(){const prefs=state.visitedListPrefs||{sort:'default',year:'all'},btn=$('#visitedFilterBtn');if(btn)btn.classList.toggle('is-active',prefs.sort!=='default'||prefs.year!=='all'||prefs.rating!=='all')}
const visitedSortOptions=[
 ['default','Current order'],['az','Alphabetical A–Z'],['za','Alphabetical Z–A'],
 ['added-new','Date added — newest first'],['added-old','Date added — oldest first'],
 ['trip-new','Trip date — newest first'],['trip-old','Trip date — oldest first'],
 ['people-high','People travelled with — highest to lowest'],['people-low','People travelled with — lowest to highest'],['rating-high','Rating — highest to lowest'],['rating-low','Rating — lowest to highest']
];
function closePickerMenus(except=''){['visitedSortMenu','visitedYearMenu','visitedRatingMenu'].forEach(id=>{if(id===except)return;const m=$('#'+id),t=$('#'+id.replace('Menu','Trigger'));if(m)m.hidden=true;if(t)t.setAttribute('aria-expanded','false')})}
function renderPicker(menuId,triggerId,inputId,options,value){const menu=$('#'+menuId),trigger=$('#'+triggerId),input=$('#'+inputId);if(!menu||!trigger||!input)return;menu.innerHTML=options.map(([v,label])=>`<button type="button" class="filter-picker-option ${v===value?'selected':''}" data-value="${esc(v)}"><span>${esc(label)}</span><i>${v===value?'✓':''}</i></button>`).join('');input.value=value;trigger.querySelector('span').textContent=(options.find(x=>x[0]===value)||options[0])[1];menu.querySelectorAll('.filter-picker-option').forEach(b=>b.onclick=()=>{input.value=b.dataset.value;trigger.querySelector('span').textContent=b.querySelector('span').textContent;renderPicker(menuId,triggerId,inputId,options,b.dataset.value);menu.hidden=true;trigger.setAttribute('aria-expanded','false')});trigger.onclick=()=>{const opening=menu.hidden;closePickerMenus(opening?menuId:'');menu.hidden=!opening;trigger.setAttribute('aria-expanded',String(opening))}}
function openVisitedFilters(){const dlg=$('#visitedFilterDialog');if(!dlg)return;const years=[...new Set(allStatusCountries().filter(c=>countryHasStatus(c,'visited')).flatMap(c=>countryVisitMonths(c).map(m=>m.slice(0,4))))].filter(Boolean).sort((a,b)=>b.localeCompare(a));const yearOptions=[['all','All years'],...years.map(y=>[y,y])];const sortValue=visitedSortOptions.some(x=>x[0]===state.visitedListPrefs?.sort)?state.visitedListPrefs.sort:'default';const yearValue=years.includes(state.visitedListPrefs?.year)?state.visitedListPrefs.year:'all';const ratingOptions=[['all','All ratings'],['5','5 stars'],['4','4 stars & up'],['3','3 stars & up'],['2','2 stars & up'],['1','1 star & up']];const ratingValue=ratingOptions.some(x=>x[0]===state.visitedListPrefs?.rating)?state.visitedListPrefs.rating:'all';renderPicker('visitedSortMenu','visitedSortTrigger','visitedSort',visitedSortOptions,sortValue);renderPicker('visitedYearMenu','visitedYearTrigger','visitedYear',yearOptions,yearValue);renderPicker('visitedRatingMenu','visitedRatingTrigger','visitedRating',ratingOptions,ratingValue);closePickerMenus();dlg.showModal()}
$('#visitedFilterBtn')?.addEventListener('click',openVisitedFilters);
$('#closeVisitedFilters')?.addEventListener('click',()=>$('#visitedFilterDialog')?.close());
$('#visitedFilterDialog')?.addEventListener('click',e=>{if(e.target===$('#visitedFilterDialog'))$('#visitedFilterDialog').close()});
$('#visitedFilterDialog')?.addEventListener('submit',e=>{e.preventDefault();state.visitedListPrefs={sort:$('#visitedSort').value,year:$('#visitedYear').value,rating:$('#visitedRating').value};localStorage.setItem('wozzaworld-state',JSON.stringify(state));$('#visitedFilterDialog').close();render();refreshVisitedFilterUI()});
$('#resetVisitedFilters')?.addEventListener('click',()=>{state.visitedListPrefs={sort:'default',year:'all',rating:'all'};localStorage.setItem('wozzaworld-state',JSON.stringify(state));$('#visitedFilterDialog').close();render();refreshVisitedFilterUI()});


function savePassportName(){const input=$('#passportName');if(!input)return;const value=input.value.trim().replace(/\s+/g,' ').slice(0,24);if(value)localStorage.setItem('wozzaworld-first-name',value);else localStorage.removeItem('wozzaworld-first-name');applyWorldViewName();requestAnimationFrame(applyWorldViewName);input.value=value;toast(value?'Name updated ✓':'Name cleared')}
$('#savePassportName')?.addEventListener('click',savePassportName);$('#passportName')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();savePassportName()}});$('#openRecycleBin')?.addEventListener('click',()=>{renderRecycleBin();$('#recycleDialog')?.showModal()});$('#closeRecycleDialog')?.addEventListener('click',()=>$('#recycleDialog')?.close());
function openPassportStat(type){const dlg=$('#passportStatDialog'),title=$('#passportStatTitle'),list=$('#passportStatList');if(!dlg||!title||!list)return;let rows=[];if(type==='countries'){title.textContent='Countries visited';rows=countryRows('visited').map(c=>`${flagMarkup(c)}<span><strong>${esc(c)}</strong>${countryVisitMonth(c)?`<small>${esc(countryVisitMonth(c))}</small>`:''}</span>`)}else if(type==='cities'){title.textContent='Destinations visited';rows=countryRows('visited').flatMap(c=>countryCityDisplay(c).map(x=>`${flagMarkup(c)}<span><strong>${esc(x.name)}</strong><small>${esc(c)}</small></span>`))}else if(type==='upcoming'){title.textContent='Upcoming trips';const trips=state.trips.filter(t=>tripIsOnHorizon(t)||(t.start&&countdownDays(t.start)>=0)).sort((a,b)=>{if(a.start&&b.start)return a.start.localeCompare(b.start);if(a.start)return -1;if(b.start)return 1;return String(a.name||'').localeCompare(String(b.name||''))});rows=trips.map(t=>`<span class="stat-plane">✈</span><span><strong>${esc(t.name)}</strong><small>${tripCountries(t).map(esc).join(' · ')} · ${t.start?pretty(t.start):'Dates to be confirmed'}</small></span>`)}else{title.textContent='Trips completed';rows=state.trips.slice().sort((a,b)=>(a.start||'9999').localeCompare(b.start||'9999')).map(t=>`<span class="stat-plane">✈</span><span><strong>${esc(t.name)}</strong><small>${tripCountries(t).map(esc).join(' · ')}${t.start?' · '+pretty(t.start):''}</small></span>`)}list.innerHTML=rows.length?rows.map(x=>`<div class="passport-stat-row">${x}</div>`).join(''):'<p class="muted">Nothing to show yet.</p>';dlg.showModal()}
$$('.passport-stat').forEach(b=>b.onclick=()=>openPassportStat(b.dataset.stat));$('#closePassportStat')?.addEventListener('click',()=>$('#passportStatDialog')?.close());$('#passportStatDialog')?.addEventListener('click',e=>{if(e.target===$('#passportStatDialog'))$('#passportStatDialog').close()});

// v0.17.2 — free, local canonical country/city selection (no API dependency).
const LOCAL_CITIES=Array.isArray(window.WOZZAWORLD_CITIES)?window.WOZZAWORLD_CITIES:[];
const cityLookup=new Map(LOCAL_CITIES.map(n=>[String(n).trim().toLocaleLowerCase(),n]));
function canonicalCity(v){return cityLookup.get(String(v||'').trim().toLocaleLowerCase())||''}
function canonicalCountry(v){const raw=String(v||'').trim(),pool=(availableCountries.length?availableCountries:Object.keys(flags));return pool.find(c=>c.toLocaleLowerCase()===raw.toLocaleLowerCase())||''}
function ensureLocalDataLists(){
  let cityDL=document.getElementById('wwCityChoices');if(!cityDL){cityDL=document.createElement('datalist');cityDL.id='wwCityChoices';cityDL.innerHTML=LOCAL_CITIES.map(c=>`<option value="${esc(c)}"></option>`).join('');document.body.appendChild(cityDL)}
  const ci=$('#cityInput');if(ci){ci.setAttribute('list','wwCityChoices');ci.setAttribute('autocomplete','off');ci.placeholder='Start typing a city…'}
  const tc=$('#tripCountries');if(tc){tc.setAttribute('autocomplete','off');tc.placeholder='Type exact country names, comma separated'}
}
ensureLocalDataLists();

setupCountrySearch();buildMap();render();refreshVisitedFilterUI();

/* WozzaWorld custom calendar v2: top-layer dialog + robust date-input trigger.
   Visual picker only; stored dates remain YYYY-MM-DD. */
(()=>{
  document.getElementById('wozza-calendar-style')?.remove();
  const st=document.createElement('style');st.id='wozza-calendar-style';st.textContent=`
  #wozzaCalendarOverlay{width:min(390px,calc(100vw - 28px));max-width:none;padding:0;border:0;border-radius:24px;background:transparent;box-shadow:none;overflow:visible;color:#073f52}
  #wozzaCalendarOverlay::backdrop{background:rgba(7,63,82,.24);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
  .wozza-calendar{width:100%;background:#f4fbfc;border-radius:24px;box-shadow:0 22px 60px rgba(7,63,82,.28);overflow:hidden;color:#073f52;font-family:inherit}
  .wozza-calendar-head{background:#087b8c;color:white;padding:20px 22px}.wozza-calendar-picked{font-size:25px;font-weight:800;line-height:1.15}
  .wozza-calendar-nav{display:grid;grid-template-columns:44px 1fr 44px;align-items:center;padding:13px 14px 8px}.wozza-calendar-nav button{border:0;background:transparent;color:#073f52;font-size:28px;line-height:40px;border-radius:50%;cursor:pointer}.wozza-calendar-nav button:active{background:#dcebed}.wozza-calendar-month{border:0!important;background:transparent!important;color:#073f52!important;text-align:center;font:inherit!important;font-size:17px!important;font-weight:800!important;cursor:pointer;padding:8px;border-radius:10px}.wozza-calendar-month:active{background:#dcebed!important}
  .wozza-calendar-week,.wozza-calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);padding:0 14px}.wozza-calendar-week span{text-align:center;font-size:11px;font-weight:800;color:#6f7e82;padding:8px 0}.wozza-calendar-grid{row-gap:4px}.wozza-calendar-day{width:42px;height:42px;aspect-ratio:1/1;justify-self:center;padding:0;border:0;background:transparent;border-radius:50%;font:inherit;font-weight:700;color:#073f52;cursor:pointer}.wozza-calendar-day.today{box-shadow:inset 0 0 0 2px #087b8c}.wozza-calendar-day.selected{background:#e9bd25;color:#17213D;box-shadow:none}.wozza-calendar-day:active{transform:scale(.94)}
  .wozza-calendar-years{display:none;max-height:330px;overflow:auto;padding:12px 18px 18px;grid-template-columns:repeat(3,1fr);gap:8px;scrollbar-width:none}.wozza-calendar-years::-webkit-scrollbar{display:none}.wozza-calendar.year-mode .wozza-calendar-week,.wozza-calendar.year-mode .wozza-calendar-grid{display:none}.wozza-calendar.year-mode .wozza-calendar-years{display:grid}.wozza-calendar-year{border:0;background:transparent;color:#073f52;border-radius:12px;padding:12px 6px;font:inherit;font-weight:750;cursor:pointer}.wozza-calendar-year.current{box-shadow:inset 0 0 0 2px #087b8c}.wozza-calendar-year.viewing{background:#e9bd25;color:#17213D;box-shadow:none}
  .wozza-calendar-actions{display:flex;gap:10px;justify-content:flex-end;padding:15px 18px 19px}.wozza-calendar-actions button{border:0;border-radius:10px;padding:11px 18px;color:white;font:inherit;font-weight:800;cursor:pointer}.wozza-calendar-cancel{background:#d9534f}.wozza-calendar-ok{background:#25b14b}.wozza-calendar-clear{margin-right:auto!important;background:white!important;color:#073f52!important;box-shadow:inset 0 0 0 1px #dcebed}
  .trip-stop-dates input[type=date][readonly]{cursor:pointer}
  `;document.head.appendChild(st);
})();
let wozzaCalendarTarget=null,wozzaCalendarSelected='',wozzaCalendarView=null;
function wozzaIsoDate(d){const pad=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function wozzaDateFromIso(v){if(!/^\d{4}-\d{2}-\d{2}$/.test(v||''))return null;const [y,m,d]=v.split('-').map(Number),x=new Date(y,m-1,d);return x.getFullYear()===y&&x.getMonth()===m-1&&x.getDate()===d?x:null}
function wozzaCalendarEnsure(){let ov=document.getElementById('wozzaCalendarOverlay');if(ov)return ov;ov=document.createElement('dialog');ov.id='wozzaCalendarOverlay';ov.setAttribute('aria-label','Choose date');ov.innerHTML=`<div class="wozza-calendar"><div class="wozza-calendar-head"><div class="wozza-calendar-picked"></div></div><div class="wozza-calendar-nav"><button type="button" data-cal-prev aria-label="Previous month">‹</button><button type="button" class="wozza-calendar-month" aria-label="Choose year"></button><button type="button" data-cal-next aria-label="Next month">›</button></div><div class="wozza-calendar-week"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div><div class="wozza-calendar-grid"></div><div class="wozza-calendar-years" aria-label="Choose year"></div><div class="wozza-calendar-actions"><button type="button" class="wozza-calendar-clear">Clear</button><button type="button" class="wozza-calendar-cancel">Cancel</button><button type="button" class="wozza-calendar-ok">OK</button></div></div>`;document.body.appendChild(ov);ov.querySelector('.wozza-calendar-month').onclick=()=>wozzaCalendarToggleYears();ov.querySelector('[data-cal-prev]').onclick=()=>{if(ov.querySelector('.wozza-calendar')?.classList.contains('year-mode')){wozzaCalendarView=new Date(wozzaCalendarView.getFullYear()-1,wozzaCalendarView.getMonth(),1)}else{wozzaCalendarView=new Date(wozzaCalendarView.getFullYear(),wozzaCalendarView.getMonth()-1,1)}wozzaCalendarRender()};ov.querySelector('[data-cal-next]').onclick=()=>{if(ov.querySelector('.wozza-calendar')?.classList.contains('year-mode')){wozzaCalendarView=new Date(wozzaCalendarView.getFullYear()+1,wozzaCalendarView.getMonth(),1)}else{wozzaCalendarView=new Date(wozzaCalendarView.getFullYear(),wozzaCalendarView.getMonth()+1,1)}wozzaCalendarRender()};ov.querySelector('.wozza-calendar-cancel').onclick=wozzaCalendarClose;ov.querySelector('.wozza-calendar-clear').onclick=()=>{wozzaCalendarSelected='';wozzaCalendarCommit()};ov.querySelector('.wozza-calendar-ok').onclick=wozzaCalendarCommit;ov.addEventListener('cancel',e=>{e.preventDefault();wozzaCalendarClose()});ov.addEventListener('click',e=>{if(e.target===ov)wozzaCalendarClose()});return ov}
function wozzaCalendarToggleYears(){const ov=wozzaCalendarEnsure(),cal=ov.querySelector('.wozza-calendar');cal.classList.toggle('year-mode');wozzaCalendarRender();if(cal.classList.contains('year-mode'))requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-year.viewing')?.scrollIntoView({block:'center'}))}
function wozzaCalendarRenderYears(ov,view){const years=ov.querySelector('.wozza-calendar-years');if(!years)return;const thisYear=new Date().getFullYear();let html='';for(let y=1900;y<=2125;y++)html+=`<button type="button" class="wozza-calendar-year${y===thisYear?' current':''}${y===view.getFullYear()?' viewing':''}" data-cal-year="${y}">${y}</button>`;years.innerHTML=html;years.querySelectorAll('[data-cal-year]').forEach(b=>b.onclick=()=>{wozzaCalendarView=new Date(Number(b.dataset.calYear),view.getMonth(),1);ov.querySelector('.wozza-calendar').classList.remove('year-mode');wozzaCalendarRender()})}
function wozzaCalendarRender(){const ov=wozzaCalendarEnsure(),view=wozzaCalendarView||new Date(),sel=wozzaDateFromIso(wozzaCalendarSelected),today=new Date();ov.querySelector('.wozza-calendar-month').textContent=view.toLocaleDateString('en-GB',{month:'long',year:'numeric'});wozzaCalendarRenderYears(ov,view);ov.querySelector('.wozza-calendar-picked').textContent=sel?sel.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'long',year:'numeric'}):'No date selected';const first=new Date(view.getFullYear(),view.getMonth(),1),days=new Date(view.getFullYear(),view.getMonth()+1,0).getDate(),offset=(first.getDay()+6)%7,grid=ov.querySelector('.wozza-calendar-grid');let html='';for(let i=0;i<offset;i++)html+='<span></span>';for(let d=1;d<=days;d++){const x=new Date(view.getFullYear(),view.getMonth(),d),iso=wozzaIsoDate(x),isToday=x.getFullYear()===today.getFullYear()&&x.getMonth()===today.getMonth()&&d===today.getDate();html+=`<button type="button" class="wozza-calendar-day${iso===wozzaCalendarSelected?' selected':''}${isToday?' today':''}" data-cal-date="${iso}">${d}</button>`}grid.innerHTML=html;grid.querySelectorAll('[data-cal-date]').forEach(b=>b.onclick=()=>{wozzaCalendarSelected=b.dataset.calDate;wozzaCalendarRender()})}
function wozzaCalendarOpen(input){if(!input?.isConnected)return;wozzaCalendarTarget=input;const row=input.closest('.trip-destination-stop'),isEnd=input.classList.contains('trip-destination-to'),start=row?.querySelector('.trip-destination-from')?.value||'',existing=input.value||'',seed=existing||(isEnd?start:'')||wozzaIsoDate(new Date()),d=wozzaDateFromIso(seed)||new Date();wozzaCalendarSelected=existing;wozzaCalendarView=new Date(d.getFullYear(),d.getMonth(),1);const ov=wozzaCalendarEnsure();ov.querySelector('.wozza-calendar')?.classList.remove('year-mode');wozzaCalendarRender();if(!ov.open)ov.showModal();requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-cancel')?.focus())}
function wozzaCalendarClose(){const ov=document.getElementById('wozzaCalendarOverlay');if(ov?.open)ov.close();wozzaCalendarTarget=null}
function wozzaCalendarCommit(){if(!wozzaCalendarTarget)return wozzaCalendarClose();wozzaCalendarTarget.value=wozzaCalendarSelected;wozzaCalendarTarget.dispatchEvent(new Event('input',{bubbles:true}));wozzaCalendarTarget.dispatchEvent(new Event('change',{bubbles:true}));updateStopSummary(wozzaCalendarTarget.closest('.trip-destination-stop'));refreshTripEditorSummaryLine();wozzaCalendarClose()}
function bindWozzaDateInputs(root=document){root.querySelectorAll?.('.trip-destination-from,.trip-destination-to').forEach(input=>{input.readOnly=true;input.dataset.wozzaCalendarBound='1'})}
/* Capture the press before Android can invoke its native picker. Delegation also covers newly-added stops. */
document.addEventListener('pointerdown',e=>{const input=e.target.closest?.('.trip-destination-from,.trip-destination-to');if(!input)return;e.preventDefault();e.stopPropagation();input.readOnly=true;wozzaCalendarOpen(input)},true);
document.addEventListener('click',e=>{const input=e.target.closest?.('.trip-destination-from,.trip-destination-to');if(!input)return;e.preventDefault();e.stopPropagation();if(!document.getElementById('wozzaCalendarOverlay')?.open)wozzaCalendarOpen(input)},true);
document.addEventListener('keydown',e=>{const input=e.target.closest?.('.trip-destination-from,.trip-destination-to');if(!input||(e.key!=='Enter'&&e.key!==' '))return;e.preventDefault();wozzaCalendarOpen(input)},true);

if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=0.17.2',{updateViaCache:'none'}));const hide=()=>$('#launchSplash')?.classList.add('hide');window.addEventListener('load',()=>setTimeout(hide,2850),{once:true});setTimeout(hide,3350);


// v0.14.9 — web-only install button, matching WozzaWatch behaviour.
let deferredInstallPrompt = null;
const installBtn = document.getElementById('installBtn');
const installHelp = document.getElementById('installHelp');
const installHelpClose = document.getElementById('installHelpClose');
const isStandaloneApp = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const syncInstallButton = () => {
  if (!installBtn) return;
  installBtn.classList.toggle('hidden', isStandaloneApp());
};
syncInstallButton();
window.matchMedia('(display-mode: standalone)').addEventListener?.('change', syncInstallButton);
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  syncInstallButton();
});
installBtn?.addEventListener('click', async () => {
  if (isStandaloneApp()) { syncInstallButton(); return; }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch (e) {}
    deferredInstallPrompt = null;
    return;
  }
  installHelp?.classList.add('show');
});
installHelpClose?.addEventListener('click', () => installHelp?.classList.remove('show'));
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installBtn?.classList.add('hidden');
  installHelp?.classList.remove('show');
});

// v0.15.9 — dynamic passport-stamp World View name (installed app only) and responsive map title.
const isInstalledWozzaWorld=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
function worldViewFirstName(){return (localStorage.getItem('wozzaworld-first-name')||'').trim()}
function fitWorldViewStampName(){
  const sig=document.getElementById('worldViewSignature'),x=sig?.querySelector('.stamp-name'),main=sig?.querySelector('.stamp-main'),plane=sig?.querySelector('.stamp-plane');
  if(!sig||!x||!main||!x.textContent)return;
  const full=(x.dataset.fullName||x.textContent).replace(/\s+/g,' ').trim();
  x.dataset.fullName=full;x.textContent=full;
  x.style.removeProperty('font-size');x.style.removeProperty('letter-spacing');x.style.removeProperty('white-space');x.style.removeProperty('line-height');x.style.removeProperty('transform');x.style.removeProperty('max-width');
  sig.classList.remove('stamp-name-wrapped','stamp-name-three-line');
  // Ordinary names keep the original clean one-line stamp. Only genuinely long names use fitting/wrapping.
  if(full.length<=12){
    x.style.setProperty('white-space','nowrap','important');
    return;
  }
  requestAnimationFrame(()=>{
    const mainBox=main.getBoundingClientRect(),planeBox=plane?.getBoundingClientRect();
    // Reserve the plane as a hard no-text zone. Long names may use three lines,
    // but never grow or move the stamp itself.
    const safety=18;
    const available=Math.max(34,(planeBox?planeBox.left-mainBox.left:main.clientWidth)-safety);
    let base=parseFloat(getComputedStyle(x).fontSize)||18,size=base,min=Math.max(9,base*.54);
    x.style.setProperty('max-width',available+'px','important');
    while(x.scrollWidth>available&&size>min){size=Math.max(min,size-.4);x.style.setProperty('font-size',size+'px','important');x.style.setProperty('letter-spacing','0','important')}
    if(x.scrollWidth<=available)return;

    const possessive=full.endsWith("'S")?"'S":'',bare=possessive?full.slice(0,-2):full;
    const chunks=[];
    if(bare.includes('-')){
      const parts=bare.split('-').filter(Boolean);
      parts.forEach((part,i)=>chunks.push(part+(i<parts.length-1?'-':'')));
    }else{
      // For an unusually long unhyphenated first name, split into visually balanced chunks.
      const target=Math.ceil(bare.length/3);
      for(let i=0;i<bare.length;i+=target)chunks.push(bare.slice(i,i+target));
    }
    if(chunks.length<2){const cut=Math.ceil(bare.length/2);chunks.splice(0,chunks.length,bare.slice(0,cut),bare.slice(cut))}
    // Keep a maximum of three name lines. If there are more chunks, merge the tail.
    while(chunks.length>3)chunks[chunks.length-2]+=chunks.pop();
    chunks[chunks.length-1]+=possessive;
    x.innerHTML=chunks.map(v=>`<span>${esc(v)}</span>`).join('');
    sig.classList.add('stamp-name-wrapped');
    if(chunks.length===3)sig.classList.add('stamp-name-three-line');
    x.style.setProperty('white-space','normal','important');
    x.style.setProperty('letter-spacing','0','important');
    x.style.setProperty('line-height','.88','important');
    // Three lines deliberately use the spare vertical area above WORLD VIEW.
    x.style.setProperty('transform',chunks.length===3?'translateY(-17px)':'translateY(-10px)','important');
    x.style.setProperty('max-width',available+'px','important');
    const lines=[...x.querySelectorAll('span')];
    lines.forEach(line=>{line.style.display='block';line.style.whiteSpace='nowrap';line.style.maxWidth=available+'px'});
    size=Math.max(9,base*(chunks.length===3?.60:.66));
    x.style.setProperty('font-size',size+'px','important');
    const widest=()=>Math.max(...lines.map(line=>line.scrollWidth));
    while(widest()>available&&size>8.5){size=Math.max(8.5,size-.3);x.style.setProperty('font-size',size+'px','important')}
  });
}
function fitHomeWorldOverviewTitle(){
  const title=document.getElementById('homeWorldOverviewTitle');
  if(!title)return;
  requestAnimationFrame(()=>{
    const cs=getComputedStyle(title);
    const pad=(parseFloat(cs.paddingLeft)||0)+(parseFloat(cs.paddingRight)||0);
    const available=Math.max(120,title.clientWidth-pad-2);
    // Fit the complete label to the card width: short names grow, long names shrink.
    // Keep a tiny lower bound only as a safety net; never clip the text at a preset minimum.
    const min=6,max=34;

    // Measure the full, unclipped label independently from the fixed-width title box.
    const probe=document.createElement('span');
    probe.textContent=title.textContent;
    probe.style.cssText='position:absolute;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;left:-99999px;top:-99999px;';
    probe.style.fontFamily=cs.fontFamily;
    probe.style.fontWeight=cs.fontWeight;
    probe.style.fontStyle=cs.fontStyle;
    probe.style.letterSpacing=cs.letterSpacing;
    probe.style.textTransform=cs.textTransform;
    document.body.appendChild(probe);

    let lo=min,hi=max,best=min;
    for(let i=0;i<14;i++){
      const mid=(lo+hi)/2;
      probe.style.fontSize=mid+'px';
      if(probe.getBoundingClientRect().width<=available){best=mid;lo=mid}else hi=mid;
    }
    probe.remove();
    title.style.setProperty('font-size',best.toFixed(2)+'px','important');
  });
}
function ensureHomeWorldOverviewTitle(){
  const card=document.querySelector('.screen[data-screen="home"] > .map-card');
  if(!card)return null;
  let title=card.querySelector('#homeWorldOverviewTitle');
  if(!title){
    title=document.createElement('div');
    title.id='homeWorldOverviewTitle';
    title.className='home-world-overview-title';
    card.prepend(title);
  }
  return title;
}
function applyWorldViewName(){
  const n=worldViewFirstName();
  // Keep the original stamp component and all of its fitting code intact for future reuse,
  // but retire it from the Home overview.
  const sig=document.getElementById('worldViewSignature');
  if(sig){
    const x=sig.querySelector('.stamp-name');
    if(x){const label=n?n.toUpperCase()+"'S":'';x.textContent=label;x.dataset.fullName=label;x.removeAttribute('title');sig.dataset.nameLength=String(label.length);fitWorldViewStampName()}
  }
  const title=ensureHomeWorldOverviewTitle();
  if(title){
    const displayName=(n||'YOUR').toUpperCase();
    title.textContent=displayName+"'S WORLD OVERVIEW";
    fitHomeWorldOverviewTitle();
  }
}
function requestWorldViewName(){
  if(!isInstalledWozzaWorld()||worldViewFirstName())return applyWorldViewName();
  setTimeout(()=>{const value=window.prompt('Welcome to WozzaWorld! What’s your first name?');if(value?.trim()){localStorage.setItem('wozzaworld-first-name',value.trim().split(/\s+/)[0].slice(0,24))}applyWorldViewName()},1950);
}
window.addEventListener('load',requestWorldViewName,{once:true});
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',applyWorldViewName);
window.addEventListener('orientationchange',()=>setTimeout(()=>{applyWorldViewName();if(document.body.classList.contains('map-view')&&mapZoomBehavior){const portrait=window.matchMedia('(orientation: portrait)').matches;mapZoomBehavior.scaleExtent([portrait?1.15:1,56]);if(portrait){const svg=d3.select('#worldMap'),k=1.52,t=d3.zoomIdentity.translate((1000-1000*k)/2,(520-520*k)/2).scale(k);svg.call(mapZoomBehavior.transform,t)}else{const svg=d3.select('#worldMap');svg.call(mapZoomBehavior.transform,d3.zoomIdentity)}}window.dispatchEvent(new Event('resize'))},180));
applyWorldViewName();

(function(){if(document.getElementById('wozza-hotfix-048-style'))return;const st=document.createElement('style');st.id='wozza-hotfix-048-style';st.textContent=`
.trip-card-copy{min-width:0!important}.trip-card-title-row{display:block!important;width:calc(100% + 118px)!important;max-width:calc(100% + 118px)!important;min-width:0!important;overflow:hidden!important;white-space:nowrap!important;text-overflow:clip!important;padding-right:8px!important;box-sizing:border-box!important}.trip-card-title-row strong,.trip-card-title-row strong.trip-title-long,.trip-card-title-row strong.trip-title-xlong{display:inline-block!important;width:max-content!important;min-width:max-content!important;max-width:none!important;overflow:visible!important;text-overflow:clip!important;white-space:nowrap!important;will-change:transform}
.trip-editor-date-range{display:flex!important;align-items:center;gap:12px;flex-wrap:wrap}.trip-editor-transport-icons{display:inline-flex;align-items:center;gap:7px}.trip-editor-transport-icons .travel-mode-icon,.single-stop-summary-mode .travel-mode-icon{width:24px;height:24px;object-fit:contain;display:block}.trip-editor-vibe-icons,.trip-vibe-icons{display:inline-flex;align-items:center;gap:7px}.trip-editor-vibe-icons .vibe-icon,.trip-vibe-icons .vibe-icon{width:24px;height:24px;object-fit:contain;display:block}.trip-card-meta-row .trip-vibe-icons{margin-left:0}
.trip-stop-collapsed-meta{display:none!important}.trip-destination-stop.single-stop.collapsed .trip-stop-card-head{flex-wrap:nowrap}.single-stop-summary-mode{display:inline-flex}
`;document.head.appendChild(st)})();

$('#closeMilestoneDialog')?.addEventListener('click',()=>$('#milestoneDialog')?.close());

/* v0.18.59 stats drill-through */
document.addEventListener('click',e=>{
  const row=e.target.closest('.passport-mini-row');
  if(!row)return;
  const list=row.parentElement;
  const label=row.querySelector('span')?.textContent?.trim();
  if(!label)return;
  if(list?.id==='countryStats'){
    if(typeof openCountry==='function') openCountry(label);
    return;
  }
  if(list?.id==='cityStats'){
    const trips=(state.trips||[]).filter(t=>{
      const names=[...(t.destinations||[]).map(d=>String(d.name||'')),...Object.values(t.cities||{}).flat().map(String)];
      return names.some(n=>n.trim().toLowerCase()===label.toLowerCase());
    }).sort((a,b)=>new Date(b.endDate||b.startDate||0)-new Date(a.endDate||a.startDate||0));
    if(trips[0] && typeof openTrip==='function') openTrip(trips[0].id);
    return;
  }
  if(list?.id==='highestRatedStats'){
    const trip=(state.trips||[]).find(t=>String(t.name||'').trim()===label);
    if(trip && typeof openTrip==='function') openTrip(trip.id);
  }
});

/* ADD STOP flick/throw experiment disabled.
   Standard ADD STOP click behaviour is retained. */



/* v0.18.65: reuse the actual Passport cloud layer in full World View. */
function ensureWorldViewClouds(){
  const mapView=document.querySelector('.full-map-view, #fullMap, .map-fullscreen, .world-view');
  if(!mapView) return;
  if(mapView.querySelector(':scope > .worldview-cloud-clone')) return;
  const source=document.querySelector('.passport-page .sky-clouds, .passport-view .sky-clouds, .sky-clouds');
  if(!source) return;
  const clouds=source.cloneNode(true);
  clouds.classList.add('worldview-cloud-clone');
  clouds.removeAttribute('hidden');
  clouds.setAttribute('aria-hidden','true');
  mapView.prepend(clouds);
}


document.addEventListener('click',e=>{
  if(e.target.closest('[data-open-map],#openFullMap,.open-full-map,.map-preview')){
    requestAnimationFrame(()=>requestAnimationFrame(ensureWorldViewClouds));
  }
});
window.addEventListener('hashchange',()=>requestAnimationFrame(ensureWorldViewClouds));


// v0.18.87 — consistent trip section rhythm + long-name stamp safe area polish.
(function(){if(document.getElementById('wozza-hotfix-087-style'))return;const st=document.createElement('style');st.id='wozza-hotfix-087-style';st.textContent=`
#tripForm .trip-companions-section,#tripForm .trip-todo-section,#tripForm .trip-notes-section{margin-top:28px!important;margin-bottom:0!important;padding:0!important}
#tripForm .trip-companions-head,#tripForm .trip-todo-head,#tripForm .trip-notes-head{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) 54px!important;column-gap:14px!important;align-items:start!important;min-height:54px!important;padding:0!important;margin:0!important}
#tripForm .trip-companions-head>.trip-section-title,#tripForm .trip-todo-head>div,#tripForm .trip-notes-head>div{min-width:0!important;padding-top:7px!important}
#tripForm .trip-companions-head>.trip-selected-summary{grid-column:1!important;margin-top:6px!important;padding:0!important}
#tripForm .trip-section-title{margin:0!important;padding:0!important;line-height:1.08!important}
#tripForm .trip-todo-summary,#tripForm .trip-notes-summary{margin-top:8px!important;margin-bottom:0!important}
/* Empty collapsed sections have no preview row, so centre the title against the 54px + control.
   Preview-bearing sections retain the existing title + preview geometry. */
#tripForm .trip-companions-section.collapsed .trip-companions-head:has(.trip-selected-summary:empty)>.trip-section-title,
#tripForm .trip-todo-section.collapsed .trip-todo-head:has(.trip-todo-summary:empty) .trip-section-title,
#tripForm .trip-notes-section.collapsed .trip-notes-head:has(.trip-notes-summary:empty) .trip-section-title{
  padding-top:0!important;
  align-self:center!important;
  transform:translateY(11px)!important
}
#tripForm .trip-companions-section.collapsed .trip-companions-head:has(.trip-selected-summary:not(:empty))>.trip-section-title,
#tripForm .trip-todo-section.collapsed .trip-todo-head:has(.trip-todo-summary:not(:empty)) .trip-section-title,
#tripForm .trip-notes-section.collapsed .trip-notes-head:has(.trip-notes-summary:not(:empty)) .trip-section-title{
  transform:none!important
}
#tripForm .section-collapse-toggle{grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:start!important;margin:0!important;position:static!important;transform:none!important;width:54px!important;height:54px!important}
.world-view-signature .stamp-main{overflow:visible!important}
.world-view-signature .stamp-name{box-sizing:border-box!important;overflow:visible!important}
.world-view-signature.stamp-name-three-line .stamp-name span{line-height:.88!important}
`;document.head.appendChild(st)})();


// v0.18.89 — preserve World View behind country sheet + compact landscape country card.
(()=>{
  const style=document.createElement('style');
  style.id='v01889-country-context-landscape';
  style.textContent=`
    body.map-view #sheetBackdrop.open{z-index:140!important}
    body.map-view #countrySheet.open{z-index:141!important}
    body.map-view #countrySheet.open~* .map-close{pointer-events:none}
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet.sheet{width:min(900px,74vw)!important;max-height:90dvh!important;padding:5px 12px calc(9px + env(safe-area-inset-bottom))!important;border-radius:20px 20px 0 0!important}
      #countrySheet .grabber{margin-bottom:3px!important;height:3px!important}
      #countrySheet .sheet-close{width:28px!important;height:28px!important;top:6px!important;right:10px!important;font-size:18px!important}
      #countrySheet .country-hero-minimal{grid-template-columns:58px minmax(0,1fr)!important;gap:10px!important;padding:8px 12px!important;margin:2px 0 6px!important;border-radius:17px!important;min-height:0!important}
      #countrySheet .country-hero-minimal .flag img{width:58px!important;height:39px!important;border-radius:8px!important}
      #countrySheet .country-hero-copy h2{font-size:clamp(22px,3.4vw,30px)!important;line-height:1!important;margin:0 36px 4px 0!important}
      #countrySheet .country-summary-pills{gap:5px!important}
      #countrySheet .country-summary-pills span{padding:3px 7px!important;font-size:9px!important}
      #countrySheet .country-rating-summary{margin-top:3px!important}
      #countrySheet .country-status-grid{gap:6px!important;margin:5px 0!important}
      #countrySheet .country-status-grid button{min-height:54px!important;padding:4px 4px!important;border-radius:14px!important;font-size:11px!important;gap:3px!important}
      #countrySheet .country-status-grid button svg{width:24px!important;height:24px!important}
      #countrySheet .country-status-grid button span{margin-top:1px!important}
      #countrySheet .add-trip-btn,#countrySheet [data-add-trip],#countrySheet .country-add-trip{min-height:34px!important;padding:6px 12px!important;margin:5px 0!important;font-size:12px!important}
      #countrySheet .divider{margin:7px 0!important}
      #countrySheet .space-top{margin-top:8px!important}
      #countrySheet h3{margin-top:5px!important;margin-bottom:4px!important}
      #countrySheet .country-status-grid .status-icon{width:26px!important;height:26px!important;min-width:26px!important;min-height:26px!important}
      #countrySheet .country-status-grid .status-tick{width:26px!important;height:26px!important;min-width:26px!important;min-height:26px!important;font-size:16px!important;line-height:22px!important}
      #countrySheet .country-status-grid .status-clock svg,#countrySheet .country-status-grid .status-bucket svg{width:26px!important;height:26px!important;max-width:26px!important;max-height:26px!important}
      #countrySheet .country-trip-list{gap:6px!important;margin-bottom:7px!important}
      #countrySheet .country-no-trips{padding:3px 0 1px!important;margin:4px 0 6px!important;font-size:11px!important}
      #countrySheet .country-trip-card{padding:9px 11px!important;border-radius:14px!important}
      #countrySheet .country-info-summary{padding-top:8px!important}
      #countrySheet .country-info-summary h3{margin:0 0 5px!important;font-size:12px!important}
      #countrySheet .country-info-summary>div{padding:8px 10px!important;margin-top:5px!important;border-radius:12px!important}
      #countrySheet .country-info-summary p{margin-top:3px!important;font-size:10px!important;line-height:1.3!important}
      #countrySheet .country-info-summary strong{font-size:10px!important}
    }
  `;
  document.head.appendChild(style);
})();

// Stops-per-year chart + recycle-bin polish (startup-safe hotfix)
(()=>{if(document.getElementById('stops-per-year-bin-polish-style'))return;document.getElementById('trips-per-year-hotfix-style')?.remove();const st=document.createElement('style');st.id='stops-per-year-bin-polish-style';st.textContent=`.trips-per-year-chart{width:100%;padding:12px 2px 0;box-sizing:border-box}.trips-per-year-chart svg{display:block;width:100%;height:auto;overflow:visible}.trip-year-guides line{stroke:rgba(5,86,112,.13);stroke-width:1.5}.trip-year-line{fill:none;stroke:#056b89;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}.trip-year-area{fill:url(#stopYearArea)}.trips-per-year-chart circle{fill:#e9bd25;stroke:#056b89;stroke-width:3.5}.trips-per-year-chart text{font-family:inherit;font-weight:800;fill:#153047}.trip-year-value{font-size:15px}.trip-year-label,.trip-year-y-label{font-size:12px;fill:#607782}.recycle-row{position:relative!important}.recycle-row .recycle-copy{text-align:left!important;justify-self:start!important;margin-left:0!important;padding-left:0!important}.recycle-row .recycle-select-dot{position:absolute!important;left:0!important;top:50%!important;transform:translateY(-50%)!important}.recycle-list:not(.selection-mode) .recycle-row .recycle-select-dot,#recycleList:not(.selection-mode) .recycle-row .recycle-select-dot{display:none!important}.recycle-row{justify-content:flex-start!important;text-align:left!important}.recycle-row .recycle-copy{flex:1 1 auto!important;text-align:left!important}.recycle-row .recycle-actions{margin-left:auto!important}#recycleDialog::backdrop{background:rgba(5,34,51,.32)!important;backdrop-filter:blur(7px)!important;-webkit-backdrop-filter:blur(7px)!important}`;document.head.appendChild(st)})();

;(()=>{const heroSources=['belgium-country-hero.jpg','france-country-hero.jpg','antarctica-country-hero.jpg','morocco-country-hero.jpg','portugal-country-hero.jpg','switzerland-country-hero.jpg','luxembourg-country-hero.jpg','greece-country-hero.jpg','netherlands-country-hero.jpg','poland-country-hero.jpg','italy-country-hero.jpg','germany-country-hero.jpg','spain-country-hero.jpg','denmark-country-hero.jpg','ireland-country-hero.jpg','united-kingdom-country-hero.jpg','norway-country-hero.jpg','hungary-country-hero.jpg','austria-country-hero.jpg','russia-country-hero.jpg','china-country-hero.jpg','japan-country-hero.jpg','canada-country-hero.jpg','mexico-country-hero.jpg','brazil-country-hero.jpg','jamaica-country-hero.jpg','venezuela-country-hero.jpg','greenland-country-hero.jpg','iceland-country-hero.jpg','australia-country-hero.jpg','egypt-country-hero.jpg','india-country-hero.jpg','rwanda-country-hero.jpg','sudan-country-hero.jpg','united-arab-emirates-country-hero.jpg','saudi-arabia-country-hero.jpg','turkey-country-hero.jpg','iran-country-hero.jpg','iraq-country-hero.png','south-africa-country-hero.jpg','united-states-country-hero.jpg'];const warm=()=>heroSources.forEach(src=>{const img=new Image();img.src=src;if(img.decode)img.decode().catch(()=>{})});if('requestIdleCallback'in window)requestIdleCallback(warm,{timeout:1200});else setTimeout(warm,120)})();

(()=>{if(document.getElementById('trip-stop-reorder-style'))return;const st=document.createElement('style');st.id='trip-stop-reorder-style';st.textContent=`html.stop-drag-active,html.stop-drag-active body{overscroll-behavior:none!important}#tripDestinationStops .trip-destination-stop{transition:transform .16s ease,box-shadow .16s ease,opacity .16s ease;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}#tripDestinationStops .trip-destination-stop.is-dragging{transform:scale(1.018);box-shadow:0 14px 30px rgba(0,35,55,.20);opacity:.96;z-index:20;position:relative;cursor:grabbing}#tripDestinationStops .trip-destination-stop.stop-drag-settle{animation:stopDragSettle .22s ease-out}@keyframes stopDragSettle{0%{transform:scale(1.012)}65%{transform:scale(.996)}100%{transform:scale(1)}}`;document.head.appendChild(st)})();

;(()=>{
  if(window.__wozzaTripPageFreezeInstalled)return;
  window.__wozzaTripPageFreezeInstalled=true;
  let frozen=false,y=0,bodyStyle='',htmlStyle='';
  const trip=$('#tripDialog');
  if(!trip)return;
  const freeze=()=>{
    if(frozen)return;frozen=true;y=window.scrollY;
    bodyStyle=document.body.getAttribute('style')||'';
    htmlStyle=document.documentElement.getAttribute('style')||'';
    document.body.style.position='fixed';document.body.style.top=`-${y}px`;
    document.body.style.left='0';document.body.style.right='0';document.body.style.width='100%';
    document.body.style.overflow='hidden';document.documentElement.style.overscrollBehavior='none';
    document.documentElement.classList.add('trip-page-frozen');
  };
  const thaw=()=>{
    if(!frozen)return;frozen=false;
    document.body.setAttribute('style',bodyStyle);
    document.documentElement.setAttribute('style',htmlStyle);
    document.documentElement.classList.remove('trip-page-frozen');
    window.scrollTo(0,y);
  };
  const sync=()=>trip.open?freeze():thaw();
  new MutationObserver(sync).observe(trip,{attributes:true,attributeFilter:['open']});
  trip.addEventListener('close',thaw);trip.addEventListener('cancel',()=>setTimeout(thaw,0));
  sync();
})();

;(()=>{if(document.getElementById('trip-stop-floating-drag-style'))return;const st=document.createElement('style');st.id='trip-stop-floating-drag-style';st.textContent=`
.trip-stop-drag-source{visibility:hidden!important}
.trip-stop-drag-placeholder{box-sizing:border-box;border:2px dashed rgba(10,79,96,.24);border-radius:18px;background:rgba(255,255,255,.16);margin-bottom:inherit}
.trip-stop-drag-ghost{transform:scale(1.025);box-shadow:0 18px 38px rgba(0,35,55,.28)!important;opacity:.97!important;will-change:top;overflow:hidden}
`;document.head.appendChild(st)})();

;(()=>{const st=document.createElement('style');st.id='trip-stop-placeholder-size-fix';st.textContent=`
#tripDestinationStops>.trip-stop-drag-placeholder{
  flex-grow:0!important;flex-shrink:0!important;
  align-self:auto!important;position:relative!important;
  padding:0!important;overflow:hidden!important;
}
#tripDestinationStops>.trip-stop-drag-source{
  position:absolute!important;pointer-events:none!important;
  height:0!important;min-height:0!important;margin:0!important;padding:0!important;
  border:0!important;overflow:hidden!important;
}
`;document.head.appendChild(st)})();

;(()=>{if(document.getElementById('trip-stop-touch-sort-style'))return;const st=document.createElement('style');st.id='trip-stop-touch-sort-style';st.textContent=`
#tripDestinationStops>.trip-stop-mobile-marker{display:block!important;flex-grow:0!important;flex-shrink:0!important;border:0!important;background:transparent!important;padding:0!important;overflow:hidden!important;box-shadow:none!important}
.trip-stop-mobile-live{display:block!important;visibility:visible!important;opacity:.94!important;pointer-events:none!important;transform:none!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important;will-change:top,left!important;contain:none!important}
`;document.head.appendChild(st)})()



;(()=>{
 if(window.__wozzaFactsImageViewerV3)return;window.__wozzaFactsImageViewerV3=true;
 const style=document.createElement('style');style.id='wozza-facts-image-viewer-style';style.textContent=`
 .wozza-image-viewer{position:fixed;inset:0;z-index:2147483647;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0!important;border-radius:0!important;box-shadow:none!important;background:#087b8c;overflow:hidden;place-items:center;touch-action:none}\n .wozza-image-viewer[open]{display:grid}\n .wozza-image-viewer::backdrop{background:transparent}
 .wozza-image-viewer .sky-clouds{position:absolute!important;inset:-20px!important;width:calc(100% + 40px)!important;height:calc(100% + 40px)!important;pointer-events:none!important;filter:blur(4px)!important;opacity:.78!important;z-index:0!important}
 .wozza-image-viewer::after{content:'';position:absolute;inset:0;background:rgba(0,91,108,.16);backdrop-filter:blur(1px);z-index:1;pointer-events:none}
 .wozza-image-viewer-stage{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;overflow:hidden;touch-action:none;padding:72px 3vw 34px;box-sizing:border-box}
 .wozza-image-viewer-img{display:block;max-width:94vw;max-height:calc(82dvh - 58px);width:auto;height:auto;object-fit:contain;border-radius:18px;box-shadow:0 16px 50px rgba(0,35,48,.35);transform-origin:center;will-change:transform;user-select:none;-webkit-user-drag:none;touch-action:none}
 .wozza-image-viewer-caption{position:static;z-index:3;margin:0;max-width:min(92vw,980px);padding:0 10px;text-align:center;color:#fff;font:600 16px/1.35 sans-serif;text-shadow:0 2px 8px rgba(0,35,48,.55);flex:0 0 auto}
 @media (orientation:landscape){.wozza-image-viewer-stage{gap:18px;padding:28px 7vw 22px}.wozza-image-viewer-img{max-width:78vw;max-height:calc(78dvh - 44px)}.wozza-image-viewer-caption{font-size:15px;line-height:1.25}}
 .wozza-image-viewer-close{position:absolute;top:max(16px,env(safe-area-inset-top));right:max(16px,env(safe-area-inset-right));z-index:4;width:48px;height:48px;border:0;border-radius:50%;background:rgba(248,246,240,.94);font:400 34px/1 sans-serif;color:#111;display:grid;place-items:center;box-shadow:0 5px 18px rgba(0,0,0,.16)}
 `;document.head.appendChild(style);
 function countryFromFacts(facts){let c=(facts.dataset.country||facts.dataset.countryName||'').trim();if(!c){const n=facts.querySelector('[data-country-name],.country-name,.facts-country-name,.fast-facts-country,h1,h2');if(n)c=(n.dataset.countryName||n.textContent||'').trim()}if(!c&&typeof currentCountry!=='undefined')c=String(currentCountry||'').trim();return c.replace(/\s*FAST FACTS\s*/ig,' ').replace(/\s+/g,' ').trim()}
 function googleImages(c){if(!c)return;const u='https://www.google.com/search?tbm=isch&q='+encodeURIComponent(c);if(typeof openExternalLink==='function')openExternalLink(u);else if(typeof openExternal==='function')openExternal(u);else window.open(u,'_blank','noopener,noreferrer')}
 function openViewer(img){
  const viewer=document.createElement('dialog');viewer.className='wozza-image-viewer';viewer.setAttribute('aria-label','Full screen country image');
  const source=document.querySelector('.passport-page .sky-clouds, .passport-view .sky-clouds, .sky-clouds');if(source){const clouds=source.cloneNode(true);clouds.removeAttribute('hidden');clouds.setAttribute('aria-hidden','true');viewer.appendChild(clouds)}
  const stage=document.createElement('div');stage.className='wozza-image-viewer-stage';const big=document.createElement('img');big.className='wozza-image-viewer-img';big.src=img.currentSrc||img.src;big.alt=img.alt||'';big.draggable=false;stage.appendChild(big);const captionText=(img.closest('.country-guide-photo')?.dataset.caption||'').trim();if(captionText){const cap=document.createElement('p');cap.className='wozza-image-viewer-caption';cap.textContent=captionText;stage.appendChild(cap)}
  const close=document.createElement('button');close.type='button';close.className='wozza-image-viewer-close';close.setAttribute('aria-label','Close image');close.textContent='×';viewer.append(stage,close);document.body.appendChild(viewer);viewer.showModal();
  let scale=1,x=0,y=0,startX=0,startY=0,baseX=0,baseY=0,pinchStart=0,pinchScale=1;const pts=new Map();
  const draw=()=>{big.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`};
  const shut=()=>{if(viewer.open)viewer.close();viewer.remove()};close.onclick=shut;viewer.addEventListener('cancel',e=>{e.preventDefault();shut()});
  stage.addEventListener('pointerdown',e=>{pts.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.setPointerCapture?.(e.pointerId);if(pts.size===1){startX=e.clientX;startY=e.clientY;baseX=x;baseY=y}else if(pts.size===2){const a=[...pts.values()];pinchStart=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);pinchScale=scale}}, {passive:false});
  stage.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;e.preventDefault();pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size===2){const a=[...pts.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);scale=Math.max(1,Math.min(5,pinchScale*(d/Math.max(1,pinchStart))));if(scale===1)x=y=0;draw()}else if(pts.size===1&&scale>1){x=baseX+(e.clientX-startX);y=baseY+(e.clientY-startY);draw()}}, {passive:false});
  const up=e=>{pts.delete(e.pointerId);if(pts.size===1){const a=[...pts.values()][0];startX=a.x;startY=a.y;baseX=x;baseY=y}};stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
  stage.addEventListener('dblclick',e=>{e.preventDefault();scale=scale>1?1:2;x=y=0;draw()});
  viewer.addEventListener('click',e=>{if(e.target===viewer)shut()});
 }
 let hold=null,sx=0,sy=0,held=false,target=null,country='';
 document.addEventListener('pointerdown',e=>{const img=e.target.closest&&e.target.closest('.country-guide-photo img');if(!img)return;const facts=img.closest('#countryInfoDialog,#fastFactsDialog,.country-info-dialog,.fast-facts-dialog,.country-facts-modal,[class*="fast-fact"],[class*="country-fact"]');if(!facts)return;target=img;country=countryFromFacts(facts);sx=e.clientX;sy=e.clientY;held=false;clearTimeout(hold);hold=setTimeout(()=>{held=true;navigator.vibrate?.(20);googleImages(country)},600)},true);
 document.addEventListener('pointermove',e=>{if(target&&Math.hypot(e.clientX-sx,e.clientY-sy)>12){clearTimeout(hold);hold=null}},true);
 const cancel=()=>{clearTimeout(hold);hold=null};document.addEventListener('pointercancel',cancel,true);
 document.addEventListener('pointerup',e=>{if(!target)return;clearTimeout(hold);const img=target;target=null;if(held){held=false;e.preventDefault();e.stopImmediatePropagation();return}if(Math.hypot(e.clientX-sx,e.clientY-sy)<=12){e.preventDefault();e.stopImmediatePropagation();openViewer(img)}},true);
 document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.country-guide-photo img')){e.preventDefault();e.stopImmediatePropagation()}},true);
})();;





;(()=>{
 if(window.__wozzaAddTripDestinationHold)return;window.__wozzaAddTripDestinationHold=true;
 const KEY='wozzaAddStopStyle',btn=document.querySelector('#addTripDestination');if(!btn)return;
 const st=document.createElement('style');st.id='wozza-add-stop-hold-style';st.textContent=`
#addTripDestination.wozza-add-stop-subtle{
 width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;
 padding:0!important;margin:12px auto!important;display:flex!important;align-items:center!important;justify-content:center!important;
 background:transparent!important;border:0!important;box-shadow:none!important;font-size:0!important;line-height:1!important;
 position:relative!important;transform:none!important;rotate:0deg!important
}
#addTripDestination.wozza-add-stop-subtle>*{display:none!important}
#addTripDestination.wozza-add-stop-subtle::after{
 content:'+';position:absolute;left:50%;top:50%;width:42px;height:42px;border-radius:50%;
 display:flex;align-items:center;justify-content:center;
 background:rgba(0,137,145,.82);color:#fff;border:1px solid rgba(255,255,255,.48);
 box-shadow:0 4px 12px rgba(0,35,55,.14);font-size:28px!important;font-weight:500!important;line-height:1!important;
 backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);
 transform:translate(-50%,-50%) rotate(0deg)!important
}
`;document.head.appendChild(st);
 const apply=()=>btn.classList.toggle('wozza-add-stop-subtle',localStorage.getItem(KEY)==='subtle');apply();
 let timer=0,held=false,sx=0,sy=0;
 const begin=(x,y)=>{held=false;sx=x;sy=y;clearTimeout(timer);timer=setTimeout(()=>{timer=0;held=true;const subtle=!btn.classList.contains('wozza-add-stop-subtle');localStorage.setItem(KEY,subtle?'subtle':'sign');btn.classList.toggle('wozza-add-stop-subtle',subtle);navigator.vibrate?.(25)},500)};
 const cancel=()=>{if(timer){clearTimeout(timer);timer=0}};
 btn.addEventListener('touchstart',e=>{const t=e.touches[0];begin(t.clientX,t.clientY)},{passive:true});
 btn.addEventListener('touchmove',e=>{if(!timer)return;const t=e.touches[0];if(Math.hypot(t.clientX-sx,t.clientY-sy)>10)cancel()},{passive:true});
 btn.addEventListener('touchend',cancel,{passive:true});btn.addEventListener('touchcancel',cancel,{passive:true});
 btn.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')begin(e.clientX,e.clientY)});
 btn.addEventListener('pointermove',e=>{if(e.pointerType!=='touch'&&timer&&Math.hypot(e.clientX-sx,e.clientY-sy)>10)cancel()});
 btn.addEventListener('pointerup',e=>{if(e.pointerType!=='touch')cancel()});
 btn.addEventListener('contextmenu',e=>{if(held)e.preventDefault()});
 btn.addEventListener('click',e=>{if(!held)return;held=false;e.preventDefault();e.stopImmediatePropagation()},true);
})();


;(()=>{
 if(document.getElementById('wozza-narrowboat-icon-scale'))return;
 const style=document.createElement('style');
 style.id='wozza-narrowboat-icon-scale';
 style.textContent='img[src$="narrowboat.png"]{transform:scale(1.24)!important;transform-origin:center!important}';
 document.head.appendChild(style);
})();


// v0.18.XX — Vibe true Companion blueprint + expanded-stop scroll repair.
(()=>{
 if(document.getElementById('wozza-vibe-companion-blueprint-scroll-fix'))return;
 const st=document.createElement('style');st.id='wozza-vibe-companion-blueprint-scroll-fix';st.textContent=`
 /* Vibe uses the exact same expanded panel treatment as Travel Companions. */
 #tripForm #tripVibeBody{
   background:#edf5f4!important;
   border:1px solid rgba(7,94,120,.075)!important;
   border-radius:24px!important;
   padding:16px!important;
   box-shadow:0 3px 10px rgba(5,65,85,.025)!important;
   margin-top:16px!important;
 }
 #tripForm #tripVibeBody[hidden]{display:none!important}
 #tripForm #tripVibeBank{display:flex!important;flex-wrap:wrap!important;gap:7px!important;margin:7px 0 10px!important}
 #tripForm #tripVibeBank .companion-tag{padding:7px 11px!important;font-size:13px!important;line-height:1!important}
 #tripForm #tripVibeBody .trip-new-companion{display:block!important;margin-bottom:0!important}
 #tripForm #tripVibeCustom{width:100%!important;box-sizing:border-box!important}
 /* One canonical toggle size for Vibe, identical to the other trip sections. */
 #tripForm #tripVibeSection .section-collapse-toggle{
   box-sizing:border-box!important;width:44px!important;height:44px!important;
   min-width:44px!important;min-height:44px!important;max-width:44px!important;max-height:44px!important;
   flex:0 0 44px!important;aspect-ratio:1/1!important;padding:0!important;margin:0!important;
   border-radius:50%!important;font-size:27px!important;font-weight:700!important;line-height:1!important;
   display:grid!important;place-items:center!important;transform:none!important;
 }
 #tripForm #tripVibeSection .trip-vibe-head{grid-template-columns:minmax(0,1fr) 44px!important}
 /* A normal swipe on a stop scrolls the dialog. JS only suppresses it after the long-press drag has actually begun. */
 #tripDestinationStops .trip-destination-stop{touch-action:pan-y!important}
 #tripDestinationStops .trip-destination-stop.trip-stop-mobile-live{touch-action:none!important}
 `;document.head.appendChild(st);
})();

// Map landscape only: centre the country card in the usable map area beside the navigation rail.
(()=>{
  if(document.getElementById('map-landscape-country-card-centre'))return;
  const st=document.createElement('style');
  st.id='map-landscape-country-card-centre';
  st.textContent=`@media (orientation:landscape){body.map-view #countrySheet.sheet{left:calc(50% + clamp(41px,5vw,56px))!important}}`;
  document.head.appendChild(st);
})();

// Fast Facts flag Google search + expanded chart collapse shadow polish
(()=>{
  const st=document.createElement('style');
  st.id='fast-facts-flag-chart-shadow-hotfix';
  st.textContent=`
    #countryInfoFlag{cursor:pointer}
    .passport-stats-slide .stats-show-more{display:grid!important;place-items:center!important;margin:26px auto 38px!important;overflow:visible!important;filter:none!important;box-shadow:0 10px 18px rgba(5,107,137,.22)!important}
    .passport-mini-list{overflow:visible!important;padding-bottom:28px!important}
    .passport-stats-carousel.stats-expanded .passport-stats-slide.is-active{overflow:visible!important;padding-bottom:28px!important}
  `;
  document.getElementById(st.id)?.remove();
  document.head.appendChild(st);

  document.addEventListener('click',e=>{
    const flag=e.target.closest('#countryInfoFlag');
    if(!flag||!currentCountry)return;
    e.preventDefault();
    e.stopPropagation();
    const country=canonicalCountry(currentCountry)||currentCountry;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(country)}`,'_blank','noopener');
  });
})();

/* Self-contained SVG sag bars. Originals stay visible unless all replacements initialise. */
(function(){
  const files=['status-sag-visited.svg','status-sag-visiting.svg','status-sag-bucket.svg'];
  const straight='M3 5 C28 5 36 5 42 5 C46 5 47 5 50 5 C53 5 54 5 58 5 C64 5 72 5 97 5';
  const sag='M3 5 C28 5 35 5 40 6 C44 7 45 15 50 15 C55 15 56 7 60 6 C65 5 72 5 97 5';
  const paths=[];
  let active=0;

  function setShape(path, on, animate){
    if(!path)return;
    if(!animate){
      path.style.transition='none';
      path.setAttribute('d',on?sag:straight);
      path.getBoundingClientRect();
      path.style.transition='';
      return;
    }
    path.setAttribute('d',on?sag:straight);
  }

  async function init(){
    const hosts=[...document.querySelectorAll('.status-sag-host')];
    if(hosts.length!==3)return;
    try{
      const svgs=await Promise.all(files.map(f=>fetch(f,{cache:'no-store'}).then(r=>{
        if(!r.ok)throw new Error(f);
        return r.text();
      })));
      svgs.forEach((txt,i)=>{
        hosts[i].innerHTML=txt;
        const p=hosts[i].querySelector('path');
        if(!p)throw new Error('missing path');
        p.classList.add('status-sag-path');
        paths[i]=p;
      });
      document.querySelector('.map-summary')?.classList.add('sag-ready');
      window.WozzaSagBars.set(typeof countrySlide==='number'?countrySlide:0,false);
    }catch(e){
      /* Fail safe: baseline bars remain visible. */
    }
  }

  window.WozzaSagBars={
    set(idx,animate=true){
      active=idx;
      paths.forEach((p,i)=>setShape(p,i===active,animate));
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

// WozzaWorld Travel Score — Milestone 2 calibrated, modular model
(function(){
  const clamp=(n,min=0,max=100)=>Math.max(min,Math.min(max,n));
  const sat=(n,k)=>100*(1-Math.exp(-Math.max(0,n)/k));
  const yearOf=v=>{const m=String(v||'').match(/(19|20)\d{2}/);return m?Number(m[0]):0};
  const MODEL_VERSION=2;
  // Presentation is deliberately separate from the maths so a future Admin Portal can own it.
  const SCORE_LEVELS=[
    {min:0,max:20,title:'STARTING OUT'},
    {min:21,max:40,title:'FINDING YOUR FEET'},
    {min:41,max:60,title:'WELL TRAVELLED'},
    {min:61,max:80,title:'SEASONED EXPLORER'},
    {min:81,max:100,title:'WORLDLY'}
  ];
  const continentSets={
    Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova','Malta','Cyprus','Bosnia and Herzegovina','Montenegro','Albania','North Macedonia','Luxembourg','Liechtenstein','Monaco','Andorra','San Marino','Vatican City'],
    Africa:['Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria','Niger','Ethiopia','Uganda','Rwanda','Botswana','Namibia','Mauritius','Seychelles','Madagascar','Senegal','Gambia','Cabo Verde'],
    Asia:['China','Japan','Thailand','India','Vietnam','Viet Nam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey','Türkiye','Pakistan','Nepal','Sri Lanka','Cambodia','Laos','Philippines','Qatar','Jordan','Israel','Oman','Saudi Arabia'],
    'North America':['United States','United States of America','Canada','Mexico','Cuba','Jamaica','Costa Rica','Dominican Republic','Bahamas','Barbados','Grenada','Saint Lucia','Antigua and Barbuda'],
    'South America':['Brazil','Argentina','Chile','Peru','Colombia','Venezuela','Ecuador','Bolivia','Uruguay','Paraguay','Guyana','Suriname'],
    Oceania:['Australia','New Zealand','Fiji','Papua New Guinea','Samoa','Tonga','Vanuatu']
  };
  const FACTORS={
    world:{weight:.35,label:'World explored'},
    variety:{weight:.25,label:'Travel variety'},
    depth:{weight:.20,label:'Depth of travel'},
    momentum:{weight:.10,label:'Travel momentum'},
    discovery:{weight:.10,label:'Discovery'}
  };
  const uniq=a=>new Set(a.filter(Boolean).map(x=>String(x).trim().toLowerCase()));
  function collectTravelEvidence(){
    const trips=(Array.isArray(state?.trips)?state.trips:[]).filter(t=>!(typeof tripIsOnHorizon==='function'&&tripIsOnHorizon(t)));
    const visited=typeof countryRows==='function'?countryRows('visited'):[];
    const countries=new Set(visited.map(String)),continents=new Set(),vibes=new Set(),modes=new Set(),cities=new Set(),years=new Set(),partyContexts=new Set();
    let countryTouches=0,stopCount=0,multiStopTrips=0,repeatTouches=0;
    countries.forEach(c=>{for(const [continent,names] of Object.entries(continentSets)){if(names.some(n=>typeof sameCountry==='function'?sameCountry(n,c):n===c)){continents.add(continent);break}}});
    trips.forEach(t=>{
      (t.vibes||[]).forEach(v=>vibes.add(String(v).trim().toLowerCase()));
      const companions=uniq(t.companions||[]).size;partyContexts.add(companions===0?'solo':companions===1?'duo':'group');
      const stops=(t.destinations||[]).filter(Boolean);stopCount+=Math.max(1,stops.length);if(stops.length>1)multiStopTrips++;
      const tc=typeof tripCountries==='function'?tripCountries(t):(t.countries||[]);countryTouches+=tc.length;
      stops.forEach(d=>{const mode=d.travelMode||d.mode;if(mode)modes.add(String(mode).trim().toLowerCase());if(d.name)cities.add(String(d.name).trim().toLowerCase());const y=yearOf(d.start||d.end);if(y)years.add(y)});
      Object.values(t.cities||{}).flat().forEach(c=>cities.add(String(c).trim().toLowerCase()));
      const y=yearOf(t.start||t.end);if(y)years.add(y);
    });
    repeatTouches=Math.max(0,countryTouches-countries.size);
    return {trips,countries,continents,vibes,modes,cities,years,partyContexts,countryTouches,stopCount,multiStopTrips,repeatTouches};
  }
  function calculateComponents(e){
    // World: country count matters, but continental/geographical spread has enough weight to prevent one-continent volume dominating.
    const world=clamp(sat(e.countries.size,30)*.58 + sat(e.continents.size,3.2)*.42);
    // Variety: social/party context is intentionally small and capped; modes and trip styles do the heavy lifting.
    const variety=clamp(sat(e.vibes.size,6)*.46 + sat(e.modes.size,5)*.44 + sat(e.partyContexts.size,2.4)*.10);
    const depth=clamp(sat(e.cities.size,30)*.42 + sat(e.stopCount,35)*.23 + sat(e.multiStopTrips,8)*.20 + sat(e.repeatTouches,16)*.15);
    // Momentum is accumulated history only. No current date/recent-trip term: inactivity can never cause decay.
    const momentum=e.trips.length?clamp(sat(e.years.size,7)*.52 + sat(e.trips.length,18)*.48):0;
    // Discovery combines footprint size with how much of the established travel history expanded that footprint.
    const discoveryRate=e.countryTouches?e.countries.size/Math.max(e.countryTouches,e.countries.size):0;
    const discovery=clamp(sat(e.countries.size,24)*.62 + (discoveryRate*100)*.38* Math.min(1,e.countries.size/8));
    return {world,variety,depth,momentum,discovery};
  }
  function balancedScore(c){
    let raw=0;Object.entries(FACTORS).forEach(([k,v])=>raw+=c[k]*v.weight);
    // Upper scores increasingly require strength across several dimensions, without hard continent gates.
    const vals=Object.keys(FACTORS).map(k=>c[k]).sort((a,b)=>a-b),balance=(vals[0]+vals[1])/2;
    if(raw>60){const pressure=(raw-60)/40;raw-=pressure*Math.max(0,62-balance)*.20}
    return Math.round(clamp(raw));
  }
  function levelFor(score){return SCORE_LEVELS.find(x=>score>=x.min&&score<=x.max)||SCORE_LEVELS[SCORE_LEVELS.length-1]}
  function travelScoreData(){
    const e=collectTravelEvidence(),components=calculateComponents(e),score=balancedScore(components),level=levelFor(score);
    const rawAwarded=Object.fromEntries(Object.keys(FACTORS).map(k=>[k,components[k]*FACTORS[k].weight]));
    const rawAwardedTotal=Object.values(rawAwarded).reduce((a,b)=>a+b,0);
    const awardScale=rawAwardedTotal?score/rawAwardedTotal:0;
    const awardedPoints={};
    let awardedRunning=0;
    const awardedKeys=Object.keys(FACTORS);
    awardedKeys.forEach((k,i)=>{
      const value=i===awardedKeys.length-1
        ? Math.max(0,Math.round((score-awardedRunning)*10)/10)
        : Math.round(rawAwarded[k]*awardScale*10)/10;
      awardedPoints[k]=value;
      awardedRunning+=value;
    });
    const ranked=Object.keys(FACTORS).map(k=>({key:k,label:FACTORS[k].label,value:components[k]})).sort((a,b)=>b.value-a.value);
    const strength=ranked[0],weakest=ranked[ranked.length-1];
    const strengthText={world:'Strong geographical breadth across your travel story.',variety:'A varied mix of trip styles and ways to travel.',depth:'You tend to explore destinations in real depth.',momentum:'You have built a strong, sustained travel history.',discovery:'You keep expanding your travel footprint.'}[strength.key];
    // Recommendations interpret the travel pattern rather than simply repeating the weakest statistic.
    // Keep this rules-based and deterministic so the same travel history always gets a sensible explanation.
    function recommendationFor(){
      const countryCount=e.countries.size,continentCount=e.continents.size,tripCount=e.trips.length;
      const styleCount=e.vibes.size,modeCount=e.modes.size,multiStop=e.multiStopTrips,repeatCount=e.repeatTouches;
      const values=ranked.map(x=>x.value),spread=values[0]-values[values.length-1];

      if(tripCount<=2 || countryCount<=2){
        return 'Your travel story is just getting started, so almost every new adventure can add something different. New countries, trip styles and ways of getting there will all help shape it.';
      }
      if(tripCount>=8 && continentCount<=2 && countryCount<=18){
        return `You’re a seasoned traveller, but your adventures are concentrated in a relatively small corner of the map. Your biggest opportunity is somewhere completely new${continentCount<6?' - especially a new continent.':'.'}`;
      }
      if(components.world>=65 && components.variety<48){
        return 'You’ve covered an impressive amount of the map, but you tend to experience it in similar ways. Trying a different style of trip or way of travelling could add a completely new dimension to your travel story.';
      }
      if(components.world>=55 && components.depth<48 && multiStop<=Math.max(1,Math.floor(tripCount*.2))){
        return 'You’ve explored broadly and built a strong footprint. Going deeper could be your next frontier - a longer or multi-stop adventure would add something your travel history currently has less of.';
      }
      if(repeatCount>countryCount*.7 && components.discovery<55){
        return 'You clearly have places worth returning to, but repeat visits now add less to your score than fresh discoveries. Somewhere completely new would make a bigger difference to your travel story.';
      }
      if(countryCount>=12 && continentCount<=2){
        return 'You’ve explored plenty of destinations, but most sit within the same part of the world. A new continent would add more breadth now than simply adding another nearby country.';
      }
      if(styleCount<=2 && tripCount>=6){
        return 'You’ve built plenty of travel experience, but your trips follow a fairly consistent style. Trying a different kind of adventure would add more variety than simply doing more of the same.';
      }
      if(modeCount<=2 && tripCount>=6 && components.variety<55){
        return 'Your travel history is growing nicely, but the way you get around is still fairly familiar. A different mode of travel could add a new dimension without needing to chase another country.';
      }
      if(spread<16 && values[values.length-1]>=55){
        return 'There isn’t one obvious gap in your travel story anymore. From here, your score grows through breadth, depth and variety together rather than any single type of trip.';
      }
      return {
        world:'Your travel experience is established, but geographical breadth is the area with most room to grow. A genuinely new part of the map would add more now than another familiar destination.',
        variety:'Your map is building well, but there is more room to vary how you experience it. A different trip style or way of travelling would add something your current travel story has less of.',
        depth:'You’ve collected destinations well; the bigger opportunity now is depth. Exploring more than one place within a trip would add more than simply ticking off another stop.',
        momentum:'You have a varied travel story already. Building it across more trips and travel years is now the area with the most room to grow - and your existing score will never decay while you do.',
        discovery:'You’ve built experience through both new and familiar places. At this point, a fresh destination would add more to your discovery score than another return visit.'
      }[weakest.key];
    }
    const recommendation=recommendationFor();
    const party=[...e.partyContexts].map(x=>x==='solo'?'solo':x==='duo'?'two-person':'group').join(', ');
    const evidence={
      world:`${e.countries.size} ${e.countries.size===1?'country':'countries'} · ${e.continents.size} ${e.continents.size===1?'continent':'continents'} · ${(e.countries.size/195*100).toFixed(1)}% of world`,
      variety:`${e.vibes.size} trip ${e.vibes.size===1?'style':'styles'} · ${e.modes.size} transport ${e.modes.size===1?'mode':'modes'}${party?` · ${e.partyContexts.size} travel ${e.partyContexts.size===1?'context':'contexts'}`:''}`,
      depth:`${e.cities.size} ${e.cities.size===1?'city/stop':'cities/stops'} · ${e.multiStopTrips} multi-stop ${e.multiStopTrips===1?'trip':'trips'} · ${e.repeatTouches} repeat destination ${e.repeatTouches===1?'visit':'visits'}`,
      momentum:`${e.trips.length} completed ${e.trips.length===1?'trip':'trips'} · travel recorded across ${e.years.size} ${e.years.size===1?'year':'years'}`,
      discovery:`${e.countries.size} unique ${e.countries.size===1?'country':'countries'} across ${e.countryTouches||0} recorded country ${e.countryTouches===1?'visit':'visits'}`
    };
    return {modelVersion:MODEL_VERSION,score,band:level.title,strengthText,recommendation,components,evidence,awardedPoints};
  }
  function ensureTravelScore(){
    const name=$('#passportName');if(!name)return;
    let card=$('#travelHealthCard');
    if(!card){card=document.createElement('section');card.id='travelHealthCard';card.className='travel-health-card';const anchor=name.closest('.passport-name-card,.passport-name,.name-card,.passport-profile-name')||name.parentElement;anchor?.insertAdjacentElement('afterend',card)}
    const d=travelScoreData(),angle=-90+(d.score/100)*180;
    card.innerHTML=`<div class="travel-health-kicker" data-score-fit>YOUR TRAVEL SCORE: ${d.band}</div><div class="travel-health-gauge"><div class="travel-health-arc"></div><div class="travel-health-mask"></div><div class="travel-health-needle" data-score-needle style="transform:translateX(-50%) rotate(${angle}deg)"></div><div class="travel-health-score"><strong data-score-number>${d.score}</strong><span>/ 100</span></div></div><div class="travel-score-guidance"><details class="travel-guidance-details"><summary>Strengths</summary><p>${d.strengthText}</p></details><details class="travel-guidance-details"><summary>Recommendations</summary><p>${d.recommendation}</p></details></div><details class="travel-score-details"><summary>How is my score calculated?</summary><div class="travel-score-breakdown">${Object.keys(FACTORS).map(k=>`<div class="travel-score-factor"><div><b>${FACTORS[k].label}</b></div><p>${d.evidence[k]} = ${Number.isInteger(d.awardedPoints[k])?d.awardedPoints[k]:d.awardedPoints[k].toFixed(1)} out of ${Math.round(FACTORS[k].weight*100)} points</p></div>`).join('')}</div></details>`;
  }
  const css=document.createElement('style');css.id='wozza-travel-score-v2-style';css.textContent=`
    .travel-health-card{margin:14px 0 22px;padding:18px 18px 16px;border-radius:22px;background:rgba(255,255,255,.92);box-shadow:0 10px 26px rgba(8,62,78,.13);text-align:center;color:#073f52;overflow:hidden;width:auto;max-width:none;}
    .travel-health-kicker{font-weight:900;letter-spacing:1.25px;font-size:clamp(9px,3.05vw,13px);margin-bottom:6px;white-space:nowrap;width:100%;overflow:visible}.travel-health-gauge{position:relative;width:min(280px,86vw);height:150px;margin:0 auto -2px;overflow:hidden}.travel-health-arc{position:absolute;left:50%;bottom:-122px;width:250px;height:250px;transform:translateX(-50%);border-radius:50%;background:conic-gradient(from 270deg,#d9534f 0deg,#e78a3c 48deg,#d9b43b 90deg,#72a85a 135deg,#08788b 180deg,transparent 180deg)}.travel-health-mask{position:absolute;left:50%;bottom:-94px;width:194px;height:194px;transform:translateX(-50%);border-radius:50%;background:#fff;clip-path:inset(0 0 28px 0)}.travel-health-needle{position:absolute;left:50%;bottom:19px;width:3px;height:91px;background:#073f52;border-radius:4px;transform-origin:50% 100%;transition:transform .65s ease}.travel-health-score{position:absolute;left:50%;bottom:27px;transform:translateX(-50%);display:flex;align-items:center;gap:3px;background:#fff;padding:1px 7px;border-radius:10px;}.travel-health-score strong{font-size:31px;line-height:1;font-weight:950}.travel-health-score span{font-size:11px;font-weight:800;opacity:.55}.travel-health-band{font-weight:950;font-size:18px;letter-spacing:.6px;margin-top:8px}.travel-score-guidance{text-align:left;font-size:12.5px;line-height:1.45;margin:9px auto 0;max-width:330px;color:#315d69}.travel-guidance-details,.travel-score-details{margin:0 auto;max-width:330px;text-align:left;border-top:1px solid rgba(7,63,82,.14);padding:0}.travel-guidance-details:first-child{border-top:0}.travel-guidance-details summary,.travel-score-details summary{cursor:pointer;list-style:none;position:relative;box-sizing:border-box;min-height:48px;margin:0;padding:12px 30px 12px 0;display:flex;align-items:center;font-size:12.5px;font-weight:900;color:#073f52}.travel-guidance-details summary::-webkit-details-marker,.travel-score-details summary::-webkit-details-marker{display:none}.travel-guidance-details summary:after,.travel-score-details summary:after{content:'+';position:absolute;right:2px;top:50%;transform:translateY(-50%);font-size:20px;line-height:1;font-weight:800}.travel-guidance-details[open] summary:after,.travel-score-details[open] summary:after{content:'−'}.travel-guidance-details p{margin:0;padding:0 0 12px;color:#315d69}.travel-score-breakdown{padding:1px 0 3px}.travel-score-factor{padding:8px 0;border-top:1px solid rgba(7,63,82,.09)}.travel-score-factor>div{display:flex;justify-content:space-between;gap:12px;align-items:baseline}.travel-score-factor b{font-size:12px}.travel-score-factor span{font-size:10px;font-weight:900;opacity:.55}.travel-score-factor p,.travel-score-note{margin:3px 0 0;font-size:11px;line-height:1.35;color:#52727b}.travel-score-note{margin-top:8px;font-style:italic}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  const originalRender=window.render;if(typeof originalRender==='function'){window.render=function(){const r=originalRender.apply(this,arguments);requestAnimationFrame(ensureTravelScore);return r}}requestAnimationFrame(ensureTravelScore);
})();


/* Travel Score presentation v3 — visibility-triggered, isolated from swipe navigation */
(()=>{
  if(window.__wozzaScorePresentationV3)return;window.__wozzaScorePresentationV3=true;
  let played=false,observer=null;

  function fitHeading(card){
    const el=card&&card.querySelector('[data-score-fit]');
    if(!el)return;
    el.style.whiteSpace='nowrap';
    el.style.overflow='visible';
    el.style.width='100%';
    /* Measure the COMPLETE string at a known size, then scale proportionally. */
    const testSize=20;
    el.style.fontSize=testSize+'px';
    const textWidth=el.scrollWidth;
    const available=el.clientWidth;
    if(!textWidth||!available)return;
    const fitted=Math.max(9,Math.min(24,testSize*(available/textWidth)*0.985));
    el.style.fontSize=fitted.toFixed(2)+'px';
  }

  function animate(card){
    if(played||!card)return;
    const needle=card.querySelector('[data-score-needle]');
    const number=card.querySelector('[data-score-number]');
    if(!needle||!number)return;
    const target=Math.max(0,Math.min(100,parseInt(number.textContent,10)||0));
    played=true;
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

    /* Force a real zero frame first. */
    needle.style.transition='none';
    needle.style.transform='translateX(-50%) rotate(-90deg)';
    number.textContent='0';

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        const duration=1450,start=performance.now(),targetAngle=-90+(target/100)*180;
        const tick=now=>{
          const p=Math.min(1,(now-start)/duration);
          const eased=1-Math.pow(1-p,3);
          number.textContent=String(Math.round(target*eased));
          needle.style.transform=`translateX(-50%) rotate(${-90+(targetAngle+90)*eased}deg)`;
          if(p<1)requestAnimationFrame(tick);
          else{
            number.textContent=String(target);
            needle.style.transform=`translateX(-50%) rotate(${targetAngle}deg)`;
          }
        };
        requestAnimationFrame(tick);
      });
    });
  }

  function inspect(){
    const card=document.querySelector('.passport-insights .travel-health-card, .passport-insights-shell .travel-health-card');
    if(!card)return false;
    fitHeading(card);
    if(!observer&&'IntersectionObserver' in window){
      observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting&&entry.intersectionRatio>0.25){
            fitHeading(card);animate(card);
          }
        });
      },{threshold:[0.25]});
      observer.observe(card);
    }else if(!observer){
      /* Fallback for browsers without IntersectionObserver. */
      const r=card.getBoundingClientRect();
      if(r.bottom>0&&r.top<window.innerHeight)animate(card);
    }
    return true;
  }

  const mo=new MutationObserver(()=>{if(inspect()&&played)mo.disconnect()});
  mo.observe(document.documentElement,{childList:true,subtree:true});
  requestAnimationFrame(inspect);
  window.addEventListener('resize',()=> {
    const card=document.querySelector('.passport-insights .travel-health-card, .passport-insights-shell .travel-health-card');
    if(card)fitHeading(card);
  },{passive:true});
})();

/* v0.19.0 — Passport Travel Insights: icon tabs + Home-style active sag */
(()=>{
  if(window.__wozzaPassportInsightsV1)return;window.__wozzaPassportInsightsV1=true;
  const ICONS={
    score:'<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M8 39a24 24 0 0 1 48 0"/><path d="M32 39 44 19"/><circle cx="32" cy="39" r="3"/></svg>',
    stats:'<svg viewBox="0 0 64 48" aria-hidden="true"><rect x="14" y="10" width="36" height="32" rx="5"/><path d="M25 10V7h14v3M22 20l3 3 5-6M34 21h9M22 30l3 3 5-6M34 31h9"/></svg>',
    charts:'<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M13 8v32h40"/><path d="M22 34V23M32 34V15M42 34V20M52 34V11"/></svg>'
  };
  function setup(){
    const screen=document.querySelector('.screen[data-screen="me"]'),score=document.getElementById('travelHealthCard'),grid=screen?.querySelector('.stats-grid'),charts=screen?.querySelector('.passport-stats-carousel'),milestones=document.getElementById('milestonesCard');
    if(!screen||!score||!grid||!charts||!milestones)return false;
    let shell=document.getElementById('passportInsights');
    if(!shell){
      shell=document.createElement('section');shell.id='passportInsights';shell.className='passport-insights';
      shell.innerHTML='<div class="passport-insights-title">TRAVEL INSIGHTS</div><div class="passport-insights-tabs" role="tablist" aria-label="Travel insights"><button type="button" class="passport-insights-tab is-active" data-insights-tab="score" role="tab" aria-selected="true" aria-label="Travel score">'+ICONS.score+'<span class="insights-underline"></span></button><button type="button" class="passport-insights-tab" data-insights-tab="stats" role="tab" aria-selected="false" aria-label="Stats">'+ICONS.stats+'<span class="insights-underline"></span></button><button type="button" class="passport-insights-tab" data-insights-tab="charts" role="tab" aria-selected="false" aria-label="Charts">'+ICONS.charts+'<span class="insights-underline"></span></button></div><div class="passport-insights-body"></div>';
      score.before(shell);const body=shell.querySelector('.passport-insights-body');
      [score,grid,charts].forEach((el,i)=>{const panel=document.createElement('div');panel.className='passport-insights-panel'+(i===0?' is-active':'');panel.dataset.insightsPanel=['score','stats','charts'][i];panel.hidden=i!==0;body.appendChild(panel);panel.appendChild(el)});
      shell.after(milestones);
      screen.querySelectorAll('.passport-section-heading').forEach(h=>{if(/^(STATS|CHARTS)$/i.test(h.textContent.trim()))h.hidden=true});
      const choose=key=>{
        shell.querySelectorAll('.passport-insights-tab').forEach(b=>{const on=b.dataset.insightsTab===key;b.classList.toggle('is-active',on);b.setAttribute('aria-selected',on?'true':'false')});
        shell.querySelectorAll('.passport-insights-panel').forEach(p=>{const on=p.dataset.insightsPanel===key;p.classList.toggle('is-active',on);p.hidden=!on});
        try{sessionStorage.setItem('wozza-passport-insights-tab',key)}catch(e){}
      };
      shell.querySelectorAll('.passport-insights-tab').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.insightsTab)));
      let remembered='score';try{remembered=sessionStorage.getItem('wozza-passport-insights-tab')||'score'}catch(e){}if(!['score','stats','charts'].includes(remembered))remembered='score';choose(remembered);
    }else{
      screen.querySelectorAll('.passport-section-heading').forEach(h=>{if(/^(STATS|CHARTS)$/i.test(h.textContent.trim()))h.hidden=true});
      if(milestones.previousElementSibling!==shell)shell.after(milestones);
    }
    return true;
  }
  const css=document.createElement('style');css.id='wozza-passport-insights-style';css.textContent=`
    .passport-insights{margin:14px 0 22px;padding:18px 16px 16px;border-radius:26px;background:rgba(239,248,249,.76);border:1px solid rgba(255,255,255,.5);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 8px 22px rgba(0,53,68,.09);-webkit-backdrop-filter:blur(12px) saturate(115%);backdrop-filter:blur(12px) saturate(115%);color:#073f52;overflow:hidden}
    .passport-insights-title{font-family:"Archivo Black",Impact,sans-serif;font-size:clamp(20px,6vw,29px);font-weight:950;letter-spacing:.02em;margin:0 4px 8px;color:#073f52}
    .passport-insights-tabs{display:grid;grid-template-columns:repeat(3,1fr);align-items:end;gap:8px;margin:0 2px 14px}
    .passport-insights-tab{appearance:none;border:0;background:transparent;padding:3px 7px 13px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px;color:#073f52;cursor:pointer;position:relative;-webkit-tap-highlight-color:transparent}
    .passport-insights-tab svg{width:50px;height:40px;overflow:visible;fill:none;stroke:currentColor;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;transition:transform .22s ease,opacity .22s ease;opacity:.72}
    .passport-insights-tab.is-active svg{transform:translateY(-2px);opacity:1}
    .insights-underline{position:absolute;left:8%;right:8%;bottom:1px;height:8px;border-radius:999px;background:#f2ad21;transition:height .24s ease,border-radius .24s ease,transform .24s ease;transform-origin:center top}
    .passport-insights-tab[data-insights-tab="stats"] .insights-underline{background:#16b98f}.passport-insights-tab[data-insights-tab="charts"] .insights-underline{background:#16bfd1}
    .insights-underline:after{content:"";position:absolute;left:50%;top:3px;width:0;height:0;transform:translateX(-50%);background:inherit;border-radius:0 0 999px 999px;transition:width .25s ease,height .25s ease,top .25s ease,border-radius .25s ease}
    .passport-insights-tab.is-active .insights-underline:after{width:28px;height:17px;top:1px;border-radius:4px 4px 18px 18px;transform:translateX(-50%) rotate(45deg);clip-path:polygon(0 0,100% 100%,0 100%)}
    .passport-insights-tab.is-active .insights-underline{height:8px}
    .passport-insights-panel[hidden]{display:none!important}.passport-insights-panel.is-active{display:block}
    .passport-insights .travel-health-card{margin:0!important;padding:10px 2px 4px!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;overflow:visible!important}
    .passport-insights .travel-health-kicker{margin-top:2px}
    .passport-insights .stats-grid{margin:2px 0 0!important}
    .passport-insights .passport-stats-carousel{margin:2px 0 0!important;background:rgba(255,255,255,.22)!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{border-radius:22px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-charts-heading{display:none!important}
    @media(max-width:380px){.passport-insights{padding:16px 12px 14px}.passport-insights-tabs{gap:3px}.passport-insights-tab{min-height:66px;padding-left:4px;padding-right:4px}.passport-insights-tab svg{width:44px;height:36px}}
    @media(prefers-reduced-motion:reduce){.passport-insights-tab svg,.insights-underline,.insights-underline:after{transition:none!important}}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  let tries=0;const timer=setInterval(()=>{if(setup()||++tries>30)clearInterval(timer)},80);requestAnimationFrame(setup);
  const observer=new MutationObserver(()=>setup());const me=document.querySelector('.screen[data-screen="me"]');if(me)observer.observe(me,{childList:true,subtree:false});
})();

/* v0.19.1 — Travel Insights corrective polish: reuse Home sag blueprint, swipe tabs, branded assets, chart buttons */
(()=>{
  if(window.__wozzaPassportInsightsV2)return;window.__wozzaPassportInsightsV2=true;
  const keys=['score','stats','charts'];
  const iconFiles={score:'travel-score-icon.png',stats:'stats-icon.png',charts:'charts-icon.png'};
  const straight='M3 5 C28 5 36 5 42 5 C46 5 47 5 50 5 C53 5 54 5 58 5 C64 5 72 5 97 5';
  const sag='M3 5 C28 5 35 5 40 6 C44 7 45 15 50 15 C55 15 56 7 60 6 C65 5 72 5 97 5';
  let chartObserver=null,insightsObserver=null;

  function activeKey(shell){return shell.querySelector('.passport-insights-tab.is-active')?.dataset.insightsTab||'score'}
  function setSag(shell,key,animate=true){
    shell.querySelectorAll('.passport-insights-tab').forEach(btn=>{
      const p=btn.querySelector('.insights-sag-path');if(!p)return;
      if(!animate){p.style.transition='none';p.setAttribute('d',btn.dataset.insightsTab===key?sag:straight);p.getBoundingClientRect();p.style.transition=''}
      else p.setAttribute('d',btn.dataset.insightsTab===key?sag:straight);
    });
  }
  function choose(shell,key){
    const btn=shell.querySelector(`.passport-insights-tab[data-insights-tab="${key}"]`);if(!btn)return;
    btn.click();setSag(shell,key,true);
  }
  function installIconsAndSag(shell){
    shell.querySelectorAll('.passport-insights-tab').forEach(btn=>{
      const key=btn.dataset.insightsTab;
      if(!btn.querySelector('.insights-brand-icon')){
        btn.querySelector('svg')?.remove();
        const img=document.createElement('img');img.className='insights-brand-icon';img.src=iconFiles[key];img.alt='';img.setAttribute('aria-hidden','true');btn.prepend(img);
      }
      let old=btn.querySelector('.insights-underline');
      if(old&&!old.classList.contains('insights-home-sag')){
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 100 22');svg.setAttribute('aria-hidden','true');svg.classList.add('insights-underline','insights-home-sag');
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',straight);p.classList.add('insights-sag-path');svg.appendChild(p);old.replaceWith(svg);
      }
    });
    setSag(shell,activeKey(shell),false);
  }
  function installInsightSwipe(shell){
    if(shell.dataset.swipeV2)return;shell.dataset.swipeV2='1';
    const body=shell.querySelector('.passport-insights-body');if(!body)return;
    let sx=0,sy=0,tracking=false;
    const chartInfo=()=>{
      const track=document.getElementById('passportStatsTrack');
      const slides=track?[...track.querySelectorAll('.passport-stats-slide')]:[];
      let index=(typeof passportStatsSlide==='number')?passportStatsSlide:0;
      index=Math.max(0,Math.min(index,Math.max(0,slides.length-1)));
      return {slides,index,last:Math.max(0,slides.length-1)};
    };
    body.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;sx=e.clientX;sy=e.clientY;tracking=true},{passive:true});
    body.addEventListener('pointerup',e=>{
      if(!tracking)return;tracking=false;
      const dx=e.clientX-sx,dy=e.clientY-sy;
      if(Math.abs(dx)<48||Math.abs(dx)<=Math.abs(dy)*1.2)return;
      const forward=dx<0,key=activeKey(shell);
      /* Exact circular order:
         left/forward:  score > stats > chart 1 > ... > last chart > score
         right/back:    score < stats < chart 1 < ... < last chart < score
         Note: the real middle-tab key is "stats" (not "quick"). */
      if(key==='charts'){
        const c=chartInfo();
        if(forward&&c.index<c.last){
          setPassportStatsSlide(c.index+1);queueMicrotask(rebuildChartButtons);return;
        }
        if(!forward&&c.index>0){
          setPassportStatsSlide(c.index-1);queueMicrotask(rebuildChartButtons);return;
        }
        if(forward){
          choose(shell,'score');return;
        }
        choose(shell,'stats');return;
      }
      if(key==='score'){
        if(forward){
          choose(shell,'stats');return;
        }
        choose(shell,'charts');
        const c=chartInfo();setPassportStatsSlide(c.last);queueMicrotask(rebuildChartButtons);return;
      }
      if(key==='stats'){
        if(forward){
          choose(shell,'charts');setPassportStatsSlide(0);queueMicrotask(rebuildChartButtons);return;
        }
        choose(shell,'score');return;
      }
    },{passive:true});
    body.addEventListener('pointercancel',()=>{tracking=false},{passive:true});
  }
  function enforceChartOrder(){
    const track=document.getElementById('passportStatsTrack');if(!track)return;
    const slides=[...track.querySelectorAll('.passport-stats-slide')];if(slides.length<2)return;
    const title=slide=>String(slide.querySelector('h4')?.textContent||'').trim().toLowerCase();
    const companion=slides.find(s=>title(s).includes('travel companions'));
    if(companion?.querySelector('h4'))companion.querySelector('h4').textContent='TOP 10 TRAVEL COMPANIONS';
    const countries=slides.find(s=>title(s).includes('most visited countries'));
    if(countries?.querySelector('h4'))countries.querySelector('h4').textContent='TOP 10 MOST VISITED COUNTRIES';
    const stops=slides.find(s=>title(s)==='stops per year');
    const mostVisited=slides.find(s=>title(s).includes('most visited destinations'));
    const pinned=new Set([companion,stops,mostVisited].filter(Boolean));
    const middle=slides.filter(s=>!pinned.has(s));
    const ordered=[companion,stops,...middle,mostVisited].filter(Boolean);
    if(ordered.length!==slides.length)return;
    if(ordered.some((slide,i)=>slide!==slides[i])){ordered.forEach(slide=>track.appendChild(slide));if(typeof setPassportStatsSlide==='function')setPassportStatsSlide(0);}
  }
  function rebuildChartButtons(){
    const dots=document.getElementById('passportStatsDots'),track=document.getElementById('passportStatsTrack');if(!dots||!track)return;
    const slides=[...track.querySelectorAll('.passport-stats-slide')];if(!slides.length)return;
    const active=Math.max(0,slides.findIndex(s=>s.classList.contains('is-active')));
    if(dots.querySelectorAll('.passport-chart-dot-btn').length!==slides.length){
      dots.textContent='';slides.forEach((slide,i)=>{const b=document.createElement('button');b.type='button';b.className='passport-chart-dot-btn';b.setAttribute('aria-label',`Show chart ${i+1}`);b.onclick=e=>{e.stopPropagation();if(typeof setPassportStatsSlide==='function')setPassportStatsSlide(i);queueMicrotask(rebuildChartButtons)};dots.appendChild(b)});
    }
    [...dots.querySelectorAll('.passport-chart-dot-btn')].forEach((b,i)=>{const on=i===active;b.classList.toggle('is-active',on);b.setAttribute('aria-current',on?'true':'false')});
    // Charts no longer own horizontal swipe; Travel Insights owns it.
    track.onpointerdown=null;track.onpointerup=null;track.onpointercancel=null;track.style.touchAction='pan-y';
  }
  function watchCharts(){
    const dots=document.getElementById('passportStatsDots'),track=document.getElementById('passportStatsTrack');if(!dots||!track)return;
    enforceChartOrder();rebuildChartButtons();
    /* Charts show their full top 10; expand controls are obsolete. */
    track.querySelectorAll('.is-stat-hidden').forEach(row=>row.classList.remove('is-stat-hidden'));
    track.querySelectorAll('.stats-show-more,.companion-more').forEach(btn=>btn.remove());
    const carousel=track.closest('.passport-stats-carousel');
    if(carousel&&dots.parentElement!==carousel)carousel.appendChild(dots);
    else if(carousel&&dots!==carousel.lastElementChild)carousel.appendChild(dots);
    if(!chartObserver){chartObserver=new MutationObserver(()=>queueMicrotask(rebuildChartButtons));chartObserver.observe(dots,{childList:true,characterData:true,subtree:true});chartObserver.observe(track,{attributes:true,subtree:true,attributeFilter:['class']})}
  }
  function apply(){
    const shell=document.getElementById('passportInsights');if(!shell)return false;
    installIconsAndSag(shell);installInsightSwipe(shell);watchCharts();
    if(!insightsObserver){insightsObserver=new MutationObserver(()=>setSag(shell,activeKey(shell),true));shell.querySelector('.passport-insights-tabs')&&insightsObserver.observe(shell.querySelector('.passport-insights-tabs'),{attributes:true,subtree:true,attributeFilter:['class']})}
    return true;
  }
  clearInterval(passportStatsAutoTimer);restartPassportStatsAuto=function(){clearInterval(passportStatsAutoTimer);passportStatsAutoTimer=0};
  const css=document.createElement('style');css.id='wozza-passport-insights-v2-style';css.textContent=`
    .passport-insights{background:rgba(255,255,255,.94)!important;border:1px solid rgba(255,255,255,.48)!important;color:#17213D!important}
    .passport-insights-title{color:#17213D!important}
    .passport-insights-tab{color:#17213D!important}
    .passport-insights-tab .insights-brand-icon{display:block;height:50px;object-fit:contain;opacity:.82;transition:transform .22s ease,opacity .22s ease;pointer-events:none;position:absolute;bottom:22px;left:50%;transform:translateX(-50%)}
    .passport-insights-tab[data-insights-tab="score"] .insights-brand-icon{width:58px;bottom:16px}
    .passport-insights-tab[data-insights-tab="stats"] .insights-brand-icon{width:51px}
    .passport-insights-tab[data-insights-tab="charts"] .insights-brand-icon{width:46px;height:47px;bottom:17px}
    .passport-insights-tab.is-active .insights-brand-icon{transform:translateX(-50%) translateY(-2px);opacity:1}
    .passport-insights-tab>svg:not(.insights-home-sag){display:none!important}
    .passport-insights-tab .insights-home-sag{position:absolute!important;left:8%!important;right:8%!important;bottom:-5px!important;width:84%!important;height:22px!important;overflow:visible!important;background:none!important;border-radius:0!important;transform:none!important}
    .passport-insights-tab .insights-home-sag:after{display:none!important;content:none!important}
    .passport-insights-tab .insights-sag-path{fill:none!important;stroke:#F2AD21;stroke-width:6!important;stroke-linecap:round!important;stroke-linejoin:round!important;vector-effect:non-scaling-stroke!important;transition:d .44s cubic-bezier(.22,.78,.24,1)!important}
    .passport-insights-tab[data-insights-tab="stats"] .insights-sag-path{stroke:#16B98F!important}
    .passport-insights-tab[data-insights-tab="charts"] .insights-sag-path{stroke:#16BFD1!important}
    .passport-insights-body{touch-action:pan-y}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{background:transparent!important;border:0!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;border-radius:0!important;margin:0!important;padding-left:0!important;padding-right:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide{background:transparent!important;border:0!important;box-shadow:none!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-head{height:34px!important;min-height:34px!important;margin:0 0 6px!important;position:relative!important;display:flex!important;justify-content:center!important;align-items:center!important}
    .passport-insights-panel[data-insights-panel="charts"] #passportStatsDots{position:static!important;transform:none!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:9px!important;letter-spacing:0!important;width:100%!important;margin:22px 0 4px!important;padding:0!important;order:99!important}
    .passport-chart-dot-btn{appearance:none;width:13px;height:13px;min-width:13px;padding:0;border-radius:50%;border:2px solid rgba(0,151,167,.62);background:rgba(0,151,167,.08);box-shadow:none;transition:transform .18s ease,background .18s ease,border-color .18s ease;-webkit-tap-highlight-color:transparent}
    .passport-chart-dot-btn.is-active{background:rgba(0,151,167,.72);border-color:rgba(0,151,167,.88);transform:scale(1.12)}

    /* v0.19.2 — Travel Insights visual alignment + chart polish */
    /* v0.19.3 — pull chart content up under the insight tabs; no dead top padding. */
    .passport-insights-panel[data-insights-panel="charts"]{margin-top:-42px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{padding:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .stats-show-more{display:none!important}
    .passport-insights-panel[data-insights-panel="charts"] .is-stat-hidden{display:grid!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-track{padding:0!important;margin:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide{padding:0 1px 4px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide h4,
    .passport-insights-panel[data-insights-panel="charts"] #highestRatedStatsSlide h4{
      max-width:none!important;padding:0!important;margin:4px 0 16px!important;
      text-align:center!important;text-transform:uppercase!important;
      font-family:inherit!important;font-size:13px!important;line-height:1.2!important;
      font-weight:900!important;letter-spacing:1.6px!important;color:#073f52!important;
    }
    /* Keep the proven gauge mask geometry, but blend it into the Insights panel. */
    .passport-insights .travel-health-arc{-webkit-mask:none!important;mask:none!important}
    .passport-insights .travel-health-mask{display:block!important;background:#f4fbfc!important}
    .passport-insights .travel-health-score{background:#f4fbfc!important;padding:1px 8px!important;border-radius:10px!important}
    .passport-insights-panel[data-insights-panel="charts"] .trips-per-year-chart circle,
    .passport-insights-panel[data-insights-panel="charts"] .trip-year-value{display:none!important}

    @media(max-width:380px){
      .passport-insights-tab .insights-brand-icon{height:45px}
      .passport-insights-tab[data-insights-tab="score"] .insights-brand-icon{width:52px}
      .passport-insights-tab[data-insights-tab="stats"] .insights-brand-icon{width:46px}
      .passport-insights-tab[data-insights-tab="charts"] .insights-brand-icon{width:41px;height:42px;bottom:17px}
    }
    @media(prefers-reduced-motion:reduce){.passport-insights-tab .insights-sag-path,.passport-insights-tab .insights-brand-icon,.passport-chart-dot-btn{transition:none!important}}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  let tries=0;const t=setInterval(()=>{if(apply()||++tries>40)clearInterval(t)},100);requestAnimationFrame(apply);
})();

/* v0.19.4 — Passport divider, backup/restore placeholder, chart expand spacing */
(()=>{
  if(window.__wozzaPassportFinalPolishV194)return;window.__wozzaPassportFinalPolishV194=true;

  const css=document.createElement('style');
  css.id='wozza-passport-final-polish-v194';
  css.textContent=`
    /* Home-list style divider beneath the Travel Insights icon row. */
    .passport-insights-tabs{
      border-bottom:1px solid rgba(23,33,61,.12)!important;
      padding-bottom:10px!important;
      margin-bottom:14px!important;
    }

    /* Charts always show up to 10 rows; no expand control is needed. */
    .passport-insights-panel[data-insights-panel="charts"] .stats-show-more,
    .passport-insights-panel[data-insights-panel="charts"] .companion-more{display:none!important;}

    /* Balance the Backup & Restore control against Recycle Bin. */
    .recycle-launch{width:100%!important;justify-content:space-between!important;position:relative!important}
    .backup-restore-icon-btn{flex:0 0 42px}
    .backup-restore-icon-btn img{width:22px;height:22px;object-fit:contain;display:block}
    .backup-restore-dialog .backup-last-date{margin:4px 0 20px!important;color:var(--muted)!important;font-size:14px!important;line-height:1.5!important}
    .backup-restore-actions{display:grid;gap:10px}
    .backup-restore-actions button{width:100%;border:0;border-radius:999px;padding:12px 16px;background:#dcebed;color:var(--navy);font-weight:800;box-shadow:0 5px 16px rgba(16,33,63,.08)}
    .backup-restore-actions button:first-child{background:#e9bf2e}
    .backup-restore-dialog form{position:relative}
    .backup-restore-dialog::backdrop{background:rgba(7,36,46,.48)!important;backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important}
    .backup-safe-note{margin:14px 4px 0!important;color:#7b8589!important;font-size:11.5px!important;line-height:1.45!important;text-align:left!important}
  `;
  document.getElementById(css.id)?.remove();document.head.appendChild(css);

  function installBackupButton(){
    const launch=document.querySelector('.recycle-launch');
    if(!launch||document.getElementById('openBackupRestore'))return;
    const btn=document.createElement('button');
    btn.type='button';btn.id='openBackupRestore';btn.className='recycle-icon-btn backup-restore-icon-btn';
    btn.setAttribute('aria-label','Backup and restore');btn.title='Backup and restore';
    btn.innerHTML='<img src="backup-restore-icon.png" alt="" aria-hidden="true">';
    btn.addEventListener('click',()=>document.getElementById('backupRestoreDialog')?.showModal());
    launch.insertBefore(btn,launch.firstChild);
  }

  let tries=0;const timer=setInterval(()=>{
    installBackupButton();
    if(document.querySelector('.recycle-launch')&&document.getElementById('passportStatsTrack'))clearInterval(timer);
    if(++tries>30)clearInterval(timer);
  },100);
  document.getElementById('closeBackupRestoreDialog')?.addEventListener('click',()=>document.getElementById('backupRestoreDialog')?.close());
  requestAnimationFrame(()=>{installBackupButton();});
})();


/* Travel Insights polish v6: visual icon motion + modal backdrop only.
   No swipe/touch/navigation/sag handlers are changed. */
(()=>{
 if(window.__wozzaInsightsPolishV6)return;window.__wozzaInsightsPolishV6=true;
 const st=document.createElement('style');st.id='wozza-insights-polish-v6';
 st.textContent=`
   /* Travel Insights dialogs: consistent dim + blur. */
   #passportStatDialog::backdrop{
     background:rgba(5,34,51,.34)!important;
     backdrop-filter:blur(7px)!important;
     -webkit-backdrop-filter:blur(7px)!important;
   }

   /* Score visual replacement. */
   .passport-insights-tab[data-insights-tab="score"]>.insights-brand-icon{display:none!important}
   .meter-v6{display:block;width:58px;height:50px;position:absolute;bottom:16px;left:50%;transform:translateX(-50%);opacity:.82;pointer-events:none;transition:transform .22s ease,opacity .22s ease}
   .passport-insights-tab[data-insights-tab="score"].is-active .meter-v6{transform:translateX(-50%) translateY(-2px);opacity:1}
   .meter-v6 img,.chart-v6 img{position:absolute;inset:0;width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;pointer-events:none!important}
   .needle-v6{transform:rotate(0deg);transform-origin:50% 68%!important;will-change:transform}
   .needle-v6.go-v6{animation:meterSweepV6 2.05s linear both}
   /* Main sweep gets most of the duration; small flicks happen only near the end. */
   @keyframes meterSweepV6{
     0%{transform:rotate(-82deg)}
     18%{transform:rotate(-64deg)}
     36%{transform:rotate(-45deg)}
     54%{transform:rotate(-27deg)}
     69%{transform:rotate(-10deg)}
     78%{transform:rotate(7deg)}
     84%{transform:rotate(-5deg)}
     89%{transform:rotate(3.5deg)}
     94%{transform:rotate(-2deg)}
     97%{transform:rotate(1deg)}
     100%{transform:rotate(0deg)}
   }

   /* Approved clipboard wiggle unchanged. */
   .passport-insights-tab[data-insights-tab="stats"]>.insights-brand-icon.clip-v6{animation:clipV6 .72s ease-in-out;transform-origin:50% 58%}
   @keyframes clipV6{0%{transform:translateX(-50%) translateY(-2px) rotate(0)}18%{transform:translateX(-50%) translateY(-2px) rotate(-7deg)}36%{transform:translateX(-50%) translateY(-2px) rotate(6deg)}54%{transform:translateX(-50%) translateY(-2px) rotate(-4deg)}72%{transform:translateX(-50%) translateY(-2px) rotate(2deg)}100%{transform:translateX(-50%) translateY(-2px) rotate(0)}}

   /* Charts: transparent frame asset + three real bars that morph in height. */
   .passport-insights-tab[data-insights-tab="charts"]>.insights-brand-icon{display:none!important}
   .chart-v6{display:block!important;width:46px!important;height:47px!important;position:absolute!important;bottom:17px!important;left:50%!important;z-index:3!important;transform:translateX(-50%);opacity:.82;pointer-events:none;transition:transform .22s ease,opacity .22s ease}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6{transform:translateX(-50%) translateY(-2px);opacity:1}
   .chart-v6 .chart-frame-v10{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;opacity:1!important}
   .chart-v6 .bar-v10{position:absolute!important;bottom:16.25%!important;background:#174f5a!important;border-radius:1px 1px 0 0!important;transform-origin:center bottom!important;will-change:height}
   .chart-v6 .bar-left-v10{left:27%;width:13%;height:25%}
   .chart-v6 .bar-mid-v10{left:48%;width:13%;height:49%}
   .chart-v6 .bar-right-v10{left:69%;width:13%;height:30%}
   .chart-v6.active-v6 .bar-left-v10{animation:barLeftV10 1.28s cubic-bezier(.45,0,.25,1) both}
   .chart-v6.active-v6 .bar-mid-v10{animation:barMidV10 1.28s cubic-bezier(.45,0,.25,1) both}
   .chart-v6.active-v6 .bar-right-v10{animation:barRightV10 1.28s cubic-bezier(.45,0,.25,1) both}
   @keyframes barLeftV10{from{height:25%}to{height:39%}}
   @keyframes barMidV10{from{height:49%}to{height:35%}}
   @keyframes barRightV10{from{height:30%}to{height:44%}}

   @media(max-width:380px){.meter-v6{width:52px;height:45px}.chart-v6{width:41px;height:42px}}
   @media(prefers-reduced-motion:reduce){.needle-v6.go-v6,.clip-v6,.chart-v6.active-v6 img{animation:none!important}}
 `;
 document.head.appendChild(st);

 let root=null,obs=null,previous=null;
 const active=()=>root?.querySelector('.passport-insights-tab.is-active')?.dataset.insightsTab||null;
 const restart=(el,c)=>{if(!el)return;el.classList.remove(c);void el.offsetWidth;el.classList.add(c)};
 function react(){
   const k=active();if(!k||k===previous)return;
   const old=previous;previous=k;
   // Leaving charts silently restores frame 1, with no reverse animation.
   if(old==='charts'){
     root.querySelector('.chart-v6')?.classList.remove('active-v6');
   }
   if(k==='score')restart(root.querySelector('.needle-v6'),'go-v6');
   if(k==='stats')restart(root.querySelector('[data-insights-tab="stats"]>.insights-brand-icon'),'clip-v6');
   if(k==='charts'){
     const chart=root.querySelector('.chart-v6');
     chart?.classList.remove('active-v6');void chart?.offsetWidth;chart?.classList.add('active-v6');
   }
 }
 function install(){
   const r=document.querySelector('.passport-insights-tabs');if(!r)return;
   const score=r.querySelector('[data-insights-tab="score"]'),charts=r.querySelector('[data-insights-tab="charts"]');if(!score||!charts)return;
   if(!score.querySelector('.meter-v6')){
     const m=document.createElement('span');m.className='meter-v6';m.setAttribute('aria-hidden','true');
     const b=document.createElement('img');b.src='meter-body-no-needle.png';b.alt='';
     const n=document.createElement('img');n.src='meter-needle.png';n.alt='';n.className='needle-v6';m.append(b,n);score.prepend(m);
   }
   if(!charts.querySelector('.chart-v6')){
     const m=document.createElement('span');m.className='chart-v6';m.setAttribute('aria-hidden','true');
     m.innerHTML=`<img class="chart-frame-v10" src="charts-frame.png" alt=""><i class="bar-v10 bar-left-v10"></i><i class="bar-v10 bar-mid-v10"></i><i class="bar-v10 bar-right-v10"></i>`;charts.prepend(m);
   }
   if(root!==r){
     obs?.disconnect();root=r;previous=null;
     obs=new MutationObserver(react);obs.observe(root,{attributes:true,subtree:true,attributeFilter:['class']});
     requestAnimationFrame(()=>requestAnimationFrame(react));
   }
 }
 install();
 new MutationObserver(()=>{if(root&&!document.documentElement.contains(root)){obs?.disconnect();obs=null;root=null;previous=null}install()}).observe(document.body,{childList:true,subtree:true});
})();


/* v12 LIVE Travel Insights timing/morph override.
   Deliberately last in app.js so it wins over earlier animation declarations. */
(()=>{
 const old=document.getElementById('wozza-insights-live-v12'); if(old) old.remove();
 const s=document.createElement('style'); s.id='wozza-insights-live-v12';
 s.textContent=`
   /* Needle: faster sweep, then a clearly visible mechanical settle. */
   .needle-v6.go-v6{
     animation:wozzaNeedleLiveV12 1.45s linear both!important;
   }
   @keyframes wozzaNeedleLiveV12{
     0%{transform:rotate(-82deg)}
     16%{transform:rotate(-62deg)}
     32%{transform:rotate(-41deg)}
     48%{transform:rotate(-23deg)}
     62%{transform:rotate(-8deg)}
     72%{transform:rotate(8deg)}
     80%{transform:rotate(-6deg)}
     86%{transform:rotate(4deg)}
     91%{transform:rotate(-2.5deg)}
     96%{transform:rotate(1.3deg)}
     100%{transform:rotate(0deg)}
   }

   /* Chart bars transition from the REAL tab state itself.
      This gives the same smooth motion entering AND leaving Charts. */
   .chart-v6 .bar-v10{
     animation:none!important;
     transition:height 1.28s cubic-bezier(.45,0,.25,1)!important;
   }
   .chart-v6 .bar-left-v10{height:25%!important}
   .chart-v6 .bar-mid-v10{height:49%!important}
   .chart-v6 .bar-right-v10{height:30%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-left-v10{height:39%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-mid-v10{height:35%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-right-v10{height:44%!important}
 `;
 document.head.appendChild(s);
})();


/* Backup download prototype v2 — deliberately dormant until the user clicks Download Backup File.
   No backup collection, JSON serialization, Blob creation or download work occurs during startup. */
(()=>{
  if(window.__wozzaBackupDownloadPrototypeV2)return;
  window.__wozzaBackupDownloadPrototypeV2=true;

  const backupKeys=[
    'wozzaworld-state',
    'wozzaworld-first-name',
    'wozzaAddStopStyle',
    'myworld-state'
  ];

  function ordinal(n){
    const m=n%100;
    if(m>=11&&m<=13)return n+'th';
    return n+({1:'st',2:'nd',3:'rd'}[n%10]||'th');
  }
  function displayDate(d){
    return `${ordinal(d.getDate())} of ${d.toLocaleString('en-GB',{month:'long'})} ${d.getFullYear()}`;
  }
  function fileDate(d){
    const pad=n=>String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  }
  function makeBackup(){
    const now=new Date();
    const storage={};
    for(const key of backupKeys){
      const value=localStorage.getItem(key);
      if(value!==null)storage[key]=value;
    }
    const payload={
      format:'WozzaWorld Backup',
      backupVersion:1,
      createdAt:now.toISOString(),
      storage
    };
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=`WozzaWorld-Backup-${fileDate(now)}.json`;
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);

    localStorage.setItem('wozzaworld-last-backup',now.toISOString());
    const label=document.querySelector('#backupRestoreDialog .backup-last-date');
    if(label)label.textContent=`You last made a backup on the ${displayDate(now)}.`;
  }

  document.addEventListener('click',e=>{
    const opener=e.target.closest?.('#openBackupRestore');
    if(opener){
      const raw=localStorage.getItem('wozzaworld-last-backup');
      if(raw){
        const d=new Date(raw);
        if(!Number.isNaN(d.getTime())){
          const label=document.querySelector('#backupRestoreDialog .backup-last-date');
          if(label)label.textContent=`You last made a backup on the ${displayDate(d)}.`;
        }
      }
      return;
    }
    const button=e.target.closest?.('#backupRestoreDialog .backup-restore-actions button');
    if(!button)return;
    const buttons=[...document.querySelectorAll('#backupRestoreDialog .backup-restore-actions button')];
    if(button===buttons[0]){
      e.preventDefault();
      makeBackup();
    }
  },false);
})();
