import { Component } from '@angular/core';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  tiles: Tile[] = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
    {text: 'Five', color: 'lightblue'},
    {text: 'Six', color: 'lightgreen'},
    {text: 'Seven', color: 'lightpink'},
  ];
}
