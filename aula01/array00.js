const newArray_1 = new Array()
console.log(newArray_1)
console.log(newArray_1.length)
const available = new Array(10)
console.log(available)
console.log(available.length)
let fruits = ['Apple','Banana','Orange']
console.log(fruits)
// Acessa a quantidade de itens do Array
console.log(fruits.length)
// Acessa o item pelo índice
console.log(fruits[0])
// Tenta acessar um índice que não existe
console.log(fruits[7])
// Obtém dinamicamente o último item
console.log(fruits[fruits.length - 1])

const fullName = "Fulano Ciclano de Tal"
// Cria um Array com os nome separando pelo espaço
console.log(fullName.split(" "))
// Cria um Array com as letras
console.log(Array.from(fullName))
let user_1 = []
console.log(user_1)
// Adiciona um item no final do array
user_1.push("Ciclano")
user_1.push("Fulano")
user_1.push("DeTal")
console.log(user_1)
// Adiciona um item no início do array
user_1.unshift("Fulana")
console.log(user_1)
// Remove do início do Array
user_1.shift()
console.log(user_1)
// Remove do final do Array
user_1.pop()
console.log(user_1)