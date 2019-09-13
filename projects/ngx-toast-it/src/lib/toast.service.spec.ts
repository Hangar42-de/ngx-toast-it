import { TestBed } from '@angular/core/testing';

import { ToastItService } from './toast-it.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastItService = TestBed.get(ToastItService);
    expect(service).toBeTruthy();
  });
});
