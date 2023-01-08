import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-Months';

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]


  monthChanged(event: Event) {
    let ctrl = <HTMLSelectElement>(event.target)
    alert("You Selected:" +" "+ ctrl.value);
  }


}
