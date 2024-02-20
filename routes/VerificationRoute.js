const express = require("express");

const router = express.Router();
const {verifierUtilisateur} = require("../controllers/controllerVerification");

router.post('',verifierUtilisateur)
module.exports=router