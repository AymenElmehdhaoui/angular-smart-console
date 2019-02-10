import { Component } from '@angular/core';
import {NgxSmartConsoleService} from 'ngx-smart-console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-smart-console';

  constructor(private cn: NgxSmartConsoleService) {
    cn.log('ffffffffffffff');
  }
}
