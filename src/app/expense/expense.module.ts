import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { NgModule } from '@angular/core';
import { PsButtonModule } from '@paysafe-ui/components/button';
import { PsFormFieldModule } from '@paysafe-ui/components/form-field';
import { PsIconModule } from '@paysafe-ui/components/icon';
import { PsListModule } from '@paysafe-ui/components/list';
import { PsOptionModule } from '@paysafe-ui/components/core';
import { PsSelectModule } from '@paysafe-ui/components/select';

@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    PsListModule,
    PsFormFieldModule,
    PsSelectModule,
    PsOptionModule,
    PsIconModule,
    PsButtonModule
  ]
})
export class ExpenseModule { }
