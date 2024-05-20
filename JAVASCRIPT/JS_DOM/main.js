// Método getElementById
let titulo = document.getElementById('titulo');
// Alterando o conteúdo do elemento
titulo.innerHTML = 'Olá meus caros alunos!';
// Configurando o estilo CSS do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';


// Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
