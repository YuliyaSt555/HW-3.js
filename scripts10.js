"use strict"
{
    let n = +prompt ('Введите произвольно целое число n');
    let nStr = String(n);
        a = 0;
        sum = 0;
        n2 = '';
        b = nStr.length - 1;
    
    for (let i = 0; i < nStr.length; i++) {
        console.log(nStr[i]);
        a++;
        sum += Number(nStr[i]);
    }
    console.log('Количество цифр в числе n - ' + a);
    console.log('Сумма цифр числа n - ' + sum);
    
    while (b >= 0) {
        n2 += nStr[b];
        b--;
    }
    n2 = Number(n2);
    
    console.log('Обратный порядок - ' + n2); 
}