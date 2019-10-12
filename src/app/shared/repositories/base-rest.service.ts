import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class BaseRestRepository {

  protected serviceUrl = environment.serviceUrl;

  constructor(protected httpClient: HttpClient) {
  }
}
