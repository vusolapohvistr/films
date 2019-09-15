const models = require('../models');

async function filmGetId(req, res) {
    let data = await models.films.findByPk(req.params.id);
    res.send(data);
}

module.exports = filmGetId;
