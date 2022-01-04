import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'code', headerName: 'Product Code' },
    { field: 'name', headerName: 'Product Name' },
    { field: 'price' ,headerName: 'Price ' },
    { field: 'quantity' ,headerName: 'Quantity ' },
    { field: 'description' ,headerName: ' Description' }
];

rowData: any;

  constructor() { }

  ngOnInit(): void {
    let userListObj: any = localStorage.getItem("userList")//JSON.parse();
    let list = JSON.parse(userListObj);
    this.rowData = [];
    list.forEach((element: { code: any; name: any; price: any; quantity: any; description: any; }) => {
      this.rowData.push({
        code: element.code, name: element.name, price: element.price, quantity: element.quantity, description: element.description 
      });
    
    });
  }

}
