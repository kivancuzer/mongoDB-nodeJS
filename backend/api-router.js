let router = require('express').Router();
let categoryController = require('./controllers/categoryController');

router.route("/category").get(categoryController.list).post(categoryController.create);

router.route("category/:category_id");

module.exports=router;
