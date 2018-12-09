const { getExchangeRates, getCities } = require('./requests')
const { renderCity } = require('./template')

function init() {

  getCities()
    .then(response => {

      const cities = response.data.result

      const citiesHTMLArray = cities.map(city => {
        // console.log(city._id.city, city._id.description, city._id.images.DCI.city_image)
        return renderCity(city._id.images.DCI.city_image, city._id.city, city._id.description)
      })

      const citiesHTML = citiesHTMLArray.join('')

      console.log(citiesHTMLArray)

      document.querySelector('.cities').innerHTML = citiesHTML
    })

}

module.exports = { init }