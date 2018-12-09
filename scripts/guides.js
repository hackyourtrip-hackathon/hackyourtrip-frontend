const { getExchangeRates, getCities } = require('./requests')
const { renderCity } = require('./template')

function init() {

  const queryString = window.location.search
  .slice(1)
  .split('&')
  .map(ele => ele.split('='))
  .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})

  let name = queryString.name
  
  if(name.includes('%20')) {
    name = name.replace(/%20/g, ' ')
  }

  getCities()
  .then( response => {
    const cities = response.data.result
    const city = cities.find(city => city._id.city === name)
    // renderCity(city)
  })
}

const cost = Array.from(document.querySelectorAll('.card-title.price'))
console.log(cost)

getExchangeRates()
  .then(response => {
    let rate = response.data.currencies[89].exchange_rate
    let hourly = cost.map(c => {
      return parseInt(c.innerText) / rate
    })
    console.log(hourly)
  })

  // rate * parseInt(c.innerText)

module.exports = { init }


