const recipes = [
  {
    id:"overnight-oats", category:"breakfast", categoryLabel:{en:"Breakfast",si:"උදෑසන ආහාර"}, title:{en:"Creamy Overnight Oats",si:"රාත්‍රියේ සකස් කරන ඕට්ස්"}, emoji:"🥣", art:"art-oats",
    description:{en:"A simple make-ahead breakfast with oats, milk, banana and a little cinnamon.",si:"ඕට්ස්, කිරි, කෙසෙල් සහ කුරුඳු ස්වල්පයක් එක් කර පෙර සකස් කළ හැකි පහසු උදෑසන ආහාරයක්."},
    time:"5 min + chill", servings:{en:"1 serving",si:"එක් අයෙකුට"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["½ cup rolled oats","½ cup milk or unsweetened plant milk","½ banana, sliced","1 teaspoon chia seeds (optional)","A pinch of cinnamon"],si:["රෝල්ඩ් ඕට්ස් කෝප්ප ½","කිරි හෝ සීනි නොදැමූ ශාකමය කිරි කෝප්ප ½","කෙසෙල් ගෙඩි ½ක්, පෙති කපා","චියා ඇට තේ හැඳි 1ක් (අවශ්‍ය නම්)","කුරුඳු ස්වල්පයක්"]},
    steps:{en:["Add the oats, milk, chia seeds and cinnamon to a clean jar or bowl.","Stir well, cover and refrigerate for at least 4 hours or overnight.","In the morning, add the banana and a splash of milk if you prefer a softer texture."],si:["පිරිසිදු බෝතලයකට හෝ බඳුනකට ඕට්ස්, කිරි, චියා ඇට සහ කුරුඳු එක් කරන්න.","හොඳින් කලවම් කර වසා අවම වශයෙන් පැය 4ක් හෝ රාත්‍රියක් ශීතකරණයේ තබන්න.","උදෑසන කෙසෙල් එක් කරන්න. තවත් මෘදු වීමට අවශ්‍ය නම් කිරි ස්වල්පයක් එක් කරන්න."]},
    tip:{en:"Try topping with seasonal fruit or a few chopped nuts. Refrigerate promptly.",si:"කාලයට ගැළපෙන පලතුරු හෝ කපාගත් ඇට වර්ග ස්වල්පයක් උඩින් එක් කරන්න. සකස් කළ පසු ඉක්මනින් ශීතකරණයේ තබන්න."}
  },
  {
    id:"banana-smoothie", category:"breakfast", categoryLabel:{en:"Breakfast",si:"උදෑසන ආහාර"}, title:{en:"Banana Oat Smoothie",si:"කෙසෙල් සහ ඕට්ස් ස්මූති"}, emoji:"🍓", art:"art-smoothie",
    description:{en:"A quick, creamy drink made with banana, oats and yoghurt or milk.",si:"කෙසෙල්, ඕට්ස් සහ යෝගට් හෝ කිරි යොදා ගන්නා ඉක්මන්, ක්‍රීම් ගතියැති පානයක්."},
    time:"5 min", servings:{en:"1 glass",si:"වීදුරුවක්"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["1 ripe banana","2 tablespoons oats","½ cup plain yoghurt or milk","¼ cup cold water, as needed","A pinch of cinnamon (optional)"],si:["ඉදුණු කෙසෙල් ගෙඩියක්","ඕට්ස් මේස හැඳි 2ක්","සාමාන්‍ය යෝගට් හෝ කිරි කෝප්ප ½","අවශ්‍ය පරිදි සීතල වතුර කෝප්ප ¼","කුරුඳු ස්වල්පයක් (අවශ්‍ය නම්)"]},
    steps:{en:["Place all ingredients in a blender.","Blend until smooth, adding water a little at a time to reach your preferred consistency.","Pour into a glass and enjoy straight away."],si:["සියලුම අමුද්‍රව්‍ය බ්ලෙන්ඩරයකට දමන්න.","මෘදු වන තෙක් බ්ලෙන්ඩ් කරන්න. අවශ්‍ය ගතිය ලබාගැනීමට වතුර ටිකෙන් ටික එක් කරන්න.","වීදුරුවකට දමා නැවුම්ව රසවිඳින්න."]},
    tip:{en:"Use chilled fruit for a colder smoothie. Sweetness will vary with banana ripeness.",si:"වඩාත් සිසිල් පානයක් සඳහා සිසිල් කළ පලතුරු භාවිත කරන්න. කෙසෙල් ඉදුණු ප්‍රමාණය අනුව පැණි රස වෙනස් වේ."}
  },
  {
    id:"crunchy-chickpea-salad", category:"lunch", categoryLabel:{en:"Lunch & dinner",si:"දිවා හා රාත්‍රී ආහාර"}, title:{en:"Crunchy Chickpea Salad",si:"කඩල සහිත ක්‍රන්චි සලාදය"}, emoji:"🥗", art:"art-salad",
    description:{en:"A colourful mix of chickpeas and crisp vegetables with a lemon dressing.",si:"කඩල සහ නැවුම් එළවළු ලෙමන් රසැති dressing එකක් සමඟ මිශ්‍ර කළ වර්ණවත් සලාදයක්."},
    time:"12 min", servings:{en:"2 servings",si:"දෙදෙනෙකුට"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["1 cup cooked chickpeas, drained","1 cucumber, chopped","1 tomato, chopped","¼ red onion, thinly sliced","1 tablespoon lemon juice","1 teaspoon olive or other cooking oil","Salt and black pepper to taste"],si:["තම්බා වතුර ඉවත් කළ කඩල කෝප්ප 1ක්","පිපිඤ්ඤා ගෙඩියක්, කපාගත්","තක්කාලි ගෙඩියක්, කපාගත්","රතු ලූනු ¼ක්, සිහින්ව කපාගත්","ලෙමන් යුෂ මේස හැඳි 1ක්","ඔලිව් තෙල් හෝ වෙනත් පිසින තෙල් තේ හැඳි 1ක්","රස අනුව ලුණු සහ ගම්මිරිස්"]},
    steps:{en:["Add the chickpeas, cucumber, tomato and onion to a bowl.","Mix lemon juice, oil, salt and pepper in a small cup.","Pour the dressing over the salad, toss gently and serve."],si:["කඩල, පිපිඤ්ඤා, තක්කාලි සහ ලූනු බඳුනකට එක් කරන්න.","කුඩා කෝප්පයක ලෙමන් යුෂ, තෙල්, ලුණු සහ ගම්මිරිස් මිශ්‍ර කරන්න.","එම dressing එක සලාදයට දමා මෘදුව කලවම් කර පිළිගන්වන්න."]},
    tip:{en:"For food safety, refrigerate leftovers promptly and use within a short period.",si:"ඉතිරි සලාද ඉක්මනින් ශීතකරණයේ තබා කෙටි කාලයක් තුළ භාවිත කරන්න."}
  },
  {
    id:"banana-yoghurt-bites", category:"snacks", categoryLabel:{en:"Healthy snacks",si:"සෞඛ්‍යමත් කෙටි ආහාර"}, title:{en:"Banana Yoghurt Bites",si:"කෙසෙල් යෝගට් කුඩා කැබලි"}, emoji:"🍌", art:"art-banana",
    description:{en:"Frozen banana pieces with a light yoghurt coating for a refreshing snack.",si:"ප්‍රබෝධමත් කෙටි ආහාරයක් ලෙස යෝගට් තවරා ශීත කළ කෙසෙල් කැබලි."},
    time:"10 min + freeze", servings:{en:"2 servings",si:"දෙදෙනෙකුට"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["1 banana","½ cup plain yoghurt","1 teaspoon finely chopped nuts (optional)"],si:["කෙසෙල් ගෙඩියක්","සාමාන්‍ය යෝගට් කෝප්ප ½","සිහින්ව කපාගත් ඇට වර්ග තේ හැඳි 1ක් (අවශ්‍ය නම්)"]},
    steps:{en:["Slice the banana into bite-sized rounds.","Dip each piece in yoghurt and place on a tray lined with baking paper.","Sprinkle with chopped nuts if using, then freeze until firm."],si:["කෙසෙල් කුඩා රවුම් කැබලිවලට කපාගන්න.","සෑම කැබැල්ලක්ම යෝගට්වල ගිල්වා baking paper දැමූ තැටියක තබන්න.","භාවිත කරන්නේ නම් ඇට වර්ග ඉසින්න. තද වන තෙක් ශීතකරණයේ freeze කරන්න."]},
    tip:{en:"Keep frozen and allow a minute or two to soften slightly before eating.",si:"ශීත කළ තත්ත්වයේ තබා කෑමට පෙර මිනිත්තුවක් හෝ දෙකක් මෘදු වීමට ඉඩ දෙන්න."}
  },
  {
    id:"fruit-yoghurt-cup", category:"snacks", categoryLabel:{en:"Healthy snacks",si:"සෞඛ්‍යමත් කෙටි ආහාර"}, title:{en:"Rainbow Fruit Yoghurt Cup",si:"වර්ණවත් පලතුරු යෝගට් කෝප්පය"}, emoji:"🍓", art:"art-yogurt",
    description:{en:"Plain yoghurt layered with seasonal fruit for a quick, colourful snack.",si:"ඉක්මන්, වර්ණවත් කෙටි ආහාරයක් සඳහා සාමාන්‍ය යෝගට් සමඟ කාලයට ගැළපෙන පලතුරු තට්ටු කර සකස් කරගන්න."},
    time:"7 min", servings:{en:"1 cup",si:"එක් කෝප්පයක්"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["¾ cup plain yoghurt","½ cup mixed seasonal fruit, washed and chopped","1 tablespoon oats or unsweetened granola"],si:["සාමාන්‍ය යෝගට් කෝප්ප ¾","සෝදා කපාගත් මිශ්‍ර පලතුරු කෝප්ප ½","ඕට්ස් හෝ සීනි නොදැමූ ග්‍රැනෝලා මේස හැඳි 1ක්"]},
    steps:{en:["Spoon half the yoghurt into a clean cup.","Add a layer of chopped fruit, then the remaining yoghurt.","Top with the rest of the fruit and oats or granola. Serve chilled."],si:["පිරිසිදු කෝප්පයකට යෝගට්වලින් අඩක් දමන්න.","කපාගත් පලතුරු තට්ටුවක් දමා ඉතිරි යෝගට් එක් කරන්න.","ඉතිරි පලතුරු සහ ඕට්ස් හෝ ග්‍රැනෝලා උඩින් දමා සිසිල්ව පිළිගන්වන්න."]},
    tip:{en:"Choose fruits that are in season and wash them well before preparing.",si:"කාලයට ගැළපෙන පලතුරු තෝරා සකස් කිරීමට පෙර හොඳින් සෝදන්න."}
  },
  {
    id:"vegetable-rice-bowl", category:"sri-lankan", categoryLabel:{en:"Sri Lankan inspired",si:"ශ්‍රී ලාංකික රසය"}, title:{en:"Sri Lankan Veggie Rice Bowl",si:"ශ්‍රී ලාංකික එළවළු බත් බඳුන"}, emoji:"🍛", art:"art-rice",
    description:{en:"A flexible rice bowl with vegetables, dhal and a fresh cucumber side.",si:"එළවළු, පරිප්පු සහ නැවුම් පිපිඤ්ඤා සමඟ සකස් කරගත හැකි බත් බඳුනක්."},
    time:"20 min*", servings:{en:"1 serving",si:"එක් අයෙකුට"}, level:{en:"Easy",si:"පහසු"},
    ingredients:{en:["1 cup cooked rice","½ cup cooked dhal or beans","½ cup cooked seasonal vegetables","¼ cucumber, sliced","Lime juice and pepper to taste"],si:["පිසූ බත් කෝප්ප 1ක්","පිසූ පරිප්පු හෝ බෝංචි කෝප්ප ½","පිසූ කාලයට ගැළපෙන එළවළු කෝප්ප ½","පිපිඤ්ඤා ¼ක්, පෙති කපා","රස අනුව දෙහි යුෂ සහ ගම්මිරිස්"]},
    steps:{en:["Place the cooked rice in a serving bowl.","Arrange the dhal or beans and cooked vegetables beside the rice.","Add cucumber and finish with a little lime juice and pepper."],si:["පිසූ බත් පිළිගන්වන බඳුනකට දමන්න.","බත් අසලින් පරිප්පු හෝ බෝංචි සහ පිසූ එළවළු තබන්න.","පිපිඤ්ඤා එක් කර දෙහි යුෂ සහ ගම්මිරිස් ස්වල්පයකින් රස ගන්වන්න."]},
    tip:{en:"*Time assumes the rice, dhal and vegetables are already cooked. Adjust portions to your appetite and needs.",si:"*මෙම කාලය බත්, පරිප්පු සහ එළවළු කලින් පිස තිබේ යැයි සලකයි. ඔබේ අවශ්‍යතාවට අනුව ප්‍රමාණ සකස් කරන්න."}
  }
];

let currentLanguage = "en";
let currentFilter = "all";
const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("recipeModal");
const toast = document.getElementById("toast");
const savedRecipes = new Set();

function t(value){ return typeof value === "object" && value ? (value[currentLanguage] || value.en) : value; }
function escapeHTML(value){return String(value).replace(/[&<>"']/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function renderRecipes(){
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = recipes.filter(r=>{
    const categoryMatch = currentFilter === "all" || r.category === currentFilter || (currentFilter === "sri-lankan" && r.category === "sri-lankan");
    const searchable = [t(r.title),t(r.description),...r.ingredients.en,...r.ingredients.si].join(" ").toLocaleLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
  recipeGrid.innerHTML = filtered.map(r=>`
    <article class="recipe-card" tabindex="0" role="button" aria-label="${escapeHTML(t(r.title))}" data-recipe="${r.id}">
      <div class="recipe-art ${r.art}"><span class="food" aria-hidden="true">${r.emoji}</span></div>
      <div class="recipe-card-body">
        <span class="card-category">${escapeHTML(t(r.categoryLabel))}</span>
        <h3>${escapeHTML(t(r.title))}</h3>
        <p>${escapeHTML(t(r.description))}</p>
        <div class="recipe-meta"><span>⏱ <b>${escapeHTML(r.time)}</b></span><span>🍽 <b>${escapeHTML(t(r.servings))}</b></span></div>
        <div class="card-footer"><span class="read-recipe">${currentLanguage==="en"?"View recipe →":"වට්ටෝරුව බලන්න →"}</span><button class="save-button ${savedRecipes.has(r.id)?"saved":""}" type="button" data-save="${r.id}" aria-label="${savedRecipes.has(r.id)?"Unsave":"Save"} recipe">${savedRecipes.has(r.id)?"♥":"♡"}</button></div>
      </div>
    </article>`).join("");
  emptyState.hidden = filtered.length > 0;
  recipeGrid.querySelectorAll("[data-recipe]").forEach(card=>{
    card.addEventListener("click",e=>{if(!e.target.closest("[data-save]"))openRecipe(card.dataset.recipe);});
    card.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&!e.target.closest("button")){e.preventDefault();openRecipe(card.dataset.recipe);}});
  });
  recipeGrid.querySelectorAll("[data-save]").forEach(btn=>btn.addEventListener("click",e=>{
    e.stopPropagation(); const id=btn.dataset.save;
    if(savedRecipes.has(id)){savedRecipes.delete(id);showToast(currentLanguage==="en"?"Removed from saved recipes":"සුරැකි ලැයිස්තුවෙන් ඉවත් කළා");}
    else{savedRecipes.add(id);showToast(currentLanguage==="en"?"Recipe saved for this visit":"මෙම සැසිය සඳහා වට්ටෝරුව සුරැකුවා");}
    renderRecipes();
  }));
}
function openRecipe(id){
  const r=recipes.find(x=>x.id===id); if(!r)return;
  document.getElementById("modalVisual").textContent=r.emoji;
  document.getElementById("modalVisual").className="modal-visual "+r.art;
  document.getElementById("modalCategory").textContent=t(r.categoryLabel).toLocaleUpperCase();
  document.getElementById("modalTitle").textContent=t(r.title);
  document.getElementById("modalDescription").textContent=t(r.description);
  document.getElementById("modalTime").textContent=r.time;
  document.getElementById("modalServings").textContent=t(r.servings);
  document.getElementById("modalLevel").textContent=t(r.level);
  document.getElementById("modalIngredients").innerHTML=t(r.ingredients).map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  document.getElementById("modalSteps").innerHTML=t(r.steps).map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  document.getElementById("modalTip").textContent=t(r.tip);
  modal.hidden=false; document.body.style.overflow="hidden"; document.getElementById("modalClose").focus();
}
function closeRecipe(){modal.hidden=true;document.body.style.overflow="";}
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2200);}
function setLanguage(lang){
  currentLanguage=lang;document.documentElement.lang=lang==="en"?"en":"si";
  document.getElementById("languageToggle").textContent=lang==="en"?"සිංහල":"English";
  document.querySelectorAll("[data-en][data-si]").forEach(el=>{const value=el.dataset[lang];if(value!==undefined){if(value.includes("<em>"))el.innerHTML=value;else el.textContent=value;}});
  searchInput.placeholder=lang==="en"?"Search recipes or ingredients...":"වට්ටෝරු හෝ අමුද්‍රව්‍ය සොයන්න...";
  searchInput.setAttribute("aria-label",lang==="en"?"Search recipes":"වට්ටෝරු සොයන්න");
  document.querySelectorAll(".filter-button").forEach(b=>b.classList.toggle("active",b.dataset.filter===currentFilter));
  renderRecipes();
}
document.getElementById("languageToggle").addEventListener("click",()=>setLanguage(currentLanguage==="en"?"si":"en"));
document.getElementById("filterButtons").addEventListener("click",e=>{
  const btn=e.target.closest("[data-filter]");if(!btn)return;
  currentFilter=btn.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(b=>b.classList.toggle("active",b===btn));
  renderRecipes();
});
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{
  currentFilter=btn.dataset.category;
  document.querySelectorAll(".filter-button").forEach(b=>b.classList.toggle("active",b.dataset.filter===currentFilter));
  document.getElementById("recipes").scrollIntoView({behavior:"smooth"});renderRecipes();
}));
searchInput.addEventListener("input",renderRecipes);
document.getElementById("clearSearch").addEventListener("click",()=>{searchInput.value="";renderRecipes();searchInput.focus();});
document.getElementById("modalClose").addEventListener("click",closeRecipe);
modal.addEventListener("click",e=>{if(e.target===modal)closeRecipe();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeRecipe();});
document.getElementById("menuToggle").addEventListener("click",()=>{
  const nav=document.querySelector(".main-nav"),open=nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelector(".main-nav").classList.remove("open");document.getElementById("menuToggle").setAttribute("aria-expanded","false");}));
document.getElementById("privacyLink").addEventListener("click",e=>{
  e.preventDefault();showToast(currentLanguage==="en"?"Add a full privacy policy before enabling ads or analytics.":"දැන්වීම් හෝ analytics සක්‍රීය කිරීමට පෙර සම්පූර්ණ Privacy Policy එකක් එක් කරන්න.");
});
document.getElementById("year").textContent=new Date().getFullYear();
renderRecipes();
