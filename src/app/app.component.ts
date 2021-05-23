import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.toggle();
  }

  toggle() {
    setTimeout(() => {
          localStorage.setItem('height', document.getElementById('navcol-1').classList.contains('show') ? document.getElementsByClassName('navbarwrapper')[0]['offsetHeight'] - 1 +'px' : document.getElementsByClassName('navbarwrapper')[0]['offsetHeight'] - 1 +'px');
    }, 300)
  }
}
