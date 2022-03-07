import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientPanelModule } from "src/app/client-panel/client-panel.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "src/app/shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { TestInterceptorInterceptor } from "src/app/core/test-interceptor.interceptor";
import {Test2Interceptor} from "src/app/core/test2.interceptor";
import {Observable} from "rxjs";
import {UserService} from "src/app/core/user.service";

function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get("./assets/user.json");
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientPanelModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Test2Interceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
