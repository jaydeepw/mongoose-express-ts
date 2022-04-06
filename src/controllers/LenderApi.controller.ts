import LenderApi, { ILenderAPI } from "../models/LenderApis.model";

export default class ILenderApiController {

    getRecords(filterCondition: any): any {
        return LenderApi.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { API_Endpoint,  } = data;
        const lenderApiFields = {
            API_Endpoint
        };
        // Create
        let lenderApi: ILenderAPI = new LenderApi(lenderApiFields);
        await lenderApi.save();
        return lenderApi;
    }
}