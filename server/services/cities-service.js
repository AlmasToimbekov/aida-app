const citiesRemote = Promise.resolve({
  data: ['Astana', 'Almaty']
})

const api = {
  getCities() {
    return citiesRemote.then(result => result.data)
  },
}

module.exports = api