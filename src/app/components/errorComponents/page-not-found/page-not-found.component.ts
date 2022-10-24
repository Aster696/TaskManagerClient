import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routeP = new routePath();

}
