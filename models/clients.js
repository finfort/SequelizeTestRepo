"use strict";

module.exports = function(sequelize, DataTypes) {
   return sequelize.define("Clients", {
    id:{
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    client_name: {
      type: DataTypes.STRING,
      field: "client_name"
    },
    client_host_name: {
      type: DataTypes.STRING,
      field: "client_host_name"
    },  
    ip: {
      type: DataTypes.STRING,
      field: "ip"
    },  
    mac: {
      type: DataTypes.STRING,
      field: "mac"
    },
    previous_ip: {
      type: DataTypes.STRING,
      field: "previous_ip"
    }  
  }, {      
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods:{

    },    
    instanceMethods:{

    }   
  });
};    