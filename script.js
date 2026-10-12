// Title letters
const title=document.getElementById('title');
[..."BLACK CLOVER"].forEach((ch,i)=>{const s=document.createElement('span');s.style.setProperty('--i',i);s.setAttribute('aria-hidden','true');s.innerHTML=ch===' '?'&nbsp;&nbsp;':ch;title.appendChild(s)});

// Data
const attrs=[
 {n:'Fire',c:'#ff5a36',d:'Raw heat and explosive force. Fire mages burn brightest when their resolve does, and a single spark can end a battle.',s:'Flame Spheres, Fire Dragon Blasts, Burning Armor'},
 {n:'Water',c:'#4aa8ff',d:'Flowing, patient and precise. Water magic heals, shields and drowns in equal measure.',s:'Water Wings, Sea Dragon Strikes, Valkyrie Armor'},
 {n:'Wind',c:'#6fe0a8',d:'Speed and sharp edges. Wind users move before their opponents finish deciding to.',s:'Wind Blades, Spirit Dive, Wind Armor'},
 {n:'Earth',c:'#c28a4a',d:'Stone, root and mountain. Earth magic is steady, patient and very hard to move.',s:'Stone Golems, Earth Spikes, Mountain Barriers'},
 {n:'Light',c:'#ffe27a',d:'Blinding, swift and bright. Light magic strikes from a distance and leaves no shadow to hide in.',s:'Light Lances, Flash Strikes, Radiant Barriers'},
 {n:'Darkness',c:'#a46bff',d:'Gravity, curses and the unseen. Dark magic bends what it touches and hides what it does.',s:'Dark Slash, Gravity Pull, Curses'},
 {n:'Time',c:'#f5b942',d:'Rare and heavy with consequence. Time mages bend moments, rewind wounds and glimpse what has not happened yet.',s:'Time Stop, Rewind, Foresight'},
 {n:'Space',c:'#5ec8e8',d:'Portals and folded distance. Space mages carry allies across the kingdom in a step.',s:'Gates, Teleportation, Barriers'},
 {n:'Plant',c:'#7bd65a',d:'Growth, thorns and living walls. Plant magic heals as readily as it entangles.',s:'Vines, Blossoms, Thorn Walls'},
 {n:'Mercury',c:'#c9d3e6',d:'Liquid silver shaped to will. Mercury magic is graceful, precise and unforgiving.',s:'Silver Shields, Mercury Blades'},
 {n:'Thread',c:'#ff7fb0',d:'Fine strands that bind, stitch and trap. Quiet to cast and hard to escape.',s:'Binding Threads, Scrying'},
 {n:'Mirror',c:'#9ad7ff',d:'Reflection, illusion and redirection. Mirror magic turns sight into a weapon.',s:'Reflections, Duplicates'},
 {n:'Anti-magic',c:'#d4142a',d:'Rare and strange. A black grimoire of five leaves and a blade that cuts through spells rather than flesh.',s:'Demon-Slayer Sword, Demon-Dweller Sword, Demon-Destroyer Sword'},
 {n:'Sword',c:'#e8e2c9',d:'The blade turned into magic. Sword mages fight with refined technique, and the elf Licht was famed for his mastery of it.',s:'Sword Strikes, Ultimate Magic'},
 {n:'Imitation',c:'#4ad9c1',d:'Copies what it sees. Imitation magic reproduces other people\'s spells and rewards anyone who studies their methods.',s:'Spell Copying, Copied Light Magic'},
 {n:'Beast',c:'#e0802e',d:'Animal forms and instincts. Beast magic lends the user the strength of creatures, even mythical ones, when pushed to the limit.',s:'Beast Forms, Mythical Beast Magic'},
 {n:'Dream',c:'#c9b0ff',d:'Illusions that feel real. Dream magic builds worlds where the caster decides what happens.',s:'Glamour World, Dream Illusions'},
 {n:'Word',c:'#ff4d8d',d:'Words that become reality. Word magic speaks objects and effects into being, within the limits of range and power.',s:'Spoken Reality, Reincarnation Magic, Spirit Possession'}
];
const squads=[
 ['Black Bulls','#d9d9d9','The kingdom\'s misfit squad. Poor, rowdy and underestimated, they hold together tighter than any other squad.'],
 ['Golden Dawn','#ffd24a','The elite. Radiant, disciplined and proud, the squad of kingdom favourites.'],
 ['Crimson Lion Kings','#e5393a','Fierce fighters led by a royal. They respect strength and little else.'],
 ['Blue Rose Knights','#4a7bff','A refined squad of mostly women, known for elegance and fearsome control.'],
 ['Silver Eagles','#b8c4d8','Sharp-eyed and swift, with a tradition of long-range precision.'],
 ['Green Praying Mantises','#4fbf6a','Quiet specialists who prefer patience, camouflage and surprise.'],
 ['Purple Orcas','#9b5cd6','Skilled with water and strategy, they win by controlling the battlefield.'],
 ['Aqua Deer','#59d4d0','Calm, gentle and well-versed in healing and protection.'],
 ['Coral Peacocks','#ff8d7a','Flamboyant performers whose style hides serious technique.']
];
const knights=[
['Asta','Black Bulls','Anti-magic','Born without mana, he wields five-leaf anti-magic and the swords of the five-leaf grimoire.'],
['Yami Sukehiro','Black Bulls','Darkness','Captain of the Black Bulls who turns dark magic into a slashing, near-unbeatable style.'],
['Noelle Silva','Black Bulls','Water','Royal water mage who mastered Valkyrie Armor and Sea Dragon spells.'],
['Vanessa Enoteca','Black Bulls','Thread','Precise thread caster who binds enemies and keeps the squad safe.'],
['Finral Roulacase','Black Bulls','Space','Gate mage who ferries the Bulls through spatial portals.'],
['Magna Swing','Black Bulls','Fire','Hot-headed fire mage who fights with a flaming fan.'],
['Luck Voltia','Black Bulls','Time','Lightning-quick fighter who loves battle and never backs down.'],
['Secre Swallowtail','Black Bulls','Space','Quiet squad member whose spatial skills protect allies.'],
['Gauche Adlai','Black Bulls','Mirror','Reflection mage devoted to protecting those he cares about.'],
['Grey','Black Bulls','Darkness','Shape-shifter who can take any form and slips past enemy lines.'],
['Gordon Agrippa','Black Bulls','Darkness','Curse mage whose gentle manner hides dangerous power.'],
['Zora Ideale','Black Bulls','Earth','Trap specialist who turns ground and objects into snares.'],
['Charmy Pappitson','Black Bulls','Plant','Appetite-driven plant mage who conjures giant stuffed animals.'],
['Nacht Faust','Black Bulls','Darkness','Bull vice captain who commands shadow familiars.'],
['Yuno','Golden Dawn','Wind','Wind mage with a four-leaf grimoire, ruled by the Spirit of Wind.'],
['Mimosa Vermillion','Golden Dawn','Plant','Plant and healing mage who mends allies in battle.'],
['Klaus Lunettes','Golden Dawn','Light','Disciplined light mage who rose to become a Magic Knight Captain.'],
['William Vangeance','Golden Dawn','Time','Golden Dawn Captain, time mage and a brilliant strategist.'],
['Julius Novachrono','Wizard King','Time','Wizard King of the Clover Kingdom, master of time magic.'],
['Fuegoleon Vermillion','Crimson Lion Kings','Fire','Crimson Lion Kings captain with rare flame mastery.'],
['Leopold Vermillion','Crimson Lion Kings','Fire','Hot-blooded fire mage who wants to outshine his brother.'],
['Mereoleona Vermillion','Crimson Lion Kings','Fire','Fearsome fire captain who trains with brutal discipline.'],
['Nozel Silva','Silver Eagles','Mercury','Silver Eagles captain who wields mercury magic with cold precision.'],
['Solid Silva','Silver Eagles','Mercury','Silver Eagles knight who fights with refined control.'],
['Charlotte Roselei','Blue Rose Knights','Plant','Blue Rose captain with thorn-vine magic and a sharp tongue.'],
['Sol Marron','Blue Rose Knights','Earth','Earth mage of the Blue Rose Knights.'],
['Dorothy Unsworth','Blue Rose Knights','Darkness','Dreamy Blue Rose knight with strange dream magic.'],
['Jack the Ripper','Purple Orcas','Darkness','Purple Orcas knight feared for his quiet cruelty.'],
['Rill Boismortier','Aqua Deer','Water','Aqua Deer knight who heals and protects.'],
['Marx Francois','Aqua Deer','Space','Aqua Deer captain with spatial and sealing talent.'],
['Rades Spirito','Green Praying Mantises','Wind','Green Praying Mantises knight skilled in patience and surprise.'],
['Langris Vaude','Coral Peacocks','Mirror','Flamboyant Coral Peacock whose style hides serious technique.'],
['Lumiere Silvamillion','Golden Dawn','Light','Former Golden Dawn leader whose light shaped the squad.'],
['Lucius Zogratis','Wizard King','Time','Past Wizard King and powerful time mage.'],
['Licht','Elf Tribe','Sword','Kind leader of the elf tribe and husband of the human Tetia. His spirit returns through the magic stones during the reincarnation.'],
['Patri (Patolli)','Eye of the Midnight Sun','Light','Elf who leads the Eye of the Midnight Sun in its mission of revenge. He shares a body with William Vangeance.'],
['Fana','Eye of the Midnight Sun','Fire','Elf reincarnated in a human member of the Eye of the Midnight Sun\'s Third Eye.'],
['Rhya','Eye of the Midnight Sun','Imitation','Elf reincarnated in a human member of the Third Eye, alongside Fana and Vetto.'],
['Vetto','Eye of the Midnight Sun','Beast','Third Eye elf who is reborn in an artificial body after his defeat in the Underwater Temple.'],
['Drowa','Elf Tribe','Mirror','Elf spirit reincarnated in the body of Black Bull Gauche Adlai.'],
['Reve','Elf Tribe','Dream','Elf spirit reincarnated in the body of Dorothy Unsworth of the Blue Rose Knights.'],
['Zagred','Devils','Word','Devil whose scheme led to the elf massacre and the reincarnation spell that drives the arc.']
];
const featsAll=[['The first grimoire','Asta receives a five-leaf grimoire and becomes a Magic Knight candidate.'],['Black Bulls rise','The Black Bulls prove their strength against elite squads.'],['Royal capital raid','Knights unite to defend the capital from a major assault.'],['The elves return','Sealed elf spirits are reincarnated into human hosts, including Magic Knights, and the kingdom must face its buried past.'],['Spade Kingdom war','Allies cross borders to fight the Spade Kingdom threat.'],['Dark Triad reckoning','The clover kingdoms face the Dark Triad and its devils.'],['A new Wizard King','Asta pursues the title of Wizard King, the highest rank in the kingdom.']];

// Magic attribute selector
const root=document.documentElement,attrsEl=document.getElementById('attrs'),panel=document.getElementById('panel');
let accent=attrs[0].c;
function setAttr(i){
  const a=attrs[i];accent=a.c;
  root.style.setProperty('--accent',a.c);root.style.setProperty('--accent-soft',a.c+'33');
  [...attrsEl.children].forEach((b,j)=>b.setAttribute('aria-pressed',j===i));
  const who=knights.filter(k=>k[2]===a.n).map(k=>`<button class="chip" data-n="${k[0]}">${k[0]}</button>`).join('');panel.innerHTML=`<div class="swap"><h3>${a.n}</h3><p>${a.d}</p>${a.s?`<p class="sp"><b>Spells:</b> ${a.s}</p>`:''}${who?`<div class="chips">${who}</div>`:''}</div>`;
}
attrs.forEach((a,i)=>{const b=document.createElement('button');b.textContent=a.n;b.onclick=()=>setAttr(i);attrsEl.appendChild(b)});
setAttr(0);

// Squads accordion
const ray=(r1,r2,n)=>[...Array(n)].map((_,i)=>{const a=i*6.2832/n,k=Math.cos(a),j=Math.sin(a);return `M${200+r1*k} ${100+r1*j}L${200+r2*k} ${100+r2*j}`}).join('');
const MO={
'Golden Dawn':`<circle cx="200" cy="100" r="22"/><path d="${ray(32,56,12)}"/>`,
'Silver Eagles':'<path d="M200 55V135M200 80C170 60 140 70 120 50C130 90 160 110 200 125M200 80C230 60 260 70 280 50C270 90 240 110 200 125"/>',
'Purple Orcas':'<path d="M170 40C240 60 150 90 225 110C265 125 190 150 215 168"/>',
'Coral Peacocks':'<path d="M200 150L150 70M200 150L170 55M200 150L200 50M200 150L230 55M200 150L250 70"/><circle cx="150" cy="70" r="7"/><circle cx="170" cy="55" r="7"/><circle cx="200" cy="50" r="7"/><circle cx="230" cy="55" r="7"/><circle cx="250" cy="70" r="7"/>',
'Blue Rose Knights':'<circle cx="200" cy="100" r="9"/><circle cx="200" cy="100" r="20"/><circle cx="200" cy="100" r="34"/><path d="M200 66V50M234 100H250M200 134V150M166 100H150"/>',
'Green Praying Mantises':'<path d="M200 40L215 90L250 70L220 110L200 160L180 110L150 70L185 90Z"/>',
'Aqua Deer':'<path d="M200 150V100M200 100L170 70L160 40M170 70L145 65M200 100L230 70L240 40M230 70L255 65"/><path d="M180 150H220L200 170Z"/>',
'Black Bulls':'<path d="M130 70C150 50 175 70 180 90M270 70C250 50 225 70 220 90M180 90H220L212 140H188Z"/><path d="M200 100L203 108L211 108L205 113L207 121L200 116L193 121L195 113L189 108L197 108Z"/>',
'Crimson Lion Kings':'<path d="M165 75L180 50L200 70L220 50L235 75L225 120L200 140L175 120Z"/>'
};
const emb=(n,c)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".45"/><stop offset="1" stop-color="#050505"/></linearGradient></defs><rect width="400" height="200" fill="url(#g)"/><path d="M150 18H250V105Q250 140 200 162Q150 140 150 105Z" fill="#050505" fill-opacity=".5" stroke="${c}" stroke-width="3"/><g transform="translate(200 90) scale(.55) translate(-200 -100)" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${MO[n]||''}</g><text x="200" y="188" text-anchor="middle" font-family="Georgia,serif" font-size="15" letter-spacing="4" fill="${c}">${n.toUpperCase()}</text></svg>`);
const list=document.getElementById('squadList');
squads.forEach(([n,c,t],i)=>{
  const d=document.createElement('div');d.className='squad';d.style.setProperty('--c',c);
  d.innerHTML=`<button aria-expanded="false" aria-controls="sq${i}"><span class="dot"></span>${n}<span class="plus">+</span></button><div class="body" id="sq${i}"><div><div class="sq-pic"><img src="${emb(n,c)}" alt=""><img src="images/squads/${n.toLowerCase().replace(/[^a-z]+/g,'-')}.jpg" alt="${n} squad" onerror="this.remove()"></div><p>${t}</p><div class="chips">${knights.filter(k=>k[1]===n).map(k=>`<button class="chip" data-n="${k[0]}">${k[0]}</button>`).join('')}</div></div></div>`;
  const btn=d.querySelector('button');
  btn.onclick=()=>{const open=!d.classList.contains('open');list.querySelectorAll('.squad').forEach(s=>{s.classList.remove('open');s.querySelector('button').setAttribute('aria-expanded','false')});if(open){d.classList.add('open');btn.setAttribute('aria-expanded','true')}};
  list.appendChild(d);
});

// Character cards
const aC=Object.fromEntries(attrs.map(a=>[a.n,a.c])),sg=n=>n.toLowerCase().replace(/[^a-z]+/g,'-');
const pic=c=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><defs><radialGradient id="g" cx="50%" cy="35%"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="#050505"/></radialGradient></defs><rect width="100" height="120" fill="url(#g)"/><circle cx="50" cy="46" r="19" fill="#050505" stroke="${c}" stroke-width="1.5"/><path d="M14 120C14 84 32 72 50 72s36 12 36 48z" fill="#050505" stroke="${c}" stroke-width="1.5"/></svg>`);

// Knight photos live in the images/ folder. Most files are lowercase-with-hyphens (asta.jpg, yami-sukehiro.jpg);
// the elf-arc files use their own names (see FILE). Extensions are tried in order, so .jpg/.png/.jpeg/.webp all work.
const EXT=['jpg','png','jpeg','webp','jfif'];
const FILE={'Licht':'Licht','Patri (Patolli)':'Patri','Fana':'Fana Elf','Rhya':'Rhya','Vetto':'Vetto','Drowa':'Drowa Elf','Reve':'Reve Elf','Zagred':'Zagred'};
const photoList=n=>{const b=FILE[n]||sg(n),a=[b];if(b!==b.toLowerCase())a.push(b.toLowerCase());
  const o=[];a.forEach(x=>EXT.forEach(e=>o.push('images/'+encodeURIComponent(x)+'.'+e)));return o};
function photo(n){const l=photoList(n),q=n.replace(/"/g,'&quot;');return `<img src="${l[0]}" alt="${q}" data-k="${q}" data-i="0" onerror="photoNext(this)">`}
function photoNext(im){const l=photoList(im.dataset.k),i=+im.dataset.i+1;if(i<l.length){im.dataset.i=i;im.src=l[i]}else im.remove()}
const cards=document.getElementById('cards'),q=document.getElementById('q');
knights.forEach(([n,s,a,t])=>{
  const c=aC[a]||'#c9a54b',e=document.createElement('article');e.className='card';e.style.setProperty('--c',c);e.dataset.s=(n+' '+s+' '+a).toLowerCase();
  e.innerHTML=`<div class="pic"><img src="${pic(c)}" alt="">${photo(n)}</div><h3>${n}</h3><small>${s} · ${a}</small><p>${t}</p>`;
  e.addEventListener('pointermove',ev=>{const r=e.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width,y=(ev.clientY-r.top)/r.height;
    e.style.setProperty('--mx',x*100+'%');e.style.setProperty('--my',y*100+'%');
    e.style.transform=`perspective(700px) rotateX(${(.5-y)*10}deg) rotateY(${(x-.5)*12}deg) translateZ(0)`});
  e.addEventListener('pointerleave',()=>e.style.transform='');
  cards.appendChild(e);
});
q.oninput=()=>{const v=q.value.toLowerCase();[...cards.children].forEach(c=>c.hidden=!c.dataset.s.includes(v))};
const fl=document.getElementById('feats');
featsAll.forEach(([h,t],i)=>{const d=document.createElement('div');d.className='feat';d.innerHTML=`<span>${i+1}</span><div><h3>${h}</h3><p>${t}</p></div>`;fl.appendChild(d)});

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:0,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Mana particles
const cv=document.getElementById('mana'),ctx=cv.getContext('2d');
let W,H,ps=[],mouse={x:-999,y:-999};
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight}
addEventListener('resize',size);size();
addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
for(let i=0;i<(W<700?45:90);i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.5,vy:-(Math.random()*.4+.15),vx:(Math.random()-.5)*.2,p:Math.random()*6});
function frame(t){
  ctx.clearRect(0,0,W,H);ctx.fillStyle=accent;
  for(const p of ps){
    const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);
    if(d<140){p.x+=dx/d*(140-d)*.03;p.y+=dy/d*(140-d)*.03}
    p.x+=p.vx+Math.sin(t/1500+p.p)*.25;p.y+=p.vy;
    if(p.y<-10){p.y=H+10;p.x=Math.random()*W}
    ctx.globalAlpha=.25+.5*Math.abs(Math.sin(t/1200+p.p));
    ctx.shadowColor=accent;ctx.shadowBlur=10;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fill();
  }
  if(!reduce)requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// Knight detail dialog
const DET={
 'Asta':{g:'Five-leaf grimoire',r:'Black Bulls member',a:['Demon-Slayer Sword','Demon-Dweller Sword','Demon-Destroyer Sword','Anti-magic deflection']},
 'Yuno':{g:'Four-leaf grimoire',r:'Golden Dawn member',a:['Spirit of Wind (Sylph)','Spirit Dive','Wind Blades','Wind Armor']},
 'Yami Sukehiro':{r:'Captain, Black Bulls',a:['Dark Slash','Dark Cloaking','Dark Clad']},
 'Noelle Silva':{r:'Royal, Black Bulls member',a:['Water Wings','Sea Dragon\'s Roar','Valkyrie Armor']},
 'Julius Novachrono':{r:'Wizard King',a:['Time Stop','Rewind','Foresight']},
 'Lucius Zogratis':{r:'Former Wizard King',a:['Time magic']},
 'William Vangeance':{r:'Captain, Golden Dawn',a:['Time Stop','Foresight']},
 'Fuegoleon Vermillion':{r:'Captain, Crimson Lion Kings',a:['Flame Spheres','Burning Armor']},
 'Nozel Silva':{r:'Captain, Silver Eagles',a:['Silver Shields','Mercury Blades']},
 'Charlotte Roselei':{r:'Captain, Blue Rose Knights',a:['Thorn Walls','Vines']},
 'Nacht Faust':{r:'Vice Captain, Black Bulls',a:['Shadow familiars','Dark Slash']},
 'Licht':{r:'Leader of the elf tribe',a:['Sword Strikes','Ultimate Magic']},
 'Patri (Patolli)':{r:'Leader, Eye of the Midnight Sun',a:['Flash Strikes','Healing Light Particles','Demon Light Magic']},
 'Fana':{r:'Third Eye, Eye of the Midnight Sun'},
 'Rhya':{r:'Third Eye, Eye of the Midnight Sun'},
 'Vetto':{r:'Third Eye, Eye of the Midnight Sun'},
 'Drowa':{r:'Elf spirit sharing a body with Gauche Adlai',a:['Reflections','Light Beams']},
 'Reve':{r:'Elf spirit sharing a body with Dorothy Unsworth'},
 'Zagred':{r:'Devil'}
};
const dlg=document.getElementById('dlg'),dbody=document.getElementById('dbody');

// Ability guide: name -> [attribute, kind, description]
const ABIL={
 'Demon-Slayer Sword':['Anti-magic','Sword','Asta\'s first anti-magic blade. It cuts through spells instead of flesh and cancels the magic it touches.'],
 'Demon-Dweller Sword':['Anti-magic','Sword','A blade that absorbs magic and holds it, letting Asta turn an enemy\'s power against them.'],
 'Demon-Destroyer Sword':['Anti-magic','Sword','A massive blade for Asta\'s heaviest strikes. It wipes out magic in its path.'],
 'Anti-magic deflection':['Anti-magic','Technique','Asta swats incoming spells aside with his blade, so ranged magic is much less useful against him.'],
 'Spirit of Wind (Sylph)':['Wind','Spirit','The wind spirit bound to Yuno\'s four-leaf grimoire. It lends him strong wind magic and fights beside him.'],
 'Spirit Dive':['Wind','Technique','Yuno joins with his spirit to sharply raise his speed and power for a short time.'],
 'Wind Blades':['Wind','Spell','Sharp edges of compressed wind. Fast, precise and hard to see coming.'],
 'Wind Armor':['Wind','Armor','Wind wrapped around the body to raise speed and add protection.'],
 'Dark Slash':['Darkness','Spell','Dark mana shaped into a cutting strike. It is the heart of Yami\'s slashing style.'],
 'Dark Cloaking':['Darkness','Technique','The body and blade are wrapped in dark mana to hit harder and block better.'],
 'Dark Clad':['Darkness','Armor','A shroud of dark mana worn like armor around the user.'],
 'Gravity Pull':['Darkness','Spell','Bends gravity to drag enemies in or pin them down.'],
 'Curses':['Darkness','Spell','Dark mana that weakens or afflicts its target. Often quiet, always nasty.'],
 'Shadow familiars':['Darkness','Summon','Shadow creatures Nacht commands to scout, strike and shield.'],
 'Water Wings':['Water','Spell','Wings of water that give Noelle flight and a sweeping attack.'],
 'Sea Dragon\'s Roar':['Water','Spell','A crushing blast of water released like a dragon\'s breath.'],
 'Sea Dragon Strikes':['Water','Spell','Powerful water attacks styled after a sea dragon.'],
 'Valkyrie Armor':['Water','Armor','Water shaped into armor that boosts Noelle\'s strength and defence.'],
 'Time Stop':['Time','Spell','Freezes moments around the target, giving the caster a decisive opening.'],
 'Rewind':['Time','Spell','Turns back time on a target to undo wounds or damage.'],
 'Foresight':['Time','Spell','Glimpses what is about to happen so the user can act before it does.'],
 'Time magic':['Time','Attribute','Rare magic that bends moments, from slowing and stopping them to rewinding them.'],
 'Flame Spheres':['Fire','Spell','Orbs of fire fired in volleys. Simple, hot and effective.'],
 'Fire Dragon Blasts':['Fire','Spell','A roaring blast of flame shaped like a dragon.'],
 'Burning Armor':['Fire','Armor','Flames wrapped around the body to raise power and speed.'],
 'Silver Shields':['Mercury','Spell','Liquid silver hardened into shields that block and redirect attacks.'],
 'Mercury Blades':['Mercury','Spell','Silver shaped into blades with a graceful, deadly edge.'],
 'Thorn Walls':['Plant','Spell','Living walls of thorns that block, trap and punish anyone who touches them.'],
 'Vines':['Plant','Spell','Vines that bind, lift or whip enemies, and sometimes heal allies.'],
 'Blossoms':['Plant','Spell','Flowers that heal, calm or distract, depending on how they are grown.'],
 'Stone Golems':['Earth','Summon','Earth raised into stone guardians that fight on the caster\'s behalf.'],
 'Earth Spikes':['Earth','Spell','Spikes of rock thrust up from the ground beneath enemies.'],
 'Mountain Barriers':['Earth','Spell','Thick rock barriers that hold the line against heavy attacks.'],
 'Light Lances':['Light','Spell','Bright, fast lances of light thrown from a distance.'],
 'Flash Strikes':['Light','Spell','Blinding bursts that strike before opponents can respond.'],
 'Radiant Barriers':['Light','Spell','Shields of light that protect allies and dazzle attackers.'],
 'Gates':['Space','Spell','Portals that carry allies and attacks across distance in one step.'],
 'Teleportation':['Space','Spell','Folds distance so the user can jump from place to place.'],
 'Barriers':['Space','Spell','Spatial walls that shield allies and seal off areas.'],
 'Binding Threads':['Thread','Spell','Fine strands that tie up, stitch together or trap targets.'],
 'Scrying':['Thread','Spell','Threads used as eyes to search and watch from afar.'],
 'Reflections':['Mirror','Spell','Sends attacks and sights back at their source.'],
 'Duplicates':['Mirror','Spell','Creates copies that confuse enemies and split their attention.'],
 'Healing Light Particles':['Light','Spell','Particles of light that mend wounds. Patri uses them to heal his fellow elves.'],
 'Demon Light Magic':['Light','Technique','A darker form of Light Magic that Patri gains after falling into despair, letting him control black light.'],
 'Light Beams':['Mirror','Spell','Reflects light into powerful beams that strike from unexpected angles.'],
 'Sword Strikes':['Sword','Spell','Licht\'s refined blade techniques. His mastery of the sword was famous among the elves.'],
 'Ultimate Magic':['Sword','Technique','The elves\' technique for fully embodying their magic. Licht uses it against Zagred.'],
 'Spell Copying':['Imitation','Spell','Copies spells the user has seen so they can be cast as one\'s own.'],
 'Copied Light Magic':['Imitation','Technique','Light Magic copied from Patri, letting Rhya cross great distances almost instantly.'],
 'Beast Forms':['Beast','Technique','Takes on the strength and instincts of animals.'],
 'Mythical Beast Magic':['Beast','Technique','Vetto\'s limit-breaking form, which copies creatures no one has seen before.'],
 'Glamour World':['Dream','Spell','A dream-like world Reve conjures, where illusions trap those inside.'],
 'Dream Illusions':['Dream','Spell','Illusions born from dreams that confuse and trap enemies.'],
 'Spoken Reality':['Word','Spell','Zagred\'s words become real, shaping his surroundings and calling objects into being.'],
 'Reincarnation Magic':['Word','Spell','Magic that returns the spirits of the dead to the world by placing them in living bodies. Zagred casts it on the elves.'],
 'Spirit Possession':['Word','Technique','Zagred takes over the bodies of elves and humans alike.']
};
const abOf=k=>{const d=DET[k[0]]||{};if(d.a)return d.a;const a=attrs.find(x=>x.n===k[2]);return a&&a.s?a.s.split(', '):[]};
const esc=t=>String(t).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

function openKnight(name){
  const k=knights.find(x=>x[0]===name);if(!k)return;
  const [n,sq,at,t]=k,c=aC[at]||'#c9a54b',d=DET[n]||{},ab=abOf(k);
  dlg.style.setProperty('--c',c);
  dbody.innerHTML=`<div class="pic"><img src="${pic(c)}" alt="">${photo(n)}</div>
  <h3 id="dn">${n}</h3><p class="sub">${sq} · ${at}</p><p>${t}</p>
  <dl><dt>Squad</dt><dd>${sq}</dd><dt>Attribute</dt><dd>${at}</dd>${d.r?`<dt>Role</dt><dd>${d.r}</dd>`:''}${d.g?`<dt>Grimoire</dt><dd>${d.g}</dd>`:''}</dl>
  ${ab.length?`<h4>Abilities</h4><p class="hint">Select an ability to see how it works.</p><div class="chips" id="abchips">${ab.map(x=>`<button type="button" class="chip" aria-pressed="false" data-ab="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="ab-info" id="abinfo" aria-live="polite" hidden></div>`:''}`;
  if(!dlg.open)dlg.showModal();
  dlg.scrollTop=0;
}
function showAbility(name,btn){
  const box=document.getElementById('abinfo');if(!box)return;
  const wasOn=btn.getAttribute('aria-pressed')==='true';
  document.querySelectorAll('#abchips .chip').forEach(b=>b.setAttribute('aria-pressed','false'));
  if(wasOn){box.hidden=true;return}
  btn.setAttribute('aria-pressed','true');
  const g=ABIL[name],ai=attrs.findIndex(x=>x.n===(g?g[0]:'')),a=attrs[ai];
  const users=knights.filter(x=>abOf(x).includes(name)).map(x=>x[0]);
  const cur=dbody.querySelector('h3').textContent;
  box.style.setProperty('--ac',a?a.c:'var(--c)');
  box.innerHTML=g?`<h5>${esc(name)}</h5>
    <p class="meta"><span class="tag">${esc(g[1])}</span><span class="tag">${esc(g[0])} attribute</span></p>
    <p>${esc(g[2])}</p>
    ${users.filter(u=>u!==cur).length?`<p class="sp"><b>Also used by:</b> ${users.filter(u=>u!==cur).map(u=>`<button type="button" class="link" data-n="${esc(u)}">${esc(u)}</button>`).join(', ')}</p>`:''}
    ${a?`<button type="button" class="go" data-attr="${ai}">See the ${esc(a.n)} attribute</button>`:''}`
    :`<h5>${esc(name)}</h5><p>No notes for this ability yet.</p>`;
  box.hidden=false;
  box.style.animation='none';box.offsetWidth;box.style.animation='';
}
document.addEventListener('click',e=>{
  const ab=e.target.closest('[data-ab]');
  if(ab){showAbility(ab.dataset.ab,ab);return}
  const go=e.target.closest('.go[data-attr]');
  if(go){dlg.close();setAttr(+go.dataset.attr);document.getElementById('magic').scrollIntoView({behavior:'smooth'});return}
  const lk=e.target.closest('.link[data-n]');
  if(lk){openKnight(lk.dataset.n);return}
  const b=e.target.closest('.chip[data-n]'),cd=e.target.closest('.card');
  if(b)openKnight(b.dataset.n);else if(cd)openKnight(cd.querySelector('h3').textContent);
  else if(e.target===dlg||e.target.closest('.x'))dlg.close();
});

// Music: plays Black-clover.mp3 (same folder as index.html); if the file can't load, falls back to a soft synthesized pad
const snd=document.getElementById('snd');
const SRCS=['Black-clover.mp3','black-clover.mp3','Black clover.mp3','black clover.mp3','Black_clover.mp3','black_clover.mp3'];
let srcI=0;
let track=null,ac=null,pad=null,want=false;
function synth(){
  const AC=window.AudioContext||window.webkitAudioContext;
  ac=ac||new AC();
  if(ac.state==='suspended')ac.resume();            // browsers start the context suspended -> silent without this
  const now=ac.currentTime,g=ac.createGain();
  g.gain.setValueAtTime(0,now);g.connect(ac.destination);
  const o=[110,164.81,220,261.63,329.63].map((f,i)=>{const s=ac.createOscillator(),v=ac.createGain(),l=ac.createOscillator(),lg=ac.createGain();
    s.type=i%2?'sine':'triangle';s.frequency.value=f;v.gain.value=.05;l.frequency.value=.08+i*.03;lg.gain.value=.025;
    l.connect(lg);lg.connect(v.gain);s.connect(v);v.connect(g);s.start();l.start();return{s,l}});
  g.gain.linearRampToValueAtTime(.6,now+3);
  return{stop(){const t=ac.currentTime;g.gain.cancelScheduledValues(t);g.gain.setValueAtTime(g.gain.value,t);g.gain.linearRampToValueAtTime(0,t+.8);
    setTimeout(()=>{o.forEach(({s,l})=>{try{s.stop();l.stop()}catch(e){}});g.disconnect()},900)}};
}
function setUI(on){snd.setAttribute('aria-pressed',on);snd.textContent=on?'♪ Pause':'♪ Music';snd.setAttribute('aria-label',on?'Pause music':'Play music')}
function stopAll(){want=false;if(track)track.pause();if(pad){pad.stop();pad=null}setUI(false)}
function usePad(){track=null;if(want&&!pad){pad=synth();snd.title='Black-clover.mp3 was not found next to index.html, so a backup ambient sound is playing';console.warn('Music file not found. Put Black-clover.mp3 in the same folder as index.html (name must match exactly).')}}
function nextSrc(){if(++srcI<SRCS.length){track.src=SRCS[srcI];if(want)track.play().catch(()=>{})}else usePad()}
async function startAll(){
  want=true;setUI(true);
  if(!track){
    track=new Audio();track.loop=true;track.volume=.6;track.preload='auto';
    track.addEventListener('error',nextSrc);         // file missing / undecodable: try other common file names, then the pad
    track.src=SRCS[srcI];
  }
  try{await track.play()}
  catch(err){
    if(err.name==='AbortError')return;               // paused again before it finished loading
    if(err.name==='NotAllowedError'){stopAll();return}  // browser blocked playback; button goes back to "Music"
    usePad();
  }
}
snd.onclick=()=>want?stopAll():startAll();