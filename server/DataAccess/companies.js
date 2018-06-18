var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class Company {
    constructor() {
        this.model = this.initCompany();
    }
    initCompany() {
        let company = DA.connection.define('companies', {
            company_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            address: Sequelize.STRING,
            country: Sequelize.STRING,

        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        return company;
    }

    getAll() {
        return this.model.findAll();
    }

    create(data){
        return this.model.create(data);
    }
    update(newData,id){
        return this.model.update(newData,{where:{company_id: id}});
    }
    delete(id){
        return this.model.destroy({ where:{Company_id: id}
          });
    }
  
}
const company = new Company();
module.exports = company;
