import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ngOnInit() {
      window.onscroll = () => { 
        let profile = document.querySelector('.header .flex .profile');
        let search = document.querySelector('.header .flex .search-form');
        
        if (profile)
          profile.classList.remove('active');
      
        if (search)
          search.classList.remove('active');
      }
  }
  activateProfile() {
    let profile = document.querySelector('.header .flex .profile');
    if (profile)
      profile.classList.toggle('active');
  }

  activateSearch(){
    let search = document.querySelector('.header .flex .search-form');
    if (search)
      search.classList.toggle('active');
  }

  activateMenu(){
    let menu = document.querySelector('.side-bar');
    let body = document.body;
    if (menu)
      menu.classList.toggle('active');
    if (body) 
      body.classList.toggle('active');
  }

  toggleTheme(){
    let togglebtn = document.querySelector('#toggle-btn');
    let darkMode = localStorage.getItem('dark-mode'); 
    const enableDarkMode = () => {
      togglebtn?.classList.replace('fa-sun', 'fa-moon');
      document.body.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
    }  
    const disableDarkMode = () => {
      togglebtn?.classList.replace('fa-moon', 'fa-sun');
      document.body.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
    } 
    if(darkMode === 'enabled'){
      disableDarkMode();
    }
    else{
      enableDarkMode();
    } 
  }
  
}
