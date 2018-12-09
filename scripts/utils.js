const rating = (rating) => {
  let result = ''
  let border = `<i class="material-icons blue-grey-text text-lighten-4">star</i>`
  let star = `<i class="material-icons red-text">star</i>`
  let arr = [border, border, border, border, border]
  let newArr = arr.slice(rating)
  for (let i = 0; i < rating; i++) {
    newArr.unshift(star)
    result = newArr.join('')
  }
  return result
}

module.exports = { rating }
