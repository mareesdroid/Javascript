import axios from 'axios';
import {api} from '../util';

export default class Search{
    constructor(query){
        this.query = query;
    }
    

async getResults(){
    var http = require("https");

    try{
    const data =  await axios({
        "url":`${api.search}${this.query}`,
        });
        this.result = data.data.drinks;
        //console.log(this.result);
    } catch(error){
        alert(error);
    }

}
}