import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NumbersListComponent } from './numbers-list/numbers-list.component';
import { ButtonsPanelComponent } from './buttons-panel/buttons-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersListComponent,
    ButtonsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
