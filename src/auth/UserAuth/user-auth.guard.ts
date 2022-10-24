import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { PopupService } from 'src/shared/services/popupService/popup.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(
    private userService: UserRouteService,
    private popupService: PopupService,
  ) {}
  canActivate(): boolean{
    if(this.userService.LoggedIn()) {
      return true;
    }else {
      this.popupService.loginRequiredAlert();
      return false;
    }
  }
  
}
