import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public loadScript(url) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('app-root')[0].appendChild(node);

  }
  constructor() {
    this.loadScript('../../assets/js/core.min.js');
    this.loadScript('../../assets/js/script.js');
  }
}
