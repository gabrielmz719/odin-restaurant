// src/index.js
import "./styles.css";
import  carregarInicio  from "./modulos/carregarInicio.js";
import logo from './assets/logo.jpg';

const content = document.getElementById('content');
content.innerHTML = ''; // caso tenha algo antes
content.appendChild(carregarInicio());

// const img = document.getElementById('logo');
// img.src = logo;


