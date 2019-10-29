/*********************************
 *   fuction constructor   *
 *********************************/
//creating objects
//usecase : before we use like this to create an obeject what if we want to create more object like this
var mars = {
    name: 'marees',
    birthYear: '1995',
    job: 'Developer'
};



var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

var mars = new Person('Marees', 1995, 'Developer');
var yuv = new Person('Yuvaraj', 1989, 'Developer');
var ela = new Person('Elavarasan', 1987, 'Supervisor');

console.log(mars);
console.log(yuv);
console.log(ela);

/*output
script.js:21 PersonbirthYear: 1995job: "Developer"name: "Marees"__proto__: Object
script.js:22 PersonbirthYear: 1989job: "Developer"name: "Yuvaraj"__proto__: Object
script.js:23 PersonbirthYear: 1987job: "Supervisor"name: "Elavarasan"__proto__: Objectconstructor: ƒ (name, birthYear, job)__proto__: Object
*/


////prototype
Person.prototype.calculateAge = function () {
    return 2019 - this.birthYear;
}
Person.prototype.lastName = 'A';

console.log(mars.calculateAge());
console.log(yuv.calculateAge());
console.log(ela.calculateAge());
console.log(mars.lastName);
console.log(yuv.lastName);
console.log(ela.lastName);



//creating objects 2
//////Object.create

//myprototype function
var myProto = function () {
    return 2019 - this.birthYear;
};

///create object with proto function
var mars = Object.create(myProto);
mars.firstname = 'Marees';
mars.birthYear = 1995;
mars.job = 'Developer';
console.log(mars);

// create Object without prototype function
var yuv = Object.create(myProto);
yuv.firstname = 'Yuvaraj';
yuv.birthYear = 1989;
yuv.job = 'Developer';
console.log(yuv);

//other ways to create
var ela = Object.create(myProto, {
    name: {
        value: 'Elavarasan'
    },
    birthYear: {
        value: 1987
    },
    job: {
        value: 'Supervisor'
    }
});

console.log(ela);


/*********************************
 *   primitive vs objects   *
 *********************************/


//primitive
var a = 10;
var b = a;
var a = 2;
console.log('a = ' + a + ' b = ' + b);

//objects
var mars = {
    name: 'yuvaraj',
    age: '30'
}
var yuv = mars;
mars.age = 24;
mars.name = 'Marees';
console.log(mars);
console.log(yuv); ///value also changed for yuv
/*output
script.js:86 a = 2 b = 10
script.js:96 {name: "Marees", age: 24}age: 24name: "Marees"__proto__: Object
script.js:97 {name: "Marees", age: 24}age: 24name: "Marees"__proto__: Object
*/

//functions

function myChanger(prim, obj) {
    prim = 14;
    obj.display = "5.2in IPS Lcd";
}
var myNum = 10;
var obj = {
    brand: "Moto",
    model: "G5 Plus",
    display: "5.2in",
    resolution: "1920*1080",
    processor: "snapdragon 625",
    battery: "3000mah",
    os: "Android 9.0"
};
console.log(obj);
console.log(myNum);

myChanger(myNum, obj);
console.log(obj);
console.log(myNum);


                                            /*********************************
                                            *  Firs class functions  *
                                            *********************************/

/*********************************
 *   passing function as arguments   *
 *********************************/


var birthList = [1990, 1995, 1989, 2015, 2000, 1993, 1998];

function getMyAgeList(arr, fun) {
    var ageList = [];
    for (var i = 0; i < arr.length; i++) {
        ageList[i] = fun(arr[i]);
        //(or)
        //ageList.push(fun(arr[i]));
    }
    return ageList;
}

function calcAge(bornYear) {
    return 2019 - bornYear;
}
var ageList = getMyAgeList(birthList, calcAge);
var adultList = getMyAgeList(ageList, isAdult);
console.log(ageList);
console.log(adultList);
console.log(getMyAgeList(ageList, heartRate));



function isAdult(age) {
    return age >= 18;
}

function heartRate(age) {
    ////dummy data
    if (age >= 18) {
        return Math.round(206.9 - (0.67 * age));
    }
    return Math.round(156.9 - (0.67 * age));
}

/*********************************
 *  function returning functions  *
 *********************************/

function interviewQuestions(job) {
    if (job === 'Designer') {
        return function (name) {
            console.log(name + ' Can you explain what is is UX is?');
        }
    } else if (job === 'Developer') {
        return function (name) {
            console.log(name + ' How will you connect to wireless device via bluetooth?');
        }
    } else if (job === 'Teacher') {
        return function (name) {
            console.log(name + ' What subject would you teach?');
        }
    }
}
var teacherQuestion = interviewQuestions('Teacher');
var designerQuestion = interviewQuestions('Designer');
var developerQuestion = interviewQuestions('Developer');

teacherQuestion('Marees');

interviewQuestions('Developer')('Marees');

/*
console:
script.js:188 Marees What subject would you teach?
script.js:184 Marees How will you connect to wireless device via bluetooth?
*/

/*********************************
 *             IIFE                *
 *********************************/

//Immediately Invoked Function Expression
// use it for init
(function () {
    let score = Math.random() * 10;
    console.log(score > 5);
})();

//passing arguments
(function (name) {
    console.log(name);
})('Marees');

/*********************************
 *             Closures           *
 *********************************/

function retirement(retireAge) {
    let a = ' years left until your retirement.'
    return function (birthYear) { ////closure read notes.txt
        let age = 2019 - birthYear;
        console.log((retireAge - age) + a);
    }
}
retirement(55)(1995);
retirement(60)(1989);

/*********************************
 *        Bind call & apply       *
 *********************************/

var mars = {
    name: 'Marees',
    age: '24',
    job: 'Teacher',
    presentation: function (style, timeODay) {
        if (style === 'formal') {
            console.log('Good ' + timeODay + ', Ladies and Gentleman! I\'m ' + this.name + 'I\'m ' + this.age + 'years old, ' + ' I\'m a ' + this.job);
        } else if (style === 'casual') {
            console.log('Howdy! I\'m ' + this.name + ' I\'m ' + this.age + 'years old, ' + ' I\'m a ' + this.job + '. Have a nice ' + timeODay + '.');
        }
    }
};

var yuv = {
    name: 'Yuvaraj',
    age: '30',
    job: 'Developer'
}

mars.presentation('formal', 'Morning');
/////call
mars.presentation.call(yuv, 'casual', 'Afternoon');

///bind
var marsCasual = mars.presentation.bind(mars, 'casual');
marsCasual('Morning');
marsCasual('Night');

var yuvFormal = mars.presentation.bind(yuv, 'formal');
yuvFormal('Morning');


var birthList = [1990, 1995, 1989, 2015, 2000, 1993, 1998];

function getMyAgeList(arr, fun) {
    var ageList = [];
    for (var i = 0; i < arr.length; i++) {
        ageList[i] = fun(arr[i]);
        //(or)
        //ageList.push(fun(arr[i]));
    }
    return ageList;
}

function calcAge(bornYear) {
    return 2019 - bornYear;
}
var ageList = getMyAgeList(birthList, calcAge); //calls line 277 array and calcage function passed for array length iteration continues each iteration returns the age after the iteration completes return complete array list of agelist
var adultList = getMyAgeList(ageList, isAdult);
//console.log(ageList);
//console.log(adultList);




function isAdult(age, limit) {
    return age >= limit;
}

var fullIndia = getMyAgeList(ageList, isAdult.bind(this, 21));
console.log(ageList);
console.log(fullIndia);
