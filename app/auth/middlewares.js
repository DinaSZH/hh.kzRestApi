
const Role = require("./Role");

const isEmployee = async (req, res, next) =>{
    if(req.user) {
        const role = await Role.findByPk(req.user.roleId);
        if(role.name === "employee") next()
        else res.status(403).send({message: "Access denied"});
    }
    else res.status(403).send({message: "Unauthorized user"});
}

const isManager = async (req, res, next) =>{
    if(req.user) {
        const role = await Role.findByPk(req.user.roleId);
        if(role.name === "manager") next()
        else res.status(403).send({message: "Access denied"});
    }
    else res.status(403).send({message: "Unauthorized user"});
}

module.exports= {
    isEmployee,
    isManager
}