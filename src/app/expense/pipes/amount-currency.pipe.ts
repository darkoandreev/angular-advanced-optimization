import { Pipe, PipeTransform } from '@angular/core';

import { Expense } from '../expense.model';

@Pipe({
  name: 'amountCurrency'
})
export class AmountCurrencyPipe implements PipeTransform {

  transform(expense: Expense): string {
    return `${expense.amount} ${expense.currency}`;
  }

}
