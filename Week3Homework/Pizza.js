// Pizza Place Functions


// Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings prints something like "...Cooking pizza..." outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

// Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!" outputs the same pizza Object that was passed in

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input 

// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.




const pizzaTopping = ["Pepperoni", "Sausage", "Peppers", "Onions", "Bacon"];

const pizza = {
  pizza: "large, thin-crust, " + pizzaTopping,
};

pizza.pizza;

for (let toppings of pizzaTopping) {
    console.log(toppings)
};
function greetCustomer () {
    console.log("Welcome, we have some amazing toppings, we have ", pizzaTopping)
};
function getPizzaOrder () {
    console.log ("One large thin crust pizza with ", pizzaTopping[1], "coming right up!")
};
function preparePizza () {
    console.log ("Cooking large, thin crust pizza with ", pizzaTopping[1])
};
function servePizza () {
    console.log("Order up! Here's your large thin-crust pizza with ", pizzaTopping[1])
};

greetCustomer();
getPizzaOrder();
preparePizza();
servePizza();