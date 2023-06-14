
import { TestSuite } from "../util/test.js"

const crazySuite = TestSuite("crazy");

crazySuite.add("equals", assert => {

    const a = "0";
    const b =  0;
    const c = [];

    assert.is( a == b, true);
    assert.is( b == c, true);
    assert.is( a == c, false);
});

crazySuite.add("false", assert => {

    assert.isTrue( ! false     );
    assert.isTrue( ! null      );
    assert.isTrue( ! undefined );
    assert.isTrue( ! ""        );
    assert.isTrue( ! 0         );
    assert.isTrue( ! NaN       );
});

crazySuite.add("coercion", assert => {

    assert.isTrue( "1"   == 1     );
    assert.isTrue( +"2"  == 2     );
    assert.isTrue( !"0"  == false );
    assert.isTrue( !!"0" == true  );
    assert.is  ( Number("0"), 0 );
});

crazySuite.add("object", assert => {

    const coerce = x => x ? true : false ;

    assert.is( coerce("0")            , true);
    assert.is( coerce(+"0")           , false);
    assert.is( coerce(Number("0"))    , false);
    assert.is( coerce(new Number("0")), true);

});

crazySuite.add("refactor", assert => {

    // const x = "0"; // fill here
    //
    // const if_1 = x => (x == true) ? true : false ;
    // const if_2 = x =>  x          ? true : false ; // safe refactoring ???
    //
    // assert.is( if_1(x), if_2(x) );  // is this true for every x ???

});


crazySuite.add("other", assert => {

    assert.is( "2" + 1,      "21");
    assert.is( 1 + "2",      "12");
    assert.is(   + "2",      2   );
    assert.is( "2" - 1,      1);
    assert.is( "2" - - 1,    3);
    assert.is( 1 + 2 + "3",  "33");

    assert.is( +true,        1);
    assert.is( +false,       0);
    assert.is( true + true,  2);
    assert.is( [] == [],     false);
    assert.is( [] == ![],    true);
    assert.is( +[],          0);
    assert.is( 2 == [2],     true);
    assert.is( [] + {},      "" + "[object Object]");
    assert.is( {} + [],      "[object Object]"); // 0 in console

});

crazySuite.add("numbers", assert => {

    assert.is(Number("-0") ,            0);
    assert.is(JSON.parse("-0") ,        0);
    assert.is(JSON.stringify(-0) ,      "0");
    assert.is(String(-0) ,              "0");
    assert.is(typeof null ,             "object");
    assert.is(null instanceof Object ,  false);
    assert.is(typeof NaN ,              "number");

    assert.is(typeof (1/0) ,            "number");
    assert.is(0.1 + 0.2 === 0.3 ,       false);
    assert.is(999999999999999999 ,      999999999999999999 + 1);
    assert.is(Number.MAX_VALUE > 0 ,    true);
    assert.is(Number.MIN_VALUE < 0 ,    false);

    assert.is(Math.min(1, 2, 3) < Math.max(1, 2, 3) ,  true);
    assert.is(Math.min() <= Math.max(),  false);

});

crazySuite.add("compare", assert => {

    assert.is(1 < 2 < 3 ,            true);
    assert.is(3 > 2 > 1 ,            false);

    assert.is( {} == {} ,            false);
    assert.is( {} >  {} ,            false);
    assert.is( {} >= {} ,            true);

});


crazySuite.run();
