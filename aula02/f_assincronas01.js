// Função que retorna uma Promise
function asyncFunction()
{
  return new Promise((resolve, reject) =>
  {
    // Simila uma operação assíncrona
    setTimeout(() =>
    {
      const isSucess = true
      if (isSucess)
      {
        resolve("A operação foi concluída com sucesso!")
      }
      else
      {
        reject("Algo de errado!")
      }
    }, 3000) // Simula uma operação que leva 3 segundos
  })
}
// Visualizando que o retorno é uma promise
// console.log(asyncFunction())
// const response = asyncFunction()
// console.log(response)
/*
asyncFunction().then((response) => 
{
  console.log("Sucesso:", response)
}).catch((error) => 
{
  console.log("Erro:", error)
}).finally(() => 
{
  console.log("The end")
})
*/
async function fetch() // const fetch = async () =>
{
  // const response = await asyncFunction()
  // console.log(response)
  try {
    const response = await asyncFunction()
    console.log("Sucesso:", response)
  } catch (error) {
    console.log("Erro:", error)
  } finally {
    console.log("The end")
  }

}
fetch()