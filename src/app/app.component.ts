import { Component } from '@angular/core';
import { PsHeaderDisplayDensity } from '@paysafe-ui/components/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayDensity = PsHeaderDisplayDensity.Compact;
}
