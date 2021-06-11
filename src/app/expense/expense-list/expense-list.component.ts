import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Expense } from '../expense.model';
import { List } from 'immutable';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseListComponent {
  @Input() expenses!: List<Expense>;

  @Output() delete = new EventEmitter<Expense>();
  @Output() add = new EventEmitter<void>();
}
