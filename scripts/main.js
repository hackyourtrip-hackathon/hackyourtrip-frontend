const { getExchangeRates, getCities } = require('./requests')

getExchangeRates()
.then( response => {
  console.log(response)
})

getCities()
.then( response => {
  console.log(response)
})