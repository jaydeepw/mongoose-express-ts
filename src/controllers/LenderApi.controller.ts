import LenderApi, { ILenderAPI, lenderApi } from "../models/LenderApis.model";
import ILenderConfigController from "./LenderConfig.controller";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";
import { ILenderConfig } from "../models/LenderConfig.model";

export default class ILenderApiController {

    getRecords(filterCondition: any): any {
        return LenderApi.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {

        const lenderConfigId = data.Lender_Config;
        const filterCondition = {
            _id: lenderConfigId
        }
        const controller: ILenderConfigController = new ILenderConfigController();
        const lenderConfig: ILenderConfig = await controller.getRecords(filterCondition);

        console.log("lenderConfig2: ", lenderConfig)
        if(!lenderConfig) {    
            return ErrorHandler.getErrorJson(Constants.PROTOCOL_CONFIG_NOT_FOUND, null);    
        }

        const lenderApiFields = {
            API_Endpoint: data.API_Endpoint,
            Lender_Config: lenderConfig
        };

        // Create
        let lenderApi: ILenderAPI = new LenderApi(lenderApiFields);
        await lenderApi.save();
        return lenderApi;
    }
}