import { TestBed, inject } from '@angular/core/testing';

import { DisplayEmployeeService } from './display-employee.service';

describe('DisplayEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayEmployeeService]
    });
  });

  it('should be created', inject([DisplayEmployeeService], (service: DisplayEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
