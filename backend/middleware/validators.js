const { check, validationResult } = require("express-validator");

const registerValidator = [
  check("username", "Username is required")
    .trim()
    .not()
    .isEmpty()
    .isAlphanumeric()
    .withMessage(
      "Username should only be alphanumeric. No special characters allowed"
    )
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters"),
  check("email", "Please include a valid email").normalizeEmail().isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  check("firstName", "First name is required")
    .trim()
    .not()
    .isEmpty()
    .isAlpha()
    .withMessage("First name should only be alphabets")
    .isLength({ min: 3, max: 20 })
    .withMessage("First name must be between 3 and 20 characters"),
  check("lastName", "Last name is required")
    .trim()
    .not()
    .isEmpty()
    .isAlpha()
    .withMessage("Last name should only be alphabets")
    .isLength({ min: 3, max: 20 })
    .withMessage("Last name must be between 3 and 20 characters"),
];

const loginValidator = [
  check("email", "Please include a valid email").normalizeEmail().isEmail(),
  check("password", "Password is required").exists(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

// const  validate = (req, res, next) => {
//     const error = validationResult(req).array();
//     if (error.length) {
//       console.log(error);
//       return res.json({ error: error[0].msg });
//     }

//     next();
//   };

module.exports = {
  registerValidator,
  loginValidator,
  validate,
};
