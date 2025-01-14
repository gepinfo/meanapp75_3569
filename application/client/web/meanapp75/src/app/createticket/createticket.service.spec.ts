import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateticketService } from './createticket.service';
import { SharedService } from '../../shared/shared.service';

describe('createticketService', () => {
  let service: CreateticketService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CreateticketService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(CreateticketService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const tickets = { 
    name: 'name 1'
    description: 'description 1'
    types: 'types 1'
    severity: 'severity 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Create(tickets).subscribe(response => {
      expect(response).toEqual(tickets)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/tickets?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(tickets);

    // Flush the mocked response
    req.flush(tickets);
  });









  
});
