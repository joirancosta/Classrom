let message = "Estou estudando os fundamentos do Javascript."
console.log(message)
// Exibir em maiúsculo
console.log(message.toUpperCase())
// Exibir em minusculo
console.log(message.toLocaleLowerCase())
// Comprimento de uma string
console.log(message.length)
let password ="12345"
if (password.length < 6)
  console.log("A senha deve ter ao menos 6 caracteres")
// Quantos dígitos tem um número
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)
// Substituindo parte de um texto
console.log(message.replace("Javascript", "HTML"))
console.log(message)
// Extraindo uma parte da string (start, end)