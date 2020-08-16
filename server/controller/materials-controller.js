const service = require('../services/materials-service')

const getMaterialCategories = (req, res) => {

  service.getMaterialCategories()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

const getMaterials = (req, res) => {

  service.getMaterials()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getMaterialCategories,
  getMaterials,
}