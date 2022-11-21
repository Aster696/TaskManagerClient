import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public basicService: BasicService,
  ) { }

  ngOnInit(): void {
  }

}
