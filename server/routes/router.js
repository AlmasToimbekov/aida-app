module.exports = app => {
  app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', new Date().toUTCString());
    next();
  });

  app.use('/api/globe', require('./globe-routes'));
  app.use('/api/equipment', require('./equipment-routes'));
  app.use('/api/materials', require('./materials-routes'));
  app.use('/api/products', require('./products-routes'));
  app.use('/api/markers', require('./markers-routes'));
};