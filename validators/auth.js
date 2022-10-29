const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('name is required!')
    .isLength({ min: 3, max: 20 })
    .withMessage('First name must be 3 to 20 characters long!'),
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required!')
    .isLength({ min: 4, max: 32 })
    .withMessage('Invalid Email!')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .isEmail()
    .withMessage('Please provide a valid Email!'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required!')
    .isLength({ min: 8 })
    .withMessage('Password must be atleast 7 characters long!')
    .matches('[0-9]')
    .withMessage('Password must contain at least 1 number!')
    .matches('[a-z]')
    .withMessage('Password must contain at least 1 lowercase letter!')
    .matches('[A-Z]')
    .withMessage('Password must contain at least 1 uppercase letter!')
    .matches(/(?=.*?[#?!@$%^&*-])/)
    .withMessage('At least one special character')
    .not()
    .matches(/^$|\s+/)
    .withMessage('White space not allowed'),
  check('confirm_password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password Confirmation does not match password');
    }
    return true;
  }),
];

exports.userSigninValidator = [
  check('email').isEmail().withMessage('Must be a valid email address'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least  7 characters long'),
];

exports.forgotPasswordValidator = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid email address'),
];

exports.resetPasswordValidator = [
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required!')
    .isLength({ min: 8 })
    .withMessage('Password must be atleast 7 characters long!')
    .matches('[0-9]')
    .withMessage('Password must contain at least 1 number!')
    .matches('[a-z]')
    .withMessage('Password must contain at least 1 lowercase letter!')
    .matches('[A-Z]')
    .withMessage('Password must contain at least 1 uppercase letter!')
    .matches(/(?=.*?[#?!@$%^&*-])/)
    .withMessage('At least one special character')
    .not()
    .matches(/^$|\s+/)
    .withMessage('White space not allowed'),
  check('confirm_password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password Confirmation does not match password');
    }
    return true;
  }),
];
