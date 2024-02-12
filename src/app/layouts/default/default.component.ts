import { Component } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class DefaultComponent {

}
