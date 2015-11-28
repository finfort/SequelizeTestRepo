"use strict";

 module.exports=function(sequelize, DataTypes){
  return  sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      autoIncrement: !0,
      primaryKey: !0
    },
    firstName: {
      type: DataTypes.STRING, 
      field: "first_name"
    },
    lastName: {
      type: DataTypes.STRING,
      field: "last_name"
    },
    username: {
      type: DataTypes.STRING,
      field: "username"
    },
    email: {
      type: DataTypes.STRING,
      field: "email"
    },
    password: {
      type: DataTypes.STRING,
      field: "password"        
    },
    token: {
      type: DataTypes.STRING,
      field: "access_token"
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      field: "isAdmin"    
    }
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods:{
      usernameExists: function(username, _clb){

      },
      userExists: function(username, _clb){

      },
      signup: function(params, _clb){
        var fullnm_splt = params.fullname.split(' ');
        params.firstName = (fullnm_splt.length >2) ? fullnm_splt.slice(0, -1).join(" ") : fullnm_splt[0];
        params.lastName = (fullnm_splt.length >2) ? fullnm_splt.slice(-1).join(" ") : fullnm_splt[1];

      //res.redirect("/users/" + params.username);


      }
    },
    instanceMethods:{
      isValidPassword: function(password, _clb){
        var _self = this;
        // hash(password, function(err, password_encr){
        //   if(err){
        //     return _clb(err);
        //   }
        //   if(password_encr == _self.password){
        //     return _clb(null, true);
        //   }

        //   return _clb(null, false);
        // });

      }
    }
  });
};