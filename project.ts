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


function addStudentToLevel(students:studentType[] ) :{
    FIRSTYEAR    : studentType[]
    SECONDYEAR   : studentType[]
    THIRDYEAR    : studentType[]
    FOURTHYEAR   : studentType[]}
{
let totalStudentLevel :{
    FIRSTYEAR    : studentType[]
    SECONDYEAR   : studentType[]
    THIRDYEAR    : studentType[]
    FOURTHYEAR   : studentType[]
}
= { 
    FIRSTYEAR    : level100,
    SECONDYEAR   : level200,
    THIRDYEAR    : level300,
    FOURTHYEAR   : level400
}
    for (let student of students){
        if (student.level === studentLevel.firstYear){
            level100.push(student)
        }else if(student.level === studentLevel.secondYear){
            level200.push(student)
        }else if (student.level === studentLevel.thirdYear){
            level300.push(student)
        }else if (student.level ===studentLevel.fourthYear){
            level400.push(student)
        }else{
            console.log('error level,can\'t add to object')
        } 
    }
return totalStudentLevel
}


const studentsInfo =[{
    name : 'Adeleke Tolu',
    level : studentLevel.secondYear,
    age : 20,
    bestSubject : 'Physics'
},
{
    name: 'Adeyemi Dayo',
    level: studentLevel.firstYear,
    age: 20,
    bestSubject: 'PE'
},
{
    name: 'Adeleke Sade',
    level:studentLevel.fourthYear,
    age: 21,
    bestSubject: 'Physics'
},
{
    name: 'Inuoluwadunsimilopolopo',
    level: studentLevel.secondYear,
    age: 20,
    bestSubject: 'Physics'
}]

console.log(addStudentToLevel(studentsInfo));
