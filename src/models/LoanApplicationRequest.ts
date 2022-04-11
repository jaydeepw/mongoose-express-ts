import { Document, model, Schema } from "mongoose";
import { ILenderConfig, lenderConfig } from "./LenderConfig.model";
import { iProduct, IProduct } from "./Product.model";

/**
 * Interface to model the LenderAPI for TypeScript.
 */
 export interface ILoanApplicationRequest extends Document {
  LoanId: String,
  LoanType: String,
  CustomerName: String, // ideally should be pointing to IUser type in the core domain models
  Amount: Number,
  Status: String,
  Lender: ILenderConfig,
  Agent: String, // ideally should be pointing to IUser type in the core domain models
  Product: IProduct // considering that we will be having IProd records of each possible combination
  NotificationSent: Boolean
}

export const loanApplicationRequest: Schema = new Schema({
  LoanId: {
    type: String
  },
  LoanType: {
    type: String
  },
  CustomerName: {
    type: String
  },
  Amount: {
    type: Number
  },
  Status: {
    type: String
  },
  Lender: {
    type: lenderConfig
  },
  Agent: {
    type: String
  },
  Product: {
    type: iProduct
  },
  NotificationSent: {
    type: Boolean
  }
});

const LoanApplicationRequest = model<ILoanApplicationRequest>("loanApplicationRequest", loanApplicationRequest);

export default LoanApplicationRequest;