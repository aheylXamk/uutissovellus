import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YksiuutinenPage } from './yksiuutinen.page';

const routes: Routes = [
  {
    path: '',
    component: YksiuutinenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YksiuutinenPageRoutingModule {}
