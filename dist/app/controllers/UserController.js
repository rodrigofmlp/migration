"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _types = require('sequelize/types');
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class userController{
async index(req, res){
 try {
   const users = await _User2.default.findAll()
   return res.json({users});
 } catch (error) {
   return res.json({error});
 }
}

async show(req,res){
  try {
    const {uid} = req.params;
    const user = await _User2.default.findOne({where: {uid}});
    return res.json({ user });
  } catch (error) {
      return res.json({error});
  }
}

async store(req, res){
  try {
    const user = await _User2.default.create(req.body);

    return res.json({user});

  } catch (error) {
    return res.json({error});
  }
}

async update(req,res){
try {
  const { uid } = req.params;
  const [updated] = await _User2.default.update(req.body, { where: {uid}});
  if (!updated){
    throw Error ('usuário não encontrado');
  }
  return res.json({updated});
} catch (error) {
  return res.json({error});
}
}

async delete(req,res){
  try {
    const { uid } = req.params;
    const deleted = await _User2.default.destroy({where: {uid}});

    if (!deleted){
      throw Error ('usuário não encontrado');
    }
    return res.json({deleted});
  } catch (error) {
    return res.json({user});
  }
}
}

exports. default = new userController();
