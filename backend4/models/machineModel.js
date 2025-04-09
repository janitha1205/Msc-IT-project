const mongoose = require('mongoose')

const Schema = mongoose.Schema
//{m_name,mid,model,name,department,designation};

const mechine = new Schema({
  m_name: {
    type: String,
    required: true
  },
  mid: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  maxoutput: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Mechine', mechine)

