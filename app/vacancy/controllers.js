const Company = require("../auth/Company");
const EmploymentType = require("../employment-type/EmploymentType");
const City = require("../region/City");
const Specialization = require("../specializations/models/Specialization");
const Experience = require("./models/Experience");
const Vacancy =  require("./models/Vacancy");

const getExperinces = async (req, res) => {
    const exper = await Experience.findAll()

    res.status(200).send(exper)
}

const createVacancy = async (req, res) => {

    const vacancy = await Vacancy.create(
        {
            name: req.body.name,
            specializationId: req.body.specializationId,
            cityId: req.body.cityId,
            description: req.body.description,
            employmentTypeId: req.body.employmentTypeId,
            salary_from: req.body.salary_from,
            salary_to: req.body.salary_to,
            salary_type: req.body.salary_type,
            address: req.body.address,
            experienceId: req.body.experienceId,
            skills: req.body.skills,
            about_company: req.body.about_company,
            userId: req.user.id,
            companyId: req.user.companyId
          }
    )
    res.status(200).send(vacancy);
}

const getMyVacancies = async (req, res) =>{
    const vacancies = await Vacancy.findAll({
        where: {
            companyId: req.user.companyId
        }
    })

    res.status(200).send(vacancies);
}

const getVacancy = async(req, res) => {
    const vacancy = await Vacancy.findByPk(req.params.id, {
        include: [
            {
                model:City,
                as: "city"
            },
            {
                model: EmploymentType,
                as: "employmentType"
            },
            {
                model: Company,
                as: "company"
            },
            {
                model: Experience,
                as: "experience"
            },
            {
                model: Specialization,
                as: "specialization"
            },
        ]
    });

    if(vacancy) res.status(200).send(vacancy);
    else res.status(404).send({message: "Vacancy with that id doenst found "})
}

const deleteVacancy = async (req, res) => {
    await Vacancy.destroy({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).end();
}

const editVacancy = async (req, res) => {

    await Vacancy.update({
        name: req.body.name,
        specializationId: req.body.specializationId,
        cityId: req.body.cityId,
        description: req.body.description,
        employmentTypeId: req.body.employmentTypeId,
        salary_from: req.body.salary_from,
        salary_to: req.body.salary_to,
        salary_type: req.body.salary_type,
        address: req.body.address,
        experienceId: req.body.experienceId,
        skills: req.body.skills,
        about_company: req.body.about_company,
        userId: req.user.id,
        companyId: req.user.companyId
    },  {
        where: {
            id:req.body.id
    }})

    res.status(200).end()

}
module.exports = {
    getExperinces, 
    createVacancy,
    getMyVacancies,
    getVacancy,
    deleteVacancy,
    editVacancy
}