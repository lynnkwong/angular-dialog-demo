import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// A simple interface that works as a type for the cart data.
export interface CartData {
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css'],
})
export class AddCartComponent {
  /* `dialogRef` is ingested by Angular and works as a handler for the
   * dialog opened.
   * `MAT_DIALOG_DATA` injects data that is passed when the dialog is
   * opened.
   */
  constructor(
    public dialogRef: MatDialogRef<AddCartComponent>,
    @Inject(MAT_DIALOG_DATA) public cartData: CartData
  ) {}

  onCancel() {
    // We can use the dialog handler to close the dialog explicitly.
    // It can also be closed with the `mat-dialog-close` attribute.
    this.dialogRef.close();
  }
}
