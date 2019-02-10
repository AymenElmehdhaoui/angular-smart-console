# NgxSmartConsoleModule

ngx-smart-console is an angular service that provide all console functions. Hower the goal of this service is to disable all console functions in production without infecting the global console variable.
## Installation

To install this library, run:

```bash
$ npm install ngx-smart-console --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Import your library
import { NgxSmartConsoleModule } from 'ngx-smart-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxSmartConsoleModule.forRoot({ env: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it service in your Angular application:

```typescript
import { Component } from '@angular/core';
import {NgxSmartConsoleService} from 'ngx-smart-console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private cn: NgxSmartConsoleService) {
    
    // Log 'Hello word!' in dev mode, nothing in prod
    cn.log('Hello word!');
  }
}
```


To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ ng build ngx-smart-console
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [AymenElmehdhaoui](mailto:aymen.elmehdhaoui@tritux.com)
