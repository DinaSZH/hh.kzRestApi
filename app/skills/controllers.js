const Skill = require('./Skill');
const {Op} = require('sequelize');

const getAllSkills = async (req,res) =>{
    const skills = await Skill.findAll();

    res.status(200).send(skills);
}

const getSkillsbyKey = async (req,res) =>{
    const skills = await Skill.findAll({
        where: {
            name: {
                [Op.iLike]: `%${req.params.key}%`
            }
        }
    });

    res.status(200).send(skills);
}


module.exports= {
    getAllSkills, getSkillsbyKey
}
