import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartData, AddCartComponent } from './add-cart/add-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cartData: CartData | undefined;

  // Initial price and quantity are obtained from somewhere:
  price = 199;
  quantity = 2;

  // `dialog` is injected as an instance of the `MatDialog` service.
  // It can be used to open a dialog popup.
  constructor(public dialog: MatDialog) {}

  openAddCartDialog() {
    // We either create a new cart item pass the existing one so it can
    // be edited.
    let dataToPass: CartData;

    if (this.cartData) {
      dataToPass = this.cartData;
    } else {
      dataToPass = {
        price: this.price,
        quantity: this.quantity,
      };
    }

    // The target component for the dialog is passed as the first
    // argument. The second argument is the config object. The most
    // common configuration is `width` which sets the width of the dialog
    // popup, and the `data` which passes data to the dialog component.
    const dialogRef = this.dialog.open(AddCartComponent, {
      width: '300px',
      data: { ...dataToPass },
    });

    // Some data can be passed back when the dialog is closed, using
    // the `mat-dialog-close` attribute, or the `close()` method of the
    // the dialog reference.
    dialogRef.afterClosed().subscribe((result) => {
      this.cartData = result === undefined ? this.cartData : result;
    });
  }
}
