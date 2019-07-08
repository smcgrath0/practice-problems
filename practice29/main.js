var total = 0;
do_math(2,2,'/');
function do_math(num1, num2, operator){
  console.log("Your first number is " + num1 + ", your second number is " + num2 + ", and your operator is " + operator);
  switch(operator){
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*' || 'x' || 'X':
      total = num1 * num2;
      break;
    case '/':
      total = num1 / num2;
      break;
    default:
      console.log("Try Again");
      break;
  }
  console.log(total);
}
