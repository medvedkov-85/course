(function () {
    'use strict';
    // this function is strict...
 }());
let money = prompt('Ваш бюджет на месяц');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timedata: time,
    expences: {},
    optionalExpenses:{},
    income:[],
    savings:false
};

for(let i = 0; i < 2; i++) {
    let key = prompt('Введите обязательную статью расходов в этом месяце');
    let value = prompt('Во сколько обойдется?');
    appData.expences[key] = value;
}
console.log(appData);