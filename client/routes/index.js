const homeRouter = require('./api/homeRouter.js');
const registrationRouter = require('./api/registrationRouter.js');
const guestsRouter = require('./api/guestsRouter.js');

module.exports = [
    homeRouter,
    registrationRouter,
    guestsRouter
];