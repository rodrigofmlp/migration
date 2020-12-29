"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
require('dotenv/config');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);

const models = [_User2.default];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(process.env.DATABASE_URL, _database2.default);

    models.map((model) => model.init(this.connection));
  }
}

exports. default = new DataBase();
