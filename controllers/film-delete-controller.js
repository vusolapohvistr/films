const models = require('../models');

async function filmDelete(req, res) {
    let data = await models.films.destroy({where: {id: req.params.id}});
    res.sendStatus(data ? 200 : 500);
}

module.exports = filmDelete;
