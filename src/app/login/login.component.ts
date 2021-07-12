import { User } from './../../model/user.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  response: Response;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm () {
    this.loginForm = this.formBuilder.group({
      userName: this.formBuilder.control(''),
      password: this.formBuilder.control(
        ''
      )
    })
  }

  loginValidator(control: FormControl) {
    return null
  }

  onSubmit() {
    const user: User = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value
    };

    this.loginService.login(user).subscribe((res) => {
      if (res.status === 404) {
        this.response = res.error;
      }
      this.response = res;
    }, error => {
      this.response = error.error;
    });
  }
}
