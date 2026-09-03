const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '1234'
});

let getRandomUser = () => {
    // return {
    //     id: faker.string.uuid(),
    //     username: faker.internet.username(),
    //     email: faker.internet.email(),
    //     password: faker.internet.password(),
    // };
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let data = [];
for(let i=1; i<=100; i++){
    data.push(getRandomUser());
}

// let q =  "INSERT INTO user (userId, username, email, password) VALUES (?, ?, ?, ?)";

let q =  "INSERT INTO user (userId, username, email, password) VALUES ?";

let query = "SELECT * FROM user;";

// let users = [
//     ["123a","123_newusera", "abc@gmail.coma", "abca"],
//     ["123b","123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c","123_newuserc", "abc@gmail.comc", "abcc"]
// ];

try{
    // connection.query( q, user, (err, result) => {
    connection.query( query, (err, result) => {
            if(err) throw err;
            console.log(result);
        }
    )
}catch(err){
    console.log(err);
}

connection.end();





// console.log(getRandomUser());