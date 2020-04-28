const express = require('express');
const mongoose = require('mongoose');
const Employee = require('../DB/Employee');
const route = express.Router();


route.post('/', async (req, res) => {
  let userModel = new Employee(req.body);
  await userModel.save();
  res.json(userModel);    
});

route.get('/', async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});

module.exports = route;