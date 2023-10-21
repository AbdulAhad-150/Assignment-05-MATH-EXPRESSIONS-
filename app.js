// Question 1

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
// alert('The sum of '+ num1 +'and' + num2 +' is: '  + sum);
document.write(
  "Question 1<br><br>The sum of " + num1 + " and " + num2 + " is: " + sum
);

// Question 2 subtraction

var num1 = 3;
var num2 = 5;
var sub = num1 - num2;
document.write(
  "<br><br>Question 2<br><br> The sub of " +
    num1 +
    " and " +
    num2 +
    " is: " +
    sub
);

// Question 2 multiplication

var num1 = 3;
var num2 = 5;
var mul = num1 * num2;
document.write("<br> The mul of " + num1 + " and " + num2 + " is: " + mul);

// Question 2 division

var num1 = 3;
var num2 = 5;
var div = num1 / num2;
document.write("<br> The divide of " + num1 + " and " + num2 + " is: " + div);

// Question 2 modulus

var num1 = 3;
var num2 = 5;
var mod = num1 % num2;
document.write("<br> The modulus of " + num1 + " and " + num2 + " is: " + mod);

// Question 3
// a   Declare a variable.
var num3 = 5;

// b   Show the value of variable in your browser like “Value after variable declaration is: ??”
document.write(
  "<br><br>Question 3 <br> <br> Value after variable declaration is: " + num3
);

// c   Initialize the variable with some number.
var num;
num = 5;
var num = 5;

// d   Show the value of variable in your browser like “Initial value: 5”.
document.write("<br> Initial value:" + num);

// e   Increment the variable.
var e = num + 1;

// f   Show the value of variable in your browser like “Value after increment is: 6”.
document.write("<br>value after increment is :" + e);

// g   Add 7 to the variable.
var f = e + 7;

// h   Show the value of variable in your browser like “Value after addition is: 13”.
document.write("<br> value after addition is :" + f);

// i   Decrement the variable.
var i = f - 1;

// j   Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("<br>Value after decrement is:" + i);

// k   Show the remainder after dividing the variable’s value by 3.
var k = i / 3;

// l   Output : “The remainder is : 0”.
document.write("<br> The reminder is : " + k);

// Question 4

var movieticket = 600;
var buying = 5;
var totalcost = movieticket * buying;
document.write(
  "<br><br>Question 4 <br>Total cost to buy 5 tickets to a movie  is " +
    totalcost +
    "PKR");

// Question 5   Write a script to display multiplication table of any number in your browser. E.g
var any_num = prompt("Enter an integer for Question 5 ( table )");
document.write("<br><br>Question 5");
for (let z =1;z <= 10; z++)
document.write("<br>"+ any_num + "*" + z + "=" +any_num * z +"\n" )

// Question 6   The Temperature Converter:
document.write("<br><br>Question 6 <br>");
// a. Store a Celsius temperature into a variable.
var celsiusTemp = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahernheitTemp = (celsiusTemp * 9) / 5 + 32;
document.write(celsiusTemp + "°C is " + fahernheitTemp + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var fahernheitTemp2 = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp2 = ((fahernheitTemp2 - 32) * 5) / 9;
document.write(fahernheitTemp2 + "°F is " + celsiusTemp2 + "°C" + "<br>");

// Question 7   Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

document.write("<br><br>Question 7 <br>");
// a. Price of item 1
document.write("Price of item 1 is 650" + "<br>");
var priceitm1 = 650;
// b. Price of item 2
document.write("Price of item 2 is 100" + "<br>");
var priceitm2 = 100;
// c. Ordered quantity of item 1
document.write("Ordered quantity of item 1 is 3" + "<br>");
//d. Ordered Quantity of item 2
document.write("Ordered quantity of item 2 is 7" + "<br>");
// e. Shipping charges
document.write("Shipping charges 100" + "<br>");
// total cost
var costitm1 = 650 * 3;
var costitm2 = 100 * 7;
var shipcharges = 100;
var totalcost = costitm1 + costitm2 + shipcharges;
document.write("Total cost of your order is " + totalcost);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<br><br>Question 8 <br>");
document.write("<br>" + "Total marks : 980");
document.write("<br>" + "Marks obtained : 804" + "<br>");
var totalmarks = 980;
var markobt = 804;
var percentage = (markobt / totalmarks) * 100;
document.write("Percentage:" + percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br><br>Question 9 <br><br>");
document.write("10 US dollars <br>");
document.write("25 Saudi Riyals <br>");
var USDollars =10*275.46;
var SaudiRiyals =25*73.43;
var totalcost =USDollars + SaudiRiyals;
document.write("(Exchange rates : 1 US Dollar = 275.46 Pakistani Rupee and 1 Saudi Riyal = 73.43  Pakistani Rupee)"+"<br><br>");
document.write("Total Currency in PKR :" + totalcost );

// Question 10
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
document.write("<br><br>Question 10 <br><br>");
// a. Add 5
// b. Multiply by 10
// Divide the result by 2
// Perform all calculations in a single expression
var number =25 + 5/2
document.write(number);

// Question 11
// The Age Calculator: Forgot how old someone is? Calculate it!
document.write("<br><br>Question 11 <br><br>");
// a. Store the current year in a variable.
var current_year = 2023;
document.write("Current Year : "+ current_year +"<br>");
// b. Store their birth year in a variable.
var birth_year = 2003;
document.write("Birth Year : "+ birth_year +"<br>");
// c. Calculate their 2 possible ages based on the stored values.
var age = current_year - birth_year;
document.write("Your Age is : "+ age +"<br>");

// Question 12
document.write("<br><br>Question 12 <br><br>");
// a. Store a radius into a variable.
var radius = 20;
document.write("Radius of a circle : " + radius + "<br>");
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var Circumference = 2*3.142 *radius;
document.write("The circumference is : " + Circumference + "<br>");
// Calculate the area based on the radius, and output “The area is NN”.
var r=20*20;
// pie /3.142  *r /20 *20
var area =3.142*r
document.write("The Area is :" + area + "<br>");

// Question 13
document.write("<br><br>Question 13 <br><br>");
// a. Store your favorite snack into a variable
var snack = " Nehari";
document.write("Favourite Snack : "+ snack +"<br>");
// b. Store your current age into a variable.
var current_age = 15;
document.write("Current age : "+ current_age +"<br>");
// c. Store a maximum age into a variable.
var maximum_age = 65;
document.write("Estimated Maximum Age : "+ maximum_age +"<br>");
// d. Store an estimated amount per day (as a number).
var estimated_amount = 3;
document.write("Amount of snacks per day : "+ estimated_amount +"<br>");
// e. Calculate how many would you eat total for the rest of your life.
var Total = (maximum_age - current_age) *3
document.write("You will need " + Total +  snack + " to last you until the ripe old age of " + maximum_age +"<br>");