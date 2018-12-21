import { Component, OnInit } from '@angular/core';
import '@ckeditor/ckeditor5-build-classic/build/translations/de.js';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
    selector: 'app-experiment-features',
    templateUrl: './experiment-features.component.html',
    styleUrls: ['./experiment-features.component.scss']
})
export class ExperimentFeaturesComponent implements OnInit {

    public Editor = ClassicEditor;

    public editorData = `
    <p>
        Lorem ipsum dolor sit amet, ne vix volumus ponderum suavitate, ad ius prompta gloriatur. Lobortis intellegam
        qui eu. Te nibh ignota est. Ne mei illud salutatus signiferumque.
    </p>
    <p>
        At mea affert contentiones, mei veri scribentur no. Legimus vituperatoribus sed at. Id usu clita oblique
        delectus. Quo cu atqui eruditi qualisque, posse facer solet te his.
    </p>
    <img src="assets/images/knora-logo.png" alt="knora logo">`;

    public config = {
        language: 'de'
    };

    public onChange({ editor }: ChangeEvent) {
        const data = editor.getData();
        console.log(data);
    }

    constructor() { }

    ngOnInit() {
        console.log(this.config);
    }
}
