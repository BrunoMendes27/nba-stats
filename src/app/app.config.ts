import { ApplicationConfig, inject, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import en from '@angular/common/locales/en';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { NZ_I18N, en_US, pt_PT } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideNoopAnimations(),
    provideHttpClient(),
    {
      provide: NZ_I18N,
      useFactory: () => {
        const localId = inject(LOCALE_ID);
        switch (localId) {
          case 'en':
            return en_US;
          /** keep the same with angular.json/i18n/locales configuration **/
          case 'pt':
            return pt_PT;
          default:
            return en_US;
        }
      },
    },
    { provide: NZ_ICONS, useValue: icons },
  ],
};
