const Vacancy = require("./models/Vacancy");

const validateVacancy = (req, res, next) => {
    let errors = {};
    if(!req.body.name || req.body.name.length === 0)
        errors.name = "Поле Название вакансии обязательное"
    
    if(!req.body.specializationId || typeof(req.body.specializationId) === 'number')
        errors.specializationId = "Поле Специализация обязательное"

    if(!req.body.cityId || typeof(req.body.cityId) === 'number')
        errors.cityId = "Поле Где искать сотрудников обязательное"

    if(!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Расскажите про вакансию обязательное"

    if(!req.body.employmentTypeId || typeof(req.body.employmentTypeId) === 'number')
        errors.employmentTypeId = "Поле Тип занятости обязательное"

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfVacancy = async (req, res, next) => {
    const id = req.params.id || req.body.id;
    const vacancy = await Vacancy.findByPk(id);

    if(!vacancy) {
        res.status(400).send({message: "Vacancy with that id doenst exist "})
    } 
    else if(vacancy.userId === req.user.id){
        next()
    } else{
        res.status(403).send({message: "Access forbidden "})
    }
}

module.exports = {
    validateVacancy,
    isAuthorOfVacancy
}