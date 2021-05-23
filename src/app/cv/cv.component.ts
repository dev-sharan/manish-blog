import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  src = 'https://raw.githubusercontent.com/dev-sharan/uploads/main/manish%20angular%20(2).pdf';

  constructor() { }

  ngOnInit(): void {
  }

  getHeight() {
    return localStorage.getItem('height');
  }

}
