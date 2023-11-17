let elementoh1 = document.querySelector("h1");

console.log(elementoh1);
console.log(elementoh1.innerText);

let elementoMain = document.querySelector("main");

console.log(elementoMain);
console.log(elementoMain.innerText)
console.log(elementoMain.innerHTML)
    
elementoh1.innerText = "Novo Título com JS"
elementoh1.innerText = "Título da Página"

elementoMain.innerHTML = `
<h2>Novo Subtítulo</h2>
<ul>
    <li>Elemento Lista JS 1</li>
    <li>Elemento Lista JS 2</li>
    <li>Elemento Lista JS 3</li>
</ul>
`