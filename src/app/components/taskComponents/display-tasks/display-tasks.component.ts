import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { TaskModel } from 'src/shared/models/taskModel';
import { UserModel } from 'src/shared/models/userModel';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { TaskControllerService } from 'src/shared/services/controllers/taskController/task-controller.service';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public basicService: BasicService,
    public taskControllerService: TaskControllerService,
    public userRouteService: UserRouteService,
    public userControllerService: UserControllerService,
    public popupService: PopupService,
  ) { }

  ngOnInit(): void {
  }

  searchTask: string;
  taskModel = new TaskModel();

  openTaskForm(updateTask: string): void {
    if(this.userRouteService.LoggedIn()) {
      this.taskControllerService.updateTaskId = updateTask;
      this.dialog.open(AddTaskComponent, {
        panelClass: this.basicService.darkMode ? 'form': ''
      });
    } else {
      this.popupService.loginRequiredAlert();
    }
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  checkTask(task: TaskModel) {
    if(task.checked) {
      task.checked = false;
    }else {
      task.checked = true;
    }
    this.taskControllerService.updateTask(task._id, task);
  }

}
