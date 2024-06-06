import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateticketService } from './updateticket.service';





@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        types: '',
        severity: '',
    }




    constructor (
        private updateticketService: UpdateticketService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


        this.GetEntityById();
    
    }
    typesGetAllValues() {
        this.updateticketService.typesGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGetAllValues() {
        this.updateticketService.severityGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetAllValues() {
        this.updateticketService.GetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Update() {
        this.updateticketService.Update(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetEntityById() {
        this.updateticketService.GetEntityById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}