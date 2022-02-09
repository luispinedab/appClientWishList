import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Name: {
        title: 'Nombre',
        type: 'string',
      },
      Price: {
        title: 'Precio',
        type: 'string',
      },
      amount: {
        title: 'Cantidad',
        type: 'number',
      },
    },
  };
  constructor(private productsService:ProductsService,private router:Router) { }
  products1:any=[];
  products = [];
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productsService.getProducts().subscribe(res=>{
      this.products1=res;
    },err=>console.error("no hay productos"))
  }

  onDeleteConfirm(event:any): void {
    if (window.confirm('Are you sure you want to delete?')) {
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event:any):void { 
    if (window.confirm('Are you sure you want to create?')) {
    } else {
      event.confirm.reject();
    }
  } 
  
  onSaveConfirm(event:any):void {
    if (window.confirm('Are you sure you want to save?')) {
    } else {
      event.confirm.reject();
    }
  }
}
