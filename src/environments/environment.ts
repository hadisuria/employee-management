import { HttpInterceptorFn } from '@angular/common/http';
import { authInterceptor } from '../app/core/interceptors/auth.interceptor';
import { mockApiInterceptor } from '../app/core/mocks/mock-api.interceptor';

// Mock API remains enabled for standalone builds without a live backend.
// To connect a real API, set apiBaseUrl and remove mockApiInterceptor.
export const environment = {
  production: true,
  apiBaseUrl: '/api',
  httpInterceptors: [authInterceptor, mockApiInterceptor] as HttpInterceptorFn[],
};
