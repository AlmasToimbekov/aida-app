const service = require('../db/markers-queries')

const api = {
  getMarkersByCategories() {
    return service.getMarkersByCategories()
  },
  setMarker(markerInfo) {
    return service.setMarker(markerInfo)
  },
}

module.exports = api