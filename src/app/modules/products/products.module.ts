import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './page/list-products/list-products.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductsRoutingModule } from './products.routing';



@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ProductsModule {}
