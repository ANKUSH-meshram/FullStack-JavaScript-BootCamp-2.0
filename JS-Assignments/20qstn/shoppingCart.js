let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log('Original cart:', shoppingCart);

shoppingCart.unshift('Meat');
console.log('After adding "Meat" at front:', shoppingCart);

shoppingCart.push("Sugar")
console.log('After adding "Sugar" at the end:', shoppingCart);

shoppingCart.splice(4,1)
console.log('After removing "Honey":', shoppingCart);

shoppingCart.splice(3, 1, 'Green Tea');
console.log('After modifying "Tea" to "Green Tea":', shoppingCart);

