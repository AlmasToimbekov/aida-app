const service = require('../services/markers-service')

const getMarkersByCategories = (req, res) => {

  service.getMarkersByCategories()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

const setMarker = (req, res) => {
  const { markerInfo } = req.body

  if (!markerInfo) {
    res.status(500).send('There is no marker info object')
  }

  service.setMarker(markerInfo)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getMarkersByCategories,
  setMarker,
}