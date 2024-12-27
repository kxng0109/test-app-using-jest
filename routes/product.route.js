const { Router } = require("express");
const router = Router();
const {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} = require("../controllers/product.controller");

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
