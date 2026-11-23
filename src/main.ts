import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

registerLocaleData(localeId, 'id-ID');

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
