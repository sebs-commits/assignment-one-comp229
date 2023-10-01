module.exports = function(app) {
    var index = require('../controllers/projects.server.controller');
    app.get('/projects', index.render);
};