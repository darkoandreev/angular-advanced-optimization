import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense/expense.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
