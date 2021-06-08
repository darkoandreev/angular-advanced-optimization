import { Component } from '@angular/core';
import { EXPENSES } from './expense.constant';
import { Expense } from './expense.model';
import { PsSelectChange } from '@paysafe-ui/components/select';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {
  options = [1, 2, 3, 4];

  private _expenses: Array<Expense> = EXPENSES;

  get expenses(): Array<Expense> {
    console.log('Get all expenses');
    return this._expenses;
  }

  filterExpenses(selectValue: PsSelectChange): void {
    const categoryId = selectValue?.value;
    this._expenses = EXPENSES;
    this._expenses = this._expenses.filter(expense => expense.categoryId === categoryId);
  }

  delete(index: number): void {
    this._expenses.splice(index, 1)
  }

  addNewExpense(): void {
    const expense: Expense = {
      name: 'Test',
      categoryId: 3,
      amount: 100,
      currency: 'EUR',
      buyerName: 'Test'
    }
    this._expenses.push(expense)
  }

  get calculateTotal(): number {
    console.log('Calculate total method');
    return this._expenses.reduce((previous, current) => previous + current.amount, 0);
  }
}
