var Sequelize = require('sequelize');
var DA = require('./DataAccess');
const { Company } = require('./Company');

class Customer {
    constructor() {
        this.Customer = this.initCustomer();
    }
    initCustomer() {
        let customer = dataAccess.define('customer', {
            customer_id: { type: Sequelize.INTEGER, primaryKey: true },
            FirstName: Sequelize.STRING,
            LastName: Sequelize.STRING,
            Email: Sequelize.STRING,
            Phone: Sequelize.STRING,
            company_id: Sequelize.INTEGER,
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        customer.belongsTo(Company, { foreignKey: 'company_id' });
        return customer;
    }
}
const customer = new Customer();

module.exports = customer;