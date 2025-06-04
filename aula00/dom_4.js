const ul = document.querySelector("ul")
ul.addEventListener("scroll", () => 
{
  console.log(ul.scrollTop)
  if (ul.scrollTop > 300)
  {
    console.log("Fim da lista")
    ul.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    )
  }
})
const button = document.querySelector("button")
// addEventListener executa sempre
button.addEventListener("click", (event) => 
{
  event.preventDefault()
  console.log("CLICOU")
})
const form = document.querySelector("form")
// onFuncao executa somente o ultimo
form.onsubmit = (event) => 
{
  event.preventDefault()
  console.log("Fez submit no formulário")
}
const input = document.querySelector("input")
// keydown - dispara quando uma qualquer tecla é pressionada
input.addEventListener("keydown", (event) => 
{
  console.log(event.key)
})
// keypress - dispara quando uma tecla de caractere é pressionada
input.addEventListener("keypress", (event) => 
{
  console.log(event.key)
})
input.onchange = () => 
{
  inputChange()
}
function inputChange() 
{  
  console.log("O console mudou")
}