const faker = require('faker');
const boom = require('@hapi/boom');

class CategorieService {

    constructor(){
        this.categories = [];
        this.generateCategories();
    }

    generateCategories(){
        this.categories.push({
            categoryName: faker.commerce.productMaterial(),
            id: faker.datatype.uuid(),
        })
    }
    async find(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.categories);
            }, 200)
        })
    }
    async findCategory(id){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const findCategory = this.categories.findIndex(c => c.id === id);
              if(!findCategory) throw boom.notFound('Category not found');
              resolve(this.categories[findCategory]);
            }, 200)
        })
    }
    async createCategory(body){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const id = faker.random.uuid();
              this.categories.push({
                  body,
                  id,
              });
              resolve({ id });
            }, 200)
        })
    }
    async updateCategory(id, data){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.categories.findIndex(c => c.id === id);
                if(findIndex === -1) throw boom.notFound('Category not found');

                this.categories[findIndex] = { ...this.categories[findIndex], ...data };
                resolve(this.categories[findIndex]);
            }, 200)
        });
    }
    async deleteCategory(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const findIndex = this.categories.findIndex(c => c.id === id);
                if(findIndex === -1) throw boom.notFound('Category not found');

                this.categories = this.categories.splice(findIndex, 1);
                resolve({ id });
            }, 200)
        });
    };

}

module.exports = CategorieService;
