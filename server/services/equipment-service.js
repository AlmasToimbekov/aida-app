const equipmentRemote = Promise.resolve({
  data: [
    { id: 1, name: 'Автокраны'},
    { id: 2, name: 'Манипуляторы'},
    { id: 3, name: 'Бульдозеры'},
    { id: 4, name: 'Погрузчики'},
    { id: 5, name: 'Грузовые перевозки'},
  ]
})

const api = {
  getEquipment() {
    return equipmentRemote.then(result => result.data)
  },
}

module.exports = api