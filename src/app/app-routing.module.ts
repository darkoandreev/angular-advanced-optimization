import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense/expense.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'expenses',
    loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
