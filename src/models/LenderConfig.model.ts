import { Document, model, Schema } from "mongoose";
import { Product } from "./Product.model";

/**
 * Interface to model the Organization Config for TypeScript.
    * @param Collateral_Min: Number
    * @param Collateral_Max: Number
    * @param Loan_Amount: String
    * @param Purpose: String
    * @param Product: String
    * @param Product: Number
    * @param APR: String
    * @param Location: String
    * @param Term: Number
    * @param Credit_Score: Number
 */
export interface ILenderConfig extends Document {
  LenderName: String,
  Products: Array<IProduct>
}

export interface ILoanApplicationRequest extends Document {
  LoanId: String,
  LoanType: String,
  CustomerName: String, // ideally should be pointing to IUser type in the core domain models
  Amount: String,
  Status: String,
  Lender: ILenderConfig,
  Agent: String, // ideally should be pointing to IUser type in the core domain models
  Product: IProduct // considering that we will be having IProd records of each possible combination
  NotificationSent: Boolean
}

export interface IEmailNotification extends Document {
  LoanRequest: ILoanApplicationRequest
  Message: String,
}

export const lenderConfig: Schema = new Schema({
  Collateral_Max: {
    type: Number
  },
  Collateral_Min: {
    type: Number
  },
  Purpose: {
    type: String
  },
  APR: {
    type: Number
  },
  APRType: {
    type: String
  },
  Location: {
    type: String
  },
  LocationIncluded: {
    type: Boolean
  },
  Term: {
    type: Number
  },
  Credit_Score: {
    type: Number
  },
  OfferName: {
    type: String
  }
});

const LenderConfig = model<ILenderConfig>("lenderConfig", lenderConfig);

export default LenderConfig;