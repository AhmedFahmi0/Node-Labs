const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("./main.html").toString();
let ProfileFileHTML = fs.readFileSync("./profile.html").toString();
let StyleCSS = fs.readFileSync("./style.css").toString();
let ScriptFile = fs.readFileSync("./scipt.js").toString();
let JSONFile = fs.readFileSync("./contact.json").toString();
//let myImage = fs.readFileSync("../ClientSide/2.jpg");
//let myIcon = fs.readFileSync("../ClientSide/favicon.ico");

var userName = "";

http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/main.html":
                     res.writeHead(200,"Ok",{"content-type":"text/html"})
                    res.write(MainFileHTML);
                break;
                case "/profile.html":
                    res.write(ProfileFileHTML);
                break;
                case "/style.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(StyleCSS)
                break;
                case "/scipt.js":
                    res.writeHead(300,"Hii",{"content-type":"text/javascript"})
                    res.write(ScriptFile)
                break;
                case "/contact.json":
                    res.writeHead(200,"ok",{"content-type":"application/json;"})
                    res.write(JSONFile)
                break;
               /* case "/favicon.ico":
                    res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                    res.write(myIcon)
                break;*/
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            // console.log(data)
            // console.log(data.toString())
            // res.write(MainFileHTML);
            userName = data.toString().split(/[=&]+/);
            // userName = data.toString();
            console.log(userName)
           
            const path = "./contact.json";
            const { writeFile, readFile } = require("fs");
            readFile(path, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(data)
    
            const parsedData = JSON.parse(data);
            
            parsedData.nme = `${userName[1]}`;
            parsedData.email = `${userName[3]}`;
            parsedData.mobile = `${userName[5]}`;
            parsedData.address = `${userName[7]}`;
            writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
                if (err) {
                    console.log("Failed to write updated data to file");
                    return;
                }
                console.log("Updated file successfully");
            });
            })});
            req.on("end",()=>{

                ProfileFileHTML = ProfileFileHTML.replace("%40","@")
                                                 .replace("%2B","")
                                                 .replaceAll("+"," ")
                                            
               res.write(ProfileFileHTML)
                res.end();
            })
            
      




    
    //#endregion
}}).listen("7000", ()=>{console.log("http://localhost:7000")})