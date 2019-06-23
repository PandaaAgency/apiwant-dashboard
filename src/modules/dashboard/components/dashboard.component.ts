import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../../template/template.service";
import {Template} from "../../../models/template";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  templates: Template[];

  constructor(private templateService: TemplateService) {
  }

  ngOnInit() {
    this.templateService.getTemplates().subscribe(templates => this.templates = templates.slice(1,4));
  }
}
