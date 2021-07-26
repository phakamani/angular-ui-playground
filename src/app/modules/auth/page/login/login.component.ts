import { AuthService } from './../../../../core/service/auth.service';
import { User } from './../../../../data/types/user.model';
import { Response } from './../../../../data/types/response.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    if(this.route.snapshot.paramMap.get('isLoggedOut')) {
      alert('User is logged out');
      localStorage.removeItem('user');
    }
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

    this.authService.login(user).subscribe((res) => {
      this.response = res;
    }, error => {
      this.response = error;
    });
  }
}
