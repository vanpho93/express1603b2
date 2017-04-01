const express = require('express');



const app = express();
app.listen(3000, () => console.log('Server started!'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => 
    res.render('home',{ 
            names: ['Khoa', 'Pham', 'Pho', 'Node'], 
            isAdmin: false 
        })
);

class Phim {
    constructor(name, id) {

    }
}

const arrPhim = [
    
];

app.get('/show', (req, res) => {
    res.render('phim', { mang: arrPhim });
});