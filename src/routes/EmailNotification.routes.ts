import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";
import EmailNotificationController from "../controllers/EmailNotification.controller";

const router: Router = Router();

// @route   GET /EmailNotification
// @desc    Get the EmailNotification
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: EmailNotificationController = new EmailNotificationController();
    const emailNotification: EmailNotificationController = await controller.getRecords({});
    if (!emailNotification) {
      return res.status(HttpStatusCodes.BAD_REQUEST)
      .json(ErrorHandler.getErrorJson(Constants.EMAIL_NOTIFICATION_NOT_FOUND, null));
    }
    res.json(emailNotification);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /EmailNotification
// @desc    create EmailNotification
// @access  Private
router.post(
  "/",
  [
    check("Message", "Message is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: EmailNotificationController = new EmailNotificationController();
      const emailNotification: EmailNotificationController = await controller.createRecord(req.body);
      res.json(emailNotification);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
