import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";
import ILenderApiController from "../controllers/LenderApi.controller";

const router: Router = Router();

// @route   GET /LenderApi
// @desc    Get Lender Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: ILenderApiController = new ILenderApiController();
    const lenderApiController: ILenderApiController = await controller.getRecords({});
    if (!lenderApiController) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.NO_ORG_CONFIG_FOUND, null));
    }
    res.json(lenderApiController);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /LenderApi
// @desc    create and update LenderConfig
// @access  Private
router.post(
  "/",
  [
    check("API_Endpoint", "API_Endpoint is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: ILenderApiController = new ILenderApiController();
      const lenderApiController: ILenderApiController = await controller.createRecord(req.body);
      res.json(lenderApiController);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
