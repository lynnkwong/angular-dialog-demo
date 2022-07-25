import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Needed for building template driven forms with `ngModel`.
import { FormsModule } from '@angular/forms';

// Imported by Angular CLI automatically for Angular Material.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// You need to import material modules manually that are needed in the
// application.
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Added automatically when the component was created with Angular CLI.
import { AppComponent } from './app.component';
import { AddCartComponent } from './add-cart/add-cart.component';

@NgModule({
  // Components are put in `declarations`.
  declarations: [AppComponent, AddCartComponent],
  // Modules are put in `imports`.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
