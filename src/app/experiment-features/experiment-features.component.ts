import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-experiment-features',
  templateUrl: './experiment-features.component.html',
  styleUrls: ['./experiment-features.component.scss']
})
export class ExperimentFeaturesComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

}
