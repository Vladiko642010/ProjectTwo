let btnStart = document.getElementById('start'),//кнопка старт начать рассчет
bgtval = document.getElementsByClassName('budget-value'),//доступ к значениям 
dabuval = document.getElementsByClassName('daybudget-value'),//указанным в строке 
lvlval = document.getElementsByClassName('level-value'),
expval = document.getElementsByClassName('expenses-value'),
incval = document.getElementsByClassName('income-value'),
msavval = document.getElementsByClassName('monthsavings-value'), 
ysavval = document.getElementsByClassName('yearsavings-value'),
inpt = document.getElementsByClassName('expenses-item'),//поля ввода
btn = document.getElementsByTagName('button'),//промежуточная перем для кнопок
apprOne = btn[0],//"утвердить" первая кнопка
apprTwo = btn[1],//"утвердить" вторая кнопка
calc = btn[2],//кнопка "рассчитать"
opt = document.querySelectorAll('.optionalexpenses-item'),//поля ввода необязательных расходов
choin = document.querySelector('#income'),//поле ввода статьи дохода
chebox = document.querySelector('#savings'),//поле ввода накоплений
ssum = document.querySelector('#sum'),// поле ввода суммы
choper = document.querySelector('#percent'),//поле ввода процентов
yeval = document.querySelector('.year-value'),//поле ввода год
monval = document.querySelector('.month-value'),//поле ввода месяц
daval = document.querySelector('.day-value');//поле ввода день

