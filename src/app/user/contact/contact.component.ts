import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UserService } from '../user.service';

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
 
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  
  displayedColumns: string[] = ['id','firstName', 'lastName', 'phone','action'];
  dataSource : IContact [] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
   
    this.getUserList();
  }

  @ViewChild(MatTable) table: MatTable<any>;


  getUserList(){

    this.userService.getContactList().subscribe((data) =>{

      this.dataSource = data;
    })
  }

  openDialog(action: any,obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      data:obj
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }


  addRowData(row_obj: IContact){
    console.log("@@@@@",row_obj, this.dataSource)
    let tempArr = this.dataSource;
    let idArr : any = tempArr.length ? tempArr.map(e=> {
      return e.id }) : [];
    let id =Math.max(...idArr) ;
    this.dataSource.push({
      id:id+1,
      firstName: row_obj.firstName,
          lastName: row_obj.lastName,
          phone: row_obj.phone
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj:IContact){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.firstName = row_obj.firstName;
        value.lastName = row_obj.lastName;
        value.phone = row_obj.phone;
      }
      return true;
    });
  }
  deleteRowData(row_obj :IContact){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}
