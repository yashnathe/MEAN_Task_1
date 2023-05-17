import { TestBed } from '@angular/core/testing';

import { MarvellousService } from './marvellous.service';

describe('MarvellousService', () => {
  let service: MarvellousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvellousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
