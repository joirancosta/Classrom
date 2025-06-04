/* regexr.com */
const input = document.querySelector("input")
const form = document.querySelector("form")
// input.addEventListener("input", () => 
// {
//   //console.log(input.value)
//   const value = input.value
//   const regex = /\D+/g
//   // Retorna o padrão que é encontrado na string
//   // console.log(value.match(regex))
//   // Testa se atende o padrão
//   // const isValid = regex.test(value)
//   // console.log(isValid)
// })
form.addEventListener("submit", (event) => 
{
  event.preventDefault()
  const valor = input.value
  const hasNumberRegex = /\d+/g
  if (hasNumberRegex.test(valor))
  {
    alert("O texto tem número. Por favor, digite corretamente")
  }
  else
  {
    alert("Enviado")
  }
  /*
  const regex = /\D+/g
  if (!regex.test(valor))
  {
    console.log(valor)
  }
  else
  {
    alert("Valor não aceito")
  }
  */
  // const value = input.value.replace(regex, "")
  // console.log(value)
})