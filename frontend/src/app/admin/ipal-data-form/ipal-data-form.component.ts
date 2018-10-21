import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PhotoModel } from './../../models/photo-models';
import { IpalDataService } from '../../services/ipal-data.service';
import { IpalCategoryService } from '../../services/ipal-category.service';

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

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private ipalCategoryService: IpalCategoryService,
    private ipalDataService: IpalDataService
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
    this.fileInput.nativeElement.value = '';
  }

  onSubmit(formValue){
    console.log(formValue);
    this.ipalDataService.insertIpalData(formValue).subscribe(
      ipalData => {
        console.log(ipalData);
      }
    );
  }

  getIpalCategoryList(){
    this.ipalCategoryService.getIpalCategory().subscribe(
      ipalCategory => {
        this.ipalCategoryList = ipalCategory.json().data;
      }
    );
  }

}
