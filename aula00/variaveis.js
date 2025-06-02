// O ponto e vigula - ; - é opcional
// Javascript é case-sensitive
// Atenção: O Javasscript permite sobreescrever variaveis com o tipo "var"
var user
user = "Fulano"
console.log(user)
var user = "ciclano"
console.log(user)
// O Javascript vai aponter um erro caso uma variavel com o tipo "let" seja sobreescrita
let user = "234"
// let user = "345" -> vai apontar um erro no console.log
// stings com crase - ` - respeitam a formatação do texto
const numero = 1
var email = "fulano@empresa.com"
console.log(email)
email = "cilano@empresa.com"
console.log(email)
consolo.log(typeof email)
console.log(user, email)
let message = "Ola, " + user + ". Voce conectou com o e-mail " + email + "."
console.log(message)
console.log(`Ola, ${user}. Voce conectou com o e-mail ${email}.`)
console.log(10)
consolo.log(typeof 5)
let age = 15
consolo.log(age.toString())
console.log(Number(age))