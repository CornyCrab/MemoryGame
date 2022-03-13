const cardArray = [
    {
        name: 'day',
        img: 'images/nature.png',
    },
    {
        name: 'blue',
        img: 'images/blue.png',
    },
    {
        name: 'green',
        img: 'images/green.png',
    },
    {
        name: 'night',
        img: 'images/night.png',
    },
    {
        name: 'orange',
        img: 'images/orange.png',
    },
    {
        name: 'pink',
        img: 'images/pink.png',
    },
    {
        name: 'day',
        img: 'images/nature.png',
    },
    {
        name: 'blue',
        img: 'images/blue.png',
    },
    {
        name: 'green',
        img: 'images/green.png',
    },
    {
        name: 'night',
        img: 'images/night.png',
    },
    {
        name: 'orange',
        img: 'images/orange.png',
    },
    {
        name: 'pink',
        img: 'images/pink.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('amongus')
    
    if (optionOneId == optionTwoId){
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
       
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again!')
    }
    resultDisplay.innerHTML = cardsWon.length  //или .textContent вместо innerHTML
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations, you found them all!'//или .textContent вместо innerHTML
    }
}
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}


