import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UpdateticketService } from './updateticket.service';
import { SharedService } from '../../shared/shared.service';

describe('updateticketService', () => {
  let service: UpdateticketService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ UpdateticketService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(UpdateticketService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });



  // gp update the test case
  it('should send a PUT request to the server', () => {
    const tickets = { 
      _id: '12dsadsa', 
      name: 'name 1'
      description: 'description 1'
      types: 'types 1'
      severity: 'severity 1'
    };
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Update(tickets).subscribe(response => {
      expect(response).toEqual(tickets);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/tickets?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(tickets);

    // Flush the mocked response
    req.flush(tickets);
  });














  
});