import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featSelected = new EventEmitter<string>();

onSelect(feat: string){
this.featSelected.emit(feat);
}
  constructor() { }

  ngOnInit(): void {
  }

}
