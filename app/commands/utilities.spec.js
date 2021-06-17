const expect = require('chai').expect;
const utilities = require('./utilities');

describe('utilities',() => {
  
  describe('getArgument',() => {

    it('should return the second word when asked for the first parameter',() => {
      // arrange

     //act 
     let firstArg = utilities.getArgument('command arguemenet',1);
    
     //assert
     expect(firstArg).to.eq('arguemenet');
    })

    it('should return the third word when asked for the second parameter', () => {
      let secondArg = utilities.getArgument('command arguemenet1 arguement2', 2);

      expect(secondArg).to.eq('arguement2');
    })

    it('should return the undefined when asked for the parameter that doesnot exists', () => {
      let thirdArg = utilities.getArgument('command arguemenet1 arguement2', 3);

      expect(thirdArg).to.be.undefined;
    })

    it('should return the undefined when asked for the parameter from a string with only 1 word', () => {
      let secondArg = utilities.getArgument('command', 2);

      expect(secondArg).to.be.undefined;
    })

  })

})