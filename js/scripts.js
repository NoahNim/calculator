function add(num1, num2){
return num1+ num2;
};

function subtract(num1, num2){
  return num1 - num2;
};

function multiply(num1, num2){
  return num1 * num2;
};

function divide(num1, num2){
  return num1 / num2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    console.log(number1);
    var number2 = parseInt($("#add2").val());
    console.log(number2);
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    console.log(number1);
    var number2 = parseInt($("#sub2").val());
    console.log(number2);
    var result = subtract(number1, number2);
    $("#output").text(result);

  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    console.log(number1);
    var number2 = parseInt($("#mult2").val());
    console.log(number2);
    var result = multiply(number1, number2);
    $("#output").text(result);

  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    console.log(number1);
    var number2 = parseInt($("#div2").val());
    console.log(number2);
    var result = divide(number1, number2);
    $("#output").text(result);

  });

});
