const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started!'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => 
    res.render('home', { names: ['Khoa', 'Pham', 'Pho', 'Node'] })
);
