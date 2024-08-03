let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})

let input = "";


const operation = document.querySelector(".calculator-operation");
const result = document.querySelector(".calculator-operation-result");

clearBtn = document.getElementById("clear");
divsionBtn = document.getElementById("division");
multBtn = document.getElementById("multiply");
eraserBtn = document.getElementById("eraser");
minusBtn = document.getElementById("minus");
plusBtn = document.getElementById("plus");
equalsBtn = document.getElementById("equal");
percentBtn = document.getElementById("percent");
decimalBtn = document.getElementById("decimal");

zeroBtn = document.getElementById("0");
oneBtn = document.getElementById("1");
twoBtn = document.getElementById("2");
threeBtn = document.getElementById("3");
fourBtn = document.getElementById("4");
fiveBtn = document.getElementById("5");
sixBtn = document.getElementById("6");
sevenBtn = document.getElementById("7");
eightBtn = document.getElementById("8");
nineBtn = document.getElementById("9");

zeroBtn.addEventListener("click", function() {
  input += "0";
  operation.textContent = input;
});

oneBtn.addEventListener("click", function() {
  input += "1";
  operation.textContent = input;
});

twoBtn.addEventListener("click", function() {
  input += "2";
  operation.textContent = input;
});

threeBtn.addEventListener("click", function() {
  input += "3";
  operation.textContent = input;
});

fourBtn.addEventListener("click", function() {
  input += "4";
  operation.textContent = input;
});

fiveBtn.addEventListener("click", function() {
  input += "5";
  operation.textContent = input;
});

sixBtn.addEventListener("click", function() {
  input += "6";
  operation.textContent = input;
});

sevenBtn.addEventListener("click", function() {
  input += "7";
  operation.textContent = input;
});

eightBtn.addEventListener("click", function() {
  input += "8";
  operation.textContent = input;
});

nineBtn.addEventListener("click", function() {
  input += "9";
  operation.textContent = input;
});

clear.addEventListener("click", function() {
  input = input.slice(0, -1);
  operation.textContent = input;

  if (result.textContent != "") {
    result.textContent = "";
  }
});

eraserBtn.addEventListener("click", function() {
  input = "";
  result.textContent = "";
  operation.textContent = input;
});

decimalBtn.addEventListener("click", function() {
  input += ".";
  operation.textContent = input;
});

plusBtn.addEventListener("click", function() {
  input += "+";
  operation.textContent = input;
});

minusBtn.addEventListener("click", function() {
  input += "-";
  operation.textContent = input;
});

divsionBtn.addEventListener("click", function() {
  input += "/";
  operation.textContent = input;
});

multBtn.addEventListener("click", function() {
  input += "*";
  operation.textContent = input;
});

equalsBtn.addEventListener("click", function() {
  result.textContent = eval(input);
  input = "";

});


