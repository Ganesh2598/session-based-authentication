const db = require("../database");
const user = db.user;

module.exports = (req,res) =>{
    const { email , password } = req.body;
    user.findOne({where : {email : email}})
        .then(data =>{
            if (data){
                if (data.dataValues.password == password){
                    req.session.userId = data.dataValues.id
                    res.redirect("/home")
                }else{
                    res.status(500).json({
                        error : "Invalid Password"
                    })
                }
                
            }else{
                res.status(500).json({
                    error : "no user available"
                })
            }
        })
        .catch(err =>{
            res.json({
                msg : err.message
            })
        })
}