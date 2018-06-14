 var Sequelize = require('sequelize');
 
 class DataAccess  {
    constructor() {
        var connection = new Sequelize('angusalse', 'root', '1234', {
          host: 'localhost',
          dialect: 'mysql',
          
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          },
          define: {
            timestamps: false
          }
        });    
        
    }
}
const DA = new DataAccess ;
module.exports =   DA;