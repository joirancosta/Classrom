let execute_01 = true

while (execute_01) 
{
  let response = window.prompt("Desejas continuar? 1 (SIM) ou 2(NÃO)")
  if(response === "2")
    execute_01 = false
}
alert("Segue o fluxo")

let value = 11

do
{
  value++
  console.log(value)
}
while (value < 10)

console.log("Segue o fluxo")

for (/* let */ step= 0; step < 10; step++)
{
  console.log(step)
}

let number = 7

for (step= 0; step <= 10; step++)
{
  console.log(`${number} * ${step} = ${number * step}`)
}

let person = 
{
  name: "Fulano",
  surmane: "Ciclano",
  email: "fulano@email.com"
}

let steps = 1

for (let property in person) 
{
  console.log(steps)
  // Exibe o nome da propriedade
  console.log(property)
  // Exibe o conteúdo da propriedade
  console.log(person[property])
  steps++
}

let students_1 = ["Joao","Maria","Jose"]

for (let index in students_1)
{
  console.log(index)
  console.log(students_1[index])
}

let students_2 = ["Pedro","Tiago","Ana"]

for (let student of students_2)
{
  console.log(student)
}

let user = 
[
  {
    name: "Detal",
    email: "detal@email.com"
  }
]

for (let valor of user)
{
  console.log(valor.email)
}

let option_1 = 3, option_2 = 1

switch (option_1)
{
  case 1:
    console.log("OK")
    break
  case 2:
    console.log("OK")
    break
  case 3:
    console.log("OK")
    break
  default:
    console.log("ERRO")
}

switch (option_2)
{
  case 1:
    console.log("OK")
  case 2:
    console.log("OK")
  case 3:
    console.log("OK")
  default:
    console.log("ERRO")
}

for (let i = 0; i < 10; i++)
{
  if (i === 5)
    break
  console.log(i)
}
for (let i = 0; i < 10; i++)
{
  if (i % 2 === 0)
    continue
  console.log(i)
}