const { getExchangeRates, getCities } = require('./requests')
const { header } = require('./template')
const nav = document.querySelector('header')
nav.innerHTML = header()

const path = window.location.pathname

const initialize = {
  '/': require('./cities').init,
  // '/guide.html': require('./guide').init,
  // '/guides.html': require('./guides').init,
 
}

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${path} can't initialize`)

// getExchangeRates()
// .then( response => {
//   console.log(response)
// })


