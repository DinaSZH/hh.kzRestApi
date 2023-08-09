


const validateApply = (req, res, next) => {
    let errors = {};
    if(!req.body.resumeId || req.body.resumeId.length === 0)
        errors.resumeId = "Поле Резюме обязательное"
    
    if(!req.body.vacancyId || req.body.vacancyId.length === 0)
        errors.vacancyId = "Поле Вакансия обязательное"

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

module.exports = {
    validateApply
}