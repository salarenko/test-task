import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { ProductService } from '../repositories/product.service';

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {

  constructor(private productService: ProductService) { }


  public resolve(): Observable<Product[]> {
    return this.productService.getProducts();
  }

}
