import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loadScript(url) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('header')[0].appendChild(node);

  }
  constructor() { }
  ngOnInit() {
    this.loadScript('assets/js/core.min.js');
    this.loadScript('assets/js/script.js');
  }

}
