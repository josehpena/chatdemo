const bcrypt = require('bcrypt');
const { ResumeToken } = require('mongodb');

function createUser(username, password, email, callback) {
    const cryptPwd = bcrypt.hashSync(password, 10);
    global.db.collection("users").insert({ username, password: cryptPwd, email }, (err, result) => {
        callback(err, result);
    })
}

module.exports = { createUser };