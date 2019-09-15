const models = require('../models');

async function filmPut(req, res) {
    let data;
    const { title, release_date, format, actors } = req.body;
    try {
        data = await models.films.create(req.body);
    } catch (e) {
        throw e;
    }
    res.status = 200;
    res.send(data);
}

module.exports = filmPut;
