import { Document, model, Schema } from "mongoose";

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
  Collateral_Max: Number,
  Collateral_Min: Number,
  Loan_Amount: String,
  Purpose: String,
  Product: String,
  APR: Number,
  Location: String,
  Term: Number,
  Credit_Score: Number
}

export const lenderConfig: Schema = new Schema({
  Collateral_Max: {
    type: Number
  },
  Collateral_Min: {
    type: Number
  },
  Loan_Amount: {
    type: String
  },
  Purpose: {
    type: String
  },
  Product: {
    type: String
  },
  APR: {
    type: Number
  },
  Location: {
    type: String
  },
  Term: {
    type: Number
  },
  Credit_Score: {
    type: Number
  }
});

const LenderConfig = model<ILenderConfig>("lenderConfig", lenderConfig);

export default LenderConfig;