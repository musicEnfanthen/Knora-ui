import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { KnoraConstants, OntologyInformation, ReadLinkValue } from '@knora/core';
import { ResourceDialogComponent } from '@knora/action';

@Component({
  selector: 'kui-link-value',
  templateUrl: './link-value.component.html',
  styleUrls: ['./link-value.component.scss']
})
export class LinkValueComponent implements OnInit {

  @Input() valueObject: ReadLinkValue;
  @Input() ontologyInfo: OntologyInformation;

  KnoraConstants = KnoraConstants;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  showReferredResourceInDialog() {
    // TODO: create ObjectDialogComponent

    const config: MatDialogConfig = ResourceDialogComponent.createConfiguration(this.valueObject.referredResourceIri);

    this.dialog.open(ResourceDialogComponent, config);

  }

}
