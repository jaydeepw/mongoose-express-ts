import { Document, model, Schema } from "mongoose";
import LenderConfig, { ILenderConfig, lenderConfig } from "./LenderConfig.model";

/**
 * Interface to model the LenderAPI for TypeScript.
    * @param Lender_Config: ILenderConfig
    * @param API_Endpoint: String
 */
export interface ILenderAPI extends Document {
  Lender_Config: ILenderConfig,
  API_Endpoint: String,
  RequestType: String,
  RequestBody: String,
  SecurityToken: String
}

export const lenderApi: Schema = new Schema({
  Lender_Config: {
    type: [lenderConfig]
  },
  API_Endpoint: {
    type: String
  }
});

const LenderApi = model<ILenderConfig>("lenderApi", lenderApi);

export default LenderApi;