const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');
const auth = require('../middleware/authMiddleware');

router.use(auth);
router.post('/', bookmarkController.createBookmark);
router.get('/', bookmarkController.getBookmarks);
router.get('/:id', bookmarkController.getBookmarkById);
router.put('/:id', bookmarkController.updateBookmark);
router.delete('/:id', bookmarkController.deleteBookmark);

module.exports = router;