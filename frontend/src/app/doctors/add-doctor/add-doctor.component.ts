import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/transactions/admin.service';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { ContractsService } from 'src/app/contracts/contracts.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.sass']
})
export class AddDoctorComponent {
  docForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder, public adminService: AdminService, private contractService: ContractsService) {
    this.docForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      cedula: [''],
      specialty: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
    });
  }
  async register(doctor:Doctor){
    var admin_account   = await this.contractService.getCurrentAddress();
    await this.adminService.addDoctor(doctor, admin_account).then(res=>{
      console.log("RegisteredX2!!!!!!")
    },error=>{
      console.log(error);
    });
  }
  onSubmit() {
    console.log('Form Value', this.docForm.value);
    var doctor  = new Doctor();
    doctor.name       = this.docForm_Doc.value.first;
    doctor.surname    = this.docForm_Doc.value.last1;
    doctor.secondname   = this.docForm_Doc.value.last2;
    doctor.email        = this.docForm_Doc.value.email;
    doctor.cedula       = this.docForm_Doc.value.cedula;
    doctor.specialty    = this.docForm_Doc.value.specialty;
    doctor.address      = this.docForm_Doc.value.address;
    doctor.hashPicture  = this.docForm_Doc.value.hashPicture;
    this.register(doctor);
  }
}

