import { SUCCESSFUL_RESPONSE } from './../../../server/dbData';
import { User } from './../../model/user.model';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
fdescribe('LoginService', () => {
  let service: LoginService,
    httpTestingController: HttpTestingController,
    loginUrl = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
    loginUrl = 'http://localhost:5000/login';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should allow successful login', () => {
    const user: User = {
      userName: "userName",
      password: "password"
    };
    service.login(user).subscribe(res => {
      expect(res).toBeTruthy(); // blogs should not be null or undefined
      expect(res).toEqual(SUCCESSFUL_RESPONSE);
    })

    const req = httpTestingController.expectOne(loginUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(SUCCESSFUL_RESPONSE)
  });

  it('should check for user name and password mismatch', ()  => {
    const user :User = {
      userName: "invaliduser",
      password: "password"
    }

    service.login(user).subscribe(
      () => {
        fail("Login call should have failed");
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404);
      }
    )

    const errorResponse = {
      error: {
        status: 'error',
        error: 'No matching user name and password found'
      },
      status: 404,
      statusText: 'Login failed'
    };
    const req = httpTestingController.expectOne(loginUrl);
    expect(req.request.method).toEqual('POST');
    req.flush('Login failed', errorResponse)
  })

  afterEach(() => {
    httpTestingController.verify();
  })
})
