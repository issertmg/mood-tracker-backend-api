const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries')

router.get('/users/:userid/entries', entriesController.getEntriesV1)
router.post('/users/:userid/entries', entriesController.addEntryV1)
router.get('/users/:userid/entries/:entryid', entriesController.getEntryV1)
router.put('/users/:userid/entries/:entryid', entriesController.updateEntryV1)
router.delete('/users/:userid/entries/:entryid', entriesController.deleteEntryV1)
router.get('/users/:userid/linechartdata', entriesController.getLineChartDataV1)

module.exports = router;