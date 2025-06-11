const address1 = 
{
  street: "Av. Brasil",
  number: 20
}
// Isso não é uma cópia. É uma referência
const address2 = address1
console.log(address1, address2)
address2.number = 30
console.log(address1, address2)
// Aqui estamos criando um novo objeto utilizando as propriedades e valores do address1
const address3 = {...address1}
address3.number = 10
console.log(address1, address3)

const address4 = {...address1, number: 40}
console.log(address1, address4)
// Exemplo de referência de Array
const list1 = ["Apple", "Banana"]

const list2 = list1
console.log(list1, list2)
list2.push("Watermelon")
console.log(list1, list2)

const list3 =[...list1]
console.log(list1, list3)
list3.push("Orange")
console.log(list1, list3)

const list4 =[...list1, "Lemon"]
console.log(list1, list4)

// Shallow Copy (cópia superficial): não pega os itens aninhados
const htmlCourse =
{
  course: "HTML",
  studens: [
    {
      name: "Fulano",
      email: "fulano@email.com"
    }
  ]
}
console.log(htmlCourse)

const jsCourse1 =
{
  ...htmlCourse,
  course: "Javascript 1",
}
// Vai modificar o htmlCourse também, studens é uma referência e não uma cópia
jsCourse1.studens.push(
  {
    name: "Ciclano",
    email: "ciclano@email.com"
  }
)
console.log(htmlCourse, jsCourse1)

// Deep Copy (cópia profunda)
const jsCourse2 =
{
  ...htmlCourse,
  course: "Javascript 2",
  studens: [...htmlCourse.studens,
    {
      name: "Beltrano",
      email: "beltrano@email.com"
    }
  ]
}

console.log(htmlCourse, jsCourse2)

const jsCourse3 =
{
  ...htmlCourse,
  course: "Javascript 3",
  studens: [...htmlCourse.studens]
}
jsCourse3.studens.push(
  {
    name: "João",
    email: "joao@email.com"
  }
)
console.log(htmlCourse, jsCourse3)

const jsCourse4 =
{
  ...htmlCourse,
  course: "Javascript 4",
}
jsCourse4.studens = [
  ...htmlCourse.studens,
  {
    name: "Pedro",
    email: "pedro@email.com"
  }
]
console.log(htmlCourse, jsCourse4)