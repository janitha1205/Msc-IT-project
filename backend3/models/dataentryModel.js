const mongoose = require('mongoose')

const Schema = mongoose.Schema
//mech+employee+designation+mechid+actual+remark
const dataentry = new Schema({
  mech: {
    type: String,
    required: true
  },
  employee: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  mechid: {
    type: String,
    required: true
  },
  actual: {
    type: String,
    required: true
  },
  remark: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Dataentry', dataentry)

