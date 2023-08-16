const City = require('./City');
const Country = require('./Country');

const getCities = async (req,res) =>{
    try{
    const cities = await City.findAll();

    res.status(200).send(cities);
} catch(error){
    res.status(500).send(error)
}
}

const getCountries = async (req,res) =>{
    try{
    const countries = await Country.findAll();

    res.status(200).send(countries);
} catch(error){
    res.status(500).send(error)
}
}

module.exports= {
    getCities,
    getCountries
}
