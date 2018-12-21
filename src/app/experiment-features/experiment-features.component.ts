import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

@Component({
    selector: 'app-experiment-features',
    templateUrl: './experiment-features.component.html',
    styleUrls: ['./experiment-features.component.scss']
})
export class ExperimentFeaturesComponent implements OnInit {

    // CKEditor5
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
        language: 'fr'
    };
    public onChange({ editor }: ChangeEvent) {
        const data = editor.getData();
        console.log(data);
    }

    constructor() {
        ClassicEditor.defaultConfig = {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'undo',
                    'redo',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    'imageUpload',
                    'blockQuote',
                    'alignment'
                ]
            }
        };
    }

    ngOnInit() {
    }
}
