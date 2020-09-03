import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { CenterComponent } from './components/center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
