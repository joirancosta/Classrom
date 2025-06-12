// setTimeout() executa uma função após um intervalo de tempo especificado
setTimeout(() => 
{
  console.log("Olá, tudo bem?")
}, 3000) // tempo em milissegundos

// setInterval() executa uma função após um intervalo de tempo especificado
let value = 10
const interval = setInterval(() =>
{
  console.log(value)
  value--

  if (value === 0)
  {
    console.log("Olá, tudo bem?")
    // Interrompe o intervalo de execuções
    clearInterval(interval)
  }
}, 1000)