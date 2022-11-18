//Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
console.log(" _____        __  __             _____ _                        ");
console.log("/ ____|      / _|/ _|           / ____| |                       ");
console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __         ");
console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\");
console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |       ");
console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/   ");
console.log("                                                  | |           ");
console.log("   [Horário de funcionamento: 08h às 22h]         |_|     \n\n\n");
    
//Definindo os itens do nosso Menu/Cardápio e seus valores
var menu = [
    item1  = {nome:'Café preto           ', valor:'01.00', qnty: 0},
    item2  = {nome:'Expresso             ', valor:'02.00', qnty: 0},
    item3  = {nome:'Cappuccino           ', valor:'12.00', qnty: 0},
    item4  = {nome:'Mocha                ', valor:'10.00', qnty: 0},
    item5  = {nome:'Mochaccino           ', valor:'15.00', qnty: 0},
    item6  = {nome:'Machiato             ', valor:'11.50', qnty: 0},
    item7  = {nome:'Latte                ', valor:'08.00', qnty: 0},
    item8  = {nome:'Duplo                ', valor:'05.00', qnty: 0},
    item9  = {nome:'Frappuccino          ', valor:'17.50', qnty: 0},
    item10 = {nome:'Café com leite      ', valor:'04.00', qnty: 0},
    item11 = {nome:'Leite               ', valor:'03.50', qnty: 0},
    item12 = {nome:'X-Burger            ', valor:'25.00', qnty: 0},
    item13 = {nome:'Donuts              ', valor:'06.00', qnty: 0},
    item14 = {nome:'Misto quente        ', valor:'10.00', qnty: 0},
    item15 = {nome:'Brigadeirão         ', valor:'05.00', qnty: 0},
    item16 = {nome:'Torta de pêssego    ', valor:'07.50', qnty: 0},
    item17 = {nome:'Torta de maçã       ', valor:'07.50', qnty: 0},
    item18 = {nome:'Torta de morango    ', valor:'07.50', qnty: 0},
    item19 = {nome:'Bolo de brigadeiro  ', valor:'04.50', qnty: 0},
    item20 = {nome:'Bolo de chocolate   ', valor:'04.50', qnty: 0},
    item21 = {nome:'Bolo de fubá        ', valor:'04.50', qnty: 0},
    item22 = {nome:'Bolo de morango     ', valor:'04.50', qnty: 0},
    item23 = {nome:'Pão de queijo (100g)', valor:'02.50', qnty: 0},
    item23 = {nome:'Brownie             ', valor:'07.00', qnty: 0}
];

//#region: Imprimindo o cardápio
    console.log('                        Dê uma olhada no nosso carápio!\n');
    j=1
    for (i = 0; i < menu.length; i += 2) {
        console.log(`[${i+1}] ${menu[i].nome} | R$ ${menu[i].valor}   -   [${j+1}] ${menu[j].nome} | R$ ${menu[j].valor}`);
        j+=2;
    }
//#endregion

//Função de anotar o pedido
function anotarPedido() {

    //Pedindo o codigo do item
    anotar = prompt('\nDigite o valor do item que deseja: ');
    numPedido = anotar-1;

    //Mostar item selecionado
    console.log(`Selecionado: ${menu[numPedido].nome}`);

    //Quantidade de itens que o usuário deseja
    quantidade = prompt('Quantos vai querer? ');

    //Aumentando a quantidade do item selecionado
    menu[numPedido].qnty += quantidade;

    //Perguntando se o cliente quer mais alguma coisa
    resposta = prompt('Deseja pedir mais alguma coisa? ');

    //Transformando a resposta em minuscula para ter apenas uma verificação
    resp = resposta.toLowerCase();
}

//Anotando o pedido pela primeira vez
anotarPedido();

//Enquanto a resposta for sim ele segue anotando o pedido
while (resp == 'sim') { anotarPedido() }

//Subtotal da compra, como os itens que nao foram selecionados se multiplicam por ZERO e viram ZERO, não altera o valor total REAL
//Pegando o subtotal ser somado automaticamente sem inclusão das variáveis
subtotal = 0;
for (k = 0; k < menu.length; k += 1) { subtotal += menu[k].valor * menu[k].qnty; }

//Multiplicando o valor do item pela quantidade solicitada
console.log(`SubTotal: R$ ${subtotal}`);
