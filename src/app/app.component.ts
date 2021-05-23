import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle() {
    setTimeout(() => {
          localStorage.setItem('height', document.getElementById('navcol-1').classList.contains('show') ? document.getElementsByClassName('navbarwrapper')[0]['offsetHeight'] + 5 +'px' : document.getElementsByClassName('navbarwrapper')[0]['offsetHeight'] + 5+'px');
    }, 300)
  }
}
