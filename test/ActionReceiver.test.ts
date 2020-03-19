import {expect} from "chai"
import {ActionReceiver} from "../src/ActionReceiver"


describe('ActionReceiver actionNumber', function() {
    it('Must add number 2', function() {
      let ar = new ActionReceiver();
      ar.actionNumber(2);
      let result = ar.getStateNumber();
      expect(result).equal("2");
    }); 

    it('Must add number 12', function() {
      let ar = new ActionReceiver();
      ar.actionNumber(1);
      ar.actionNumber(2);
      let result = ar.getStateNumber();
      expect(result).equal("12");
    }); 

    it('Must add number with 23 digits (1 and 22 zeros)', function() {
      let ar = new ActionReceiver();
      ar.actionNumber(1);
      for (let index = 0; index < 22; index++) {
        ar.actionNumber(0);
      }
      let result = ar.getStateNumber();
      expect(result).equal("10000000000000000000000");
    }); 


  });