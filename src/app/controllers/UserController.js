import { where } from 'sequelize/types';
import User from '../models/User';

class userController{
async index(req, res){
 try {
   const users = await User.findAll()
   return res.json({users});
 } catch (error) {
   return res.json({error});
 }
}

async show(req,res){
  try {
    const {uid} = req.params;
    const user = await User.findOne({where: {uid}});
    return res.json({ user });
  } catch (error) {
      return res.json({error});
  }
}

async store(req, res){
  try {
    const user = await User.create(req.body);

    return res.json({user});

  } catch (error) {
    return res.json({error});
  }
}

async update(req,res){
try {
  const { uid } = req.params;
  const [updated] = await User.update(req.body, { where: {uid}});
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
    const deleted = await User.destroy({where: {uid}});

    if (!deleted){
      throw Error ('usuário não encontrado');
    }
    return res.json({deleted});
  } catch (error) {
    return res.json({user});
  }
}
}

export default new userController();
