<<<<<<< HEAD
var productCount = 2;
var subtotal = 14.98;
var shipping = 2.75;
var total = subtotal + shipping;
console.log(total);
console.log('test');

subtotal = total - shipping;
var salesTax = total * 0.15;
var productPrice = subtotal / productCount;
console.log(productPrice);

// % calculates the remainder of a division
var itemsPerBox = 12;
var itemsToBeBoxed = 40;
var itemsinLastBox = itemsToBeBoxed % itemsPerBox;
console.log(`Items remaining in last box: ${itemsinLastBox}`); // template literal

// Increment and decrement
var a = 0;
a++;
console.log(a);
--a;
console.log(a);
--a;
console.log(a);
++a;
console.log(a);
a = 6;
--a;
console.log(a);

// + operator can concatenate values and strings
var firstname = "John";
var surname = "Doe";
var fullname = firstname + " " + surname;
alert(fullname);

var name = "David";
var age = 45;
alert(name + age);
=======
var productCount = 2;
var subtotal = 14.98;
var shipping = 2.75;
var total = subtotal + shipping;
console.log(total);
console.log('test');

subtotal = total - shipping;
var salesTax = total * 0.15;
var productPrice = subtotal / productCount;
console.log(productPrice);

// % calculates the remainder of a division
var itemsPerBox = 12;
var itemsToBeBoxed = 40;
var itemsinLastBox = itemsToBeBoxed % itemsPerBox;
console.log(`Items remaining in last box: ${itemsinLastBox}`); // template literal

// Increment and decrement
var a = 0;
a++;
console.log(a);
--a;
console.log(a);
--a;
console.log(a);
++a;
console.log(a);
a = 6;
--a;
console.log(a);

// + operator can concatenate values and strings
var firstname = "John";
var surname = "Doe";
var fullname = firstname + " " + surname;
alert(fullname);

var name = "David";
var age = 45;
alert(name + age);
>>>>>>> 8b11909c537397630c64df25237b83d1458806ab
