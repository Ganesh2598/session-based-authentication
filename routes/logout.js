module.exports = (req,res) =>{
    if (req.session.userId){
        req.session.destroy(err =>{
            console.log("session destroyed")
        })
        res.redirect("/login")
    }
}