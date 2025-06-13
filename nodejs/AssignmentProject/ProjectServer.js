let express = require("express");
let path = require("path");
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();

let dot = ['.', '..', '...'];
let i = 0;
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

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "login.html"));
});
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "main.html"));
});
app.get('/rooms',(req, res)=>{
  const data=fs.readFileSync("rooms.json","utf-8")
  res.json(JSON.parse(data));
});
app.get('/main', (req,res)=>{
  res
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("로그인 요청: ", username, password);
  
  const users = readUsers();
  const found = users.find(u => u.username === username && u.password === password);
  
  if (found) {
    res.send({ success: true, message: "로그인 성공!" });
  } else {
    res.send({ success: false, message: "인증실패: 아이디나 비밀번호를 확인하세요!" });
  }
});


app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log("회원가입 요청: ", username, password);

  const users = readUsers();
  const found = users.find(u => u.username === username);

  let startsWithCapital = false;
  let isOnlyAlphaNum = true;

  if (password.length > 0) {
    if (password[0] >= 'A' && password[0] <= 'Z') {
      startsWithCapital = true;
    }

    for (let i = 0; i < password.length; i++) {
      if (!((password[i] >= 'A' && password[i] <= 'Z') ||
        (password[i] >= 'a' && password[i] <= 'z') ||
        (password[i] >= '0' && password[i] <= '9'))) {
        isOnlyAlphaNum = false;
        break;
      }
    }
  }
  if (found) {
    res.send({ success: false, message: "아이디 이슈: 이미 존재하는 아이디입니다." });
  } else if (!username || username.trim() === '') {
    res.send({ success: false, message: "아이디 이슈: 빈 문자열은 불가합니다." });
  } else if (!startsWithCapital) {
    res.send({ success: false, message: "비밀번호 이슈: 첫 글자는 대문자여야 합니다." });
  } else if (!isOnlyAlphaNum) {
    res.send({ success: false, message: "비밀번호 이슈: 영문자 또는 숫자만 가능합니다." });
  } else if (password.length < 8) {
    res.send({ success: false, message: "비밀번호 이슈: 비밀번호는 최소 8자리 이상이어야 합니다." });
  } else {
    users.push({ username, password });
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    res.send({ success: true, message: "회원가입 성공!" });
  }
});


app.listen(port, function () {
  let dots = setInterval(() => {
    process.stdout.write('\r서버 구동 중' + dot[i % dot.length] + '  ')
    i++;
  }, 500);
  console.log(`http://localhost:${port}/login`);
});