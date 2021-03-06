import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { IpalDataService } from '../../services/ipal-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IpalCategoryService } from '../../services/ipal-category.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-ipal-data-list',
  templateUrl: './ipal-data-list.component.html',
  styleUrls: ['./ipal-data-list.component.css']
})
export class IpalDataListComponent implements OnInit {

  ipalDataColumns: string[] = ['idIpalData', 'name', 'address', 'longitude', 'latitude', 'action'];
  ipalDataList = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(
    private ipalDataService: IpalDataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getIpalDataList();
  }

  getIpalDataList(){
    this.ipalDataService.getIpalData().subscribe(
      ipalData => {
        this.ipalDataList = ipalData.data;
        this.ipalDataList.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: String){
    this.ipalDataList.filter = filterValue.trim().toLowerCase();
  }

  delete(ipalData){
    const dialogRef = this.dialog.open(DialogconfirmationAdminDialog, {
      data: ipalData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
        this.ipalDataService.deleteIpalData(ipalData.idIpalData).subscribe(
          ipalData => {
            this.getIpalDataList();
          }
        );
      }
    });
  }

  viewDetail(ipalData){
    const dialogRef = this.dialog.open(DialogContentAdminDialog, {
      data: ipalData
    });
  }

  edit(ipalData){
    this.router.navigate([ipalData.idIpaldata]);
 }
}

@Component({
  selector: 'dialog-content-admin-dialog',
  templateUrl: './dialog-content-admin-dialog.html',
  styleUrls: ['./ipal-data-list.component.css']
})
export class DialogContentAdminDialog implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){
    console.log(this.data);
  }
}

@Component({
  selector: 'dialog-confirmation-admin-dialog',
  templateUrl: './dialog-confirmation-admin-dialog.html',
  styleUrls: ['./ipal-data-list.component.css']
})
export class DialogconfirmationAdminDialog implements OnInit{

  private isDelete = true;

  constructor(
    public dialogRef: MatDialogRef<DialogconfirmationAdminDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ipalDataService: IpalDataService
  ){}

  ngOnInit(){
    console.log(this.data);
  }

  onNoClick(): void {
    this.isDelete = false;
    this.dialogRef.close();
  }
}
