const Specialization = require("./models/Specialization");
const SpecializationType = require("./models/SpecializationType");

const getSpecializations = async (req, res) => {
    try{
    const specializationTypes = await SpecializationType.findAll({
        include: {
            model: Specialization,
            as: "specializations" 
        }
    })

    res.status(200).send(specializationTypes)
} catch(error){
    res.status(500).send(error)
}
}

module.exports = {
    getSpecializations
}