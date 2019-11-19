/****************
 * let & const  *
****************/
/*
// ES5
var name5 = 'Marees';
var age5 = 24;
name5 = 'Mareeswaran A';
console.log(name5);

// ES6
const name6 = 'Marees';
let age6 = 25;
name6 = 'Mareeswaran A';
console.log(name6);

/* cannot able to mutate const value */

/*/

/*
// ES5
function driverLicense5(passedTest){
    if(passedTest){
        var firstName = 'Marees';
        var vehicleType = 'LMV';
        console.log(firstName + 'is allowed to drive ' + vehicleType + ' vehicles');
    }
}
driverLicense5(true);
// ES6
function driverLicense6(passedTest){
    if(passedTest){
        let firstName = 'Marees';
        let vehicleType = 'LMV';
       
    }
    console.log(firstName + 'is allowed to drive ' + vehicleType + ' vehicles');
}
driverLicense6(true);

/*
 error at line 40 firstName is not defined let variable scope is only available inside a if method only
*/
/*
let i = 23;
for(let i=0;i<5;i++){
    console.log(i);
}

console.log(i);


/*******************
 * Blocks & IIFEs  *
********************/


/********************
 *     Strings     *
*********************/
/*

let firstName = 'Marees';
let lastName = 'A';


function calcAge(year){
    return 2019 - year;
}

//ES5
console.log('This is ' + firstName + ' ' +lastName + '. And i\'m ' + calcAge(1995) + ' years old.');


//ES6

console.log(`This is ${firstName} ${lastName}. And i'm ${calcAge(1995)} years old.`);

let name = `${firstName} ${lastName}`;
console.log(name.startsWith('M'));
console.log(name.includes('ar'));
console.log(name.includes('es'));

console.log(`${firstName} `.repeat(5));


/******************
 * Arrow function *
 ******************/
/*
 //ES5
 const bornYears = [1989, 1995, 1986, 2000];

 var age5 = bornYears.map(function(cur){
    return 2019 - cur;
 });

 console.log(age5);

 //ES6
 let age6 = bornYears.map((cur)=>{
    return 2019 - cur;
 });

 console.log(age6);

 age6 = bornYears.map((cur, index) => {
     return `index ${index + 1} age is ${cur}` 
 });

 console.log(age6);
 

 /*********************
  *  Arrow function 2 *
  ********************/
 /*
 const box5 = {
     color : 'green',
     position : 1,                     
     clickMe : function(){
         document.querySelector('.green').addEventListener('click',function(){
                var str = 'This is box number ' + this.position + 'and this is ' + this.color + 'color';
                alert(str);
         });
     },
     clickMeTwo : function(){
        var test = this;
        document.querySelector('.blue').addEventListener('click',function(){
               var str = 'This is box number ' + test.position + 'and this is ' + test.color + 'color';
               alert(str);
        });
     }
 };

 box5.clickMe();

 /*output:
 This is box number undefinedand this is undefinedcolor

            after box created override event lister this means window(entire body)
            so we want to access inside object store this to the variable before event listener overrides
 */
/*

box5.clickMeTwo();
/*output:
This is box number 1and this is greencolor
*/



 /*********************
  *  Destructuring *
  ********************/
/*
  // ES5
  var myArr = ['Marees', 24];
  var name = myArr[0];
  var age = myArr[1];
  var myObj = {
    firstName : 'Marees',
    lastName : 'A',
    bornYear : 1995
  };
  var a = myObj.firstName;
  var b = myObj.lastName;
  var c = myObj.bornYear;


  //ES6
  const [firstWord, secondWord] = ['Hello', 'World'];
  const [name6, age6] = myArr;

  const {firstName, lastName, bornYear} = myObj;
                // if u want to prevent key name for variable then
    const {firstName : myName, lastName : myInitial, bornYear : myBirth} = myObj;


  console.log(`${firstName}      ${lastName}  ${bornYear} `);
  console.log(`${name6}      ${age6}  `);
  console.log(`${firstWord}      ${secondWord}  `);
  console.log(`${myName}      ${myInitial}  ${myBirth} `);



  let calcAgeRetirement = (year)=>{
    const age = new Date().getFullYear() - year;
    return[age, 65 - age];
  }

  const [myAge, retirement] = calcAgeRetirement(1995);
  console.log(age);
  console.log(retirement);


   /*********************
  *     Arrays         *
  ********************/
/*
  //ES5
  const boxes = document.querySelectorAll('.box');

  var boxesArr5 = Array.prototype.slice.call(boxes);
  boxesArr5.forEach(function(cur){
      cur.style.backgroundColor = 'green';
  });


  //ES6
  const boxesArr6 = Array.from(boxes);
  boxesArr6.forEach((cur) => {
      cur.style.backgroundColor = 'dodgerblue';
  });

  /*
  Even simpler
  Array.from(boxes).forEach((cur) => {
      cur.style.backgroundColor = 'green';
  });
  */
/*
  //ES5
  for(var i=0; i<boxesArr5.length; i++){
      if(boxesArr5[i].className === 'box blue'){
          continue;
      }

      boxesArr5[i].textContent = 'I Changed to blue';
  }

  //ES6
  for(const cur of boxesArr5){
      if(cur.className === 'box blue'){             ////if dont know exact class name or select all blue class use cur.className.inclues('blue')
          continue;
      }

      cur.textContent = 'I Changed to blue';

  }

  //ES5
  var ages = [12, 10, 7, 9, 21, 15];

  var adult = ages.map(function(cur){
    return cur > 18;
  });

  console.log(adult);
  console.log(adult.indexOf(true));
  console.log(ages[adult.indexOf(true)]);

  //ES6
  console.log(ages.findIndex((cur)=>{
      return cur > 18;
  }));

  console.log(ages.find((cur)=>{
      return cur > 18;
  }));

     /*********************
  *     Spread Operator  *
  ********************/
/*
  function addFourAges(a, b, c, d){
    return a+b+c+d;
  }
  console.log(addFourAges(12, 14, 15, 7));

  // if we want to pass the array instead of individiual variables

  // ES5
  var ages = [23, 12, 24, 30, 32];

  var sum5 = addFourAges.apply(null,ages);
  console.log(sum5);
  //ES6
  var sum6 = addFourAges(...ages);
  console.log(sum6);


  const coreSubjects = ['OOAD', 'Programming in java', 'Database', 'LAMP Stack'];
  const languageSubjects = ['Tamil', 'English'];
  const otherSubjects = ['Maths', 'Physics', 'Chemistry', 'Biology'];

  const allSubjects = [...coreSubjects, 'some newly added subject', ...languageSubjects, ...otherSubjects];

  console.log(allSubjects);


  //change all the text color to purple

  const h = document.querySelector('h1');
  const allBoxes = document.querySelectorAll('.box');
  const all = [h, ...allBoxes];

  Array.from(all).forEach((cur)=>{
      cur.style.color = 'purple';
  });

     /*********************
  *     Rest Parameters  *
  ********************/
/*
  //ES5
  function isFullAge5(){
      //console.log(arguments);
      var argsArr = Array.prototype.slice.call(arguments);

      argsArr.forEach(function (cur){
         
          console.log((2019 - cur) > 18);
      });
  }

  //isFullAge5(1995, 1989, 1987);
  //isFullAge5(2012, 1992);

  //ES6

  const isFullAfge6 = (limit, ...years)=>{
    years.forEach((cur)=>{
        console.log((2019 - cur) > limit)
    });
  };

  isFullAfge6(18, 1995, 1989, 1987, 2012);      //18->limit    others are array

      /*********************
  *     default  Parameters  *
  ********************/
/*
  //ES5
  function addamsFamily(){

    this.firstName = firstName;
    this.lastname = lastname;
    this.bornYear = bornYear;
    this.nationality = nationality;

  }

  var addam = new addamsFamily('Gomez',);

    /*********************
  *    Maps  *
  ********************/
/*
  const question = new Map();
  question.set('question', 'What is the official name of the latest major Javascript version');
  question.set(1, 'ES5');
  question.set(2, 'ES6');
  question.set(3, 'ES2015');
  question.set(4, 'ES2019');
  question.set('correct', 3);
  question.set(true, 'Correct answer :D');
  question.set(false, 'Wrong, please try again!');


  console.log(question.get('question'));
 // console.log(question.size);

  if(question.has(4)){
     // question.delete(4);
  }
 // console.log(question);

  // we can also itereate all element inside a map which cannot be done in object
  question.forEach((value, key)=>{
    //console.log(`${key} is set to the value of ${value}`);
    if(typeof(key) === 'number'){
        console.log(`Option ${key} : ${value}`);
    }
  });

  const ans = parseInt(prompt('Choose the crct answer'));
  console.log(question.get(ans === question.get('correct')));
    


    /*********************
  *    Class  *
  ********************/

  //ES5
/*
  var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  Person5.prototype.calcAge = ()=>{
      var age = new Date().getFullYear - this.yearOfBirth;
      console.log(age);
  }

  var marees5 = new Person5('Marees', 1995, 'Mobile Application Developer');

  //ES6

  class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log(`Hello I'm static`);
    }
  }

  const marees6 = new Person6('Marees A', 1995, 'Mobile Application Developer');

  Person6.greeting();

      /*********************
  *    Classes with subclasses  *
  ********************/
/*
  //ES6
  class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log(`Hello I'm static`);
    }
  }
class Athelete extends Person6{
    constructor(name, yearOfBirth, job, game, medal){
        super(name, yearOfBirth, job);
        this.game = game;
        this.medal = medal;
    }

    wonMedal(){
        console.log(`${this.name} won a medal`);
        this.medal++;
        console.log(`${this.name}'s updated medal are ${this.medal}`);
    }
}
class VideoGamer extends Person6{
    constructor(name, yearOfBirth, job, platform, ...game){
        super(name, yearOfBirth, job);
        this.game = game;
        this.platform = platform;
    }

    completedGames(){
        this.game.map((currentGame)=>{
            console.log(`${currentGame}`)
        });
    }
}

const marees = new VideoGamer('Marees', 1995, 'Mobile application developer', 'PC', 'Gta Vc', 'Gta 3', 'Gta Sa', 'Gta 4', 'Gta 5', 'Elder Scrolls Skyrim V', 'Saints row 2,3,4','Prototype 1,2');
marees.calcAge();
marees.completedGames();

const tyranno = new Athelete('Tyranno', 1990, 'Pool Coach', 'Swimmer', 6);
tyranno.calcAge();
tyranno.wonMedal();

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
/*TO-DO
    *two town elements
    * 3 parks 4 streets    -> name, buildYear
    * park -> all park tree density
    * park -> all park average age
    * park -> name which has more than 1000 trees
    * street -> total length of street
    * street -> average length of street
    * strret -. classify all streets based on size tiny/small/normal/big/huge
*/


class MyTown{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

}
class MyPark extends MyTown{
    constructor(name, buildYear, treeCount,parkArea){
        super(name, buildYear);
        this.treeCount = treeCount;
        this.parkArea = parkArea;
        this.ageOld = this.calculateAgeOld();
    }

    calculateTreeDensity(){
        return this.treeCount/this.parkArea;
    }

    calculateAgeOld(){
        return new Date().getFullYear() - this.buildYear;
    }
}

class MyStreet extends MyTown{
    constructor(name, buildYear, streetLength, size = 2){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    getStreetSizes(){
        let sizeChart = new Map();
        sizeChart.set(1, 'Small');
        sizeChart.set(2, 'Normal');
        sizeChart.set(3, 'big');
        sizeChart.set(4, 'huge');
        console.log (this.size);
        return sizeChart.get(this.size);
    }

}

const parks = [
    new MyPark('Omr park',1967,215,0.2),
    new MyPark('Kovalam park',1994,3541,2.9),
    new MyPark('Triplicane park',1989,949,0.4)];


const streets = [
    new MyStreet('Velachery',1945,1000,1),
    new MyStreet('Tambaram',1989,4000,3),
    new MyStreet('Taramani',2016,3000),
    new MyStreet('OMR',1929,10000,4)];

    const parkReports = () => {
        console.log(`***************** Park Report *****************`);

        let sumOfParkAge = 0;
        //park -> all park tree density
        parks.map((currentPark)=>{
            console.log(`${currentPark.name} tree density is ${currentPark.calculateTreeDensity()}`);
            sumOfParkAge += currentPark.calculateAgeOld();
            if(currentPark.treeCount > 1000){
                console.log(`${currentPark.name} has more than 1000 trees`);
            }
        });

        //all park average age
        console.log(`We have ${parks.length} parks with average age of ${sumOfParkAge} years`);

    }
    const streetsReport = () => {
        console.log(`***************** Street Report *****************`);

        let sumOfLength = 0;
        streets.map((currentStreet)=>{
            sumOfLength += currentStreet.streetLength;
            console.log(`${currentStreet.name} was built in ${currentStreet.buildYear} , is a ${currentStreet.getStreetSizes()} street`);
        });

        console.log(`We have ${streets.length} streets with total length of ${sumOfLength} and the average length of ${sumOfLength/streets.length}`);

    }

    parkReports();
    streetsReport();