const Target = require('../models/targetModel')
const mongoose = require('mongoose')

// get all Targets
const getTargets = async (req, res) => {
  const targets = await Target.find({}).sort({createdAt: -1})

  res.status(200).json(targets)
}

// get a single Target
const getTarget = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Target'})
  }

  const target = await Target.findById(id)

  if (!target) {
    return res.status(404).json({error: 'No such Target'})
  }

  res.status(200).json(target)
}

// create a new Target
const createTarget = async (req, res) => {
  const {mech,assign,reported,designation,targets,mechid,remark} = req.body

  // add to the database
  try {
    const target = await Target.create({mech,assign,reported,designation,targets,mechid,remark})
    res.status(200).json(target)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Target
const deleteTarget = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Target'})
  }

  const target = await Target.findOneAndDelete({_id: id})

  if(!target) {
    return res.status(400).json({error: 'No such Target'})
  }

  res.status(200).json(target)
}

// update a Target
const updateTarget = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Target'})
  }

  const target = await Target.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!target) {
    return res.status(400).json({error: 'No such Target'})
  }

  res.status(200).json(target)
}

module.exports = {
  getTargets,
  getTarget,
  createTarget,
  deleteTarget,
  updateTarget
}