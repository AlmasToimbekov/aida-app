const service = require('../services/equipment-service')

const getEquipmentCategories = (req, res) => {

  service.getEquipmentCategories()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getEquipmentCategories,
}