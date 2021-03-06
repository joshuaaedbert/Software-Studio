const express = require('express');

const postRouter = require('./routers/posts.js');
const errorHandler = require('./middleware/error-handler.js');

const app = express();

app.use(express.static('build', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));

app.use('/api', postRouter);

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});