import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HostService } from 'src/app/services/host.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropetyById } from 'src/app/_models/propety-by-id';
import { error } from 'jquery';

@Component({
  selector: 'app-host-property',
  templateUrl: './host-property.component.html',
  styleUrls: ['./host-property.component.css'],
})
export class HostPropertyComponent implements OnInit {
  geniralProperty: HostProperties[] = [];
  totalProperty = new PropetyById();

  displayedColumns: string[] = [
    'PropertyName',
    'PropertyType',
    'Price',
    'NumberofGuest',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, public hostServise: HostService) {}

  ngOnInit(): void {
    //  this.getAllProperty();
    this.HostPropertyById();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPropertyComponent, {
      width: '50%',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  // getAllProperty(){
  //   this.hostServise.getAllProperties().subscribe(
  //     {
  //       next:(res)=>{
  //         console.log(res);
  //         this.dataSource = new MatTableDataSource(res);
  //         this.dataSource.paginator= this.paginator;
  //         this.dataSource.sort =this.sort;
  //       },
  //       error:()=>{alert("Error while fetching the records");}
  //     }
  //   );
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProperty(row: any) {
    console.log("tasneem", row);
    this.dialog.open(AddPropertyComponent, {
      
      width: '50%',
      data: row,
      
    });
  }

  deleteProperty(id: number) {
    this.hostServise.deleteProperty(id).subscribe((req) => {
      console.log(req);
      this.HostPropertyById();
    });
  }

  HostPropertyById() {
    this.hostServise.getPropertiesByHostId().subscribe({
      next: (res) => {
        // console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        console.log(error);
      },
    });
  }
}
