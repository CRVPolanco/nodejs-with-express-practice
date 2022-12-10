const faker = require('faker');
const boom = require('@hapi/boom');

class OrderService {

    constructor(){
        this.orders = [];
    }

    generateOrder(){

      const products = [];
      for(let i=0; i<10; i++){
        if(!!faker.random.boolean()){
          products.push(faker.commerce.productName());
        }
      }

      this.orders.push({
        id: faker.random.uuid,
        customer_who_has_ordered: `${faker.name.firstName()} ${faker.name.lastName()}`,
        money_expensed: faker.finance.amount(),
        bought_date: faker.date.past(),
        products_ordered: [
            ...products
        ],
        isCompleted: faker.random.boolean(),
      });
    }

    async findOrder(id){

      return new Promise((resolve, reject) => {
        setTimeout(() => {

          const findOrder = this.orders.findIndex(o => o.id === id);
          if(!findOrder) throw boom.notFound('Order not found');
          resolve(this.orders[findOrder]);

        }, 150);
      });
    }

    async createOrder(body){

      return new Promise((resolve, reject) => {
        setTimeout(() => {

          const newId = faker.datatype.uuid();

          this.orders({
            id: newId,
            ...body,
            isCompleted: false,
          });

          resolve(newId);
        }, 300);
      });
    }

    async updateOrder(id, newOrderData){

      return new Promise((resolve, reject) => {
        setTimeout(() => {

          const findIndex = this.orders.findIndex(o => o.id === id);
          if(findIndex === -1) throw boom.notFound('Order not found');

          this.orders[findIndex] = { ...this.orders[findIndex], ...newOrderData };
          resolve(this.orders[findIndex]);
        }, 300);
      })
    }

    async deleteOrder(id){
      return new Promise((resolve, reject) => {
        setTimeout(() => {

          const findIndex = this.orders.findIndex(o => o.id === id);
          if(findIndex === -1) throw boom.notFound('Order not found');

          this.orders = this.orders.splice(findIndex, 1);
          resolve({ id });
        }, 250)
      })
    }

}

module.exports = OrderService;
