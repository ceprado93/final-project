const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")

const User = require("../models/user.model")

router.post('/signup', (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Contraseña insegura' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'El usuario ya existe' })
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Login error' }) : res.json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error saving user to DB' }))
        })
})





router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error authenticating user' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.json(theUser))

    })(req, res, next)
})



router.post('/logout', (req, res) => {
    req.logout()
    res.json({ message: 'Log out success!' });
})


router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.json(req.user) : res.status(403).json({ message: 'Unauthorized' }))


module.exports = router