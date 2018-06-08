import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../../error-dialog/error-dialog.component';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog: MatDialog) { }

  errorDialog(errorMessage: string) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {data: {message: errorMessage}});
  }
}
