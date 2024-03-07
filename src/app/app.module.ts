import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA,Injector  } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const imports = [ CoreModule.forRoot()]


@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,imports
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
