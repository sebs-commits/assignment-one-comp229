module.exports = function(app) {
    var index = require('../controllers/contact.server.controller');
    app.get('/contact', index.render);
};