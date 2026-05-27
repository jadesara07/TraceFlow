const {
    readFile,
    writeFile,
} = require('./fileHandler');

const saveTrace = async (trace) => {
    const traces = await readFile('./observability/traces.json');
    traces.push(trace);
    await writeFile('./observability/traces.json', traces);
};

module.exports = saveTrace;