import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormDialogComponent } from 'src/app/appointment/viewappointment/dialogs/form-dialog/form-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../../signin.service';
import { Roles } from 'src/app/shared/models/enums.enum';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.sass']
})
export class SelectDialogComponent {
  dialogTitle: string;
  selectForm: FormGroup;
  _rol = '';
  roles : any[] = [Roles.doctor, Roles.patient];

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    private fb: FormBuilder,
    public signinService: SigninService
  ) {
    this.dialogTitle = 'You need to register. Select the role.';
    this._rol = Roles.patient;
    this.selectForm = this.createSelectForm();
  }

  createSelectForm(): FormGroup {
    return this.fb.group({
      _rol: [this._rol, [Validators.required]]
    });
  }

  public confirmAdd(): void{
    this.signinService.setRol(this.selectForm.getRawValue()._rol);
  }

  submit() {
    // emppty stuff
  }

}
