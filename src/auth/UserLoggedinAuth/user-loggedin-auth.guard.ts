import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {  CanActivate} from '@angular/router';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedinAuthGuard implements CanActivate {
  constructor(
    private userService: UserRouteService,
    private location: Location
  ) {}
  canActivate(): boolean{
    if(!this.userService.LoggedIn()) {
      return true;
    }else {
      this.location.back();
      return false;
    }
  }
  
}
