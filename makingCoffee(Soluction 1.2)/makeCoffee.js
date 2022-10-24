var drink, coffee = 1;
var coffeeDrinked = 0;

for (var refil = 5; refil > 0; refil --) {
    if (coffee == 1) {
        if (drink == 1) {
            coffee -= 1;
            drink = 0;
        } else {
            coffee += 1;
            drink = 1;
        }
    }
    coffeeDrinked += 1;
    console.log(`Bebendo ${coffeeDrinked}º Café`)

    if (refil==1) {
        console.log(`Não tem mais café.`)
    }
}
