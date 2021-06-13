document.addEventListener('DOMContentLoaded', () => {
    //card options 
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
         {
            name: 'fries', /* need to change all of these for each image chosen */
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
         {
            name: 'fries',
            img: 'images/fries.png'
        },
    ]

})

const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []


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
        alert('You founf a match')
        cards[optionOneId].setAttribute('src', 'images ')
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