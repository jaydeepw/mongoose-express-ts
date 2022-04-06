import { Document, model, Schema } from "mongoose";
import LenderConfig, { ILenderConfig } from "./LenderConfig.model";

/**
 * Interface to model the Organization Config for TypeScript.
    * @param Lender_Config: LenderConfig
    * @param API_Endpoint: String
 */
export interface ILenderAPI extends Document {
  Lender_Config: ILenderConfig,
  API_Endpoint: String
}

const lenderApi: Schema = new Schema({
  Lender_Config: {
    type: String
  },
  API_Endpoint: {
    type: String
  }
});

const LenderApi = model<ILenderConfig>("lenderApi", lenderApi);

export default LenderApi;