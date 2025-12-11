import logo from '../assets/logo.jpg';
export default function carregarInicio() {

    const container = document.createElement('div');

    //titulo
    const h1 = document.createElement('h1');
    h1.textContent = "TaquaBurguer's";

    //imagem
    const img = document.createElement('img');
    img.src = logo;

    //paragrafo1
    const p1 = document.createElement('p');
    p1.textContent = "Na TaquaBurguer’s, cada hambúrguer nasce com a missão de ser o melhor da cidade. Nosso segredo começa na escolha dos ingredientes: carnes selecionadas, pães fresquinhos e combinações que surpreendem até os paladares mais exigentes. Aqui, comida não é só comida — é experiência, é encontro, é aquela vontade de voltar antes mesmo de terminar o último pedaço.";

    //paragrafo2
    const p2 = document.createElement('p');
    p2.textContent = "Somos apaixonados por criar sabores autênticos, preparados no capricho, com receitas artesanais que carregam a identidade de Taquaritinga. Seja para um lanche rápido, para reunir os amigos ou para uma noite que mereça algo especial, a TaquaBurguer’s sempre entrega o melhor da nossa cozinha direto para a sua mesa.";

    //paragrafo3
    const p3 = document.createElement('p');
    p3.textContent = "TaquaBurguer’s: onde cada mordida conta uma história e cada cliente sai com vontade de escrever a próxima.";


    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    
    return container;
}
