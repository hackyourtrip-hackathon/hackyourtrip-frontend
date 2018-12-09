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
              <i class="tiny material-icons">favorite</i> Ratings
            </a>
          </li>
          <li>
            <a href="#">
              <i class="tiny material-icons">add</i> Add New
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
}

const card = (rating, language, cost, name ) => {
  return `
    <div class="item col s6 m6 l4">
      <a href="./guides.html">
        <div class="card hoverable">
          <div class="ratings">
            ${ starRating(rating) }
            <div> Speaks ${ language }</div>
          </div>

          <div class="card-image">
            <img src="https://via.placeholder.com/100" alt="image">
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
      </a>
    </div>
  `
}

module.exports = { header, card }
