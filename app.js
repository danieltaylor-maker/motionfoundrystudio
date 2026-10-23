const $=s=>document.querySelector(s);
const brief=$('#brief'), preview=$('#preview');
const copy={hero:['One idea. Every channel.','The approved homepage collage, including social, TV, motion and display imagery.'],formats:['Every format. No extra hassle.','One runner campaign, adapted for TV / YouTube, TikTok / Reels, Instagram, paid social and stories.'],aviva:['Aviva','Multi-format campaign assets.'],lner:['LNER','Social content and campaign rollouts.'],unilever:['Unilever','Motion graphics and paid social.'],bupa:['Bupa','Campaign adaptation and cutdowns.'],hsbc:['HSBC','Display advertising and social.'],closing:['Extra hands for busy teams','Production support from master creative to final delivery.'],motion:['Motion graphics','Animation, titles and content. We bring your creative to life with motion.'],social:['Paid social','Platform-ready motion and video, cutdowns and creative variations.'],display:['Display','HTML5, GIF, MP4 and digital campaign assets in every required size.'],rollouts:['Campaign rollouts','One master creative adapted consistently across multiple channels and formats.']};
copy["hero-red"]=["Campaign visual","Individually replaceable temporary campaign artwork."];
copy["hero-pink"]=["Campaign visual","Individually replaceable temporary campaign artwork."];
copy["hero-palms"]=["Campaign visual","Individually replaceable temporary campaign artwork."];
copy["hero-hoodie"]=["Campaign visual","Individually replaceable temporary campaign artwork."];
copy["hero-runner"]=["Campaign visual","Individually replaceable temporary campaign artwork."];
copy["format-wide"]=["16:9 · TV / YouTube","Runner campaign adapted for TV / YouTube."];
copy["format-vertical"]=["9:16 · TikTok / Reels","Runner campaign adapted for TikTok / Reels."];
copy["format-square"]=["1:1 · Instagram","Runner campaign adapted for Instagram."];
copy["format-portrait"]=["4:5 · Paid social","Runner campaign adapted for Paid social."];
copy["format-stories"]=["9:21 · Stories","Runner campaign adapted for Stories."];
function showPreview(key){const [title,description]=copy[key];$('#preview-title').textContent=title;$('#preview-image').src=`./assets/${key}.webp`;$('#preview-image').alt=title+' — approved mockup imagery';$('#preview-description').textContent=description+' Temporary imagery extracted from the approved mockup. This is a still-image preview; Eko video assets will replace it later.';preview.showModal();}
function showBrief(team){if(preview.open)preview.close();if(team)$('#brief-form').elements.team.value=team;brief.showModal();}
document.querySelectorAll('[data-preview]').forEach(b=>b.addEventListener('click',()=>showPreview(b.dataset.preview)));
document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>showPreview(b.dataset.service)));
document.querySelectorAll('[data-brief]').forEach(b=>b.addEventListener('click',()=>showBrief(b.dataset.team)));
$('#preview-brief').addEventListener('click',()=>showBrief());
$('[data-work]').addEventListener('click',()=>{document.querySelector('.work-grid').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});document.querySelector('.work-card').focus({preventScroll:true});});
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
$('.menu').addEventListener('click',()=>{const open=$('.menu').getAttribute('aria-expanded')!=='true';$('.menu').setAttribute('aria-expanded',String(open));$('#nav').classList.toggle('open',open);});
$('#nav').addEventListener('click',e=>{if(e.target.closest('a')){$('.menu').setAttribute('aria-expanded','false');$('#nav').classList.remove('open');}});
function getBrief(){const form=$('#brief-form');if(!form.reportValidity())return null;const data=new FormData(form);return `Motion Foundry production brief\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nTeam: ${data.get('team')}\n\nProject\n${data.get('message')}\n`;}
