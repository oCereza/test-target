function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  if (numero === 0 || numero === 1 || b === numero) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
  }
}

// altere este valor para testar com outro número
let numeroInformado = 21;

verificaFibonacci(numeroInformado);

//para visualizar o resultado, basta executar o comando "node questao_2" no terminal.
