var data = require('../data.json');
var fs   = require('fs');
fs.writeFile('js/data.min.json', JSON.stringify(data), 'utf8',function(){
    console.log("\n  → 压缩成功！  ")
});