const mongoose = require('mongoose')

const Schema = mongoose.Schema

const breakdown = new Schema({
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
  urgency: {
    type: String,
    required: true
  },
  remark: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Breakdown', breakdown)

/*
 const [mech,setMech]=useState('');
    const [employee,setEmp]=useState('');
    const [designation,setDes]=useState('');
    const [mechid, setMechid]=useState('');
    const [remark, setRemark]=useState('');


*/