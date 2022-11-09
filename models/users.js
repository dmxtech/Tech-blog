const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

module.exports = User;