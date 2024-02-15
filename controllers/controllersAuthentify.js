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
    if (jwtPayload.user) {
        return done(null, jwtPayload.user);
    } else {
        return done(null, false);
    }
}));

const authenticateJWT = passport.authenticate('jwt', { session: false });

module.exports = { authenticateJWT };

