const express = require("express")
const { createcontact, getAllContact, getContactById, updateContact, deleteContact, Subscribe } = require("../Controllers/contactController")
const router = express.Router()

router.post('/createcontact', createcontact)
router.get('/getallcontact', getAllContact)
router.get('/getcontact/:id', getContactById)
router.put("/updatecontact/:id", updateContact)
router.delete("/deletecontact/:id", deleteContact)

// Subscribe
router.post('/subscribe', Subscribe)

module.exports = router