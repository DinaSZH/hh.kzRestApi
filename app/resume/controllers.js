const Resume = require("./models/Resume");
const WorkingHistories = require("./models/WorkingHistory");
const Education = require("./models/Education");
const ForeignLanguage = require("./models/ForeignLanguage");
const ResumeEmploymentType = require("./models/ResumeEmploymentType");
const City = require("../region/City");
const Country = require("../region/Country");
const EmploymentType = require("../employment-type/EmploymentType");
const { Op } = require('sequelize');

const createResume = async (req, res) => {
    try{
    
    const resume = await Resume.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        position: req.body.position,
        about: req.body.about,
        birthday: req.body.birthday,
        gender:req.body.gender,
        salary: req.body.salary,
        salary_type: req.body.salary_type,
        main_language: req.body.main_language,
        skills: req.body.skills,
        userId: req.user.id,
        cityId: req.body.cityId,
        citizenship: req.body.citizenship
    })

    if(req.body.workingHistories && req.body.workingHistories.length >0 ){
        req.body.workingHistories.forEach(async history => {
            await WorkingHistories.create({
                resumeId: resume.id,
                company_name: history.company_name,
                company_description: history.company_description,
                responsibilities: history.responsibilities,
                start_date: history.start_date,
                end_date: history.end_date
            })
        });
    }

    if(req.body.education && req.body.education.length >0 ){
        req.body.education.forEach(async edu => {
            await Education.create({
                resumeId: resume.id,
                level: edu.level,
                university_name: edu.university_name,
                faculty: edu.faculty,
                major: edu.major,
                end_date: edu.end_date
            })
        });
    }

    if(req.body.foreignLanguages && req.body.foreignLanguages.length >0 ){
        req.body.foreignLanguages.forEach(async ln => {
            await ForeignLanguage.create({
                resumeId: resume.id,
                name: ln.name,
                level: ln.level
            })
        });
    }

    if(req.body.employmentTypes && req.body.employmentTypes.length >0 ){
        req.body.employmentTypes.forEach(async employmentTypeId => {
            await ResumeEmploymentType.create({
                resumeId: resume.id,
                employmentTypeId: employmentTypeId
            })
        });
    }

    console.log(req.body.gender)
    res.status(200).send(resume);
} catch(error){
    res.status(500).send(error)
}
}

const getMyResumes = async (req, res) => {
    try{

    const resumes = await Resume.findAll({
        where: {userId:req.user.id},
    })

    res.status(200).send(resumes);
} catch(error){
    res.status(500).send(error)
}

}

const getResume = async (req, res) => {
    try{

    const resume = await Resume.findByPk(req.params.id, {
        include: [
            {
                model: WorkingHistories,
                as: "workingHistories"
            },
            {
                model: Education,
                as: "education"
            },
            {
                model: EmploymentType,
                as: "employmentTypes"
            },
            {
                model: ForeignLanguage,
                as: "foreignLanguages"
            },
            {
                model: City,
                as: "city"
            },
            {
                model:Country,
                as: "citizenshipObj"
            }
        ]
    });

    res.status(200).send(resume);
} catch(error){
    res.status(500).send(error)
}
}

const deleteResume = async (req, res) => {
    try{

    const data = await Resume.destroy({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).end();

} catch(error){
    res.status(500).send(error)
}

}

const editResume = async (req, res) => {
    try{

    await Resume.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        position: req.body.position,
        about: req.body.about,
        birthday: req.body.birthday,
        gender:req.body.gender,
        salary: req.body.salary,
        salary_type: req.body.salary_type,
        main_language: req.body.main_language,
        skills: req.body.skills,
        userId: req.user.id,
        cityId: req.body.cityId,
        citizenship: req.body.citizenship
        }, {
            where: {
                id:req.body.id
        }})

        await WorkingHistories.destroy({
            where: {
                resumeId: req.body.id
            }
        }) 

        await Education.destroy({
            where: {
                resumeId: req.body.id
            }
        })

        await ForeignLanguage.destroy({
            where: {
                resumeId: req.body.id
            }
        })

        await ResumeEmploymentType.destroy({
            where: {
                resumeId: req.body.id
            }
        })

        const resume = {
            id: req.body.id
        }

        if(req.body.workingHistories && req.body.workingHistories.length >0 ){
            req.body.workingHistories.forEach(async history => {
                await WorkingHistories.create({
                    resumeId: resume.id,
                    company_name: history.company_name,
                    company_description: history.company_description,
                    responsibilities: history.responsibilities,
                    start_date: history.start_date,
                    end_date: history.end_date
                })
            });
        }
    
        if(req.body.education && req.body.education.length >0 ){
            req.body.education.forEach(async edu => {
                await Education.create({
                    resumeId: resume.id,
                    level: edu.level,
                    university_name: edu.university_name,
                    faculty: edu.faculty,
                    major: edu.major,
                    end_date: edu.end_date
                })
            });
        }
    
        if(req.body.foreignLanguages && req.body.foreignLanguages.length >0 ){
            req.body.foreignLanguages.forEach(async ln => {
                await ForeignLanguage.create({
                    resumeId: resume.id,
                    name: ln.name,
                    level: ln.level
                })
            });
        }
    
        if(req.body.employmentTypes && req.body.employmentTypes.length >0 ){
            req.body.employmentTypes.forEach(async employmentTypeId => {
                await ResumeEmploymentType.create({
                    resumeId: resume.id,
                    employmentTypeId: employmentTypeId
                })
            });
        }
        


    res.status(200).end();

} catch(error){
    res.status(500).send(error)
}

}

const searchResume = async(req, res) => {
    try{
    const options = {};
    
    const {
      q,
      cityId,
      salary_from,
      salary_to,
      salary_type,
      citizenship,
    } = req.query;
  
    if (q) {
      options[Op.or] = [
        { first_name: { [Op.iLike]: `%${q}%` } },
        { last_name: { [Op.iLike]: `%${q}%` } },
        { position: { [Op.iLike]: `%${q}%` } },
        { about: { [Op.iLike]: `%${q}%` } },
        { skills: { [Op.iLike]: `%${q}%` } },
      ];
    }
  
    if (citizenship) {
      options.citizenship = citizenship;
    }
  
    if (cityId) {
      options.cityId = cityId;
    }
  
    if (salary_from && !salary_to) {
      options.salary = {[Op.gte]: salary_from*1};
    } else if(!salary_from && salary_to){
        options.salary = {[Op.lte]: salary_to*1}
    } else if(salary_from && salary_to){
        options.salary = {[Op.between]: [salary_from*1, salary_to*1]}
    } 

  
    if (salary_type && salary) {
      options.salary_from = { [Op.lte]: salary };
      options.salary_to = { [Op.gte]: salary };
      options.salary_type = salary_type;
    }
  
    const resumes = await Resume.findAll({
      where: options,
    });
  
    res.status(200).send(resumes);
} catch(error){
    res.status(500).send(error)
}
}

module.exports = {
    createResume, getMyResumes, getResume, deleteResume, editResume, searchResume
}