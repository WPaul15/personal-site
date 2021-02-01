import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { ToolbarModule } from 'primeng/toolbar';
import { FooterComponent } from './footer/footer.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, ToolbarModule, DividerModule, ButtonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
