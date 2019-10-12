import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDetails } from '../../models';
import { CartService } from '../../services/cart.service';
import { prepareBackgroundImageUrl } from '../../utils';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public isInCart: boolean;
  public product: ProductDetails;
  public subscriptions = new Subscription();
  public prepareUrl = prepareBackgroundImageUrl;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) {
  }

  public ngOnInit() {
    this.consumeResolverData();
    this.listenIfIsInCart();
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public addToCart(product: ProductDetails): void {
    if (!this.isInCart) {
      this.cartService.addProduct(product);
    }
  }

  private consumeResolverData(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
  }

  private listenIfIsInCart(): void {
    this.subscriptions.add(
      this.cartService.hasProduct(this.product.id)
        .subscribe(isInCart => this.isInCart = isInCart)
    );
  }
}
