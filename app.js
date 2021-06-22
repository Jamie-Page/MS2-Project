document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'bitcoin',
            img: 'images/bitcoin.jpg'
        },
        {
            name: 'bitcoin',
            img: 'images/bitcoin.jpg'
        },
        {
            name: 'etherium',
            img: 'images/etherium.jpg'
        },
        {
            name: 'etherium',
            img: 'images/etherium.jpg'
        },
        {
            name: 'litecoin',
            img: 'images/litecoin.jpg'
        },
        {
            name: 'litecoin',
            img: 'images/litecoin.jpg'
        },
        {
            name: 'neo',
            img: 'images/neo.jpg'
        },
        {
            name: 'neo',
            img: 'images/neo.jpg'
        },
        {
            name: 'tether',
            img: 'images/tether.jpg'
        },
        {
            name: 'tether',
            img: 'images/tether.jpg'
        },
        {
            name: 'ada',
            img: 'images/ada.jpg'
        },
        {
            name: 'ada',
            img: 'images/ada.jpg'
        }

    ];
    cardArray.sort(()=>0.5-Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    //create your board
    function createBoard(){
        for(let i = 0;i<cardArray.length;i++){
          var card = document.createElement('img')
          card.setAttribute('src','images/doge.jpg') /* this was blank too */
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
            cards[optionOneId].setAttribute('src','images/thumbs-up.jpg')
            cards[optionTwoId].setAttribute('src','images/thumbs-up.jpg') /* this was white.jpg*/
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src','images/doge.jpg')
            cards[optionTwoId].setAttribute('src','images/doge.jpg')
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
})