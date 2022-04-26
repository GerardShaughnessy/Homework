let pizzaPlace = "PizzaPie";
let numberOfToppings = (44);
console.log(pizzaPlace , numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log(`Here at ${pizzaPlace} we have ${numberOfToppings} toppings!`);
if (numberOfToppings < 10) {
  console.log("Quality not quantity");
}else{
  console.log("A whole lot of pizza.");
}


for (let i = 2; i <=numberOfToppings; i+=2) {
console.log(i);
 }
