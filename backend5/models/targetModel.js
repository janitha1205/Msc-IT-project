const mongoose = require('mongoose')

const Schema = mongoose.Schema
//{mech,assign,reported,designation,target,mechid,remark}
const target = new Schema({
  mech: {
    type: String,
    required: true
  },
  assign: {
    type: String,
    required: true
  },
  reported: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  targets: {
    type: String,
    required: true
  },
  mechid: {
    type: String,
    required: true
  },
  remark: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Target', target)

/*
 const [mech,setMech]=useState('');
    const [employee,setEmp]=useState('');
    const [designation,setDes]=useState('');
    const [mechid, setMechid]=useState('');
    const [remark, setRemark]=useState('');


*/