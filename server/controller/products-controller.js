const service = require('../services/products-service')

const getProductsByCategory = (req, res) => {
  console.log(req)
  const categoryId = parseInt(req.params.categoryId)
  if (!categoryId) throw new Error('there is no categoryId parameter')
  
  service.getProductsByCategory(categoryId)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getProductsByCategory,
}