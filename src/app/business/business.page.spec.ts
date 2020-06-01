import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessPage } from './business.page';
import { BusinessService } from "../shared/services/business.service";
import { BusinessServiceStub } from "../shared/stubs/business.service.stub";

describe('BusinessPage', () => {
  let component: BusinessPage;
  let fixture: ComponentFixture<BusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
            provide: BusinessService,
            useClass: BusinessServiceStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
