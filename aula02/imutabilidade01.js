const book1 =
{
  title: "Objetos Imutáveis",
  category: "Javascript",
  author: {
    name: "Fulano",
    email: "fulano@email.com"
  },
}
console.log(book1)
book1.category = "HTML"
console.log(book1)
// Congela o objeto e impede a modificação
Object.freeze(book1)
book1.category = "CSS" // Não modifica
console.log(book1)
// O Object.freeze() não impede modificações profundas em objetos aninhados (Shallow freezing)
book1.author.name = "Ciclano"
console.log(book1)

const book2 =
{
  title: "Objetos Imutáveis 2",
  category: "Javascript",
  author: {
    name: "Beltrano",
    email: "beltrano@email.com"
  },
}
function deepFreeze(object)
{
  // Obtém um Array com todas as propriedades do objeto
  const props = Reflect.ownKeys(object)
  // console.log(props)
  // Itera sobre todas as propriedades do objeto
  for (const prop of props)
  {
    // Obtém o valor associado à propriedade atual
    const value = object[prop]
    // console.log(value)
    // Verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados
    if (value && typeof value === "object" || typeof value === "function")
    {
      deepFreeze(value)
    }
  }
  // Retorna o objeto congelado
  return Object.freeze(object)
}
// Chama a função para congelar o objeto com Deep Freeze (congelamento profunda)
deepFreeze(book2)
console.log(book2)
book2.category = "HTML"
console.log(book2)
book2.author.name = "Ciclano"
console.log(book2)

const book3 =
{
  title: "Objetos Imutáveis 3",
  category: "Javascript",
  author: {
    name: "Zezinho",
    email: "zezinho@email.com"
  },
}
const updatedBook1 = 
{
  ...book3,
  title: "Criando um Front-end moderno com HTML",
  category: "html",
  type: "Programming",
}
// Original intacto
console.log(book3)
// Modificado
console.log(updatedBook1)
// Utilizando operador de desestruturação (rest operator) para remover propriedades
const {category, ...updatedBook2} = book3
console.log(updatedBook2)