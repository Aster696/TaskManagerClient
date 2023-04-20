import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../../../../../../src/styles.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userControllerService: UserControllerService,
    public basicService: BasicService
  ) { }

  ngOnInit(): void {
  }

  private routeP = new routePath();
  private userModel = new UserModel();

  formValidation = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  }); 

  get email() {
    return this.formValidation.get('email');
  }

  onSubmit(): void {
    this.userModel.email = this.formValidation.value.email || '';
    this.userControllerService.forgotPassword(this.userModel);
  }

}
