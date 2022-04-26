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
function preparePizza([size, crust, ...toppings]) {

        let prep = (`Cooking pizza! Your ${size} ${crust} crust pizza with `)
        for (let topping of toppings) {
            prep += ` ${topping}`
        }
        console.log (prep+" is in the oven!")
        return [size, crust, toppings];
        const cooking = {
            size: Large,
            crust: Regular,
            toppers: [
                Pepperoni,
                Bacon,
                Onions,
                Peppers,
            ]
            };
            console.log(cooking.size);
};
    

preparePizza([`Large`, `Regular`, `Pepperoni`, `Bacon`, `Onions`, `Peppers`])



// function servePizza () {
//     console.log(`Order up! Here's your large thin-crust pizza with ` )
// };