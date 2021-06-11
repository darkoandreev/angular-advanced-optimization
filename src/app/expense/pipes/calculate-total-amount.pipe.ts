import { Pipe, PipeTransform } from '@angular/core';

import { Expense } from '../expense.model';

@Pipe({
  name: 'calculateTotalAmount'
})
export class CalculateTotalAmountPipe implements PipeTransform {

  transform(expenses: Array<Expense>, args?: any): number {
    return expenses.reduce((previous, current) => previous + current.amount, 0);
  }

}
