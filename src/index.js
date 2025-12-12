// src/index.js
import "./css/styles.css";
import  carregarInicio  from "./modulos/carregarInicio.js";
import carregarMenu from './modulos/carregarMenu.js';
import carregarContato from "./modulos/carregarContato.js";
import botaoTopo from "./modulos/botaoTopo.js";

import logo from './assets/logo.jpg';
botaoTopo();
const content = document.getElementById('content');
function carregarPagina(pagina) {
    content.innerHTML = "";   // limpa
    content.appendChild(pagina());
}

// associar aos botões
const btnInicio = document.getElementById('btn-inicio');
const btnMenu = document.getElementById('btn-menu');
const btnContato = document.getElementById('btn-contato');


btnInicio.addEventListener('click', () => carregarPagina(carregarInicio));
btnMenu.addEventListener('click', () => carregarPagina(carregarMenu));
btnContato.addEventListener('click', () => carregarPagina(carregarContato));



// carregar a home ao iniciar
carregarPagina(carregarInicio);


// const img = document.getElementById('logo');
// img.src = logo;


