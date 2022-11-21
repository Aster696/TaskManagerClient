import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userRouteService: UserRouteService,
    private userControllerService: UserControllerService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.checkUser();
  }

  private jwtHelperService = new JwtHelperService();

  checkUser(): void{
    if(this.userRouteService.LoggedIn()){
      let isExpired = this.jwtHelperService.isTokenExpired(this.userRouteService.getToken());
      if(isExpired) {
        if(this.userControllerService.User.rememberMe) {
          const user = new UserModel();
          user.email = this.userControllerService.User.email;
          user._id = this.userControllerService.User._id;
          console.log(user)
          this.userControllerService.login(user);
        }else {
          this.userRouteService.LogOut();
        }
        // this.popupService.sesseionExpiredAlert();
      } else {
        return;
      }
    }
  }

}
