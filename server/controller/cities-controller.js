const service = require('../services/cities-service')

const getCities = (req, res) => {

  service.getCities()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getCities,
}