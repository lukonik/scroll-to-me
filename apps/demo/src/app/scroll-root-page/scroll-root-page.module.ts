import { CoreModule } from './../core/core.module';
import { ScrollToMeModule } from '@tonyjs/scroll-to-me';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollRootPageRoutingModule } from './scroll-root-page-routing.module';
import { ScrollRootPageComponent } from './scroll-root-page.component';

@NgModule({
  declarations: [ScrollRootPageComponent],
  imports: [
    CommonModule,
    ScrollToMeModule,
    ScrollRootPageRoutingModule,
    CoreModule,
  ],
})
export class ScrollRootPageModule {}
