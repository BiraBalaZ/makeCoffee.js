    function scr_drinkCoffee() {

        //Contagem de cafés tomados, inicia com 0
        var coffeeDrinked = 0;
        var maxCoffees = 10;
        var coffeesToDrink = prompt(`Digite aqui a quantidade de cafés (de 1 a ${maxCoffees}) que deseja beber: `);
        
        //Se a quantidade de cafés for maios que a quantidade máxima, 
        //a seguinte mensagem será exibida e será preparada a quantidade maxima de cafés.
        if (coffeesToDrink > maxCoffees) {
            console.log(`\n[ATENÇÃO] Não temos tudo isso de café! Vamos preparar ${maxCoffees} xícaras para beber.\n`);
            coffeesToDrink = maxCoffees;
        }

        //Laço de repetição para tomar 5 xícaras
        for (var refil = coffeesToDrink; refil > 0; refil --) {
            
            //Adicionando mais um café pra conta
            coffeeDrinked += 1;
            
            //Dizendo em qual café estou
            console.log(`Bebendo o ${coffeeDrinked}º Café`);

            console.log('    (   )  (   )  )       ');
            console.log('     ) (    ) (  (        ');
            console.log('    (   )  (   )  )       ');
            console.log('     _____________        ');
            console.log('    <_____________> ___   ');
            console.log('    |             |/ _ \\ ');
            console.log('    |             | | | | ');
            console.log(`    |      ${coffeeDrinked}      | | | | `);
            console.log(' ___|             |\\___/ ');
            console.log('/    \\___________/    \\ ');
            console.log('\\_____________________/  \n');

            if (refil != 1) {
                console.log('Pegando mais café\n');
            }
            else if (refil == 1) { //Se o refil chegar a um, ele escreve que acabou o café
                console.log(`O café acabou.\n`);
                console.log(`Preparando mais uma rodada de café.\n`);

                //Chamando a função novamente para beber café para sempreee
                scr_drinkCoffee();
            }
        }
    }

    //Imprimeindo a logo 'Coffe Shop' no começo da aplicação.
    console.log(" _____        __  __             _____ _                           ");
    console.log("/ ____|      / _|/ _|           / ____| |                          ");
    console.log("| |     ___ | |_| |_ ___  ___  | (___ | |__   ___  _ __            ");
    console.log("| |    / _ \\|  _|  _/ _ \\/ _ \\  \\___ \\|  _ \\ / _ \\|  _ \\   ");
    console.log("| |___| (_) | | | ||  __/  __/  ____) | | | | (_) | |_) |          ");
    console.log("\\______\\___/|_| |_| \\___|\\___| |_____/|_| |_|\\___/| .__/      ");
    console.log("                                                  | |              ");
    console.log("                                                  |_|              ");
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
