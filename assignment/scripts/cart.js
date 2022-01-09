console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];


function addItem (item) {
  basket.push( item );
  return true;
}
console.log('This should say true:', addItem('Milk'));

addItem('Fruit');
addItem('Eggs');
addItem('Bread');

let arrayLength = basket.length;

function listItems(arrayLength) {
  for (let i = 0; i <basket.length; i++) {
    console.log(basket[i]);
  }
}
console.log(listItems());


function empty() {
  while (basket.length > 0) {
    basket.pop();
  }
  return basket;
}
console.log(empty());
