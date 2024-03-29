import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DoctorsService } from './doctors.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//import { Doctors } from './doctors.model';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';

import { AdminService } from '../../shared/services/transactions/admin.service'
import { Doctor } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.sass']
})
export class AlldoctorsComponent implements OnInit {
  displayedColumns = [
    'address',
    'name',
    'specialty',
    'cedula',
    'email',
    'actions'
  ];
  exampleDatabase: DoctorsService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  address: string;
  doctors: Doctor | null;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public doctorsService: DoctorsService,
    private snackBar: MatSnackBar,
    public adminService: AdminService
  ) {

    //this.adminService.getPendingRequest();
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  ngOnInit() {
    this.loadData();
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        doctors: this.doctors,
        action: 'add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.doctorsService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  editCall(row) {
    this.address = row.address;
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        doctors: row,
        action: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          x => x.address === this.address
        );
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[
          foundIndex
        ] = this.doctorsService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  deleteItem(i: number, row) {
    this.index = i;
    this.address = row.address;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          x => x.address === this.address
        );
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    this.exampleDatabase = new DoctorsService(this.httpClient, this.adminService);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName
    });
  }
}
export class ExampleDataSource extends DataSource<Doctor> {
  _filterChange = new BehaviorSubject('');
  get filter(): string {
    return this._filterChange.value;
  }
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  filteredData: Doctor[] = [];
  renderedData: Doctor[] = [];
  constructor(
    public _exampleDatabase: DoctorsService,
    public _paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Doctor[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    this._exampleDatabase.getAllDoctorss();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this._exampleDatabase.data
          .slice()
          .filter((doctors: Doctor) => {
            const searchStr = (
              doctors.address +
              doctors.name +
              doctors.cedula +
              doctors.email +
              doctors.specialty
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this._paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  disconnect() {}
  /** Returns a sorted copy of the database data. */
  sortData(data: Doctor[]): Doctor[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'address':
          [propertyA, propertyB] = [a.address, b.address];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'email':
          [propertyA, propertyB] = [a.email, b.email];
          break;
        case 'specialty':
          [propertyA, propertyB] = [a.specialty, b.specialty];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
