const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries')
const auth = require('../middlewares/auth')

router.get('/users/:userid/entries', auth, entriesController.getEntriesV1)
router.post('/users/:userid/entries', auth, entriesController.addEntryV1)
router.get('/users/:userid/entries/:entryid', auth, entriesController.getEntryV1)
router.put('/users/:userid/entries/:entryid', auth, entriesController.updateEntryV1)
router.delete('/users/:userid/entries/:entryid', auth, entriesController.deleteEntryV1)
router.get('/users/:userid/linechartdata', auth, entriesController.getLineChartDataV1)

module.exports = router;