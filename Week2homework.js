let pizzaPlace = "PizzaPie";
let numberOfToppings = ("8 toppings" || 8);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log("Here at " + pizzaPlace + " we have " + numberOfToppings + "!");
if (numberOfToppings <10) {
  console.log("Quality not quantity");
}else{
  console.log("A whole lot of pizza.");
}

//bonus
// for (let numberOfToppings = ("8 toppings" || 8); numberOfToppings++) {
// console.log("Here at " + pizzaPlace + " we have " + numberOfToppings + "!");
// if (numberOfToppings <10) {
//   console.log("Quality not quantity");
// }else{
//   console.log("A whole lot of pizza.");
// } }