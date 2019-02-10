import {ModuleWithProviders, NgModule} from '@angular/core';
import {ParamsInterface} from '../conf/params.interface';
import {ENV_CONFIG_NG_SMART_CONSOLE} from '../conf/config';
import {NgxSmartConsoleService} from './ngx-smart-console.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxSmartConsoleModule {
  static forRoot(paramsInterface: ParamsInterface): ModuleWithProviders {
    return {
      ngModule: NgxSmartConsoleModule,
      providers: [
        {provide: ENV_CONFIG_NG_SMART_CONSOLE, useValue: paramsInterface.env},
        NgxSmartConsoleService,
      ]
    };
  }
}
