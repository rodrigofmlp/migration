"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV4,
        },
        name: {
          allowNull: false,
          type: _sequelize2.default.STRING,
        },
        age: {
          allowNull: false,
          type: _sequelize2.default.INTEGER,
        },
        phone: {
          allowNull: false,
          type: _sequelize2.default.STRING,
        },
        email: {
          allowNull: false,
          type: _sequelize2.default.STRING,
          validate: {
            isEmail: true,
          },
          cpf: {
            allowNull: true,
            type: _sequelize2.default.STRING,
          },
        },
      },
      { sequelize }
    );
    return this;
  }
}

exports. default = User;
