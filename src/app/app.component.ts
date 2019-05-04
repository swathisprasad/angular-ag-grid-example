import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular ag-grid';

  columnDefs = [
        { headerName: 'Employee Name', field: 'name', sortable:true, filter:true, checkboxSelection: true },
        { headerName: 'Title', field: 'title', sortable:true, filter:true },
        { headerName: 'Employee Number', field: 'number', sortable:true, filter:true },
        { headerName: 'Date of Joining', field: 'date', sortable:true, filter:true }
    ];

    rowData = [
        { name: 'John', title: 'Software Engineer', number: 123456, date: 'March 02, 2016' },
        { name: 'Jane', title: 'Senior Software Engineer', number: 123451, date: 'April 01, 2014' },
        { name: 'Richard', title: 'Software Engineer', number: 123452, date: 'January 02, 2015' },
        { name: 'Janie', title: 'Software Engineer', number: 123453, date: 'March 23, 2016' },
        { name: 'Johnny', title: 'Senior Software Engineer', number: 123454, date: 'September 01, 2017' }
    ];
}
