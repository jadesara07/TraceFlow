const {
    readFile,
    writeFile,
} = require('./fileHandler');

const saveMetrics = async (metric) => {
    const metrics = await readFile('./observability/metrics.json');
    metrics.push(metric);
    await writeFile('./observability/metrics.json', metrics);
};

module.exports = saveMetrics;