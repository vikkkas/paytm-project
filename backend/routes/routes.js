const express = require("express");
const router = express.Router();

const userRoutes = require('./userRoutes')
const acountRoutes = require('./accountRoutes')

router.use('/user',userRoutes);
router.use('/account',acountRoutes);

module.exports = router