import {expect} from "chai"
import {Calc} from "../src/Calc"


describe('Calc operations', function() {
    it('Must add 2 + 3 = 5', function() {
      let c = new Calc();
      let result = c.add(2, 3);
      expect(result).equal(5);
    }); 

    it('Must add 0 + 0 = 0', function() {
      let c = new Calc();
      let result = c.add(0, 0);
      expect(result).equal(0);
    }); 

    it('Must add 1 + 0 = 1', function() {
      let c = new Calc();
      let result = c.add(1, 0);
      expect(result).equal(1);
    }); 
  });