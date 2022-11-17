//Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
console.log(" _____        __  __             _____ _                        ");
console.log("/ ____|      / _|/ _|           / ____| |                       ");
console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __         ");
console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\");
console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |       ");
console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/   ");
console.log("                                                  | |           ");
console.log("   [Horário de funcionamento: 08h às 18h]         |_|       \n\n");

function scr_drinkCoffee() {

    //Variáveis para descobrir a hora do usuário
    var day  = new Date();
    var hour = day.getHours();

    //O programa só funciona das 8h às 18h
    if (hour >= 8 && hour <= 22) {

        console.log('[1] - Expresso     [5] - Duplo\n[2] - Mocha        [6] - Latte\n[3] - Cappuccino   [7] - Café Preto\n[4] - Macchiato    [8] - Mochaccino\n');

        var coffeeDrinked   = 0;
        var maxCoffees      = 10;
        var menu            = ['Expresso', 'Mocha', 'Cappuccino', 'Macchiato', 'Duplo', 'Latte', 'Café Preto', 'Mochaccino'];
        var product         = prompt('Qual Café vai querer? ');
        var coffeeSelected  = product-1;

        function scr_loop() {
            for (var refil = coffeesToDrink; refil > 0; refil --) {
                        
                //Adicionando mais um café pra conta
                coffeeDrinked += 1;
                
                //Dizendo em qual café estou
                console.log(`Bebendo o ${coffeeDrinked}º ${menu[coffeeSelected]}`);
        
                console.log('    (   )  (   )  )       ');
                console.log('     ) (    ) (  (        ');
                console.log('    (   )  (   )  )       ');
                console.log('     _____________        ');
                console.log('    <_____________> ___   ');
                console.log('    |             |/ _ \\ ');
                console.log('    |             | | | | ');
                console.log(`    |      ${coffeeDrinked}      | |_| | `);
                console.log(' ___|             |\\___/ ');
                console.log('/    \\___________/    \\ ');
                console.log('\\_____________________/  \n');
        
                if (refil != 1) {
                    console.log('Pegando mais café\n');
                }
                else if (refil == 1) { //Se o refil chegar a um, ele escreve que acabou o café
                    console.log(`O ${menu[coffeeSelected]} acabou.\n`);
                    console.log(`Preparando mais uma rodada de café.\n`);
        
                    //Chamando a função novamente para beber café para sempreee
                    scr_drinkCoffee();
                }
            }
        }

        //Definindo o primeiro e o ultimo item do nosso vetor
        var primVetor = menu.length - (menu.length)
        var ultmVetor = primVetor   + (menu.length)

        //Se for menor que o primeiro item ou maior que o ultimo item, ele exibe a mensagem:
        if (coffeeSelected < primVetor || coffeeSelected >= ultmVetor) {
            console.log('Ops, não temos esse item no nosso cardápio!');
        }
        else {
            var coffeesToDrink = prompt(`Digite aqui a quantidade de xícaras de ${menu[coffeeSelected]} (de 1 a ${maxCoffees}) que deseja beber `);

            //Se a quantidade de cafés for maios que a quantidade máxima, 
            //a seguinte mensagem será exibida e será preparada a quantidade maxima de cafés.
            if (coffeesToDrink > maxCoffees) {
                console.log(`\n[ATENÇÃO] Não temos tudo isso de ${menu[coffeeSelected]}! Vamos preparar ${maxCoffees} xícaras para beber.`);
                coffeesToDrink = maxCoffees;
                scr_loop();
            }
            else if (coffeesToDrink == 1) {
                console.log(`Saindo ${coffeesToDrink} xícara de ${menu[coffeeSelected]}.\n`);
                scr_loop();
            }
            else if (coffeesToDrink > 1){
                console.log(`Saindo ${coffeesToDrink} xícaras de ${menu[coffeeSelected]}.\n`);
                scr_loop();
            }
            else if (coffeesToDrink <= 0) {
                console.log('Impossível calcular o numero de xícaras!');
                coffeesToDrink = prompt(`Digite aqui a quantidade de xícaras de ${menu[coffeeSelected]} (de 1 a ${maxCoffees}) que deseja beber `);
            }
        }
    }
    else {
        console.log('Poxa que azar! Fechamos, que tal voltar amanhã?');
    }
}

//Rodando meu Script pela primeira vez!
scr_drinkCoffee();

                                  /*
 ____ _____ _____               / /  ____          _                ______
|  _ \_   _|  __ \     /\      / /  |  _ \   /\   | |        /\    |___  /   
| |_) || | | |__) |   /  \    / /__ | |_) | /  \  | |       /  \      / /    
|  _ < | | |  _  /   / /\ \  |___  /|  _ < / /\ \ | |      / /\ \    / /     
| |_) || |_| | \ \  / ____ \    / / | |_) / ____ \| |____ / ____ \  / /__    
|____/_____|_|  \_\/_/    \_\  / /  \____/_/    \_\______/_/    \_\/_____|   
                              / /     
                             */
