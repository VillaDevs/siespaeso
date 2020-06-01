import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BusinessService } from "./business.service";
import { BusinessModel } from "../models/business.model";
import { TestUtils } from "../stubs/test.utils";

describe('BusinessService', () => {
    let httpMock: HttpTestingController;
    let service: BusinessService;
    let response: BusinessModel[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BusinessService]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(BusinessService);
        response = TestUtils.BUSINESS_RESPONSE;
    });

    afterAll(() => {
        httpMock = null;
        service = null;
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it( 'should get all business', () => {
        let serviceResponse: any = service.getAll();
        expect(serviceResponse).toEqual(response);
    });
});
