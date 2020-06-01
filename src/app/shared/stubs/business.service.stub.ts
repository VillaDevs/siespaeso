import { BusinessModel } from "../models/business.model";
import { Observable, of } from "rxjs";
import { TestUtils } from "./test.utils";

export class BusinessServiceStub {
    public getAll(): BusinessModel[] {
        return TestUtils.BUSINESS_RESPONSE;
    }
}
