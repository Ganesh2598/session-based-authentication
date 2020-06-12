module.exports = (connect,sequelize) => {
    const user = connect.define("user_table",{
        id : {
            type : sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {type : sequelize.TEXT},
        email : {type : sequelize.TEXT},
        password : {type : sequelize.TEXT}
    },{
        tableName : "users_table"
    })

    return user;
}