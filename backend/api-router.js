let router = require('express').Router();
let categoryController = require('./controllers/categoryController');
let bookController = require('./controllers/bookController');

router.route("/category").get(categoryController.list).post(categoryController.create);

router.route("category/:category_id").put(categoryController.update);
router.route("/book").get(bookController.list);
router.route("/book/:book_id").get(bookController.getById);


module.exports=router;
