import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  error = false;
  errorMessage = '';
  serviceError  = new Subject<string>();
  success = false;
  edit = false;
  fetchData;
  displayedColumns = ['Name', 'Surname', 'Email', 'Number', 'Actions']

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.setupForm();
    this.fetchPosts();
  }

  setupForm(){
    this.registerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'number': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'retypePassword': new FormControl('', Validators.required), 
    })
  }

  onSubmit(){
    this.error = false;

    if(this.registerForm.valid){
      if(this.registerForm.controls['password'].value === this.registerForm.controls['retypePassword'].value){
        this.createAndStorePost();
        setTimeout(()=> {
        this.fetchPosts();
        },1000)
      } else {
        this.errorMessage = 'Passwords do not match';
        this.error = true;
      }
    }
}

createAndStorePost() {
  this.http.post('https://angular-playground-23023-default-rtdb.firebaseio.com/register.json', this.registerForm.value)
    .subscribe(
      responseData => {
        console.log(responseData);
        this.success = true;
      },
      error => {
        this.serviceError.next(error.message);
      }
    );
}

fetchPosts() {
   this.http.get('https://angular-playground-23023-default-rtdb.firebaseio.com/register.json')
    .pipe(map(responseData => {
        const postsArray= [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    ).subscribe(
      response => {
        console.log(response);
        this.fetchData = response;
      }, 
      error => {

      }
    )
}

updatePosts() {

}

deleteAll() {
   this.http.delete('https://angular-playground-23023-default-rtdb.firebaseio.com/register.json')
    .subscribe(
      responseData => {
        this.fetchPosts();
      },
      error => {
        this.serviceError.next(error.message);
      }
    );
}

onEdit(id){
  // this.edit = true;
  // this.registerForm.controls['name'].setValue(this.fetchData.name);
  for(var i =0; i < this.fetchData.length; i++){
    if(this.fetchData[i].id === id){
      this.registerForm.patchValue({
    name: this.fetchData[i].name,
    surname: this.fetchData[i].surname,
    email: this.fetchData[i].email,
    number: this.fetchData[i].number,
    password: this.fetchData[i].password,
    retypePassword: this.fetchData[i].retypePassword
  });
}}

}

onDelete(id){
  this.http.delete('https://angular-playground-23023-default-rtdb.firebaseio.com/register/'+ id +'.json')
    .subscribe(
      responseData => {
        this.fetchPosts();
      },
      error => {
        this.serviceError.next(error.message);
      }
    );
}

}
