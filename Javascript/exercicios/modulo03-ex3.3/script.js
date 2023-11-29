//acessando os elementos do index

const h1 = document.querySelector("#titulo");
const a = document.querySelector('a');
const ul = document.querySelector('ul');
const ol = document.querySelector("#lista-ordenada");

//alterando o texto h1 e a

h1.innerText = "Exercício módulo 03 3.3 - Alterando h1, a, ul e ol";
a.innerText = "Link Proz";

ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    `;

ol.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.facebook.com">Facebook</a></li>
    <li><a href="https://www.youtube.com">Youtube</a></li>
    `;

