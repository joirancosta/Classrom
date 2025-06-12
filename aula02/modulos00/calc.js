export class Calc
{
  name = "Triste"
  suma(a, b)
  {
    return a + b
  }
  multiplicacao(a, b)
  {
    return a * b
  }
}

// default export - é a função padrão fornecida pelo módulo
/*export default */function sum(a, b)
{
  return a + b
}
// named export - cada método é importado pelo seu próprio nome de exportação
/*export */function multiply(a, b)
{
  return a * b
}

export {sum, multiply}
// export {sum as sumTwoNumbers, multiply as multiplyTwoNumbers}