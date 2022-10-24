import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { PopupService } from '../../popupService/popup.service';
import { EmailRouteService } from '../../routes/emailRoute/email-route.service';

@Injectable({
  providedIn: 'root'
})
export class EmailControllerService {

  constructor(
    private emailRouteService: EmailRouteService,
    private popupService: PopupService,
    private router: Router,
  ) { }

  private routeP = new routePath();

  feedback(formData: UserModel) {
    try {
      this.emailRouteService
      .feedback(formData)
      .subscribe(
        res => {
          this.popupService.feedbackSendAlert();
        }, error => {
          if(error.status === 200 || 204) {
            this.popupService.feedbackSendAlert();
          }else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
    }
  }

  sendResetPasswordOtpEmail(formData: UserModel, link: string) {
    try {
      this.emailRouteService
      .sendResetPasswordOtpEmail(formData)
      .subscribe(
        res => {
          this.popupService.forgetPasswordEmailSendSuccessAlert();
          this.router.navigate([link]);
        }, error => {
          if(error.status === 200 || 204) {
            this.popupService.forgetPasswordEmailSendSuccessAlert();
            this.router.navigate([link]);
          }else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
    }
  }

  sendPasswordUpdatedSuccessEmail(id: string) {
    try {
      this.emailRouteService
      .sendPasswordUpdatedSuccessEmail(id)
      .subscribe(
        res => {
          // console.log(res);
        }, error => {
          // console.log(error);
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
    }
  }

}
