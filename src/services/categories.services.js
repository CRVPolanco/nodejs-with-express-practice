const faker = require('faker');

class CategorieService {

    constructor(){
        this.categories = [];
        this.generateCategories();
    }

    generateCategories(){
        this.categories.push({
            categoryName: faker.commerce.productMaterial(),
            id: faker.random.uuid(),
        })
    }
    categories(){
        return this.categories;
    }
    findCategory(id){

        const findProduct = this.categories.find(c => c.id === id);
        return findProduct;
    }
    createCategory(body){

        const id = faker.random.uuid();

        this.categories.push({
            body,
            id,
        });

        return id;
    }
    updateCategory(actual, next){

        const copyCategoriesArray = [...this.categories];
        const newObject = { ...actual, ...next };

        copyCategoriesArray.push(newObject);
        this.categories = copyCategoriesArray;

        return true;

    }
    deleteCategory(id){

        const filterArray = this.categories.filter(c => c.id === id);
        this.categories = filterArray

        return true;
    }

}

module.exports = CategorieService;
