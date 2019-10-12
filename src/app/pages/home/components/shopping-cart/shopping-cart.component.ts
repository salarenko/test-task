import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public productsList: ProductDetails[];

  constructor(public cartService: CartService) {
  }

  public ngOnInit() {
    this.getProductListReference();
  }

  private getProductListReference(): void {
    this.productsList = this.cartService.productsList;
  }
}
