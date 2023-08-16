const Skill = require('./Skill');
const {Op} = require('sequelize');

const getAllSkills = async (req,res) =>{
    try{
    const skills = await Skill.findAll();

    res.status(200).send(skills);
} catch(error){
    res.status(500).send(error)
}
}

const getSkillsbyKey = async (req,res) =>{
    try{
    const skills = await Skill.findAll({
        where: {
            name: {
                [Op.iLike]: `%${req.params.key}%`
            }
        }
    });

    res.status(200).send(skills);
} catch(error){
    res.status(500).send(error)
}
}


module.exports= {
    getAllSkills, getSkillsbyKey
}
