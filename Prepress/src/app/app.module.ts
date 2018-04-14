import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//
// custom components
//
import { AppComponent } from './app.component';
import { AttentionlistComponent } from './attention/attention-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/PageNotFoundComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AttentionlistComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: 'attnlist', component: AttentionlistComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
      ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
