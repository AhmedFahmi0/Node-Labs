const http = require("http")
const fs=require("fs")
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let operation=req.url.split("/")
        let result=0;
        switch(operation[1]){
            case "add":
                for(let i=2;i<operation.length;i++){
                    result+=Number(operation[i])
                }
                fs.appendFileSync("./operation.txt",`sum:${result}\n`)
                res.write(`<h1>sum: ${result}</h1>`)
                break;
            case "multiply":
                result=1;
                for(let i=2;i<operation.length;i++){
                    result*=Number(operation[i])
                }
                fs.appendFileSync("./operation.txt",`multiply: ${result}\n`)
                res.write(`<h1>multiply: ${result}</h1>`)
                break;
            case "sub":
                result=operation[2]
                for(let i=3;i<operation.length;i++){
                    result-=Number(operation[i])
                }
                fs.appendFileSync("./operation.txt",`subtract: ${result}\n`)
                res.write(`<h1>subtract: ${result}</h1>`)
                break;
            case "divide":
                result=operation[2]
                for(let i=3;i<operation.length;i++){
                    result=result/Number(operation[i]);
                }
                fs.appendFileSync("./operation.txt",`divide: ${result}\n`)
                res.write(`<h1>divide: ${result}</h1>`)
                break;

        }
    }
    res.end();

})
    .listen(7000,()=>{console.log("listenning on port 7000")})

