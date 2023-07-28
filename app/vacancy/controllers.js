const Experience = require("./models/Experience");

const getExperinces = async (req, res) => {
    const exper = await Experience.findAll()

    res.status(200).send(exper)
}

module.exports = {
    getExperinces
}