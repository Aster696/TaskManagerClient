import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {

  constructor(
    public basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();

}
