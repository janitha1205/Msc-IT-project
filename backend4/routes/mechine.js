const express = require('express')
const {
  getMechines,
  getMechine,
  createMechine,
  deleteMechine,
  updateMechine
} = require('../controllers/machineController')

const router = express.Router()

// GET all Mechine
router.get('/', getMechines)

// GET a single Mechine
router.get('/:id', getMechine)

// POST a new Mechine
router.post('/', createMechine)

// DELETE a Mechine
router.delete('/:id', deleteMechine)

// UPDATE a Mechine
router.patch('/:id', updateMechine)

module.exports = router