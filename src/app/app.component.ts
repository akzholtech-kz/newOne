import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loadedfeat = 'home';

  onNavigate(feat:string){
    this.loadedfeat = feat;
  }
}
