const express = require("express")
const { createCareer, getAllCareer, getCareerById, updateCareer, deleteCareer } = require("../Controllers/careerController")
const router = express.Router()
const upload = require("../Connections/multer")

router.post('/createcareer',upload.single("resume"), createCareer)
router.get('/getallcareer', getAllCareer)
router.get('/getcareer/:id', getCareerById)
router.put("/updatecareer/:id",upload.single("resume"), updateCareer)
router.delete("/deletecareer/:id", deleteCareer)

module.exports = router