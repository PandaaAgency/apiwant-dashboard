import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MessageComponent} from "./components/message.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MessageComponent
  ],
  declarations: [
    MessageComponent
  ]
})

export class MessageModule { }
