'use strict';

module.exports = function (app: any) {
    app.use('/api/buy', require('./routes/buy'));
};
