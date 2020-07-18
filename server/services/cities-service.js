const citiesRemote = Promise.resolve({
  data: ['Астана', 'Алматы', 'Шымкент', 'Костанай', 'Павлодар', 'Актау', 'Усть-Каменогорск']
})

const api = {
  getCities() {
    return citiesRemote.then(result => result.data)
  },
}

module.exports = api