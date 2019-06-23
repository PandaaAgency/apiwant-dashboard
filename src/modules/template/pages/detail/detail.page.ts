import {Component, OnInit} from '@angular/core';
import {TemplateService} from "../../template.service";
import {Template} from "../../../../models/template";
import {ActivatedRoute} from "@angular/router";
// import {Template} from "../models/template";

@Component({
  templateUrl: './detail.page.html',
})
export class DetailPage implements OnInit {

  template: Template;

  constructor(
    private route: ActivatedRoute,
    private templateService: TemplateService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.templateService.getTemplate(id).subscribe(template => this.template = template);
  }
}
