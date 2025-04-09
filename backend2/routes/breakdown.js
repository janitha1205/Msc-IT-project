const express = require('express')
const {
  getBreakdowns,
  getBreakdown,
  createBreakdown,
  deleteBreakdown,
  updateBreakdown
} = require('../controllers/breakdownController')

const router = express.Router()

// GET all workouts
router.get('/', getBreakdowns)

// GET a single workout
router.get('/:id', getBreakdown)

// POST a new workout
router.post('/', createBreakdown)

// DELETE a workout
router.delete('/:id', deleteBreakdown)

// UPDATE a workout
router.patch('/:id', updateBreakdown)

module.exports = router