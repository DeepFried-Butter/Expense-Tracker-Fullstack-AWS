const Sequelize=require("sequelize")

const sequelize=require("../util/database")

const User = sequelize.define("User",{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
        

    },

    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },

    email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
    },

    password:{   
        type: Sequelize.STRING,
        allowNull:false
    },
    isPremium:{
        type: Sequelize.BOOLEAN,
        
    },
    totalAmount: {
        type:Sequelize.INTEGER
    }

})

module.exports=User;