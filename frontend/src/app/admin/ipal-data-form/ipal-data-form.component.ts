import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PhotoModel } from './../../models/photo-models';
import { IpalDataService } from '../../services/ipal-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IpalCategoryService } from '../../services/ipal-category.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-ipal-data-form',
  templateUrl: './ipal-data-form.component.html',
  styleUrls: ['./ipal-data-form.component.css']
})



export class IpalDataFormComponent implements OnInit {

  form;
  public photoModel: PhotoModel;
  public filesData = [];
  public ipalCategoryList;
  isNew = true;
  private sub: any;
  idIpaldata;
  ipalDataEdit;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private ipalCategoryService: IpalCategoryService,
    private ipalDataService: IpalDataService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idCategory: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      buildBy: this.formBuilder.control(''),
      developmentYear: this.formBuilder.control(''),
      sourceOfFund: this.formBuilder.control(''),
      technology: this.formBuilder.control(''),
      size: this.formBuilder.control(''),
      capacity: this.formBuilder.control(''),
      connectionNumber: this.formBuilder.control(''),
      manager: this.formBuilder.control(''),
      longitude: this.formBuilder.control(''),
      latitude: this.formBuilder.control(''),
      photo: null
    });

    this.getIpalCategoryList();

    //when edit or update
    this.sub = this.route.params.subscribe(params => {
      this.idIpaldata = +params['idIpaldata']; // (+) converts string 'id' to a number
      if(!isNaN(params['idIpaldata'])){
        this.getIpalDataById(this.idIpaldata);
      }
   });
  }

  getIpalDataById(idIpaldata){
    this.ipalDataService.getIpalDataById(idIpaldata).subscribe(
      ipalData => {
        this.ipalDataEdit = ipalData.data[0];
        this.isNew = false;
        this.setFormValueFromEdit(this.ipalDataEdit);
        console.log(this.ipalDataEdit);
      }
    );
  }

  setFormValueFromEdit(ipalDataEdit){
    this.form.get('idCategory').setValue(ipalDataEdit.idCategory);
    this.form.get('name').setValue(ipalDataEdit.name);
    this.form.get('address').setValue(ipalDataEdit.address);
    this.form.get('buildBy').setValue(ipalDataEdit.build_by);
    this.form.get('developmentYear').setValue(ipalDataEdit.development_year);
    this.form.get('sourceOfFund').setValue(ipalDataEdit.source_of_fund);
    this.form.get('technology').setValue(ipalDataEdit.technology);
    this.form.get('size').setValue(ipalDataEdit.size);
    this.form.get('capacity').setValue(ipalDataEdit.capacity);
    this.form.get('connectionNumber').setValue(ipalDataEdit.connection_number);
    this.form.get('manager').setValue(ipalDataEdit.manager);
    this.form.get('longitude').setValue(ipalDataEdit.longitude);
    this.form.get('latitude').setValue(ipalDataEdit.latitude);
    this.form.get('photo').setValue(ipalDataEdit.photo);
  }

  upload(event){
    if(event.target.files && event.target.files.length > 0){
      let files = [].slice.call(event.target.files);
      for (let index = 0; index < files.length; index++) {
        const element = files[index];

        let reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = () => {
          this.photoModel = new PhotoModel();

          this.photoModel.fileName = element.name;
          this.photoModel.fileType = element.type.split('/')[1];
          this.photoModel.value = reader.result.split(',')[1];

          this.filesData.push(this.photoModel);
        }
      }

      this.form.get('photo').setValue({
        value: this.filesData
      });

      console.log(this.form.get('photo'));
    }
  }

  clearFile() {
    this.form.get('photo').setValue(null);
    this.form.reset();
    this.fileInput.nativeElement.value = '';
  }

  onSubmit(formValue){
    if(this.isNew){
      //insert
      this.ipalDataService.insertIpalData(formValue).subscribe(
        ipalData => {
          console.log(ipalData);
          this.clearFile();
          this.messageBox("Input data");
        }
      );
    }else{
      //update
      this.ipalDataService.updateIpalData(this.idIpaldata, formValue).subscribe(
        ipalData => {
          console.log(ipalData);
          this.clearFile();
          this.messageBox("Update data");
        }
      );
    }
    
  }

  getIpalCategoryList(){
    this.ipalCategoryService.getIpalCategory().subscribe(
      ipalCategory => {
        this.ipalCategoryList = ipalCategory.data;
      }
    );
  }

  messageBox(message){
    const dialogRef = this.dialog.open(DialogMessageAdminDialog, {
      data: message
    });
  }
}

@Component({
  selector: 'dialog-message-admin-dialog',
  templateUrl: './dialog-message-admin-dialog.html',
  styleUrls: ['./ipal-data-form.component.css']
})
export class DialogMessageAdminDialog implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){

  }
}
