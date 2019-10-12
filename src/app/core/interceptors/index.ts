import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelayRequestsInterceptor } from './delay-requests.interceptor';

export const coreInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: DelayRequestsInterceptor, multi: true}
];
