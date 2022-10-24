import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formValidators } from 'src/shared/formValidators/formValidators';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userControllerService: UserControllerService,
    private popupService: PopupService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  routeP = new routePath();
  pat = new pattern();
  formValidators = new formValidators();
  userModel = new UserModel();
  id: any;

  formValidation = this.fb.group({
    password: ['', [Validators.required, Validators.pattern(this.pat.password)]],
    confirmPass: ['', [Validators.required]],
  }, {
    validators: this.formValidators.formPasswordValidator
  }); 

  get password() {
    return this.formValidation.get('password');
  }

  get confirmPass() {
    return this.formValidation.get('confirmPass');
  }

  onSubmit(): void {
    if(!this.formValidation.invalid) {
      this.userModel.password = this.formValidation.value.password || '';
      this.userControllerService.resetPassword(this.userModel, this.id);
    } else {
      this.popupService.formValidationAlert();
    }
  }

}
