const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();
const { verifyAccessToken } = require('../utils/verifyToken')
router.post('/create_post', verifyAccessToken, postController.createPost);
router.post('/edit_post', postController.edit_post);
router.post('/delete_post', postController.delete_post);
router.get('/all', postController.getAllPost)
module.exports = router;
