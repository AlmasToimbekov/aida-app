const service = require('../services/equipment-service')

const getEquipment = (req, res) => {

  service.getEquipment()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getEquipment,
}