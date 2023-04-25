import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {

  constructor(
    public basicService: BasicService,
    public userRouteService: UserRouteService,
    public userControllerService: UserControllerService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if(this.userRouteService.LoggedIn()) {
      this.userControllerService.displayUser();
      setInterval(() => {
        this.userControllerService.updateUserStatus();
      }, 3000);
    }
  }

  routeP = new routePath();

  DarkMode() {
    const userModel = new UserModel();
    if(this.userRouteService.LoggedIn()) {
      userModel.darkMode = this.basicService.darkMode;

      console.log(userModel.darkMode)

      this.userControllerService.updateUser(userModel);
    }
  }

}
