import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  @Output() uploadedImage = new EventEmitter();
  previewImage: any = null;

  constructor(private msg: NzMessageService) {
  }

  ngOnInit(): void {
  }

  //TODO uploading doesnt work. It probably tries to emit before there is actual data in preview image. In inspect thumbUrl is full, in console it is empty. Try different approach
  emitImage(): void {
    console.log('preview image', this.previewImage);
    // const test = this.previewImage[0].thumbUrl;
    this.uploadedImage.emit(this.previewImage[0].thumbUrl);
  }

}
