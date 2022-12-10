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
    async create(data){

      const id = faker.datatype.uuid();

      this.products.push({
        ...data,
        id
      })
    }
    async find(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.products);
        }, 1250)
      })
    }
    async findOne(id){
      const name = this.getOne();
      return this.products.find(p => p.id === id);
    }
    async update(id, after){

      const indexProduct = copyArray.findIndex(p => p.id === id);

      if(!indexProduct) throw new Error('Product not found');

      this.products[indexProduct] = { ...this.products[indexProduct], ...after };
      return this.products[indexProduct];

    }
    async delete(id){

      const indexArray = this.products.findIndex(p => p.id === id);
      this.products.splice(indexArray, 1);

      return { id };

    }

}

module.exports = ProductService;
