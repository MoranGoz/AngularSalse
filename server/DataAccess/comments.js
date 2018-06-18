// var Sequelize = require('sequelize');
// var DA = require('./dataAccess');
// var customers = require('./customers');

// class Comments {
//     constructor() {
//         this.model = this.initComments();

//     }
//     initComments() {
//         let comments = DA.connection.define('Comments', {
//             comment_id: { type: Sequelize.INTEGER, primaryKey: true },
//             creationDate: Sequelize.DATE,
//             customer_id: { type: Sequelize.INTEGER, references: { model: customers, key: 'customer_id' }},
//             text: Sequelize.STRING,
//         },
//          {
//                 freezeTableName: true // Model tableName will be the same as the model name
//             });
//             comments.hasOne(customers, { foreignKey: 'customer_id' });
        
//         return comments;
//     }
//     getAll(){
//         return this.model.findAll();
//     }
//     // update(id){
//     //     return this.model.update({
//     //         where: {
//     //             company_id: id
//     //         }
//     //       });
//     // }
//     // delete(id){
//     //     return this.model.destroy({
//     //         where: {
//     //             Company_id: id
//     //         }
//     //       });
//     // }
//     // create(){
//     //     return this.model.create({
//     //         where: {
//     //           id: 'id'
//     //         }
//     //       });
//     // }
// }
// const comments = new Comments();

// module.exports = comments;