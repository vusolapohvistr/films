const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const http = require('http');
const cors = require('cors');

const apiRouter = require('./routes/api-router');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public/client/build')));

app.use('/api', apiRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/client/build", "index.html"));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});
app.use(function(req, res, next) {
    next(createError(404));
});

const server = http.createServer(app);
server.listen(3030, () => console.log('Server is up on port 3030'));

