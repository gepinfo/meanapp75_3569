import { Component, OnInit, ViewChild } from '@angular/core';
import { GetallticketService } from './getallticket.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-getallticket',
  templateUrl: './getallticket.component.html',
  styleUrls: ['./getallticket.component.scss'],
})

export class GetallticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection: "single" | "multiple" | undefined = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getallticketService: GetallticketService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GetAllValues() {
        this.getallticketService.GetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Route(queryId:any) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.Route(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }


}