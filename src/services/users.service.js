const faker = require('faker');

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
    find(){
        return this.users;
    }
    findUser(id){
        return this.users.find(u => u.id === Number(id));
    }
    createUser(user){

        const newId = this.users.length + 1;

        this.users.push({
            name: user.name ?? '',
            username: user.username ?? '',
            email: user.email ?? '',
            address: user.address ?? '',
            date: user.date ?? '',
            id: newId,
        });

        return newId;
    };
    update(user, userUpd){

        const copyArray = this.users.filter(u => u.id !== user.id);
        const userUpdatedObject = { ...user, ...userUpd };

        copyArray.push(userUpdatedObject);

        this.users = copyArray.sort((a, b) => a.id - b.id);

        return userUpdatedObject;
    }
    delete(id){

        const copyArray = [...this.users];
        const filter = copyArray.filter(u => u.id !== Number(id));

        this.users = filter;
    }

}

module.exports = UserService;
