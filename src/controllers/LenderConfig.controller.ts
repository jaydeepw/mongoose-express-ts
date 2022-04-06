import LenderConfig, { ILenderConfig } from "../models/LenderConfig.model";

export default class ILenderConfigController {

    getRecords(filterCondition: any): any {
        return LenderConfig.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Loan_Amount } = data;
        const organizationConfigFields = {
            Loan_Amount
        };
        // Create
        let lenderConfig: ILenderConfig = new LenderConfig(organizationConfigFields);
        await lenderConfig.save();
        return lenderConfig;
    }
}