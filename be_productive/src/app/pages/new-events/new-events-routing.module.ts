import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEventsPage } from './new-events.page';

const routes: Routes = [
  {
    path: '',
    component: NewEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEventsPageRoutingModule {}
