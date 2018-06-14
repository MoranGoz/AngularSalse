var Sequelize = require('sequelize');
var DA = require('./DataAccess');
var customer = require('./customer');

class Comments {
    constructor() {
        this.Comments = this.initComments();

    }
    initComments() {
        let comments = DA.define('Comments', {
            comments_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            date: Sequelize.DATE,
            text: Sequelize.STRING,

        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        comments.hasOne(Customer, { foreignKey: 'customer_id' });
        return comments;
    }
}
const comments = new Comments();

module.exports = comments;