const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
const minhaStringComTrim = minhaString.trim()
console.log (`${minhaStringComTrim}`)

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log (`
Quantidade de caracteres antes da remoção de espaço: ${minhaString.length}
Quantidade de caracteres depois da remoção de espaço:${minhaStringComTrim.length}
`)

// c) Substitua os traços `________` por “sticioso”.
const novaString = minhaStringComTrim.replaceAll("________", "sticioso")
console.log (`${novaString}`)