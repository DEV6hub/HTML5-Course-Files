
        var x,
        y,
        obj1,
        obj2,
        testVar1,
        testVar2;

        x = 10;
        y = 10;
        console.log('x==y: ' + (x == y));
        console.log('x===y: ' + (x === y));

        // Block 1
      x = y;
      console.log('x==y: ' + (x==y));
      console.log('x===y: ' + (x===y));

        // Block 2
      obj1 = {
        property1:'hello'
      };
      obj2 = {
        property1:'hello'
      };
      console.log('obj1==obj2: ' + (obj1==obj2));
      console.log('obj1===obj2: ' + (obj1===obj2));
      obj2 = obj1;
      console.log('obj1==obj2: ' + (obj1==obj2));
      console.log('obj1===obj2: ' + (obj1===obj2));

        // Block 3
//      var testVar1 = "1";
//      var testVar2 = 1;
//      console.log('testVar1==testVar2: ' + (testVar1==testVar2));
//      console.log('testVar1===testVar2: ' + (testVar1===testVar2));

        // Block 4
//      console.log('null==undefined: ' + (null==undefined));
//      console.log('null===undefined: ' + (null===undefined));

        // Block 5
//      console.log('0==false: ' + (0==false));
//      console.log('0===false: ' + (0===false));

        // Block 6
//      console.log('12==true: ' + (12==true));
//      console.log('12===true: ' + (12===true));