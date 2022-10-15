import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();

  formValidation = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  }); 

  get email() {
    return this.formValidation.get('email');
  }

  onSubmit(): void {
    this.router.navigate([this.routeP.slase+this.routeP.forgotPasswordOtp])
  }

}
