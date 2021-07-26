import { SUCCESSFUL_RESPONSE } from './../../../../server/dbData';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/data/types/user.model';
fdescribe('AuthService', () => {
  let service: AuthService,
    httpTestingController: HttpTestingController,
    loginUrl = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
    loginUrl = 'https://angular-playground-23023-default-rtdb.firebaseio.com/register.json';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow successful login', () => {
    const user: User = {
      userName: "userName",
      password: "password"

    };
    service.login(user).subscribe(res => {
      expect(res).toBeTruthy(); // blogs should not be null or undefined
      expect(res.status).toEqual('success');
    })

    const req = httpTestingController.expectOne(loginUrl);
    expect(req.request.method).toEqual('GET');
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
    expect(req.request.method).toEqual('GET');
    req.flush('Login failed', errorResponse)
  })

  afterEach(() => {
    httpTestingController.verify();
  })
})

