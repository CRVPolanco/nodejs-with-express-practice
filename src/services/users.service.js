const faker = require('faker');

class UserService{

    constructor(){
        this.users = [];
    }

    generateUsers(){
        const usersQuantity = 100;

        for(let i=0; i<usersQuantity; i++){
            this.users.push({
                name: `${faker.name.firstName} ${faker.name.lastName}`,
                username: faker.internet.userName,
                email: faker.internet.email,
                address: `${faker.address.country}, ${faker.address.state}, ${faker.address.cityName}, ${faker.address.streetAddress}`,
                date: faker.date.past,
                id: i + 1,
            });
        };

    }
    findUser(id){
        return this.products.find(u => u.id === id);
    }
    createUser(){

    }
    updateUser(id){

    }
    deleteUser(id){

    }


}
