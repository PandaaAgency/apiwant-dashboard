import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListPage} from "./pages/list/list.page";
import {DetailPage} from "./pages/detail/detail.page";

const routes: Routes = [
  { path: 'templates', component: ListPage },
  { path: 'templates/:id', component: DetailPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TemplateRoutingModule { }
