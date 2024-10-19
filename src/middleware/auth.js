const adminAuth= (req, res, next) => {
    console.log('Admin Auth checking')
    const token = 'xyz';
    const isAuthorized = token === 'xyz';
    if (!isAuthorized) {
        res.status(401).send('Your are not authorized To access')
    }
    else {
        next()
    }
}


const userAuth=  (req, res, next) => {
    console.log('User Auth checking..')
    const token = 'abc';
    const isAuthorized = token === 'xyz';
    if (!isAuthorized) {
        res.status(401).send('Your are not authorized To access')
    }
    else {
        next()
    }
}

module.exports={
    adminAuth,
    userAuth
}