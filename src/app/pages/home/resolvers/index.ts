import { ProductDetailsResolver } from './product-details.resolver';
import { ProductsResolver } from './products.resolver';

export { ProductsResolver } from './products.resolver';
export { ProductDetailsResolver } from './product-details.resolver';

export const homeResolvers = [
  ProductsResolver,
  ProductDetailsResolver
];
