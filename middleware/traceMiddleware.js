const saveTrace = require('../utils/traceCollector');

const traceMiddleware = async (req, res, next) => {
    const trace = {
        traceId: Date.now(),
        method: req.method,
        route: req.url,
        startTime: new Date().toISOString(),
    };
    console.log('Trace started:', trace);
    res.on('finish', async () => {
        trace.endTime = new Date().toISOString();
        trace.statusCode = res.statusCode;
        await saveTrace(trace);
        console.log('Trace ended:', trace);
    });
    next();
};

module.exports = traceMiddleware;