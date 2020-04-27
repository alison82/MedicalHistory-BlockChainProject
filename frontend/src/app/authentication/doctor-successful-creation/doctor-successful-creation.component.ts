import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-successful-creation',
  templateUrl: './doctor-successful-creation.component.html',
  styleUrls: ['./doctor-successful-creation.component.sass']
})
export class DoctorSuccessfulCreationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.router.navigate(['/#']);
  }

}
