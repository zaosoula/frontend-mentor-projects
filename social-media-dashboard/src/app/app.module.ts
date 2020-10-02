import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LargeCardComponent } from './large-card/large-card.component';
import { SharedModule } from './shared/shared.module';
import { SmallCardComponent } from './small-card/small-card.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeCardComponent,
    SmallCardComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
