let express = require("express");
let path = require("path");
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();

let dot=['.','..','...'];
let i =0;
let port = 3000;

function readUsers() {
  try {
    const raw = fs.readFileSync('user.json', 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "login.html"));
});
app.get('/main',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', "main.html"));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("로그인 요청: ", username, password);
  const users=readUsers()
  const found=users.find((u)=>{
    u.username===username&& u.password===password
  });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(" 회원가입 요청: ", username, password);
  senf
});

app.listen(port, function(){
  let dots = setInterval(()=>{
    process.stdout.write('\r서버 구동 중'+dot[i%dot.length]+'  ')
    i++;
  },500);
  console.log(`http://localhost:${port}/login`);
});