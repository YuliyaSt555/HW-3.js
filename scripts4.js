"use strict"
{
let f = 5;
    sum = 0;

for (i = 1; i <= f; i++) {
    sum = 0;
for (let j=1; j <= i; j++) {
        sum += j;
    }
console.log('Сумма цифр в числе ' + i + ' = ' + sum);
}
console.log('');
}