import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { NgModule } from '@angular/core';
import { PsButtonModule } from '@paysafe-ui/components/button';
import { PsFormFieldModule } from '@paysafe-ui/components/form-field';
import { PsIconModule } from '@paysafe-ui/components/icon';
import { PsListModule } from '@paysafe-ui/components/list';
import { PsOptionModule } from '@paysafe-ui/components/core';
import { PsSelectModule } from '@paysafe-ui/components/select';
import { ExpenseSelectCategoryComponent } from './expense-select-category/expense-select-category.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CalculateTotalAmountPipe } from './pipes/calculate-total-amount.pipe';
import { AmountCurrencyPipe } from './pipes/amount-currency.pipe';
@NgModule({
  declarations: [ExpenseComponent, ExpenseSelectCategoryComponent, ExpenseListComponent, CalculateTotalAmountPipe, AmountCurrencyPipe],
  imports: [
    CommonModule,
    PsListModule,
    PsFormFieldModule,
    PsSelectModule,
    PsOptionModule,
    PsIconModule,
    PsButtonModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
