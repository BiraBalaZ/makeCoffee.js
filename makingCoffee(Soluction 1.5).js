function scr_cofffeeDrink() {
    //Contagem de cafés tomados, inicia com 0
    var coffeeDrinked = 0;
    var quantidade = prompt('Digite aqui a quantidade de cafés que deseja beber: ');
    
    //Laço de repetição para tomar 5 xícaras
    for (var refil = quantidade; refil > 0; refil --) {
    
        //Adicionando mais um café pra conta
        coffeeDrinked += 1;
    
        //Dizendo em qual café estou
        console.log(`Bebendo o ${coffeeDrinked}º Café`);
        if (refil != 1) {
            console.log('Pegando mais café');
        }
        console.log('');
    
        //Se o refil chegar a um, ele escreve que acabou o café
        if (refil == 1) {
            console.log(`O café acabou.`);
            console.log(`Preparando mais uma rodada de café.`);

            //Chamando a função novamente para beber café para sempree
            scr_cofffeeDrink();
        }
    }
}
scr_cofffeeDrink();
