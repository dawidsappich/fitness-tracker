import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule,
    MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule
  ],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule,
    MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule
  ]
})
export class MyMaterialModule {
}
