import { Component } from '@angular/core';
import { BasicService } from 'src/shared/services/basicService/basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagerClient';

  constructor(
    public basicService: BasicService,
  ) { }

}
