import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/shared/lib/routePath';
import { UserModel } from 'src/shared/models/userModel';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  constructor(
    private userControllerService: UserControllerService,
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();
  user = new UserModel();
  avatars = [
    {
      name: 'carrot_avatar.png',
      route: '/Avatar/carrot_avatar.png'
    },
    {
      name: 'tomato_avatar.png',
      route: '/Avatar/tomato_avatar.png'
    },
  ];

  onSelect(avatar: string) {
    this.user.avatar = avatar
    this.userControllerService.updateUser(this.user);
  }

}
