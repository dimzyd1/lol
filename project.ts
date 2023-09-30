type levelSortType = {
    name : string
    level : number
    age : number
    bestSubject : string
    
}
const level100 = []
const level200 = []
const level300 = []
const level400 = []
let returnedArr :levelSortType[]
function objectAccept(object :objecter ){
if (object.level === 100){
    level100.push(object)
    returnedArr = level100
}else if(object.level === 200){
    level200.push(object)
    returnedArr = level200
}else if (object.level === 300){
    level300.push(object)
    returnedArr = level300
}else{
    level400.push(object)
 returnedArr = level400
}
return returnedArr
}
