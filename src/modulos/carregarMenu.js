
import batata from '../assets/batata.JPG';
import colegial from '../assets/colegial.JPG';
import xBurguer from '../assets/x-burguer.JPG';
import xAcebolado from '../assets/x-acebolado.JPG';
import xSalada from '../assets/x-salada.JPG';



function criarCard(nome, imagem, ingredientes, preco) {
    const card = document.createElement('div');
    card.classList.add('item-card');

    const h3 = document.createElement('h3');
    h3.textContent = nome;

    const img = document.createElement('img');
    img.src = imagem;
    img.alt = nome;

    const lista = document.createElement('ul');
    ingredientes.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        lista.appendChild(li);
    });

    const pPreco = document.createElement('p');
    pPreco.textContent = `Preço: ${preco}`;

     card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(lista);
    card.appendChild(pPreco);

    return card;
}

export default function carregarMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const titulo = document.createElement('h1');
    titulo.textContent = "Cardápio";

    const tituloCategoria = document.createElement('h2');
    tituloCategoria.textContent = "Hambúrgueres";

    container.appendChild(titulo);
    

    // Aqui criamos os cards
    container.appendChild(
        criarCard("X-Burguer", xBurguer,
            ["Pão", "Carne 170g", "Queijo Mussarela"],
            "R$ 31,00")
    );

    container.appendChild(
        criarCard("X-Salada", xSalada,
            ["Pão", "Carne 130g", "Queijo Mussarela", "Alface", "Molho de Tomate Caseiro"],
            "R$ 33,00")
    );

    container.appendChild(
        criarCard("X-Acebolado", xAcebolado,
            ["Pão", "Dois Smash-Burguers prensado", "Queijo Mussarela", "Cebola"],
            "R$ 34,00")
    );

    const tituloCategBatata = document.createElement('h2');
    tituloCategoria.textContent = "Batatas";

    container.appendChild(
        criarCard("Batata Frita Tradicional", batata,
            ["Batata"],
            "R$ 10,00")
    );

    
    const tituloCategSobremesa = document.createElement('h2');
    tituloCategoria.textContent = "Sobremesas";


     container.appendChild(
        criarCard("Colegial", colegial,
            ["Duas bola de sorvete","Castanha","Chantilly"],
            "R$ 14,00")
    );
    
    return container;
}
