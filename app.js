// Global variable 
const navbarEl = document.getElementById('navbar')
const donationBtnEl = document.getElementById('donation-btn')
const historyBtnEl = document.getElementById('history-btn')
const donationSectionEl = document.getElementById('donation-section')
const historySectionEl = document.getElementById('history-section')
const mainBalanceEl = document.getElementById('main-balance')
let modalEl = document.getElementById('modal-section')
const modalCloseBtn = document.getElementById('close-btn')

// Donation Button 
donationBtnEl.addEventListener('click', function(){
    historySectionEl.classList.add("hidden")
    donationSectionEl.classList.remove("hidden")
    historyBtnEl.classList.add("bg-transparent")
    donationBtnEl.classList.remove("bg-transparent")
})

// History button 
historyBtnEl.addEventListener('click', function(){
    donationSectionEl.classList.add("hidden")
    historySectionEl.classList.remove("hidden")
    donationBtnEl.classList.add("bg-transparent")
    historyBtnEl.classList.remove("bg-transparent")
})

// Blog Button 
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "/blog.html"
})

// common function for extract value
function extractValue (inputId, titleId, CardBalanceId){
    const inputIdValue = document.getElementById(inputId)
    const inputIdEl =parseFloat(document.getElementById(inputId).value) 
    const titleIdEl = document.getElementById(titleId).innerText
    let cardBalanceIdEl = document.getElementById(CardBalanceId)
    let cardBalanceIdElValue = parseFloat(cardBalanceIdEl.innerText)
    const mainBalance = parseFloat(mainBalanceEl.innerText)

    calculateDonation(inputIdValue, inputIdEl, titleIdEl, cardBalanceIdEl, mainBalance, cardBalanceIdEl, cardBalanceIdElValue)
}



// common function of calculate donation 
function calculateDonation (inputIdValue, inputIdEl, titleIdEl, CardBalanceIdEl, mainBalance,cardBalanceIdEl, cardBalanceIdElValue){

    


    if(inputIdEl <= 0 || !inputIdEl || typeof inputIdEl !== 'number' ){
        alert("Please give valid amount")
        return
    }

    if(mainBalance < inputIdEl){
        alert("You don't have enough money to donate")
        return
    }
    

    let totalCardBalance = cardBalanceIdElValue + inputIdEl

    cardBalanceIdEl.innerText = totalCardBalance
    inputIdValue.value = ""
    

    

    const mainBalanceTotal = mainBalance - inputIdEl
    mainBalanceEl.innerText = mainBalanceTotal

    historySectionEl.innerHTML += `
    <div class="border rounded p-5 ">
    <div class="text-2xl font-bold"><span>${inputIdEl}</span> Taka is donated for <span>${titleIdEl}</span></div>
    <div class="text-gray-400">Date: ${new Date()}</div>
    </div>
    `

    // Modal style 
    modalShow()
}

// Modal function 
function modalShow(){
    modalEl.classList.remove('hidden')
    modalEl.classList.add('flex')
}

modalCloseBtn.addEventListener('click',function(){
    modalEl.classList.add('hidden')
    modalEl.classList.remove('flex')
})



