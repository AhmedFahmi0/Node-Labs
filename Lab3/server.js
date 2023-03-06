const express = require("express");
const path = require("path")
const app = express();
const fs = require("fs");

let WelFileHTML = fs.readFileSync("./profile.html").toString();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
function pathJoin(urPath) { 
    return path.join(__dirname, urPath);
 }
 let PORT = process.env.PORT || "7000";

 app.get("/main.html",(req,res)=>{
    res.sendFile(pathJoin("./main.html"));
});
app.get("/style.css",(req,res)=>{
    res.sendFile(pathJoin("./style.css"));
});
app.get("/scipt.js",(req,res)=>{
    res.sendFile(pathJoin("./scipt.js"));
});
app.get("/contact.json",(req,res)=>{
    res.sendFile(pathJoin("./contact.json"));
});
app.get("/profile.html",(req,res)=>{
    res.sendFile(pathJoin("./profile.html"));
});
app.post("/profile.html",(req,res)=>{
        var name = req.body.name;
        var tel = req.body.mobile;
        var address = req.body.address;
        var email = req.body.mail;

        WelFileHTML = WelFileHTML.replace("{Name}",name).replace("{MoNum}",tel)
                                         .replace("{add}",address)
                                         .replace("{mail}",email)
        
       /* parsedData.nme = `${userName[1]}`;
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

            pathJoin("./profile.html") = pathJoin("./profile.html").replace("%40","@")
                                             .replace("%2B","")
                                             .replaceAll("+"," ")
        })*/
    res.send(WelFileHTML);
});

/*http.createServer((req,res)=>{
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
                break;
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
            })*/
            
      app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})




    
    //#endregion
/*}}).listen("7000", ()=>{console.log("http://localhost:7000")})*/