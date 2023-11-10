"use strict"
{
  let n = 1000;
  let num = 0;

    for(; ; n/=2) {
        console.log(n);
        if(n < 50) break;
        num++;
    }
    console.log(num);
}