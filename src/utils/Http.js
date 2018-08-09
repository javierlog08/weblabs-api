
const express = require('express');


/**
 * HttpObject base on expressjs -> www.expressjs.com
 * Yoy should to use this for all the web workflows
 * @type {*|Function}
 */
Http = function() {}

Http.router = express();

module.exports = Http;