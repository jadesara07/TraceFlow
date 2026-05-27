const express = require('express');
const app = express();
const productRoutes = require('./routes/productRutes');
const userRoutes = require('./routes/userRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const metricsMiddleware = require('./middleware/metricsMiddleware');
const traceMiddleware = require('./middleware/traceMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const port = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.use(metricsMiddleware);
app.use(traceMiddleware);
app.use(productRoutes);
app.use(userRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
