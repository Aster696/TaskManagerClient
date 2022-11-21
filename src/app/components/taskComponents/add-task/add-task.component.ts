import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/shared/models/taskModel';
import { TaskControllerService } from 'src/shared/services/controllers/taskController/task-controller.service';
import { PopupService } from 'src/shared/services/popupService/popup.service';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private userRouterService: UserRouteService,
    public taskControllerService: TaskControllerService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    if(this.taskControllerService.updateTaskId){
      this.taskControllerService.displayTask(this.taskControllerService.updateTaskId);
      setTimeout(() => {
        this.setValue();
      }, 700);
    }
  }

  taskModel = new TaskModel();

  formValidation = this.fb.group({
    taskName: ['', [Validators.required, Validators.maxLength(40)]],
    description: ['', [Validators.maxLength(5000)]],
    date_time: ['', []],
  });

  get taskName() {
    return this.formValidation.get('taskName');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get date_time() {
    return this.formValidation.get('date_time');
  }

  getValue() {
    this.taskModel.userId = this.userRouterService.getTokenId();
    this.taskModel.taskName = this.formValidation.value.taskName || '';
    if(this.formValidation.value.description){
      this.taskModel.description = this.formValidation.value.description || '';
    }
    if(this.formValidation.value.date_time){
      this.taskModel.date_time = this.formValidation.value.date_time || '';
    }
  }

  setValue() {
    this.formValidation.setValue({
      taskName: this.taskControllerService.Task.taskName,
      description: this.taskControllerService.Task.description || '',
      date_time: this.taskControllerService.Task.date_time || ''
    });
  }
  
  onSubmit(): void {
    if(!this.formValidation.invalid) {
      this.getValue();
      if(!this.taskControllerService.updateTaskId){
        this.taskControllerService.addTask(this.taskModel);
      }else {
        this.taskControllerService.updateTask(this.taskControllerService.updateTaskId, this.taskModel);
      }
      this.formValidation.reset();
    }else {
      this.popupService.formValidationAlert()
    }
  }

}
