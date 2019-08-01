let money, time;
function start() {
    money = +prompt( "Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD", "");
    
    while (isNaN(money) || money == '' || money == null){
        money = +prompt( "Ваш бюджет на месяц?", "");
    }
} 
start();


 var appData = {
budget:money,
timeData: time,
expenses: {},
optionalExpenses:{},
income:[],
savings: true
 };

 function chooseExpenses(){
    for(var i = 0; i < 2; i++) {
        var m = prompt('Введите обязательную статью расходов в этом месяце','');
            a =  +prompt ('Во сколько обойдется?', '');
    
            if((typeof(m))=== 'string' && (typeof(m)) != null && 
            (typeof(a)) !=null && m != '' && a != '' &&
             m.length < 50) {
                console.log('done');
                appData.expenses[m] = a;
            } else {
                i = i - 1;
            }
    }
}
chooseExpenses();

function detectDayBudget (){
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget ();

function detectLevel() {
if (appData.moneyPerDay < 100){
   console.log(appData.moneyPerDay);
    alert("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    alert('средний уровень достатка');
} else if(appData.moneyPerDay >= 2000){
    alert('Высокий уровень достатка');
} else {
    alert('Произошла ошибка');  
}
}
detectLevel();


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert('Доход c Вашего депозита: ' + appData.monthIncome);
  }
}
  checkSavings();

  function chooseOptExpenses(){
    optionalExpenses = {};  
    for(var i = 1; i < 4; i++){
        var d = prompt( "Статья необязательных расходов?", "");
        optionalExpenses[i] = d;
      }
    }
  chooseOptExpenses(); 