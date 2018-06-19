// // import {Component} from '@angular/core';
// // import {MatTableDataSource} from '@angular/material';

// // /**
// //  * @title Table with filtering
// //  */
// // @Component({
// //   selector: 'app-demo',
// //   templateUrl: './demo.component.html',
// //   styleUrls: ['./demo.component.css']
// // })
// // export class DemoComponent {
// //   displayedColumns = ['position', 'name', 'weight', 'symbol',"ha",'actions'];
// //   dataSource = new MatTableDataSource(ELEMENT_DATA);

// //   applyFilter(filterValue: string) {
// //     filterValue = filterValue.trim(); // Remove whitespace
// //     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
// //     this.dataSource.filter = filterValue;
// //   }
// // }

// // export interface PeriodicElement {
// //   name: string;
// //   position: number;
// //   weight: number;
// //   symbol: string;
// // }

// // const ELEMENT_DATA: PeriodicElement[] = [
// //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
// //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
// //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
// //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
// //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
// //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
// //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
// //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
// //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// // ];

// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'app-demo',
//   templateUrl: './demo.component.html',
//   styleUrls: ['./demo.component.css']
// })
export class DemoComponent {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: { name: this.name, animal: this.animal }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   // constructor(
//   //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//   //   @Inject(MAT_DIALOG_DATA) public data: any) { }

//   // onNoClick(): void {
//   //   this.dialogRef.close();
//   // }

// }