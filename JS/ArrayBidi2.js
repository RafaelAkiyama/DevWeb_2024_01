console.clear();
let numArray = [1, 2, 3, 4];

console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);


console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join('***');

console.log(teste2);
console.log(typeof teste2);

console.clear();
let array = [0, 1, 2, 3, 4];
console.log(array.length);


console.clear();
const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga',];
let x = frutas1.pop();
console.log(frutas1);
console.log(x);


console.clear();
const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi');
console.log(frutas2);
console.log(y);


//método shift()
console.clear();
const frutas3 = ['Banana', 'Laranja',];
let z = frutas3.shift(); 
console.log(frutas3);
console.log(z);


//método unshift
console.clear();
const frutas4 = ['Banana', 'Laranja',];
let w = frutas4.unshift('Kiwi');
console.log(frutas4);
console.log(w);


//método delete
console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];
console.log(frutas5);


//criando função js
function addNums(num1 = 1, num2 =1){
return num1 + num2;
}

//Chamada a função addNums 
let g = addNums(4,5);
console.log(g);



//Arrow Function
const hello = () => {
return 'Óla Arrow Function';
};

//Exemplo usando versão da addNums:
const addNums2 = (num1 = 1, num2 =1) => {
return num1 + num2;
}

let soma = addNums2 (5, 10);
console.log(soma);
