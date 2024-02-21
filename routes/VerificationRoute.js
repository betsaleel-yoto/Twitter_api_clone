const express = require("express");

const router = express.Router();
const {verifierUtilisateur} = require("../controllers/controllerVerification");
const multer = require("multer");

router.post('',verifierUtilisateur)
module.exports=router