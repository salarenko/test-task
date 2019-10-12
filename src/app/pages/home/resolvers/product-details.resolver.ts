import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetails } from '../models';
import { ProductService } from '../repositories/product.service';

@Injectable()
export class ProductDetailsResolver implements Resolve<ProductDetails> {

  constructor(private productService: ProductService, private router: Router) { }


  public resolve(route: ActivatedRouteSnapshot): Observable<ProductDetails> {
    const productId = route.paramMap.get('id');

    if (productId) {
      return this.productService.getProductDetails(productId);
    } else {
      this.router.navigate(['unknown-product']);
    }

  }

}
