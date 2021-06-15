document.addEventListener('DOMContentLoaded', () => {
    //card options 
    const cardArray = [  /* Two of each for a matching set of cards */
        {
            name: 'ada',
            img: 'memory-game/images/ada.jpg'
        },
         {
            name: 'ada', 
            img: 'memory-game/images/ada.jpg'
        },
         {
            name: 'bitcoin',
            img: 'memory-game/images/bitcoin.jpg'
        },
         {
            name: 'bitcoin',
            img: 'memory-game/images/bitcoin.jpg'
        },
         {
            name: 'etherium',
            img: 'memory-game/images/etherium.jpg'
        },
        {
            name: 'etherium',
            img: 'memory-game/images/etherium.jpg'
        },
        {
            name: 'litecoin',
            img: 'memory-game/images/litecoin.jpg'
        },
        {
            name: 'litecoin',
            img: 'memory-game/images/litecoin.jpg'
        },
        {
            name: 'neo',
            img: 'memory-game/images/neo.jpg'
        },
        {
            name: 'neo',
            img: 'memory-game/images/neo.jpg'
        },
         {
            name: 'tether',
            img: 'memory-game/images/tether.jpg'
        },
        {
            name: 'tether',
            img: 'memory-game/images/tether.jpg'
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

cardArray.sort(()=>0.5-Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];/* PUT A VAR EACH TIME A NEW POSSIBLITY COMES IN */
    //create your board


    function createBoard(){
        for(let i = 0;i<cardArray.length;i++){
          var card = document.createElement('img')
          card.setAttribute('src','memory-game/images/blank.jpg')
          card.setAttribute('data-id',i)
          card.addEventListener('click',flipCard)
          grid.appendChild(card)
        }
    }
    //check matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
            alert('You Found A Match!!!')
            cards[optionOneId].setAttribute('src','memory-game/images/white.jpg')
            cards[optionTwoId].setAttribute('src','memory-game/images/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src','memory-game/images/blank.jgp')
            cards[optionTwoId].setAttribute('src','memory-game/images/blank.jgp')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent ='Congratulations! you found them all!'

        }
    }

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChosen.length===2)
        {
            setTimeout(checkForMatch,500)
        }
    }
    createBoard();
