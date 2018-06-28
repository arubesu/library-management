import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'books', component: BooksComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-management', component: CustomerManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
