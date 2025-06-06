class Person
{
  constructor(name)
  {
    console.log("Olá", name)
  }
}

const person = new Person("Fulano")

class Product
{
  constructor(name)
  {
    this.name = name
  }
}

const product1 = new Product("Teclado")
const product2 = new Product("Mouse")

console.log(product1.name)
console.log(product2.name)

class User1
{
  constructor(name, email)
  {
    this.name = name
    this.email = email
  }
  sendEmail()
  {
    console.log("E-mail enviado para", this.name,"no endereço eletrônico", this.email)
  }
}

const user1 = new User1("Fulano", "fulano@email.com")
user1.sendEmail()

class User2
{
  constructor(message)
  {
    this.message = message
  }
  showMessage1()
  {
    console.log("Essa é uma mensagem!")
  }
  static showMessage2()
  {
    console.log(this.message)
    console.log("Essa é uma outra mensagem!")
  }
  static showMessage3(message)
  {
    console.log(message)
  }
}

const user2 = new User2()
user2.showMessage1()
User2.showMessage2()
User2.showMessage3("Está é mais uma mensagem!")

class Animal
{
  constructor(name, age)
  {
    this.name = name
    this.age = age
  }
  makeNoise()
  {
    console.log("Algum son genérico do animal")
  }
}

class Dog extends Animal
{
  makeNoise()
  {
    console.log("Au-Au")
  }
}

const dog = new Dog("Floquinho")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal
{
  makeNoise()
  {
    console.log("Miau")
  }
  run()
  {
    console.log("Correndo")
  }
}

const cat = new Cat("Panter")
console.log(cat.name)
cat.makeNoise()
cat.run()

const address =
{
  city: "São Paulo",
  country: "Brasil",
}
console.log(address)

const users = ["Joao","Maria","Pedro"]
console.log(users)

const userName = "Fulano Ciclano"
console.log(userName.__proto__)

let obj1 = [], obj2 = []
let index = 300

try {
  // obj1.execute()
  if (index > 99)
    throw new RangeError("Número está fora do intervalo. Escolha um número de 0 à 99.")
} catch (error) {
  if (error instanceof TypeError)
    console.log("Método indisponível")
  if (error instanceof RangeError)
    console.log(error.message)
  // console.log(error)
}
try {
  if (!obj2.includes(17))
    throw new Error("O número 17 não está disponível")
} catch (error) {
  console.log(error)
}

class MyCustomError
{
  constructor(message)
  {
    this.message = "CLASSE DE ERRO COSTOMIZADA: " + message
  }
}

try {
  // throw new Error("Erro genérico")
  throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {
  if (error instanceof MyCustomError)
    console.log(error.message)
  else
    console.log("Não foi possível executar")
}