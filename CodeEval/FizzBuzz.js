var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var arr = line.split(' ');
    
    var x = arr[0];
    var y = arr[1];
    var result = [];
    
    function divideX(val)
    {
        return val % x === 0;
    }
    
    function divideY(val)
    {
        return val % y === 0;
    }
    
    function Fizzbuzz(val)
    {
        if(divideX(val) && divideY(val)) return "FB";
        if(divideX(val)) return "F";
        if(divideY(val)) return "B";
        return val;
    }
    
    var range = arr[2];
    for (i=1; i <= range; i++)
    {
        result.push(Fizzbuzz(i));
    }
    
    console.log(result.join(' ').toString());
});