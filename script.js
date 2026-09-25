// Teste GitHub + Cloudflare
const products = [
  {name:"Parafusadeira Furadeira Simake — 2 Baterias + Maleta",cat:"parede",price:119.99,emoji:"🔩",rating:"4,7",desc:"Kit com duas baterias e maleta para facilitar furos e instalações.",details:["2 Baterias","Maleta","Parafusadeira/Furadeira"],link:"https://meli.la/13xpyFS",images:["D_NQ_NP_2X_689062-MLA116547999226_092026-F.webp","simake2.webp","simake3.webp"]},
  {name:"Parafusadeira/Furadeira 20V — exemplo",cat:"moveis",price:249.90,emoji:"🔧",rating:"4,8",desc:"Mais autonomia e força para uso doméstico frequente.",details:["20V","Bateria","Mandril"]},
  {name:"Parafusadeira e Furadeira de Impacto 3/8\" WAP K21 ID02 2000 mAh",cat:"parede",price:199.00,emoji:"🔩",rating:"4,8",desc:"Parafusadeira e furadeira de impacto 21V com 2.000 mAh, torque de até 45 Nm, duas velocidades e maleta.",details:["21V","2.000 mAh","45 Nm","Impacto","Maleta"],link:"https://meli.la/2Y9cAbb",images:["wapk211.jpg","wapk212.jpg","wapk213.jpg"]},
  {name:"Furadeira de Impacto 1/2 750W Maleta 5 Brocas GSB 13 RE Bosch",cat:"parede",price:398.04,emoji:"🧱",rating:"4,9",desc:"Furadeira de impacto Bosch de 750W com mandril de 1/2\", maleta e 5 brocas.",details:["750W","1/2\"","Impacto","Maleta","5 Brocas"],link:"https://meli.la/1CQMfmW",images:["bosch1.jpg","bosch2.jpg","bosch3.jpg"]},
  {name:"Kit Furadeira De Impacto Bosch Gsb 13 Re 750w 110v 33 Peças",cat:"parede",price:486.96,emoji:"🧱",rating:"4,9",desc:"Kit Bosch com furadeira de impacto 750W e 33 peças para diversos trabalhos.",details:["750W","110V","33 Peças","Impacto"],link:"https://meli.la/1G18CAh",images:["bk1.jpeg","bk2.jpeg","bk3.jpeg"]},
  {name:"Kit Furadeira Impacto Bosch Gsb 13 Re 220v 750w + 103 Peças",cat:"parede",price:567.90,emoji:"🧱",rating:"4,9",desc:"Kit Bosch com furadeira de impacto 750W e 103 peças para diversos trabalhos.",details:["750W","220V","103 Peças","Impacto"],link:"https://meli.la/2vEUoar",images:["bk4.jpg","bk5.jpg","bk6.jpg"]},
  {name:"Furadeira De Impacto Bosch 850w + Jogo De Brocas 300 Peças",cat:"parede",price:669.99,emoji:"🧱",rating:"4,8",desc:"Furadeira de impacto Bosch 850W acompanhada de jogo com 300 peças.",details:["850W","300 Peças","Impacto"],link:"https://meli.la/2dFUDxq",images:["mais1.jpg","mais2.jpg","mais3.jpg"]},
  {name:"Furadeira Parafusadeira Impacto Gsb 183-li 2 Baterias Bosch Cor Azul Frequência 50/60hz",cat:"parede",price:819.90,emoji:"🔩",rating:"4,9",desc:"Furadeira e parafusadeira de impacto Bosch com duas baterias.",details:["2 Baterias","Impacto","50/60Hz"],link:"https://meli.la/2QuWjjM",images:["mais4.jpg","mais5.jpg","mais6.jpg"]},
  {name:"Parafusadeira e Furadeira de Impacto 13mm 20V DEWALT DCD7781D2 Com 2 Baterias, Carregador e Maleta",cat:"parede",price:1044.69,emoji:"🛠️",rating:"4,9",desc:"Parafusadeira e furadeira de impacto DEWALT 20V com duas baterias, carregador e maleta.",details:["20V","2 Baterias","13mm","Maleta"],link:"https://meli.la/1XuJZJW",images:["mais7.jpg","mais8.jpg","mais9.jpg"]},
  {name:"Martelete Perfurador — exemplo",cat:"reforma",price:549.90,emoji:"🏗️",rating:"4,8",desc:"Indicado para trabalhos de reforma que exigem mais força.",details:["Potente","SDS","Reforma"]},
  {name:"Furadeira Profissional — exemplo",cat:"profissional",price:699.90,emoji:"🛠️",rating:"4,9",desc:"Construção mais robusta para uso frequente e profissional.",details:["Robusta","Uso intenso","Garantia"]},
  {name:"Parafusadeira Furadeira De Impacto 2 Baterias 20V Fonte Carregamento Bivolt PFV238I Vonder",cat:"parede",price:249.00,emoji:"🔩",rating:"4,9",desc:"Parafusadeira e furadeira de impacto 20V com duas baterias, carregamento bivolt e potência para instalações e reparos.",details:["20V","2 Baterias","Impacto","Bivolt"],link:"https://meli.la/2eJuewR",images:["vonder1.jpg","vonder2.jpg","vonder3.jpg"]},
  {name:"Esmerilhadeira 4.1/2 — exemplo",cat:"reforma",price:379.90,emoji:"⚙️",rating:"4,8",desc:"Para cortes, desbaste e trabalhos de reforma.",details:["Potente","4.1/2","Reforma"]}, 
  {name:"Parafusadeira Furadeira de Impacto 21V 3/8\" The Black Tools TB-21PZW",cat:"parede",price:131.90,emoji:"🔩",rating:"4,8",desc:"Parafusadeira e furadeira de impacto 21V com torque de até 35 Nm, acessórios e maleta.",details:["21V","35 Nm","2 Baterias","Maleta"],link:"https://meli.la/1u5E2ez",images:["tb21pzw1.jpg","tb21pzw2.jpg","tb21pzw3.jpg"]},
  {name:"Kit Ferramentas 46 Peças Com Soquetes e Chaves Para Carro e Casa Vermelho Hexon",cat:"moveis",price:28.40,emoji:"🧰",rating:"4,7",desc:"Kit com 46 peças, soquetes e chaves para pequenos reparos em casa e no carro.",details:["46 Peças","Soquetes","Chaves","Maleta"],link:"https://meli.la/2mMhv27",images:["ZX1.jpg","ZX2.jpg","ZX3.jpg"]},
  {name:"Kit Chaves Ferramentas Jogo Fenda Philips Catraca Soquete Allen 46 Peças Com Maleta Completa Quicko Vermelho",cat:"moveis",price:31.90,emoji:"🧰",rating:"4,6",desc:"Kit de ferramentas com 46 peças, catraca, soquetes, chaves e maleta.",details:["46 Peças","Catraca","Soquetes","Maleta"],link:"https://meli.la/31D1KaL",images:["ZX4.jpg","ZX5.jpg","ZX6.jpg"]},
  {name:"Maleta Estojo Kit Jogo 169 Ferramentas Caixa Completa Devilprex Preto",cat:"moveis",price:139.97,emoji:"🧰",rating:"4,7",desc:"Maleta completa com 169 ferramentas para manutenção e pequenos reparos.",details:["169 Peças","Maleta","Completo"],link:"https://meli.la/1wtuqs1",images:["ZX7.jpg","ZX8.jpg","ZX9.jpg"]},
  {name:"Kit Jogo Ferramentas Alicate Universal Corte e Bico Martelo Chave De Fenda Philips Imantadas",cat:"moveis",price:94.31,emoji:"🔧",rating:"4,9",desc:"Kit de ferramentas manuais com alicates, martelo e chaves de fenda.",details:["Alicates","Martelo","Chaves"],link:"https://meli.la/15mhs2L",images:["ZX10.jpg","ZX11.jpg","ZX12.jpg"]},
  {name:"Jogo Kit de Ferramentas Manuais Chave Catraca 1/2 8 a 32mm BCS022 The Black Tools Cor Amarelo",cat:"moveis",price:142.40,emoji:"🔧",rating:"4,9",desc:"Jogo de ferramentas manuais com chave catraca e soquetes de 8 a 32 mm.",details:["Catraca 1/2","8–32mm","Manual"],link:"https://meli.la/2HmdjLi",images:["ZX13.jpg","ZX14.jpg","ZX15.jpg"]},];
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
const galleryState = {};

function changeImage(index, direction){
  const state = galleryState[index];
  const img = document.getElementById(`product-img-${index}`);

  if(!state || !img) return;

  state.current = (state.current + direction + state.images.length) % state.images.length;
  img.src = state.images[state.current];
}

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
$("backHome").onclick=()=>show("budget");

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

  $("products").innerHTML=list.map((p,index)=>{
  const images=p.images||[];
  const firstImage=images[0];
  galleryState[index]={images:images,current:0};

  return `
    <article class="product">
      <div class="product-image">
        ${firstImage
          ? `<button class="image-arrow left" onclick="changeImage(${index},-1)">‹</button>
             <img id="product-img-${index}" src="${firstImage}" alt="${p.name}">
             <button class="image-arrow right" onclick="changeImage(${index},1)">›</button>`
          : p.emoji}
      </div>

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
  `;
}).join("");}
