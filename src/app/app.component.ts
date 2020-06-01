import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SharedConstant } from "./shared/constants/shared-constant";
import { LabelConstant } from "./shared/constants/label-constant";
import { IconConstant } from "./shared/constants/icon-constant";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  private selectedIndex = SharedConstant.NAVIGATION.DEFAULT_SELECTED_INDEX;
  private appPages = [
    {
      title: LabelConstant.APP_LABELS.MENU.HOME_TITLE,
      url: SharedConstant.ROUTES.MAIN,
      icon: IconConstant.APP_ICONS.MENU.HOME_ICON
    },
    {
      title: LabelConstant.APP_LABELS.MENU.BUSINESS_TITLE,
      url: SharedConstant.ROUTES.BUSINESS,
      icon: IconConstant.APP_ICONS.MENU.BUSINESS_ICON
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
};
