"use strict";
let level100 = [];
let level200 = [];
let level300 = [];
let level400 = [];
function addStudentToLevel(object) {
    if (object.level === 100) {
        level100.push(object);
        return level100;
    }
    else if (object.level === 200) {
        level200.push(object);
        return level200;
    }
    else if (object.level === 300) {
        level300.push(object);
        return level300;
    }
    else if (object.level === 400) {
        level400.push(object);
        return level400;
    }
    else {
        return "cant find level";
    }
}
const toluInfo = {
    name: 'Adeleke Tolu',
    level: 200 /* studentLevel.secondYear */,
    age: 20,
    bestSubject: 'Physics'
};
const deyemiInfo = {
    name: 'Adeyemi Dayo',
    level: 100 /* studentLevel.firstYear */,
    age: 20,
    bestSubject: 'PE'
};
const SadeInfo = {
    name: 'Adeleke Sade',
    level: 400 /* studentLevel.fourthYear */,
    age: 21,
    bestSubject: 'Physics'
};
const dunsimiInfo = {
    name: 'Inuoluwadunsimilopolopo',
    level: 200 /* studentLevel.secondYear */,
    age: 20,
    bestSubject: 'Physics'
};
console.log(addStudentToLevel(dunsimiInfo));
console.log(addStudentToLevel(toluInfo));
console.log(addStudentToLevel(SadeInfo));
console.log(addStudentToLevel(deyemiInfo));
