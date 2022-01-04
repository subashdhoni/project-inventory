import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {
  public createFlag: boolean = false;
  public editFlag: boolean = false;
  addEditForm: any;

  constructor() { }
  saveItem(){
    console.log(this.addEditForm.value)
    let flag = 0;
    let userList=[];
    let user=this.addEditForm.value;

    if(localStorage.getItem("userList")){
      userList = JSON.parse(localStorage.getItem("userList") as string);
      for(let i=0;i<userList.length;i++){ 
          if(userList[i].name === this.addEditForm.value.name){  
            Swal.fire({
              title: 'Error!',
              text: 'Inventory Data Already Present',
              icon: 'error',
              confirmButtonText: 'Ok'
            })           
           flag=1;
          }
      }
      if(flag===0){
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      // this.accountcreated=true; 
      Swal.fire({
        title: 'Success',
        text: 'Inventory Data Added',
        icon: 'success',
        confirmButtonText: 'Ok'
      }) 
      }
  } else {
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      // this.accountcreated=true; 
      Swal.fire({
        title: 'Success',
        text: 'Inventory Data Added',
        icon: 'success',
        confirmButtonText: 'Ok'
      }) 
  }
  }

  ngOnInit(): void {
    this.addEditForm = new FormGroup({
      code: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      quantity: new FormControl('',[Validators.required]),
      description: new FormControl('') 
      })
  }

}
