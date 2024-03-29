import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ContractsService } from '../../contracts/contracts.service';
import { DoctorService } from '../../shared/services/transactions/doctor.service';
import { Diagnosis } from 'src/app/shared/models/diagnosis.model';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.sass'],
  providers:[ContractsService,DoctorService]
})
export class EditappointmentComponent {
  bookingForm: FormGroup;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    gender: 'Female',
    mobile: '123456789',
    address: '101, Elanxa, New Yourk',
    email: 'test@example.com',
    dob: '1987-02-17T14:22:18Z',
    doctor: '3',
    doa: '2018-05-25T14:22:18Z',
    toa: '10:25',
    injury: 'Fever',
    note: 'No Comments'
  };
  constructor(private fb: FormBuilder,
              private doctorService: DoctorService,
              private contractService: ContractsService
              ) {
    this.bookingForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
    this.setDiagnose();
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      first: [
        this.formdata.first,
        [Validators.required, Validators.pattern('[a-zA-Z]+')]
      ],
      last: [this.formdata.last],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.mobile, [Validators.required]],
      address: [this.formdata.address],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      dob: [this.formdata.dob, [Validators.required]],
      doctor: [this.formdata.doctor, [Validators.required]],
      doa: [this.formdata.doa, [Validators.required]],
      toa: [this.formdata.toa, [Validators.required]],
      injury: [this.formdata.injury],
      note: [this.formdata.note]
    });
  }

  async setDiagnose(){
    var diag = new Diagnosis();
    diag.address_patient="0xe7046Db098fb516B8a05b9D22fE953F6EBFC1C1C";
    diag.age=27;
    diag.address_doctor= await this.contractService.getCurrentAddress();
    diag.comorb="No se que es comorb";
    diag.description="Diagnostico 1";
    diag.observations ="Observaciones 1";
    diag.weigth = 95;
    let files : string[] = [];
    files.push("C1");

    diag.files=files;

    // await this.doctorService.setDiagnostic(diag).then(res=>{
    //   console.log("Diagnose !!!!!!")
    // },error=>{
    //   console.log(error);
    // });

    var g=await this.doctorService.getDiagnoseList(diag.address_patient).then(res=>{
       console.log("Diagnose !!!!!!")
    },error=>{
       console.log(error);
   });

   console.log(g);

  }

}
