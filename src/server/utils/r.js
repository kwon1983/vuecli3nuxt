const axios = require('axios');
const extend = require('object-extend');

async function send(req, res, url, method, opt) {
    let options = {
        url: url,
        method: method,
        headers: {
            'content-type': 'application/json',
            'user-agent': req.headers['user-agent']
        }
    };

    if(opt) {
        options = extend(options, opt);
    }

    let response = {};
    try {
        response = await axios(options);
    } catch(e) {
        let status = e.response.status;
        res.status(status);
        response.data = {
            status: status,
            message: e.message
        };
    }

    return response ? response.data : '';
}


async function get(req, res, url, opt) {
    let options = {
        params: req.query
    };

    if(opt) {
        options = extend(options, opt);
    }

    let response = await send(req, res, url, 'get', options);
    return response;
}

async function post(req, res, url, opt) {
    let options = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: req.body
    };

    if(opt) {
        options = extend(options, opt);
    }

    let response = await send(req, res, url, 'post', options);
    return response;
}


module.exports = {get: get, post: post};
