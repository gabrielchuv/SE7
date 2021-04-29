import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/common/modules/app.module';
import { environment } from './environments/environment';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
