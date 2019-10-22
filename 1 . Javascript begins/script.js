                                                                    /*********************************
                                                                    *           Hello world          *
                                                                    *********************************/

/*                                                    
console.log("Hello world!");
/*


                                                                    /********************************
                                                                    *   Variables and data types    *
                                                                    *********************************/ 

/*
var myName = 'Marees';
var age = 24;
var isMarried = false;
var undefTest;
var nullTest = null;
console.log('data type test');
console.log("name is " + myName);
console.log("Age is " + age);
console.log("Is married " + false);
console.log('this is the example for undefined ' + undefTest);
console.log('this is a null value '+nullTest);


                                                                    /**************************************
                                                                    * Variable mutation and type coercion *
                                                                    ***************************************/

/*
var firstName = 'Marees';
var age = 24;
// type coercion 
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Developer';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old' + job + '. Is he married ' + isMarried);

// variable mutation
age = 'twenty four';

console.log(firstName + 'is a ' + age + ' year old' + job + '. Is he married ' + isMarried);

                                                                    /*********************************
                                                                    *           Basic operators      *
                                                                    *********************************/
/*                                                                   
var calcData = prompt("Enter calc data entered number mult,div,sum,diff by 2");


// math operator
console.log("muliplication of 2 = " + (calcData * 2));
console.log("sum of 2 = " + (parseInt(calcData)+2));
console.log("division by 2 = " + (calcData - 2));
console.log("difference of 2 = " + (calcData / 2));

var age = prompt("Enter Your age");
// Logical operators
var isOver18 = age > 18;

console.log('is Adult : ' + isOver18);

// typeOf operator 
console.log(typeof isOver18);
typeof calcData;


                                                                    /*********************************
                                                                    *       operator precedence      *
                                                                    *********************************/
/*                                                                   
var now = 2019;
var yearMars = 1995;
var fullAge = 18;

var isAdult = now - yearJohn >= fullAge;

console.log(isAdult);

var x,y;
x = y = (3+5) * 4-6;

console.log(x, y);

x *= 2;
console.log(x);
x += 10;
console.log(x);
                                                                    /*********************************
                                                                    *       CODING CHALLENGE 1       *
                                                                    *********************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
/*

var markHeight = prompt('Enter mark height in meters');
var markWeight = prompt('Enter mark weight');
var johnHeight = prompt('Enter john height in meters');
var johnWeiht = prompt('Enter john weight');

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeiht / (johnHeight * johnHeight);

var isMarkHigherBMI = markBMI > johnBMI;
console.log('Is mark has higher bmi than john? ' + isMarkHigherBMI);
console.log('Mark BMI : ' + markBMI + ' John BMI : '+ johnBMI);

/*
                                                                    /*********************************
                                                                    *       If / else statements     *
                                                                    *********************************/
/*                                                                   

var name = 'Marees';
var maritalStatus = 'Single';

if(maritalStatus === 'Married'){
    console.log("He is married");
} else {
    console.log(name + " will going to marry soon :)");
}
*/


                                                                    /*********************************
                                                                    *      If / else Boolean logic   *
                                                                    *********************************/
/*
var name = 'Marees';
var age = 24;

if(age < 6 && age > 1){
    console.log(name + ' is a Child');
} else if(age > 6 && age < 13){
    console.log(name + ' is a Boy');
} else if(age > 13 && age < 20){
    console.log(name + ' is a Teen');
} else if(age > 20 && age < 30){
    console.log(name + ' is a Young Man');
} else if(age > 30 && age <100){
    console.log(name + ' is a Man');
} else{
    console.log('Invalid age');
}

                                                                    /***********************************************
                                                                    *  The Ternary Operator and Switch Statements  *
                                                                    ***********************************************/
/*
// ternary
var name = 'Marees';
var age = '24';

// opt1
age >= 18 ? console.log(name + ' can drink beer') : console.log(name + ' can drink cool drinks');

// opt2
var drink = age >= 18 ? 'Beer' : 'Cool drinks';
console.log(name +' can drink '+drink);

//switch
var job = 'Developer';
switch(job){
    case 'Teacher':
    case 'Instructor':
        console.log('Hey! '+name + ' go and teach the kids');
        break;
    case 'Developer':
        console.log('Hey! '+name + ' make something new');
        break;
    case 'Proprietor':
        console.log('Hey! '+name + ' do what you want');
        break;
    default:
        console.log('Hey! '+name + ' search for a job');
        break;
}
*/
                                                                    /*************************************************
                                                                    * Truthy and Falsy values and equality operators *
                                                                    **************************************************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
 var test,test1,test2,test3;
 test1 = null;
 test2 = 0;
 test3 = '';
 if(!test){
     console.log('javascript returns false if variable is undefined');
 }
 if(!test1){
    console.log('javascript returns false if variable is null');
}
if(!test2){
    console.log('javascript returns false if variable is 0');
}
if(!test3){
    console.log('javascript returns false if string is empty');
}

// Equality operators
var myNum = 10; ///number data type

if(myNum == '10'){
    console.log('javascript == operator checks the data event if its a different data type');
}

if(!(myNum === '10')){
    console.log('javascript === operator strictly checks the data type and value or true');
}

*/
                                                                    /*********************************
                                                                    *         CODING CHALLENGE 2     *
                                                                    *********************************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var johnTeam, mikeTeam, maryTeam;
var totalRounds = 3;
var winningTeam = '';

johnTeam = (89+12+103) / totalRounds;
mikeTeam = (116+94+123) / totalRounds;
maryTeam = (97+134+105) / totalRounds;
console.log('John Team Scores : ' + johnTeam);
console.log('Mike Team Scores : ' + mikeTeam);
console.log('Mary Team Scores : ' + maryTeam);

if(johnTeam > mikeTeam && johnTeam > maryTeam){
    winningTeam = 'John Team';
} else if(mikeTeam > maryTeam){
    winningTeam = 'Mike Team';
} else if(mikeTeam == maryTeam && maryTeam == johnTeam){
    winningTeam = 'Match Draw';
} else {
    winningTeam = 'Mary Team';
}
console.log('The Winner is ' + winningTeam);
*/
                                                                    /*********************************
                                                                    *           Functions            *
                                                                    *********************************/
/*
function calculateAge(birthYear){
    return 2019 - birthYear;
}
var mareesAge = calculateAge(1995);
var yuvrajAge = calculateAge(1989);
var elaAge = calculateAge(1987);

console.log('Marees age is : ' + mareesAge + '\nYuvaraj age is : ' + yuvrajAge + '\nElavarasan age is : ' + elaAge);

console.log(calculateRetirement('Marees', 1995));
function calculateRetirement(name, year){
    return name + ' Retirement is in ' + (65 - parseInt(calculateAge(year)) + ' Years');
}
*/
                                                                    /**************************************
                                                                    * Function Statements and Expressions *
                                                                    **************************************/
/*
// function declaration
// function whatWorkHeDo(name,job){ }

//function expression
var whatWorkHeDo = function(name, job){

    switch (job) {
        case 'Application Developer':
            return (name + ' : \ndevelop and implement new software programs, Design and update software database, Test and maintain software products to ensure strong functionality and optimization.');
        case 'Program Analyst':
                return(name + ' : \nyou will be responsible for using advanced qualitative and quantitative methods to analyze the effectiveness of organizational programs, and implementing study methods to evaluate the efficiency of complex program operations.');
        case 'Supervisor':
                return(name + ' : \nmaintain top quality assurance and customer service standards, Focus on building sales and forecasting future performance.');
        default:
                return(name + ' : \nYour job role is ' + job);
    }
};

console.log(whatWorkHeDo('marees','Application Developer'));
console.log(whatWorkHeDo('yuvaraj','Program Analyst'));
console.log(whatWorkHeDo('elavarasan','Supervisor'));

*/
                                                                    /********************************
                                                                    *               Arrays          *
                                                                    *********************************/
/*
//Initialize new array
var names = ['Marees', 'Yuvaraj', 'Elavarasan'];
var years = new Array(1995, 1989, 1987);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Bat man';
console.log(names);

// Different data types
var mixed = ['Marees', 'Yuvaraj', 1995, 'Developer',true]
mixed.push('Elavarasan');
mixed.unshift('gofirst');
mixed.unshift('and you too');
// remove last two
mixed.pop();
mixed.pop();
console.log(mixed);
// remove first two
mixed.shift();
mixed.shift();
mixed.shift();

console.log(mixed);

// usable in many places
var findPosition = mixed.indexOf('Developer');
console.log(findPosition);
findPosition = mixed.indexOf('return -1 if value not find in array');
// so in future you can find if a data exist or not if - data not exist else data contains
console.log(findPosition);

*/

                                                                    /*********************************
                                                                    *       CODING CHALLENGE 3       *
                                                                    *********************************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function calcTip(myBill){
    if(myBill > 200){
        //10%
        return 'Your bill amount is : ' + myBill + ' and your tip amount is : ' + (myBill *0.1);
    } else if(myBill < 200 && myBill > 50){
        //15%
        return 'Your bill amount is : ' + myBill + ' and your tip amount is : ' + (myBill *0.15);
    } else{
        //20%
        return 'Your bill amount is : ' + myBill + ' and your tip amount is : ' + (myBill *0.2);
    }
}
var restaurantBill = [124, 48, 268];
//tip calc as a function
console.log('Hotel1 : \n' + calcTip(restaurantBill[0]));
console.log('Hotel2 : \n' + calcTip(restaurantBill[1]));
console.log('Hotel3 : \n' + calcTip(restaurantBill[2]));
*/

                                                                    /*********************************
                                                                    *       Objects and properties   *
                                                                    *********************************/
/*

// new Object syntax
var profile = new Object();
profile.firstName = 'Marees';
profile.birthYear = 1995;
profile.lastName = 'A';
profile.age = 24;
profile.profession = 'Developer';

console.log(profile);

// get data from exist data


// Object literal
var mars = {
    firstName: 'Marees',
    lastName: 'A',
    birthYear: 1995,
    family: ['Yuvaraj', 'Elavarasan'],
    job: 'teacher',
    isMarried: false
};

console.log(mars.firstName);
console.log(mars.family);

// add object in a array

// skip this to generate random string
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 
var profileList = new Array();

for(var i=0;i<10;i++){
    var profile = new Object();
    profile.firstName = makeid(5);
    profile.birthYear = 1995;
    profile.lastName = makeid(1);
    profile.age = 24;
    profile.profession = makeid(7);
    profileList.push(profile);
}
console.log(profileList);


                                                                    /*********************************
                                                                    *        Objects and methods     *
                                                                    *********************************/
/*
var mars = {
    name:'',
    birthYear:1995,
    calcAge:function(){this.age = 2019 - this.birthYear},
    profession:'Developer'
};
mars.calcAge()
console.log(mars);

                                                                    /*********************************
                                                                    *       CODING CHALLENGE 4       *
                                                                    *********************************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var markDetail = {
    name : 'Mark',
    height : '1.8',
    weight : '80',
    bmi : function (){ return this.weight/(this.height * this.height)}
};
var johnDetail = {
    name : 'John',
    height : '1.6',
    weight : '75',
    bmi : function (){ return this.weight/(this.height * this.height)}
};
console.log('Mark BMI : ' + markDetail.bmi() + '\nJohn BMI : ' + johnDetail.bmi() +'\n');
if(markDetail.bmi()>johnDetail.bmi()){
    console.log('Mark has the highest BMI');
} else if(markDetail.bmi() === johnDetail.bmi()){
    console.log('Both has the same BMI');
} else{
   console.log('John has the highest BMI');
}


                                                                    /********************************
                                                                    *       Loops and iteration     *
                                                                    *********************************/
/*

var testArray = ['Marees','MCA','Developer',1995,'Benchmark business software','blue'];

for(var i=0;i<testArray.length;i++){
    if(typeof(testArray[i]) !== 'string'){
        continue;       //if not strng skip the current iteration
    }
    console.log(testArray[i]);
}
for(var i=0;i<testArray.length;i++){
    if(typeof(testArray[i]) !== 'string'){
        break;       //if not strng break and exit the loop
    }
    console.log(testArray[i]);
}

//looping backwards
for(var i=testArray.length-1;i>=0;i--){
    console.log(testArray[i]);
}


                                                                    /********************************
                                                                    *         CODING CHALLENGE 5    *
                                                                    *********************************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*

johnBill = [124, 48, 268, 180, 42];
markBill = [77, 375, 110, 45];
// johnTipStrategy
// 20% if less than 50, 15% if less than 200, 10% if bill more than 200
//markTipStrategy
//20% if less than 100, 10% if less than 300, 25% if more than 300
var johntoPay = new Array();
var markToPay = new Array();
var markTip = new Array();
var johnTip = new Array();

var johnBills = {
    name : 'john wick',
    bill : johnBill,
    tip : johnTip,
    toatalAmount : johntoPay,
    tipGetter :  (johnBill,'john wick')
};
var markBills = {
    name : 'mark',
    bill : markBill,
    tip : markTip,
    toatalAmount : markToPay,
    tipGetter : getTip(markBill,'mark')
};



markBills.tipGetter;
johnBills.tipGetter;
markBills.tipAvg;
johnBills.tipAvg;
function getTip(bill,name){
    var tip;
    var total;
   
    if(name === 'john wick'){
        for(var i=0;i<bill.length;i++){
            if(bill[i] > 200){
                tip = bill[i] * 0.1;
            } else if(bill[i] > 50 && bill[i] < 200){
                tip = bill[i] * 0.15;
            } else{
                tip = bill[i] * 0.2;
            }
            johnTip.push(tip);
            total = bill[i] + tip;
           
            johntoPay.push(total);
        }
 
    } else{
        for(var i=0;i<bill.length;i++){
            if(bill[i] > 300){
                tip = bill[i] * 0.1;
            } else if(bill[i] > 100 && bill[i] < 300){
                tip = bill[i] * 0.15;
            } else{
                tip = bill[i] * 0.2;
            }
           
            markTip.push(tip);
            total = bill[i] + tip;
            markToPay.push(total);
        }        
    }
   return 'functionTest';
}

console.log(johnBills);
console.log(markBills);
function calculateAvgTip(tip){
    var avgTip=0;
   
    for(var i=0;i<tip.length;i++){
        avgTip += tip[i];
       
    }
    
    return avgTip / tip.length;
}
johnBills.avgTip = calculateAvgTip(johnBills.tip);
markBills.avgTip = calculateAvgTip(markBills.tip);
johnBills.tipAvg > markBills.tipAvg ? console.log('Highest tip paid family is John') :console.log('Highest tip paid family is Mark');

*/