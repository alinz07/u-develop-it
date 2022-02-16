const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;