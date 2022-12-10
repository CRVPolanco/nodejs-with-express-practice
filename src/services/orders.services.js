const faker = require('faker');

class OrderService {

    constructor(){
        this.orders = [];
    }

    generateOrder(){
      const products = [];
      for(let i=0; i<4; i++){
          products.push(faker.commerce.productName());
      }
      this.orders.push({
        customer_who_has_ordered: `${faker.name.firstName()} ${faker.name.lastName()}`,
        money_expensed: faker.finance.amount(),
        bought_date: faker.date.past(),
        products_ordered: [
            ...products
        ],
        status: !!faker.random.boolean() ? 'Completed' : 'Pending',
        id: faker.random.uuid,
      });
    }

    findOrder(id){
      const findIndex = this.orders.find(o => o.id === id);
      return this.orders[findIndex];
    }
    createOrder(body){

      const newId = faker.random.uuid;

      this.orders.push({
        customer_who_has_ordered: body.customer_who_has_ordered ?? '',
        money_expensed: body.money_expensed ?? '0',
        bought_date: body.bought_date ?? 'dd/mm/aa',
        products_ordered: body.products_ordered ?? [],
        status: 'Pending',
        id: newId,
      })

      return newId;
    }
    updateOrder(order, newOrderData){

      const copyArray = this.orders.filter(o => o.id !== order.id);
      const orderUpdatedObject = { ...order, ...newOrderData };

      copyArray.push(orderUpdatedObject);
      return orderUpdatedObject;
    }
    deleteOrder(id){
      const copyArray = [...this.orders];
      const filter = copyArray.filter(o => o.id !== id);

      this.orders = filter;
      return true;
    }

}

module.exports = OrderService;
