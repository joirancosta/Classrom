// O método de map() chama a função de callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamado. E no final, devolve o novo array
const products_1 = ["Teclado", "Mouse", "Monitor"]
// Percorre os itens do Array
products_1.map(function(item)
{
  console.log(item)
})
// Sintexe reduzida
products_1.map((product) => console.log(product))
// Utilizando o novo objeto retornado
const formatted = products_1.map((product) =>
{
  // return product.toUpperCase()
  return {
    id: Math.random(),
    description: product,
    price: 150,
  }
})
console.log(formatted)
/* --------------------------- */
// O método filter() cria um novo array com todos os elementos que passaram na condição
const words = ["JavaScript", "HTML", "CSS", "Web"]
// Filtrando palavras que tenham mais de 3 letras
const result_1 = words.filter((word) => word.length > 3)
console.log(result_1)

const products_2 =
[
  {
    description: "Teclado",
    price: 150,
    promotion: true
  },
  {
    description: "Mouse",
    price: 70,
    promotion: false
  },
  {
    description: "Monitor",
    price: 900,
    promotion: true
  },
]
// Exemplo de um filtro de produto na promoção
const promotion = products_2.filter((product) => product.promotion === true)
console.log(promotion)
/* --------------------------- */
// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste
const values_1 = [4, 6, 8, 12]
// Obtendo o primeiro indice do elemento que o valor é maior do que 4
const index = values_1.findIndex((value) => value > 4)
console.log(values_1[index])
// Exemplo de quando não encontra
console.log(values_1.findIndex((value) => value > 12))
/* --------------------------- */
// O método find() retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contratio, undefined é retornado
const values_2 = [5, 12, 8, 130, 44]
// Retorna o primeiro elemento que o valor é maior que 10
const found = values_2.find((value) => value > 10)
console.log(found)
// Exemplos com objetos
const fruits = 
[
  {
    name: "apple",
    quantity: 23,
  },
  {
    name: "banana",
    quantity: 25,
  },
  {
    name: "orange",
    quantity: 52,
  },
]
const result_2 = fruits.find((fruit) => fruit. name === "banana")
console.log(result_2)
/* --------------------------- */
// O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean
// Exemplo de array de idades
const ages = [15, 30, 39, 29]
// Verificando se todas as idades são maiores ou igual a 18
const result_3 = ages.every((age) => age >= 18)
console.log(result_3)
// O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor Boolean
const result_4 = ages.some((age) => age < 18)
console.log(result_4)
/* --------------------------- */
/*
O método reduce() é utilizado para reduzir um array a um único valor
Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor inicial (0)
- Index (index da iteração atual - opcional)
*/
const values_3 = [1, 2, 3, 4, 5]
const sum = values_3.reduce((accumalator, currentValue, index) => 
{
  console.log("ACUMULADOR:", accumalator)
  console.log("CURRENT VALUE:", currentValue)
  console.log("INDEX:", index)
  console.log("SOMA:", accumalator + currentValue)
  console.log("################")
  return accumalator + currentValue
}, 10)
console.log("RESULTADO DA SOMA FINAL:", sum)