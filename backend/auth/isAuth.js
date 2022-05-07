const jsonToken = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.get('Authorization').split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jsonToken.verify(token, 'supersecretkey');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const err = new Error('You are not logged in !');
    err.statusCode = 404;
    throw err;
  }

  next();
};
