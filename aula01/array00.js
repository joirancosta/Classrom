const newArray_1 = new Array()
console.log(newArray_1)
console.log(newArray_1.length)
const available = new Array(10)
console.log(available)
console.log(available.length)
let fruits = ["Apple","Strawberry","Wattermellon","Banana","Lemon","Orange"]
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
console.log(fruits)
// Encontra e retorna o índice do elemento no Array
let position_1 = fruits.indexOf("Lemon")
console.log(position_1)
// Retorna -1, pois o elemento não existe no array
let position_2 = fruits.indexOf("Grape")
console.log(position_2)
// Remove um item pela posição do índice (1 é o número de ítens para remover)
fruits.splice(position_1, 1)
console.log(fruits)
fruits.splice(1, 2)
console.log(fruits)
const array = [1,2,3,4,5]
array.splice(2, 1,"x","y","z")
console.log(array)
let myArray = ["Um texto", 10, true, function() {console.log("Função dentro do Array!")}, {name: "Fulano", email: "fulano@email.com"}]
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]()
console.log(myArray[4].name, myArray[4].email)
// Verifica se um ítem existe no Array
console.log(fruits.includes("Apple"))
console.log(fruits.includes("Grape"))