const saveMetric = require('../utils/metricsCollector');

const metricsMiddleware = async (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', async () => {
        const duration = Date.now() - startTime;
        const metric = {
            timestamp: new Date().toISOString(),
            method: req.method,
            route: req.url,
            duration,
            statusCode: res.statusCode,
        };
        console.log(metric);
        await saveMetric(metric);
    });
    next();
};

module.exports = metricsMiddleware;