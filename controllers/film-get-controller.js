const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function filmGet(req, res) {
    let data;
    console.log(req.query);
    if(req.query.query && req.query.query.length > 0) {
        data = await models.films.findAll({
            where: {
                [req.query.type]: {
                    [Op.like]: `%${req.query.query}%`
                }
            },
            order: [[req.query.type, req.query.order]],
        })
    }
    else {
       data = await models.films.findAll();
    }
    res.send(data);
}

module.exports = filmGet;
