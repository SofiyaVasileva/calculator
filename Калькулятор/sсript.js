console.log("Papap")

function plus() {
    var  num1, num2, result, option; 

    num1 = document.getElementById('n1').value
    num1 = parseInt('num1');


    num2 = document.getElementById('n2').value;
    num2 = parseInt('num2');

    result = n1 + n2;

    option = "+";

    document.getElementById('todo').innerHTML = option;

    document.getElementById('out').innerHTML = result;

};

function minus() {
    var  num1, num2, result, option; 

    num1 = document.getElementById('n1').value
    num1 = parseInt('num1');


    num2 = document.getElementById('n2').value;
    num2 = parseInt('num2');

    result = n1 - n2;

    option = "-";

    document.getElementById('todo').innerHTML = option;

    document.getElementById('out').innerHTML = result;

};

function multiplier() {
    var  num1, num2, result, option; 

    num1 = document.getElementById('n1').value
    num1 = parseInt('num1');


    num2 = document.getElementById('n2').value;
    num2 = parseInt('num2');

    result = n1 * n2;

    option = "*";

    document.getElementById('todo').innerHTML = option;

    document.getElementById('out').innerHTML = result;

}