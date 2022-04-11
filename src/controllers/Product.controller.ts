import LenderApi, { ILenderAPI, lenderApi } from "../models/LenderApis.model";
import Product, {IProduct} from "../models/Product.model";

export default class ProductController {

    getRecords(filterCondition: any): any {
        return Product.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Name } = data;
        const fields = {
            Name
        };
        // Create
        let product: IProduct = new Product(fields);
        await product.save();
        return product;
    }
}