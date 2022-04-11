import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";
import ProductController from "../controllers/Product.controller";

const router: Router = Router();

// @route   GET /Product
// @desc    Get the product
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: ProductController = new ProductController();
    const product: ProductController = await controller.getRecords({});
    if (!product) {
      return res.status(HttpStatusCodes.BAD_REQUEST)
      .json(ErrorHandler.getErrorJson(Constants.PRODUCT_NOT_FOUND, null));
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /Product
// @desc    create Product
// @access  Private
router.post(
  "/",
  [
    check("Loan_Amount", "Loan_Amount is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: ProductController = new ProductController();
      const product: ProductController = await controller.createRecord(req.body);
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
