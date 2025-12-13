import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';





function criarContato(tituloTexto, imagem, linkTexto, linkUrl) {
    const bloco = document.createElement('div');
    bloco.classList.add('contato-item');

    const h2 = document.createElement('h2');
    h2.textContent = tituloTexto;

    const img = document.createElement('img');
    img.src = imagem;
    img.alt = `Ícone do ${tituloTexto}`;

    const link = document.createElement('a');
    link.textContent = linkTexto;

    if (linkUrl) {
        link.href = linkUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    bloco.appendChild(img);
    bloco.appendChild(h2);
    bloco.appendChild(link);

    return bloco;
}

export default function carregarContato() {
    const container = document.createElement('div');
    container.classList.add('contato-container');

    const titulo = document.createElement('h1');
    titulo.textContent = "Contato";
    container.appendChild(titulo);

    container.appendChild(
        criarContato(
            "Github",
            github,
            "github.com/gabrielmz719",
            "https://github.com/gabrielmz719"
        )
    );

    container.appendChild(
        criarContato(
            "Gmail",
            gmail,
            "gabrielmzenerato242@gmail.com",
            null
        )
    );

    container.appendChild(
        criarContato(
            "LinkedIn",
            linkedin,
            "linkedin.com/in/gabrielzenerato",
            "https://www.linkedin.com/in/gabrielzenerato"
        )
    );

    return container;
}
