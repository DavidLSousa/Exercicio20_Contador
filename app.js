/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

setTimeout(() => {
  console.log('Um segundo e meio se passaram desde que a página foi carregada')
}, 1500)

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

// Contador => 0.1
// const counterContainer = document.querySelector('.counter-container')
// const buttonInitCounter = document.querySelector('.button-init-counter')
// const buttonStopCounter = document.querySelector('.button-stop-counter')

// let timer = null
// let condition = true

// const incrementCounter = () => {
//   const counter = Number(counterContainer.textContent)
//   const incrementedCounter = counter + 0.1
//   counterContainer.textContent = incrementedCounter.toFixed(1)
// }

// const stopCounter = () => {
//   clearInterval(timer)
//   counterContainer.textContent = 0
//   condition = true
// }

// buttonInitCounter.addEventListener('click', () => {
//   if (condition) {
//     timer = setInterval(incrementCounter, 100)
//   }
//   condition = false
// })

// buttonStopCounter.addEventListener('click', stopCounter)

/* ---------------------------------------Contador => 1.0 com a condição------------------------------------------ */
// Contador => 1.0 com a condição
// const counterContainer = document.querySelector('.counter-container')
// const buttonInitCounter = document.querySelector('.button-init-counter')
// const buttonStopCounter = document.querySelector('.button-stop-counter')

// let timer = null
// let condition = true

// const incrementCounter = () => {
//   const incrementedCounter = Number(counterContainer.textContent) + 1
//   counterContainer.textContent = incrementedCounter
// }

// const stopCounter = () => {
//   clearInterval(timer)
//   counterContainer.textContent = 0
//   condition = true
// }

// buttonInitCounter.addEventListener('click', () => {
//   if (condition) {
//     timer = setInterval(incrementCounter, 1000)
//   }
//   condition = false
// })

// buttonStopCounter.addEventListener('click', stopCounter)

/* ---------------------------------------Contador => 1.0 sem a condição------------------------------------------ */
// Contador 1.0 sem a condição
const counterContainer = document.querySelector('.counter-container')
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')

let timer = null

const incrementCounter = () => {
  const incrementedCounter = Number(counterContainer.textContent) + 1
  counterContainer.textContent = incrementedCounter
}

const stopCounter = () => {
  clearInterval(timer)
  counterContainer.textContent = 0
}

buttonInitCounter.addEventListener('click', () => {
  timer = setInterval(incrementCounter, 1000)
})

buttonStopCounter.addEventListener('click', stopCounter)


/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
