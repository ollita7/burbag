import { TestBed, inject } from '@angular/core/testing';

import { FakeDataService } from './fake-data.service.service';

describe('FakeData.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeDataService]
    });
  });

  it('should be created', inject([FakeDataService], (service: FakeDataService) => {
    expect(service).toBeTruthy();
  }));
});
