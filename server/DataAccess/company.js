var Sequelize = require('sequelize');
var DA = require('./DataAccess');

class Company {
    constructor() {
        this.Company = this.initCompany();
    }
    initCompany() {
        let company = DA.define('company', {
            company_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            Adrress: Sequelize.STRING,
            Country: Sequelize.STRING,

        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        return company;
    }
}
const company = new Company();
module.exports = company;
