const service = require('../services/materials-service')

const getMaterialsWithCategory = (req, res) => {

  service.getMaterialsWithCategory()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getMaterialsWithCategory,
}