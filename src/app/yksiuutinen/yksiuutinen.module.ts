import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YksiuutinenPageRoutingModule } from './yksiuutinen-routing.module';

import { YksiuutinenPage } from './yksiuutinen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YksiuutinenPageRoutingModule
  ],
  declarations: [YksiuutinenPage]
})
export class YksiuutinenPageModule {}
