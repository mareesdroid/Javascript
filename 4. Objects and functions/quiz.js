
(function(){                                                                    ///////->>>IIFE

    /////////function constructor
function questionsAdder(question, choices, answers){
this.question = question;
this.choices = choices;
this.answer = answers;
};

questionsAdder.prototype.displayQuestion = function(){
console.log(this.question);
for(var i=0; i<this.choices.length; i++){
console.log(i + ' : ' + this.choices[i]);
}
}
questionsAdder.prototype.checkAnswers = function(callback){
let a = prompt('Enter your answer');
var sc;
if(this.answer == a){
console.log('Correct Answer');
sc = callback(true);
score++;

} else if(a === 'exit'){
// quests[n].displayScore(score,false);
return;
}else{
console.log('Wrong answer');
sc = callback(false);
}
quests[n].displayScore(sc,true);
}
questionsAdder.prototype.displayScore = function(score,isCall){
console.log('Your Score is '+score);
console.log('***********************');
if(isCall){
n = Math.floor(Math.random() * quests.length);
askQuestions(quests);
}
}
var questionList = ['What is the HTML tag under which one can write the JavaScript code?', 'Choose the correct JavaScript syntax to change the content of the following HTML code. \n <p id="geek">GeeksforGeeks</p>', 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?', 'What is the correct syntax for referring to an external script called “geek.js”?', 'The external JavaScript file must contain <script> tag. True or False?', 'Predict the output of the following JavaScript code.\n <script type="text/javascript">\n a = 8 + "8"; \n document.write(a);\n </script>', 'Predict the output of the following JavaScript code.<script type="text/javascript">\nvar a="GeeksforGeeks";\nvar x=a.lastIndexOf("G");\ndocument.write(x);\n</script> ', 'Which of the following is not a reserved word in JavaScript?', 'Predict the output of the following JavaScript code. <script type="text/javascript" language="javascript">\nvar a = "GeeksforGeeks";\nvar result = a.substring(4, 5);\ndocument.write(result);\n</script> ' , 'Predict the output of the following JavaScript code.<script type="text/javascript" language="javascript"> \nvar x=5;\nvar y=6;\nvar res=eval("x*y");\ndocument.write(res);\n</script> '];

var q1 = new questionsAdder(questionList[0],['<javascript>','<scripted>','<script>','<js>'],2);
var q2 = new questionsAdder(questionList[1],['document.getElement(“geek”).innerHTML=”I am a Geek”;', 'document.getElementById(“geek”).innerHTML=”I am a Geek”;', 'document.getId(“geek”)=”I am a Geek”;', 'document.getElementById(“geek”).innerHTML=I am a Geek;'],1);
var q3 = new questionsAdder(questionList[2],['alertbox(“GeeksforGeeks”);', 'msg(“GeeksforGeeks”);', ' msgbox(“GeeksforGeeks”);', 'alert(“GeeksforGeeks”);'],3);
var q4 = new questionsAdder(questionList[3],['<script src=”geek.js”>', '<script href=”geek.js”>',' <script ref=”geek.js”>','<script name=”geek.js”>'],0);
var q5 = new questionsAdder(questionList[4],['True','False'],1);
var q6 = new questionsAdder(questionList[5],['16','Complilation Error','88','Run Time Error'],2);
var q7 = new questionsAdder(questionList[6],['8','0','9','Error'],0);
var q8 = new questionsAdder(questionList[7],['interface','throws','program','short'],2);
var q9 = new questionsAdder(questionList[8],['sf','ks','s','k'],2);
var q10 = new questionsAdder(questionList[9],['“30”','30','5*6','“5*6”'],1);

var quests = [q1, q2, q3, q4 ,q5, q6, q7, q8, q9, q10];
var n = Math.floor(Math.random() * quests.length);
function askQuestions(quests){

quests[n].displayQuestion();
quests[n].checkAnswers(keepScore);

}
/*
TODO
Learn closure more
*/
function score(){
var sc = 0;                                 //////closure 
return function(correct){
if(correct){
sc++;
}
return sc;
}
}

var keepScore = score();
askQuestions(quests);

})();
