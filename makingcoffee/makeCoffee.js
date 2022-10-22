function makeCoffee() {

    var drink = 1; // nao pode beber
    var coffee = 1; //1 = cheio/ 0 = vazio

    for (var refil = 5; refil > 0; refil --)
    {
        if (coffee == 1) {
            if (drink == 1) {
                coffee -= 1;
                drink = 0;
            } else {
                coffee += 1;
                drink = 1;
            }
            console.log(`Bebendo. Restam ${refil} refis`)
        }
    }
}