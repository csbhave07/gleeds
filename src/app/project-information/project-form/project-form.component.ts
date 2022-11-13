import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  nameRegex: string = '[a-zA-Z0-9 ]*';
  codeRegex: string = `[a-zA-Z0-9]*`;
  breadcrumbData: any;
  myForm: any = FormGroup;
  sectorData: any = [];
  subSectorData: any = [];
  frameTypeData: any = [];
  foundationTypeData: any = [];
  selectedSector: any = '';
  selectedSubSector: any = '';
  selectedFrameType: any = '';
  selectedFoundationType: any = '';

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    const routeUrlArr = this.router.url.split('/').filter(x => x?.length > 0);
    this.breadcrumbData = routeUrlArr.map((nav: any) => {
      return { title: nav.replace(/-/g, ' '), url: `/${nav}` }
    });

    // set default values for select inputs
    this.selectedSector = new FormControl('Construction document');
    this.selectedSubSector = new FormControl('Construction document2');
    this.selectedFrameType = new FormControl('Construction document3');
    this.selectedFoundationType = new FormControl('Construction document');

    this.myForm = this.fb.group({
      sector: [null, [Validators.required]],
      subSector: [null, [Validators.required]],
      projectName: [null, [Validators.required, Validators.pattern(this.nameRegex)]],
      projectCode: [null, [Validators.required, Validators.pattern(this.codeRegex)]],
      frameType: [null, [Validators.required]],
      foundationType: [null, [Validators.required]],
      basement: [null, [Validators.required]]
    });

    this.sectorData = [
      {
        title: 'Construction document'
      },
      {
        title: 'Construction document2'
      },
      {
        title: 'Construction document3'
      }
    ];
    this.subSectorData = [
      {
        title: 'Construction document'
      },
      {
        title: 'Construction document2'
      },
      {
        title: 'Construction document3'
      }
    ];

    this.frameTypeData = [
      {
        title: 'Construction document'
      },
      {
        title: 'Construction document2'
      },
      {
        title: 'Construction document3'
      }
    ];

    this.foundationTypeData = [
      {
        title: 'Construction document'
      },
      {
        title: 'Construction document2'
      },
      {
        title: 'Construction document3'
      }
    ];

  }


  formSubmit() {
    const formData = this.myForm.value;
    console.log(formData);
  }

}
