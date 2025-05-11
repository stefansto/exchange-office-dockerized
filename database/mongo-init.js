db = new Mongo().getDB('exchange');

db.createCollection('users');
db.createCollection('currencies');
db.createCollection('transactions');

db.users.insertOne({
    username: 'admin',
    password: '736735fc409979a988c70e3afda49b9b:76070266790f263fe04b6cc98395f9bfeacada555871ed1eb82ae6c9a3da4999',
    active: true,
    date: new Date(),
    role: 'admin'
});

db.currencies.insertMany([
    {
        name: 'EUR',
        img: 'eur.jpg',
        ammount: 0,
    },
    {
        name: 'USD',
        img: 'usd.jpg',
        ammount: 0,
    },
    {
        name: 'RSD',
        img: 'rsd.jpg',
        ammount: 0,
    },
    {
        name: 'GBP',
        img: 'gbp.jpg',
        ammount: 0,
    }
]);


db.users.createIndex({ 'username': 1 }, { unique: true });