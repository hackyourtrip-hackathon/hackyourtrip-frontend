const { getExchangeRates } = require('./requests')

getExchangeRates()
.then( response => {
  console.log(response)
})
