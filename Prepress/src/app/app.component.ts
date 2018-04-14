import { Component } from '@angular/core';
/* custom app services */
import { AttnListService } from './attention/attnlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AttnListService ]
})
export class AppComponent {
  pageTitle = 'Prepress';
}
