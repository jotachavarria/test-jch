import { param } from "express-validator";

const validatorsPrimesNumber = [
    param("number")
    .exists()
    .isNumeric().withMessage("Enter only numbers")
    .isInt({ min: 3 }).withMessage("The number must be greater than 2")
];
export { validatorsPrimesNumber };