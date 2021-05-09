const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt');
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const dotenv = require('dotenv');
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
app.get('/', (req, res) => {
    console.log('hello')
    res.send('hello')
})
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
// app.use('/driver', dirverRoutes);
// app.use('/', ordersRoutes);
app.post('/sign-up', async (req, res) => {
    const { email, user_name, password, contact_number } = req.body
    const saltRounds = 10;

    const user = await UserModel.findOne({ email: email })
    if (user) {
        return res.send('Email Already Exist')
    }
    else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
            });
        });
        await bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err)
                    throw err;
                else {
                    const user = await UserModel.create({ email: email, user_name: user_name, password: hash, contact_number: contact_number })
                    return res.send(user)
                }
            })
        })
    }
})

// app.post('/auth/login', async (req, res) => {
//     const { email, password } = req.body
//     const user = await UserModel.findOne({ email: email })
//     console.log('hhdhdhhdhdhd')
//     if (!user) {
//         return res.send('User Not Found')
//     }
//     else {
//         bcrypt
//             .compare(password, user.password)
//             .then(isMatch => {
//                 if (isMatch) {
//                     return res.send({ user: user, isAuth: true })
//                 }
//                 else {
//                     return res.send("Password does not match")
//                 }
//             })
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})