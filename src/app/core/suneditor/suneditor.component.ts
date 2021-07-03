import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import 'suneditor/dist/css/suneditor.min.css';
import suneditor from 'suneditor';
import plugins from 'suneditor/src/plugins';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-suneditor-editor',
  templateUrl: './suneditor.component.html',
  styleUrls: ['./suneditor.component.css']
})
export class SuneditorComponent implements OnInit {
  @Input() height: string;
  previewEditor: string;
  editor: any;
  @Output() formOutput = new EventEmitter();
  form: FormGroup;
  categories: string[] = ['tourism', 'politics', 'culture', 'inheritence', 'sport', 'entertainment'];

  constructor() {
  }

  ngOnInit(): void {
    this.editor = suneditor.create((document.getElementById('sun-editor-editable') || 'sun-editor-editable'), {
      plugins: plugins,
      buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', // Line break
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video'], // You must add the 'katex' library at options to use the 'math' plugin.
        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
      ],
    });
    this.form = new FormGroup({
      headline: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      coverImage: new FormControl(null, [Validators.required]),
    });
  }

  onSave(): any {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    this.form.controls.body.setValue(this.editor.getContents());
    console.log('form');

    console.log( this.form.value);

    if (this.form.valid && this.editor.getContents().length > 20) {
      console.log('Šaljem');

      this.formOutput.emit(this.form);
    }
  }

  storeUploadedImage(coverImage: string): void {
    console.log('coverImage', coverImage);
    this.form.controls.coverImage.setValue(coverImage);

  }
}
