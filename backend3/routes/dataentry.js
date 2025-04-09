const express = require('express')
const {
  getDataentrys,
  getDataentry,
  createDataentry,
  deleteDataentry,
  updateDataentry
} = require('../controllers/dataentryController')

const router = express.Router()

// GET all Dataentry
router.get('/', getDataentrys)

// GET a single Dataentry
router.get('/:id', getDataentry)

// POST a new Dataentry
router.post('/', createDataentry)

// DELETE a Dataentry
router.delete('/:id', deleteDataentry)

// UPDATE a Dataentry
router.patch('/:id', updateDataentry)

module.exports = router