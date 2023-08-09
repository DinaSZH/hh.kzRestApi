const Apply = require('./Apply')
const {NEW} = require('./utils')
const sendEmail = require('../utils/sendMail');
const Vacancy = require('../vacancy/models/Vacancy');
const Resume = require('../resume/models/Resume');
const User = require('../auth/User')

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


module.exports= {
    createApply
}
