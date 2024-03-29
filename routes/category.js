const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require('../controllers/category');
const {
  requireSignin,
  isAuth,
  adminMiddleware,
} = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.post(
  '/category/create/:userId',
  requireSignin,
  isAuth,
  adminMiddleware,
  create
);
// router.put('/category/:categoryUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  adminMiddleware,
  update
);

router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  adminMiddleware,
  remove
);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
