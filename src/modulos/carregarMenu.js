
import batata from '../assets/batata.JPG';
import colegial from '../assets/colegial.JPG';
import xBurguer from '../assets/x-burguer.JPG';
import xAcebolado from '../assets/x-acebolado.JPG';
import xSalada from '../assets/x-salada.JPG';




export default function carregarMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const titulo = document.createElement('h1');
    titulo.textContent = "Menu";

    const tituloCategoria = document.createElement('h2');
    tituloCategoria.textContent = "Hambúrgueres";

    // card do X-burguer
    const card = document.createElement('div');
    card.classList.add('item-card');

    const nome = document.createElement('h3');
    nome.textContent = "X-Burguer";

    const ingredientes = document.createElement('ul');

    const ing1 = document.createElement('li');
    ing1.textContent = "Pão";

    const ing2 = document.createElement('li');
    ing2.textContent = "Carne 170g";

    const ing3 = document.createElement('li');
    ing3.textContent = "Queijo Mussarela";

    ingredientes.appendChild(ing1);
    ingredientes.appendChild(ing2);
    ingredientes.appendChild(ing3);

    const preco = document.createElement('p');
    preco.textContent = "Preço: R$ 31,00";

    const img = document.createElement('img');
    img.src = xBurguer;
    img.alt = "Imagem de um X-Burguer";

    card.appendChild(nome);
    card.appendChild(img);
    card.appendChild(ingredientes);
    card.appendChild(preco);

    container.appendChild(titulo);
    container.appendChild(tituloCategoria);
    container.appendChild(card);

    return container;
}
