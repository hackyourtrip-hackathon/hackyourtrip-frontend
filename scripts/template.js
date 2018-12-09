const { starRating } = require('./utils')

const header = () => {
  return `
    <nav class="blue-grey">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          Headline
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#">
              <i class="tiny material-icons">person</i> Welcome, User!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
}

const guide = ( image, rating, language, cost, name ) => {
  return `
    <div class="guide item col s6 m6 l3">
        <div class="card hoverable">
          <div class="ratings">
            ${ starRating(rating) }
            <div> Speaks ${ language }</div>
          </div>

          <div class="card-image">
            <a href="./guide.html?id=${ id }">
              <img src="${ image }" alt="image">
            </a>
            <p class="card-title price"> ${ cost } / hour </p>
          </div>

          <div class="meta row">
            <span class="card-title col">${ name }</span>
            <span class="specialties col right">
              <i class="material-icons">directions_walk</i>
              <i class="material-icons">local_bar</i>
              <i class="material-icons">local_dining</i>
              <i class="material-icons">photo_camera</i>
            </span>
          </div>
        </div>
    </div>`
}

const city = (city_image, name, description) => {
  return `
    <div class="city col s12 m4">
    <div class="card hoverable">
      <div class="card-image">
        <img src="${ city_image }">
        <h2 class="card-title city">${ name }</h2>
      </div>
      <div class="card-content">
        <p>${ description }</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
  `
}

module.exports = { header, guide, city }
