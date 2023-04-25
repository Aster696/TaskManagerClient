import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';
import { AvatarsComponent } from '../avatars/avatars.component';
import { SwPush } from "@angular/service-worker";
import { Keys } from 'src/shared/lib/keys';
import { SubscriptionModel } from 'src/shared/models/subscriptionModel';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public userControllerService: UserControllerService,
    private popupService: PopupService,
    private dialog: MatDialog,
    private swPush: SwPush,
    public basicService: BasicService
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
  private key = new Keys();
  private subscriptionModel = new SubscriptionModel();

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

  receiveEmailNotification() {
    if(this.userControllerService.User.emailNotification) {
      this.userModel.emailNotification = false;
    }else {
      this.userModel.emailNotification = true;
    }
    this.onSubmit();
  }

  allowNotification() {
    if(this.userControllerService.User.allowNotification) {
      this.userModel.allowNotification = false;
      this.userControllerService.updateUser(this.userModel);
    }else {
      this.userModel.allowNotification = true;
      this.userControllerService.updateUser(this.userModel);
      this.requestSubscription();
    }
  }

  requestSubscription() {
    if(!this.swPush.isEnabled) {
      console.log("Notification not enabled!");
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.key.publicKey
    }).then((res) => {
      // console.log(res)
      // console.log(JSON.stringify(res));
      this.userControllerService.subscribeToNotification(res);
    }).catch((error) => {
      // console.log(error);
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

  onCancel() {
    this.EditName()
  }

  onAvatarClick() {
    this.dialog.open(AvatarsComponent);
  }

  editName = false;

  EditName() {
    if(this.editName) {
      this.editName = false
    } else {
      this.editName = true;
    }
  }

}
