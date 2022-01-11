import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third';
  age : number = 20;
  bankName = 'AXIS';
  nameList = ['Vishnu','Shirisha','PavanKumar','M.S.Dhoni'];
}
