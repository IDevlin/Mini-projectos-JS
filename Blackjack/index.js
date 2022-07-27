let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard ]
let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
sumEl = document.querySelector('.sum-el')
cardsEl = document.getElementById('cards-el')

// get random card

const getRandomCard = () => {
   
}

const startGame = () => {

  rederGame()
}

const rederGame = () => {
  cardsEl.textContent = 'Cards: ' 
  for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + ' '
  }
    console.log(cards)
   //render out ALL the cards we have
   sumEl.textContent = `Sum: ${sum}`
   if (sum <= 20) {
   message = 'Do you want a new card? '
  } else if (sum === 21) {
    message = 'wohoo! You have got BlackJack!'
    hasBlackjack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
   //show message in document
  messageEl.textContent = message
}

const newCard = () => {
   
  let card = 7
  sum += card
  cards.push(card)
  startGame()
}

