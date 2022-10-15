import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();
  pat = new pattern();

  formValidation = this.fb.group({
    password: ['', [Validators.required, Validators.pattern(this.pat.password)]],
    confirmPass: ['', [Validators.required]],
  }); 

  get password() {
    return this.formValidation.get('password');
  }

  get confirmPass() {
    return this.formValidation.get('confirmPass');
  }

  onSubmit(): void {
    this.router.navigate([this.routeP.slase+this.routeP.login])
  }

}
