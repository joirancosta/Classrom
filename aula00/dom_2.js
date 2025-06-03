const guest_1 = document.querySelector("#guest-1")
console.log(guest_1.textContent) // -> retorna o conteudo visível e oculto
console.log(guest_1.innerText) // -> retorna somente o conteudo visível
console.log(guest_1.innerHTML) // -> retorna o HTML como texto
//guest_1.textContent = "Joiran" -> Vai eliminar a tag span
//console.log(guest_1.textContent)
const guest_2 = document.querySelector("#guest-1 span")
console.log(guest_2.textContent)
guest_2.textContent = "Julian"
console.log(guest_2.textContent)

const input = document.querySelector("#name")
// adiciona uma classe
input.classList.add("input-error")
// remove uma classe
input.classList.remove("input-error")
// Se não tiver a classe adicona. Se tem, remove
input.classList.toggle("input-error")

const button = document.querySelector("button")
// Modifica as propriedades CSS do elemento
button.style.backgroundColor = "red"

const guests = document.querySelector("ul")
const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
guestName.classList.add("hide")
guestName.textContent = "Joao"
// adiciona após o último filho
newGuest.append(guestName)
console.log(newGuest)

const newName = document.createElement("span")
// adiociona antes do primeiro filho
newName.textContent = "Pedro"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Maria"
// é mais simples e aceita  apenas um elemento
newGuest.appendChild(guestSurname)

newGuest.prepend(newName)

guests.append(newGuest)

const input_1 = document.querySelector("input")
// Atualizar um atributo
input_1.setAttribute("disabled", true)
input_1.setAttribute("type", "file")
input_1.removeAttribute("id")