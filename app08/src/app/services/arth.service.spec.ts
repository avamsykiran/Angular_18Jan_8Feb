import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#sum',()=>{
    it('should return 10 given 5 and 5',()=>{
      expect(service.sum(5,5)).toBe(10);
    });
    it('should return 5 given 5 and 0',()=>{
      expect(service.sum(5,0)).toBe(5);
    });
    it('should return 5 given 0 and 5',()=>{
      expect(service.sum(0,5)).toBe(5);
    });
  });
  
  describe('#product',()=>{
    it('should return 25 given 5 and 5',()=>{
      expect(service.product(5,5)).toBe(25);
    });
    it('should return 5 given 5 and 1',()=>{
      expect(service.product(5,1)).toBe(5);
    });
    it('should return 5 given 1 and 5',()=>{
      expect(service.product(1,5)).toBe(5);
    });
  });
});
