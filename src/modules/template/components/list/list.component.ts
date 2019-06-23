import {Component, Input, OnInit} from '@angular/core';
import {TemplateService} from "../../template.service";
import {Template} from "../../../../models/template";

@Component({
  selector: 'template-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() templates:  Template[];

  constructor(private templateService: TemplateService) {
  }

  ngOnInit() {
     // this.templateService.getTemplates().subscribe(templates => this.templates = templates);
  }
}
