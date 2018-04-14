import { Component, OnInit } from "@angular/core";

/* custom components */
import { IAttnList } from './attnlist';
import { AttnListService } from './attnlist.service';

@Component({
  selector: 'pm-attention',
  moduleId: module.id,
  templateUrl: 'attention-list.component.html',
  styleUrls: ['attention-list.component.css']
})
export class AttentionlistComponent implements OnInit {
  pageTitle = 'Attention List';
  attnitems: IAttnList[];
  errorMessage: string;

  constructor(private _attnService: AttnListService) {}

  ngOnInit(): void {
    console.log("In OnInit");
    this._attnService.getAttnItems()
      .subscribe(attnitems => this.attnitems = attnitems,
      error => this.errorMessage = <any>error );
    console.log(this.attnitems);
  }

}
