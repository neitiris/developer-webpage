import { Component, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faTelegramPlane = faTelegramPlane;
  faDownload = faDownload;
  constructor() { }

  ngOnInit() {
  }

}
