// Teste GitHub + Cloudflare
const products = [
  {name:"Parafusadeira Furadeira Simake — 2 Baterias + Maleta",cat:"parede",price:119.99,emoji:"🔩",rating:"4,7",desc:"Kit com duas baterias e maleta para facilitar furos e instalações.",details:["2 Baterias","Maleta","Parafusadeira/Furadeira"],link:"https://meli.la/13xpyFS" ,D_NQ_NP_2X_689062-MLA116547999226_092026-F.webp"},
  {name:"Parafusadeira/Furadeira 20V — exemplo",cat:"moveis",price:249.90,emoji:"🔧",rating:"4,8",desc:"Mais autonomia e força para uso doméstico frequente.",details:["20V","Bateria","Mandril"]},
  {name:"Furadeira de Impacto 650W — exemplo",cat:"parede",price:219.90,emoji:"🧱",rating:"4,8",desc:"Opção versátil para instalações domésticas e furos em alvenaria.",details:["650W","Impacto","127/220V"]},
  {name:"Furadeira de Impacto 750W — exemplo",cat:"parede",price:329.90,emoji:"🧱",rating:"4,9",desc:"Mais potência para quem faz instalações com maior frequência.",details:["750W","Impacto","Mandril"]},
  {name:"Martelete Perfurador — exemplo",cat:"reforma",price:549.90,emoji:"🏗️",rating:"4,8",desc:"Indicado para trabalhos de reforma que exigem mais força.",details:["Potente","SDS","Reforma"]},
  {name:"Furadeira Profissional — exemplo",cat:"profissional",price:699.90,emoji:"🛠️",rating:"4,9",desc:"Construção mais robusta para uso frequente e profissional.",details:["Robusta","Uso intenso","Garantia"]},
  {name:"Kit de Ferramentas 100 peças — exemplo",cat:"todas",price:299.90,emoji:"🧰",rating:"4,7",desc:"Conjunto variado para manutenção e pequenos reparos.",details:["100 peças","Kit","Casa"]},
  {name:"Esmerilhadeira 4.1/2 — exemplo",cat:"reforma",price:379.90,emoji:"⚙️",rating:"4,8",desc:"Para cortes, desbaste e trabalhos de reforma.",details:["Potente","4.1/2","Reforma"]},
  {name:"Trena 5m — exemplo",cat:"todas",price:39.90,emoji:"📏",rating:"4,8",desc:"Ferramenta básica para medições rápidas em casa ou obra.",details:["5m","Compacta","Medição"]}
];

const categories = {
  moveis:"Montar móveis e fazer pequenos reparos",
  parede:"Furar paredes e instalar coisas",
  reforma:"Construção e reforma",
  profissional:"Trabalhar profissionalmente",
  todas:"Todas as ferramentas"
};

let selectedCategory = null;
let selectedBudget = null;
let ascending = true;

const $ = id => document.getElementById(id);
function money(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}

function show(id){["home","category","budget","catalog"].forEach(x=>$(x).classList.add("hidden"));$(id).classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})}

$("startBtn").onclick=()=>show("category");

document.querySelectorAll(".category-card").forEach(btn=>{
  btn.onclick=()=>{
    selectedCategory=btn.dataset.category;
    if(selectedCategory==="todas"){selectedBudget=null;renderProducts();show("catalog");}
    else show("budget");
  };
});

$("allFromCategory").onclick=()=>{selectedCategory="todas";selectedBudget=null;renderProducts();show("catalog")};
$("backCategory").onclick=()=>show("category");
$("backHome").onclick=()=>show("category");

document.querySelectorAll(".budget-card").forEach(btn=>{
  btn.onclick=()=>{selectedBudget=Number(btn.dataset.budget);renderProducts();show("catalog")};
});

$("sortBtn").onclick=()=>{
  ascending=!ascending;
  $("sortBtn").textContent=ascending?"Ordenar: menor preço ↑":"Ordenar: maior preço ↓";
  renderProducts();
};

function matchesBudget(p){
  if(selectedBudget===null)return true;
  if(selectedBudget===150)return p.price<=150;
  if(selectedBudget===300)return p.price>150 && p.price<=300;
  if(selectedBudget===600)return p.price>300 && p.price<=600;
  return p.price>600;
}

function renderProducts(){
  let list=products.filter(p=>(selectedCategory==="todas"||p.cat===selectedCategory||p.cat==="todas")&&matchesBudget(p));
  list.sort((a,b)=>ascending?a.price-b.price:b.price-a.price);

  $("catalogTitle").textContent=selectedCategory==="todas"?"Todas as ferramentas":categories[selectedCategory];
  $("catalogSubtitle").textContent=selectedBudget?`Opções na faixa de ${selectedBudget===150?"até R$ 150":selectedBudget===300?"R$ 150 a R$ 300":selectedBudget===600?"R$ 300 a R$ 600":"acima de R$ 600"}.`:"Explore ferramentas organizadas para facilitar sua escolha.";
  $("count").textContent=`${list.length} opção(ões) encontrada(s)`;

  if(!list.length){
    $("products").innerHTML=`<div class="product" style="grid-column:1/-1;padding:30px"><h3>Ainda estamos cadastrando produtos nessa faixa.</h3><p class="muted">A estrutura está pronta. Na próxima etapa vamos substituir estes exemplos por produtos reais e links de afiliado.</p></div>`;
    return;
  }

  $("products").innerHTML=list.map(p=>`
    <article class="product">
      <div class="product-image">${p.image ? <img src="${p.image}" alt="${p.name}"> : p.emoji}</div>
      <div class="product-body">
        <div class="product-cat">${categories[p.cat]||"Ferramenta"}</div>
        <h3>${p.name}</h3>
        <div class="stars">★ ${p.rating} · avaliações (exemplo)</div>
        <p class="desc">${p.desc}</p>
        <div class="details">${p.details.map(d=>`<span class="pill">${d}</span>`).join("")}</div>
        <div class="price">${money(p.price)}</div>
      <a href="${p.link || '#'}" ${p.link ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="return false;"'}>Ver produto no Mercado Livre →</a>
      </div>
    </article>
  `).join("");
}
