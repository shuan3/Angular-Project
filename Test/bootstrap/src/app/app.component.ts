import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';
  displayVal:string|number='';
  getValue(val:string|number)
  {console.warn(val);
  this.displayVal=val
}
}
