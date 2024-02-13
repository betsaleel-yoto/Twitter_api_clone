const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');

const secretKey = 'secret';

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
};

passport.use(new JWTStrategy(jwtOptions, function(jwtPayload, done) {
    // Vérifier si l'utilisateur existe en fonction de jwtPayload
    // Par exemple, vous pouvez vérifier en utilisant une base de données
    if (jwtPayload.user) {
        return done(null, jwtPayload.user);
    } else {
        return done(null, false);
    }
}));

// Middleware d'authentification Passport.js
const authenticateJWT = passport.authenticate('jwt', { session: false });

module.exports = { authenticateJWT };

