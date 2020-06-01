import { Component, OnInit } from '@angular/core';
import { LabelConstant } from "../shared/constants/label-constant";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public LABELS = { ...LabelConstant.APP_LABELS.MENU };

  constructor() { }

  ngOnInit() {
  }

}
