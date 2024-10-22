import { body } from "express-validator";

export const checkRegister = [
  body("name")
    .notEmpty()
    .withMessage("name must required")
    .isString()
    .withMessage("name must be a string value"),
  body("email")
    .notEmpty()
    .withMessage("email must required")
    .isEmail()
    .withMessage("Please enter a valid mail"),
  body("password")
    .notEmpty()
    .withMessage("password must required")
    .isLength(6)
    .withMessage("password required atleast 6 charecters"),
];

export const checkLogin = [
  body("email")
    .notEmpty()
    .withMessage("email must required")
    .isEmail()
    .withMessage("Please enter a valid mail"),
  body("password")
    .notEmpty()
    .withMessage("password must required")
    .isLength(6)
    .withMessage("password required atleast 6 charecters"),
];

export const checkVehicleBody = [
  body("name")
    .notEmpty()
    .withMessage("vehicle name must required")
    .isString()
    .withMessage("name must be a string value"),
  body("type")
    .notEmpty()
    .withMessage("vehicle type must required")
    .isString()
    .withMessage("vehicle type must be a string value"),
  body("brand")
    .notEmpty()
    .withMessage("brand of must required")
    .isString()
    .withMessage("vehicle brand must be a string value"),
  body("mileage")
    .optional()
    .isString()
    .withMessage("mileage must be a string value"),
  body("fuel_type")
    .optional()
    .isString()
    .withMessage("mileage must be a string value"),
  body("model")
    .optional()
    .isString()
    .withMessage("mileage must be a string value"),
  body("price")
    .optional()
    .isNumeric()
    .withMessage("price must be a number value"),
  body("transmission")
    .optional()
    .isString()
    .withMessage("mileage must be a string value"),
  body("color")
    .optional()
    .isString()
    .withMessage("mileage must be a string value"),
];
