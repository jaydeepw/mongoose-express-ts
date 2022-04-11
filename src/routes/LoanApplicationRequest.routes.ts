import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";
import { ILoanApplicationRequest } from "../models/LoanApplicationRequest";
import LoanApplicationRequestController from "../controllers/LoanApplicationRequest.controller";

const router: Router = Router();

// @route   GET /LoanApplicationRequest
// @desc    Get ApplicationRequest  Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: LoanApplicationRequestController = new LoanApplicationRequestController();
    const loanApplicationRequest: LoanApplicationRequestController = await controller.getRecords({});
    if (!loanApplicationRequest) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.APPLICATION_REQUEST_NOT_FOUND, null));
    }
    res.json(loanApplicationRequest);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /LoanApplicationRequest
// @desc    create and update OrganizationConfig
// @access  Private
router.post(
  "/",
  [
    check("Amount", "Amount is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: LoanApplicationRequestController = new LoanApplicationRequestController();
      const applicationRequest: LoanApplicationRequestController = await controller.createRecord(req.body);
      res.json(applicationRequest);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
