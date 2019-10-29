/*********************************
*   function quick walkthrough   *
*********************************/

console.log(testFun());             ///log anywhere before or after function declaration

function testFun(){                                                                              ///fun definition
    return 10-2;
}

console.log(testFun());             ///log anywhere before or after function declaration

console.log(helloFun());            ////(throws error->script.js:12 Uncaught ReferenceError: Cannot access 'helloFun' before initialization)function call not allowed before function expression

const helloFun = function(){                                                                       ///fun expression
    return 10-5;
};

console.log(helloFun());        ///function call after function expression only


/*********************************
*   variable quick walkthrough   *
*********************************/

console.log(helloVar);    //undefined
var helloVar = 'Hiii';
console.log(helloVar);    //sring hii


                        ///imagine if we call some variable that never used
console.log(helloStranger);  //Uncaught ReferenceError: helloStranger is not defined at script.js:29

/*****************
*   scope test   *
******************/

var testVar = "I'm Global";

function heyFun(){
    console.log(testVar);              //undefined
    var testVar = "I'm heyFun";
    console.log(testVar);              //I'm heyFun
}
heyFun();
console.log(testVar);                   //I'm Global

/************************
*   global scope test1  *
************************/

var a = "I'm in global";            ///global scope

function first(){
    var b = "I'm in first";         /// first function scope
    second();
    function second(){          
        var c = "I'm in second";        ///second function scope
        console.log(a+', '+b+', '+c);   ///I'm in global, I'm in first, I'm in second
    }
}
first();                
                            ///we cannot access functions scope outside an function
console.log(a+', '+b+', '+c);   //script.js:62 Uncaught ReferenceError: b is not defined

/************************
*   global scope test2  *
************************/

var a = 5;
function first(){
    var a = 10;
    second();
    function second(){
        var b = 12;
        third();
    }
}
function third(){
    console.log(a+b+c);       ///script.js:78 Uncaught ReferenceError: a is not defined
                            ///because a and b is not defined in global but third function scope is in global

    console.log(a);      /// logs a because it's scope in global
}
first();
/************************
*       this keyword    *
************************/

console.log(this);    ///in global this keyword is a window
testun();
function testun(){
    var test = 4-2;
    console.log(this);      ///returns window normal function
}

var mars = {
    name : 'Marees',
    age : 24,
    birthYear : 1995,
    testThis : function(){console.log(this);}
};

mars.testThis();  ////logs object

/******************************************
*    borrow function from other object    *
*******************************************/

var mars = {
    name : 'Marees',
    birthYear : 1995,
    qualification : 'Mca',
    calculateAge : function(){
        this.age = 2019-this.birthYear;
    }
    
};
var yuv = {
    name : 'yuvaraj',
    birthYear : 1989,
    qualification : 'B.Tech',
}
mars.calculateAge();
yuv.calculateAge = mars.calculateAge;
yuv.calculateAge();
console.log(mars);
console.log(yuv);
