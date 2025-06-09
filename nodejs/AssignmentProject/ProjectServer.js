
let express = require("express");
let path = require("path");
let bodyParser = require('body-parser');
let app = express();
let port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "login.html"));
});
app.get('/main',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "main.html"));
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("로그인 요청: ", username, password);
  if (username==="admin" && password === "1234"){
    res.redirect('/main');
  }
  else{
    res.send("로그인 실패! 아이디나 비밀번호를 확인하세요.");
  }
});
app.listen(port, function(){
    console.log(`Server Running at http://localhost:${port}`);
});