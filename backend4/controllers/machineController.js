const mechines = require('../models/machineModel')
const mongoose = require('mongoose')

// get all Mechine
const getMechines = async (req, res) => {
  const Mechines = await mechines.find({}).sort({createdAt: -1})

  res.status(200).json(Mechines)
}

// get a single Mechine
const getMechine = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Mechine'})
  }

  const Mechine = await mechines.findById(id)

  if (!Mechine) {
    return res.status(404).json({error: 'No such Mechine'})
  }

  res.status(200).json(Mechine)
}

// create a new Mechine
const createMechine = async (req, res) => {
  const {m_name,mid,model,name,department,designation,maxoutput} = req.body

  // add to the database
  try {
    const Mechine = await mechines.create({m_name,mid,model,name,department,designation,maxoutput})
    res.status(200).json(Mechine)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Mechine
const deleteMechine = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Mechine'})
  }

  const Mechine = await mechines.findOneAndDelete({_id: id})

  if(!Mechine) {
    return res.status(400).json({error: 'No such Mechine'})
  }

  res.status(200).json(Mechine)
}

// update a Mechine
const updateMechine = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Mechine'})
  }

  const Mechine = await mechines.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Mechine) {
    return res.status(400).json({error: 'No such Mechine'})
  }

  res.status(200).json(Mechine)
}

module.exports = {
  getMechines,
  getMechine,
  createMechine,
  deleteMechine,
  updateMechine
}