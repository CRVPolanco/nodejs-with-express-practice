const faker = require('faker');

class ProductService{

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){

    const limit = 100;

      for(let i=0; i<limit; i++){
        this.products.push({
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl(),
          description: faker.commerce.productDescription(),
          id: faker.datatype.uuid(),
        });
      }

    }
    create(){

    }
    find(){

        return this.products;
    }
    findOne(id){
        const findProduct = this.products.find(p => p.id === id);
        return findProduct;
    }
    update(){


    }
    delete(){

    }

}

module.exports = ProductService;
