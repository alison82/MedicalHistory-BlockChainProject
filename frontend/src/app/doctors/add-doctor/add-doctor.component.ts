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
      last: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
      designation: [''],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadImg: ['']
    });

    this.docForm_Doc = this.fb.group({
        first:['Liliana'],
        last1:['Duran'],
        last2:['Polanco'],
        email:['llll@gmail.com'],
        cedula:['123456789'],
        specialty:['Cardiologia'],
        address:['0x8085A6759EbA2A66D7E5cc04597c552aEd46F20b'],
        hashPicture:['']
      });
  }
  onSubmit() {
    console.log('Form Value', this.docForm_Doc.value);
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

async register(doctor:Doctor){
  var admin_account   = await this.contractService.getCurrentAddress();
  await this.adminService.addDoctor(doctor, admin_account).then(res=>{
    console.log("RegisteredX2!!!!!!")
  },error=>{
    console.log(error);
  });
}

}
