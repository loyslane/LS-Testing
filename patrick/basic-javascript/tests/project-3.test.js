const assert = require('chai').assert;
const funcs = require('../src/project-3');

// To handle invokeMethod
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {

  describe('makeCat', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.isFunction(makeCat);
    });
    it('should return an `Object`', () => {
      assert.isObject(makeCat('Eddie Spagetti', 4))
    });
    it('new cat Object includes `{name: \'Eddie Spagetti\'}`', () => {
      assert.include(makeCat('Eddie Spagetti', 4),
        {name: 'Eddie Spagetti'});
    });
    it('new cat Object includes `{age: 4}`', () => {
      assert.include(makeCat('Eddie Spagetti', 4), {age: 4});
      assert.propertyVal(makeCat('Eddie Spagetti', 4), 'age', 4);
    });
    it('new cat Object includes `[Function: meow]]`', () => {
      assert.property(makeCat('nyan', 2), 'meow');
      assert.isFunction(makeCat('nyan', 2).meow);
      // assert.propertyVal(makeCat('nyan', 2), 'meow', Function); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', [Function: meow]); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', 'Function'); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', [Function: Function]); // <~~~~ ????????????????????/

    });
  });

  describe('addProperty', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      assert.isFunction(addProperty);
    });
    it('should return an `Object`', () => {
      assert.isObject(addProperty({}, 1));
    });
    it('should be able to have properties added to it', () => {
      assert.isExtensible(addProperty(new Object, 1));
      assert.isExtensible(addProperty(new Array, 1));
    });
    it('should return the added property', () => {
      assert.property(addProperty({}, 1), 1);
      assert.propertyVal(addProperty({}, 1), 1, null);
      // console.log(addProperty({}, 1));
      // console.log('\n\n\n');
    });
  });

  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      assert.isFunction(invokeMethod);
    });
    it.skip('should invoke the method', () => { // SKIPPING FOR NOW
      const arr = [ 1, 2, 3, 4 ];
      const method = 'length';
      assert.operator(arr, '===', invokeMethod(arr, method))
    });
    // it.skip('should return a `VALUE`', () => {
    //   assert.isVALUE(invokeMethod(PARAMETERS), VALUE)
    // });
  });

  describe('NAME', () => {
    const NAME = funcs.NAME;
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    const NAME = funcs.NAME;
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

});


// // TEMPLATE
// describe('Project-# Functions', () => {
//
//   describe('NAME', () => {
//     const NAME = funcs.NAME;
//     it.skip('should be a function', () => {
//       assert.isFunction(NAME);
//     });
//     it.skip('should return a `TYPE`', () => {
//       assert.isTYPE(NAME(PARAMETERS), TYPE)
//     });
//     it.skip('should return a `VALUE`', () => {
//       assert.isVALUE(NAME(PARAMETERS), VALUE)
//     });
//   });
//
// });
