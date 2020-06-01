import { Component, OnInit } from '@angular/core';
import { BusinessModel } from "../shared/models/business.model";
import { BusinessService } from "../shared/services/business.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})

export class BusinessPage implements OnInit {
  private business: BusinessModel[];

  constructor(public businessService: BusinessService) {
    this.business = businessService.getAll();
  }

  ngOnInit() {
  }

}
