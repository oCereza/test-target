function inverterString(texto) {
  let invertida = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }
  return invertida;
}

// altere este valor para testar com outra string
const original = "Olá Mundo!";
const resultado = inverterString(original);

console.log("String original:", original);
console.log("String invertida:", resultado);

//para visualizar o resultado, basta executar o comando "node questao_5" no terminal.
