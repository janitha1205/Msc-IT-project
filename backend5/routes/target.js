const express = require('express')
const {
  getTargets,
  getTarget,
  createTarget,
  deleteTarget,
  updateTarget
} = require('../controllers/targetController')

const router = express.Router()

// GET all target
router.get('/', getTargets)

// GET a single target
router.get('/:id', getTarget)

// POST a new target
router.post('/', createTarget)

// DELETE a target
router.delete('/:id', deleteTarget)

// UPDATE a target
router.patch('/:id', updateTarget)

module.exports = router