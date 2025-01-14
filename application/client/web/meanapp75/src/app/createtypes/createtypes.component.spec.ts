import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetypesComponent } from './createtypes.component';
import { CreatetypesService } from './createtypes.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatetypesComponent } from './createtypes.component';


describe('CreatetypesComponent', () => {
  let component: CreatetypesComponent;
  let fixture: ComponentFixture<CreatetypesComponent>;
  let service: CreatetypesService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ CreatetypesComponent ],
      providers: [ CreatetypesService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetypesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CreatetypesService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.types.created_by).toEqual(mockEmail);

  });
  

  // Create test case file
  it('should call Create and reset  properties', () => {

    // Create a spy for the Create method of the service
    spyOn(service, 'Create').and.returnValue(of({}));
    
    // Set values for types properties
    component.types.name = 'Test name';
    component.types.description = 'Test description';


    // Call the Create method
    component.Create();


    // Expect the Create method to have been called with the tickets object
    expect(service.Create).toHaveBeenCalledWith(component.types);

    // Expect the types properties to be reset
    expect(component.types.name).toBe('');
    expect(component.types.description).toBe('');
  });
  it('should log error on update Create failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'Create').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});