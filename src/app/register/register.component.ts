import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../service/account.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: string;
  constructor(private accService: AccountService,
              private fb: FormBuilder) {
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: '',
    }, {validator: comparePassword});
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      console.log(value);
      this.accService.createAcc(value)
        .subscribe(next => {
          console.log('day la cai no gui ve' + next.msg);
          this.registerForm.reset({
            email: '',
            password: '',
          });
          this.message = next.msg;
        }, error => {
          this.message = error.error.msg;
        }) ;
    }
  }

}
