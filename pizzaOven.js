function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
pizza3 = pizzaOven("cheese crust", "regular", ["mozarella", "parmesan"], ["pepperoni", "sausage", "bacon"]);
pizza4 = pizzaOven("thin crust", "alfredo", ["vegan cheese"], ["spinach", "broccoli", "jalapenos"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);