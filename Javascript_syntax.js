/*

```javascript
//declaring variable using var can be redeclared outside of a block
//however you cannot redeclare a var inside of a block
var x = 21;
var x = 32;     //allowed

{
var x = "hello";
var x = 21;  //not allowed
}


//declaring variables with let cannot be redeclared
let x = 23;
let x = 69;

// SyntaxError: 'x' has already been declared

THEN THERE IS SCOPE
//variables defined using let and const inside of a block cannot be accessed from outside the block
{
let x = "jon";
const y = 53;
}
//x and y cannot be accessed here

{ var x = 23}
//x can be accessed here

//all variables can perform mathematical actions
//ie addition + multiplication * etc
//strings can be added to each other as well
x = "jake";
y = "cushway";
me = x + y = "jake cushway"

```



!! JavaScript Comparison Statements
```javascript
//Comparison Statements and logical operators are used to test for true and false

//they are often used in if statements, if the comparison is true then do this, if false then do this
if(i=0; i<10; i++){
    return("hello")
}
else{
    return("goodbye")
}

//they are often used in loops as well to run the loop while the statement is true, then break when the statement is false
while (x=0; x<=10; x++){
   console.log(x)

//there are many other types of comparison operators and logical operators, these will all return true or false

Equal (==)      //returns true if the operands are equal
Not equal (!=)
Strict equal (===)       //returns true if the operands are equal and also the same type
Greater than (>)
Greater than or equal (>=)
Less than (<)
Less than or equal (<=)

LOGICAL OPERATORS
//can be useful when declaring conditions using comparison statements

Logical AND (&&)
//if both consditions are true then returns true, otherwise returns false

Logical OR (||)
//if on  or the other conditions are true, then it returns true, otherwise it returns false

Logical NOT (!)
//if any conditions are true, then it returns false, otherwise it returns true

```

!! JavaScript Boolean Statements
```javascript
//similarly to comparisons, booleans return true or false
Boolean(10>9)    //returns true
Boolean(9>10)    //returns false

or

10>9      //returns true

//comparison statements use boolean, the boolean value is the basis for all comparisons and conditions

//everything with a value is true

100
5
"hello"

//everything without a value is false

let x=0;
boolean(x)     //returns false

let x ="";
boolean(x)     //returns false

let x = null;
Boolean(x);       // returns false

//yes and no can also be booleans
var YES = true;
var NO = false;
```
!! Javascript Arrays
```javascript
//arrays can be useful to store a list of items, values, pictures, urls or anything
//you can define arrays all at once or one item at a time
myArray = [1, 2, 3, 4, 5]

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


//you can sign variables to items in the array
//to choose one item out of an array you can index it
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[0];    // x = "Saab"

//you can overwrite items in arrays by indexing them as well
cars[0] = "Ford";

//you can delete elements by using
delete cars[1]    //changes the first element in fruits to undefined

//arrays can be mixed with strings and values
array = ["car", 21, "jake"]

//there are many things you can use arrays for, such as loops, slideshows, keeping lists and much more

myArray.length 
//returns the number of elements in the array

myArray.sort();
//will sort the array

myArray.push("element");
//will add an element to the end of the array

myArray.pop();
//will remove the last element in the array

myArray.shift();
//removes the first array element and "shifts" all other elements to a lower index

myArray.unshift("apple");
//adds a new element to an array (at the beginning)

//you can also concatenate (connect) arrays using concat()

myGirls = ["Cecilie", "Lone"];
myBoys = ["Emil", "Tobias", "Linus"];
myChildren = myGirls.concat(myBoys);

//you can use splice() to remove elements without leaving "holes" in the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);   // Removes the first element

//The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//New Array:  Banana,Orange,Lemon,Kiwi,Apple,Mango

```
!! JavaScript Objects

```javascript
//objects have properties, values and methods
//a car is a good example of an object, this is how you define an object

car = {type:"Fiat", model:"500", color:"white"};
//here type is a property, and "fiat" is the value

//you can access objects and their values two different ways of syntax
objectName.propertyName   or    objectName["propertyName"]
car.type //would return Fiat
car.model //would return 500

//to delete an object property
delete.objectname.property
delete.car.color

//checking for a property within the object
"key" in object
"model" in car

//to iterate over an object. 
for(let key in obj){}
//this one will add all the values to sum
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}    //this will add all the values to sum

//this would double all the values
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}


```

!! JavaScript Functions
```javascript
//functions are used to do things, they can send messages, they can take parameters and return a value or a boolean
//they must be declared first, and later called to execute
function myFunction(){
    alert("hello world")

myFunction()

//functions can use local variables or also use global variables
x=5
function myFunction(){
y=7
z=x+y    //z = 5+7=12
}

//a function passing through parameters would look like this
function someFunction(p1, p2, p3){}

//functions can return values
let x = myFunction(4, 3);   
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

//functions can have loops inside of them to iterate through all objects

```


!! JavaScript Functions & Parameters
```javascript
//functions can run with parameters, parameters are names with values attached to them

//parameters can have any type of data attached to them
//when they are used with a function, the function will use the data attached to the parameters to run the function

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

//If a function is called with missing arguments (less than declared), the missing values are set to undefined.

//parameters are values that are given to a function when it is called

```


!! JavaScript Loops
```javascript
//there are multiple types of loops, you can use a for loop
for(i=0;i<10;i++){
alert("hello")
}   //this for loop with alert the user saying hello until i>=10


//while loops are quite similar and can be used similarly
i=0
while(i<10;i++){
alert("hello")
}   //this for loop with alert the user saying hello until i>=10

//you can also use an if statement to iterate through some sort of process similarly to a loop
if(i=0;i!=5;i++){
console.log(i)
}

//loops can be very useful when you need to iterate through a list of items


```

!! JavaScript Data Types
```javascript
//data types usually is a value assigned to a variable and the type of value is the data type
//number, bigint, string, boolean, null, undefined, object, symbol are all different types of data
x=5;   //number
q=99999999999e99;   //bigint
w="hello";   //string
e=true;   //boolean
let r;   //undefined
t = "";   //null
y= {color:"red", number:69, weight:50};   //object


//normally to operate on variables it is important to know the data types
let x = 16 + "Volvo";  //is adding two types of data, which would convert to 
let x = "16" + "Volvo";   //When adding a number and a string, JavaScript will treat the number as a string.

//the same variable can be used to hold different data types
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

//to indicate that the data is a string, quotations are used
//single or double quotations are used or both can be used as well
x = "my name is 'jake cushway'"
y = 'i am "canadian" and 25'

//you can us the typeof operator to find the data type

typeof "John"         // Returns "string"
typeof 314            // Returns "number"
let car;    // Value is undefined, type is undefined
x=24; type of x    //returns "number"

```

!! JavaScript Comments
```javascript

//comments are very important in javascript and all coding
//they help clarify what the function is doing, and help you remember what is going on by a glance

// single line comments are created by using "//" two forward slashes

/*
while multiline comments
are cause by using a forward slash with an astericks
to open and close
*/

//comments help someone else who didnt write the code understand what is going on as well

//it is very helpful to add detailed comments to all code

*/