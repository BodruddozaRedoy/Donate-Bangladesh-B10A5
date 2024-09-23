// Global variable 
const navbarEl = document.getElementById('navbar')
const donationBtnEl = document.getElementById('donation-btn')
const historyBtnEl = document.getElementById('history-btn')
const donationSectionEl = document.getElementById('donation-section')
const historySectionEl = document.getElementById('history-section')
const mainBalanceEl = document.getElementById('main-balance')

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

// document.getElementById("donate-now-btn").addEventListener('click', function (){
//     calculateDonation('input-1')
// })


// common function of calculate donation 
function calculateDonation (inputId, titleId, CardBalanceId){
    const inputIdEl =parseFloat(document.getElementById(inputId).value) 
    const titleIdEl = document.getElementById(titleId).innerText
    let CardBalanceIdEl = parseFloat(document.getElementById(CardBalanceId).innerText) 

    let totalCardBalance = CardBalanceIdEl + inputIdEl
    document.getElementById(CardBalanceId).innerText = totalCardBalance
    document.getElementById(inputId).value = ''
    const mainBalance = parseFloat(mainBalanceEl.innerText)
    const mainBalanceTotal = mainBalance - inputIdEl
    mainBalanceEl.innerText = mainBalanceTotal

    const historyAppend = historySectionEl.innerHTML += `
    <div class="border rounded p-5 ">
    <div class="text-2xl font-bold"><span>${inputIdEl}</span> Taka is donated for <span>${titleIdEl}</span></div>
    <div class="text-gray-400">Date: ${new Date()}</div>
    </div>
    `
    historyAppend ++
}



