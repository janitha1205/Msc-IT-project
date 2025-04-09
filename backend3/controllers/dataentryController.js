const Dataentry = require('../models/dataentryModel')
const mongoose = require('mongoose')

// get all dataentry
const getDataentrys = async (req, res) => {
  const dataentry = await Dataentry.find({}).sort({createdAt: -1})

  res.status(200).json(dataentry)
}

// get a single dataentry
const getDataentry = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such dataentry'})
  }

  const dataentry = await Dataentry.findById(id)

  if (!dataentry) {
    return res.status(404).json({error: 'No such dataentry'})
  }

  res.status(200).json(dataentry)
}

// create a new Dataentry
const createDataentry = async (req, res) => {
  const {mech,employee, designation, mechid,actual,remark} = req.body

  // add to the database
  try {
    const dataentry = await Dataentry.create({mech,employee, designation, mechid,actual,remark })
    res.status(200).json(dataentry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Dataentry
const deleteDataentry = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such dataentry'})
  }

  const dataentry = await Dataentry.findOneAndDelete({_id: id})

  if(!dataentry) {
    return res.status(400).json({error: 'No such dataentry'})
  }

  res.status(200).json(dataentry)
}

// update a Dataentry
const updateDataentry = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such dataentry'})
  }

  const dataentry = await Dataentry.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!dataentry) {
    return res.status(400).json({error: 'No such dataentry'})
  }

  res.status(200).json(dataentry)
}

module.exports = {
  getDataentrys,
  getDataentry,
  createDataentry,
  deleteDataentry,
  updateDataentry
}