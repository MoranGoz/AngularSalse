class Model {
    constructor() {  
    }
    getAll() {
        return this.model.findAll();
    }
    update(){
        return this.model.update({
            where: {
              id: 'id'
            }
          });

    }
    delete(id){
        return this.model.destroy({
            where: {
              id: 'id'
            }
          });
    }
    create(){
        return this.model.create({
            where: {
              id: 'id'
            }
          });
    }

}
const model = new Comments();

module.exports = model;