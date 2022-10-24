import { Injectable } from '@angular/core';
import { TaskModel } from 'src/shared/models/taskModel';
import { PopupService } from '../../popupService/popup.service';
import { TaskRouteService } from '../../routes/taskRoute/task-route.service';
import { UserRouteService } from '../../routes/userRoute/user-route.service';

@Injectable({
  providedIn: 'root'
})
export class TaskControllerService {

  constructor(
    private taskRouteService: TaskRouteService,
    private popupService: PopupService,
    userRouteService: UserRouteService,
  ) {
    if(userRouteService.LoggedIn()) {
      this.displayTasks();
    }
  }

  Tasks: TaskModel[];
  Task = new TaskModel;
  updateTaskId = '';

  addTask(formData: TaskModel) {
    try {
      this.taskRouteService
      .addTask(formData)
      .subscribe(
        res => {
          this.popupService.taskAddedSuccessAlert();
          this.displayTasks();
        }, error => {
          if(error.status === 201) {
            this.popupService.taskAddedSuccessAlert();
            this.displayTasks();
          } else {
            this.popupService.somethingWhentWrongAlert();
          }
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  updateTask(id: string, formData: TaskModel) {
    try {
      this.taskRouteService
      .updateTask(id, formData)
      .subscribe(
        res => {
          this.popupService.taskUpdatedSuccessAlert();
          this.displayTasks();
        }, error => {
            this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  deleteTask(id: string) {
    try {
      this.taskRouteService
      .deleteTask(id)
      .subscribe(
        res => {
          this.popupService.taskdeletedSuccessAlert();
          this.displayTasks();
        }, error => {
          this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  displayTasks() {
    try {
      this.taskRouteService
      .displayTasks()
      .subscribe(
        data => {
          this.Tasks = data;
        }, error => {
          this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

  displayTask(id: string) {
    try {
      this.taskRouteService
      .displayTask(id)
      .subscribe(
        data => {
          this.Task = data;
        }, error => {
          this.popupService.somethingWhentWrongAlert();
        }
      );
    } catch (error) {
      this.popupService.somethingWhentWrongAlert();
      // console.log(error);
    }
  }

}
