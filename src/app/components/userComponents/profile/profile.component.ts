import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public userControllerService: UserControllerService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.userControllerService.displayUser();
    setTimeout(() => {
      this.setValue();
    }, 500);
  }

  routeP = new routePath();
  private pat = new pattern();
  private userModel = new UserModel();

  formValidation = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
  }); 

  get userName() {
    return this.formValidation.get('userName');
  }

  setValue() {
    this.formValidation.setValue({
      userName: this.userControllerService.User.userName,
    })
  }

  onSubmit() {
    if(!this.formValidation.invalid) {
      this.userModel.userName = this.formValidation.value.userName || '';
      this.userControllerService.updateUser(this.userModel);
    }else {
      this.popupService.formValidationAlert();
    }
  }

}
