import { Router } from "express";
import { NumberController } from "../controllers/NumberController";
import { validatorsPrimesNumber } from "./validators/primesNumbersValidator"
export class NumberRoutes {

    router: Router;
    public numberController: NumberController = new NumberController();

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {

        this.router.get("/primes-number/:number", validatorsPrimesNumber, this.numberController.generatePrimesNumbers);

    }
}