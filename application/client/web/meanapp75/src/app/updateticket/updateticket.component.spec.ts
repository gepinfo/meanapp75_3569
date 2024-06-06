import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateticketComponent } from './updateticket.component';
import { UpdateticketService } from './updateticket.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateticketComponent } from './updateticket.component';


describe('UpdateticketComponent', () => {
  let component: UpdateticketComponent;
  let fixture: ComponentFixture<UpdateticketComponent>;
  let service: UpdateticketService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ UpdateticketComponent ],
      providers: [ UpdateticketService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateticketComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UpdateticketService);
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
    spyOn(component, 'GetEntityById');
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.tickets.created_by).toEqual(mockEmail);

    expect(component.GetEntityById).toHaveBeenCalled();
  });
  


















  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData = [{ 
      _id: 1, 
      name: 'tickets 1',
      description: 'tickets 1',
      types: 'tickets 1',
      severity: 'tickets 1',
    }];
    spyOn(service, 'GetAllValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllValues).toHaveBeenCalled();
    expect(component.rowData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });










   //update test case files
  it('should clear Component tickets properties on successful update', () => {
    spyOn(service, 'Update').and.returnValue(of({}));

    component.Update();

    // Expect the tickets properties to be reset
    expect(component.tickets.name).toBe('');
    expect(component.tickets.description).toBe('');
    expect(component.tickets.types).toBe('');
    expect(component.tickets.severity).toBe('');
  });

  it('should log error on Update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Update').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });







  // get noun by id
  it('should update tickets when tickets Component service returns data', () => {
    const mockData = { 
      _id: '323', 
      name: 'name 1',
      description: 'description 1',
      types: 'types 1',
      severity: 'severity 1',
    };
    spyOn(service, 'GetEntityById').and.returnValue(of(mockData));

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(component.tickets).toEqual(mockData);
  });

  it('should log error when service throws an error', () => {
    const mockError = new Error('Mock error');
    spyOn(service, 'GetEntityById').and.returnValue(throwError(() => {
      return mockError;
    }));
    spyOn(console, 'log');

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(console.log).toHaveBeenCalledWith('Error', mockError);
  });







});