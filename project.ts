type studentType = {
    name : string,
    level : number,
    age : number,
    bestSubject? : string 
}
let level100 :studentType[] = []
let level200 :studentType[] = []
let level300 :studentType[] = []
let level400 :studentType[] = []
let returnedArr :studentType[] = [];
function studentLevel(object:studentType ){
if (object.level === 100){
    level100.push(object)
    returnedArr = level100
}else if(object.level === 200){
    level200.push(object)
    returnedArr = level200
}else if (object.level === 300){
    level300.push(object)
    returnedArr = level300
}else if (object.level ===400){
    level400.push(object)
 returnedArr = level400
}else{
    return "cant find level"
}
return returnedArr
}


const toluInfo : studentType = {
    name : 'Adeleke Tolu',
    level : 200,
    age : 20,
    bestSubject : 'Physics'
}
const deyemiInfo : studentType= {
    name: 'Adeyemi Dayo',
    level: 400,
    age: 20,
    bestSubject: 'PE'
}
const SadeInfo :studentType = {
    name: 'Adeleke Sade',
    level: 200,
    age: 21,
    bestSubject: 'Physics'
};
const dunsimiInfo :studentType = {
    name: 'Inuoluwadunsimilopolopo',
    level: 200,
    age: 20,
    bestSubject: 'Physics'
};

console.log(studentLevel(dunsimiInfo));
console.log(studentLevel(toluInfo));
console.log(studentLevel(SadeInfo));
console.log(studentLevel(deyemiInfo));
