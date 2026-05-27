const saveLog = require('../utils/logger');

const errorMiddleware = async (err, req, res, next) => {
    console.error(err.message);
    await saveLog(`Error: ${err.message}`);
    res.status(500).json({ 
        success: false,
        error: err.message 
    });
};

module.exports = errorMiddleware;