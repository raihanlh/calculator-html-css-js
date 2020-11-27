var operations = ['+', '-', '/', '*'];

const addNumber = (elmt) => {
  var expression = document.querySelector("p#calc-screen").textContent;
  if ((expression === '0') || (expression === 'NaN')) {
    document.querySelector("p#calc-screen").textContent = elmt.textContent;
  }
  else {
    document.querySelector("p#calc-screen").textContent = expression + elmt.textContent;
  }
}

const addOperation = (elmt) => {
  var expression = document.querySelector("p#calc-screen").textContent;
  if (expression !== 'NaN')
  {
    if (operations.includes(expression.slice(-1)))
    {
      document.querySelector("p#calc-screen").textContent = expression.slice(0, -1) + elmt.textContent;
    }
    else
    {
      document.querySelector("p#calc-screen").textContent = expression + elmt.textContent;
    }
  }
}

const reset = () => {
  document.querySelector("p#calc-screen").textContent = 0;
}

const del = () => {
  var expression = document.querySelector("p#calc-screen").textContent;
  if ((expression.length === 1) || (expression === 'NaN'))
  {
    document.querySelector("p#calc-screen").textContent = '0';
  }
  else if (expression !== '0')
  {
    document.querySelector("p#calc-screen").textContent = expression.slice(0, -1)
  }
}

const calculate = () => {
  var expression = document.querySelector("p#calc-screen").textContent;

  var result = eval(expression)
  document.querySelector("p#calc-screen").textContent = result;
}