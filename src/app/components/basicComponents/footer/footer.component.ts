import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();

}
