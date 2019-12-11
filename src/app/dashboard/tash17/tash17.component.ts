import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tash17',
  templateUrl: './tash17.component.html',
  styleUrls: ['./tash17.component.css']
})
export class Tash17Component implements OnInit {
  fileUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
