const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 * Build inventory item detail view
 * ************************** */
invCont.buildInventoryDetail = async function (req, res, next) {
  const inv_id = req.params.inv_id
  const vehicle = await invModel.getInventoryById(inv_id)
  let nav = await utilities.getNav()
  const detail = await utilities.buildVehicleDetail(vehicle[0]) // Assuming getInventoryById returns an array

  res.render("./inventory/detail", {
      title: vehicle[0].inv_make + " " + vehicle[0].inv_model + " Details",
      nav,
      detail,
  })
}


// Controller function to trigger a 500 error
invCont.triggerServerError = async function (req, res, next) {
  throw new Error("Intentional Server Error");
};

module.exports = invCont
