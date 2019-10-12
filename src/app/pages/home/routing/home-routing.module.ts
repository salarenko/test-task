import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../../../shared/components';
import { DashboardComponent, ProductDetailsComponent, ProductsGridComponent } from '../components';
import { homeResolvers, ProductDetailsResolver, ProductsResolver } from '../resolvers';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProductsGridComponent,
        resolve: {
          products: ProductsResolver
        }
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        resolve: {
          product: ProductDetailsResolver
        }
      },
      {
        path: 'unknown-product',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: homeResolvers,
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
