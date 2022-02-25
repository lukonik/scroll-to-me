import { ScrollToMeModule } from '@tonyjs/scroll-to-me';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [SidebarComponent, ContentComponent],
  imports: [CommonModule, ScrollToMeModule],
  exports: [SidebarComponent, ContentComponent],
})
export class CoreModule {}
