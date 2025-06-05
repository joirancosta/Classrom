// Cria um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos
const user_1 = 
{
  email: "fulano@email.com",
  age: 15,
  name: 
  {
    firstName: "Fulano",
    surname: "Ciclano"
  },
  address : 
  {
    street: "Rua tal",
    number: 0,
    city: "Aquele",
    postal_code: "55555-456"
  },
  message: function() 
  {
    console.log("Ola")
  }
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user_1.email)
// Acessando propriedades de objetos
console.log(user_1.name.firstName)
// Executa o método do objeto
user_1.message()
// Notação de colchetes
console.log(user_1["email"])
console.log(user_1["name"]["firstName"])
user_1["message"]()

const user_2 = 
{
  name: "Jose",
  email: "jose@email.com",
  message: function()
  {
    // console.log(`Oi ${user_2.name}`)
    console.log(`Oi ${this.name}`)
  }
}
user_2.message()
const product = 
{
  name: "Teclado",
  quantity: 100
}
// Acessando a propriedade do objeto
// Atualiza o valor de propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)
console.log(product.name)
product.name = "Mouse"
console.log(product.name)
product["quantity"] = 50
console.log(product)

const user_3 = 
{
  id: 1,
  name: "Jose",
  // address:
  // {
  //   street: "Avenida Brasil",
  //   city: "São Paulo",
  //   geo:
  //   {
  //     latitude: 47.8081,
  //     longitude: 17.5674
  //   }
  // },
  message: function ()
  {
    console.log(`Olá ${this.name}!`)
  }
}
// OPERADOR OPCIONAL CHAINING
console.log(user_3?.address?.street)
user_3.message?.()
// OPERADOR DE COALESCÊNCIA NULA
let content_1 = null, content_2 = true
let content_3 = undefined, content_4 = "Teste"
console.log(content_1 ?? "Contéudo padrão")
console.log(content_2 ?? "Contéudo padrão")
console.log(content_3 ?? "Contéudo padrão")
console.log(content_4 ?? "Contéudo padrão")
const user_4 =
{
  name: "Maria",
  avatar: undefined
}
console.log(user_4.avatar ?? "default.png")

function createProduct(name)
{
  const product = {}
  product.name = name
  product.details = function()
  {
    console.log(`O nome do produto é ${this.name}`)
  }
  return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora
const product_1 = new createProduct("Teclado")
console.log(product_1.name)
product_1.details()

const product_2 = new createProduct("Mouse")
console.log(product_2.name)
product_2.details()

console.log(product_1 === product_2)

// Exemplos de funções construtoras disponíveis no próprio Javascript
let myName = new String("Joiran")
console.log(myName)
let price = "40.6".replace(".", "")
console.log(price)
let date = new Date("2024-1-1")
console.log(date)

function Person(name)
{
  this.name = name
  this.message = function()
  {
    console.log(`Oi ${this.name}`)
  }
}
const person_1 = new Person("Julian")
console.log(person_1.name)
person_1.message()
const person_2 = new Person("Ramon")
console.log(person_2.name)
person_2.message()