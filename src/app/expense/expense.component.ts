import { Component } from '@angular/core';
import { EXPENSES } from './expense.data';
import { Expense } from './expense.model';
import { List } from 'immutable';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {
  expenses: List<Expense> = List(EXPENSES);
  readonly CATEGORIES = List([1, 2, 3, 4]);

  onCategorySelected(categoryId: number): void {
    console.log('Expense selected')
    this.expenses = List(EXPENSES.filter(expense => expense.categoryId === categoryId));
  }

  onDelete(expenses: List<Expense>, expense: Expense): List<Expense> {
    console.log(expense);
    return expenses.splice(expenses.indexOf(expense), 1);
  }

  onAdd(expenses: List<Expense>): List<Expense> {
    const expense: Expense = {
      name: `Test-${Math.random().toFixed(2)}`,
      categoryId: 3,
      amount: Math.random(),
      currency: 'EUR',
      buyerName: 'Test'
    }
    return expenses.unshift(expense)
  }
}
