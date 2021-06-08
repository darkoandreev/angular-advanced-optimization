import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense/expense.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: ExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
