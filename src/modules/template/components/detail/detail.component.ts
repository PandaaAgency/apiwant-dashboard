import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Template} from "../../../../models/template";
import {TemplateService} from "../../template.service";


@Component({
  selector: 'template-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() template: Template;

  constructor(
    private route: ActivatedRoute,
    private templateService: TemplateService,
    private location: Location
  ) {

  }

  ngOnInit() {
    // this.getTemplate();
  }

  // getTemplate(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.templateService.getTemplate(id).subscribe(template => this.template = template);
  // }

  // goBack(): void {
  //   this.location.back();
  // }

}
