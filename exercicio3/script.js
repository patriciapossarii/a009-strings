// //Crie a const para a frase aqui
// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log ( frase)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let replaceFrase = frase.replaceAll ("verde","rosa")
replaceFrase = replaceFrase.replaceAll("azul","laranja")
console.log (replaceFrase)
// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(`
A string possui a palavra \"verde\"? ${replaceFrase.includes("verde")}
A string possui a palavra \"laranja\"? ${replaceFrase.includes("laranja")}
`)

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const replaceFrasToUpper = replaceFrase.replaceAll("mas não deixe o gato sair", "mas não deixe o gato sair".toUpperCase())
console.log(replaceFrasToUpper)