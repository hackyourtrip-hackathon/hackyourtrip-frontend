const { getExchangeRates, getCities } = require('./requests')
const { header } = require('./template')
const nav = document.querySelector('header')
nav.innerHTML = header()

getExchangeRates()
.then( response => {
  console.log(response)
})

getCities()
.then( response => {
  console.log(response)
})
