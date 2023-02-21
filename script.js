//flags in the console
/*
let req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var result = JSON.parse(req.response);
   for(let i of result){
      console.log(i.flags);
   }
}

*/
//country name, region,subregion,population
/*
let req1 = new XMLHttpRequest();
req1.open("GET","https://restcountries.com/v3.1/all");
req1.send();
req1.onload=function(){
    var result1 = JSON.parse(req1.response);
   for(let i of result1){
      console.log(i.name.common);
      console.log(i.region);
      console.log(i.subregion);
      console.log(i.population);
   }
}
*/
//compare 2 JSON obj have same properties

let obj1={
   name:"person 1",
   age:5,
};
let obj2={
   age:5,
   name:"person 1",
}

let checkobj = function (obj1,obj2){
let obj1keys=Object.keys(obj1);
let obj2keys=Object.keys(obj2);
if(obj1keys.length==obj2keys.length){
 return  obj1keys.every(key=>obj2.hasOwnProperty(key)&&(obj1[key]==obj2[key]));
};
return false

}
console.log(checkobj(obj1,obj2))