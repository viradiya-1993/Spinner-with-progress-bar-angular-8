import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spinner';
  value = 60;
  color = 'primary';
  mode = 'determinate';
  bufferValue = 75;
}
