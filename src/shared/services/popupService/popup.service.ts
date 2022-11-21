import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import Swal from 'sweetalert2';
import { TaskControllerService } from '../controllers/taskController/task-controller.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private router: Router
  ) { }

  private routeP = new routePath();

  // basic alerts
  loginRequiredAlert() {
    Swal.fire({
      html: `You need to <a href=${this.routeP.slase+this.routeP.login} class='link'>Login</a> 
      first to access this feature/page`,
      icon: 'info',
      toast: true,
    })
    this.router.navigate([this.routeP.slase+this.routeP.login]);
  }

  formValidationAlert() {
    return Swal.fire({
      title: "Please fill in all the requried details",
      icon: "info",
      toast: true,
      timer: 3000
    });
  }

  feedbackSendAlert() {
    Swal.fire({
      title: "Feedback send successfully!",
      icon: "success",
      toast: true,
      timer: 3000
    });
  }

  sesseionExpiredAlert() {
    return Swal.fire({
      title: "Session Expired",
      icon: "info",
      timer: 3000
    });
    this.router.navigate([this.routeP.slase+this.routeP.login]);
  }

  // register page alerts
  signupSuccessAlert() {
    Swal.fire({
      title: 'Sign-up successfull!!!',
      icon: 'success',
      timer: 3000
    });
    this.router.navigate([this.routeP.slase+this.routeP.login]);
  }

  accountAlreadyExistAlert() {
    Swal.fire({
      title: 'Account already exist',
      html: `If you are already a user please 👉 
      <a href=${this.routeP.slase+this.routeP.login} class='link'>Login</a>`,
      icon: 'info'
    });
  }

  invalidCredentialsAlert() {
    Swal.fire({
      title: 'Invalid credentials',
      icon: 'warning',
      timer: 3000
    })
  }

  // login page alerts
  loginSuccessAlert() {
    Swal.fire({
      title: 'Welcome back!!!',
      icon: 'success',
      timer: 3000
    });
    location.href = this.routeP.slase+this.routeP.home;
  }

  emailOrPasswordInvalidAlert() {
    Swal.fire({
      title: 'Email/ Password invalid',
      html: `If your a new user please 👉 
      <a href=${this.routeP.slase+this.routeP.signup} class='link'>Signup</a>`,
      icon: 'info',
    });
  }

  blockedUserAlert() {
    Swal.fire({
      title: 'Account blocked',
      html: `Your account is locked. 
      If you haven't recevied any email regarding account blocked please 👉 
      <a href=${this.routeP.slase+this.routeP.contact} class='link'>Contact us</a>`,
      icon: 'info'
    })
  }

  // user page alerts
  userUpdatedSuccessAlert() {
    Swal.fire({
      title: 'Profile updated successfully!!!',
      icon: 'success',
      timer: 3000,
      toast: true,
    })
  }

  removedNotificationSuccessAlert() {
    Swal.fire({
      title: 'Checked!',
      icon: 'success',
      timer: 3000,
      toast: true,
    })
  }

  // task page alerts
  taskAddedSuccessAlert() {
    Swal.fire({
      title: 'Task added successfully!!!',
      icon: 'success',
      timer: 3000,
      toast: true,
    });
  }

  taskUpdatedSuccessAlert() {
    Swal.fire({
      title: 'Task updated successfully!!!',
      icon: 'success',
      timer: 3000,
      toast: true,
    });
  }

  taskDeletedSuccessAlert() {
    Swal.fire({
      title: 'Task deleted successfully!!!',
      icon: 'success',
      timer: 3000,
      toast: true,
    });
  }

  taskNotDeletedAlert() {
    Swal.fire({
      title: 'Task not deleted!',
      icon: 'info',
      timer: 3000,
      toast: true,
    });
  }

  // email alerts
  forgetPasswordEmailSendSuccessAlert() {
    Swal.fire({
      title: 'Check your email for OTP',
      html: `If you are a registered user you will recive otp on the given email. 
      If you are a new user please 
      <a href="${this.routeP.slase+this.routeP.signup}" class='link'>Signup</a>`,
      icon: 'success'
    })
  }

  // forgot password alerts
  otpSuccessAlert(id: string) {
    Swal.fire({
      title: 'Success!!!',
      toast: true,
      icon: 'success',
    });
    this.router.navigate([this.routeP.slase+this.routeP.resetPassword+id]);
  }

  invalidOtpAlert() {
    Swal.fire({
      title: 'Invalid OTP',
      toast: true,
      icon: 'warning',
    });
  }

  passwordUpdatedSuccessAlert() {
    Swal.fire({
      title: 'Password updated successfully!!!',
      toast: true,
      icon: 'success',
      timer: 3000
    });
    this.router.navigate([this.routeP.slase+this.routeP.login])
  }

  // error alert
  somethingWhentWrongAlert() {
    Swal.fire({
      title: 'Oops, something whent wrong 🙁',
      text: 'Please try again after sometime',
      icon: 'error',
      timer: 3000
    });
  }
}
