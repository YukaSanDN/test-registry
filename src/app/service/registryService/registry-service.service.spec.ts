import { TestBed } from '@angular/core/testing';

import { RegistryServiceService } from './registry-service.service';

describe('RegistryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistryServiceService = TestBed.get(RegistryServiceService);
    expect(service).toBeTruthy();
  });
});
