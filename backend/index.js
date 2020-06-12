'use strcit'

const mongoose = require('mongoose');

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = '3000';
const http = require('http');
const server = http.createServer(app);
var io = require('socket.io').listen(server);


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));


io.on('connection', (socket) => {
    console.log("Connected");

    socket.on('disconnect', () => {
        console.log("Disconnected");
    });
});
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('MongoDB Connected!!');
        //Creación del servidor y listener de peticiones HTTP
        server.listen(port, () => {
            console.log('Server running on http://localhost:',port);
        });
    });