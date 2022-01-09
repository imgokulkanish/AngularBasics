import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_basics';
  email = new FormControl('');
  updateEmail() {
    this.email.setValue("gokulkanish@gmail.com");
  }
  }