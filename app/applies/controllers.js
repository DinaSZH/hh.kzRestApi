const Apply = require('./Apply')
const {NEW, INVITATION, DECLINED} = require('./utils')
const sendEmail = require('../utils/sendMail');
const Vacancy = require('../vacancy/models/Vacancy');
const Resume = require('../resume/models/Resume');
const User = require('../auth/User');
const { Op } = require('sequelize');

const createApply = async (req,res) =>{

    try {
        const apply = await Apply.create({
            resumeId: req.body.resumeId,
            vacancyId: req.body.vacancyId,
            status: NEW
        })

        const resume = await Resume.findByPk(req.body.resumeId)
        const vacancy = await Vacancy.findByPk(req.body.vacancyId)
        const user = await User.findByPk(vacancy.userId)

        sendEmail(user.email, `Новый отклик на вакансию ${vacancy.name}`, 
        `Имя соискателя: ${resume.first_name}
        Фамилия соискателя: ${resume.last_name}
        Номер соискателя: ${resume.phone}`)
    
        res.status(200).send(apply);
    } catch (error) {
        res.status(500).send(error);
    }
    
}

const getEmployeeApplies = async (req, res) => {
    const resumes = await Resume.findAll({
        where: {
            userId: req.user.id
        }
    })

    const ids = resumes.map(item => item.id)

    const applies = await Apply.findAll({
        where: {
            resumeId:{ [Op.in]: ids}
        }, 
        include: {
            model: Vacancy,
            as: "vacancy"
        }
    })

    res.status(200).send(applies)
}

const deleteApply = async (req, res) => {
     await Apply.destroy({
        where: {
            id: req.params.id
        }
     })

     res.status(200).end()
}

const acceptEmployee = async (req, res) => {
    await Apply.update(
        {
            status: INVITATION
        },
        {
        where: {
            id: req.body.applyId
        }
     })

     res.status(200).end()
}

const declineEmployee = async (req, res) => {
    await Apply.update(
        {
            status: DECLINED
        },
        {
        where: {
            id: req.body.applyId
        }
     })

     res.status(200).end()
}

module.exports= {
    createApply,
    getEmployeeApplies,
    deleteApply, 
    acceptEmployee,
    declineEmployee
}
