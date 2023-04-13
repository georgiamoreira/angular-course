import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Lorena';

  userData = {
    email: 'lore@gmail.com',
    role: 'Influencer',
  };

  title = 'curso-angular';
}
