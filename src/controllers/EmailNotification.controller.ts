import EmailNotification, { IEmailNotification } from "../models/EmailNotification";

export default class EmailNotificationController {

    getRecords(filterCondition: any): any {
        return EmailNotification.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Message } = data;
        const fields = {
            Message
        };
        // Create
        let emailNotification: IEmailNotification = new EmailNotification(fields);
        await emailNotification.save();
        return emailNotification;
    }
}