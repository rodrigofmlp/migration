"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const routes = _express.Router.call(void 0, );
routes.use(cors());

// Rotas de user.

routes.get('/', (req, res) => res.json('TEST-API'));

routes.post('/users', _UserController2.default.store);

routes.get('/users', _UserController2.default.index);

routes.get('/users/:uid', _UserController2.default.show);

routes.put('/users/:uid', _UserController2.default.update);

routes.delete('/users/:uid', _UserController2.default.delete);

//
exports. default = routes;
