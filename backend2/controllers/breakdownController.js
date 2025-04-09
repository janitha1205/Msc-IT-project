const Breakdown = require('../models/breakdownModel')
const mongoose = require('mongoose')

// get all breakdowns
const getBreakdowns = async (req, res) => {
  const breakdowns = await Breakdown.find({}).sort({createdAt: -1})

  res.status(200).json(breakdowns)
}

// get a single breakdown
const getBreakdown = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such breakdown'})
  }

  const breakdown = await Breakdown.findById(id)

  if (!breakdown) {
    return res.status(404).json({error: 'No such breakdown'})
  }

  res.status(200).json(breakdown)
}

// create a new breakdown
const createBreakdown = async (req, res) => {
  const {mech,employee, designation, mechid,urgency,remark} = req.body

  // add to the database
  try {
    const breakdown = await Breakdown.create({mech,employee, designation, mechid,urgency,remark })
    res.status(200).json(breakdown)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a breakdown
const deleteBreakdown = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such breakdown'})
  }

  const breakdown = await Breakdown.findOneAndDelete({_id: id})

  if(!breakdown) {
    return res.status(400).json({error: 'No such breakdown'})
  }

  res.status(200).json(breakdown)
}

// update a breakdown
const updateBreakdown = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such breakdown'})
  }

  const breakdown = await Breakdown.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!breakdown) {
    return res.status(400).json({error: 'No such breakdown'})
  }

  res.status(200).json(breakdown)
}

module.exports = {
  getBreakdowns,
  getBreakdown,
  createBreakdown,
  deleteBreakdown,
  updateBreakdown
}