import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidators } from 'src/shared/formValidators/formValidators';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userControllerService: UserControllerService,
  ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  routeP = new routePath();
  currentRoute: string;
  pat = new pattern();
  formValidators = new formValidators();
  userModel = new UserModel();

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
    this.userModel.userName = this.formValidation.value.userName || '';
    this.userModel.email = this.formValidation.value.email || '';
    this.userModel.password = this.formValidation.value.password || '';
    this.userControllerService.register(this.userModel);
    this.formValidation.reset();
  }

  login(): void {
    this.userModel.email = this.formValidation.value.email || '';
    this.userModel.password = this.formValidation.value.password || '';
    this.userControllerService.login(this.userModel);
    this.formValidation.reset();
  }

}
