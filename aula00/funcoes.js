function message_1()
{
  console.log("É bom ter você aqui")
}
message_1()
message_1()
message_1()
function message_2(username)
{
  console.log("É bom ter você aqui ", username)
}
message_2("Joiran")
message_2("Jorlene")
let username = "Julian"
message_2("João")
function sum_1(a, b)
{
  console.log(a + b)
}
sum_1(10, 20)
sum_1(5, 3)
function joinText_1(text1, text2, text3)
{
  console.log(text1, text2, text3)
}
joinText_1("Jorlene","Joiran","Julian")
joinText_1("Jorlene","","")
joinText_1("Jorlene")
function joinText_2(text1 = "", text2 = "", text3 = "")
{
  console.log(text1, text2, text3)
}
joinText_2("Jorlene")
joinText_2("Jorlene","Joiran","Julian")
function sum_2(a, b)
{
  let result = a + b
  console.log(result)
}
sum_2(7, 7)
function sum_3(a, b)
{
  let result = a + b
  return result
}
let response = sum_3(5, 6)
console.log(response)
console.log(sum_3(8, 9))
function showMessage_1(message)
{
  console.log(message)
  endLine()
  function endLine()
  {
    console.log("---------")
  }
}
showMessage_1("Fala tu!")
// endLine() -> se chamar uma função fora do escopo retorna um erro, pois ela não existe
/**
 * Authenticates the user
 * @param {String} email user email
 * @param {String} password more than 6 characters
 * @returns {Boolean} 
 */
function singIn(email, password)
{
  /* FLUXO DE AUTENTICAÇÃO DO USUÁRIO */
  return true
}
const showMessage_2 = function()
{
  return "Alegre vida!"
}
console.log(showMessage_2())
let showMessage_3 = function(name)
{
  return "Oi, " + name
}
console.log(showMessage_3("Joiran"))
const showMessage_4 = () =>
{
  return "Alegre vida!"
}
console.log(showMessage_4())
const showMessage_5 = (username) =>
{
  console.log("Boa noite", username)
}
showMessage_5("Gatinha")
function execute(taskName, callBack)
{
  console.log("Executando a tarefa:", taskName)
  callBack()
}
function callBack()
{
  console.log("Tarefa finalizada.")
}
execute("Download do arquivo...", callBack)
execute("Upload do arquivo...", function()
{
    console.log("Função anônima")
})
execute("Excluindo do arquivo...", () =>
{
    console.log("Arquivo excluído!")
})
execute("Salvando arquivo...", () => console.log("Arquivo salvo!"))