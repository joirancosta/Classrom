// O strict mode (modo estrito): ativando esse modo, os erro que eram silenciosos passa a gerar exceções no Javascript
"use strict"
function showMessage()
{
  let personName = "Fulano Silva"
  console.log("Ola,", personName)
}

showMessage()

class Student
{
  get point()
  {
    return 7
  }
}

let student = new Student()
// Tentando mudar uma propriedade de somente leitura
// student.point = 10
console.log(student.point)
// Tentando deletar a propriedade de um objeto que não se pode deletar
// delete window.document
// Tentado passar parametros duplicados
function sum(a,/* a, */ c)
{
  return a/* + a */ + c
}
const result = (1,/* 3,*/ 2) // result = 3 + 3 + 2
/* ------------------------------- */
// destructuring assigment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas
const data_1 = ["Rodrigo Gonçalves", "rodrigo@email.com"]
// Desestruturando array
const [username, email] = data_1
console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]
// Desestruturar somente o primeiro
const [banana] = fruits
console.log(banana)
// Ignorando o primeiro da desestruturação
const [_, apple] = fruits
console.log(apple)
// Ignorando o primeiro e o segundo na desestruturação
const [,, orange] = fruits
console.log(orange)

const product = 
{
  description: "Teclado",
  price: 150
}
const {description, price} = product
console.log("Descrição:", description)
console.log("Preço:", price)

function newProduct({description, price})
{
  console.log("Descrição:", description)
  console.log("Preço:", price)
}
newProduct({description: "Mouse", price: 70})
/* --------------------------- */
// Rest params (...) permite representar um número indefinido de argumentos como um array
function values(/* a,*/...rest)
{
  // console.log(a)
  // Mostra a quantidade de parâmetros
  console.log(rest.length)
  // Exibindo o contédo do array
  console.log(...rest)
  // Exibe o contéudo do rest que é um array
  console.log(rest)
}
values(2, 1, 3, 5, 4)
/* --------------------------- */
// spread (espalhar) permite que um oobjeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos
const numbers = [1, 2, 3]
  console.log(numbers)
  // Spread
  console.log(...numbers)
  //  Criando um objeto
  const data_2 =
  [
    {
      name: "Ciclano",
      mail: "ciclano@email.com",
      avatar: "r.png"
    },
    {
      name: "DeTal",
      mail: "detal@email.com",
      avatar: "t.png"
    }
  ]
  // Utilizando o spread no array com objetos
  console.log(data_2)
  console.log(...data_2)
