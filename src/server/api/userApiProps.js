const userApiList = {
    '/200': {
        get: {
            url: {
                list: 'https://httpbin.org/anything',
                name: 'https://httpbin.org/anything'
            }
        },
        post: {
            url: {
                list: 'https://httpbin.org/anything',
                name: 'https://httpbin.org/anything'
            }
        }
    },
    '/404': {
        get: {
            url: 'https://httpbin.org/status/404'
        },
        post: {
            url: 'https://httpbin.org/status/404'
        }
    }
};

module.exports = userApiList;
