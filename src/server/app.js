const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Import and Set Nuxt.js options
const config = require('../../nuxt.config.js');

const billApi = require('./api/bill');
const userApi = require('./api/user');

app.use('/api/bill', billApi);
app.use('/api/user', userApi);

config.dev = !(process.env.NODE_ENV === 'LIVE');

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const {
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000
    } = nuxt.options.server;

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    app.use(function(err, req, res, next) {
        // set locals, only providing error in DEV
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'DEV' ? err : {};

        console.log(err);
        // render the error page
        // res.status(err.status || 500);
        // res.render('error');
    });

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}
start();

module.exports = app;
