import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidators } from 'src/shared/formValidators/formValidators';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { EmailControllerService } from 'src/shared/services/controllers/emailController/email-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private popupService: PopupService,
    private emailControllerService: EmailControllerService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();
  pat = new pattern();
  formValidators = new formValidators();
  userModel = new UserModel();

  formValidation = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  }); 

  get userName() {
    return this.formValidation.get('userName');
  }

  get email() {
    return this.formValidation.get('email');
  }

  get subject() {
    return this.formValidation.get('subject');
  }

  get message() {
    return this.formValidation.get('message');
  }

  onSubmit(): void {
    if(!this.formValidation.invalid) {
      this.userModel.userName = this.formValidation.value.userName || '';
      this.userModel.email = this.formValidation.value.email || '';
      this.userModel.subject = this.formValidation.value.subject || '';
      this.userModel.message = this.formValidation.value.message || '';
      this.userModel.typeOfEmail = 'Feedback from a7-task-manager-client';
      this.emailControllerService.feedback(this.userModel);
      this.formValidation.reset();
    }else {
      this.popupService.formValidationAlert();
    }
  }

}
