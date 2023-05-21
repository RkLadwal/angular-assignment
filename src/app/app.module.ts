import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [ParentComponent],
})
export class AppModule {}
