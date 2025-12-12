import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';





export default function carregarContato() {
    const container = document.createElement('div');
    container.classList.add('contato-container');

    const titulo = document.createElement('h1');
    titulo.textContent = "Contate-nos";

    const h2Linkedin = document.createElement('h2');
    h2Linkedin.textContent = "Linkedin";
    const imgLinkedin = document.createElement('img');
    imgLinkedin.src = linkedin;
    imgLinkedin.alt = 'Icone do Linkedin';


    const h2Github = document.createElement('h2');
    h2Github.textContent  = 'Github';
    const imgGithub = document.createElement('img');
    imgGithub.src = github;
    imgGithub.alt = 'Icone do Github';



    const h2Gmail = document.createElement('h2');
    h2Gmail.textContent = "Gmail";
    const imgGmail = document.createElement('img');
    imgGmail.src = gmail;
    imgGmail.alt = 'Icone do Gmail';

    container.appendChild(h2Github)
    container.appendChild(imgGithub)

    container.appendChild(h2Gmail)
    container.appendChild(imgGmail)

    container.appendChild(h2Linkedin)
    container.appendChild(imgLinkedin)


    
    return container;

}