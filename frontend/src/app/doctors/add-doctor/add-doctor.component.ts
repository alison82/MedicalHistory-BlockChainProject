import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/transactions/admin.service';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { ContractsService } from 'src/app/contracts/contracts.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.sass'],
  providers:[AdminService]
})
export class AddDoctorComponent {
  docForm: FormGroup;
  docForm_Doc: FormGroup;
  hide3 = true;
  agree3 = false;

  constructor(  private fb: FormBuilder, 
                public adminService: AdminService,
                private contractService: ContractsService) {
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
  
  
  onSubmit() {
    console.log('Form Value', this.docForm.value);
    var doctor  = new Doctor();
    doctor.name       = this.docForm.value.first;
    doctor.email        = this.docForm.value.email;
    doctor.cedula       = this.docForm.value.cedula;
    doctor.specialty    = this.docForm.value.specialty;
    doctor.hashPicture  = "aaaaaaaaaaaaaaaaaaaaaaa";//this.docForm.value.hashPicture;
    this.register(doctor);
  }

  async register(doctor:Doctor){
    var admin_account   = await this.contractService.getCurrentAddress();
    await this.adminService.addDoctor(doctor, admin_account).then(res=>{
      console.log("RegisteredX2!!!!!!")
    },error=>{
      console.log(error);
    });
  }

}

