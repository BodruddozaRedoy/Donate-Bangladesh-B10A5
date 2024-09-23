// Global variable 
const navbarEl = document.getElementById('navbar')
const donationBtnEl = document.getElementById('donation-btn')
const historyBtnEl = document.getElementById('history-btn')
const donationSectionEl = document.getElementById('donation-section')
const historySectionEl = document.getElementById('history-section')

donationBtnEl.addEventListener('click', function(){
    historySectionEl.classList.add("hidden")
    donationSectionEl.classList.remove("hidden")
    historyBtnEl.classList.add("bg-transparent")
    donationSectionEl.classList.remove("bg-transparent")


})

historyBtnEl.addEventListener('click', function(){
    donationSectionEl.classList.add("hidden")
    historySectionEl.classList.remove("hidden")
    donationBtnEl.classList.add("bg-transparent")
    historyBtnEl.classList.remove("bg-transparent")
})