const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'Tejaswini@21',
    port: 5432
});
client.connect();
const query = `
CREATE TABLE IF NOT EXISTS users(
    id serial NOT NULL PRIMARY KEY,
    email varchar,
    firstname varchar,
    lastname varchar,
    age int
);
`;
//using callbacks
client.query(query, (err, res) => {
    if (err) {
        return console.log("Error", err.message);
    }
    console.log("Table created succesfully");
    client.end();
});