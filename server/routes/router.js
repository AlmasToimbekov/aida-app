module.exports = app => {
  app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', new Date().toUTCString());
    next();
  });

  app.use('/api/globe', require('./globe-routes'));
  app.use('/api/equipment', require('./equipment-routes'));
};