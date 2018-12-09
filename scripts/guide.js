const { getExchangeRates} = require('./requests')

function init() {
  const price = document.querySelector('span.price')

getExchangeRates()
  .then(response => {
    let rate = response.data.currencies[89].exchange_rate

    const convertedRate = (parseInt(price.textContent) / rate).toFixed(2)

    price.textContent = `JPY ${convertedRate}`
  })

}

module.exports = { init }
