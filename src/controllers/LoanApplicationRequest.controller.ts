import LoanApplicationRequest, {ILoanApplicationRequest} from "../models/LoanApplicationRequest";

export default class LoanApplicationRequestController {

    getRecords(filterCondition: any): any {
        return LoanApplicationRequest.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Amount } = data;
        const fields = {
            Amount
        };
        
        let loanApplicationRequest: ILoanApplicationRequest = new LoanApplicationRequest(fields);
        await loanApplicationRequest.save();
        return loanApplicationRequest;
    }
}