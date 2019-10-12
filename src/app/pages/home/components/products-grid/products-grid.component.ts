import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsGridComponent implements OnInit {

  public products: Product[];

  constructor(private activatedRoute: ActivatedRoute){}

  public ngOnInit() {
    this.consumeResolverData();
  }

  private consumeResolverData(): void {
    this.products = this.activatedRoute.snapshot.data['products'];
  }

}
