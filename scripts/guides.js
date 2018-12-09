const { getExchangeRates, getCities } = require('./requests')
const { renderCity } = require('./template')

function init() {

  console.log('hi')

  const queryString = window.location.search
    .slice(1)
    .split('&')
    .map(ele => ele.split('='))
    .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})

  let name = queryString.name

  if (name.includes('%20')) {
    name = name.replace(/%20/g, ' ')
  }

  getCities()
    .then(response => {
      const cities = response.data.result
      const city = cities.find(city => city._id.city === name)

      console.log(city)

      const citySelector = document.querySelector('.one-city')
      const cityHTML = renderCity(city._id.images.DCI.city_image, city._id.city, city._id.description)
      console.log(cityHTML)
      citySelector.innerHTML = cityHTML
    })

  const price1 = document.querySelector('.card-title.price1')
  const price2 = document.querySelector('.card-title.price2')
  const price3 = document.querySelector('.card-title.price3')
  const price4 = document.querySelector('.card-title.price4')


  getExchangeRates()
    .then(response => {
      let rate = response.data.currencies[89].exchange_rate

      const convertedRate1 = (parseInt(price1.textContent) / rate).toFixed(2)
      const convertedRate2 = (parseInt(price2.textContent) / rate).toFixed(2)
      const convertedRate3 = (parseInt(price3.textContent) / rate).toFixed(2)
      const convertedRate4 = (parseInt(price4.textContent) / rate).toFixed(2)

      price1.textContent = `JPY ${convertedRate1}`
      price2.textContent = `JPY ${convertedRate2}`
      price3.textContent = `JPY ${convertedRate3}`
      price4.textContent = `JPY ${convertedRate4}`

    })
}



// rate * parseInt(c.innerText)

module.exports = { init }


