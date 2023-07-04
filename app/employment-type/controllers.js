const EmploymentType = require('./EmploymentType');

const getEmploymetTypes = async (req,res) =>{
    const employmentTypes = await EmploymentType.findAll();

    res.status(200).send(employmentTypes);
}


module.exports= {
    getEmploymetTypes
}
