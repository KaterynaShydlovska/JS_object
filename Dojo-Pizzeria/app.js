function pizzaOven(bread, type, cheese, entry) {
    let pizza = {};
    pizza.bread = bread;
    pizza.type = type;
    pizza.cheese = cheese;
    pizza.entry = entry;
    return pizza;
}

pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
pizzaOven("hand tossed", "garlic", ["sweez", "feta"], ["mushrooms", "tomato", "onions"]);
pizzaOven("hand tossed", "white", ["peper jack", "chedar"], ["mushrooms", "olives", "belll peper"]);