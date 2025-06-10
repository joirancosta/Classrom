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
