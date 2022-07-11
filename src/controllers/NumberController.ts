import { Request, Response } from "express";
import {  validationResult } from "express-validator";
import { getPrimesNumber } from "../util/numberUtil";
export class NumberController {

  public async generatePrimesNumbers(req: Request, res: Response): Promise<any> {
    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const num = parseInt(req.params.number);
    res.status(200).send(getPrimesNumber(num));
  }
}

