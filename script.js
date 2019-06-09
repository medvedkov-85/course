(function () {
    'use strict';
    // this function is strict...
 }());

 let money, time;
 function start() {
    money = +prompt('Ваш бюджет на месяц');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money || money == '' || money == null)) {
        money = +prompt('Ваш бюджет на месяц');    
    }
 }
 start();

let appData = {
    budget: money,
    timedata: time,
    expences: {},
    optionalExpenses:{},
    income:[],
    savings:true
};

function chooseExpences() {
    for(let i = 0; i < 2; i++) {
        let key = prompt('Введите обязательную статью расходов в этом месяце');
        let value = prompt('Во сколько обойдется?');
        if(typeof(key) === "string" && typeof(key) != null && 
            typeof(value) && null && key != '' && value != '') {
            appData.expences[key] = value;
        }
        
    }
}
chooseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert(appData.moneyPerDay);
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let answer = prompt('Статья необязательных расходов?');
        if(typeof(answer) === 'string' && typeof(answer) != null && 
            answer != '') {
            appData.optionalExpenses.i = answer;        
        }
    }
}

function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert('Доход от вашего депозита: ' + appData.monthIncome);
    }    
}
checkSavings();