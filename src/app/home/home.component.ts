import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loadScript(url) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('div')[0].appendChild(node);

  }
  constructor() { }
  ngOnInit() {
    // this.loadScript('assets/js/core.min.js');
    // this.loadScript('assets/js/script.js');
  }

}
