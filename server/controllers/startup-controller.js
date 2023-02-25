const Startup = require('../model/Startup')


const getallStartups = async (req,res)=>{
    let User;
    try {
       User = await Startup.find() 
    } catch (error) {
        console.log(error);
    }
    if (!User){
        return res.status(404).json({message:'user not found'})
    }
    return res.status(200).json({User})
}


const signupStartup = async (req,res)=>{
    let Startupname = req.body.startupname;
    let Foundername = req.body.foundername;
    let Email = req.body.email;
    let Password = req.body.password;
    let Website = req.body.website;
    let Location = req.body.location;

    let existinguser;
    try{
        existinguser = await Startup.findone({Email})
    }catch(error){
        console.log(error);
    }
    if(!existinguser){
        return res.status(404).json({message:'user is already log in'})
    }

    const user = new User({Startupname,Foundername,Email,Password,Location,Website})

    try{
      await user.save();
    }catch(err){
       console.log(err);
    }

    return res.status(200).json({user})
}

module.exports = {getallStartups , signupStartup}