
let express = require("express"); // Express 모듈을 불러옴
let app = express();              // Express 애플리케이션 객체 생성
app.use(function(request, response){ // 모든 요청에 대해 실행되는 미들웨어 등록
    response.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        <meta charset="UTF-8">
        </head>
        <body>
        <h1>홈페이지
        </body>
        </html>`);
});

app.listen(54222, function(){      // 54222 포트에서 서버 실행
    console.log("Server Running at http://127.0.0.1:54222"); // 서버 실행 메시지 출력
});
