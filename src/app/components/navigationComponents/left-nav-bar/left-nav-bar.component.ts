import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit, AfterContentChecked {

  constructor(
    public basicService: BasicService,
    public userRouteService: UserRouteService,
    public userControllerService: UserControllerService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges()
  }

  routeP = new routePath();

}
