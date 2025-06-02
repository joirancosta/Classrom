let age = 16
console.log(age >= 18 ? "Apto a dirigir" : "Proibido a dirigir")
console.log(false ? 'VERDADEIRO' : 'FALSO')
console.log(0 ? 'VERDADEIRO' : 'FALSO')
console.log(-0 ? 'VERDADEIRO' : 'FALSO')
console.log("" ? 'VERDADEIRO' : 'FALSO')
console.log(null ? 'VERDADEIRO' : 'FALSO')
console.log(undefined ? 'VERDADEIRO' : 'FALSO')
console.log(NaN ? 'VERDADEIRO' : 'FALSO')
console.log(true ? 'VERDADEIRO' : 'FALSO')
console.log({} ? 'VERDADEIRO' : 'FALSO')
console.log([] ? 'VERDADEIRO' : 'FALSO')
console.log(1 ? 'VERDADEIRO' : 'FALSO')
console.log(-1 ? 'VERDADEIRO' : 'FALSO')
console.log(3.14 ? 'VERDADEIRO' : 'FALSO')
console.log("0" ? 'VERDADEIRO' : 'FALSO')
console.log("A" ? 'VERDADEIRO' : 'FALSO')
console.log(" " ? 'VERDADEIRO' : 'FALSO')
console.log(Infinity ? 'VERDADEIRO' : 'FALSO')
console.log(-Infinity ? 'VERDADEIRO' : 'FALSO')
let hour = 11
if (hour <= 12)
  console.log("Bom dia")
hour = 13
if (hour <= 12)
{
  console.log("Bom dia")
}
let idade = 23
if (idade < 18)
{
  console.log("Proibido a dirigir")
}
else
{
  console.log("Apto a dirigir")
}
let hora = 21
if (hora <= 12)
{
  console.log("Bom dia")
}
else if (hora > 12 && hora <= 18)
{
  console.log("Boa tarde")
}
else if (hora > 18 && hora <= 24)
{
  console.log("Boa noite")
}
else
{
  console.log("Informação errada")
}
let option = 1
switch (option)
{
  case 1:
    console.log("Consultar pedido")
    console.log("Aguarde")
    break
  case 2:
    console.log("Falar com o atendente")
    break
  case 3:
    console.log("Cancelar pedido")
    break
  default:
    console.log("Opção invalida")
}
console.log(result_1) // -> retorna um erro no console
try
{
  console.log(result_2)
}
catch (error)
{
  console.log(error)
  console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!")
}
finally
{
  console.log("Fim")
}
let result_3 = 0
try
{
  if (result_3 === 0)
  {
    throw new Error("O valor é igual a zero")
  }
}
catch (error)
{
  console.log(error)
}
finally
{
  console.log("Fim")
}