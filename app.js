const colors = ['green', 'red','rgba(133,122,200)','#f15025'];
const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

console.log(btn,color)

btn.addEventListener('click', function(){
    console.log('clicou no botao')
    const randomNumber = getRandomNumbers()

    const maincolor = document.querySelector('#main-color')
    maincolor.style.backgroundColor=colors [randomNumber]
    color.textContent = colors[getRandomNumbers()]

})

function getRandomNumbers(){
    return Math.floor (Math.random()* colors.length)
}