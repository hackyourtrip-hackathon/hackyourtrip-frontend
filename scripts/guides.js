const { getExchangeRates } = require('./requests')
const { renderCity } = require('./template')

const init = () => {
  const cost = Array.from(document.querySelectorAll('.card-title.price'))
  console.log(cost);

  getExchangeRates()
    .then(response => {
      let rate = response.data.currencies[89].exchange_rate
      let hourly = cost.forEach(c => rate * parseInt(c.innerText))
      console.log(hourly)
    })
}

module.exports = { init }
