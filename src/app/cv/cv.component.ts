import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  constructor() { }

  getHeight() {
    return localStorage.getItem('height');
  }

  downloadFile(){
        let link = document.createElement("a");
        link.download = "Manish Cv";
        link.href = "assets/ManishAngular.pdf";
        link.click();
 }
}
