import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hoverbg: string = '#d65252';
  mouseOnHover: boolean = false;
  mouseHover() {
    this.mouseOnHover = true;
  }
  mouseOut() {
    this.mouseOnHover = false;
  }

  pick_color: string = '#333333';
  selectColor(valu: string) {
    this.pick_color = valu;
  }

  color_list: any = [
    {
      id: 1,
      color: '#c54a4a',
    },
    {
      id: 2,
      color: '#4ac554',
    },
    {
      id: 3,
      color: '#984ac5',
    },
    {
      id: 4,
      color: '#341ac7',
    },
  ];
}
