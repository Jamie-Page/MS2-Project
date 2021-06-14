document.addEventListener('DOMContentLoaded', () => {
    //card options 
    const cardArray = [  /* Two of each for a matching set of cards */
        {
            name: 'ada',
            img: 'images/ada.png'
        },
         {
            name: 'ada', 
            img: 'images/ada.png'
        },
         {
            name: 'etherium',
            img: 'images/etherium.png'
        },
         {
            name: 'etherium',
            img: 'images/etherium.png'
        },
         {
            name: 'bitcoin',
            img: 'images/bitcoin.png'
        },
        {
            name: 'bitcoin',
            img: 'images/bitcoin.png'
        },
        {
            name: 'tether',
            img: 'images/tether.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
    ]

})

cardArray.sort(() => 0.5 - Math.Random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []/* PUT A VAR EACH TIME A NEW POSSIBLITY COMES IN */


/* creating the board */ 

function createBoard() {

    for (let i = 0; i < cardArray, length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png') /* need to change this for my images in future */
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipcard)
        grid.appendChild(card) //grid here and the grid uptop match


    }

}
//check for matches 
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen [1]) {
        alert('You found a match.')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
       cards[optionOneId].setAttribute('src', 'images/blank.png')
       cards[optionTwoId].setAttribute('src', 'images/blank.png')
       alert('Sorry, Please try again.')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'congratulation! You found them all'
    }
    
}


//flip your card

function flipCard(){
  var cardId = this.getAttribute('data-id')  
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if (cardsChosen.length === 2 ) {
      setTimeout(checkForMatch, 500)
  }
}

createBoard()