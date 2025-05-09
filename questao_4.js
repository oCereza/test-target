const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const total = Object.values(faturamentoPorEstado).reduce(
  (acc, val) => acc + val,
  0
);

console.log("Percentual de representação por estado:\n");

for (const estado in faturamentoPorEstado) {
  const percentual = (faturamentoPorEstado[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

//para visualizar o resultado, basta executar o comando "node questao_4" no terminal.
