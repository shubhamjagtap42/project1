import { Component } from '@angular/core';
interface Data {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';

  data!: Data[];
  cols!: any[];
}
