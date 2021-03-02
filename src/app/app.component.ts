import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = false;
  buttonClicks = [];

  handleButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date().toUTCString());
  }
}
