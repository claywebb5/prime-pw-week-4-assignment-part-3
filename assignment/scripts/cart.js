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


function listItems() {

}
