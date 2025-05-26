
let express = require("express");
let path = require("path");
let app = express();
let port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "login.html"));
});
app.get('/main',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "main.html"));
});

app.listen(port, function(){
    console.log(`Server Running at http://localhost:${port}`);
});