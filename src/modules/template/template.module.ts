import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {ListPage} from "./pages/list/list.page";
import {TemplateRoutingModule} from "./template-routing.module";
import {ListComponent} from "./components/list/list.component";
import {DetailComponent} from "./components/detail/detail.component";
import {DetailPage} from "./pages/detail/detail.page";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemplateRoutingModule
  ],
  exports: [
    ListComponent,
    DetailComponent
  ],
  declarations: [
    /**
     * PAGES
     */
    ListPage,
    DetailPage,

    /**
     * COMPONENTS
     */
    ListComponent,
    DetailComponent,
  ]
})
export class TemplateModule { }
