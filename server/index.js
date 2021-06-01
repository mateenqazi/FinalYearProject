const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt');
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const medicineRoutes = require('./routes/medicine')
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();
mongoose.connect('mongodb://localhost:27017/medicine', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function (err, db) {
    if (err) throw err
    else {
        console.log('database connected')
    }
})

app.use(express.static('uploads'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
// app.get('/', async (req, res) => {

//     var request = require("request"),
//         cheerio = require("cheerio")
//     let users = []

//     request('https://www.google.com/search?q=dawaai+mucaine', function (error, response, body) {
//         console.error('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         //console.log('body:', body); // Print the HTML for the Google homepage.
//         const $ = cheerio.load(body);
//         console.log('$', $('#center_col'))
//         res.send(JSON.stringify($('#center_col').text()))
//     });
// })
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/medicine', medicineRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})