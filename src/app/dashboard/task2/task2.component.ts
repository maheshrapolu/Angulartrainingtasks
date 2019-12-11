import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor(private imageCompress: NgxImageCompressService) { }

  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;
  setSize: number;


  selectFile(event: any) {

    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.compressFile(this.localUrl, fileName)
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log("fmvkfgsdfgsgssnv", this.file.size)
      this.setSize = this.file.size;
    }

  }
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  compressFile(image, fileName) {
    var orientation = -1;
    if (this.setSize <= 10000) {
      this.sizeOfOriginalImage = this.imageCompress.byteCount(image) / (1024 * 1024);
      console.warn('Size in bytes is now:', this.sizeOfOriginalImage);
    }
    else {

      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;
          this.localCompressedURl = result;
          this.sizeOFCompressedImage = this.imageCompress.byteCount(result) / (1024 * 1024)
          console.warn('Size in bytes after compression:', this.sizeOFCompressedImage);
          const imageName = fileName;
          const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(',')[1]);
          const imageFile = new File([result], imageName, { type: 'image/jpeg' });
        });
    }
    this.localCompressedURl = true
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;

  }
  ngOnInit() {
  }
}

