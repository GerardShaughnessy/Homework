//

const pizzaToppings = ["Pepperoni,", "Sausage,", "Bacon,", "Peppers,", "Onions,", "Mushrooms"];

function greetCustomer(topping) {
    let greeting = "Welcome, we have some amazing toppings, we have ";
    for (let topping of pizzaToppings) {
        greeting += `${topping} `
    };   
    console.log(greeting+"!");
};
greetCustomer(pizzaToppings);
//

function getPizzaOrder(size, crust, ...toppings) {
    let order = `One ${size} ${crust} crust pizza with `;

    for (let topping of toppings) {
        order += ` ${topping}`
    }
    console.log (order+" coming right up!")
    return [size, crust, toppings];
};
getPizzaOrder(`Large`, `Regular`, `Pepperoni`, `Bacon`, `Onions`, `Peppers`);
//
function preparePizza([size, crust, toppings]) {
console.log("Your Pizza is in the oven!")
    return {
    size: size,
    crust: crust,
    toppings: toppings
    };
};
preparePizza([`Large`, `Regular`, `Pepperoni`, `Bacon`, `Onions`, `Peppers`]);

function servePizza(pizza) {
    
    let order = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
    for (let topping of pizza.toppings) {
        order += ` ${topping}`
    }
    console.log(order+"!")
    return{
    size: pizza.size,
    crust: pizza.crust,
    toppings: pizza.toppings
        }
};
const testPizza = {
    size: "Large",
    crust: "Regular",
    toppings: ["Peperoni", "Bacon", "Onions", "Peppers"]
};
servePizza(testPizza);