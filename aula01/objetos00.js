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