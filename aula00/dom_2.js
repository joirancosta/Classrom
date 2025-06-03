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