const swag = require('../models/swag');

module.exports = {
    search: (req, res) => {
        const { category } = req.query;
        if (!category) {
            res.send(swag);
        } else {
            const filteredSwag = swag.filter(swag => swag.category === category);
            res.send(filteredSwag);
        }
    },
};