const faker = require('faker');
const boom = require('@hapi/boom');

class UserService{

    constructor(){
        this.users = [];
        this.generateUsers();
    }

    generateUsers(){

        const usersQuantity = 100;

        for(let i=0; i<usersQuantity; i++){
            this.users.push({
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                username: faker.internet.userName(),
                email: faker.internet.email(),
                address: `${faker.address.country()}, ${faker.address.state()}, ${faker.address.cityName()}, ${faker.address.streetAddress()}`,
                date: faker.date.past(),
                id: i + 1,
            });
        };
    }
    async find(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.users);
            }, 150)
        })
    }
    async findUser(id){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const findUser = this.users.find(u => u.id === id);
                if(!findUser) throw boom.notFound('User not found');

                resolve(findUser);
            }, 150);
        })

    }
    async createUser(data){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newId = this.users.length + 1;
                this.users.push({
                  ...data,
                  id: newId,
                });
                resolve(newId);
            }, 250);
        })
    };
    async update(id, dataUpdated){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

              const findIndex = this.users.findIndex(u => u.id === id);
              if(!findIndex) throw boom.notFound('User not found');
              this.users[findIndex] = { ...this.users[findIndex], ...dataUpdated };

              resolve(this.users[findIndex]);
            }, 300)
        })
    }
    async delete(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

              const findIndex = this.users.findIndex(u => u.id === id);
              if(!findIndex) throw boom.notFound('User not found');
              this.users = this.users.splice(findIndex, 1);

              resolve({ id });
            }, 200);
        })
    }

}

module.exports = UserService;
