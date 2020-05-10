import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Doctors } from './doctors.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from 'src/app/shared/services/transactions/admin.service';
import { Doctor } from 'src/app/shared/models/doctor.model';
@Injectable()
export class DoctorsService {
  private readonly API_URL = 'assets/data/doctors.json';
  dataChange: BehaviorSubject<Doctor[]> = new BehaviorSubject<Doctor[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient, private adminService: AdminService) {}
  //get data(): Doctors[] {
  get data(): Doctor[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDoctorss(): void {
    console.log(`get All doctors`);

    this.adminService.getPendingRequest().then(res => {
      console.log(`pendientes: ${JSON.stringify(res)}`);
      this.dataChange.next(res);
    })
    /*this.httpClient.get<Doctors[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
    */
  }
  // DEMO ONLY, you can find working methods below
  addDoctors(doctors: Doctor): void {
    this.dialogData = doctors;
  }
  updateDoctors(doctors: Doctor): void {
    this.dialogData = doctors;
  }
  deleteDoctors(id: number): void {
    console.log(id);
  }
}
