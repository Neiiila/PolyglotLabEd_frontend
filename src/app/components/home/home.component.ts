import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isAuthentificated = localStorage.getItem('isAuthentificated') === 'true' ? true : false;
  ngOnInit() {
      console.log('first')
  }
}
