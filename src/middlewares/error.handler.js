const logTracker = (err, req, res, next) => {

    console.log('Log Tracker');

    console.error(err);
    next(err);
}

const errorHandler = (err, req, res, next) => {

    console.log('Error Handler');

    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });

}

module.exports = { logTracker, errorHandler };
