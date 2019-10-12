import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models';
import { prepareBackgroundImageUrl } from '../../utils';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product: Product;

  public prepareUrl = prepareBackgroundImageUrl;

  constructor(private router: Router) {
  }

  public navigateToProductDetails(id: string): void {
    this.router.navigate(['home', 'product', id]);
  }
}
