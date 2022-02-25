import { ScrollToMeModule } from '@tonyjs/scroll-to-me';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollContainerPageRoutingModule } from './scroll-container-page-routing.module';
import { ScrollContainerPageComponent } from './scroll-container-page.component';


@NgModule({
  declarations: [
    ScrollContainerPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ScrollToMeModule,
    ScrollContainerPageRoutingModule
  ]
})
export class ScrollContainerPageModule { }
