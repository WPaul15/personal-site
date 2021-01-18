import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, ToolbarModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
