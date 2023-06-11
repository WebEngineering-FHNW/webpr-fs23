
import { TestSuite } from "../util/test.js"

const crazySuite = TestSuite("crazy");

crazySuite.add("equals", assert => {

    const a = "0";
    const b =  0;
    const c = [];

    // assert.is( a == b, );
    // assert.is( b == c, );
    // assert.is( a == c, );
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

    // assert.is( coerce("0")            , );
    // assert.is( coerce(+"0")           , );
    // assert.is( coerce(Number("0"))    , );
    // assert.is( coerce(new Number("0")), );

});

crazySuite.add("refactor", assert => {

    // const x = ; // fill here
    //
    // const if_1 = x => (x == true) ? true : false ;
    // const if_2 = x =>  x          ? true : false ; // safe refactoring ???
    //
    // assert.is( if_1(x), if_2(x) );  // is this true for every x ???

});


crazySuite.add("other", assert => {

    // assert.is( "2" + 1,      );
    // assert.is( "2" - 1,      );
    // assert.is( "2" - - 1,    );
    // assert.is( 1 + 2 + "3",  );

    // assert.is( +true,        );
    // assert.is( +false,       );
    // assert.is( true + true,  );
    // assert.is( [] == [],     );
    // assert.is( [] == ![],    );
    // assert.is( +[],          );
    // assert.is( 2 == [2],     );
    // assert.is( [] + {},      );
    // assert.is( {} + [],      );

});

crazySuite.add("numbers", assert => {

    // assert.is(Number("-0") ,            );
    // assert.is(JSON.parse("-0") ,        );
    // assert.is(JSON.stringify(-0) ,      );
    // assert.is(String(-0) ,              );
    // assert.is(typeof null ,             );
    // assert.is(null instanceof Object ,  );
    // assert.is(typeof NaN ,              );
    //
    // assert.is(typeof (1/0) ,            );
    // assert.is(0.1 + 0.2 === 0.3 ,       );
    // assert.is(999999999999999999 ,      );
    // assert.is(Number.MAX_VALUE > 0 ,    );
    // assert.is(Number.MIN_VALUE < 0 ,    );
    //
    // assert.is(Math.min(1, 2, 3) < Math.max(1, 2, 3) ,  );
    // assert.is(Math.min() < Math.max(),  );

});

crazySuite.add("compare", assert => {

    // assert.is(1 < 2 < 3 ,            );
    // assert.is(3 > 2 > 1 ,            );

    // assert.is( {} == {} ,            );
    // assert.is( {} >  {} ,            );
    // assert.is( {} >= {} ,            );

});


crazySuite.run();
