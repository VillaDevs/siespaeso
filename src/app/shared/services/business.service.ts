import { Injectable } from "@angular/core";
import { BUSINESS } from "../mocks/business.mock";
import { BusinessModel } from "../models/business.model";

@Injectable()
export class BusinessService {
    private business: any;

    constructor() {
        this.business = BUSINESS;
    }

    getAll():BusinessModel[] {
        return this.business;
    }

    getBusiness(id):BusinessModel {
        for (let i = 0; i < this.business.length; i++) {
            if (this.business[i].id === parseInt(id)) {
                return this.business[i];
            }
        }
        return null;
    }
}
