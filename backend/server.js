import express from 'express';
import 'dotenv/config';
import createError from 'http-errors'
import bodyParser from 'body-parser';
import BlizzardInit from './routes/blizzard/index';

const app = express();

// TODO
// Need to create a routes folder and create some routes
// to send our api data to the front end of the app

const Blizzard = new BlizzardInit ({
    region: "us",
    locale: "en_US",
    key: process.env.BLIZZARD_CLIENT_ID,
    secret: process.env.BLIZZARD_CLIENT_SECRET,
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
  
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;