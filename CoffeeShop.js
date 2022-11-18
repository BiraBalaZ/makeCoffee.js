//Definindo os itens do nosso Menu/Cardápio e seus valores
var menu = [
    item1  = {nome:'Café preto',         valor:'1.00' },
    item2  = {nome:'Expresso',           valor:'2.00' },
    item3  = {nome:'Cappuccino',         valor:'12.00'},
    item4  = {nome:'Mocha',              valor:'10.00'},
    item5  = {nome:'Mochaccino',         valor:'15.00'},
    item6  = {nome:'Machiato',           valor:'11.50'},
    item7  = {nome:'Latte',              valor:'8.00' },
    item8  = {nome:'Duplo',              valor:'5.00' },
    item9  = {nome:'Frappuccino',        valor:'17.50'},
    item10 = {nome:'Café com leite',     valor:'4.00' },
    item11 = {nome:'Leite',              valor:'3.50' },
    item12 = {nome:'Hamburguer',         valor:'25.00'},
    item13 = {nome:'Donuts',             valor:'6.00' },
    item14 = {nome:'Misto quente',       valor:'10.00'},
    item15 = {nome:'Brigadeiro',         valor:'5.00' },
    item16 = {nome:'Fatia de torta',     valor:'7.50' },
    item17 = {nome:'Bolo da casa',       valor:'4.50' }
];

//Pedindo o valor do café desejado
var coffeeType = prompt('Digite o valor do item que deseja: ');
var coffeeSelected = coffeeType-1;

//Informando ao cliente o que ele pediu e o valor
console.log(`${menu[coffeeSelected].nome}: R$ ${menu[coffeeSelected].valor}`);

//Quantidade de itens que o usuário deseja
var quantidade = prompt('Quantos vai querer? ');

//Multiplicando o valor do item pela quantidade solicitada
console.log(`${quantidade} ${menu[coffeeSelected].nome} vai sair por: R$ ${menu[coffeeSelected].valor*quantidade}`);
