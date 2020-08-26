const service = require('../services/products-service')

const getProductsByCategory = (req, res) => {
  const categoryId = parseInt(req.params.categoryId)
  if (!categoryId) throw new Error('there is no categoryId parameter')
  
  service.getProductsByCategory(categoryId)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}
const createProduct = (req, res) => {
  const { name, category_id } = req.body
  if (!name || !category_id) throw new Error(`there is no ${name ? 'name' : 'category_id'} parameter`)
  
  service.createProduct(name, category_id)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({message: err.message || 'Some error occured'}))
}

module.exports = {
  getProductsByCategory,
  createProduct,
}