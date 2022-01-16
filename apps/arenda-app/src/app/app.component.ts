import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'orca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config = environment;
  title = 'arenda-app';
}
