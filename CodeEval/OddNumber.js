var result = [];

function judgeOdd(num)
{
    if(num % 2 !== 0) return num;
    return;
}

for (i=1; i < 100; i++)
{
    if(typeof judgeOdd(i) !== 'undefined')
        console.log(i);
}