module.exports = function(app) {
    var index = require('../controllers/services.server.controller');
    app.get('/services', index.render);
};