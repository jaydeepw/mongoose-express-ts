import { Document, model, Schema } from "mongoose";
import { ILenderConfig, lenderConfig } from "./LenderConfig.model";

/**
 * Interface to model the LenderAPI for TypeScript.
 */
 export interface IProduct extends Document {
  Name: String,
  Purpose: String,    // personal|business
  APR: Array<Number>,
  APRType: String,    // fixed/variable
  Term: Array<Number> // 3months - 5years
  TermType: String,   // fixed/flexible
  LTV: Array<Number>,
  LenderConfig: ILenderConfig
}

export const iProduct: Schema = new Schema({
  Name: {
    type: String
  },
  Purpose: {
    type: String
  },
  APRType: {
    type: String
  },
  TermType: {
    type: String
  },
  LenderConfig: {
    type: lenderConfig
  },
});

const Product = model<IProduct>("iProduct", iProduct);

export default Product;