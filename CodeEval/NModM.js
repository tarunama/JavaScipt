var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line)
{
    if (line === "") return;
    
    var arr = line.split(',');
    
    console.log(arr[0] % arr[1]);
});