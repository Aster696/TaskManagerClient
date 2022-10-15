import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-forgot-password-otp',
  templateUrl: './forgot-password-otp.component.html',
  styleUrls: ['./forgot-password-otp.component.css']
})
export class ForgotPasswordOtpComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();

  formValidation = this.fb.group({
    otp: ['', [Validators.required]],
  }); 

  get otp() {
    return this.formValidation.get('otp');
  }

  onSubmit(): void {
    this.router.navigate([this.routeP.slase+this.routeP.resetPassword])
  }

}
