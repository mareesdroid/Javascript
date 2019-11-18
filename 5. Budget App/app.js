
                     ///Budget Controller module      
var budgetController = (function(){
   

                    ///function constructors        ///Always use first cap for function constructor to distinguish from other function

    
    var Expense = function(id, description, value){

            this.id = id;
            this.description = description;
            this.value = value;
    };
                                                                        //prototype function
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
    };


    var calculateTotal = function(type){
            var sum = 0;
            data.allItems[type].forEach(function(cur){              ///cur is a  income or expense object
                sum += cur.value;             
            });
            
            // update the calculated sum to data structure
            data.totals[type] = sum;
           // console.log(data.totals);
    }

                                    ///data structure
    var data = {
        allItems:{
            exp : [],
            inc : []
        },
        totals:{
            exp : 0,
            inc : 0
        },
        budget:0,
        percentage:-1               //0 instead of -1 because -1 represents the value of non existent
    };

    return{
        addItem : function(type, des, val){
            var newItem,ID;

            // create new id
            // expenseArray[positionof length - 1]  and get that id          //////get last data id from an array   /// then sum + 1   /for putting unique id

            // console.log(type);
            if(data.allItems[type].length > 0){
                ID =  data.allItems[type][data.allItems[type].length-1].id + 1;
            } else{
                ID = 0;
            }
            
            // console.log(data.allItems[type].length);
            ////create new item
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            //push it to our data structure
            data.allItems[type].push(newItem);

            /// return newly added element
            return newItem;
        },
        
        deleteItem : function(type, ID){
                var ids, index;
                /* TO-DO
                    * get all exp or inc id ->in array( ids )
                    * find the index of selected id in our array ( ids -> find if selected id matches)
                    * if id matches delete the object in array with found index
                */
               // get all exp or inc id ->in array( ids )
                ids = data.allItems[type].map(function(current){
                    
                    return current.id;
                });
                //console.log(ids);
                //console.log(ID);
                // find the index of selected id in our array ( ids -> find if selected id matches)
                index = ids.indexOf(ID);
                // if index = -1 means id not exist
                if(index !== -1){
                        data.allItems[type].splice(index,1);     //splice (position, count of data should delete)
                }
                //console.log(index);
        },
        
        dataTesting : function(){
            console.log(data);
        },
        calculateBudget : function(){
            /*
            * Calculate total income and expenses
            * Calculate the budget: income - expenses
            * Calculate the percentage of income that we spent
            */
           // Calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp; 

            console.log(data.totals.inc);
            // Calculate the percentage of income that we spent

            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
            

            /*
            percentage
                exp = 100;
                inc = 500;
                percentage = exp/inc*100;
                            100/500 = 0.2    
                            0.2*100 = 20%

            */
        },
        calculatePercentage : function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentages : function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
        },
        getBudget : function(){
            return{
                budget : data.budget,
                totalExpense : data.totals.exp,
                totalIncome : data.totals.inc,
                percentage : data.percentage
            }
        }
    }


})();
                     ///UI Controller module
var UIController = (function(){
    
    var DOMStrings = {
        addBtn : '.add__btn',
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        incomeContainer : '.income__list',
        expenseContainer : '.expenses__list',
        budgetValue : '.budget__value',
        budgetIncome : '.budget__income--value',
        budgetExpense : '.budget__expenses--value',
        percentageExpense : '.budget__expenses--percentage',
        container : '.container',
        expensesPercLabel : '.item__percentage',
        dateLabel : '.budget__title--month'
       
    };
    var formatNumbers = function(num, type){
        /*  TO-DO
            * + or - before number
            * add exactly 2decimal points 
            * comma seperating the thousands
        
            ex: 
                2485.346742 -> + 2,485.35
        */
       var spliter,rupees, paise, sign;
       num = Math.abs(num);
       num = num.toFixed(2);
       spliter = num.split('.');
       rupees = spliter[0];
       paise = spliter[1];
       if(rupees.length > 3){
           rupees = rupees.substr(0, rupees.length - 3) + ',' + rupees.substr(rupees.length - 3, 3);
       }

       

       return (type === 'exp' ? '-' : '+') + ' ' + rupees + '.' + paise;
    };

    return{
        getDom : function(){
            return DOMStrings;    
            },
        getinput : function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value,
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        addListItem : function(obj, type){
            /*  TO-DO
                * Create HTML string with placeholder text
                * Replace the placeholder text with some actual data
                * insert html into the DOM
            */

            var html, element, newHtml;

            //create html withn placeholder text
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if(type === 'exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumbers(obj.value,type));

            //insert html into the DOM
                                                                                        //adjacent where to put before or after end   // read element adjacent in html
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        },
        deleteListItem : function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        clearFields : function(){
            var fields;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            //console.log(fields);                    //output NodeList(2) [input.add__description, input.add__value]
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            //focus back to the description
            fieldsArr[0].focus();

        },
        displayBudget : function(obj){
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMStrings.budgetValue).textContent = formatNumbers(obj.budget, type);
            document.querySelector(DOMStrings.budgetExpense).textContent = formatNumbers(obj.totalExpense,'exp');
            document.querySelector(DOMStrings.budgetIncome).textContent = formatNumbers(obj.totalIncome,'inc');
            
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageExpense).textContent = obj.percentage + ' %';
            } else {
                document.querySelector(DOMStrings.percentageExpense).textContent = '--';
            }
           
        },
        displayPercentages : function(percentage){
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            var nodeListForEach = function(list, callback){
                for (var i=0; i < list.length; i++){
                    callback(list[i], i);
                }
            }

            nodeListForEach(fields, function(current, index){
                if(percentage[index] > 0){
                current.textContent = percentage[index] + ' %';
                } else {
                    current.textContent = '--';
                }
            });



            /* detailed overview
                * line 268 executes and call the nodelistForEach function and it passes a fields(260) and anonymous function(268)
                * after the function attributes passed at line 263 list(fields) of [i] and i are passed and call a callback(anonymous function line 268)
            */

        },
        displayDate : function(){
            var now, year, month, months;
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            document.querySelector(DOMStrings.dateLabel).textContent = year + ' ' + months[month];
        },
        changedType : function(){
            var fields = document.querySelectorAll(
                DOMStrings.inputDescription + ', '+
                DOMStrings.inputType +', '+
                DOMStrings.inputValue 
                );

                var nodeListForEach = function(list, callback){
                    for (var i=0; i < list.length; i++){
                        callback(list[i], i);
                    }
                }
                nodeListForEach(fields, function(cur){
                    cur.classList.toggle('red-focus');
                });

                document.querySelector(DOMStrings.addBtn).classList.toggle('red');
        }

        

    };

})();
                     ///GLOBAL App Controller module
var MainController = (function(budgetCtrl, uiCtrl){

     //functions


     var startupSetup = function(){
         //get dom from ui controller
         var DOM = uiCtrl.getDom();

         ///DOM
         var addBtn = document.querySelector(DOM.addBtn);


         //Eventhandlers
         addBtn.addEventListener('click', ctrlAddItem);

         document.addEventListener('keypress', function(event){
                 //console.log(event);                             ///logs which key is pressed   p.s:-use the keycode
                 /*TO-DO
                     * whn user press the enter key consider as a addBtn DOM Event listener
                 */

                 if(event.keyCode === 13 || event.which === 13){                          // log event object it contans  keycode property
                     ctrlAddItem();
                 }


         });

         document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

         document.querySelector(DOM.inputType).addEventListener('change',uiCtrl.changedType);

     };

                //update
                var updateBudget = function(){
                    /*  TO-DO
                            * Calculate the budget
                            * Return the budget
                            * Display the budget on the UI
                    */
                // calculate the budget
                budgetCtrl.calculateBudget();    
                // Return the budget
                var budget = budgetCtrl.getBudget();

                // Display the budget on the UI

                uiCtrl.displayBudget(budget);
                
                };


                var updatePercentage = function(){
                    /* TO-DO
                        * Calculate Percentage
                        * Read percentages from the budgt controller
                        * Update the UI with the new percentages
                    */
                    budgetController.calculatePercentage();
                    percent = budgetController.getPercentages();
                    console.log(percent);
                    //Update the UI with the new percentages
                    uiCtrl.displayPercentages(percent);

                };

                //add
                var ctrlAddItem = function(){
                    /* TO-DO
                        * Get the filled input data
                        * Add the item to the budget controller
                        * Add the item to the UI
                        * Clear prviously entered fields
                        * Calculate and update budget
                    */

                    var input, newItem;

                    //get the filled input data
                    input = uiCtrl.getinput();
                   // console.log(input);

                   if(input.description.trim() !== "" && !isNaN(input.value) && input.value > 0){
                            //Add the item to the budget controller
                            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

                            //Add the item to the UI
                            uiCtrl.addListItem(newItem, input.type);

                            //Clear prviously entered fields

                            uiCtrl.clearFields();

                            //Calculate and update budget
                            updateBudget();

                            // Calculate and update buget percentage
                            updatePercentage();

                   }
                
                 //  console.log('add button');


            };

            var ctrlDeleteItem = function(event){
               // console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
               var itemID,s,ID,type;
               itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
               if(itemID){
                   s = itemID.split('-');
                   ID = parseInt(s[1]);
                   type = s[0];
                   /*   TO-DO
                            * Delete the item from the data strcture
                            * Delete the item from the UI
                            * Update and show the new budget
                   */
                  // Delete the item from the data strcture
                  budgetCtrl.deleteItem(type, ID);
                  // Delete the item from the UI
                  uiCtrl.deleteListItem(itemID);
                  //Update and show the new budget 
                  updateBudget();
                  // Calculate and update buget percentage
                  updatePercentage();
               }
            };
                

            return{
                init : function(){
                    console.log('App Started');
                    startupSetup();
                    uiCtrl.displayBudget({
                        budget : 0,
                        totalExpense : 0,
                        totalIncome : 0,
                        percentage : -1
                    });
                    uiCtrl.displayDate();
                }
            }
               
   
})(budgetController, UIController);











MainController.init();






/*                          /////////commented
var budgetController = (function(){

                            /////private (scope only inside a function)
    var x = 23;
    var add = function(a){
        return x + a;
    }

    return{
        publicTest : function(b){
            console.log(add(b));
        }
    }

})();

/*full walkthrough
line 1 get executed anonymous function is declared and immediately called (because of the IIFE function() see notes on part - 4 for IIFE)
from line 2 to 7 are declared and return as a object in line 9 to 13
after all the line executed var budgetController is a simply containing method called publicTest
        see closures for more detail(part - 4 notes)
because of closure we can access all the variable and method even after the function is returned

we cannot access x and add function directly because of the closure we can access it by help of closure return
/**
output:

budgetController.x                  ////cannot accessible because it's private
undefined


budgetController.add(10)            ////add function is private also
VM305:1 Uncaught TypeError: budgetController.add is not a function
                            at <anonymous>:1:18
                            (anonymous) @ VM305:1


budgetController.publicTest(10)    app.js:9             ////accessible because public
33
undefined

 */