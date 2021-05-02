const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/create_post', postController.createPost);
router.post('/edit_post', postController.edit_post);
router.post('/delete_post', postController.delete_post);
module.exports = router;
