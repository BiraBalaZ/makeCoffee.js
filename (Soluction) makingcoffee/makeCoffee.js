for (var refil = 5; refil > 0; refil --) {
    var drink, coffee = 1;
    
    if (coffee == 1) {
        if (drink == 1) {
            coffee -= 1;
            drink = 0;
        } else {
            coffee += 1;
            drink = 1;
        }
    }
    console.log(`Bebendo. Restam ${refil} refis`)
}