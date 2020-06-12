const db = require("../database");
const user = db.user;

module.exports = (req,res) => {
    const User = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }

    user.findOne({where : {email : User.email}})
        .then(data =>{
            if (!data){
                user.create(User)
                    .then((data) =>{
                        req.session.userId = data.dataValues.id
                        res.redirect("/home")
                    })
                    .catch((err) =>{
                        res.json({
                            msg : err.message
                        })
                    })
            }else{
                res.json({
                    msg : "user already available"
                })
            }
            
        })
        .catch(err =>{
            console.log(err)
            res.json({
                msg : err.message
            })
        })

    
}