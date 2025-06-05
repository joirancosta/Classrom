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
console.log(message.slice(0, 5))
console.log(message.slice(6, 30))
// Extraindo o final da string (end, start)
console.log(message.slice(-11))
// Remover os espaçoes de em branco no início e no final da string
let textWithSpace = "     Texto de exemplo      "
console.log(textWithSpace)
console.log(textWithSpace.length)
console.log(textWithSpace.trim())
console.log(textWithSpace.trim().length)

const creditCard = "1234567812344928"
console.log(creditCard.length)
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)
// O padStart preenche a string do início
const maskedNumber = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumber)
// O padEnd preenche a string no final
const number = "123"
console.log(number.padEnd(15, "oculto"))
console.log(number.padEnd(10, "#"))
// Separar a String
let text = "Estudar, Aprender, Praticar"
let separate = text.split(",")
console.log(separate)
console.log(message.split(" "))
// Unir a String
// let joined = separate.join()
let joined = separate.join(" - ")
console.log(joined)
// Obtém a posição da palavra
console.log(message.indexOf("estudando"))
// Quando não encontra retorna -1
console.log(message.indexOf("javascript"))
console.log(message.indexOf("Javascript"))
// Verifica se existe a palavra na String
console.log(message.includes("Javascript"))
console.log(message.includes("javascript"))