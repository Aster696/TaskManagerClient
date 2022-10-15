import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidators } from 'src/shared/formValidators/formValidators';
import { pattern } from 'src/shared/lib/pattern';
import { routePath } from 'src/shared/lib/routePath';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  routeP = new routePath();
  pat = new pattern();
  formValidators = new formValidators();

  formValidation = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  }); 

  get userName() {
    return this.formValidation.get('userName');
  }

  get email() {
    return this.formValidation.get('email');
  }

  get subject() {
    return this.formValidation.get('subject');
  }

  get message() {
    return this.formValidation.get('message');
  }

  onSubmit(): void {

  }

}
