const fs = require('fs/promises');

const saveLog = async (message) =>{
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    await fs.appendFile('./observability/logs.txt', logMessage, 'utf-8');
};

module.exports = saveLog;