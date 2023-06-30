const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secretKey } = require('./config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

// Подключение к базе данных или другому месту, где вы храните информацию о пользователях
// const db = require('./db');

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      // Вместо db.getUserById() используйте соответствующую функцию для получения пользователя из базы данных
      const user = await db.getUserById(payload.userId);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);