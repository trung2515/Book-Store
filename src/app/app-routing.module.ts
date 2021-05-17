import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component'
import { CreateComponent } from './create/create.component'
import { DetailComponent } from './homepage/detail/detail.component'; 
import { CartComponent } from './homepage/cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'datail/:id',
    component: DetailComponent,
  },
  {
    path: 'cart/:id',
    component: CartComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }