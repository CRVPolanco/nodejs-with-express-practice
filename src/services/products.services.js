const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService{

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){

    const limit = 100;

      for(let i=0; i<limit; i++){
        this.products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl(),
          description: faker.commerce.productDescription(),
          isBlocked: faker.datatype.boolean(),
        });
      }

    }
    async create(data){

      const id = faker.datatype.uuid();

      this.products.push({
        ...data,
        id
      })
    }
    async find(){
      console.log(this.products);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.products);
        }, 1250);
      })
    }
    async findOne(id){

      const findProduct = this.products.find(p => p.id === id);

      if(!findProduct) throw boom.notFound('Product not found');
      if(findProduct.isBlocked) throw boom.conflict('Product is blocked');

      return findProduct;
    }
    async update(id, after){

      const indexProduct = this.products.findIndex(p => p.id === id);
      console.log(indexProduct);

      if(indexProduct === -1) throw boom.notFound('Product not found');

      this.products[indexProduct] = { ...this.products[indexProduct], ...after };
      return this.products[indexProduct];

    }
    async delete(id){

      const indexArray = this.products.findIndex(p => p.id === id);

      if(!indexArray) throw boom.notFound('Product selected to delete was not found')

      this.products.splice(indexArray, 1);

      return { id };

    }

}

module.exports = ProductService;
