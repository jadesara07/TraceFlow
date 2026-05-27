const saveLog = require('../utils/logger');

const loggerMiddleware = async (req, res, next) => {
    const message = `${req.method} ${req.url}`;
    console.log(message);
    await saveLog(message);
    next();
};

module.exports = loggerMiddleware;