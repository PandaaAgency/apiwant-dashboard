import {Component, OnInit} from '@angular/core';
import {TemplateService} from "../../template.service";
import {Template} from "../../../../models/template";
// import {Template} from "../models/template";

@Component({
  selector: 'templates',
  templateUrl: './list.page.html',
})
export class ListPage implements OnInit {

  templates: Template[];

  constructor(private templateService: TemplateService) {
  }

  ngOnInit() {
    this.templateService.getTemplates().subscribe(templates => this.templates = templates);
  }
}
