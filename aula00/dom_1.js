// Visualizar o conteúdo do document
// console.log(document)
// Obter o title da página
console.log(document.title)
// Acessar o elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log(guest)
// Mostra as propriedades do objeto
console.dir(guest)
//Acessar elemento com class (SELETOR CLASS)
const guestsByCLass = document.getElementsByClassName("guest")
console.log(guestsByCLass)
// Exibir o primeiro elemento da lista
console.log(guestsByCLass.item(0))
console.log(guestsByCLass[1])
// Slecionar uma lista de elementos pela tag
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)

const guest_1 = document.querySelector("#guest-1")
console.log(guest_1)
const guest_2 = document.querySelector(".guest")
console.log(guest_2)
const guest_3 = document.querySelectorAll(".guest")
console.log(guest_3)