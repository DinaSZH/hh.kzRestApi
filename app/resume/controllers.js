const Resume = require("./models/Resume");
const WorkingHistories = require("./models/WorkingHistory");
const Education = require("./models/Education");
const ForeignLanguage = require("./models/ForeignLanguage");
const ResumeEmploymentType = require("./models/ResumeEmploymentType");

const createResume = async (req, res) => {
    
    const resume = await Resume.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        position: req.body.position,
        about: req.body.about,
        birthday: req.body.birthday,
        gender:req.body.gender,
        salary: req.body.gender,
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
}

module.exports = {
    createResume
}