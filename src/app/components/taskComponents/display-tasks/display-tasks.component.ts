import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskControllerService } from 'src/shared/services/controllers/taskController/task-controller.service';
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
    public taskControllerService: TaskControllerService,
    private userRouteService: UserRouteService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
  }

  searchTask: string;

  openTaskForm(updateTask: string): void {
    if(this.userRouteService.LoggedIn()) {
      this.taskControllerService.updateTaskId = updateTask;
      this.dialog.open(AddTaskComponent);
    } else {
      this.popupService.loginRequiredAlert();
    }
  }

}
