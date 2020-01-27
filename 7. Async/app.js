/* async sample

const timedTask = ()=>{
    console.log('hello from timed Task');
}


const sayHello = () => {
    console.log('Hello there')
}

const sayByebye = () => {
    console.log(`I'll be back B)`);
}
setTimeout(timedTask, 2000);
sayHello();
sayByebye();

*/
/***************************************************
* old way of getting data from async with callbacks*
****************************************************/
/*
function getSomeDataFromServer(){

    //imagine below imeout function is response from url it takes 2 sec to respsnse

    setTimeout(() => {
        const myRespose = ['Hi', 'dummy', 'response'];      //received data from server

            console.log('Response received');
            // write callback to handle out response

            setTimeout((resp)=>{
                console.log(`data handled ${myRespose}`);
                                            // imagine we want to connect from the response to get other api inside thi callback
                        
                    setTimeout((respFromOtherResp)=>{
                                                    /*Callback hell
                                                    * Imagine if we have more and more chaining like this
                                                    * like 10 or more levels we are having one callback inside callback and other callback inside other callback
                                                    * this is called callback hell    
                                                    * to prevent this promises introduced

                                                    */
                                                    /*
                            console.log('hey');
                    },1000,resp)

            },1000,myRespose);

    },2000);
}

getSomeDataFromServer();


/***************************************************
* new way of getting data from async with promises*
****************************************************/
/*
const getIDs = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        console.log('Promise One Completed');
        resolve(['Hi', 'dummy', 'response']);
    },2000);

});

const getIdOfIds = (responseFromPrevs)=>{
    return new Promise((resolve, reject)=>{
          setTimeout((resp)=>{
            console.log('Promise Two Completed');
         resolve(`Here is a ${resp[0]}`);
          },2000,responseFromPrevs);
});

}

const getThirdIdsOfIds = (responseFromPrevs)=>{
    return new Promise((resolve,reject)=>{


        setTimeout((resp)=>{
            console.log('Promise Third Completed');
            resolve(`Here is a msg from two :->${resp}`);
        },2000,responseFromPrevs);

    });
}

// getIDs
// .then((IDs)=>{
//     console.log(IDs);
//     return getIdOfIds(IDs);
//     })
// .then((resut)=>{
//         console.log(resut)
//         return getThirdIdsOfIds(resut);
//     })
// .then((result)=>{
//     console.log(result);
// })    
// .catch((error)=>{
//         console.log('promise error');
//     });



/*****************************
* from promises to asyncawait*
******************************/

/*
//alternate method

                            ///await only works inside a async function

async function getServerDataAW(){
    const IDOne = await getIDs;

    const IDTwo = await getIdOfIds(IDOne);

    const IDThree = await getThirdIdsOfIds(IDTwo);

    //console.log(IDThree);
    return IDThree;
}

getServerDataAW().then((result)=>{
    console.log(`Here we can access final chained promise results    result :-> ${result}`);
});
/*****************************
* making ajax call with fetch and promise*
******************************/
                                            //if error search for crossorigin    crossorigin not working as on nov 20 2019 use cors-anywhere
const getWeather = (cityId)=>{                                            
fetch
(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityId}/`)
.then((result)=>{
    return result.json();
})
.then((data)=>{
    //console.log(data);
    console.log(`**************** ${data.title} ***************`);
console.log(`Max Temperature: ${data.consolidated_weather[0].max_temp}       Minimum temperature: ${data.consolidated_weather[0].min_temp} `);
});
};

const weatherCity = ['2295424', '12586539', '28743736', '2514815', '2436704'];
let cityWeatherData = [];
weatherCity.map((currentCity)=>{
   // getWeather(currentCity);
   let cityData = getWeatherAW(currentCity);
   cityData.then((data)=>{
       
       
       var obj = {
        [data.title] : data

       };
       
    cityWeatherData.push(obj);
   });
  
});


//asyncawait method

async function getWeatherAW(cityId){
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityId}/`);
    const data = await result.json();
    console.log(`**************** ${data.title} ***************`);
console.log(`Max Temperature: ${data.consolidated_weather[0].max_temp}       Minimum temperature: ${data.consolidated_weather[0].min_temp} `);

return data;
}


