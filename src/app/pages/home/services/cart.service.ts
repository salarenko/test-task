import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { distinctUntilChanged, filter, flatMap, mapTo } from 'rxjs/operators';
import { ProductDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ProductDetails[] = [];

  private hasProduct$ = new BehaviorSubject<ProductDetails[]>([]);

  public get productsList(): ProductDetails[] {
    return this.cart;
  }

  public addProduct(product: ProductDetails): void {
    this.cart.push(product);
    this.hasProduct$.next(this.cart);
  }

  public hasProduct(id: string): Observable<boolean> {
    return this.hasProduct$.asObservable()
      .pipe(
        flatMap(products => from(products)),
        filter(product => product.id === id),
        mapTo(true),
        distinctUntilChanged()
      );
  }

}
