import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
