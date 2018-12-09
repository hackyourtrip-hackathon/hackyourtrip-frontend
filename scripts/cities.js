const { getExchangeRates, getCities } = require('./requests')
const { renderCities } = require('./template')

function init() {

  getCities()
    .then(response => {

      const cities = response.data.result

      const citiesHTMLArray = cities.map(city => {
        // console.log(city._id.city, city._id.description, city._id.images.DCI.city_image)
        return renderCities(city._id.images.DCI.city_image, city._id.city, city._id.description)
      })

      const citiesHTML = citiesHTMLArray.join('')

      document.querySelector('.cities').innerHTML = citiesHTML
    })

}

module.exports = { init }