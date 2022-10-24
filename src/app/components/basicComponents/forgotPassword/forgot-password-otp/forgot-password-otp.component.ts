import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';

@Component({
  selector: 'app-forgot-password-otp',
  templateUrl: './forgot-password-otp.component.html',
  styleUrls: ['./forgot-password-otp.component.css']
})
export class ForgotPasswordOtpComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private basicService: BasicService,
    private route: ActivatedRoute,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  routeP = new routePath();
  token: any;

  formValidation = this.fb.group({
    otp: ['', [Validators.required]],
  }); 

  get otp() {
    return this.formValidation.get('otp');
  }

  onSubmit(): void {
    let resetPassToken: any = jwtDecode(this.token);
    if(this.formValidation.value.otp === resetPassToken.otp) {
      this.popupService.otpSuccessAlert(resetPassToken.id);
    }else {
      this.popupService.invalidOtpAlert();
    }
  }

}
