
let express = require("express"); // Express 모듈을 불러옴
let path = require("path");
let app = express();              // Express 애플리케이션 객체 생성
let port=3000;

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "study.html"));
});

app.listen(port, function(){      // 54222 포트에서 서버 실행
    console.log(`Server Running at http://localhost:${port}`); // 서버 실행 메시지 출력
});
