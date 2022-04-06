import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import ILenderConfigController from "../controllers/LenderConfig.controller";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";

const router: Router = Router();

// @route   GET /LenderConfig
// @desc    Get Lender Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: ILenderConfigController = new ILenderConfigController();
    const organizationConfig: ILenderConfigController = await controller.getRecords({});
    if (!organizationConfig) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.NO_ORG_CONFIG_FOUND, null));
    }
    res.json(organizationConfig);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /LenderConfig
// @desc    create and update LenderConfig
// @access  Private
router.post(
  "/",
  [
    check("Collateral_Max", "Min Collateral is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: ILenderConfigController = new ILenderConfigController();
      const organizationConfig: ILenderConfigController = await controller.createRecord(req.body);
      res.json(organizationConfig);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
