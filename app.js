const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/static'));
//router 분리
const userRouter = require('./routes/user');
app.use('/user', userRouter);
//오류처리
app.use('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
