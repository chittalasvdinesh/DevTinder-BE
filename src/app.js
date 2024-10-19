const express = require("express");
const { adminAuth, userAuth } = require('./middleware/auth')

const app = express();

//app.use will match all http methods
app.use('/test', (req, res, next) => {
    next()
    res.send('abc1 path from test route')
}, (req, res) => {
    res.send('xyz2 path from test route')
});

app.use('/admin', adminAuth);
app.post('/user/login', (req, res) => {
    res.send('User Login Successfully')
})
app.use('/user', userAuth, (req, res) => {
    res.send('List of users fetched')
})

app.get('/admin/getUsers', (req, res) => {
    throw new Error('ugxhew')
    res.send('User Info Sucessfully fetched')

})

app.get('/admin/deleteUsers', (req, res) => {
    res.send('User deleted sucessfully')

})

app.use('/', (err, req, res, next) => {
    if (err) {
        console.log(err,'Error Info')
        res.status(500).send('Something Went wrong')
    }
})


app.listen(8000, () => console.log('server running successful at 8000'))