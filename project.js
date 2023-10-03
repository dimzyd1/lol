"use strict";
let level100 = [];
let level200 = [];
let level300 = [];
let level400 = [];
let returnedArr = [];
function studentLevel(object) {
    if (object.level === 100) {
        level100.push(object);
        returnedArr = level100;
    }
    else if (object.level === 200) {
        level200.push(object);
        returnedArr = level200;
    }
    else if (object.level === 300) {
        level300.push(object);
        returnedArr = level300;
    }
    else if (object.level === 400) {
        level400.push(object);
        returnedArr = level400;
    }
    else {
        return "cant find level";
    }
    return returnedArr;
}
const toluInfo = {
    name: 'Adeleke Tolu',
    level: 200,
    age: 20,
    bestSubject: 'Physics'
};
const deyemiInfo = {
    name: 'Adeyemi Dayo',
    level: 400,
    age: 20,
    bestSubject: 'PE'
};
const SadeInfo = {
    name: 'Adeleke Sade',
    level: 200,
    age: 21,
    bestSubject: 'Physics'
};
const dunsimiInfo = {
    name: 'Inuoluwadunsimilopolopo',
    level: 200,
    age: 20,
    bestSubject: 'Physics'
};
console.log(studentLevel(dunsimiInfo));
console.log(studentLevel(toluInfo));
console.log(studentLevel(SadeInfo));
console.log(studentLevel(deyemiInfo));
