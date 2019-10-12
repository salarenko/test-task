import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceUrl } from '../../../../environments/service-url.const';
import { BaseRestRepository } from '../../../shared/repositories';
import { Product, ProductDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseRestRepository {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getProductDetails(productId: string): Observable<ProductDetails> {
    return this.httpClient.get<ProductDetails>(serviceUrl.productDetails);
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(serviceUrl.products);
  }

}
