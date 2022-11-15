const express = require('express');
const app = express ();
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(__dirname + '/public'));

// app.use(express.json());

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

let data = {
    location: ['Chicago', 'Boston', 'Washington'],
    language: ['JavaScript', 'Phyton', 'Cobol']
    }


app.get('/', (request, response) => {
    response.render('index', {data})
})

app.post('/result', (request,response) => {
    
    const {userName, userLocation, userFavoriteLanguage, userComment} = request.body
    response.render('result', {resultado: {userName, userLocation, userFavoriteLanguage, userComment}})
})

let port = 8000

app.listen(port);
console.log(`server is listening on port ${port}`)


