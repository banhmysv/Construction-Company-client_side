import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ProjectService } from "../../Service-Api/project.service";
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

  private listProject;
  private project;
  private formProject: FormGroup;

  constructor(private _projectService: ProjectService, private _fb: FormBuilder) { }

  private createproject() {
    this.formProject = this._fb.group({
      id: '',
      name: '',
      value: '',
      responsibleDepartment : this._fb.group({
        id:''
      }),
      datefrom:'',
      dateto: '',
      description: ''
    });
 
  }

  private loadAllproject() {
    this._projectService.getAllProjects()
      .then(res => {
        this.listProject = res;
        console.log(this.listProject);
      }).catch(err => console.log(err));

  }
  private addNewProject(){
    console.log("adding project...")
    this._projectService.addNewProjects(this.formProject.value)
      .then(res => console.log(res))
      .then(() => {
        this.loadAllproject();
        this.formProject.reset();
      }).catch(err => console.log(err));

  }

  private deleteProject(id) {
    this._projectService.deleteProjectsByID(id)
      .then(res => console.log(res))
      .then(() => {
        this.loadAllproject();
      }).catch(err => console.log(err));
  }

  clickPut(pro) {
    return this._projectService
      .getProjectsByID(pro.id)
      .then(res => this.project = res);
  }
  ngOnInit() {
    this.loadAllproject();
  }


}
