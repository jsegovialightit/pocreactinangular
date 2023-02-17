import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomReactComponentWrapperComponent } from './CustomReactComponentWrapper';
import { ReactSelectComponent } from './react-select/react-select.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomReactComponentWrapperComponent,
    ReactSelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
