import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdatetypeService } from './updatetype.service';





@Component({
  selector: 'app-updatetype',
  templateUrl: './updatetype.component.html',
  styleUrls: ['./updatetype.component.scss'],
})

export class UpdatetypeComponent implements OnInit {
    queryId: any;
    public types:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private updatetypeService: UpdatetypeService,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email') || ''; 
        


        this.GetEntityById();
    
    }
    Update() {
        this.updatetypeService.Update(this.types).subscribe((data:any) => {
            this.types.name = ''
 	 	this.types.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetEntityById() {
        this.updatetypeService.GetEntityById(this.queryId).subscribe((data:any) => {
            this.types = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}