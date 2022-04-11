import { Document, model, Schema } from "mongoose";
import { ILoanApplicationRequest, loanApplicationRequest } from "./LoanApplicationRequest";

/**
 * Interface to model the LenderAPI for TypeScript.
 */
 export interface IEmailNotification extends Document {
  LoanRequest: ILoanApplicationRequest
  Message: String,
}

export const emailNotification: Schema = new Schema({
  LoanRequest: {
    type: loanApplicationRequest
  },
  Message: {
    type: String
  }
});

const EmailNotification = model<IEmailNotification>("emailNotification", emailNotification);

export default EmailNotification;