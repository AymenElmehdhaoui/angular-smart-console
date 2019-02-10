import {Inject, Injectable} from '@angular/core';
import {NgxSmartConsoleInterface} from './ngx.smart.console.interface';
import {ENV_CONFIG_NG_SMART_CONSOLE} from '../conf/config';

@Injectable({
  providedIn: 'root'
})
export class NgxSmartConsoleService implements NgxSmartConsoleInterface{

  constructor(
    @Inject(ENV_CONFIG_NG_SMART_CONSOLE) private production: boolean
  ) {}

  assert(...args) {
    if (!this.production) {
      console.assert(...args);
    }
  }

  clear() {
    if (!this.production) {
      console.clear();
    }
  }

  count(...args) {
    if (!this.production) {
      console.count(...args);
    }
  }

  debug(...args) {
    if (!this.production) {
      console.debug(...args);
    }
  }

  dir(...args) {
    if (!this.production) {
      console.dir(...args);
    }
  }

  dirxml(arg) {
    if (!this.production) {
      console.dirxml(arg);
    }
  }

  error(...args) {
    if (!this.production) {
      console.error(...args);
    }
  }

  group(...args) {
    if (!this.production) {
      console.group(...args);
    }
  }

  groupCollapsed(...args) {
    if (!this.production) {
      console.groupCollapsed(...args);
    }
  }

  groupEnd() {
    if (!this.production) {
      console.groupEnd();
    }
  }

  info(...args) {
    if (!this.production) {
      console.info(...args);
    }
  }

  log(...args) {
    if (!this.production) {
      console.log(...args);
    }
  }

  profile(...args) {
    if (!this.production) {
      console.profile(...args);
    }
  }

  profileEnd(...args) {
    if (!this.production) {
      console.profileEnd(...args);
    }
  }

  table(...args) {
    if (!this.production) {
      console.table(...args);
    }
  }

  warn(...args) {
    if (!this.production) {
      console.warn(...args);
    }
  }

  exception(...args) {
    if (!this.production) {
      console.exception(...args);
    }
  }

  time(...args) {
    if (!this.production) {
      console.time(...args);
    }
  }

  timeEnd(...args) {
    if (!this.production) {
      console.timeEnd(...args);
    }
  }

  trace(...args) {
    if (!this.production) {
      console.trace(...args);
    }
  }

}
