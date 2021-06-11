import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { List } from 'immutable';

@Component({
  selector: 'app-expense-select-category',
  templateUrl: './expense-select-category.component.html',
  styleUrls: ['./expense-select-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseSelectCategoryComponent {
  @Input() categories!: List<number>;

  @Output() categorySelected = new EventEmitter<number>();
}
