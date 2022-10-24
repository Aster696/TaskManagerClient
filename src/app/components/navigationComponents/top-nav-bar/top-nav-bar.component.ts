import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    public basicService: BasicService,
    public userRouteService: UserRouteService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();

}
