
let express = require("express"); // Express 모듈을 불러옴
let app = express();              // Express 애플리케이션 객체 생성
let port=3000
// app.get('/',(req, res)=>{ // 모든 요청에 대해 실행되는 미들웨어 등록
//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
//         <meta charset="UTF-8">
//         </head>
//         <body>
//         <h1>홈페이지</h1>
//         </body>
//         </html>`);
// });
app.get('/',(req, res, next)=>{
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        <meta charset="UTF-8">
        <base href="http://localhost:3000/">
        </head>
        <body>
        <a href='team'>홈페이지</a>
        </body>
        </html>`);
        next();
});
app.get('/',(req, res)=>{
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        <meta charset="UTF-8">
        <base href="http://localhost:3000/">
        </head>
        <body>
        <a href='team'>홈페이지</a>
        </body>
        </html>`);
});
app.get('/team',(req,res)=>{
    res.send({'Dog':"woof"})
});

app.listen(port, function(){      // 54222 포트에서 서버 실행
    console.log(`Server Running at http://localhost:${port}`); // 서버 실행 메시지 출력
});
