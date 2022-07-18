const mainContainer = document.querySelector('.main-container')
const thanksContainer = document.querySelector('.thanks-container')
const submitButton = document.getElementById('submit-button')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn-rate')

rates.forEach( rate => {
    rate.addEventListener('click', activeButton);
});


function activeButton(event) {
rates.forEach(rate => {
    rate.classList.remove('active');
})
    event.target.classList.add('active')

}


rates.forEach( rate => {
    rate.addEventListener('click',  () => {     
        
        rating.innerHTML = rate.innerHTML
        
        if(rating.innerHTML > 0) {
            submitButton.addEventListener('click', () => {
                thanksContainer.classList.remove("hidden")
                mainContainer.style.display = "none"
            }) 
        }
    })
})

