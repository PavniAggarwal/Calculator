FILE: calculator.html

This calculator has the same functionality as the real world object. It uses immediate execution logic and doesn't observe the order of operation precedence.

EXAMPLE: 3 + 5 x 6 - 2 / 4 =

Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5

The home page has a basic calculator which can add, subtract, multiply, divide and find percentage of two integer or float numbers and keep chaining mathematical operations together until the equal button is pressed. When pressed, equal will show the correct total, which can be cleared via a clear button. There is a backspace key to delete the last digit typed. The backspace key is disabled when the result is evaluated which means you can only clear a result and not backspace it. The clear button shows "AC" when you have no prior input and "C" when there is input stored in the keyboard. 
There is a small button at the lower right corner of the calculator which converts the basic calculator to a scientific calculator. 
Using the scientific calculator, you can do calculations using pi and e(exponent), you can find reciprocal, factorial, square root, log(with base 10), natural log, absolute value of a number. Also, for exponentiation, there are 2 options available, one is the symbol "^" using which you can calculate X^Y and the other is e^X. For the trigonometric calculations, one can find sin, cos and tan of a number in both degrees and radians which you can select using the "deg" button. You can switch these sin, cos, tan buttons to their respective inverses using the "inv" button. The inverse gives output in radians. The calculator keeps chaining all these functions as well until the equal button is pressed.

For using any of the functions in the scientific calculator, you need to first enter the number and then the function.

EXAMPLE: for calculating 2!, first press 2 and then X!

The calculator also prints "Error" if you enter some invalid input.

EXAMPLE: 2e is invalid. However, 2*e is valid. Similarly, if you calculate 3-6 (which gives -3) and then press lg X (which means lg(-3)), this would give error.

TECHNOLOGIES USED: HTML, CSS, JS