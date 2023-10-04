const enum studentLevel {firstYear = 100 , secondYear = 200 , thirdYear = 300 , fourthYear = 400}
type studentType = {
    name : string,
    level : studentLevel,
    age : number,
    bestSubject? : string 
}
let level100 :studentType[] = []
let level200 :studentType[] = []
let level300 :studentType[] = []
let level400 :studentType[] = []

function addStudentToLevel(object:studentType ){
if (object.level === 100){
    level100.push(object)
    return level100
}else if(object.level === 200){
    level200.push(object)
    return level200
}else if (object.level === 300){
    level300.push(object)
    return level300
}else if (object.level ===400){
    level400.push(object)
    return level400
}else{
    return "cant find level"
}
}


const toluInfo : studentType = {
    name : 'Adeleke Tolu',
    level : studentLevel.secondYear,
    age : 20,
    bestSubject : 'Physics'
}
const deyemiInfo : studentType= {
    name: 'Adeyemi Dayo',
    level: studentLevel.firstYear,
    age: 20,
    bestSubject: 'PE'
}
const SadeInfo :studentType = {
    name: 'Adeleke Sade',
    level:studentLevel.fourthYear,
    age: 21,
    bestSubject: 'Physics'
};
const dunsimiInfo :studentType = {
    name: 'Inuoluwadunsimilopolopo',
    level: studentLevel.secondYear,
    age: 20,
    bestSubject: 'Physics'
};

console.log(addStudentToLevel(dunsimiInfo));
console.log(addStudentToLevel(toluInfo));
console.log(addStudentToLevel(SadeInfo));
console.log(addStudentToLevel(deyemiInfo));
