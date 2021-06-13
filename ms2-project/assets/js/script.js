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
/* creating the board */ 

functuion createBoard() {

    for (let i = 0 < cardArray, length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png') /* need to change this for my images in future */
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipcard)
    }

}