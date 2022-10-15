import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  formValidation = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(5000)]],
    date_time: ['', [Validators.required]],
  });

  get title() {
    return this.formValidation.get('title');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get date_time() {
    return this.formValidation.get('date_time');
  }

  onSubmit(): void {
    console.log(this.formValidation)
  }

}
