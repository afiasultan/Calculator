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
powerBtn = document.getElementById("power");

sinBtn = document.getElementById("sin");
cosBtn = document.getElementById("cos");
tanBtn = document.getElementById("tan");

sqrtBtn = document.getElementById("sqrt");

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

percentBtn.addEventListener("click", function() {
  input += "/100";
  operation.textContent += "%";
});

powerBtn.addEventListener("click", function() {
  input += "^";
  operation.textContent = input;
});

sinBtn.addEventListener("click", function() {
  input += "sin(";
  operation.textContent = input;
  
});

cosBtn.addEventListener("click", function() {
  input += "cos(";
  operation.textContent = input;
});

tanBtn.addEventListener("click", function() {
  input += "tan(";
  operation.textContent = input;
});

sqrtBtn.addEventListener("click", function() {
  input += "√(";
  operation.textContent = input;
});

document.addEventListener("keydown", function(event) {

  if (event.key >= '0' && event.key <= '9' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '^' || event.key === '.') {
    input += event.key;
  }

  else if (event.key === "Backspace" || event.key === "Delete") {
    input = input.slice(0, -1);

    if (result.textContent != "") {
      result.textContent = "";
    }
  }

  operation.textContent = input;
 
  if (event.key === "Return" || event.key == "Enter") {
    if (input.includes("^")) {
      power();
  
    } else if (input.includes("sin(")) {
      sin();
    } else if (input.includes("cos(")) {
      cos();
    } else if (input.includes("tan(")) {
      tan();
    } else if (input.includes("√(")) {
      sqrt();
    } else {
      result.textContent = formatNumber(eval(input));
    }
    
    input = "";
  }

});

equalsBtn.addEventListener("click", function() {

  if (input.includes("^")) {
    power();
  
  } else if (input.includes("sin(")) {
    sin();

  } else if (input.includes("cos(")) {
    cos();

  } else if (input.includes("tan(")) {
    tan();

  } else if (input.includes("√(")) {
    sqrt();

  } else {
    result.textContent = formatNumber(eval(input));
  }
  
  input = "";

});

function power() {
  var nums = input.split("^");
  var base = parseFloat(nums[0]);
  var exponent = parseFloat(nums[1]);
  var powerResult = eval(base) ** eval(exponent);
  result.textContent = formatNumber(powerResult);

};

function sin() {
  input = input.slice(4);
  var sinResult = Math.sin(eval(input));
  result.textContent = formatNumber(sinResult);
}

function cos() {
  input = input.slice(4);
  var cosResult = Math.cos(eval(input));
  result.textContent = formatNumber(cosResult);
}

function tan() {
  input = input.slice(4);
  var tanResult = Math.tan(eval(input));
  result.textContent = formatNumber(tanResult);
}

function sqrt() {
  input = input.slice(2);
  var sqrtResult = Math.sqrt(eval(input));
  result.textContent = formatNumber(sqrtResult);
}


function formatNumber(value) {
  let factor = Math.pow(10, 9);
  let roundedValue = Math.round(value * factor) / factor;
  return roundedValue.toString();
}