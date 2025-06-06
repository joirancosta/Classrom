// Exibe a data e hora atual
console.log(new Date())
// Exibe a data e hora de referência (considera o fuso-horário)
console.log(new Date(0))
// Exibe o número de milissegundos
console.log(new Date().getTime())
// Define a data com ano, mês (0-11), dia
console.log(new Date(2024, 6, 3))
// Define a data e hora, minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0))
// Definindo data e hora com String
console.log(new Date("2024-07-03T14:30:00"))
console.log(new Date("July 3, 2024 14:30:00"))

let date_1 = new Date("2024-08-04T14:30:10")
// Dia da semana de 0 a 6 (Domingo é 0)
console.log(date_1.getDay())
// Dia do mês
console.log(date_1.getDate())
// Mês (0 a 11)
console.log(date_1.getMonth() + 1)
// Ano
console.log(date_1.getFullYear())
// Hora
console.log(date_1.getHours())
// Minutos
console.log(date_1.getMinutes())
// Segundos
console.log(date_1.getSeconds())
// Milisegundos
console.log(date_1.getMilliseconds())

let date_2 = new Date("July 3, 2024 14:30:00")
console.log(date_2)
// Modifica o ano
date_2.setFullYear(2030)
// Modifica o mês (começa com o 0)
date_2.setMonth(0)
// Modifica o dia
date_2.setDate(10)
// Modifica as horas
date_2.setHours(23)
// Modifica os minutos
date_2.setMinutes(46)
// Modifica os segundos
date_2.setSeconds(15)
// Modifica os milissegundos
date_2.setMilliseconds(97)
console.log(date_2)

let date_3 = new Date("2024-07-02T14:30:00")
// Formata para o dia sempre ter 2 dígitos
let day = date_3.getDate().toString().padStart(2, "0")
console.log(day)
// Formata para o mês sempre ter 2 dígitos
let month = (date_3.getMonth() + 1).toString().padStart(2, "0")
console.log(month)
let year = date_3.getFullYear()
let hour = date_3.getHours()
let minute = date_3.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minute}`)

let date_4 = new Date("2024-07-02T14:30:00")
// Converte para String
console.log(date_4.toString())
// Retorna somente a data
console.log(date_4.toDateString())
// Retorna somente a hora
console.log(date_4.toTimeString())

let date_5 = new Date("2024-07-02T14:30:15")
// Exibe a data e hora no formato local
console.log(date_5.toLocaleDateString())
console.log(date_5.toLocaleTimeString())
// Exibe a data e hora no formato escolhido
console.log(date_5.toLocaleDateString("en"))
console.log(date_5.toLocaleTimeString("en"))

let date_6 = new Date("2024-07-02T14:30:10")

console.log(date_6.toLocaleString())
console.log(date_6.toLocaleString("en"))
console.log(date_6.toLocaleString("pt-BR"))
console.log(date_6.toLocaleString("pt-BR",
{
  dateStyle: "short",
}))
console.log(date_6.toLocaleString("pt-BR",
{
  dateStyle: "long",
}))
console.log(date_6.toLocaleString("pt-BR",
{
  dateStyle: "medium",
}))
console.log(date_6.toLocaleString("pt-BR",
{
  dateStyle: "full",
}))
console.log(date_6.toLocaleString("pt-BR",
{
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
}))

let amount = 12.5
console.log(amount.toLocaleString("pt-BR",
{
  style: "currency",
  currency: "BRL"
}))
// Intl é a API de Internacionalização do ECMAScript
// Obtém informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)
// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date_7 = new Date()
// Obtém a diferença em minutos do timezone
console.log(date_7.getTimezoneOffset())
// Obtém a diferença em horas do timezone
console.log(date_7.getTimezoneOffset() / 60)

const dateWithTimezone = new Date()
console.log(new Date().toLocaleString())
console.log(dateWithTimezone.toISOString())
const dateWithTimezone_2 = new Date("2025-06-06T01:26:20.793-03:00")
console.log(dateWithTimezone_2.toLocaleString())