// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")


// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);


// Route to build inventory item detail view
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildInventoryDetail))

// Route for intentional 500 error
router.get("/intentional-error", utilities.handleErrors(invController.triggerServerError));



module.exports = router;