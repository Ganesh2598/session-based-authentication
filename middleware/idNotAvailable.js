module.exports = (req,res,next) => {
    if (req.session.userId){
        res.redirect("/home")
    }else{
        next()
    }
}