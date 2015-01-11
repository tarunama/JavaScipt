var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    if (line === "") return;
    
    var arr = line.split(":");
    var numArr = arr[0].trim().split(" ");
    var seprate = arr[1].trim().split(",");
    
    for (var i = 0, len = seprate.length; i < len; i++)
    {
        var command = seprate[i].split("-");
        var tmp = numArr[command[0].trim()];
        numArr[command[0].trim()] = numArr[command[1].trim()];
        numArr[command[1].trim()] = tmp;
    }
    
    console.log(numArr.join(" "));
});