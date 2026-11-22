import { HttpInterceptorFn } from '@angular/common/http';
import { authInterceptor } from '../app/core/interceptors/auth.interceptor';
import { mockApiInterceptor } from '../app/core/mocks/mock-api.interceptor';

export const environment = {
  production: false,
  apiBaseUrl: '/api',
  httpInterceptors: [authInterceptor, mockApiInterceptor] as HttpInterceptorFn[],
};
