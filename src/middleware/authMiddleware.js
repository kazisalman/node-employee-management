// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const passwordUtil = require('../utils/passwordUtil');

const authMiddleware = (req, res, next) => {
  // Extract token from headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Validate JWT
    const decoded = passwordUtil.validateJWT(token);

    // Attach user info to request object (optional)
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Handle invalid or expired token
    res.status(403).json({ message: 'Invalid or expired token.', error: err.message });
  }
};

module.exports = authMiddleware;
