import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { PopupService } from '../../popupService/popup.service';
import { UserRouteService } from '../../routes/userRoute/user-route.service';
import jwt_decode from 'jwt-decode'
import { EmailControllerService } from '../emailController/email-controller.service';
import { TaskModel } from 'src/shared/models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(
    private userRouteService: UserRouteService,
    private emailControllerService: EmailControllerService,
    private popupService: PopupService,
    private router: Router,
  ) { 
    if(userRouteService.LoggedIn()) {
      this.displayUser();
      this.displayNotifications();
      setInterval(() => {
        this.displayUser();
        this.displayNotifications();
      }, 3000);
    }
  }

  public User = new UserModel();
  public Notifications: TaskModel[] = [];
  private routeP = new routePath();

  register(formData: UserModel) {
    try {
      this.userRouteService
      .register(formData)
      .subscribe(
        res => {
          if(res.status === 200){
            this.popupService.signupSuccessAlert();
          }
        }, error => {
          if(error.status === 201) {
            this.popupService.signupSuccessAlert();
          }
          if(error.status === 409) {
            this.popupService.accountAlreadyExistAlert();
          }
          if(error.status === 422) {
            this.popupService.invalidCredentialsAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert()
      // console.log(error);
    }
  }

  login(formData: UserModel) {
    try {
      this.userRouteService
      .login(formData)
      .subscribe(
        res => {
          this.popupService.loginSuccessAlert();
          localStorage.setItem('accessToken', res.accessToken);
        }, error => {
          if(error.status === 404 || error.status === 401) {
            this.popupService.emailOrPasswordInvalidAlert();
          }
          if(error.status === 403) {
            this.popupService.blockedUserAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert()
      // console.log(error);
    }
  }

  updateUser(formData: UserModel) {
    try {
      this.userRouteService
      .updateUser(formData)
      .subscribe(
        res => {
          this.popupService.userUpdatedSuccessAlert();
        }, error => {
          if(error.status === 200 || 204) {
            this.popupService.userUpdatedSuccessAlert();
          }else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  displayUser() {
    try {
      this.userRouteService
      .displayUser()
      .subscribe(
        data => {
          this.User = data;
        }, error => {
          this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  displayNotifications() {
    try {
      this.userRouteService
      .displayNotifications()
      .subscribe(
        data => {
          this.Notifications = data;
        }, error => {
          this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  removeNotification(id: string) {
    try {
      this.userRouteService
      .removeNotification(id)
      .subscribe(
        res => {
          this.popupService.removedNotificationSuccessAlert();
        }, error => {
          if(error.status === 200 || 204) {
            this.popupService.removedNotificationSuccessAlert();
          }else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  forgotPassword(formData: UserModel) {
    try {
      this.userRouteService
      .forgotPassword(formData)
      .subscribe(
        res => {
          const accessToken: any = res.resetPassToken;
          let resetPasstoken: any = jwt_decode(accessToken);
          formData.otp = resetPasstoken.otp;
          this.emailControllerService.sendResetPasswordOtpEmail(formData, this.routeP.slase+this.routeP.forgotPasswordOtp+res.resetPassToken);
        }, error => {
          this.popupService.forgetPasswordEmailSendSuccessAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert()
      // console.log(error);
    }
  }

  resetPassword(formData: UserModel, id: string) {
    try {
      this.userRouteService
      .resetPassword(formData, id)
      .subscribe(
        res => {
          this.popupService.passwordUpdatedSuccessAlert();
          this.emailControllerService.sendPasswordUpdatedSuccessEmail(id);
        }, error => {
          if(error.status === 200 || 204) {
            this.popupService.passwordUpdatedSuccessAlert();
            this.emailControllerService.sendPasswordUpdatedSuccessEmail(id);
          }else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

}
