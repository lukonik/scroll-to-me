import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'root',
        loadChildren: () =>
          import('./scroll-root-page/scroll-root-page.module').then(
            (s) => s.ScrollRootPageModule
          ),
      },
      {
        path: 'container',
        loadChildren: () =>
          import('./scroll-container-page/scroll-container-page.module').then(
            (s) => s.ScrollContainerPageModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
