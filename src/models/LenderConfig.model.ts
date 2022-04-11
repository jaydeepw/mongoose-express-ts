import { Document, model, Schema } from "mongoose";
import { ILoanApplicationRequest } from "./LoanApplicationRequest";
import { IProduct } from "./Product.model";

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