// 整理 hosts
//将 host.txt 整理成 result_host.txt
var fs=require('fs');

var lineReader = require('line-reader');

var host_ip={};

//逐行读取
var ReadHost = function(filename){
    return new Promise(function(resolve, reject){
        lineReader.eachLine(filename, {encoding: 'utf8'},function(line, last) {
            var key,value,values;
            var res=line.split(' ');
            key=res[0];
            value=res[1];
            if(host_ip.hasOwnProperty(key)){
                values=host_ip[key];
                values.push(value);
                host_ip[key]=values;
            }else{
                values=[];
                values.push(value);
                host_ip[key]=values;
            }
            if(last){
                resolve(host_ip);
            }
        });
    });
}


//逐行写入文本

var WriteHost=function (writableStream,obj) {
    for (var key in obj ){
        var data=key;
        for(var value of obj[key]){
            data=data+' '+value;
        }
        console.log(data);
        writableStream.write(data+'\n');    
    }
};

ReadHost('host.txt', function(line) {
  console.log('line',line);
}).then(function(result) {
    console.log('result',result);
    var writableStream = fs.createWriteStream('result_host.txt');
    WriteHost(writableStream,result);
}).catch(function(err) {
  console.error(err);
});
