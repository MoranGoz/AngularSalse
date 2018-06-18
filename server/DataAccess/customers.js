var Sequelize = require('sequelize');
var DA = require('./dataAccess');
const  Company  = require('./Companies');

class Customer {
    constructor() {
        this.model = this.initCustomer();
    }
    initCustomer() {
        let customer = DA.connection.define('customers', {
            customer_id: { type: Sequelize.INTEGER, primaryKey: true },
            FirstName: Sequelize.STRING,
            LastName: Sequelize.STRING,
            Email: Sequelize.STRING,
            Phone: Sequelize.STRING,
            company_id: Sequelize.INTEGER,
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

           customer.belongsTo(Company.model, { foreignKey: 'company_id' });
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return customer;
    }
    getAll() {
        return this.model.findAll();
    }
    create(data){
        return this.model.create(data);
    }
    update(newData,id){
        return this.model.update(newData,{where:{customer_id: id}});
    }
    delete(id){
        return this.model.destroy({ where:{customer_id: id}
          });
    }
}
const customer = new Customer();

module.exports = customer;