import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';

const routes: Routes = [
  {
    path: "products",component:ProductComponent, children: [
      {path:"detail/:id", component:ProductDetailComponent ,children:[
        {path:"",redirectTo:"overview", pathMatch:"full"},
        {path:"overview",component:ProductOverviewComponent},
        {path: "spec", component: ProductSpecComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
