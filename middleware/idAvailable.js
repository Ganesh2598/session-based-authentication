module.exports = (req,res,next) =>{
    if (req.session.userId){
        next()
    }else{
        res.json({
            msg : "Id not available"
        })
    }
}