import { Component } from "@angular/core";

@Component({
  selector: 'pm-attention',
  templateUrl: './attention-list.component.html'
})
export class AttentionlistComponent {
  pageTitle = 'Attention List';
  attnitems: any[] = [
    {
      "attnMo": "470622",
      "attnSo": "10140222",
      "attnCsr": "Vicki",
      "attnAddDate": "09/04/15",
      "attnIssue": "wrong size",
      "attnResponse": "notified client twice",
      "attnUpDate": "04/03/18"
    },
    {
      "attnMo": "470642",
      "attnSo": "10140227",
      "attnCsr": "Steve",
      "attnAddDate": "09/04/14",
      "attnIssue": "Wrong material",
      "attnResponse": "new response",
      "attnUpDate": "04/03/18"
    }
  ];
}
