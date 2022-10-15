import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidators } from 'src/shared/formValidators/formValidators';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  routeP = new routePath();
  currentRoute: string;
  pat = new pattern();
  formValidators = new formValidators();

  formValidation = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.pat.password)]],
    confirmPass: ['', [Validators.required]],
  }, {
    validators: this.formValidators.formPasswordValidator
  }); 

  get userName() {
    return this.formValidation.get('userName');
  }

  get email() {
    return this.formValidation.get('email');
  }

  get password() {
    return this.formValidation.get('password');
  }

  get confirmPass() {
    return this.formValidation.get('confirmPass');
  }

  signup(): void {
    console.log("signup");
  }

  login(): void {
    console.log("login");
  }

}
